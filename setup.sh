#!/bin/bash

echo "正在设置 HTML Comment Toggle 插件..."

echo "1. 安装依赖..."
npm install

echo "2. 编译插件..."
npm run compile

echo "3. 设置完成！"
echo ""
echo "使用方法："
echo "1. 在 Cursor 中按 F5 启动扩展开发主机"
echo "2. 在新窗口中打开 Vue 文件"
echo "3. 在 template 部分选择代码块"
echo "4. 按 Ctrl+Shift+/ 测试功能"
echo ""
echo "发布插件："
echo "1. 运行: vsce login html-comment-toggle"
echo "2. 运行: vsce publish"
