import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'

Vue.use(Router)

const Swiper = () => import('@/views/Swiper.demo.vue')
const Axios = () => import('@/views/axios.demo.vue')
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/swiper',
    name: 'Swiper',
    component: Swiper
  },
  {
    path: '/axios',
    name: 'Axios',
    component: Axios
  }
]

export default new Router({
  routes
})
