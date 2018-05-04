import $$ from '@/store/plugins/storage'
import menuList from './menuList'

const namespace = 'globalModule'

$$.setNamespace(namespace)

const state = {
  isMobile: false,
  user: {},
  menuList: menuList,
  isCollapse: false, // 是否关闭左侧菜单栏
  // 顶部tags列表
  tagsList: [
    { routerName: 'Home', label: '首页' }
  ],
  tag: 'Home', // 激活的tag
  inportProgress: '',
  collection: {
    collectionTitle: '',
    progressLine: '',
    importProgress: ''
  }
}

const mutations = {
  _isMobile (state, value) {
    state.isMobile = value
  },
  _user (state, user) {
    state.user = user
  },
  _isCollapse (state, data) {
    state.isCollapse = data
  },
  _menuList (state, data) {
    state.menuList = data
  },
  _tagsList (state, data) {
    state.tagsList = data
  },
  _tag (state, value) {
    state.tag = value
  },
  importProgress (state, importProgress) {
    state.importProgress = importProgress
  },
  collection (state, data) {
    state.collection.collectionTitle = data.collectionTitle
    state.collection.progressLine = data.progressLine
    state.collection.importProgress = data.importProgress
  }
}

const actions = {
  _AddTag ({ commit, state }, data) {
    let tag = {
      routerName: data.name,
      label: data.meta.title
    }
    let tagsList = state.tagsList
    if (!tagsList.some(item => item.routerName === tag.routerName)) {
      tagsList.push(tag)
      commit('_tagsList', tagsList)
    }
    commit('_tag', tag.routerName)
  }
}

const getters = {}

export default { namespaced: true, state, mutations, getters, actions }
