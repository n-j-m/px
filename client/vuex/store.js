import Vue from 'vue'
import Vuex from 'vuex'
import pics from './modules/pics'
import app from './modules/app'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    pics
  }
})