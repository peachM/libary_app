import Vue from 'vue'
import Router from 'vue-router'
import HotBook from "./components/HotBook.vue"
import Index from "./components/Index.vue"
import Bulletin from "./components/Bulletin.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component:Index},
    {path:'/Bulletin',component:Bulletin},
    {path:'/HotBook',component:HotBook},
  ]
})
