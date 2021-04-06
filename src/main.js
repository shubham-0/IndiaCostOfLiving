import Vue from 'vue'
import App from './App.vue'
import VueApexCharts from 'vue-apexcharts'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import AOS from "aos"
import "aos/dist/aos.css";



import VueRouter from 'vue-router'
Vue.use(VueRouter)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueApexCharts)
 
Vue.component('apexchart', VueApexCharts)
Vue.config.productionTip = false

import Routes from './routes'

// import Home from './views/home.vue'
// import About from './views/about.vue'
// import Contact from './views/contact.vue'


// const routes=[
//   {path:"/",component:Home},
//   {path:"/about",component:About},
//   {path:"/contact",component:Contact},
// ];

const router =new VueRouter({
routes:Routes

});


new Vue({
  created(){
      AOS.init();
  },
  render: h => h(App),
  router:router

}).$mount('#app')
