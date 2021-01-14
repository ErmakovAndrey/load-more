import loadMore from '../assets/js/loadMore'
import axios from 'axios'


export default {
    state: {
        messages: [],
        messagesMain: [],
        loadMoreLength: 3
    },
    mutations: {
        setMessage(state, payload) {
            state.messages = payload.messages
            state.messagesMain = payload.messagesMain
        },
        loadMessages(state, payload) {
            state.messagesMain = [...state.messagesMain, ...payload]
        }
    },
    actions: {
        loadMessages({commit, getters}) {
            let res = getters.getMessagesFilter
            let getLoadMoreLength = getters.getLoadMoreLength
            commit('loadMessages', loadMore(res, getLoadMoreLength))
        },
        getNotifyTimeOut({dispatch}) {
            dispatch('setLoading', true)
            setTimeout(() => {
                dispatch('getNotify')
            }, 2500);
        },
        getNotify({commit, dispatch}) {
            axios
              .get('http://test.krdsite.ru/notifyApi.php')
              .then(response => {
                let res = response.data.notify, 
                  messages = [], 
                  messagesMain = [];
                //filter
                res.forEach(item => {
                  if (item.main) messagesMain.push(item)
                  else messages.push(item)
                });
                
                commit('setMessage', {messagesMain: messagesMain, messages, messages})
              }).catch (error => {
                console.log(error)
                dispatch('setError', 'Network error')
              }).finally(() => (dispatch('setLoading', false)))
          }
    },
    getters: {
        getMessagesFilter(state) {
            return state.messages.filter(mes => mes.main === false)
        },
        getMessages(state) {
            return state.messages
        },
        getMessagesMain(state) {
            return state.messagesMain
        },
        getLoadMoreLength(state) {
            return state.loadMoreLength
        }
    }
}