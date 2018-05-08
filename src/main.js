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

let http = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? '' : 'https://easy-mock.com/mock/5af01dd24a095174a7d86d1e',
  timeout: 1000
})
// 请求过滤器
http.interceptors.request.use(config => {
  if (Object.keys(store.state.globalModule.user).length) {
    config.headers['X-USER-ID'] = store.state.globalModule.user.id
    config.headers['X-TOEKN'] = store.state.globalModule.user.token
  }
  return config
}, error => {
  return Promise.reject(error)
})
// 响应过滤器
http.interceptors.response.use(res => {
  switch (res.status) {
    case 200:
      if (res.data.success && !res.data.success) {
        router.push({ name: 'Error403' })
        return res.data
      } else {
        return res.data
      }
  }
}, err => {
  switch (err.response.status) {
    case 404:
      console.log('404 error')
      break
    case 500:
      console.log('500 err')
      break
    default:
      console.log('unknow err')
  }
  return Promise.reject(err)
})
Vue.prototype.$http = http

Vue.config.productionTip = false
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
