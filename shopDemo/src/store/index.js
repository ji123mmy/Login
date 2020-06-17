import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action'
import mutations from './mutation'

Vue.use(Vuex)

const Gamehost = "vue-course-api.hexschool.io"
const state = {
    Products: null,
}

export default new Vuex.Store({
    state,
    actions,
    mutations,
})