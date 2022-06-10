// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import go from 'gojs'
import JsonViewer from 'vue-json-viewer'

import '@/styles/variables.scss' // global css
import '@/styles/iconfont.css' // icon css
import '@/directives/drag.js'
import '@/directives/drag-icon.js'
import "vuetify/dist/vuetify.min.css"


import Vuetify from "vuetify"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Install from './install'
Install()

Vue.use(
  ElementUI,
  Vuetify,
  axios,
  go,
  JsonViewer
);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

