import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Layout from '@/pages/Index'
import Home from '@/pages/Home/Index'

import ActivtyManage from './activityManage'
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
