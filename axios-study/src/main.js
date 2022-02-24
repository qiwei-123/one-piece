import Vue from 'vue'
import App from './App.vue'
// axios 是框架不是插件 无需使用use 
// 当使用request 封装后 进行网络请求 需将axios 注掉 用不上 已经在request导入了
// import axios from 'axios'
// , { Axios }


Vue.config.productionTip = false

new Vue({

  render: h => h(App),
}).$mount('#app')

// // 1.使用全局配置进行网络请求
// axios.defaults.baseURL = 'http://123.207.32.32:8000';
// // 单位 ms
// axios.defaults.timeout = 5000;
// // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// // 发送网络请求
// axios.all([axios({
//   url: '/home/multidata'
// }), axios({
//   url: '/home/data',
//   params: {
//     type: 'sell',
//     page: 5
//   }
// })]).then(axios.spread((res1, res2) => {
//   console.log(res1);
//   console.log(res2);
// }))


// 2.创建对应的实例 调用时都有其独立的基础设置  
// 真实项目需将次配置封装
// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000
// })
// instance1({
//   url: '/home/multidata'
// }).then((res) => {
//   console.log(res);
// })

// instance1({
//   url: '/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// })


// 3.封装request模块 用到组件第一件事指定是导入啦
import { request } from './network/request'
// request({
//   url: '/home/multidata',
// }, value => {
//   console.log(value);
// }, error => {
//   console.log(error);
// })
request({
  url: '/home/multidata'
}).then(value => {
  console.log(value);
}).catch(error => {
  console.log(error);
})