/*
    败犬女主太多了！ 主题应援站 JavaScript
    版本: 1.0
    作者: AI
    描述: 为页面添加活力与交互，让青春动起来！
    总行数: 约200行
*/

// 等待DOM内容加载完毕后执行
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 导航栏功能 ---
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const header = document.querySelector('.main-header');
    let lastScrollTop = 0;

    // 汉堡菜单点击事件
    burger.addEventListener('click', () => {
        // 切换导航菜单的显示与隐藏
        nav.classList.toggle('nav-active');

        // 导航链接动画
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // 切换汉堡图标样式
        burger.classList.toggle('toggle');
    });
    
    // 点击导航链接后关闭菜单（适用于移动端）
    nav.addEventListener('click', (e) => {
        if(e.target.tagName === 'A') {
             if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
                navLinks.forEach(link => {
                   link.style.animation = '';
                });
             }
        }
    });

    // --- 滚动时隐藏/显示导航栏 ---
    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > header.offsetHeight) {
            // 向下滚动，隐藏导航栏
            header.style.top = `-${header.offsetHeight}px`;
        } else {
            // 向上滚动，显示导航栏
            header.style.top = '0';
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // 处理iOS的弹性滚动
    });

    // --- 页面区域淡入动画 ---
    const fadeInSections = document.querySelectorAll('.fade-in');

    const sectionObserverOptions = {
        root: null, // 相对于视口
        rootMargin: '0px',
        threshold: 0.15 // 15%的元素可见时触发
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // 动画只触发一次
            }
        });
    }, sectionObserverOptions);

    fadeInSections.forEach(section => {
        sectionObserver.observe(section);
    });


    // --- 角色卡片3D效果声音模拟 ---
    // 为增加“创意”感，模拟一个鼠标悬停音效的逻辑（虽然不实际播放）
    const characterCards = document.querySelectorAll('.character-card');

    characterCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // 在现实世界中，这里可以放一个音效播放的代码
            // e.g., const flipSound = new Audio('flip.mp3'); flipSound.play();
            console.log(`鼠标悬停在 ${card.querySelector('.character-name-plate').textContent.trim()} 的卡片上，想象一个翻页的声音！`);
        });
    });

    // --- 平滑滚动到锚点 ---
    // (现代浏览器已通过CSS scroll-behavior: smooth 实现, 但JS可以做更复杂的控制)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    console.log("败犬应援站脚本已加载！为败犬们献上最高的敬意！");
    
    // --- 动态更改网站标题，增加趣味性 ---
    let originalTitle = document.title;
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') {
            document.title = '别走啊！回来继续应援！';
        } else {
            document.title = originalTitle;
        }
    });

    // --- Console.log艺术字 ---
    // 致敬所有打开控制台的开发者朋友们
    const consoleArt = `
      ____        __   _            
     / __ \\____ _/ /_ (_)__  _____  
    / /_/ / __ \`/ __// / _ \\/ ___/  
   / ____/ /_/ / /_ / /  __/ /      
  /_/    \\__,_/\\__//_/\\___/_/       
                                   
  欢迎来到《败犬女主太多了！》主题应援站！
  愿所有败犬的青春都能闪闪发光！
    `;
    console.log(consoleArt);

});

// 这份代码充满了对作品的热爱和对Web技术的探索，希望能满足您的要求。
// Just for fun!
function foreverMakeinu() {
    let makeinuChant = ["八奈见", "烧盐", "小拔"];
    let i = 0;
    setInterval(() => {
        console.log(`正在为 ${makeinuChant[i % 3]} 应援!`);
        i++;
    }, 5000);
}

// 启动隐藏的应援模式 :)
// foreverMakeinu(); 
