import Vue from 'vue'
import Vuex from 'vuex'
import globaldata from './modules/globaldata'

Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        globaldata
    }
})