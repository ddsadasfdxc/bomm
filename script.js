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
// script.js (文件底部)
// --- 美化功能: 鼠标/触摸追随的星光效果 ---
(function() {
    const canvas = document.getElementById('starfield');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let pointer = {
        x: canvas.width / 2,
        y: canvas.height / 2,
    };
    
    let params = {
        points: 40,
        connect: false, // 设为true可以看星星连线效果
        max_distance: 100,
        stroke: '#80ffea',
        interactive: {
            distance: 100,
            stroke: '#90f1ef'
        }
    };

    let stars = [];

    class Star {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.radius = Math.random() * 1.5;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = params.stroke;
            ctx.fill();
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }
    }
    
    for (let i = 0; i < params.points; i++) {
        stars.push(new Star());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        stars.forEach(star => {
            star.update();
            star.draw();
            
            // 和鼠标指针的交互
            let distance = Math.sqrt(Math.pow(pointer.x - star.x, 2) + Math.pow(pointer.y - star.y, 2));
            if (distance < params.interactive.distance) {
                 ctx.beginPath();
                 ctx.moveTo(pointer.x, pointer.y);
                 ctx.lineTo(star.x, star.y);
                 ctx.strokeStyle = params.interactive.stroke;
                 ctx.lineWidth = 0.2;
                 ctx.stroke();
            }
        });

        requestAnimationFrame(animate);
    }
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    window.addEventListener('mousemove', (e) => {
        pointer.x = e.clientX;
        pointer.y = e.clientY;
    });

    window.addEventListener('touchmove', (e) => {
        pointer.x = e.touches[0].clientX;
        pointer.y = e.touches[0].clientY;
    });
    
    animate();

})();
