export default [
  {
    url: '/home/index',
    name: '个人中心',
    icon: 'el-icon-menu',
    key: 'Home'
  },
  {
    name: '列表页面管理',
    icon: 'el-icon-date',
    key: 'ActivityManage',
    children: [
      {
        url: '/activtyManage/myActivity',
        key: 'MyActivity',
        name: '列表页面'
      }
    ]
  },
  {
    name: '投票管理',
    icon: 'el-icon-edit',
    key: 'VotesManage',
    children: [
      {
        url: '/home/createVotes',
        key: 'CreateVotes',
        name: '发起投票'
      },
      {
        url: '/home/myVotes',
        key: 'MyVotes',
        name: '我发起的投票'
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
    url: '/home/wheelSurf',
    key: 'WheelSurf',
    name: '转盘抽奖',
    icon: 'el-icon-setting'
  }
]
