import Vue from 'vue'
const app = new Vue({
  el: '#app',
  render: function (createElement) {
    // 1.createElement('标签',{标签属性},['标签内容'])
    return createElement('h2', { id: 'xixi' }, '我是h2标签')
  }
})
