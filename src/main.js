import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

console.log(process.env.NODE_ENV)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
