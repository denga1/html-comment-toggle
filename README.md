# HTML Comment Toggle

一个专为 Vue 模板设计的 HTML 多行注释切换插件。

## 功能

- 智能切换 HTML 代码块的注释状态
- 自动处理内部注释的转换
- 仅在 Vue 文件的 template 部分工作

## 使用方法

1. 在 Vue 文件的 `<template>` 部分选择要切换注释的代码块
2. 使用快捷键 `Ctrl+Shift+/` (Windows/Linux) 或 `Cmd+Shift+/` (Mac)
3. 或通过命令面板搜索 "HTML Comment Toggle"

## 示例

```html
<!-- 原始代码 -->
<div class="container">
  <h1>标题</h1>
  <p>内容</p>
</div>

<!-- 按 Ctrl+Shift+/ 添加注释 -->
<!-- <div class="container">
  <h1>标题</h1>
  <p>内容</p>
</div> -->

<!-- 再次按 Ctrl+Shift+/ 取消注释 -->
<div class="container">
  <h1>标题</h1>
  <p>内容</p>
</div>
```