import Vue from 'vue'
import VueRouter from 'vue-router'

//  组件页面懒加载
const Home = () => import ('views/home/Home');
const Detail = () => import ('views/detail/Detail')
const Category = () => import ('views/category/Category')
const Cart = () => import ('views/cart/Cart')
const Profile = () => import ('views/profile/Profile')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // 重定向，进入页面默认显示首页
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/detail',
    component: Detail
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
