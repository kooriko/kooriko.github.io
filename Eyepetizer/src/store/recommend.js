const state = {
    pickedVideos: []
};

const getters = {
    pickedVideos: state => state.pickedVideos    
};

const mutations = {
    setPickedVideos (state, payload) {
        console.log(payload);
        state.pickedVideos = payload;
    }
};

const actions = {
    async requestRecommendData ({ commit }) {
        const res = await request.default(`http://admin.itsheng.net/api/v4/tabs/selected`);
        const { itemList, nextPageUrl, nextPublishTime } = res;
        console.log(res);
        const pickedVideos = [];
        const textHeader = itemList.findIndex(item => {
            if (item.type === 'video') {
                pickedVideos.push(item);
            }
            return item.type === 'textFooter';
        });

        // console.log(pickedVideos, textHeader);
        commit('setPickedVideos', pickedVideos);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}