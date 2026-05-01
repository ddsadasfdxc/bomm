(function() {
    // Theme toggle
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
    
    // Navigation
    document.querySelectorAll('.hero-btns a, .nav-link').forEach(function(link) {
        link.addEventListener('click', function(e) {
            var section = this.getAttribute('data-section') || this.getAttribute('href').replace('#', '');
            
            document.querySelectorAll('.section').forEach(function(s) {
                s.classList.remove('active');
            });
            document.getElementById(section).classList.add('active');
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
    
    // Load blog posts
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
                
                return '<article class="card">' +
                    '<div class="card-tag" style="display:inline-block;padding:4px 12px;background:var(--accent-light);color:var(--accent);border-radius:20px;font-size:12px;margin-bottom:12px;">' + post.tag + '</div>' +
                    '<h3 class="card-title">' + post.title + '</h3>' +
                    '<p class="card-text">' + post.content.substring(0, 100) + '...</p>' +
                    '<div class="card-footer"><span>' + month + ' ' + day + '</span></div>' +
                '</article>';
            }).join('');
        });
})();