// 路由路径配置
import Vue from 'vue'
import Router from 'vue-router'
import Page1 from '../components/Page1.vue'
import Page2 from '../components/Page2.vue'
import BaiDuMap from '../components/BaiDuMap.vue'
import Swiper from '../components/Swiper.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      name: 'Page1',
      // redirect: '/Page1',
      component: Page1
    },
    {
      path: '/Page2',
      name: 'Page2',
      component: Page2
    },
    {
      path: '/BaiDuMap',
      name: 'BaiDuMap',
      component: BaiDuMap
    },
    {
      path: '/Swiper',
      name: 'Swiper',
      component: Swiper
    }
  ]
})
