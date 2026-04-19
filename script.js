(function () {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    document.querySelector('.theme-toggle').addEventListener('click', function () {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        if (isDark) {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });

    document.querySelectorAll('.nav-link').forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            var sectionId = this.getAttribute('data-section');

            document.querySelectorAll('.nav-link').forEach(function (l) {
                l.classList.remove('active');
            });
            this.classList.add('active');

            document.querySelectorAll('.section').forEach(function (s) {
                s.classList.remove('active');
            });
            document.getElementById(sectionId).classList.add('active');
        });
    });

    document.querySelectorAll('.game-card, .tool-card').forEach(function (card) {
        card.addEventListener('click', function () {
            var name = this.getAttribute('data-game') || this.getAttribute('data-tool');
            alert(name + ' is coming soon!');
        });
    });

    document.querySelectorAll('.card:not(.game-card):not(.tool-card):not(.card-placeholder)').forEach(function (card) {
        card.addEventListener('click', function () {
            var title = this.querySelector('.card-title');
            if (title) {
                alert('Opening: ' + title.textContent);
            }
        });
    });
})();