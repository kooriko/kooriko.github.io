const camelCaseToKababCase = str => {
    str = str.replace(/([A-Z])/g, '-$1').toLowerCase();
    if (str[0] === '-') str = str.slice(1);
    return str;
}
const format = list => {
    const videoList = [];
    list.forEach(item => {
        const { type } = item;
        if (type === 'followCard') {
            const { content } = item.data;
            content.type === 'video' && videoList.push(content);
        } else if (type === 'videoSmallCard') {
            videoList.push(item);
        } else if (type === 'videoCollectionWithBrief') {
            const { itemList } = item.data;
            [].push.apply(videoList, itemList);
        }
        item.type = camelCaseToKababCase(type);
    });
    return { videoList, list };
}

const state = {
    pickedVideos: [],
    discoveryData: [],
    videoData: [],
    relatedVideos: []
};

const getters = {
    pickedVideos: state => state.pickedVideos,
    getVideoById: state => id => state.videoData.find(item => item.data.id === id),  
    relatedVideos: state => state.relatedVideos,
    discoveryData: state => state.discoveryData
};

const mutations = {
    setPickedVideos (state, payload) {
        state.pickedVideos = payload;
    },
    setDiscoveryData (state, payload) {
        state.discoveryData = payload;
    },
    setVideoData (state, payload) {
        [].push.apply(state.videoData, payload);
    },
    setRelatedVideos (state, payload) {
        state.relatedVideos = payload;
    }
};

const actions = {
    async requestDiscoveryData ({ commit }) {
        const res = await request.default(`http://baobab.kaiyanapp.com/api/v5/index/tab/discovery?_s=f884ed7b8be709a6dfce747e8f06892e&f=iphone&net=wifi&p_product=EYEPETIZER_IOS&u=33aeddea51fc808d6dfc9f3bb66f7b4eaa177900&v=3.14.0&vc=3808`);
        const { itemList } = res;

        const result = format(itemList);
        console.log(result.videoList);
        commit('setVideoData', result.videoList);
        commit('setDiscoveryData', result.list);
    },
    async requestRelatedVideos ({ commit }, params) {
        Object.assign(params, {
            _s: '5005aa18da394ba1e9b2e66750c',
            f: 'iphone',
            net: 'wifi',
            p_product: 'EYEPETIZER_IOS',
            u: '33aeddea51fc808d6dfc9f3bb66f7b4eaa177900',
            v: '3.14.0',
            vc: '3808'
        });

        const res = await request.default(`http://baobab.kaiyanapp.com/api/v4/video/related?`, params);
        const { itemList } = res;
        const result = format(itemList);

        commit('setVideoData', result.videoList);
        commit('setRelatedVideos', result.list);
    }
    // async requestRecommendData ({ commit }) {
    //     const res = await request.default(`http://baobab.kaiyanapp.com/api/v4/tabs/selected`);
    //     const { itemList, nextPageUrl, nextPublishTime } = res;
    //     const pickedVideos = [];
    //     const textHeader = itemList.findIndex(item => {
    //         if (item.type === 'video') {
    //             pickedVideos.push(item);
    //         }
    //         return item.type === 'textFooter';
    //     });

    //     commit('setPickedVideos', pickedVideos);
    // }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}