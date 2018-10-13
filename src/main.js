// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {Button} from 'mint-ui'
import router from './router'
import store from './store'
import TopHeader from './components/TopHeader/TopHeader.vue'
import 'swiper/dist/css/swiper.css'
//注册全局组件
Vue.component('TopHeader',TopHeader)
Vue.component(Button.name, Button) // mt-button

/* eslint-disable no-new */
new Vue({
  el: '#app',
 /* components: { App },
  template: '<App/>',*/
  /*
   render:function(createElement){ // 函数返回的标签会被渲染到el中
   return createElement(App) //'<App>'
   }
  */
  render:h => h(App),
  router,
  store,
})
