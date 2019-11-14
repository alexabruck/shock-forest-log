import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter()

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
