import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './style/css/font-awesome.min.css';

//titel 根据路由的变换
Vue.prototype.router = router; //路由配置
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next() //noed.js  next函数主要负责将控制权交给下一个中间件
});


Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
