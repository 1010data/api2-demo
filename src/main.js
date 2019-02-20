import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter)

let app = new Vue({
  el: '#app',
  render: h => h(App),
  router: new VueRouter({
    base: '/',
    routes: [
      {path: 'segmentation'},
      {path: 'what'},
      {path: 'when'},
      {path: 'where'},
      {path: 'who'},
      {path: 'review'},
      {path: 'debug'} ]
  })
})

window.Vue = Vue
window.app = app
