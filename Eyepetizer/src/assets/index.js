import Vue from 'vue';

import Menu from './Menu';
import MenuItem from './MenuItem';
const plugin = {};

plugin.install = () => {
    Vue.prototype.$bus = new Vue();

    const components = [ Menu, MenuItem ];
    components.forEach(item => {
        Vue.component(item.name, item);
    });
}

export default plugin;