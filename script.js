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

})();
