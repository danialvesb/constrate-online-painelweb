import Vue from 'vue'

export default {
    state: {
        users: [],
        groups: []
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
        addUser({ commit }, user) {
            const userJson  = JSON.stringify(user)

            Vue.prototype.$http.post('api/services', userJson).then( res => {
                const data = res.data

                if( data ) {
                    commit('addUser', user)
                }else {
                    alert('Não foi possível gravar usuário')
                }
            }).catch(err => {
                alert(err)
            })
        },
        loadUsersData({ commit }) {
            Vue.prototype.$http.get('/users').then( resp => {
                const data =  resp.data;

                if(data) {
                    commit('setUsers', data)
                }
            } ).catch(err => {
                alert(err);
            });
        },
        loadGroupsUsers({ commit }) {
            Vue.prototype.$http.get('/users/groups').then( resp => {
                const data = resp.data;

                if (data) {
                    commit('setGroupsUsers', data)
                }
            } ).catch( err => {
                alert(err)
            })
        }
        // removeWork({ commit }, id) {
        //     Vue.prototype.$http.delete(`api/services/${id}`).then(resp => {
        //         const data = resp.data
        //
        //         if(data) {
        //             commit('removeWork', id)
        //         }
        //     }).catch(err => {
        //         alert(JSON.stringify(err))
        //     } )
        //
        // },
        // updateWork({ commit }, work) {
        //     Vue.prototype.$http.put(`api/services/${work.id}`, work).then( resp => {
        //         const data = resp.data;
        //
        //         if(data)
        //             commit('updateWork', work)
        //     }).catch( err => {
        //         alert(err)
        //     })
        // },
    }
}
