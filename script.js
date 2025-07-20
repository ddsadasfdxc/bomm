// script.js (净化与整合最终版)

(function() {
    'use strict';

    // =========================================================================
    // 歌曲列表配置区 - 请确保这里的格式完全正确！
    // =========================================================================
    const playlist = 
        { title: "冬眠2023", artist: "阿YueYue.刘兆宇", src: "/music/冬眠.2023-阿YueYue.刘兆宇#2xxFAZ.mp3" },
        { title: "唯一", artist: "G.E.M.邓紫棋", src: "/music/唯一-G.E.M.邓紫棋#2x5LXP.mp3" }
    ];
    // =========================================================================


    // --- 核心功能 1: 全屏滚动与过渡动画 ---
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
            }, { threshold: 0.4 }
        );
        observer.observe(contentSection);
    }

    // --- 核心功能 2: 主题切换 ---
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

    // --- 核心功能 3: 音乐播放器 ---
    function musicPlayer() {
        if (playlist.length === 0) { 
             const triggerBtn = document.getElementById('music-player-trigger');
             if(triggerBtn) triggerBtn.style.display = 'none'; // 如果没歌，就隐藏按钮
             return; 
        }
        
        const modal = document.getElementById('music-modal');
        const trigger = document.getElementById('music-player-trigger');
        if (!modal || !trigger) return; 

        const closeButton = modal.querySelector('.modal-close-button');
        const overlay = modal.querySelector('.modal-overlay');
        const searchInput = document.getElementById('song-search-input');
        const resultsList = document.getElementById('song-results-list');
        const audio = document.getElementById('audio-player');
        const playPauseBtn = document.getElementById('player-play-pause-button');
        const songTitleEl = document.getElementById('player-song-title');
        const songArtistEl = document.getElementById('player-song-artist');
        const statusEl = modal.querySelector('.status');
        
        const openModal = () => modal.classList.add('is-open');
        const closeModal = () => modal.classList.remove('is-open');
        
        trigger.addEventListener('click', openModal);
        closeButton.addEventListener('click', closeModal);
        overlay.addEventListener('click', closeModal);

        const renderPlaylist = (songs) => {
            resultsList.innerHTML = '';
            if (songs.length === 0) {
                resultsList.innerHTML = '<li>未找到匹配的歌曲</li>';
                return;
            }
            songs.forEach(song => {
                const li = document.createElement('li');
                li.textContent = `${song.title} - ${song.artist}`;
                li.addEventListener('click', () => playSong(song));
                resultsList.appendChild(li);
            });
        };

        const playSong = (song) => {
            songTitleEl.textContent = song.title;
            songArtistEl.textContent = song.artist;
            statusEl.textContent = "正在播放";
            if(audio.src !== window.location.origin + song.src) {
                audio.src = song.src;
            }
            audio.play();
        };

        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const filteredSongs = playlist.filter(song => 
                song.title.toLowerCase().includes(query) ||
                song.artist.toLowerCase().includes(query)
            );
            renderPlaylist(filteredSongs);
        });
        
        playPauseBtn.addEventListener('click', () => {
            if (audio.paused) {
                if (audio.src) audio.play();
            } else {
                audio.pause();
            }
        });

        audio.addEventListener('play', () => playPauseBtn.classList.replace('play', 'pause'));
        audio.addEventListener('pause', () => playPauseBtn.classList.replace('pause', 'play'));
        
        renderPlaylist(playlist);
    }

    // --- 事件监听与函数执行 ---
    // 所有函数都在这里被统一调用，确保执行顺序正确
    window.addEventListener('load', () => {
        setFreedomHeight();
        smoothScrollTransition();
    });
    window.addEventListener('resize', setFreedomHeight);
    
    document.addEventListener('DOMContentLoaded', () => {
        themeToggle();
        musicPlayer(); // 确保在这里调用音乐播放器功能
    });

})();
