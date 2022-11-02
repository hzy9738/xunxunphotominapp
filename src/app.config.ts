export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/calendar/index',
    'pages/photo/index',
    'pages/image/index',
    'pages/video/index',
    'pages/setting/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#7F8389',
    selectedColor: '#07c160',
    borderStyle: 'black',
    backgroundColor: '#fff',
    list: [
      {
        pagePath: 'pages/calendar/index',
        iconPath: 'assets/images/index-unselected.png',
        selectedIconPath: 'assets/images/index-selected.png',
        text: '云相册'
      },
      {
        pagePath: 'pages/setting/index',
        iconPath: 'assets/images/index-unselected.png',
        selectedIconPath: 'assets/images/index-selected.png',
        text: '设置'
      },
    ]
  }
})
