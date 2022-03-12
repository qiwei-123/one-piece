import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: []
  },
  mutations: {
    set_list(state, value) {
      state.list = value;
    },
  },
  actions: {
    setList({ commit }, value) {
      commit("set_list", value)
    },
  },
  modules: {
  },
  getters
})
