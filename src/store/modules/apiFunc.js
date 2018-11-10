import $$ from '@/store/plugins/storage'
import { apiFn } from '@/constant'
import api from '@/api'

const namespace = 'apiFunc'

$$.setNamespace(namespace)

const state = {

}

const mutations = {

}

const actions = {
  [apiFn[ACCOUNT_USER_INFO]]({commit}, params) {
    // commit()
    return api[apiFn[ACCOUNT_USER_INFO]]().then(res => {
      return res.data
    })
  }
}

const getters = {}

export default { namespaced: true, state, mutations, getters, actions }
