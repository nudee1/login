import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import home1 from '@/components/home1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home1',
      name: 'home1',
      component: home1
    }
  ]
})
