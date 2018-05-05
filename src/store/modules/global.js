import $$ from '@/store/plugins/storage'
import menuList from './menuList'

const namespace = 'globalModule'

$$.setNamespace(namespace)

const homeTag = { routerName: 'Home', label: '首页' }  // 首页页签

const state = {
  isMobile: false,
  user: {},
  menuList: menuList,
  isCollapse: false, // 是否关闭左侧菜单栏
  // 顶部tags列表
  homeTag,  // 首页页签
  tagsList: [
    homeTag
  ],
  tag: homeTag.routerName // 激活的tag
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
  }
}

const actions = {
  // 添加tag
  _AddTag ({ commit, state }, data) {
    // 菜单为标签时添加tag
    if (data.meta.tag) {
      let tag = {
        routerName: data.name,
        label: data.meta.title
      }
      let tagsList = state.tagsList
      // 查询标签是否已存在
      if (!tagsList.some(item => item.routerName === tag.routerName)) {
        tagsList.push(tag)
        commit('_tagsList', tagsList)
      }
      commit('_tag', tag.routerName)
    }
  },
  // 关闭tag
  _CloseTag ({ commit, state }, value) {
    // 关闭选中的标签
    let tagsList = state.tagsList.filter(item => {
      return [value].indexOf(item.routerName) === -1
    })
    if (value === state.tag) {
      let index // 当前选中的tag下标
      for (let i = 0; i < state.tagsList.length; i++) {
        if (state.tag === state.tagsList[i].routerName) {
          index = i
        }
      }
      // 若删除的即是选中的
      commit('_tag', state.tagsList[index - 1].routerName)
    }
    commit('_tagsList', tagsList)
  },
  // 关闭所有tag
  _CloseAllTags ({ commit }) {
    commit('_tagsList', [homeTag])
    commit('_tag', homeTag.routerName)
  },
  // 关闭其他tag
  _CloseOtherTags ({ commit, state }) {
    let tagsList = state.tagsList.filter(item => {
      return [homeTag.routerName, state.tag].indexOf(item.routerName) !== -1
    })
    commit('_tagsList', tagsList)
  }
}

const getters = {}

export default { namespaced: true, state, mutations, getters, actions }
