export default {
    state: {
        error: null
    },
    mutations: {
        setError(state, errorMsg) {
            state.error = errorMsg
        }
    },
    actions: {
        setError({commit}, errorMsg) {
            commit('setError', errorMsg)
        }
    },
    getters: {
        getError(state) {
            return state.error
        }
    }
}