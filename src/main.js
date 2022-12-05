import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/tailwind.css';
import "vue-trix";
import VueQRCodeComponent from 'vue-qrcode-component'
import InstantSearch from 'vue-instantsearch';
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCk2mQZ7g7MHwSE3b3bJXJeOpG71UHElek',
    libraries: 'places'
  },
})

Vue.use(InstantSearch);
Vue.component('qr-code', VueQRCodeComponent)
Vue.use(require('vue-moment'));
Vue.config.productionTip = false
export const bus = new Vue();

var VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
