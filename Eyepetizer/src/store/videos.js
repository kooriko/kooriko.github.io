const state = {
    pickedVideos: [],
    discoveryData: [],
};

const getters = {
    pickedVideos: state => state.pickedVideos,
    getVideoInfoById: state => id => state.pickedVideos.find(item => item.data.id === id),  
    discoveryData: state => state.discoveryData
};

const mutations = {
    setPickedVideos (state, payload) {
        console.log(payload);
        state.pickedVideos = payload;
    },
    setDiscoveryData (state, payload) {
        state.discoveryData = payload;
    }
};

const actions = {

    async requestDiscoveryData ({ commit }) {
        const res = await request.default(`http://baobab.kaiyanapp.com/api/v5/index/tab/discovery?_s=f884ed7b8be709a6dfce747e8f06892e&f=iphone&net=wifi&p_product=EYEPETIZER_IOS&u=33aeddea51fc808d6dfc9f3bb66f7b4eaa177900&v=3.14.0&vc=3808`);
        commit('setDiscoveryData', res.itemList);
    },
    async requestRecommendData ({ commit }) {
        const res = await request.default(`http://baobab.kaiyanapp.com/api/v4/tabs/selected`);
        const { itemList, nextPageUrl, nextPublishTime } = res;
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