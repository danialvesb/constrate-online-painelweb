import Vue from 'vue'

export default {
    state: {
        works: null,
    },
    mutations: {
        setWorks(state, data) {
            state.works = data
        },
        addWork(state, data) {
            state.works.push(data);
        },
        removeWork(state, id) {
            const record = state.works.findIndex(element => element.id == id)
            state.works.splice(record, 1)
        },
        // updateWork(state, work) {
        //     const record = state.works.findIndex(element => element.id == work.id)
        //     state.works[record] = work
        // }
    },
    getters: {
        worksList(state) {
            return state.works
        },
    },
    actions: {
        addWork({ commit }, work) {
            const workJson  = JSON.stringify(work)

            Vue.prototype.$http.post('/services', workJson).then( res => {
                const data = res.data

                if( data ) {
                    commit('addWork', work)
                }else {
                    alert('Não foi possível gravar serviço')
                }
            }).catch(err => {
                alert(err)
            })
        },
        async loadWorksData({ commit }) {
            const responseRec = await Vue.prototype.$http.get('/services/')

            if(responseRec.status == 200) {
                console.log(JSON.stringify(responseRec.data))
                commit('setWorks', responseRec.data)
                return true
            }
        },
        removeWork({ commit }, id) {
            Vue.prototype.$http.delete(`/services/${id}`).then(resp => {
                const data = resp.data

                if(data) {
                    commit('removeWork', id)
                }
            }).catch(err => {
                alert(JSON.stringify(err))
            } )
        },
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
