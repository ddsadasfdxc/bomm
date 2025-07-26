#!/bin/bash
# 自动部署脚本
# 目标网站: https://www.lss.work.gd/

echo "🚀 开始部署到 https://www.lss.work.gd/"

# 检查文件
if [ ! -f "index.html" ]; then
    echo "❌ 错误: 找不到 index.html"
    exit 1
fi

# 上传文件
echo "📤 上传文件中..."
# 这里添加具体的上传逻辑，比如 FTP、SSH、或 API 调用

echo "✅ 部署完成！"
echo "🌐 网站地址: https://www.lss.work.gd/"
