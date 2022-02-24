import { createApp } from 'vue'
// import { createApp, VueElement } from 'vue'
// import vue from 'vue'
import App from './App.vue'
// import store from '@/store/s.js'
// 挂载
import router from './router';


import './assets/css/base.css';
import './assets/css/normalize.css';
import '@/assets/img/font_2849704_x6m41w95uc/iconfont.css'

createApp(App).use(router).mount('#app')
// new Vue({
//   render: h => h(App),
//   router
// }).$mount('#app')
