'use strict';

document.addEventListener('DOMContentLoaded', function() {

    // --- 1. 导航栏滚动效果 ---
    const header = document.querySelector('.main-header');
    
    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);


    // --- 2. 元素滚动入场动画 ---
    // 使用 Intersection Observer API，性能远高于 scroll 事件监听
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // 可选：一旦可见，就停止观察，防止重复触发
                // observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1 // 元素进入视口 10% 时触发
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
    
    
    // --- 3. [可选额外效果] 英雄区文字视差滚动 ---
    // 这个效果会让页面感觉更有深度
    const heroContent = document.querySelector('.hero-content');

    function handleParallax() {
        const scrollY = window.scrollY;
        // 只有当用户在视口顶部附近滚动时才应用效果
        if (scrollY < window.innerHeight) {
             heroContent.style.transform = `translateY(${scrollY * 0.3}px)`;
             heroContent.style.opacity = 1 - (scrollY / (window.innerHeight / 1.5));
        }
    }
    
    window.addEventListener('scroll', handleParallax);

});
