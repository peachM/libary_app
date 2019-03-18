import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 1.引用mint-ui样式文件
import'mint-ui/lib/style.css'
Vue.config.productionTip = false
// 2.引入mui库样式文件
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
// 3.引入mint-ui组件 Header
import {Header,Swipe,SwipeItem,Button} from "mint-ui"
// 4.注册Header组件
Vue.component(Header.name,Header);
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);
Vue.component(Button.name,Button);
// 5.引入axios库
import axios from "axios"
// 6.配置跨域访问保存session
axios.defaults.withCredentials=true;
// 7.将axios库配置vue实例对象中
Vue.prototype.axios = axios;
// 8.引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;

// 9.引入element-ul组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

// 10. 创建日期过滤器
Vue.filter("dateFilter",function(val){
  //1:获取新日期对象
  var date = new Date(val); 
  //2:获取新日期对象 年 月+1 日 
  var y = date.getFullYear();
  var m = date.getMonth()+1;
  var d = date.getDate();
  //3:返回字符串
  return `${y}-${m}-${d}`;
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
