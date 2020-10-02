import Vue from 'vue'
import axios from 'axios'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'typeface-roboto/index.css'
import 'material-icons/iconfont/material-icons.css'

import App from './App'
import router from './router'
import store from './store'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.prototype.$http = Vue.http = axios
Vue.config.productionTip = false

Vue.use(VueMaterial)

const app = new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
})
app.$mount('#app')
