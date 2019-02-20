import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import SegmentationTab from './tabs/SegmentationTab.vue'
import WhatTab from './tabs/WhatTab.vue'
import WhenTab from './tabs/WhenTab.vue'
import WhereTab from './tabs/WhereTab.vue'
import WhoTab from './tabs/WhoTab.vue'
import ReviewTab from './tabs/ReviewTab.vue'
import DebugTab from './tabs/DebugTab.vue'

Vue.use(VueRouter)

let app = new Vue({
  el: '#app',
  render: h => h(App),
  router: new VueRouter({
    base: '/',
    routes: [
      {path: '/segmentation', component: SegmentationTab },
      {path: '/what', component: WhatTab },
      {path: '/when', component: WhenTab },
      {path: '/where', component: WhereTab },
      {path: '/who', component: WhoTab },
      {path: '/review', component: ReviewTab },
      {path: '/debug', component: DebugTab } ]
  })
})

window.Vue = Vue
window.app = app
