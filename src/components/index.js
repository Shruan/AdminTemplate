import TpLoadingBar from './TpLoadingBar'

const install = function (Vue, options) {
  // 1. 添加全局方法或属性
  Vue.prototype.$tpLoadingTar = TpLoadingBar
}

export default install
