// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from './store/index.js'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)
Vue.directive('myfocus', {
  // 当绑定的元素插入到DOM ...
  insert: function (el, {value}) {
    // 聚焦元素
    if (value) {
      el.focus()
    }
  }
})

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.apiUrl = 'http://www.ehpat.com'
Vue.prototype.setUser = (user) => {
  store.commit('user', user)
}

Vue.prototype.getUser = () => {
  return store.state.user
}
Vue.prototype.setProgressMsg = (importProgress) => {
  store.commit('importProgress', importProgress)
}
Vue.prototype.getProgressMsg = (importProgress) => {
  return store.state.importProgress
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
