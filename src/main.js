import Vue from 'vue'
import Layout from './components/layout'
import Router from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(Router)

import IndexPage from './pages/index'

let router= new Router({
  mode:'history', 	
  routes: [
    {
      path: '/',
      component: IndexPage
    }
  ]
})


Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
