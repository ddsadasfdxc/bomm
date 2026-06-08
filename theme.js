(function() {
    var btn = document.getElementById('themeToggle');
    if (!btn) return;

    var saved = localStorage.getItem('theme');

    if (saved === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        btn.innerHTML = '🌙';
    } else {
        document.documentElement.removeAttribute('data-theme');
        btn.innerHTML = '☀️';
    }

    btn.addEventListener('click', function() {
        var isLight = document.documentElement.getAttribute('data-theme') === 'light';
        if (isLight) {
            document.documentElement.removeAttribute('data-theme');
            btn.innerHTML = '☀️';
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            btn.innerHTML = '🌙';
            localStorage.setItem('theme', 'light');
        }
    });
})();
