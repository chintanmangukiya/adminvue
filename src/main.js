import '@/plugins/vue-composition-api'
import '@/styles/styles.scss'
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'

import Paginate from 'vuejs-paginate'
Vue.component('paginate', Paginate)


Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:8080/';

Vue.config.productionTip = false
 
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
