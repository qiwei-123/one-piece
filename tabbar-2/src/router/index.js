import Vue from "vue";
import VueRouter from "vue-router";


// 懒加载
const Home = () => import('../View/Home/Home')
const Cart = () => import('../View/Cart/Cart')
const Category = () => import('../View/Category/Category')
const Profile = () => import('../View/Profile/Profile')
const Question = () => import('../View/Profile/Question/Question')
const Detail = () => import('../View/detail/Detail')

// 1.安装插件
Vue.use(VueRouter)

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
    component: Profile,
    children: [
      {
        path: '/Question',
        component: Question
      }

    ]
  },
  {
    path: '/Detail',
    component: Detail
  }

]
const router = new VueRouter({
  routes,
  mode: 'history',
})
// 3.导出
export default router