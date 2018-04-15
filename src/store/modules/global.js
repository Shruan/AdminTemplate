import $$ from '@/store/plugins/storage'
import menuList from './menuList'

const namespace = 'globalModule'

$$.setNamespace(namespace)

const state = {
  user: {},
  inportProgress: '',
  collection: {
    collectionTitle: '',
    progressLine: '',
    importProgress: ''
  },
  isCollapse: false,
  menuList: menuList
}

const mutations = {
  _user (state, user) {
    state.user = user
  },
  _isCollapse (state, data) {
    console.log(data)
    state.isCollapse = data
  },
  importProgress (state, importProgress) {
    state.importProgress = importProgress
  },
  collection (state, data) {
    state.collection.collectionTitle = data.collectionTitle
    state.collection.progressLine = data.progressLine
    state.collection.importProgress = data.importProgress
  },
  _menuList (state, data) {
    state.menuList = data
  }
}

const actions = {}

const getters = {}

export default { namespaced: true, state, mutations, getters, actions }
