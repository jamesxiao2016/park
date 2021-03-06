import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    modules: {
        user
    },
    strict: process.env.NODE_ENV !== 'production'
});

export default store;
