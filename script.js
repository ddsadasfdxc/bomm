(function() {
    'use strict';

    function setFreedomHeight() {
        const freedomContainer = document.querySelector('.freedom-container');
        if (freedomContainer) {
            freedomContainer.style.height = `${window.innerHeight}px`;
        }
    }

    function smoothScrollTransition() {
        const contentSection = document.getElementById('main-content-area');
        if (!contentSection) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        document.body.classList.add('is-scrolled');
                        contentSection.classList.add('is-visible');
                    } else {
                        document.body.classList.remove('is-scrolled');
                        contentSection.classList.remove('is-visible');
                    }
                });
            },
            { threshold: 0.4 } 
        );

        observer.observe(contentSection);
    }

    function themeToggle() {
        const toggleButton = document.getElementById('theme-toggle');
        const htmlElement = document.documentElement;
        if (!toggleButton) return;
        
        const savedTheme = localStorage.getItem('theme') || 'light';
        htmlElement.setAttribute('data-theme', savedTheme);
        
        toggleButton.addEventListener('click', () => {
            const newTheme = htmlElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    window.addEventListener('load', () => {
        setFreedomHeight();
        smoothScrollTransition();
    });

    window.addEventListener('resize', setFreedomHeight);
    
    document.addEventListener('DOMContentLoaded', themeToggle);
// script.js (追加)

(function(){
    'use strict';
    
    // === 功能：音乐播放器 Modal ===
    const playlist = [
        // 在这里添加你的歌曲列表！
        // { title: "冬眠2023", artist: "阿YueYue.刘兆宇", src: "/music/song1.mp3" },
        // { title: "唯一", artist: "G.E.M.邓紫棋", src: "/music/song2.mp3" },
        // ...
    ];

    const modal = document.getElementById('music-modal');
    const trigger = document.getElementById('music-player-trigger');
    const closeButton = modal.querySelector('.modal-close-button');
    const overlay = modal.querySelector('.modal-overlay');

    const searchInput = document.getElementById('song-search-input');
    const resultsList = document.getElementById('song-results-list');
    
    const audio = document.getElementById('audio-player');
    const playPauseBtn = document.getElementById('player-play-pause-button');
    const songTitleEl = document.getElementById('player-song-title');
    const songArtistEl = document.getElementById('player-song-artist');
    const statusEl = modal.querySelector('.status');
    
    function openModal() { modal.classList.add('is-open'); }
    function closeModal() { modal.classList.remove('is-open'); }
    
    if (trigger && modal) {
        trigger.addEventListener('click', openModal);
        closeButton.addEventListener('click', closeModal);
        overlay.addEventListener('click', closeModal);
    }
    
    function renderPlaylist(songs) {
        resultsList.innerHTML = '';
        if (songs.length === 0) {
            resultsList.innerHTML = '<li>未找到歌曲</li>';
            return;
        }
        songs.forEach(song => {
            const li = document.createElement('li');
            li.textContent = `${song.title} - ${song.artist}`;
            li.addEventListener('click', () => {
                playSong(song);
            });
            resultsList.appendChild(li);
        });
    }

    function playSong(song) {
        songTitleEl.textContent = song.title;
        songArtistEl.textContent = song.artist;
        audio.src = song.src;
        audio.play();
        statusEl.textContent = "正在播放";
    }

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const filteredSongs = playlist.filter(song => 
                song.title.toLowerCase().includes(query) ||
                song.artist.toLowerCase().includes(query)
            );
            renderPlaylist(filteredSongs);
        });
    }

    if(playPauseBtn) {
        playPauseBtn.addEventListener('click', () => {
            if(audio.paused) {
                if (audio.src) audio.play();
            } else {
                audio.pause();
            }
        });
        audio.addEventListener('play', () => playPauseBtn.classList.replace('play', 'pause'));
        audio.addEventListener('pause', () => playPauseBtn.classList.replace('pause', 'play'));
    }
    
    renderPlaylist(playlist);
})();
