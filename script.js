// script.js (在文件最开始添加)

(function() {
    'use strict';

    // 动态设置全屏高度，解决移动端100vh问题
    function setFreedomHeight() {
        const freedomContainer = document.querySelector('.freedom-container');
        if (freedomContainer) {
            // window.innerHeight 能获取浏览器窗口的内部高度，这是最精确的值
            freedomContainer.style.height = `${window.innerHeight}px`;
        }
    }

    // 首次加载时设置
    window.addEventListener('load', setFreedomHeight);
    
    // 当窗口大小改变（比如手机横竖屏切换）时重新设置
    window.addEventListener('resize', setFreedomHeight);

    // --- 这里是你原有的其他JS代码，比如深色模式切换 ---
    document.addEventListener('DOMContentLoaded', function() {
        // ... (你之前的深色模式和动画代码)
    });
})();
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
