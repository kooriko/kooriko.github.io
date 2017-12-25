import Vue from 'vue';
import Vuex from 'vuex';

import recommend from './recommend';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        recommend,
    }
});