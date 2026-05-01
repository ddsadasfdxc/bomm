(function() {
    // ================================
    // THEME TOGGLE
    // ================================
    var themeBtn = document.createElement('button');
    themeBtn.className = 'theme-toggle';
    themeBtn.innerHTML = '🌙';
    document.body.appendChild(themeBtn);
    
    themeBtn.addEventListener('click', function() {
        var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        if (isDark) {
            document.documentElement.removeAttribute('data-theme');
            themeBtn.innerHTML = '🌙';
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeBtn.innerHTML = '☀️';
            localStorage.setItem('theme', 'dark');
        }
    });
    
    // Init theme
    var saved = localStorage.getItem('theme');
    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.setAttribute('data-theme', 'dark');
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

})();