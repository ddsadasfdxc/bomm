// 使用IIFE（立即调用函数表达式）来封装代码，避免污染全局作用域
(function() {
    'use strict';

    // 当DOM内容加载完毕后执行
    document.addEventListener('DOMContentLoaded', function() {
        
        // --- 1. 深色模式切换 (Theme Toggle) ---
        const themeToggle = document.getElementById('theme-toggle');
        const htmlElement = document.documentElement;

        // 检查本地存储中是否有主题偏好
        const currentTheme = localStorage.getItem('theme') || 'light';
        htmlElement.setAttribute('data-theme', currentTheme);

        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                const newTheme = htmlElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
                htmlElement.setAttribute('data-theme', newTheme);
                localStorage.setItem('theme', newTheme);
            });
        }

        // --- 2. 阅读进度条 (Reading Progress Bar) ---
        const progressBar = document.getElementById('reading-progress-bar');
        
        // 只有在文章页才执行此功能
        if (progressBar && document.querySelector('.post-full')) {
            window.addEventListener('scroll', () => {
                const totalHeight = document.body.scrollHeight - window.innerHeight;
                const progress = (window.pageYOffset / totalHeight) * 100;
                progressBar.style.width = `${progress}%`;
            });
        }

        // --- 3. 元素淡入动画 (Fade-in Animation) ---
        // 这是增强体验的可选功能
        const fadeElements = document.querySelectorAll('.fade-in');

        if (fadeElements.length > 0) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target); // 动画执行一次后停止观察
                    }
                });
            }, {
                threshold: 0.1 // 元素进入视口10%时触发
            });

            fadeElements.forEach(el => {
                observer.observe(el);
            });
        }
    });

})();
