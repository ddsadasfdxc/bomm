# 温若小站后端 API

为「温若的个人小站」提供留言板、联系表单、访问统计服务。

## 接口

| 方法 | 路径 | 说明 |
|------|------|------|
| GET  | `/api/messages` | 获取留言列表 |
| POST | `/api/messages` | 提交留言 `{ name, message }` |
| POST | `/api/contact` | 提交联系表单 `{ name, email, subject, message }` |
| GET  | `/api/stats` | 获取 PV / UV / 播放数 |
| POST | `/api/stats` | 记录访问或播放 `{ type: "visit" | "play" }` |

## 部署步骤

### 1. 准备 Redis 数据库

本后端使用 [Upstash Redis](https://upstash.com/) 免费版存储数据。

1. 访问 https://console.upstash.com/ ，用 GitHub 账号登录
2. 创建一个 Redis 数据库，区域建议选 `ap-southeast-1`（新加坡）或离你 Vercel 区域近的
3. 进入数据库详情页，复制：
   - `UPSTASH_REDIS_REST_URL`
   - `UPSTASH_REDIS_REST_TOKEN`

### 2. 部署到 Vercel

#### 方式 A：命令行（推荐）

```bash
# 进入后端目录
cd wenruo-api

# 安装依赖
npm install

# 登录 Vercel（已登录可跳过）
npx vercel login

# 部署到 Vercel，按提示创建项目
npx vercel

# 添加环境变量
npx vercel env add UPSTASH_REDIS_REST_URL
npx vercel env add UPSTASH_REDIS_REST_TOKEN

# 重新部署以应用环境变量
npx vercel --prod
```

#### 方式 B：Vercel 网页控制台

1. 在 GitHub 新建一个仓库，把 `wenruo-api` 目录里的文件上传上去
2. 访问 https://vercel.com/new ，导入这个仓库
3. 在 **Environment Variables** 添加：
   - `UPSTASH_REDIS_REST_URL`
   - `UPSTASH_REDIS_REST_TOKEN`
4. 点击 Deploy

### 3. 更新前端

部署成功后，Vercel 会给你一个域名，例如：

```
https://wenruo-api-xxxxx.vercel.app
```

打开 `/workspace/js/social.js`，把第一行的：

```javascript
const API = 'https://wenruo-api.vercel.app';
```

替换为你的真实域名，然后重新构建部署前端。

### 4. 跨域说明

`vercel.json` 已配置 `Access-Control-Allow-Origin: *`，允许你的网站跨域调用。如果你的网站有自定义域名，也可以改成指定域名：

```json
{
  "key": "Access-Control-Allow-Origin",
  "value": "https://lss.work.gd"
}
```

## 免费额度

- Upstash Redis 免费版：每日 10,000 次请求，足够个人小站使用
- Vercel Hobby：每月 100 GB 流量、Serverless Function 免费额度足够
