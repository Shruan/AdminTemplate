export default {
  cookie: {
    set: function (name, value) {
      // 缓存过期时间
      let Days = 30
      let exp = new Date()
      exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000)
      document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString() + ';path=/'
      document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString() + ';path=/'
    },
    get: function (name) {
      let arr = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
      let reg = arr
      arr = document.cookie.match(reg)
      if (arr) {
        return unescape(arr[2])
      } else {
        return null
      }
    },
    del: function (name) {
      let exp = new Date()
      exp.setTime(exp.getTime() - 1)
      let cval = this.get(name)
      if (cval != null) {
        document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString() + ';path=/'
      }
    }
  },
  title (title) {
    window.document.title = title
    let iframe = window.document.createElement('iframe')
    iframe.style.display = 'none'
    iframe.setAttribute('src', 'http://named.cn/page/take/img/icon_phone.png')
    let d = function () {
      setTimeout(function () {
        iframe.removeEventListener('load', d)
        document.body.removeChild(iframe)
      }, 0)
    }
    iframe.addEventListener('load', d)
    window.document.body.appendChild(iframe)
  },
  random (n, m) {
    if (!n) {
      n = 0
    }
    if (!m) {
      m = 999999
    }
    return parseInt(Math.random() * (n - m) + m)
  },
  obj2param (obj) {
    if (obj == null) {
      return false
    }
    let param = ''
    for (let item in obj) {
      param += param == '' ? item + '=' + obj[item] : '&' + item + '=' + obj[item]
    }
    return param
  },
  trim (str) { // 删除左右两端的空格
    return str.replace(/(^\s*)|(\s*$)/g, '')
  },
  browserRedirect () {
    let sUserAgent = navigator.userAgent.toLowerCase()
    let bIsIpad = sUserAgent.match(/ipad/i) == 'ipad'
    let bIsIphoneOs = sUserAgent.match(/iphone os/i) == 'iphone os'
    let bIsMidp = sUserAgent.match(/midp/i) == 'midp'
    let bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == 'rv:1.2.3.4'
    let bIsUc = sUserAgent.match(/ucweb/i) == 'ucweb'
    let bIsAndroid = sUserAgent.match(/android/i) == 'android'
    let bIsCE = sUserAgent.match(/windows ce/i) == 'windows ce'
    let bIsWM = sUserAgent.match(/windows mobile/i) == 'windows mobile'
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
      return 'phone'
    } else {
      return 'pc'
    }
  },
  isInteger (x) {
    return x % 1 === 0
  }
}
