// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from './store/index.js'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'

import TpComponents from '@/components'
Vue.use(TpComponents)

Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.apiUrl = 'http://www.ehpat.com'

// 路由跳转触发组件 TpLoadingBar(加载进度条)
router.beforeEach((to, from, next) => {
  TpComponents.TpLoadingBar.start()
  next()
})

router.afterEach((to, from) => {
  // 关闭加载进度条
  if (!to.name || to.name === 'Error') {
    TpComponents.TpLoadingBar.error()
  } else {
    TpComponents.TpLoadingBar.finish()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
