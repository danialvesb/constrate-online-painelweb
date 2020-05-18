import Vue from 'vue'
import { setCookie } from '../../helpers/cookie'

export default {
    state: {
        users: [],
        groups: [],
        token: '',
        me: []
    },
    mutations: {
        setUsers(state, data) {
            state.users = data
        },
        setGroupsUsers(state, data) {
            state.groups = data;
        },
        addUser(state, data) {
            state.users.push(data);
        },
        setToken(state, data){
            state.token = data
        },
        setMe(state, data) {
            state.me = data
        }
    },
    getters: {
        usersList(state) {
            return state.users
        },
        groupsList(state) {
            return state.groups
        },
        getMe(state) {
            return state.me
        }
    },
    actions: {
        async loadUsersData({ commit }) {
            const responseReq =  await Vue.prototype.$http.get('/users')

            if (responseReq.status == 200) {
                const data = responseReq.data
                commit('setUsers', data)
                return true
            }
            return false
        },

        async loadGroupsUsers({ commit }) {
            const responseReq = await Vue.prototype.$http.get('/users/groups')

            if (responseReq.status == 200) {
                const data = responseReq.data
                commit('setGroupsUsers', data)
                return true
            }else {
                return false
            }
        },
        async authUser({ commit }, user) {
            console.log(JSON.stringify(user))
            const responseReq =  await Vue.prototype.$http.post('/auth/login', JSON.stringify(user), {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                }
            })
            const data = responseReq.data

            if (data.access_token) {
                commit('setToken', data.access_token)
                setCookie('access_token', `bearer ${data.access_token}`, 1)
                Vue.prototype.$http.defaults.headers.common['Authorization'] =  `bearer ${data.access_token}`
                return true
            }
            return false
        },
        async loadMe({ commit }) {
            const responseRec = await Vue.prototype.$http.post('auth/me')
            if (responseRec.status == 200) {
                commit('setMe', responseRec.data)
                return responseRec.status
            }
            return responseRec.status
        },
        // async updateMe({ commit }){
        //
        // }
    }
}
