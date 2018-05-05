import TpLoadingBar from './TpLoadingBar'
import Vue from 'vue'

let _data = { percent: 10, status: 'success' }

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

const update = function () {
  component.$data.percent = 100
}

const error = function () {
  component.$data.status = 'error'
}

let tpLoadingTar = {
  update,
  error
}

export default tpLoadingTar
