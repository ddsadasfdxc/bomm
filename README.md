# ✨ Aether Echoes | 灵感回响

> 一个极其优美的个人博客网站，在代码与诗意之间记录思考的轨迹

![部署状态](https://img.shields.io/badge/部署状态-成功-brightgreen)
![版本](https://img.shields.io/badge/版本-v1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## 🌟 项目特色

### 🎨 **现代化设计**
- ✨ 简洁优雅的界面设计
- 🌓 暗色/亮色主题切换
- 📱 完美的响应式布局
- 🎭 精美的动画效果

### ⚡ **丰富功能**
- 🚀 优美的加载动画
- 🖱️ 自定义光标效果
- 🌌 粒子动画背景
- 📜 平滑滚动体验
- 📧 完整的联系表单

### 🏗️ **技术亮点**
- 🔥 现代CSS (Grid、Flexbox、CSS变量)
- ⚙️ 模块化JavaScript架构
- 📊 性能监控与优化
- 🔧 自动化部署流程

## 🚀 在线访问

**主站地址：** [https://www.lss.work.gd/](https://www.lss.work.gd/)

## 📦 项目结构

```
bomm/
├── index.html          # 主页面
├── style.css           # 样式文件
├── script.js           # 脚本文件
├── deploy.js           # 部署脚本
├── package.json        # 项目配置
├── DEPLOY.md          # 部署说明
├── image/             # 图片资源
├── music/             # 音频资源
├── dist/              # 构建输出
└── .github/
    └── workflows/
        └── deploy.yml  # GitHub Actions
```

## 🔧 本地开发

### 快速开始

```bash
# 克隆项目
git clone https://github.com/ddsadasfdxc/bomm.git
cd bomm

# 启动本地服务器
python -m http.server 8080
# 或使用 Node.js
npx http-server . -p 8080

# 访问 http://localhost:8080
```

### 开发命令

```bash
# 安装依赖
npm install

# 启动开发服务器
npm start

# 构建项目
npm run build

# 部署到服务器
npm run deploy
```

## 🌐 自动部署

本项目支持自动部署到 [https://www.lss.work.gd/](https://www.lss.work.gd/)

### 部署方式

1. **GitHub Actions** - 推送代码自动触发
2. **本地部署脚本** - `node deploy.js`
3. **手动构建** - 生成 `dist` 目录

### 部署流程

```
📥 检出代码 → 🔨 构建项目 → ⚡ 优化文件 → 🌐 部署上线
```

详细说明请查看 [DEPLOY.md](./DEPLOY.md)

## 📊 性能优化

- ✅ CSS/JS/HTML 压缩
- ✅ 图片懒加载
- ✅ 缓存策略
- ✅ 代码分割
- ✅ 性能监控

## 🛠️ 技术栈

- **前端**: HTML5, CSS3, Vanilla JavaScript
- **字体**: Inter, Playfair Display, JetBrains Mono
- **构建**: Node.js
- **部署**: GitHub Actions, 自动化脚本
- **版本控制**: Git

## 📝 更新日志

### v1.0.0 (2024-01-26)
- ✨ 重新设计整个博客网站
- 🎨 实现暗色/亮色主题切换
- 🚀 添加粒子动画和自定义光标
- 📱 完善响应式设计
- 🔧 创建自动化部署流程

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建您的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 📬 联系方式

- 🌐 网站: [https://www.lss.work.gd/](https://www.lss.work.gd/)
- 📧 邮箱: aether@example.com
- 🐙 GitHub: [@ddsadasfdxc](https://github.com/ddsadasfdxc)

---

<div align="center">

**💫 用心创造，用爱分享 💫**

Made with ❤️ by [Aether](https://github.com/ddsadasfdxc)

</div>