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
        loadUsersData({ commit }) {
            Vue.prototype.$http.get('/users').then( resp => {
                const data =  resp.data;

                if(data) {
                    commit('setUsers', data)
                }
            } ).catch(err => {
                console.log(err);
            });
        },
        loadGroupsUsers({ commit }) {
            Vue.prototype.$http.get('/users/groups').then( resp => {
                const data = resp.data;

                if (data) {
                    commit('setGroupsUsers', data)
                }
            } ).catch( err => {
                console.log(err)
            })
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
