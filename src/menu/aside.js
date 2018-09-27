// 菜单 侧边栏
export default [
  { path: '/index', title: '首页', icon: 'home' },
  {
    title: '微信',
    icon: 'wechat',
    children: [
      { path: '/wechat-menu', title: '菜单设置' }
    ]
  }
]
