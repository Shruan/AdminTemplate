import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Index from '@/pages/Index'
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
      component: Index,
      children: [
        {
          path: '/home/index',
          component: Home,
          name: '主页'
        },
        ...ActivtyManage
      ]
    }
  ]
})
