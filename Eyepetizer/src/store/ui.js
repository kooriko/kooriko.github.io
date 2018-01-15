const state = {
    categoryIndex: '1',
    scrollTop: 0,
}

const getters = {
    categoryIndex: state => state.categoryIndex,
    scrollTop: state => state.scrollTop,
}

const mutations = {
    changeCategoryIndex (state, payload) {
        state.categoryIndex = payload;
    },
    changeScrollTop (state, payload) {
        state.scrollTop = payload;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
}