// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 入口文件，导入路由view模块
import Vue from 'vue'
import App from './App'
import router from './router/router'
import BaiDuMap from 'vue-baidu-map'

import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

import '../node_modules/jquery/dist/jquery.min.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

import ElementUI from 'element-ui'
Vue.use(ElementUI)
import 'element-ui/lib/theme-default/index.css'

Vue.config.productionTip = false

Vue.use(BaiDuMap, {
  ak: 'CDVH3hdZkW2spflXfrocCWwAuH6qSGr9'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App},
  render: h => h(App)
})

