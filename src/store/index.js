import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import getters from './getters'
import mutations from './mutations';
import actions from './actions'
import modules from './modules';

const state = {
  shopCartList: []
}
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules
})
