import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter)

let app = new Vue({
  el: '#app',
  render: h => h(App),
  router: new VueRouter({
    base: '/',
    routes: []
  })
})

window.Vue = Vue
window.app = app
