import Vue from 'vue'
import VueRouter from 'vue-router'
import middle from '../components/middle/middle.vue'
import cosmetology from '../components/header/cosmetology/cosmetology.vue'
import dogfoot from '../components/header/dogfoot/dogfoot.vue'
import egression from '../components/header/egression/egression.vue'
import hospital from '../components/header/hospital/hospital.vue'
import trappings from '../components/header/trappings/trappings.vue'
import plaything from '../components/header/plaything/plaything.vue'

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
      path:'/cosmetology',
      component:cosmetology
    },
    {
      path:'/dogfoot',
      component:dogfoot
    },
    {
      path:'/egression',
      component:egression
    },
    {
      path:'/hospital',
      component:hospital
    },
    {
      path:'/plaything',
      component:plaything
    },
    {
      path:'/trappings',
      component:trappings
    }

  ]
})


