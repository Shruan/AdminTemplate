export default [
  {
    url: '/home/index',
    name: '个人中心',
    icon: 'el-icon-menu'
  },
  {
    name: '活动管理',
    icon: 'el-icon-date',
    children: [
      {
        url: '/home/myActivity',
        name: '我发起的活动'
      }
    ]
  },
  {
    name: '投票管理',
    icon: 'el-icon-edit',
    children: [
      {
        url: '/home/createVotes',
        name: '发起投票'
      },
      {
        url: '/home/myVotes',
        name: '我发起的投票'
      }
    ]
  },
  {
    name: '个人主页',
    icon: 'el-icon-picture',
    key: 'HomePage',
    children: [
      // {
      //   url: '/userDetail',
      //   name: '浏览我的主页'
      // },
      {
        url: '/home/editSlide',
        name: '设置个人主页'
      }
    ]
  },
  {
    name: '小程序　',
    icon: 'el-icon-picture',
    key: 'MiniProgram',
    children: [
      {
        url: '/home/messageUse',
        name: '管理'
      },
      {
        url: '/home/editSlide',
        name: '设置个人主页'
      },
      {
        url: '/home/aboutUs',
        name: '关于我们'
      },
      {
        url: '/home/userNotification',
        name: '用户需知'
      }
    ]
  },
  {
    url: '/home/productCenter',
    name: '产品中心',
    key: 'ProductCenter',
    icon: 'el-icon-star-on'
  },
  {
    url: '/home/userInfo',
    name: '个人信息',
    icon: 'el-icon-setting'
  }
]
