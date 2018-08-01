import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'

// 布局
import Layout from '@/pages/layout'

import Home from '@/pages/home/index' // 首页
import WheelSurf from '@/pages/home/wheelSurf' // 首页

import ActivtyManage from './activityManage' // 活动管理页面

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'Index',
      component: Layout,
      children: [
        {
          path: '/home/index',
          component: Home,
          name: 'Home',
          meta: {
            title: '个人主页',
            tag: true
          }
        },
        {
          path: '/home/createVotes',
          component: Home,
          name: 'CcreateVotes',
          meta: {
            title: '发起投票',
            tag: true
          }
        },
        {
          path: '/home/myVotes',
          component: Home,
          name: 'MyVotes',
          meta: {
            title: '我发起的投票',
            tag: true
          }
        },
        {
          path: '/home/editSlide',
          component: Home,
          name: 'EditSlide',
          meta: {
            title: '设置个人主页',
            tag: true
          }
        },
        {
          path: '/home/messageUse',
          component: Home,
          name: 'MessageUse',
          meta: {
            title: '管理',
            tag: true
          }
        },
        {
          path: '/home/productCenter',
          component: Home,
          name: 'ProductCenter',
          meta: {
            title: '产品中心',
            tag: true
          }
        },
        {
          path: '/home/wheelSurf',
          component: WheelSurf,
          name: 'WheelSurf',
          meta: {
            title: '转盘抽奖',
            tag: true
          }
        }
      ]
    },
    {
      path: '/activtyManage',
      name: 'ActivtyManage',
      component: Layout,
      children: [
        ...ActivtyManage
      ]
    }
  ]
})
