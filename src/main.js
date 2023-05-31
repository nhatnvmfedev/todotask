// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
import store from './store'
import App from './App'
import '@/assets/scss/common.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Notifications from 'vue-notification'

Vue.config.productionTip = false
Vue.use(Vuex, router)
Vue.use(Notifications)

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  Notifications,
  components: { App },
  template: '<App/>',
  store
})
app.$mount('#app')
