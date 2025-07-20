// =========================================================================
// SCRIPT.JS - FINAL CLEANED VERSION
// Description: All features integrated, loading screen removed.
// Version: 7.0 (Stable Edition)
// =========================================================================

(function() {
    'use strict';

    // -------------------------------------------------------------------------
    //  Part 1: 配置区 (Configuration)
    // -------------------------------------------------------------------------

    const playlist = [
        { title: "冬眠2023", artist: "阿YueYue.刘兆宇", src: "/music/dongmian.mp3" },
        { title: "唯一", artist: "G.E.M.邓紫棋", src: "/music/weiyi.mp3" }
    ];

    // -------------------------------------------------------------------------
    //  Part 2: 核心功能函数定义 (Core Function Definitions)
    // -------------------------------------------------------------------------

    function setFreedomHeight() {
        const freedomContainer = document.querySelector('.freedom-container');
        if (freedomContainer) {
            freedomContainer.style.height = `${window.innerHeight}px`;
        }
    }

    function smoothScrollTransition() {
        const contentSection = document.getElementById('main-content-area');
        if (!contentSection) return;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                document.body.classList.toggle('is-scrolled', entry.isIntersecting);
                contentSection.classList.toggle('is-visible', entry.isIntersecting);
            });
        }, { threshold: 0.4 });
        observer.observe(contentSection);
    }
    
    // -------------------------------------------------------------------------
    //  Part 3: 页面加载完毕后执行的功能 (DOM Ready Functions)
    // -------------------------------------------------------------------------

    document.addEventListener('DOMContentLoaded', () => {

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

        function musicPlayer() {
            const modal = document.getElementById('music-modal');
            const trigger = document.getElementById('music-player-trigger');
            if (playlist.length === 0) {
                if(trigger) trigger.style.display = 'none';
                return;
            }
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
                const encodedSrc = encodeURI(song.src);
                if (audio.src !== window.location.origin + encodedSrc) {
                    audio.src = encodedSrc;
                }
                audio.play();
            };

            search
