(function() {
    // ================================
    // THEME TOGGLE
    // ================================
    var themeBtn = document.createElement('button');
    themeBtn.className = 'theme-toggle';
    themeBtn.innerHTML = '🌙';
    document.body.appendChild(themeBtn);
    
    themeBtn.addEventListener('click', function() {
        var isLight = document.documentElement.getAttribute('data-theme') === 'light';
        if (isLight) {
            document.documentElement.removeAttribute('data-theme');
            themeBtn.innerHTML = '☀️';
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            themeBtn.innerHTML = '🌙';
            localStorage.setItem('theme', 'light');
        }
    });
    
    // Init theme
    var saved = localStorage.getItem('theme');
    if (saved === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        themeBtn.innerHTML = '🌙';
    } else if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.removeAttribute('data-theme');
        themeBtn.innerHTML = '☀️';
    }

    // ================================
    // NAVIGATION
    // ================================
    var navItems = document.querySelectorAll('.nav-item');
    var sections = document.querySelectorAll('.section');

    navItems.forEach(function(item) {
        item.addEventListener('click', function() {
            var targetId = this.getAttribute('data-section');
            
            // Update nav active state
            navItems.forEach(function(nav) { nav.classList.remove('active'); });
            this.classList.add('active');
            
            // Show target section
            sections.forEach(function(section) {
                section.classList.remove('active');
                if (section.id === targetId) {
                    section.classList.add('active');
                    // Trigger animations
                    setTimeout(function() {
                        initScrollAnimations();
                    }, 100);
                }
            });
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // ================================
    // HERO BUTTONS NAVIGATION
    // ================================
    document.querySelectorAll('.hero-buttons a').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var sectionId = this.getAttribute('href').replace('#', '');
            
            // Update nav
            navItems.forEach(function(nav) { nav.classList.remove('active'); });
            document.querySelector('.nav-item[data-section="' + sectionId + '"]').classList.add('active');
            
            // Show section
            sections.forEach(function(section) {
                section.classList.remove('active');
                if (section.id === sectionId) {
                    section.classList.add('active');
                    setTimeout(function() {
                        initScrollAnimations();
                    }, 100);
                }
            });
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // ================================
    // SCROLL ANIMATIONS (AOS)
    // ================================
    function initScrollAnimations() {
        var animatedElements = document.querySelectorAll('[data-aos]');
        
        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('aos-visible');
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        
        animatedElements.forEach(function(el) {
            observer.observe(el);
        });
    }

    // Initialize animations on load
    setTimeout(initScrollAnimations, 500);

    // ================================
    // PARALLAX EFFECT ON SCROLL
    // ================================
    var heroGlow = document.querySelector('.hero-glow');
    var floatingShapes = document.querySelectorAll('.shape');
    
    window.addEventListener('scroll', function() {
        var scrolled = window.pageYOffset;
        
        if (heroGlow) {
            heroGlow.style.transform = 'translate(-50%, -50%) translateY(' + (scrolled * 0.3) + 'px)';
        }
        
        floatingShapes.forEach(function(shape, index) {
            var speed = (index + 1) * 0.1;
            shape.style.transform = 'translateY(' + (scrolled * speed) + 'px)';
        });
    });

    // ================================
    // LOAD BLOG POSTS
    // ================================
    fetch('posts.json')
        .then(function(r) { return r.json(); })
        .then(function(posts) {
            var grid = document.getElementById('postGrid');
            if (!grid) return;
            
            posts.sort(function(a, b) { return new Date(b.date) - new Date(a.date); });
            
            grid.innerHTML = posts.map(function(post) {
                var date = new Date(post.date);
                var month = date.toLocaleDateString('en-US', { month: 'short' });
                var day = date.getDate();
                var year = date.getFullYear();
                
                return '<article class="card" data-aos>' +
                    '<div class="card-content">' +
                    '<span class="card-tag">' + post.tag + '</span>' +
                    '<h3 class="card-title">' + post.title + '</h3>' +
                    '<p class="card-text">' + post.content.substring(0, 100) + '...</p>' +
                    '<div class="card-footer"><span>' + month + ' ' + day + ', ' + year + '</span></div>' +
                    '</div>' +
                    '</article>';
            }).join('');
            
            // Re-init animations after posts load
            setTimeout(initScrollAnimations, 200);
        })
        .catch(function(err) {
            console.log('No posts found');
        });

    // ================================
    // CARD TILT EFFECT
    // ================================
    document.querySelectorAll('.card, .feature-card').forEach(function(card) {
        card.addEventListener('mousemove', function(e) {
            var rect = this.getBoundingClientRect();
            var x = e.clientX - rect.left;
            var y = e.clientY - rect.top;
            var centerX = rect.width / 2;
            var centerY = rect.height / 2;
            var rotateX = (y - centerY) / 10;
            var rotateY = (centerX - x) / 10;
            
            this.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });

    // ================================
    // PALETTE THEME SELECTOR
    // ================================
    var themes = {
        indigo: { accent:'#6366f1', hover:'#4f46e5', light:'rgba(99,102,241,0.1)', glow:'rgba(99,102,241,0.4)', gradient:'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%)' },
        rose:   { accent:'#f43f5e', hover:'#e11d48', light:'rgba(244,63,94,0.1)', glow:'rgba(244,63,94,0.4)', gradient:'linear-gradient(135deg, #f43f5e 0%, #ec4899 50%, #d946ef 100%)' },
        emerald:{ accent:'#10b981', hover:'#059669', light:'rgba(16,185,129,0.1)', glow:'rgba(16,185,129,0.4)', gradient:'linear-gradient(135deg, #10b981 0%, #14b8a6 50%, #06b6d4 100%)' },
        amber:  { accent:'#f59e0b', hover:'#d97706', light:'rgba(245,158,11,0.1)', glow:'rgba(245,158,11,0.4)', gradient:'linear-gradient(135deg, #f59e0b 0%, #f97316 50%, #ef4444 100%)' },
        sky:    { accent:'#0ea5e9', hover:'#0284c7', light:'rgba(14,165,233,0.1)', glow:'rgba(14,165,233,0.4)', gradient:'linear-gradient(135deg, #0ea5e9 0%, #6366f1 50%, #8b5cf6 100%)' },
        purple: { accent:'#a855f7', hover:'#9333ea', light:'rgba(168,85,247,0.1)', glow:'rgba(168,85,247,0.4)', gradient:'linear-gradient(135deg, #a855f7 0%, #d946ef 50%, #ec4899 100%)' },
        cyan:   { accent:'#06b6d4', hover:'#0891b2', light:'rgba(6,182,212,0.1)', glow:'rgba(6,182,212,0.4)', gradient:'linear-gradient(135deg, #06b6d4 0%, #0ea5e9 50%, #6366f1 100%)' }
    };

    var paletteBtn = document.createElement('button');
    paletteBtn.className = 'palette-btn';
    paletteBtn.title = 'Theme Colors';
    document.body.appendChild(paletteBtn);

    var panel = document.createElement('div');
    panel.className = 'palette-panel';
    panel.innerHTML =
        '<div class="palette-header"><span>Theme Colors 主题色</span><button class="palette-close" id="paletteClose">&times;</button></div>' +
        '<div class="palette-grid" id="paletteGrid"></div>';
    document.body.appendChild(panel);

    var grid = document.getElementById('paletteGrid');
    var currentTheme = localStorage.getItem('paletteTheme') || 'indigo';

    Object.keys(themes).forEach(function(name) {
        var swatch = document.createElement('div');
        swatch.className = 'palette-swatch' + (name === currentTheme ? ' active' : '');
        swatch.dataset.theme = name;
        swatch.style.background = themes[name].accent;
        swatch.addEventListener('click', function() {
            applyTheme(name);
            panel.classList.remove('show');
        });
        grid.appendChild(swatch);
    });

    function applyTheme(name) {
        var t = themes[name];
        if (!t) return;
        var root = document.documentElement;
        root.style.setProperty('--accent', t.accent);
        root.style.setProperty('--accent-hover', t.hover);
        root.style.setProperty('--accent-light', t.light);
        root.style.setProperty('--accent-glow', t.glow);
        root.style.setProperty('--gradient-accent', t.gradient);
        localStorage.setItem('paletteTheme', name);
        currentTheme = name;
        document.querySelectorAll('.palette-swatch').forEach(function(el) {
            el.classList.toggle('active', el.dataset.theme === name);
        });
    }

    if (currentTheme !== 'indigo') applyTheme(currentTheme);

    paletteBtn.addEventListener('click', function() {
        panel.classList.toggle('show');
    });

    document.getElementById('paletteClose').addEventListener('click', function() {
        panel.classList.remove('show');
    });

    document.addEventListener('click', function(e) {
        if (!panel.contains(e.target) && e.target !== paletteBtn) {
            panel.classList.remove('show');
        }
    });

})();