import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import axios from 'axios';
import store from './store';
import VueRouter from 'vue-router'
import {routes} from './routes'
import VueCharts from 'vue-chartjs'

Vue.use(VueCharts)
Vue.use(VueRouter)
Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.component('Count', require('./components/Count.vue').default);
Vue.component('LineChart', require('./components/LineChart.vue').default);
Vue.component('Search', require('./components/Search.vue').default);

const router = new VueRouter({
  routes,
  mode: 'history',
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
