import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import notify from './notify'
import error from './error'
import loading from './loading'

export default new Vuex.Store({
    modules: {
        notify, error, loading
    }
})