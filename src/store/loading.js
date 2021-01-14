export default {
    state: {
        loading: null
    },
    mutations: {
        setLoading(state, loadingValue) {
            state.loading = loadingValue
        }
    },
    actions: {
        setLoading({commit}, loadingValue) {
            commit('setLoading', loadingValue)
        }
    },
    getters: {
        getLoading(state) {
            return state.loading
        }
    }
}