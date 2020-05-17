import Vue from 'vue'
import { setCookie } from '../../helpers/cookie'

export default {
    state: {
        users: [],
        groups: [],
        token: ''
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
        }
        // removeWork(state, id) {
        //     const record = state.works.findIndex(element => element.id == id)
        //     state.works.splice(record, 1)
        // },
        //
        // updateWork(state, work) {
        //     const record = state.works.findIndex(element => element.id == work.id)
        //     state.works[record] = work
        // }
    },
    getters: {
        usersList(state) {
            return state.users
        },
        groupsList(state) {
            return state.groups
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
        }
    }
}
