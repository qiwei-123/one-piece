// 配置路由相关的信息
import VueRouter from 'vue-router'
// 下面相关代码涉及vue 所以需导入vue
import Vue from 'vue'

// 将home about导入
// import Home from '../components/home.vue'
// import About from '../components/about.vue'
// import User from "../components/user.vue";
// 懒加载
const Home = () => import('../components/Home.vue')
const HomeNews = () => import('../components/HomeNews.vue')
const HomeMessage = () => import('../components/HomeMessage.vue')
const About = () => import('../components/About.vue')
const User = () => import('../components/User.vue')
const Profile = () => import('../components/Profile.vue')



// 1.通过vue.use(插件)  安装插件 日后无论什么插件只要是vue插件就使用use
Vue.use(VueRouter)
// 2.创建路由对象 与创建vue相同 都需在内部传一些选项 此处配置映射关系
const routes = [
  // 一个映射关系即为一个对象
  {
    // 此处设置网页打开默认路径 购物网站默认打开是首页
    path: '',
    // 重定向 给网页重新定义一个方向
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    },
    children: [
      {
        path: '',
        redirect: '/home/news'
      },
      {
        path: 'news',
        component: HomeNews,
        meta: {
          title: '新闻'
        },
      },
      {
        path: 'message',
        component: HomeMessage,
        meta: {
          title: '信息'
        },
      }
    ]

  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    },
  },
  {
    path: '/user/:userId',
    component: User,
    meta: {
      title: '用户'
    },
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '用户信息'
    }
  }
]
const router = new VueRouter({
  // 配置路由和组件之间的应用关系
  routes, // ES6语法 增强写法
  mode: 'history', // 默认为hash 在网页url中有 # 不美观 mode改为history
  // linkActiveClass: 'active'
})

// 全局导航守卫(guard)
// 当点击不同选项时 浏览器标题会随之改变 
// 前置钩子(hook)
router.beforeEach((to, from, next) => {
  // 从from跳转到to
  // 此处需从matched中寻找meta 否则浏览器第一次打开 标题为undefined
  document.title = to.matched[0].meta.title
  next()
})
// 后置钩子 无需调用next()
// router.afterEach((to, from) => {

// })
// 以上两种称为全局守卫 守卫类型: 路由独享守卫: 进入某个路由里时才会进行回调




// 3.将router对象传入到vue实例  main.js想接受到 需导出
export default router


// 使用vue-router的步骤
// 1.创建路由组件
// 2.配置路由映射: 组件和路径映射关系
// 3.使用路由: 通过<router-link>  <router-view>