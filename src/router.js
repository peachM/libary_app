import Vue from 'vue'
import Router from 'vue-router'
import NewBook from "./components/NewBook.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component:NewBook},
  ]
})
