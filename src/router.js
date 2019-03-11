import Vue from 'vue'
import Router from 'vue-router'
import HotBook from "./components/HotBook.vue"
import Index from "./components/Index.vue"
import Bulletin from "./components/Bulletin.vue"
import BookDetail from './components/BookDetail'
import Login from './components/Login.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component:Index},
    {path:'/Login',component:Login},
    {path:'/Bulletin',component:Bulletin},
    {path:'/HotBook',component:HotBook},
    {path:'/BookDetail',component:BookDetail},
  ]
})
