# 🚀 自动部署到 https://www.lss.work.gd/

本文档说明如何将 Aether Echoes 博客自动部署到指定网站。

## 📋 部署概览

本项目支持多种部署方式：

1. **GitHub Actions 自动部署** ✅ 推荐
2. **本地手动部署**
3. **CI/CD 集成部署**

## 🔧 GitHub Actions 自动部署

### 设置步骤

1. **启用 GitHub Actions**
   - 确保仓库已启用 GitHub Actions
   - 工作流文件位于 `.github/workflows/deploy.yml`

2. **配置部署密钥**（根据目标网站要求）
   
   在 GitHub 仓库设置中添加以下 Secrets：

   ```
   Settings -> Secrets and variables -> Actions -> New repository secret
   ```

   根据部署方式添加相应密钥：

   **FTP 部署：**
   - `FTP_HOST`: FTP服务器地址
   - `FTP_USER`: FTP用户名
   - `FTP_PASS`: FTP密码

   **SSH 部署：**
   - `SSH_PRIVATE_KEY`: SSH私钥
   - `SSH_HOST`: 服务器地址
   - `SSH_USER`: SSH用户名

   **API 部署：**
   - `DEPLOY_API_KEY`: API密钥
   - `DEPLOY_API_URL`: API端点

   **Webhook 部署：**
   - `WEBHOOK_URL`: Webhook地址

3. **触发部署**
   
   以下操作会自动触发部署：
   - 推送到 `main` 或 `master` 分支
   - 手动触发（在 Actions 页面点击 "Run workflow"）

### 部署流程

```
📥 检出代码
🔧 设置 Node.js 环境
📦 安装依赖
🔍 代码质量检查
🔨 构建项目
⚡ 优化文件
📊 生成部署信息
🧪 测试构建结果
📤 推送到 GitHub Pages (可选)
🌐 部署到目标网站
📋 部署总结
💬 部署通知
```

## 💻 本地手动部署

### 使用部署脚本

```bash
# 运行自动部署脚本
node deploy.js

# 或使用 npm 脚本
npm run deploy
```

### 手动构建步骤

```bash
# 1. 创建构建目录
mkdir -p dist

# 2. 复制文件
cp index.html style.css script.js README.md dist/
cp -r image music dist/

# 3. 运行优化
# （可选）压缩文件以提高加载速度

# 4. 部署到目标服务器
# 根据服务器类型选择上传方式
```

## 🌐 支持的部署方式

### 1. FTP 上传

```bash
# 使用 lftp 上传
lftp -c "
  set ftp:ssl-allow no;
  open -u username,password ftp.example.com;
  mirror -R dist/ /public_html/;
  quit
"
```

### 2. SSH/RSYNC 部署

```bash
# 使用 rsync 同步文件
rsync -avz --delete dist/ user@server:/var/www/html/
```

### 3. API 部署

```bash
# 使用 API 上传
curl -X POST "https://api.example.com/deploy" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -F "files=@dist.tar.gz"
```

### 4. Webhook 触发

```bash
# 触发 Webhook 部署
curl -X POST "https://webhook.example.com/deploy" \
  -H "Content-Type: application/json" \
  -d '{"action": "deploy", "source": "github"}'
```

## 📊 部署监控

### 部署状态

- ✅ **成功**：所有步骤完成，网站已更新
- ⚠️ **警告**：部分步骤失败，但部署继续
- ❌ **失败**：部署中断，需要检查错误

### 日志查看

1. **GitHub Actions 日志**
   - 访问仓库 -> Actions 标签
   - 点击对应的工作流运行

2. **本地部署日志**
   - 查看控制台输出
   - 检查 `dist/deploy.json` 文件

## 🔧 自定义部署配置

### 修改目标网址

编辑以下文件中的目标地址：

1. `deploy.js` - 第 13 行
2. `.github/workflows/deploy.yml` - TARGET_URL 环境变量
3. `package.json` - homepage 字段

```javascript
// deploy.js
const CONFIG = {
    targetUrl: 'https://your-domain.com/',  // 修改这里
    // ...
};
```

### 添加自定义部署逻辑

在 `.github/workflows/deploy.yml` 的 "部署到目标网站" 步骤中添加您的部署代码：

```yaml
- name: 🌐 部署到目标网站
  run: |
    # 添加您的部署命令
    echo "部署到 https://www.lss.work.gd/"
    
    # 示例：上传到您的服务器
    # scp -r dist/* user@server:/var/www/html/
```

## 🚨 故障排除

### 常见问题

1. **文件上传失败**
   - 检查网络连接
   - 验证服务器凭据
   - 确认权限设置

2. **构建失败**
   - 检查文件完整性
   - 验证 Node.js 版本
   - 查看错误日志

3. **部署超时**
   - 检查文件大小
   - 优化网络连接
   - 增加超时时间

### 获取帮助

如果遇到部署问题：

1. 查看 [GitHub Actions 日志](../../actions)
2. 检查服务器状态
3. 联系技术支持

## 📈 性能优化

### 自动优化

部署过程会自动执行以下优化：

- ✅ CSS 压缩
- ✅ HTML 压缩  
- ✅ 文件大小分析
- ✅ 加载性能测试

### 手动优化建议

1. **图片优化**
   - 使用 WebP 格式
   - 压缩图片大小
   - 实现懒加载

2. **代码分割**
   - 按需加载 JavaScript
   - 分离第三方库
   - 优化 CSS 加载

3. **缓存策略**
   - 设置合适的缓存头
   - 使用 CDN 加速
   - 启用 Gzip 压缩

---

## 🎉 部署完成

部署成功后，您的博客将在以下地址可用：

**主要地址：** https://www.lss.work.gd/

**GitHub Pages：** https://your-username.github.io/bomm/ (如果启用)

享受您的全新博客网站！ ✨