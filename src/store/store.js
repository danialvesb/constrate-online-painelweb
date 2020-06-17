import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import category from "./modules/categories";
import work from "./modules/works";
import users from "./modules/users";
import report from './modules/report';

Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    modules: {
        work,
        category,
        users,
        report
    }
})
