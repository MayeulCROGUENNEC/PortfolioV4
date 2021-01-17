import Vue from 'vue'
import App from './App.vue'
import VueScrollTo from 'vue-scrollto'
import router from "./router"
import "./assets/styles/reset.css"
import "./assets/styles/style.css"
import "./assets/styles/neon.css"

Vue.use(VueScrollTo)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
