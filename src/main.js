// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from './store/index.js'
import http from './utils/request'
import 'element-ui/lib/theme-chalk/index.css'

import TpComponents from '@/components'
Vue.use(TpComponents)

Vue.use(ElementUI)

Vue.prototype.$http = http

Vue.config.productionTip = false

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

/* eslint-disable no-extend-native */
Date.prototype.Format = function (fmt) {
  // 日期格式化
  var o = {
    'M+': this.getMonth() + 1,
    'd+': this.getDate(),
    'h+': this.getHours(),
    'm+': this.getMinutes(),
    's+': this.getSeconds(),
    'q+': Math.floor((this.getMonth() + 3) / 3),
    'S': this.getMilliseconds()
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
  }
  return fmt
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
