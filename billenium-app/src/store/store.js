import Vue from 'vue'
import Vuex from 'vuex'

import technologies from '../store/modules/technologies'

Vue.use(Vuex);

const store = new Vuex.Store({
  store: {
    counter: 0
  }

});
