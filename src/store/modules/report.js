import Vue from 'vue'

export default {
    state: {
        report: []
    },
    mutations: {
        setReport(state, data) {
            state.report = data
        }
    },
    getters: {
        getReport(state) {
            return state.report;
        }
    },
    actions: {
        async loadReport({ commit }) {
            await Vue.prototype.$http.get('dashboard').then( resp => {
                commit('setReport', resp.data);
            } ).catch(err => {
                alert(err)
            })
        }
    }
}
