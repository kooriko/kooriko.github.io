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
    recommendData: [],
    dailyData: [],
    categoryData: {}
};

const getters = {
    pickedVideos: state => state.pickedVideos,
    getVideoById: state => id => state.videoData.find(item => item.id === id),  
    relatedVideos: state => state.relatedVideos,
    discoveryData: state => state.discoveryData,
    recommendData:  state => state.recommendData,
    dailyData: state => state.dailyData,
    originCategoryData: state => state.categoryData
};

const mutations = {
    setPickedVideos (state, payload) {
        state.pickedVideos = payload;
    },
    setDiscoveryData (state, payload) {
        state.discoveryData = payload;
    },
    setVideoData (state, payload) {
        let { videoData } = state;
        [].push.apply(videoData, payload);

        videoData = videoData.filter((item, index, arr) => index === arr.findIndex(fItem => fItem.id === item.id));
        state.videoData = videoData;
    },
    setRelatedVideos (state, payload) {
        state.relatedVideos = payload;
    },
    setRecommendData (state, payload) {
        state.recommendData = payload;
    },
    setDailyData (state, payload) {
        state.dailyData = payload;
    },
    setCategoryData (state, payload) {
        const { category, list } = payload;
        state.categoryData[category] = list;
    }
};

const actions = {
    async requestCategoryData ({ commit }, originParams = {}) {
        const { category, ...params } = originParams;
        Object.assign(params, {
            f: 'iphone',
            net: 'wifi',
            p_product: 'EYEPETIZER_IOS',
            u: '33aeddea51fc808d6dfc9f3bb66f7b4eaa177900',
            v: '3.14.0',
            vc: '3808'
        });
        const res = await request.default(`http://baobab.kaiyanapp.com/api/v5/index/tab/category/${category}?`, params);
        const { itemList } = res;
        const videoList = getVideos(itemList);
        commit('setVideoData', videoList);
        commit('setCategoryData', {
            category,
            list: itemList
        });
    },
    async requestDailyData ({ commit }, params = {}) {

        Object.assign(params, {
            f: 'iphone',
            net: 'wifi',
            p_product: 'EYEPETIZER_IOS',
            u: '33aeddea51fc808d6dfc9f3bb66f7b4eaa177900',
            v: '3.14.0',
            vc: '3808'
        });
        const res = await request.default('http://baobab.kaiyanapp.com/api/v5/index/tab/feed?_s=141cac11f723e62958ca814c1b6fd49c&f=iphone&net=wifi&p_product=EYEPETIZER_IOS&u=33aeddea51fc808d6dfc9f3bb66f7b4eaa177900&v=3.15.0&vc=3911');
        const { itemList } = res;
        const videoList = getVideos(itemList);

        commit('setVideoData', videoList);
        commit('setDailyData', itemList);
    },
    async requestDiscoveryData ({ commit }, params = {}) {
        Object.assign(params, {
            f: 'iphone',
            net: 'wifi',
            p_product: 'EYEPETIZER_IOS',
            u: '33aeddea51fc808d6dfc9f3bb66f7b4eaa177900',
            v: '3.14.0',
            vc: '3808'
        });

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