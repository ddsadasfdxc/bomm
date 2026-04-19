(function () {
    var i18n = {
        en: {
            nav_home: 'Home', nav_blog: 'Blog', nav_games: 'Games', nav_tools: 'Tools',
            hero_kicker: 'PERSONAL SPACE',
            hero_title_zh: 'I sink into code, and still love the world.',
            hero_title_en: 'I code, and I love the world.',
            hero_desc: 'A bilingual space for writing, building, and playing.',
            hero_cta: 'Enter Blog',
            blog_title: 'Blog', blog_desc: 'Thoughts, stories and ideas.', blog_new: 'New Post',
            games_title: 'Games', games_desc: 'Mini games to pass the time.',
            games_2048_desc: 'Slide and merge tiles to reach 2048.',
            games_snake_desc: 'Classic snake game. Eat and grow.',
            games_memory_desc: 'Flip cards and find matching pairs.',
            games_typing_desc: 'Test how fast you can type.',
            tools_title: 'Tools', tools_desc: 'Handy utilities for daily use.',
            tools_timer: 'Pomodoro Timer', tools_timer_desc: 'Focus timer with work and break cycles.',
            tools_password: 'Password Generator', tools_password_desc: 'Generate strong, random passwords instantly.',
            tools_color: 'Color Picker', tools_color_desc: 'Pick colors and copy HEX, RGB values.',
            tools_converter: 'Unit Converter', tools_converter_desc: 'Convert between common measurement units.',
            compose_title: 'Write a new post',
            compose_title_ph: 'Post title...',
            compose_content_ph: "What's on your mind...",
            compose_publish: 'Publish',
            compose_token_hint: 'Enter your GitHub Personal Access Token (repo permission required). Stored locally only.',
            compose_save_token: 'Save Token',
            color_title: 'Theme Color', color_custom: 'Custom',
            footer_text: 'Built with care \u00b7 2026',
            coming_soon: 'Coming soon!',
            opening: 'Opening: '
        },
        zh: {
            nav_home: '\u9996\u9875', nav_blog: '\u535a\u5ba2', nav_games: '\u6e38\u620f', nav_tools: '\u5de5\u5177',
            hero_kicker: '\u4e2a\u4eba\u7a7a\u95f4',
            hero_title_zh: '\u6211\u6c89\u6eba\u4ee3\u7801\uff0c\u4e5f\u70ed\u7231\u4e16\u754c\u3002',
            hero_title_en: 'I code, and I love the world.',
            hero_desc: '\u4e00\u4e2a\u53ef\u4ee5\u5199\u4f5c\u3001\u521b\u9020\u548c\u6e38\u73a9\u7684\u53cc\u8bed\u7a7a\u95f4\u3002',
            hero_cta: '\u8fdb\u5165\u535a\u5ba2',
            blog_title: '\u535a\u5ba2', blog_desc: '\u601d\u7ef4\u3001\u6545\u4e8b\u4e0e\u7075\u611f', blog_new: '\u53d1\u5e03\u63a8\u6587',
            games_title: '\u6e38\u620f', games_desc: '\u5c0f\u6e38\u620f\uff0c\u6253\u53d1\u65f6\u95f4',
            games_2048_desc: '\u6ed1\u52a8\u5408\u5e76\u65b9\u5757\uff0c\u76ee\u6807\u8fbe\u5230 2048',
            games_snake_desc: '\u7ecf\u5178\u8d2a\u5403\u86c7\uff0c\u5403\u5f97\u8d8a\u591a\u8d8a\u957f',
            games_memory_desc: '\u7ffb\u724c\u627e\u914d\u5bf9\uff0c\u8003\u9a8c\u8bb0\u5fc6\u529b',
            games_typing_desc: '\u6d4b\u8bd5\u4f60\u7684\u6253\u5b57\u901f\u5ea6',
            tools_title: '\u5de5\u5177', tools_desc: '\u65e5\u5e38\u5b9e\u7528\u5c0f\u5de5\u5177',
            tools_timer: '\u756a\u8304\u949f', tools_timer_desc: '\u4e13\u6ce8\u5de5\u4f5c\u4e0e\u4f11\u606f\u5faa\u73af\u8ba1\u65f6\u5668',
            tools_password: '\u5bc6\u7801\u751f\u6210\u5668', tools_password_desc: '\u5373\u65f6\u751f\u6210\u5f3a\u5bc6\u7801',
            tools_color: '\u53d6\u8272\u5668', tools_color_desc: '\u9009\u53d6\u989c\u8272\uff0c\u590d\u5236 HEX\u3001RGB \u503c',
            tools_converter: '\u5355\u4f4d\u8f6c\u6362', tools_converter_desc: '\u5e38\u7528\u5355\u4f4d\u4e92\u6362',
            compose_title: '\u5199\u4e00\u7bc7\u65b0\u63a8\u6587',
            compose_title_ph: '\u63a8\u6587\u6807\u9898...',
            compose_content_ph: '\u5206\u4eab\u4f60\u7684\u60f3\u6cd5...',
            compose_publish: '\u53d1\u5e03',
            compose_token_hint: '\u8f93\u5165\u4f60\u7684 GitHub Personal Access Token\uff08\u9700\u8981 repo \u6743\u9650\uff09\uff0c\u4ec5\u5b58\u50a8\u5728\u672c\u5730',
            compose_save_token: '\u4fdd\u5b58 Token',
            color_title: '\u4e3b\u9898\u8272', color_custom: '\u81ea\u5b9a\u4e49',
            footer_text: '\u7528\u5fc3\u6784\u5efa \u00b7 2026',
            coming_soon: '\u5373\u5c06\u4e0a\u7ebf\uff01',
            opening: '\u6253\u5f00\uff1a'
        }
    };

    var lang = localStorage.getItem('lang') || 'zh';
    var accent = localStorage.getItem('accent') || '#10a37f';

    function setAccent(color) {
        accent = color;
        localStorage.setItem('accent', color);
        document.documentElement.style.setProperty('--accent', color);
        var r = parseInt(color.slice(1,3),16);
        var g = parseInt(color.slice(3,5),16);
        var b = parseInt(color.slice(5,7),16);
        document.documentElement.style.setProperty('--accent-light', 'rgba(' + r + ',' + g + ',' + b + ',0.08)');
        var darker = '#' + Math.max(0,r-20).toString(16).padStart(2,'0') + Math.max(0,g-20).toString(16).padStart(2,'0') + Math.max(0,b-20).toString(16).padStart(2,'0');
        document.documentElement.style.setProperty('--accent-hover', darker);
        document.querySelectorAll('.color-swatch').forEach(function(s) {
            s.classList.toggle('active', s.getAttribute('data-color') === color);
        });
        document.getElementById('customColor').value = color;
    }

    function applyLang() {
        var dict = i18n[lang];
        document.querySelectorAll('[data-i18n]').forEach(function(el) {
            var key = el.getAttribute('data-i18n');
            if (dict[key]) el.textContent = dict[key];
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
            var key = el.getAttribute('data-i18n-placeholder');
            if (dict[key]) el.placeholder = dict[key];
        });
        document.querySelector('.lang-label').textContent = lang === 'zh' ? 'EN' : '\u4e2d';
        document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    }

    function formatDate(dateStr) {
        var d = new Date(dateStr);
        var mEn = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var mZh = ['1\u6708','2\u6708','3\u6708','4\u6708','5\u6708','6\u6708','7\u6708','8\u6708','9\u6708','10\u6708','11\u6708','12\u6708'];
        var m = lang === 'zh' ? mZh[d.getMonth()] : mEn[d.getMonth()];
        return lang === 'zh' ? d.getFullYear() + '\u5e74' + m + d.getDate() + '\u65e5' : m + ' ' + d.getDate() + ', ' + d.getFullYear();
    }

    function renderPosts(posts) {
        var grid = document.getElementById('postGrid');
        grid.innerHTML = '';
        posts.sort(function(a, b) { return new Date(b.date) - new Date(a.date); });
        posts.forEach(function(post, i) {
            var card = document.createElement('article');
            card.className = 'card post-card';
            card.style.animationDelay = (i * 0.05) + 's';
            card.innerHTML = '<div class="card-tag">' + escapeHtml(post.tag) + '</div>' +
                '<h3 class="card-title">' + escapeHtml(post.title) + '</h3>' +
                '<p class="card-text">' + escapeHtml(post.content) + '</p>' +
                '<div class="card-footer"><span class="card-date">' + formatDate(post.date) + '</span><span class="card-arrow">\u2192</span></div>';
            grid.appendChild(card);
        });
    }

    function escapeHtml(str) {
        var div = document.createElement('div');
        div.appendChild(document.createTextNode(str));
        return div.innerHTML;
    }

    function loadPosts() {
        var localPosts = localStorage.getItem('local_posts');
        fetch('posts.json?' + Date.now())
            .then(function(r) { return r.json(); })
            .then(function(data) {
                var posts = data;
                if (localPosts) {
                    try {
                        var extra = JSON.parse(localPosts);
                        extra.forEach(function(p) {
                            if (!posts.find(function(e) { return e.id === p.id; })) {
                                posts.push(p);
                            }
                        });
                    } catch(e) {}
                }
                renderPosts(posts);
            })
            .catch(function() {
                if (localPosts) {
                    try { renderPosts(JSON.parse(localPosts)); } catch(e) {}
                }
            });
    }

    function switchSection(sectionId) {
        document.querySelectorAll('.nav-link').forEach(function (l) {
            l.classList.toggle('active', l.getAttribute('data-section') === sectionId);
        });
        document.querySelectorAll('.section').forEach(function (s) {
            s.classList.toggle('active', s.id === sectionId);
        });
    }

    // Init theme
    var saved = localStorage.getItem('theme');
    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    setAccent(accent);
    applyLang();
    loadPosts();

    // Theme toggle
    document.querySelector('.theme-toggle').addEventListener('click', function () {
        var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        if (isDark) {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });

    // Language toggle
    document.querySelector('.lang-toggle').addEventListener('click', function () {
        lang = lang === 'zh' ? 'en' : 'zh';
        localStorage.setItem('lang', lang);
        applyLang();
        loadPosts();
    });

    // Color panel
    var colorPanel = document.getElementById('colorPanel');
    document.getElementById('colorPickerBtn').addEventListener('click', function (e) {
        e.stopPropagation();
        colorPanel.classList.toggle('open');
    });
    document.getElementById('colorPanelClose').addEventListener('click', function () {
        colorPanel.classList.remove('open');
    });
    document.addEventListener('click', function (e) {
        if (!colorPanel.contains(e.target) && e.target.id !== 'colorPickerBtn' && !e.target.closest('#colorPickerBtn')) {
            colorPanel.classList.remove('open');
        }
    });
    document.querySelectorAll('.color-swatch').forEach(function (swatch) {
        swatch.addEventListener('click', function () { setAccent(this.getAttribute('data-color')); });
    });
    document.getElementById('customColor').addEventListener('input', function () { setAccent(this.value); });

    // Nav
    document.querySelectorAll('.nav-link').forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            switchSection(this.getAttribute('data-section'));
        });
    });

    var enterBlogBtn = document.getElementById('enterBlogBtn');
    if (enterBlogBtn) {
        enterBlogBtn.addEventListener('click', function () {
            switchSection('blog');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Compose
    var composeEl = document.getElementById('postCompose');
    var settingsEl = document.getElementById('composeSettings');
    document.getElementById('newPostBtn').addEventListener('click', function () {
        composeEl.classList.toggle('open');
        if (composeEl.classList.contains('open')) {
            settingsEl.style.display = localStorage.getItem('gh_token') ? 'none' : 'block';
        }
    });
    document.getElementById('composeClose').addEventListener('click', function () {
        composeEl.classList.remove('open');
    });
    document.getElementById('saveTokenBtn').addEventListener('click', function () {
        var token = document.getElementById('githubTokenInput').value.trim();
        if (token) {
            localStorage.setItem('gh_token', token);
            settingsEl.style.display = 'none';
        }
    });

    // Publish
    document.getElementById('publishBtn').addEventListener('click', function () {
        var title = document.getElementById('postTitleInput').value.trim();
        var content = document.getElementById('postContentInput').value.trim();
        var tag = document.getElementById('postTagSelect').value;
        if (!title || !content) return;

        var token = localStorage.getItem('gh_token');
        if (!token) {
            settingsEl.style.display = 'block';
            return;
        }

        var btn = this;
        btn.disabled = true;
        btn.textContent = lang === 'zh' ? '\u53d1\u5e03\u4e2d...' : 'Publishing...';

        var repo = 'ddsadasfdxc/bomm';
        var path = 'posts.json';
        var apiUrl = 'https://api.github.com/repos/' + repo + '/contents/' + path;

        fetch(apiUrl, {
            headers: { 'Authorization': 'token ' + token, 'Accept': 'application/vnd.github.v3+json' }
        })
        .then(function(r) { return r.json(); })
        .then(function(data) {
            var posts = [];
            try { posts = JSON.parse(atob(data.content)); } catch(e) {}
            var newPost = {
                id: Date.now(),
                title: title,
                content: content,
                tag: tag,
                date: new Date().toISOString().split('T')[0]
            };
            posts.push(newPost);
            var contentB64 = btoa(unescape(encodeURIComponent(JSON.stringify(posts, null, 2))));

            return fetch(apiUrl, {
                method: 'PUT',
                headers: { 'Authorization': 'token ' + token, 'Accept': 'application/vnd.github.v3+json', 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: 'post: ' + title, content: contentB64, sha: data.sha })
            });
        })
        .then(function(r) { return r.json(); })
        .then(function() {
            btn.disabled = false;
            btn.textContent = i18n[lang].compose_publish;
            document.getElementById('postTitleInput').value = '';
            document.getElementById('postContentInput').value = '';
            composeEl.classList.remove('open');
            loadPosts();
        })
        .catch(function() {
            btn.disabled = false;
            btn.textContent = i18n[lang].compose_publish;
            var localPosts = localStorage.getItem('local_posts');
            var posts = localPosts ? JSON.parse(localPosts) : [];
            posts.push({
                id: Date.now(),
                title: title,
                content: content,
                tag: tag,
                date: new Date().toISOString().split('T')[0]
            });
            localStorage.setItem('local_posts', JSON.stringify(posts));
            loadPosts();
            composeEl.classList.remove('open');
        });
    });

    // Games & tools
    document.querySelectorAll('.game-card, .tool-card').forEach(function (card) {
        card.addEventListener('click', function () {
            var name = this.getAttribute('data-game') || this.getAttribute('data-tool');
            alert(i18n[lang].coming_soon + ' (' + name + ')');
        });
    });

    // Particles
    var canvas = document.getElementById('particles');
    var ctx = canvas.getContext('2d');
    var particles = [];
    var mouseX = -1000, mouseY = -1000;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    document.addEventListener('mousemove', function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function Particle() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.r = Math.random() * 2 + 0.5;
    }

    for (var i = 0; i < 60; i++) particles.push(new Particle());

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        var dotColor = isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.06)';
        var lineColor = isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.02)';

        particles.forEach(function (p) {
            var dx = mouseX - p.x;
            var dy = mouseY - p.y;
            var dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 120) {
                p.vx -= dx * 0.00005;
                p.vy -= dy * 0.00005;
            }
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = dotColor;
            ctx.fill();
        });

        for (var i = 0; i < particles.length; i++) {
            for (var j = i + 1; j < particles.length; j++) {
                var dx2 = particles[i].x - particles[j].x;
                var dy2 = particles[i].y - particles[j].y;
                var d = Math.sqrt(dx2 * dx2 + dy2 * dy2);
                if (d < 120) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = lineColor;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animateParticles);
    }
    animateParticles();
})();
