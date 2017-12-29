const camelCaseToKababCase = str => {
    str = str.replace(/([A-Z])/g, '-$1').toLowerCase();
    if (str[0] === '-') str = str.slice(1);
    return str;
}
const getVideos = originList => {
    const videoList = [];
    const getVideoListRecursively = object => {
        if (object.type === 'video') {
            object.type = 'm-video';
            videoList.push(object.data);
            return ;
        } else if (object.data && object.data.playUrl) {
            videoList.push(object.data);
            return ;
        }

        Object.values(object).forEach(value => {
            if (typeof value === 'object' && value) {
                getVideoListRecursively(value);
            }
        });
    }
    originList.forEach(item => {
        getVideoListRecursively(item);
    });

    return videoList;
}

const state = {
    pickedVideos: [],
    discoveryData: [],
    videoData: [],
    relatedVideos: [],
    recommendData: []
};

const getters = {
    pickedVideos: state => state.pickedVideos,
    getVideoById: state => id => state.videoData.find(item => item.id === id),  
    relatedVideos: state => state.relatedVideos,
    discoveryData: state => state.discoveryData,
    recommendData:  state => state.recommendData
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
    },
    setRecommendData (state, payload) {
        state.recommendData = payload;
    }
};

const actions = {
    async requestDiscoveryData ({ commit }) {
        const res = await request.default(`http://baobab.kaiyanapp.com/api/v5/index/tab/discovery?_s=f884ed7b8be709a6dfce747e8f06892e&f=iphone&net=wifi&p_product=EYEPETIZER_IOS&u=33aeddea51fc808d6dfc9f3bb66f7b4eaa177900&v=3.14.0&vc=3808`);
        const { itemList } = res;

        const videoList = getVideos(itemList);

        commit('setVideoData', videoList);
        commit('setDiscoveryData', itemList);
    },
    async requestRelatedVideos ({ commit }, params = {}) {
        Object.assign(params, {
            f: 'iphone',
            net: 'wifi',
            p_product: 'EYEPETIZER_IOS',
            u: '33aeddea51fc808d6dfc9f3bb66f7b4eaa177900',
            v: '3.14.0',
            vc: '3808'
        });

        const res = await request.default(`http://baobab.kaiyanapp.com/api/v4/video/related?`, params);
        const { itemList } = res;
        const videoList = getVideos(itemList);
        commit('setVideoData', videoList);
        commit('setRelatedVideos', itemList);
    },
    async requestRecommendData ({ commit }, params = {}) {
        Object.assign(params, {
            page: 0,
            f: 'iphone',
            net: 'wifi',
            p_product: 'EYEPETIZER_IOS',
            u: '33aeddea51fc808d6dfc9f3bb66f7b4eaa177900',
            v: '3.14.0',
            vc: '3808'
        });
        const res = await request.default(`http://baobab.kaiyanapp.com/api/v5/index/tab/allRec?`, params);
        const { itemList, nextPageUrl } = res;
        const videoList = getVideos(itemList);
        commit('setVideoData', videoList);
        commit('setRecommendData', itemList);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}