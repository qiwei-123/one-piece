import Vue from 'vue';
import App from './App.vue';
import router from "./router/index";
import '../assets/css/base.css';
import store from './store';


Vue.config.productionTip = false

// $bus 正常是空的 需为其创建一个vue 实例
Vue.prototype.$bus = new Vue()

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
}).$mount('#app')
