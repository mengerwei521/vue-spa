import Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from  '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'
Vue.use(VueRouter)  //声明使用

export default new VueRouter({
  routes:[
    {
      path:'/msite',
      component:Msite,
      meta:{
        showFooter:true // 标识需要显示footer
      }
    },
    {
      path:'/order',
      component:Order,
      meta:{
        showFooter:true // 标识需要显示footer
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        showFooter:true // 标识需要显示footer
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        showFooter:true // 标识需要显示footer
      }
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/',
      redirect:'/msite'
    },


  ]
})
