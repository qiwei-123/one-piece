import Vue from 'vue'
import App from './App.vue'
// 此处导入router 导入是个目录 则会自动寻找index文件 所以可以不加后缀 /index.js
import router from './router'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})