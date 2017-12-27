import Vue from 'vue';

import Menu from './Menu';
import MenuItem from './MenuItem';
import VideoItem from './Cards/FollowCard';
import VideoList from './VideoList';

const plugin = {};

plugin.install = () => {
    Vue.prototype.$bus = new Vue();

    const components = [ Menu, MenuItem, VideoItem, VideoList ];
    components.forEach(item => {
        Vue.component(item.name, item);
    });
}

export default plugin;