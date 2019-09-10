import Vue from 'vue'

import Editor from './Editor.vue'

import VueIconfont from 'vue-iconfont'
import './assets/font/iconfont.css'
import './assets/font/iconfont.js'
Vue.use(VueIconfont, [
  {
    tag: 'e-icon',
    prefix: 'e-icon',
    type: 'font'
  }
])

new Vue({
  el: "#app",
  render: h => h(Editor)
});

