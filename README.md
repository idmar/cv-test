# Idmar's CV - Professional Portfolio

一个现代化、响应式的在线简历展示网站，采用 TypeScript + React + Tailwind CSS 构建。

## 🎯 特性

- ✨ 现代化设计，支持亮色/暗色主题
- 📱 完全响应式布局（手机、平板、桌面）
- 🚀 快速加载，优秀的性能
- ♿ 无障碍访问支持
- 📄 PDF 导出功能
- 🎨 精心设计的色彩系统和排版

## 🛠️ 技术栈

- **框架**: React 18 + TypeScript
- **构建工具**: Vite
- **样式**: Tailwind CSS + PostCSS
- **图标**: Lucide React
- **字体**: Inter (正文) + Montserrat (标题)

## 📦 快速开始

### 安装依赖
```bash
npm install
```

### 开发模式
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

### 预览生产版本
```bash
npm run preview
```

## 📁 项目结构

```
src/
  components/
    Header/           # 个人信息头部
    Navigation/       # 导航栏
    sections/         # 各个简历部分
      Experience.tsx  # 工作经历
      Skills.tsx      # 技能
      Projects.tsx    # 项目
      Education.tsx   # 教育背景
    Footer/           # 页脚
  App.tsx             # 主应用组件
  main.tsx            # 入口文件
  index.css           # 全局样式
```

## 🎨 色彩系统

- **主色**: Sky Blue (#0ea5e9) - 专业感
- **强调色**: Orange (#f97316) - 活力感
- **中性色**: Slate 系列 - 可读性

## 📝 自定义内容

编辑 `src/data/cv.ts`（待创建）修改个人信息：

```typescript
export const cvData = {
  personal: { /* ... */ },
  experience: [ /* ... */ ],
  skills: [ /* ... */ ],
  // ...
};
```

## 📄 导出 PDF

功能将在后续阶段添加，支持一键生成 PDF 版本。

## 📜 License

MIT
