// script.js (时序优化最终版，已内置您的播放列表)

(function() {
    'use strict';

    // =========================================================================
    // 歌曲列表配置区
    // =========================================================================
    const playlist = [
        { title: "冬眠2023", artist: "阿YueYue.刘兆宇", src: "/music/dongmian.mp3" },
        { title: "唯一", artist: "G.E.M.邓紫棋", src: "/music/weiyi.mp3" }
    ];
    // =========================================================================

    
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

    // --- 所有DOM操作功能都移入 DOMContentLoaded ---
    document.addEventListener('DOMContentLoaded', () => {

        // 功能模块：主题切换
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

        // 功能模块：音乐播放器
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
                // URL编码文件名中的特殊字符，增加健壮性
                const encodedSrc = encodeURI(song.src);
                if(audio.src !== window.location.origin + encodedSrc) {
                    audio.src = encodedSrc;
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

        // --- 统一调用 ---
        themeToggle();
        musicPlayer();
    });
    
    // --- 不需要等待DOM加载的功能放在外面 ---
    window.addEventListener('load', () => {
        setFreedomHeight();
        smoothScrollTransition();
    });
    window.addEventListener('resize', setFreedomHeight);

})();
// script.js (添加新函数)

    // ... 已有的 setFreedomHeight, smoothScrollTransition 等函数 ...

    function stickyHeader() {
        const header = document.querySelector('.sticky-site-header');
        const mainContainer = document.querySelector('.freedom-container');
        if (!header || !mainContainer) return;

        mainContainer.addEventListener('scroll', () => {
            if (mainContainer.scrollTop > 10) { // 向下滚动一点点
                document.body.classList.add('is-header-scrolled'); // 这个类可以让页眉变化
            } else {
                document.body.classList.remove('is-header-scrolled');
            }
        });
    }

// ...
// script.js

    // --- 事件监听与函数执行 ---
    document.addEventListener('DOMContentLoaded', () => {
        themeToggle();
        musicPlayer();
        stickyHeader(); // <-- 在这里调用新函数
    });

// ...
