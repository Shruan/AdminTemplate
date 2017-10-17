import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    inportProgress: '',
    collection: {
      collectionTitle: '',
      progressLine: '',
      importProgress: ''
    }
  },
  mutations: {
    user (state, user) {
      state.user = user
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
})
