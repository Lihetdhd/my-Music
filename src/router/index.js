import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

var router = new Router({
  routes: [{
      path: '/',
      name: "home",
      component: resolve => require(['../views/home.vue'], resolve),
      meta: {
        title: '首页'
      },
      children: [{
        path: "/ComponentLibrary",
        name: "ComponentLibrary",
        component: resolve => require(['../views/dom/ComponentLibrary.vue'], resolve),
        meta: {
          title: '组件库'
        }
      }]
    }, {
      path: '/login',
      component: resolve => require(['../views/Login/Login.vue'], resolve),
      meta: {
        title: '新世界的大门'
      },
    },

  ]
})
export default router;
