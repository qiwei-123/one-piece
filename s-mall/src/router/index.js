// import { Vue } from "vue";
// import { VueRouter } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router'

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  /*
   *   在这里和vue2一样写路由配置
  */
  routes
})

// 懒加载
const Home = () => import('../View/Home/Home')
const Cart = () => import('../View/Cart/Cart')
const Category = () => import('../View/Category/Category')
const Profile = () => import('../View/Profile/Profile')

// 1.安装插件
// Vue.use(VueRouter)

// 2.创建路由对象
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/Category',
    component: Category
  },
  {
    path: '/Cart',
    component: Cart
  },
  {
    path: '/Profile',
    component: Profile
  }
]
// const router = new VueRouter({
//   routes,
//   mode: 'history',
// })

// 3.导出
export default router

// 导出后去main.js 中挂载