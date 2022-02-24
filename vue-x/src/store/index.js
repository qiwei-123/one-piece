import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    conuter: 1000
  },
  // mutations: {
  // mutations 内无法进行异步操作 修改state 唯一途径通过mutation 函数
  //   [INCREMENT](state) {
  //     state.counter++;
  //   },
  //   decrement(state) {
  //     state.counter--;
  //   }

  // },
  // actions: {
  //  可以进行异步操作
  // aUpdateInfo(context, payload){  //context 上下文  context = store 暂时理解
  // setTimeout(() => {
  //   context.commit('updateInfo');
  //   payload()
  // }, 1000);
  // }
  // },
  // getters: {

  // },
  // modules: {

  // }
})

export default store