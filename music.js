(function() {
    // Inject music widget HTML
    var widget = document.createElement('div');
    widget.className = 'music-widget';
    widget.innerHTML = 
        '<div class="music-panel" id="musicPanel">' +
            '<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width="330" height="90" src="https://music.163.com/outchain/player?type=0&id=3779629&auto=0&height=90" style="width: 100%; height: 90px; display: block;"></iframe>' +
        '</div>' +
        '<button class="music-btn" id="musicBtn" title="Music Player">🎵</button>';
    document.body.appendChild(widget);

    var btn = document.getElementById('musicBtn');
    var panel = document.getElementById('musicPanel');

    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        var isActive = panel.classList.contains('show');
        if (isActive) {
            panel.classList.remove('show');
            btn.classList.remove('active');
        } else {
            panel.classList.add('show');
            btn.classList.add('active');
        }
    });

    document.addEventListener('click', function(e) {
        if (!widget.contains(e.target) && panel.classList.contains('show')) {
            panel.classList.remove('show');
            btn.classList.remove('active');
        }
    });
})();
