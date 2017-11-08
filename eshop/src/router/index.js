import Vue from 'vue'
import VueRouter from 'vue-router'
import middle from '../components/middle/middle.vue'
import classify from '../components/classify/classify.vue'
import shopcar from '../components/shopcar/shopcar.vue'
import my from '../components/my/my.vue'
Vue.use(VueRouter);


export default new VueRouter({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/middle'
    },
    {
      path: '/middle',
      component: middle
    },
    {
      path: '/classify',
      component: classify
    },
    {
      path:'/shopcar',
      component:shopcar
    },
    {
      path:'/my',
      component:my
    }
  ]
})


