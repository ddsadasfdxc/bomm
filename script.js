// ===================================
// 全局变量和配置
// ===================================
const CONFIG = {
    loadingDuration: 2000,
    scrollAnimationOffset: 100,
    particleCount: 50,
    heroAnimationDuration: 1000,
    smoothScrollDuration: 800
};

// DOM 元素缓存
const DOM = {
    loadingScreen: null,
    navbar: null,
    navToggle: null,
    navMenu: null,
    themeToggle: null,
    backToTop: null,
    heroCanvas: null,
    contactForm: null,
    navLinks: null
};

// 状态管理
const STATE = {
    isLoading: true,
    isDarkTheme: false,
    isNavOpen: false,
    scrollY: 0,
    activeSection: 'home'
};

// ===================================
// 工具函数
// ===================================
const Utils = {
    // 防抖函数
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // 节流函数
    throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    // 平滑滚动到指定元素
    smoothScrollTo(element, duration = CONFIG.smoothScrollDuration) {
        const targetPosition = element.offsetTop - 80; // 减去导航栏高度
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = Utils.easeInOutQuad(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        requestAnimationFrame(animation);
    },

    // 缓动函数
    easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    },

    // 获取随机数
    random(min, max) {
        return Math.random() * (max - min) + min;
    },

    // 检查元素是否在视口中
    isInViewport(element, offset = 0) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= -offset &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
};

// ===================================
// 加载动画管理
// ===================================
const LoadingManager = {
    init() {
        DOM.loadingScreen = document.querySelector('.loading-screen');
        this.startLoading();
    },

    startLoading() {
        setTimeout(() => {
            this.hideLoading();
        }, CONFIG.loadingDuration);
    },

    hideLoading() {
        if (DOM.loadingScreen) {
            DOM.loadingScreen.classList.add('hidden');
            STATE.isLoading = false;
            
            // 加载完成后初始化其他功能
            setTimeout(() => {
                DOM.loadingScreen.style.display = 'none';
                this.onLoadingComplete();
            }, 500);
        }
    },

    onLoadingComplete() {
        // 触发页面入场动画
        PageAnimations.init();
        HeroCanvas.init();
        ScrollAnimations.init();
    }
};

// ===================================
// 导航栏管理
// ===================================
const Navigation = {
    init() {
        DOM.navbar = document.getElementById('navbar');
        DOM.navToggle = document.getElementById('nav-toggle');
        DOM.navMenu = document.getElementById('nav-menu');
        DOM.navLinks = document.querySelectorAll('.nav-link');

        this.bindEvents();
        this.updateActiveLink();
    },

    bindEvents() {
        // 移动端菜单切换
        if (DOM.navToggle) {
            DOM.navToggle.addEventListener('click', () => this.toggleMobileMenu());
        }

        // 导航链接点击
        DOM.navLinks.forEach(link => {
            link.addEventListener('click', (e) => this.handleNavClick(e));
        });

        // 滚动时更新导航状态
        window.addEventListener('scroll', Utils.throttle(() => {
            this.updateNavbarStyle();
            this.updateActiveLink();
        }, 16));
    },

    toggleMobileMenu() {
        STATE.isNavOpen = !STATE.isNavOpen;
        DOM.navMenu.classList.toggle('active');
        DOM.navToggle.classList.toggle('active');
        
        // 阻止背景滚动
        document.body.style.overflow = STATE.isNavOpen ? 'hidden' : '';
    },

    closeMobileMenu() {
        STATE.isNavOpen = false;
        DOM.navMenu.classList.remove('active');
        DOM.navToggle.classList.remove('active');
        document.body.style.overflow = '';
    },

    handleNavClick(e) {
        e.preventDefault();
        const href = e.target.getAttribute('href');
        
        if (href.startsWith('#')) {
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                Utils.smoothScrollTo(targetElement);
                this.closeMobileMenu();
                
                // 更新活动状态
                DOM.navLinks.forEach(link => link.classList.remove('active'));
                e.target.classList.add('active');
                STATE.activeSection = targetId;
            }
        }
    },

    updateNavbarStyle() {
        const scrollY = window.pageYOffset;
        
        if (scrollY > 50) {
            DOM.navbar.style.background = STATE.isDarkTheme 
                ? 'rgba(15, 23, 42, 0.95)' 
                : 'rgba(255, 255, 255, 0.95)';
            DOM.navbar.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
        } else {
            DOM.navbar.style.background = STATE.isDarkTheme 
                ? 'rgba(15, 23, 42, 0.9)' 
                : 'rgba(255, 255, 255, 0.9)';
            DOM.navbar.style.boxShadow = 'none';
        }
        
        STATE.scrollY = scrollY;
    },

    updateActiveLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.pageYOffset + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                DOM.navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                        STATE.activeSection = sectionId;
                    }
                });
            }
        });
    }
};

// ===================================
// 主题切换管理
// ===================================
const ThemeManager = {
    init() {
        DOM.themeToggle = document.getElementById('theme-toggle');
        
        // 从本地存储加载主题设置
        this.loadThemeFromStorage();
        
        if (DOM.themeToggle) {
            DOM.themeToggle.addEventListener('click', () => this.toggleTheme());
        }
    },

    toggleTheme() {
        STATE.isDarkTheme = !STATE.isDarkTheme;
        this.applyTheme();
        this.saveThemeToStorage();
    },

    applyTheme() {
        const body = document.body;
        const toggleIcon = DOM.themeToggle.querySelector('.toggle-icon');
        
        if (STATE.isDarkTheme) {
            body.classList.add('dark-theme');
            if (toggleIcon) toggleIcon.textContent = '☀️';
        } else {
            body.classList.remove('dark-theme');
            if (toggleIcon) toggleIcon.textContent = '🌙';
        }

        // 更新粒子效果颜色
        if (HeroCanvas.particles) {
            HeroCanvas.updateParticleColors();
        }
    },

    loadThemeFromStorage() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            STATE.isDarkTheme = savedTheme === 'dark';
            this.applyTheme();
        } else {
            // 检测系统主题偏好
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            STATE.isDarkTheme = prefersDark;
            this.applyTheme();
        }
    },

    saveThemeToStorage() {
        localStorage.setItem('theme', STATE.isDarkTheme ? 'dark' : 'light');
    }
};

// ===================================
// 自定义光标
// ===================================
const CustomCursor = {
    init() {
        // 只在桌面设备上启用
        if (window.innerWidth > 768) {
            this.cursor = document.querySelector('.cursor');
            this.cursorInner = document.querySelector('.cursor-inner');
            this.cursorOuter = document.querySelector('.cursor-outer');
            
            if (this.cursor) {
                this.bindEvents();
            }
        }
    },

    bindEvents() {
        document.addEventListener('mousemove', (e) => this.updatePosition(e));
        document.addEventListener('mousedown', () => this.onMouseDown());
        document.addEventListener('mouseup', () => this.onMouseUp());
        
        // 悬停效果
        const hoverElements = document.querySelectorAll('a, button, .article-card, .project-card, .skill-tag');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => this.onHover());
            el.addEventListener('mouseleave', () => this.onLeave());
        });
    },

    updatePosition(e) {
        const x = e.clientX;
        const y = e.clientY;
        
        if (this.cursorInner) {
            this.cursorInner.style.left = `${x}px`;
            this.cursorInner.style.top = `${y}px`;
        }
        
        if (this.cursorOuter) {
            this.cursorOuter.style.left = `${x}px`;
            this.cursorOuter.style.top = `${y}px`;
        }
    },

    onMouseDown() {
        if (this.cursor) {
            this.cursor.style.transform = 'scale(0.8)';
        }
    },

    onMouseUp() {
        if (this.cursor) {
            this.cursor.style.transform = 'scale(1)';
        }
    },

    onHover() {
        if (this.cursorOuter) {
            this.cursorOuter.style.transform = 'translate(-50%, -50%) scale(1.5)';
        }
    },

    onLeave() {
        if (this.cursorOuter) {
            this.cursorOuter.style.transform = 'translate(-50%, -50%) scale(1)';
        }
    }
};

// ===================================
// 英雄区域画布动画
// ===================================
const HeroCanvas = {
    canvas: null,
    ctx: null,
    particles: [],
    animationId: null,

    init() {
        DOM.heroCanvas = document.getElementById('hero-canvas');
        if (!DOM.heroCanvas) return;

        this.canvas = DOM.heroCanvas;
        this.ctx = this.canvas.getContext('2d');
        
        this.setupCanvas();
        this.createParticles();
        this.animate();
        this.bindEvents();
    },

    setupCanvas() {
        const updateSize = () => {
            const rect = this.canvas.parentElement.getBoundingClientRect();
            this.canvas.width = rect.width;
            this.canvas.height = rect.height;
        };
        
        updateSize();
        window.addEventListener('resize', Utils.debounce(updateSize, 250));
    },

    createParticles() {
        this.particles = [];
        const particleCount = Math.min(CONFIG.particleCount, Math.floor(this.canvas.width * this.canvas.height / 10000));
        
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Utils.random(0, this.canvas.width),
                y: Utils.random(0, this.canvas.height),
                vx: Utils.random(-0.5, 0.5),
                vy: Utils.random(-0.5, 0.5),
                radius: Utils.random(1, 3),
                opacity: Utils.random(0.3, 0.8),
                hue: Utils.random(200, 280)
            });
        }
    },

    updateParticleColors() {
        this.particles.forEach(particle => {
            particle.hue = STATE.isDarkTheme ? Utils.random(200, 280) : Utils.random(220, 260);
        });
    },

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // 更新和绘制粒子
        this.particles.forEach(particle => {
            // 更新位置
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // 边界检测
            if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;
            
            // 绘制粒子
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = `hsla(${particle.hue}, 70%, 60%, ${particle.opacity})`;
            this.ctx.fill();
        });
        
        // 绘制连接线
        this.drawConnections();
        
        this.animationId = requestAnimationFrame(() => this.animate());
    },

    drawConnections() {
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.strokeStyle = `hsla(${this.particles[i].hue}, 70%, 60%, ${0.1 * (1 - distance / 100)})`;
                    this.ctx.lineWidth = 1;
                    this.ctx.stroke();
                }
            }
        }
    },

    bindEvents() {
        window.addEventListener('resize', Utils.debounce(() => {
            this.createParticles();
        }, 500));
    },

    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
    }
};

// ===================================
// 滚动动画
// ===================================
const ScrollAnimations = {
    init() {
        this.elements = document.querySelectorAll('.animate-on-scroll');
        this.bindEvents();
        this.checkAnimations(); // 初始检查
    },

    bindEvents() {
        window.addEventListener('scroll', Utils.throttle(() => {
            this.checkAnimations();
        }, 16));
    },

    checkAnimations() {
        this.elements.forEach(element => {
            if (Utils.isInViewport(element, CONFIG.scrollAnimationOffset)) {
                if (!element.classList.contains('animated')) {
                    element.classList.add('animated');
                }
            }
        });
    }
};

// ===================================
// 页面动画
// ===================================
const PageAnimations = {
    init() {
        this.animateHeroElements();
        this.setupCardHoverEffects();
    },

    animateHeroElements() {
        const titleLines = document.querySelectorAll('.title-line');
        const subtitle = document.querySelector('.hero-subtitle');
        const buttons = document.querySelector('.hero-buttons');
        
        // 延迟显示元素
        setTimeout(() => {
            if (titleLines.length > 0) {
                titleLines.forEach((line, index) => {
                    setTimeout(() => {
                        line.style.opacity = '1';
                        line.style.transform = 'translateY(0)';
                    }, index * 200);
                });
            }
        }, 300);
        
        setTimeout(() => {
            if (subtitle) {
                subtitle.style.opacity = '1';
                subtitle.style.transform = 'translateY(0)';
            }
        }, 800);
        
        setTimeout(() => {
            if (buttons) {
                buttons.style.opacity = '1';
                buttons.style.transform = 'translateY(0)';
            }
        }, 1000);
    },

    setupCardHoverEffects() {
        const cards = document.querySelectorAll('.article-card, .project-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }
};

// ===================================
// 回到顶部按钮
// ===================================
const BackToTop = {
    init() {
        DOM.backToTop = document.getElementById('back-to-top');
        
        if (DOM.backToTop) {
            this.bindEvents();
        }
    },

    bindEvents() {
        window.addEventListener('scroll', Utils.throttle(() => {
            this.updateVisibility();
        }, 100));
        
        DOM.backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    },

    updateVisibility() {
        const scrollY = window.pageYOffset;
        
        if (scrollY > 500) {
            DOM.backToTop.classList.add('visible');
        } else {
            DOM.backToTop.classList.remove('visible');
        }
    }
};

// ===================================
// 表单处理
// ===================================
const FormHandler = {
    init() {
        DOM.contactForm = document.querySelector('.contact-form');
        
        if (DOM.contactForm) {
            this.bindEvents();
        }
    },

    bindEvents() {
        DOM.contactForm.addEventListener('submit', (e) => this.handleSubmit(e));
        
        // 输入字段焦点效果
        const inputs = DOM.contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('focus', () => this.onInputFocus(input));
            input.addEventListener('blur', () => this.onInputBlur(input));
        });
    },

    handleSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(DOM.contactForm);
        const data = Object.fromEntries(formData);
        
        // 简单验证
        if (this.validateForm(data)) {
            this.submitForm(data);
        }
    },

    validateForm(data) {
        const { name, email, subject, message } = data;
        
        if (!name.trim()) {
            this.showError('请输入姓名');
            return false;
        }
        
        if (!email.trim() || !this.isValidEmail(email)) {
            this.showError('请输入有效的邮箱地址');
            return false;
        }
        
        if (!subject.trim()) {
            this.showError('请输入主题');
            return false;
        }
        
        if (!message.trim()) {
            this.showError('请输入消息内容');
            return false;
        }
        
        return true;
    },

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },

    async submitForm(data) {
        const submitBtn = DOM.contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        try {
            submitBtn.textContent = '发送中...';
            submitBtn.disabled = true;
            
            // 模拟发送（实际项目中替换为真实的API调用）
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            this.showSuccess('消息发送成功！我会尽快回复您。');
            DOM.contactForm.reset();
            
        } catch (error) {
            this.showError('发送失败，请稍后重试。');
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    },

    onInputFocus(input) {
        input.parentElement.classList.add('focused');
    },

    onInputBlur(input) {
        if (!input.value.trim()) {
            input.parentElement.classList.remove('focused');
        }
    },

    showSuccess(message) {
        this.showNotification(message, 'success');
    },

    showError(message) {
        this.showNotification(message, 'error');
    },

    showNotification(message, type) {
        // 创建通知元素
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // 添加样式
        Object.assign(notification.style, {
            position: 'fixed',
            top: '100px',
            right: '20px',
            padding: '1rem 1.5rem',
            borderRadius: '0.5rem',
            color: 'white',
            backgroundColor: type === 'success' ? '#10b981' : '#ef4444',
            boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
            zIndex: '10000',
            opacity: '0',
            transform: 'translateX(100%)',
            transition: 'all 0.3s ease'
        });
        
        document.body.appendChild(notification);
        
        // 显示动画
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // 自动隐藏
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 4000);
    }
};

// ===================================
// 全局函数（供HTML调用）
// ===================================
window.scrollToSection = function(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        Utils.smoothScrollTo(element);
    }
};

// ===================================
// 性能监测
// ===================================
const PerformanceMonitor = {
    init() {
        this.monitorPerformance();
        this.optimizeImages();
    },

    monitorPerformance() {
        // 监测页面加载性能
        window.addEventListener('load', () => {
            const perfData = performance.getEntriesByType('navigation')[0];
            const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
            
            console.log(`页面加载时间: ${loadTime}ms`);
            
            // 如果加载时间过长，可以进行优化
            if (loadTime > 3000) {
                console.warn('页面加载时间较长，建议优化');
            }
        });
    },

    optimizeImages() {
        // 图片懒加载
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
};

// ===================================
// 错误处理
// ===================================
const ErrorHandler = {
    init() {
        window.addEventListener('error', (e) => {
            console.error('JavaScript错误:', e.error);
            // 可以在这里添加错误上报逻辑
        });

        window.addEventListener('unhandledrejection', (e) => {
            console.error('未处理的Promise拒绝:', e.reason);
            // 可以在这里添加错误上报逻辑
        });
    }
};

// ===================================
// 主应用程序初始化
// ===================================
const App = {
    init() {
        // 检查浏览器兼容性
        if (!this.checkCompatibility()) {
            this.showCompatibilityWarning();
            return;
        }

        // 初始化错误处理
        ErrorHandler.init();
        
        // 初始化各个模块
        LoadingManager.init();
        ThemeManager.init();
        Navigation.init();
        CustomCursor.init();
        BackToTop.init();
        FormHandler.init();
        PerformanceMonitor.init();
        
        // 页面加载完成后的初始化
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.onDOMReady();
            });
        } else {
            this.onDOMReady();
        }
    },

    onDOMReady() {
        // DOM准备就绪后的初始化
        console.log('🎨 Aether Echoes 博客已加载完成');
        
        // 添加一些调试信息
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            console.log('🛠️ 开发模式已启用');
            this.enableDebugMode();
        }
    },

    checkCompatibility() {
        // 检查关键API支持
        return !!(
            window.requestAnimationFrame &&
            window.addEventListener &&
            document.querySelector &&
            Array.prototype.forEach &&
            Object.assign
        );
    },

    showCompatibilityWarning() {
        const warning = document.createElement('div');
        warning.innerHTML = `
            <div style="position: fixed; top: 0; left: 0; width: 100%; background: #ef4444; color: white; padding: 1rem; text-align: center; z-index: 10000;">
                您的浏览器版本过旧，部分功能可能无法正常使用。建议升级到最新版本的现代浏览器。
            </div>
        `;
        document.body.insertBefore(warning, document.body.firstChild);
    },

    enableDebugMode() {
        // 开发模式下的调试功能
        window.APP_DEBUG = {
            state: STATE,
            dom: DOM,
            utils: Utils,
            reloadCSS: () => {
                const links = document.querySelectorAll('link[rel="stylesheet"]');
                links.forEach(link => {
                    const href = link.href.split('?')[0];
                    link.href = href + '?t=' + Date.now();
                });
            }
        };
        
        console.log('🐛 调试工具已加载到 window.APP_DEBUG');
    }
};

// ===================================
// 启动应用程序
// ===================================
App.init();