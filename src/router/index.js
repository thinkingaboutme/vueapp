import Vue from 'vue'
import Router from 'vue-router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Home from '@/pages/home/Home'
import '@/assets/style/reset.css'
import '@/assets/style/border.css'
import '@/assets/style/iconfont.css'
import 'swiper/dist/css/swiper.css'
Vue.use(Router)
Vue.use(VueAwesomeSwiper)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
