import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage/HomePage'
import PageError from '@/pages/PageError/PageError'
import NotFound from '@/pages/NotFound/NotFound'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/error',
      name: 'PageError',
      //  load dynamic
      component: PageError
    },
    //  404
    {
      path: '*',
      name: 'NotFound',
      //  load dynamic
      component: NotFound
    }
  ]
})

export default router
