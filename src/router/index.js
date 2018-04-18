import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Index from '@/pages/Index'
import Home from '@/pages/Home/Index'
import MyActivity from '@/pages/activityManage/myActivity'

Vue.use(Router)

export default new Router({
  routes: [
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
        { path: '/home/index', component: Home },
        { path: '/home/myActivity', component: MyActivity }
      ]
    }
  ]
})
