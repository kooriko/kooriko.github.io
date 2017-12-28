import Vue from 'vue';

import Menu from './Menu';
import MenuItem from './MenuItem';
import FollowCard from './Cards/FollowCard';
import BriefCard from './Cards/BriefCard';
import TextCard from './Cards/TextCard';
import VideoList from './VideoList';
import Duration from './package/duration';
import VideoSmallCard from './Cards/VideoSmallCard';
import DynamicInfoCard from './Cards/DynamicInfoCard';
import HorizontalScrollCard from './Cards/HorizontalScrollCard';

import VideoCollectionWithBrief from './Collections/VideoCollectionWithBrief';
import Video from './package/video';
import Banner from './package/banner';

const plugin = {};

plugin.install = () => {
    Vue.prototype.$bus = new Vue();

    Vue.filter('$_secondToMin', val => {
        const arr = [ (val / 60) | 0, val % 60 ];
        return arr.map(item => String(item).padStart(2, '0')).join(':');
    });
    Vue.mixin({
        methods: {
            $_toVideoPage (vid) {
                console.log(vid);
                this.$router.push({ name: 'video', query: { id: vid } });
            },
            $_toAuthorPage (aid) {
                console.log(aid);
            }
        }
    })
    const components = [ 
        Menu, 
        MenuItem, 
        FollowCard, 
        VideoList, 
        BriefCard, 
        TextCard, 
        DynamicInfoCard, 
        VideoSmallCard, 
        Duration,
        Banner,
        HorizontalScrollCard,
        VideoCollectionWithBrief,
        Video
    ];
    components.forEach(item => {
        console.log(`m-${item.name}`);
        Vue.component(`m-${item.name}`, item);
    });
}

export default plugin;