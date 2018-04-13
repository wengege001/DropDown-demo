// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import introduce from './components/introduce'

Vue.config.productionTip = false
Vue.use(VueRouter)
/* eslint-disable no-new */


let router = new VueRouter({
    mode : 'history',
    routes : [
    {
            path: '/',
            component: introduce
     }
    ]
})



new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
