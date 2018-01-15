import Vue from 'vue';
import Vuex from 'vuex';

import videos from './videos';
import ui from './ui';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        videos,
        ui,
    }
});