import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Index from '@/pages/Index'
import Home from '@/pages/Home/Index'
import ManageList from '@/pages/Home/ManageList'
import SupplierList from '@/pages/Home/SupplierList'
import LoginLog from '@/pages/Home/LoginLog'
import ImportPatent from '@/pages/Home/ImportPatent'
import SellPatentLog from '@/pages/Home/SellPatentLog'
import GzjCollectLog from '@/pages/Home/GzjCollectLog'
import SoopatCollectLog from '@/pages/Home/SoopatCollectLog'
import CodeCollectLog from '@/pages/Home/CodeCollectLog'

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
        { path: '/home/manage', component: ManageList },
        { path: '/home/supplier', component: SupplierList },
        { path: '/home/loginLog', component: LoginLog },
        { path: '/home/importPatent', component: ImportPatent },
        { path: '/home/sellPatentLog', component: SellPatentLog },
        { path: '/home/gzjCollectLog', component: GzjCollectLog },
        { path: '/home/soopatCollectLog', component: SoopatCollectLog },
        { path: '/home/codeCollectLog', component: CodeCollectLog }
      ]
    }
  ]
})
