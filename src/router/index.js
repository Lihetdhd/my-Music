import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/login',
      component: resolve => require(['../views/Login/Login.vue'], resolve),
      meta: {
        title: '新世界的大门'
      },
    },
    {
      path: '/',
      component: resolve => require(['../views/home.vue'], resolve),
      meta: {
        title: '首页'
      },
    }
  ]
})
