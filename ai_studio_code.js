/*
    Aether Echoes - Personal Blog JavaScript
    Version: 1.0.0
    Author: AI Generated
    Description: Powers all the dynamic, smooth, and elegant interactions of the blog theme.
    This file is intentionally long and detailed, with extensive comments and modular functions.
*/

(function() {
    "use strict";

    /**
     * =========================================================================
     * I. GLOBAL CONFIGURATION & STATE
     * =========================================================================
     * Centralized configuration for easy tweaking of effects.
     */
    const config = {
        // Performance & Throttling
        throttleDelay: 100, // ms, for scroll and resize events
        
        // Custom Cursor
        cursor: {
            enabled: true,
            magneticForce: 0.2, // How strong the magnetic pull is (0 to 1)
            magneticDistance: 100, // Max distance for magnetic effect (px)
        },

        // Particle Canvas
        particles: {
            enabled: true,
            particleCount: 100, // Adjust based on performance
            maxVelocity: 0.5,
            particleColor: { r: 150, g: 150, b: 150 }, // Base color, will be updated by theme
            connectionDistance: 120,
            mouseRepelDistance: 100,
            repelForce: 0.05,
        },

        // Scroll Animations
        scrollAnimation: {
            enabled: true,
            observerThreshold: 0.15, // What percentage of the element should be visible to trigger
        },
        
        // Text Reveal Animation
        textReveal: {
            enabled: true,
            staggerDelay: 40, // ms, delay between each character
        },

        // Header Scroll Effect
        headerScroll: {
            enabled: true,
            scrollThreshold: 50, // px, how far to scroll before header changes
        }
    };

    /**
     * =========================================================================
     * II. DOM ELEMENT CACHING
     * =========================================================================
     * Caching all DOM nodes for performance.
     */
    const DOMElements = {
        body: document.body,
        mainWrapper: document.getElementById('main-wrapper'),
        loader: document.querySelector('.page-loader'),
        
        // Header
        header: document.getElementById('header'),
        themeSwitcher: document.getElementById('theme-switcher'),
        mobileMenuToggle: document.getElementById('mobile-menu-toggle'),
        mainNav: document.querySelector('.main-nav'),
        navLinks: document.querySelectorAll('.nav-link'),

        // Cursor
        cursorDot: document.querySelector('.cursor-dot'),
        cursorOutline: document.querySelector('.cursor-outline'),
        
        // Dynamic Content
        particleCanvas: document.getElementById('particle-canvas'),
        readingProgressBar: document.querySelector('.reading-progress-bar'),
        animateOnScrollElements: document.querySelectorAll('.animate-on-scroll'),
        textToReveal: document.querySelector('.animate-text-reveal'),
        magneticItems: document.querySelectorAll('.magnetic-item'),

        // Footer
        currentYearSpan: document.getElementById('current-year'),
    };
    
    /**
     * =========================================================================
     * III. HELPER & UTILITY FUNCTIONS
     * =========================================================================
     */

    /**
     * Throttles a function, ensuring it's not called too frequently.
     * @param {function} func The function to throttle.
     * @param {number} limit The throttle delay in milliseconds.
     * @returns {function} The throttled function.
     */
    const throttle = (func, limit) => {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    };
    
    /**
     * Maps a value from one range to another.
     * @param {number} value The input value.
     * @param {number} in_min The minimum of the input range.
     * @param {number} in_max The maximum of the input range.
     * @param {number} out_min The minimum of the output range.
     * @param {number} out_max The maximum of the output range.
     * @returns {number} The mapped value.
     */
    const mapRange = (value, in_min, in_max, out_min, out_max) => {
        return (value - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    };
    
    /**
     * Linearly interpolates between two values.
     * @param {number} start The start value.
     * @param {number} end The end value.
     * @param {number} t The interpolation factor (0 to 1).
     * @returns {number} The interpolated value.
     */
    const lerp = (start, end, t) => {
        return start * (1 - t) + end * t;
    };
    
    /**
     * Checks if the user is on a touch device.
     * @returns {boolean} True if on a touch device.
     */
    const isTouchDevice = () => {
        return ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0);
    };


    /**
     * =========================================================================
     * IV. CORE APPLICATION MODULES
     * =========================================================================
     * Each major feature is encapsulated in its own object.
     */

    /**
     * --- 4.1 Page Loader Module ---
     */
    const PageLoader = {
        init() {
            if (!DOMElements.loader) return;
            window.addEventListener('load', () => {
                DOMElements.loader.classList.add('loaded');
                DOMElements.mainWrapper.style.opacity = '1';
                
                // Trigger entry animations after loader is gone
                setTimeout(() => {
                    if(config.textReveal.enabled && DOMElements.textToReveal) {
                        TextReveal.animate();
                    }
                }, 800); // Should match loader fade out duration
            });
        }
    };

    /**
     * --- 4.2 Theme Manager ---
     */
    const ThemeManager = {
        currentTheme: 'light',
        
        init() {
            if (!DOMElements.themeSwitcher) return;

            // Check for saved theme in localStorage
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                this.setTheme(savedTheme);
            } else {
                // Check for user's system preference
                if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    this.setTheme('dark');
                } else {
                    this.currentTheme = 'light';
                }
            }

            // Add event listener
            DOMElements.themeSwitcher.addEventListener('click', () => {
                const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
                this.setTheme(newTheme);
            });
            
            // Listen for OS theme changes
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
                this.setTheme(e.matches ? "dark" : "light");
            });
        },

        setTheme(theme) {
            this.currentTheme = theme;
            DOMElements.body.className = `${theme}-mode`;
            localStorage.setItem('theme', theme);

            // Notify other modules about the theme change
            if(config.particles.enabled) ParticleEngine.updateParticleColors();
        }
    };
    
    /**
     * --- 4.3 Custom Cursor ---
     */
    const CustomCursor = {
        x: { current: 0, target: 0 },
        y: { current: 0, target: 0 },
        isHovering: false,
        
        init() {
            if (!config.cursor.enabled || isTouchDevice() || !DOMElements.cursorDot || !DOMElements.cursorOutline) return;
            
            window.addEventListener('mousemove', this.updatePosition.bind(this));
            requestAnimationFrame(this.render.bind(this));
            
            // Add hover effects for all links and buttons
            document.querySelectorAll('a, button, input[type="submit"], .magnetic-item').forEach(el => {
                el.addEventListener('mouseenter', () => this.setHover(true));
                el.addEventListener('mouseleave', () => this.setHover(false));
            });
        },
        
        updatePosition(e) {
            this.x.target = e.clientX;
            this.y.target = e.clientY;
            
            if (DOMElements.cursorDot.style.opacity === '0') {
                DOMElements.cursorDot.style.opacity = '1';
                DOMElements.cursorOutline.style.opacity = '1';
            }
        },

        setHover(hovering) {
            this.isHovering = hovering;
            DOMElements.cursorOutline.classList.toggle('hover', hovering);
            DOMElements.cursorDot.classList.toggle('hover', hovering);
        },

        render() {
            this.x.current = lerp(this.x.current, this.x.target, 0.2);
            this.y.current = lerp(this.y.current, this.y.target, 0.2);

            // Use integer values for performance, reduces sub-pixel rendering.
            const dotX = Math.round(this.x.target);
            const dotY = Math.round(this.y.target);
            const outlineX = Math.round(this.x.current);
            const outlineY = Math.round(this.y.current);

            DOMElements.cursorDot.style.transform = `translate(${dotX}px, ${dotY}px)`;
            DOMElements.cursorOutline.style.transform = `translate(${outlineX}px, ${outlineY}px)`;
            
            requestAnimationFrame(this.render.bind(this));
        }
    };


    /**
     * --- 4.4 Particle Engine (Canvas) ---
     */
    const ParticleEngine = {
        canvas: null,
        ctx: null,
        particles: [],
        mouse: { x: null, y: null },
        animationFrameId: null,

        init() {
            if (!config.particles.enabled || !DOMElements.particleCanvas) return;
            this.canvas = DOMElements.particleCanvas;
            this.ctx = this.canvas.getContext('2d');
            this.resizeCanvas();
            this.createParticles();
            this.bindEvents();
            this.animate();
        },
        
        bindEvents() {
            window.addEventListener('resize', throttle(this.resizeCanvas.bind(this), config.throttleDelay));
            window.addEventListener('mousemove', this.updateMousePosition.bind(this));
            window.addEventListener('mouseout', () => { this.mouse = { x: null, y: null }; });
        },
        
        resizeCanvas() {
            this.canvas.width = window.innerWidth;
            this.canvas.height = DOMElements.hero.clientHeight || window.innerHeight;
            // Re-initialize particles on resize to ensure good distribution
            this.createParticles();
        },

        updateMousePosition(e) {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        },

        updateParticleColors() {
            const bodyStyles = getComputedStyle(document.body);
            const colorString = bodyStyles.getPropertyValue('--particle-color');
            const rgbaMatch = colorString.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
            if (rgbaMatch) {
                config.particles.particleColor.r = parseInt(rgbaMatch[1]);
                config.particles.particleColor.g = parseInt(rgbaMatch[2]);
                config.particles.particleColor.b = parseInt(rgbaMatch[3]);
            }
        },
        
        createParticles() {
            this.particles = [];
            let particleCount = Math.floor(this.canvas.width * this.canvas.height / 15000);
            if(particleCount < 30) particleCount = 30; // Minimum particles
            if(particleCount > 150) particleCount = 150; // Maximum particles

            for (let i = 0; i < particleCount; i++) {
                this.particles.push(new this.Particle(
                    Math.random() * this.canvas.width,
                    Math.random() * this.canvas.height,
                    this
                ));
            }
        },

        Particle: class {
            constructor(x, y, engine) {
                this.engine = engine;
                this.x = x;
                this.y = y;
                this.baseX = this.x;
                this.baseY = this.y;
                this.size = Math.random() * 2 + 1;
                this.vx = (Math.random() - 0.5) * config.particles.maxVelocity;
                this.vy = (Math.random() - 0.5) * config.particles.maxVelocity;
                this.density = (Math.random() * 30) + 1; // Used for repel effect
            }
        
            draw() {
                this.engine.ctx.fillStyle = `rgba(${config.particles.particleColor.r},${config.particles.particleColor.g},${config.particles.particleColor.b}, 0.8)`;
                this.engine.ctx.beginPath();
                this.engine.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                this.engine.ctx.closePath();
                this.engine.ctx.fill();
            }
        
            update() {
                // Mouse interaction
                if (this.engine.mouse.x !== null) {
                    let dx = this.x - this.engine.mouse.x;
                    let dy = this.y - this.engine.mouse.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
        
                    if (distance < config.particles.mouseRepelDistance) {
                        let forceDirectionX = dx / distance;
                        let forceDirectionY = dy / distance;
                        let force = (config.particles.mouseRepelDistance - distance) / config.particles.mouseRepelDistance;
                        let directionX = forceDirectionX * force * this.density * config.particles.repelForce;
                        let directionY = forceDirectionY * force * this.density * config.particles.repelForce;
                        this.x += directionX;
                        this.y += directionY;
                    }
                }
        
                // Move particle
                this.x += this.vx;
                this.y += this.vy;
        
                // Edge detection
                if (this.x < 0 || this.x > this.engine.canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > this.engine.canvas.height) this.vy *= -1;
            }
        },

        connectParticles() {
            let opacityValue = 1;
            for (let a = 0; a < this.particles.length; a++) {
                for (let b = a; b < this.particles.length; b++) {
                    let distance = Math.sqrt(
                        Math.pow(this.particles[a].x - this.particles[b].x, 2) +
                        Math.pow(this.particles[a].y - this.particles[b].y, 2)
                    );

                    if (distance < config.particles.connectionDistance) {
                        opacityValue = 1 - (distance / config.particles.connectionDistance);
                        this.ctx.strokeStyle = `rgba(${config.particles.particleColor.r},${config.particles.particleColor.g},${config.particles.particleColor.b}, ${opacityValue})`;
                        this.ctx.lineWidth = 0.5;
                        this.ctx.beginPath();
                        this.ctx.moveTo(this.particles[a].x, this.particles[a].y);
                        this.ctx.lineTo(this.particles[b].x, this.particles[b].y);
                        this.ctx.stroke();
                    }
                }
            }
        },
        
        animate() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.particles.forEach(p => {
                p.update();
                p.draw();
            });
            this.connectParticles();
            this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
        }
    };

    /**
     * --- 4.5 Header Behavior ---
     */
    const HeaderManager = {
        isNavOpen: false,

        init() {
            // Scroll behavior
            if (config.headerScroll.enabled && DOMElements.header) {
                window.addEventListener('scroll', throttle(this.handleScroll.bind(this), config.throttleDelay));
            }

            // Mobile menu toggle
            if (DOMElements.mobileMenuToggle) {
                DOMElements.mobileMenuToggle.addEventListener('click', this.toggleMobileNav.bind(this));
            }
            
            // Smooth scrolling for nav links
            DOMElements.navLinks.forEach(link => {
                link.addEventListener('click', this.handleNavLinkClick.bind(this));
            });
        },

        handleScroll() {
            if (window.scrollY > config.headerScroll.scrollThreshold) {
                DOMElements.header.classList.add('scrolled');
            } else {
                DOMElements.header.classList.remove('scrolled');
            }
        },

        toggleMobileNav() {
            this.isNavOpen = !this.isNavOpen;
            DOMElements.body.classList.toggle('mobile-nav-open', this.isNavOpen);
            DOMElements.body.classList.toggle('no-scroll', this.isNavOpen);
        },
        
        handleNavLinkClick(e) {
            e.preventDefault();
            const targetId = e.currentTarget.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if(targetElement) {
                // Close mobile nav if it's open
                if(this.isNavOpen) {
                    this.toggleMobileNav();
                }

                // De-activate other links, activate this one
                DOMElements.navLinks.forEach(link => link.classList.remove('active'));
                e.currentTarget.classList.add('active');

                // Smooth scroll to section
                // Using timeout to allow mobile nav to close smoothly
                setTimeout(() => {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, this.isNavOpen ? 300 : 0);
            }
        }
    };
    
    /**
     * --- 4.6 Scroll Animations ---
     */
    const ScrollAnimator = {
        init() {
            if (!config.scrollAnimation.enabled || !('IntersectionObserver' in window)) return;
            
            const observerOptions = {
                root: null, // relative to the viewport
                rootMargin: '0px',
                threshold: config.scrollAnimation.observerThreshold
            };
            
            const observer = new IntersectionObserver(this.handleIntersect, observerOptions);
            
            DOMElements.animateOnScrollElements.forEach(el => {
                const delay = el.dataset.delay || 0;
                el.style.transitionDelay = `${delay}ms`;
                observer.observe(el);
            });
        },
        
        handleIntersect(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Stop observing the element once it's visible to save resources
                    observer.unobserve(entry.target);
                }
            });
        }
    };

    /**
     * --- 4.7 Text Reveal Animation ---
     */
    const TextReveal = {
        init() {
            if (!config.textReveal.enabled || !DOMElements.textToReveal) return;
            // The actual animation is triggered by PageLoader after load.
            // This setup phase wraps each character in a span.
            const text = DOMElements.textToReveal.textContent.trim();
            DOMElements.textToReveal.textContent = '';
            
            text.split('').forEach(char => {
                const span = document.createElement('span');
                span.className = 'char';
                span.textContent = char === ' ' ? '\u00A0' : char; // Use non-breaking space
                DOMElements.textToReveal.appendChild(span);
            });
        },

        animate() {
            DOMElements.textToReveal.style.opacity = '1';
            const chars = DOMElements.textToReveal.querySelectorAll('.char');
            chars.forEach((char, index) => {
                setTimeout(() => {
                    char.style.opacity = '1';
                    char.style.transform = 'translateY(0) rotate(0)';
                }, (index + 1) * config.textReveal.staggerDelay);
            });
        }
    };
    
    /**
     * --- 4.8 Magnetic Elements ---
     */
    const MagneticElements = {
        init() {
            if (!config.cursor.enabled || isTouchDevice() || !DOMElements.magneticItems.length) return;
            
            DOMElements.magneticItems.forEach(el => {
                el.addEventListener('mousemove', e => this.handleMove(e, el));
                el.addEventListener('mouseleave', () => this.handleLeave(el));
            });
        },
        
        handleMove(e, el) {
            const { clientX, clientY } = e;
            const { left, top, width, height } = el.getBoundingClientRect();
            
            const centerX = left + width / 2;
            const centerY = top + height / 2;
            
            const deltaX = clientX - centerX;
            const deltaY = clientY - centerY;

            const distance = Math.sqrt(deltaX*deltaX + deltaY*deltaY);
            if(distance > config.cursor.magneticDistance) {
                // Reset if mouse is too far
                this.resetPosition(el);
                return;
            }
            
            const moveX = deltaX * config.cursor.magneticForce;
            const moveY = deltaY * config.cursor.magneticForce;
            
            el.style.transform = `translate(${moveX}px, ${moveY}px)`;
            el.style.transition = 'transform 0.1s linear';
        },

        handleLeave(el) {
            this.resetPosition(el);
        },

        resetPosition(el) {
            el.style.transform = 'translate(0, 0)';
            el.style.transition = 'transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)';
        }
    };

    /**
     * --- 4.9 Reading Progress ---
     */
    const ReadingProgress = {
        init() {
            if (!DOMElements.readingProgressBar) return;
            window.addEventListener('scroll', throttle(this.updateProgress.bind(this), 50));
        },

        updateProgress() {
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = document.documentElement.clientHeight;
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            
            if(scrollHeight <= clientHeight) {
                // If there's no scrollbar
                DOMElements.readingProgressBar.style.width = '0%';
                return;
            }

            const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
            DOMElements.readingProgressBar.style.width = `${progress}%`;
        }
    };

    /**
     * --- 4.10 Miscellaneous ---
     */
    const Misc = {
        init() {
            this.updateYear();
            this.preventFormSpam();
            this.handleInputLabels();
        },
        
        // Update footer copyright year
        updateYear() {
            if (DOMElements.currentYearSpan) {
                DOMElements.currentYearSpan.textContent = new Date().getFullYear();
            }
        },
        
        // Basic honeypot to deter simple bots
        preventFormSpam() {
            const contactForm = document.querySelector('.contact-form');
            if (contactForm) {
                // This is a more advanced technique not shown in HTML for simplicity.
                // It would involve dynamically adding a hidden field that only bots would fill.
                // For this example, we'll keep it simple.
            }
        },

        // This ensures the labels on forms animate correctly even on autofill
        handleInputLabels() {
            const inputs = document.querySelectorAll('.form-group input, .form-group textarea');
            inputs.forEach(input => {
                // Initial check for autofilled values
                if (input.value !== '') {
                    input.classList.add('not-empty');
                }
                // Handle changes
                input.addEventListener('change', () => {
                    if (input.value !== '') {
                        input.classList.add('not-empty');
                    } else {
                        input.classList.remove('not-empty');
                    }
                });
            });
            // Adding a small polyfill class for `placeholder-shown` if needed later.
        }
    };

    /**
     * =========================================================================
     * V. APPLICATION INITIALIZATION
     * =========================================================================
     * Kick off all modules when the DOM is ready.
     */
    functioninitializeApp() {
        console.log("🚀 AetherEchoes Initializing...");
        
        // Initialize all modules in order
        PageLoader.init();
        ThemeManager.init();
        CustomCursor.init();
        HeaderManager.init();
        MagneticElements.init();
        TextReveal.init();
        ParticleEngine.init();
        ScrollAnimator.init();
        ReadingProgress.init();
        Misc.init();
        
        console.log("✅ AetherEchoes Initialization Complete.");
    }
    
    // Check if the DOM is already loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeApp);
    } else {
        initializeApp();
    }

})();