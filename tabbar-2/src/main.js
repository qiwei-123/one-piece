import Vue from 'vue'
import App from './App.vue'
import router from "./router/index";
// import '../assets/img/font_2849704_x6m41w95uc/iconfont';
import '../assets/css/base.css';


Vue.config.productionTip = false

// $bus 正常是空的 需为其创建一个vue 实例
Vue.prototype.$bus = new Vue()

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')
