(function() {
    var PLAYLIST_ID = '12675557343';
    var PROXY = 'https://corsproxy.io/?';

    var songs = [];
    var currentIndex = -1;
    var audio = null;
    var isPlaying = false;
    var isLoadingTracks = false;

    var widget = document.createElement('div');
    widget.className = 'music-widget';
    widget.innerHTML =
        '<div class="music-panel" id="musicPanel">' +
            '<div class="music-panel-inner" id="musicInner">' +
                '<div class="music-header">' +
                    '<img class="music-cover" id="musicCover" src="" alt="cover">' +
                    '<div class="music-header-info">' +
                        '<div class="music-playlist-name" id="playlistName">My Playlist</div>' +
                        '<div class="music-song-count" id="songCount">0 songs</div>' +
                    '</div>' +
                '</div>' +
                '<div class="music-list-container">' +
                    '<div class="music-list" id="musicList"></div>' +
                '</div>' +
                '<div class="music-player-bar" id="playerBar">' +
                    '<div class="music-progress">' +
                        '<span class="music-time" id="timeCurrent">0:00</span>' +
                        '<div class="music-progress-bar" id="progressBar">' +
                            '<div class="music-progress-fill" id="progressFill"></div>' +
                        '</div>' +
                        '<span class="music-time" id="timeTotal">0:00</span>' +
                    '</div>' +
                    '<div class="music-controls">' +
                        '<button class="mc-btn" id="prevBtn" title="Previous">⏮</button>' +
                        '<button class="mc-btn mc-play" id="playBtn" title="Play">▶</button>' +
                        '<button class="mc-btn" id="nextBtn" title="Next">⏭</button>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>' +
        '<button class="music-btn" id="musicBtn" title="Music Player">🎵</button>';
    document.body.appendChild(widget);

    var btn = document.getElementById('musicBtn');
    var panel = document.getElementById('musicPanel');
    var listEl = document.getElementById('musicList');
    var playerBar = document.getElementById('playerBar');
    var playBtn = document.getElementById('playBtn');
    var prevBtn = document.getElementById('prevBtn');
    var nextBtn = document.getElementById('nextBtn');
    var progressFill = document.getElementById('progressFill');
    var progressBar = document.getElementById('progressBar');
    var timeCurrent = document.getElementById('timeCurrent');
    var timeTotal = document.getElementById('timeTotal');
    var playlistName = document.getElementById('playlistName');
    var songCount = document.getElementById('songCount');
    var musicCover = document.getElementById('musicCover');

    function formatTime(seconds) {
        if (!seconds || isNaN(seconds)) return '0:00';
        var m = Math.floor(seconds / 60);
        var s = Math.floor(seconds % 60);
        return m + ':' + (s < 10 ? '0' : '') + s;
    }

    function updateUI() {
        var items = document.querySelectorAll('.music-list-item');
        for (var i = 0; i < items.length; i++) {
            items[i].classList.toggle('active', i === currentIndex);
        }
        playBtn.textContent = isPlaying ? '⏸' : '▶';
        playerBar.style.display = songs.length > 0 ? '' : 'none';
    }

    function renderSongList() {
        var html = '';
        for (var i = 0; i < songs.length; i++) {
            var song = songs[i];
            var artists = song.ar ? song.ar.map(function(a) { return a.name; }).join(', ') : '';
            var dur = formatTime((song.dt || 0) / 1000);
            html += '<div class="music-list-item' + (i === currentIndex ? ' active' : '') + '" data-index="' + i + '">' +
                '<span class="music-item-num">' + (i + 1) + '</span>' +
                '<div class="music-item-info">' +
                    '<div class="music-item-name">' + (song.name || 'Unknown') + '</div>' +
                    '<div class="music-item-artist">' + (artists || '') + '</div>' +
                '</div>' +
                '<span class="music-item-dur">' + (song.dt ? dur : '') + '</span>' +
            '</div>';
        }
        listEl.innerHTML = html;
        var items = listEl.querySelectorAll('.music-list-item');
        for (var i = 0; i < items.length; i++) {
            items[i].addEventListener('click', function() {
                var idx = parseInt(this.getAttribute('data-index'));
                if (songs[idx] && songs[idx].name) {
                    playSong(idx);
                }
            });
        }
    }

    function playSong(index) {
        if (index < 0 || index >= songs.length) return;
        if (!songs[index] || !songs[index].name) return;

        if (audio) {
            audio.pause();
            audio.src = '';
        }

        currentIndex = index;
        isPlaying = false;
        updateUI();

        var song = songs[index];
        audio = new Audio('https://music.163.com/song/media/outer/url?id=' + song.id + '.mp3');

        audio.addEventListener('canplay', function() {
            isPlaying = true;
            audio.play()['catch'](function() {});
            updateUI();
        });

        audio.addEventListener('ended', function() {
            nextSong();
        });

        audio.addEventListener('timeupdate', function() {
            if (audio && audio.duration) {
                var pct = (audio.currentTime / audio.duration) * 100;
                progressFill.style.width = pct + '%';
                timeCurrent.textContent = formatTime(audio.currentTime);
            }
        });

        audio.addEventListener('loadedmetadata', function() {
            timeTotal.textContent = formatTime(audio.duration);
        });

        audio.addEventListener('error', function() {
            isPlaying = false;
            updateUI();
        });

        audio.load();
    }

    function togglePlay() {
        if (!audio && songs.length > 0 && songs[0] && songs[0].name) {
            playSong(0);
            return;
        }
        if (!audio) return;
        if (isPlaying) {
            audio.pause();
            isPlaying = false;
        } else {
            audio.play()['catch'](function() {});
            isPlaying = true;
        }
        updateUI();
    }

    function nextSong() {
        if (songs.length === 0) return;
        var next = currentIndex + 1;
        if (next >= songs.length) next = 0;
        playSong(next);
    }

    function prevSong() {
        if (songs.length === 0) return;
        if (audio && audio.currentTime > 2) {
            audio.currentTime = 0;
            return;
        }
        var prev = currentIndex - 1;
        if (prev < 0) prev = songs.length - 1;
        playSong(prev);
    }

    function handleProgressClick(e) {
        if (!audio || !audio.duration) return;
        var rect = progressBar.getBoundingClientRect();
        var pct = (e.clientX - rect.left) / rect.width;
        audio.currentTime = pct * audio.duration;
    }

    function closePanel() {
        panel.classList.remove('show');
        btn.classList.remove('active');
    }

    async function loadPlaylist() {
        listEl.innerHTML = '<div class="music-loading">Loading...</div>';
        try {
            var url = PROXY + encodeURIComponent('https://music.163.com/api/v3/playlist/detail?id=' + PLAYLIST_ID);
            var res = await fetch(url);
            if (!res.ok) throw new Error('HTTP ' + res.status);
            var text = await res.text();
            var data = JSON.parse(text);
            if (data.code !== 200 || !data.playlist) throw new Error('API error');

            var pl = data.playlist;
            playlistName.textContent = pl.name || 'My Playlist';
            songCount.textContent = (pl.trackCount || 0) + ' songs';
            if (pl.coverImgUrl) {
                musicCover.src = pl.coverImgUrl + '?param=100y100';
                musicCover.style.display = '';
            }

            songs = data.playlist.tracks || [];
            renderSongList();
            updateUI();
            playerBar.style.display = songs.length > 0 ? '' : 'none';

            if (pl.trackIds && pl.trackIds.length > songs.length) {
                isLoadingTracks = true;
                var ids = [];
                for (var i = 0; i < pl.trackIds.length; i++) {
                    ids.push(pl.trackIds[i].id);
                }
                fetchMoreTracks(ids);
            }
        } catch(e) {
            listEl.innerHTML = '<div class="music-error">⚠ Failed to load</div>';
        }
    }

    async function fetchMoreTracks(ids) {
        try {
            var batchSize = 50;
            var fetched = [];
            for (var i = 0; i < ids.length; i += batchSize) {
                var batch = ids.slice(i, i + batchSize);
                var c = JSON.stringify(batch.map(function(id) { return {id: id}; }));
                var url = PROXY + encodeURIComponent(
                    'https://music.163.com/api/v3/song/detail?c=' + encodeURIComponent(c)
                );
                var res = await fetch(url);
                var text = await res.text();
                var data = JSON.parse(text);
                if (data.code === 200 && data.songs) {
                    for (var j = 0; j < data.songs.length; j++) {
                        fetched.push(data.songs[j]);
                    }
                }
            }

            if (fetched.length > 0) {
                var existingIds = {};
                for (var i = 0; i < songs.length; i++) {
                    existingIds[songs[i].id] = true;
                }
                for (var i = 0; i < fetched.length; i++) {
                    if (!existingIds[fetched[i].id]) {
                        songs.push(fetched[i]);
                        existingIds[fetched[i].id] = true;
                    }
                }
                var idOrder = {};
                for (var i = 0; i < ids.length; i++) {
                    idOrder[ids[i]] = i;
                }
                songs.sort(function(a, b) {
                    var ia = idOrder[a.id] !== undefined ? idOrder[a.id] : 999;
                    var ib = idOrder[b.id] !== undefined ? idOrder[b.id] : 999;
                    return ia - ib;
                });
                isLoadingTracks = false;
                renderSongList();
                updateUI();
                songCount.textContent = songs.length + ' songs';
            }
        } catch(e) {
            isLoadingTracks = false;
        }
    }

    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        if (panel.classList.contains('show')) {
            closePanel();
        } else {
            panel.classList.add('show');
            btn.classList.add('active');
            if (songs.length === 0) {
                loadPlaylist();
            }
        }
    });

    document.addEventListener('click', function(e) {
        if (!widget.contains(e.target) && panel.classList.contains('show')) {
            closePanel();
        }
    });

    playBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        togglePlay();
    });

    prevBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        prevSong();
    });

    nextBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        nextSong();
    });

    progressBar.addEventListener('click', function(e) {
        handleProgressClick(e);
    });

    document.addEventListener('keydown', function(e) {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        if (e.key === ' ' && panel.classList.contains('show')) {
            e.preventDefault();
            togglePlay();
        }
    });
})();
