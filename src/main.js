import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vuetify from 'vuetify'
import FlashMessage from '@smartweb/vue-flash-message';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import 'vue-flash-message/dist/vue-flash-message.min.css';
import 'vuetify/dist/vuetify.min.css'

Vue.prototype.$http = axios;

const token = localStorage.getItem('user-token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
Vue.use(Vuetify);
Vue.use(BootstrapVue);
Vue.use(FlashMessage, {time: 3000});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
