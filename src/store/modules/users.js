import Vue from 'vue'
import { setCookie } from '../../helpers/cookie'

export default {
    state: {
        users: [],
        groups: [],
        token: '',
        me: [],
        imageProfile: null
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
        },
        setImageProfile(state, data) {
            state.imageProfile = data
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
        },
        getImageProfile(state) {
            return state.imageProfile
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

                const responseRec = await Vue.prototype.$http.post('auth/me')
                setCookie('photo_profile_path', responseRec.data.photo)

                return true
            }
            return false
        },
        async loadMe({ commit }) {
            const responseRec = await Vue.prototype.$http.post('auth/me')

            if (responseRec.status == 200) {
                commit('setMe', responseRec.data)
            }

            return responseRec.status
        },
        async updateMe({ commit }, payload){
            let formData = new FormData();
            formData.append('name', payload.name)
            formData.append('email', payload.email)
            formData.append('mobile', payload.mobile)
            formData.append('city', payload.city)
            formData.append('uf', payload.uf)
            formData.append('district', payload.district)
            formData.append('photo', payload.photo)
            formData.append('_method', 'PUT')
            const responseRec = await Vue.prototype.$http.post(`me/update`, formData)

            if (responseRec.status == 200) {
                commit('setMe', responseRec.data)
                return responseRec.status
            }
            return responseRec.status
        },
        async loadImageProfile({ commit }) {
            const responseRec = await Vue.prototype.$http.get('me/_image/profile', {
                'Content-Type': 'image/jpeg'
            })

            if (responseRec.status == 200)
                commit('setImageProfile', responseRec.data)

            return responseRec.status
        }
    }
}
