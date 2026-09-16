export interface ExperienceItem {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string[];
  highlights?: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export interface EducationItem {
  school: string;
  degree: string;
  field: string;
  graduationDate: string;
  details?: string[];
}

export const cvData = {
  personal: {
    name: 'Idmar',
    title: 'Full-Stack Developer',
    email: 'idmar@example.com',
    phone: '+86 1234567890',
    location: 'Beijing, China',
    bio: '有5年以上全栈开发经验，专注于构建高性能、用户友好的 Web 应用。',
    links: [
      { label: 'GitHub', url: 'https://github.com' },
      { label: 'LinkedIn', url: 'https://linkedin.com' },
      { label: 'Portfolio', url: 'https://portfolio.com' },
    ],
  },
  experience: [
    {
      company: 'Tech Company A',
      position: 'Senior Frontend Developer',
      startDate: '2022-01',
      endDate: 'Present',
      description: [
        '领导前端团队开发公司核心产品，使用 React 和 TypeScript',
        '优化应用性能，首屏加载时间从 4s 降低到 1.2s',
        '建立和维护组件库，提高开发效率 30%',
      ],
      highlights: ['React', 'TypeScript', 'Performance', 'Team Lead'],
    },
    {
      company: 'Startup B',
      position: 'Full-Stack Developer',
      startDate: '2020-06',
      endDate: '2021-12',
      description: [
        '从零构建 SaaS 产品的全栈技术架构',
        '实现后端 API（Node.js + Express）和前端应用（React）',
        '部署到云服务器，支持日均 10 万请求',
      ],
      highlights: ['Node.js', 'React', 'PostgreSQL', 'AWS'],
    },
  ] as ExperienceItem[],
  skills: [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Vue.js'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'] },
    { category: 'DevOps', items: ['Docker', 'AWS', 'CI/CD', 'Linux'] },
    { category: 'Tools', items: ['Git', 'Webpack', 'Vite', 'Jest'] },
  ],
  projects: [
    {
      title: 'E-Commerce Platform',
      description: '全功能电商平台，支持商品管理、订单处理、支付集成',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: 'https://example.com',
      github: 'https://github.com/example/ecommerce',
    },
    {
      title: 'Real-time Chat Application',
      description: '基于 WebSocket 的实时聊天应用，支持群组、文件分享',
      technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      github: 'https://github.com/example/chat-app',
    },
    {
      title: 'Data Visualization Dashboard',
      description: '数据可视化仪表板，实时展示业务关键指标',
      technologies: ['React', 'D3.js', 'TypeScript', 'REST API'],
      link: 'https://example.com/dashboard',
    },
  ] as Project[],
  education: [
    {
      school: 'University of Technology',
      degree: 'Bachelor',
      field: 'Computer Science',
      graduationDate: '2020-06',
      details: ['GPA: 3.8/4.0', '获得优秀毕业生称号'],
    },
  ] as EducationItem[],
};
