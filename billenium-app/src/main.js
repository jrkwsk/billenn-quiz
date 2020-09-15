import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App.vue'
import {
  routes
} from './routes';
import store from './store/store';


Vue.use(VueRouter);
// in prod mode change backend settings => rules in firebase
Vue.use(VueResource);

// Vue.http.options.root = 'http://localhost:8080/'

const router = new VueRouter({
  mode: 'history',
  routes
});



new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
