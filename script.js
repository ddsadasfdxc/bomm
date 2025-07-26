/**
 * AI Hub - 多模型智能代理平台 JavaScript
 * 功能：神经网络可视化、聊天界面、主题切换、API调用等
 */

// 全局配置
const CONFIG = {
    // API配置
    apiEndpoint: '/api/chat',
    apiTimeout: 30000,
    
    // 神经网络动画配置
    neuralNetwork: {
        nodeCount: 50,
        connectionCount: 80,
        animationSpeed: 0.02,
        nodeSize: { min: 2, max: 6 },
        connectionOpacity: 0.3
    },
    
    // 主题配置
    theme: {
        default: 'light',
        storageKey: 'ai-hub-theme'
    },
    
    // 动画配置
    animation: {
        scrollOffset: 100,
        duration: 600
    }
};

// DOM 元素
const elements = {
    loadingScreen: document.getElementById('loading-screen'),
    themeToggle: document.getElementById('theme-toggle'),
    mobileMenuToggle: document.getElementById('mobile-menu-toggle'),
    navMenu: document.getElementById('nav-menu'),
    neuralCanvas: document.getElementById('neural-network'),
    backToTop: document.getElementById('back-to-top'),
    
    // 聊天相关
    modelSelect: document.getElementById('model-select'),
    temperatureSlider: document.getElementById('temperature'),
    tempValue: document.getElementById('temp-value'),
    maxTokensInput: document.getElementById('max-tokens'),
    chatMessages: document.getElementById('chat-messages'),
    chatInput: document.getElementById('chat-input'),
    sendButton: document.getElementById('send-button')
};

// 工具函数
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
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    // 平滑滚动
    smoothScrollTo(element, duration = 600) {
        const targetPosition = element.offsetTop - 80;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = this.easeInOutQuad(timeElapsed, startPosition, distance, duration);
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

    // 生成随机数
    random(min, max) {
        return Math.random() * (max - min) + min;
    },

    // 格式化时间戳
    formatTime(timestamp) {
        const date = new Date(timestamp);
        return date.toLocaleTimeString('zh-CN', {
            hour: '2-digit',
            minute: '2-digit'
        });
    },

    // 类型写字机效果
    typeWriter(element, text, speed = 50) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
};

// 加载管理器
const LoadingManager = {
    init() {
        // 模拟加载进度
        setTimeout(() => {
            this.hide();
        }, 2000);
    },

    hide() {
        if (elements.loadingScreen) {
            elements.loadingScreen.classList.add('hidden');
            setTimeout(() => {
                elements.loadingScreen.style.display = 'none';
            }, 500);
        }
    }
};

// 主题管理器
const ThemeManager = {
    currentTheme: CONFIG.theme.default,

    init() {
        this.loadTheme();
        this.bindEvents();
    },

    loadTheme() {
        const savedTheme = localStorage.getItem(CONFIG.theme.storageKey);
        if (savedTheme) {
            this.currentTheme = savedTheme;
        }
        this.applyTheme();
    },

    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        this.updateThemeIcon();
    },

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme();
        this.saveTheme();
    },

    saveTheme() {
        localStorage.setItem(CONFIG.theme.storageKey, this.currentTheme);
    },

    updateThemeIcon() {
        if (elements.themeToggle) {
            const icon = elements.themeToggle.querySelector('i');
            if (icon) {
                icon.className = this.currentTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
            }
        }
    },

    bindEvents() {
        if (elements.themeToggle) {
            elements.themeToggle.addEventListener('click', () => {
                this.toggleTheme();
            });
        }
    }
};

// 导航管理器
const NavigationManager = {
    init() {
        this.bindEvents();
        this.updateActiveLink();
    },

    bindEvents() {
        // 移动端菜单切换
        if (elements.mobileMenuToggle) {
            elements.mobileMenuToggle.addEventListener('click', () => {
                this.toggleMobileMenu();
            });
        }

        // 导航链接点击
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    Utils.smoothScrollTo(targetElement);
                    this.setActiveLink(link);
                }
            });
        });

        // 滚动时更新活动链接
        window.addEventListener('scroll', Utils.throttle(() => {
            this.updateActiveLink();
        }, 100));
    },

    toggleMobileMenu() {
        if (elements.navMenu) {
            elements.navMenu.classList.toggle('active');
        }
        if (elements.mobileMenuToggle) {
            elements.mobileMenuToggle.classList.toggle('active');
        }
    },

    setActiveLink(activeLink) {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => link.classList.remove('active'));
        activeLink.classList.add('active');
    },

    updateActiveLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (activeLink) {
                    this.setActiveLink(activeLink);
                }
            }
        });
    }
};

// 神经网络可视化
class NeuralNetworkVisualizer {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.nodes = [];
        this.connections = [];
        this.isRunning = false;
        
        this.init();
    }

    init() {
        this.resizeCanvas();
        this.createNodes();
        this.createConnections();
        this.start();
        
        window.addEventListener('resize', Utils.debounce(() => {
            this.resizeCanvas();
            this.createNodes();
            this.createConnections();
        }, 250));
    }

    resizeCanvas() {
        const rect = this.canvas.getBoundingClientRect();
        this.canvas.width = rect.width * window.devicePixelRatio;
        this.canvas.height = rect.height * window.devicePixelRatio;
        this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        this.canvas.style.width = rect.width + 'px';
        this.canvas.style.height = rect.height + 'px';
    }

    createNodes() {
        this.nodes = [];
        const config = CONFIG.neuralNetwork;
        
        for (let i = 0; i < config.nodeCount; i++) {
            this.nodes.push({
                x: Utils.random(0, this.canvas.offsetWidth),
                y: Utils.random(0, this.canvas.offsetHeight),
                vx: Utils.random(-0.5, 0.5),
                vy: Utils.random(-0.5, 0.5),
                size: Utils.random(config.nodeSize.min, config.nodeSize.max),
                opacity: Utils.random(0.3, 0.8),
                pulseSpeed: Utils.random(0.01, 0.03),
                pulsePhase: Utils.random(0, Math.PI * 2)
            });
        }
    }

    createConnections() {
        this.connections = [];
        const config = CONFIG.neuralNetwork;
        
        for (let i = 0; i < config.connectionCount; i++) {
            const nodeA = this.nodes[Math.floor(Utils.random(0, this.nodes.length))];
            const nodeB = this.nodes[Math.floor(Utils.random(0, this.nodes.length))];
            
            if (nodeA !== nodeB) {
                this.connections.push({
                    nodeA,
                    nodeB,
                    opacity: Utils.random(0.1, config.connectionOpacity),
                    pulseSpeed: Utils.random(0.005, 0.02),
                    pulsePhase: Utils.random(0, Math.PI * 2)
                });
            }
        }
    }

    update() {
        const width = this.canvas.offsetWidth;
        const height = this.canvas.offsetHeight;

        // 更新节点位置
        this.nodes.forEach(node => {
            node.x += node.vx;
            node.y += node.vy;
            
            // 边界反弹
            if (node.x <= 0 || node.x >= width) node.vx *= -1;
            if (node.y <= 0 || node.y >= height) node.vy *= -1;
            
            // 保持在画布内
            node.x = Math.max(0, Math.min(width, node.x));
            node.y = Math.max(0, Math.min(height, node.y));
            
            // 更新脉冲
            node.pulsePhase += node.pulseSpeed;
        });

        // 更新连接
        this.connections.forEach(connection => {
            connection.pulsePhase += connection.pulseSpeed;
        });
    }

    draw() {
        const ctx = this.ctx;
        const width = this.canvas.offsetWidth;
        const height = this.canvas.offsetHeight;
        
        // 清空画布
        ctx.clearRect(0, 0, width, height);
        
        // 绘制连接
        this.connections.forEach(connection => {
            const { nodeA, nodeB } = connection;
            const distance = Math.sqrt(
                Math.pow(nodeB.x - nodeA.x, 2) + Math.pow(nodeB.y - nodeA.y, 2)
            );
            
            if (distance < 150) {
                const opacity = connection.opacity * (1 + Math.sin(connection.pulsePhase) * 0.3);
                ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(nodeA.x, nodeA.y);
                ctx.lineTo(nodeB.x, nodeB.y);
                ctx.stroke();
            }
        });
        
        // 绘制节点
        this.nodes.forEach(node => {
            const size = node.size * (1 + Math.sin(node.pulsePhase) * 0.2);
            const opacity = node.opacity * (1 + Math.sin(node.pulsePhase) * 0.2);
            
            ctx.fillStyle = `rgba(139, 92, 246, ${opacity})`;
            ctx.beginPath();
            ctx.arc(node.x, node.y, size, 0, Math.PI * 2);
            ctx.fill();
        });
    }

    animate() {
        if (!this.isRunning) return;
        
        this.update();
        this.draw();
        requestAnimationFrame(() => this.animate());
    }

    start() {
        this.isRunning = true;
        this.animate();
    }

    stop() {
        this.isRunning = false;
    }
}

// 聊天管理器
const ChatManager = {
    currentModel: 'gpt-4.1-mini-2025-04-14',
    isTyping: false,
    chatHistory: [],

    init() {
        this.bindEvents();
        this.updateTemperatureDisplay();
    },

    bindEvents() {
        // 模型选择
        if (elements.modelSelect) {
            elements.modelSelect.addEventListener('change', (e) => {
                this.currentModel = e.target.value;
                this.addSystemMessage(`已切换到 ${this.getModelDisplayName(this.currentModel)}`);
            });
        }

        // 温度滑块
        if (elements.temperatureSlider) {
            elements.temperatureSlider.addEventListener('input', (e) => {
                this.updateTemperatureDisplay();
            });
        }

        // 发送按钮
        if (elements.sendButton) {
            elements.sendButton.addEventListener('click', () => {
                this.sendMessage();
            });
        }

        // 输入框
        if (elements.chatInput) {
            elements.chatInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    this.sendMessage();
                }
            });

            // 自动调整高度
            elements.chatInput.addEventListener('input', this.autoResizeTextarea);
        }
    },

    updateTemperatureDisplay() {
        if (elements.temperatureSlider && elements.tempValue) {
            elements.tempValue.textContent = elements.temperatureSlider.value;
        }
    },

    autoResizeTextarea() {
        const textarea = elements.chatInput;
        textarea.style.height = 'auto';
        textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
    },

    getModelDisplayName(modelId) {
        const modelNames = {
            'gpt-4.1-mini-2025-04-14': 'GPT-4.1 Mini',
            'amazon.nova-pro-v1:0': 'Amazon Nova Pro',
            'o3-mini': 'O3 Mini',
            'grok-3-mini-beta': 'Grok-3 Mini',
            'deepseek-r1-0528': 'DeepSeek R1',
            'gemini-2.5-flash-lite': 'Gemini 2.5 Flash',
            'claude-3-5-sonnet': 'Claude 3.5 Sonnet',
            'claude-3-5-haiku': 'Claude 3.5 Haiku',
            'amazon-nova-experimental': 'Nova Experimental'
        };
        return modelNames[modelId] || modelId;
    },

    addMessage(content, type = 'user', model = null) {
        if (!elements.chatMessages) return;

        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}-message`;
        
        const timestamp = Utils.formatTime(Date.now());
        
        let messageHTML = '';
        if (type === 'user') {
            messageHTML = `
                <div class="message-header">
                    <span class="message-sender">您</span>
                    <span class="message-time">${timestamp}</span>
                </div>
                <div class="message-content">${this.formatMessage(content)}</div>
            `;
        } else if (type === 'assistant') {
            messageHTML = `
                <div class="message-header">
                    <span class="message-sender">${this.getModelDisplayName(model)}</span>
                    <span class="message-time">${timestamp}</span>
                </div>
                <div class="message-content">${this.formatMessage(content)}</div>
            `;
        } else if (type === 'system') {
            messageHTML = `
                <div class="message-content">
                    <i class="fas fa-info-circle"></i>
                    ${content}
                </div>
            `;
        }

        messageDiv.innerHTML = messageHTML;
        elements.chatMessages.appendChild(messageDiv);
        this.scrollToBottom();

        // 添加到历史记录
        if (type !== 'system') {
            this.chatHistory.push({
                role: type === 'user' ? 'user' : 'assistant',
                content: content,
                timestamp: Date.now(),
                model: model
            });
        }
    },

    addSystemMessage(content) {
        this.addMessage(content, 'system');
    },

    formatMessage(content) {
        // 简单的 Markdown 支持
        return content
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/`(.*?)`/g, '<code>$1</code>')
            .replace(/\n/g, '<br>');
    },

    scrollToBottom() {
        if (elements.chatMessages) {
            elements.chatMessages.scrollTop = elements.chatMessages.scrollHeight;
        }
    },

    async sendMessage() {
        const input = elements.chatInput;
        if (!input || !input.value.trim() || this.isTyping) return;

        const message = input.value.trim();
        input.value = '';
        this.autoResizeTextarea();

        // 添加用户消息
        this.addMessage(message, 'user');

        // 显示typing指示器
        this.showTypingIndicator();

        try {
            // 模拟API调用
            const response = await this.callAPI(message);
            this.hideTypingIndicator();
            this.addMessage(response, 'assistant', this.currentModel);
        } catch (error) {
            this.hideTypingIndicator();
            this.addSystemMessage(`错误: ${error.message}`);
        }
    },

    showTypingIndicator() {
        this.isTyping = true;
        if (elements.sendButton) {
            elements.sendButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            elements.sendButton.disabled = true;
        }

        // 添加打字指示器
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message assistant-message typing-indicator';
        typingDiv.innerHTML = `
            <div class="message-header">
                <span class="message-sender">${this.getModelDisplayName(this.currentModel)}</span>
            </div>
            <div class="message-content">
                <div class="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;
        
        elements.chatMessages.appendChild(typingDiv);
        this.scrollToBottom();
    },

    hideTypingIndicator() {
        this.isTyping = false;
        if (elements.sendButton) {
            elements.sendButton.innerHTML = '<i class="fas fa-paper-plane"></i>';
            elements.sendButton.disabled = false;
        }

        // 移除打字指示器
        const typingIndicator = elements.chatMessages.querySelector('.typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    },

    async callAPI(message) {
        // 模拟API调用延迟
        await new Promise(resolve => setTimeout(resolve, Utils.random(1000, 3000)));

        // 模拟不同模型的响应
        const responses = {
            'gpt-4.1-mini-2025-04-14': `GPT-4.1 Mini 回复：您好！我是GPT-4.1 Mini，一个高效的AI助手。关于"${message}"，我很乐意为您提供帮助。`,
            'claude-3-5-sonnet': `Claude 3.5 Sonnet 回复：感谢您的问题。作为Anthropic开发的AI助手，我会深入思考您的问题："${message}"。`,
            'gemini-2.5-flash-lite': `Gemini Flash 回复：⚡ 快速响应！关于"${message}"，让我为您提供简洁高效的回答。`
        };

        const defaultResponse = `${this.getModelDisplayName(this.currentModel)} 回复：这是一个模拟响应。在实际部署中，这里会调用真实的AI模型API来处理您的问题："${message}"。`;

        return responses[this.currentModel] || defaultResponse;
    }
};

// 滚动动画管理器
const ScrollAnimationManager = {
    init() {
        this.bindEvents();
        this.checkVisibility();
    },

    bindEvents() {
        window.addEventListener('scroll', Utils.throttle(() => {
            this.checkVisibility();
            this.updateBackToTop();
        }, 100));

        // 返回顶部按钮
        if (elements.backToTop) {
            elements.backToTop.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    },

    checkVisibility() {
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        
        animatedElements.forEach(element => {
            if (this.isElementInViewport(element)) {
                element.classList.add('fade-in-up');
            }
        });
    },

    isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top < window.innerHeight - CONFIG.animation.scrollOffset;
    },

    updateBackToTop() {
        if (elements.backToTop) {
            if (window.scrollY > 300) {
                elements.backToTop.classList.add('visible');
            } else {
                elements.backToTop.classList.remove('visible');
            }
        }
    }
};

// 性能监控
const PerformanceMonitor = {
    startTime: performance.now(),

    init() {
        this.logPageLoad();
        this.monitorPerformance();
    },

    logPageLoad() {
        window.addEventListener('load', () => {
            const loadTime = performance.now() - this.startTime;
            console.log(`🚀 AI Hub 加载完成，耗时: ${loadTime.toFixed(2)}ms`);
        });
    },

    monitorPerformance() {
        // 监控长任务
        if ('PerformanceObserver' in window) {
            const observer = new PerformanceObserver((list) => {
                list.getEntries().forEach((entry) => {
                    if (entry.duration > 50) {
                        console.warn(`⚠️ 检测到长任务: ${entry.duration.toFixed(2)}ms`);
                    }
                });
            });
            observer.observe({ entryTypes: ['longtask'] });
        }
    }
};

// 全局函数
window.scrollToSection = function(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        Utils.smoothScrollTo(element);
    }
};

// 错误处理
window.addEventListener('error', (event) => {
    console.error('🔥 JavaScript错误:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('🔥 未处理的Promise拒绝:', event.reason);
});

// 主初始化函数
function initializeApp() {
    console.log('🤖 AI Hub 初始化中...');
    
    try {
        // 初始化各个模块
        LoadingManager.init();
        ThemeManager.init();
        NavigationManager.init();
        ChatManager.init();
        ScrollAnimationManager.init();
        PerformanceMonitor.init();

        // 初始化神经网络可视化
        if (elements.neuralCanvas) {
            new NeuralNetworkVisualizer(elements.neuralCanvas);
        }

        // 添加全局样式类
        document.body.classList.add('js-loaded');

        console.log('✅ AI Hub 初始化完成');
        
    } catch (error) {
        console.error('❌ AI Hub 初始化失败:', error);
    }
}

// DOM 加载完成后初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

// 导出供外部使用
window.AIHub = {
    Utils,
    ThemeManager,
    ChatManager,
    CONFIG
};