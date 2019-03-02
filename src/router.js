import Vue from 'vue'
import Router from 'vue-router'
import NewBook from "./components/NewBook.vue"
import Index from "./components/Index.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component:Index},
    {path:'/NewBook',component:NewBook},
  ]
})
