import TpLoadingBar from './TpLoadingBar'
import Vue from 'vue'

const _data = { percent: 0, status: 'success', isShow: false }
let time
const Instance = new Vue({
  data: _data,
  render (h) {
    return h(TpLoadingBar, {
      props: _data
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
  let data = _data
  data.isShow = false
  update(data)
}

const start = function () {
  if (time) clearInterval(time)
  let data = _data
  data.percent = 0
  data.status = 'success'
  data.isShow = true
  time = setInterval(() => {
    data.percent += 20
    if (data.percent === 100) clearInterval(time)
    update(data)
  }, 800)
}

const finish = function () {
  if (time) clearInterval(time)
  update({ percent: 100, status: 'success' })
  setTimeout(() => { hide() }, 500)
}

const error = function () {
  if (time) clearInterval(time)
  update({ percent: 100, status: 'error' })
  setTimeout(() => { hide() }, 500)
}

let tpLoadingTar = {
  start,
  error,
  finish
}

export default tpLoadingTar
