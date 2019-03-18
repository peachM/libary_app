import Vue from 'vue'
import Router from 'vue-router'
import HotBook from "./components/HotBook.vue"
import Index from "./components/Index.vue"
import Bulletin from "./components/Bulletin.vue"
import BookDetail from './components/BookDetail'
import Login from './components/Login.vue'
import Manager from './components/Manager.vue'
import user from './components/sub/user.vue'
import book from './components/sub/book.vue'
import borrowed from './components/sub/borrowed.vue'
import readers from './components/sub/readers.vue'
import statistical from './components/sub/statistical.vue'
import password from './components/sub/password.vue'
import Borrow from './components/Borrow.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component:Index},
    {path:'/Index',component:Index},
    {path:'/Manager',component:Manager,children:[
      {path:'',component:user},
      {path:'book',component:book },
      {path:'borrowed',component:borrowed },
      {path:'readers',component:readers },
      {path:'statistical',component:statistical },
      {path:'password',component:password }
    ]},
    {path:'/Login',component:Login},
    {path:'/Bulletin',component:Bulletin},
    {path:'/HotBook',component:HotBook},
    {path:'/BookDetail',component:BookDetail},
    {path:'/Borrow',component:Borrow},
  ]
})
