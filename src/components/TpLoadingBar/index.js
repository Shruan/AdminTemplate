import TpLoadingBar from './TpLoadingBar'
import Vue from 'vue'

const _config = { percent: 0, status: 'success', isShow: false, failedcolor: 'error' }
let time

const Instance = new Vue({
  data: _config,
  render (h) {
    return h(TpLoadingBar, {
      props: _config
    })
  }
})
const component = Instance.$mount()
document.body.appendChild(component.$el)

function update (data) {
  for (let key in data) {
    if (component.$data.hasOwnProperty(key)) {
      component.$data[key] = data[key]
    }
  }
}

function hide () {
  let data = _config
  data.isShow = false
  update(data)
}

const destroy = function () {
  document.body.removeChild(document.getElementsByClassName('shy__loading-bar')[0])
}

const start = function () {
  if (time) clearInterval(time)
  let data = _config
  data.percent = 0
  data.status = 'success'
  data.isShow = true
  time = setInterval(() => {
    data.percent += 5
    if (data.percent === 95) clearInterval(time)
    update(data)
  }, 500)
}

const finish = function () {
  if (time) clearInterval(time)
  update({ percent: 100, status: 'success' })
  setTimeout(() => { hide() }, 500)
}

const error = function () {
  if (time) clearInterval(time)
  update({ percent: 100, status: 'error', failedColor: _config.failedColor })
  setTimeout(() => { hide() }, 500)
}

const config = function (config) {
  if (config.color) {
    _config.color = config.color
  }
  if (config.failedColor) {
    _config.failedColor = config.failedColor
  }
}

let tpLoadingTar = {
  start,
  error,
  finish,
  destroy,
  config
}

export default tpLoadingTar
