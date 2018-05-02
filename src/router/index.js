import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'

// 布局
import Layout from '@/pages/layout'

import Home from '@/pages/home' // 首页
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
            title: '个人主页'
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
