import Vue from 'vue'
import App from './App.vue'
import router from "./router";

import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
import './assets/css/primary.scss';
import 'font-awesome/css/font-awesome.css'
Vue.use(MintUI);

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
Vue.use(Buefy)

import { Dialog } from 'buefy'
Vue.use(Dialog)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
