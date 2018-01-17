<template lang="pug">
    header.m-header.flex
        div.left
        h1.title
            eye-menu(:defaultIndex="categoryIndex" @change="changeCategoryIndex")
                eye-menu-item(v-for="(item, index) in menuItems" :key="index" :index="String(index)") {{ item.name }}
        div.search
</template>
<script>
import { mapGetters } from 'vuex';

const template = [{
    name: '发现',
    label: 'home-discovery',
}, {
    name: '推荐',
    label: 'home-recommand',
}, {
    name: '日报',
    label: 'home-daily',
}, {
    name: '创意',
    label: 2,
}, {
    name: '音乐',
    label: 20
}, {
    name: '旅行',
    label: 6
}, {
    name: '科普',
    label: 32
}, {
    name: '搞笑',
    label: 28
}, {
    name: '时尚',
    label: 24
}, {
    name: '运动',
    label: 18
}, {
    name: '动画',
    label: 10
}, {
    name: '广告',
    label: 14
}, {
    name: '开胃',
    label: '4'
}, {
    name: '生活',
    label: '36'
}, {
    name: '剧情',
    label: '12'
}, {
    name: '预告',
    label: '8'
}, {
    name: '集锦',
    label: '34'
}, {
    name: '纪录',
    label: '22'
}, {
    name: '游戏',
    label: '30'
}, {
    name: '萌宠',
    label: '26'
}, {
    name: '综艺',
    label: '38'
}];
export default {
    data () {
        return {
            // categoryIndex: "1",
        }
    },
    computed: {
        menuItems () {
            return template;
        },
        ...mapGetters('ui', [
            'categoryIndex'
        ])
    },
    methods: {
        changeCategoryIndex (index) {
            const label = this.menuItems[index].label;
            this.$store.commit('ui/changeCategoryIndex', index);
            if (!isNaN(+label)) {
                this.$router.push({ name: 'home-category', query: { category: label } })
            } else {
                this.$router.push({ name: label });
            }
        }
    },

}
</script>
<style lang="scss">
@import '../../styles/var.scss';
.m-header {
    position: fixed;
    top: 0; right: 0; left: 0;
    height: 40px;
    justify-content: center;
    background: #ECECEC;

    .title {
        @include flex(row);
        justify-content: center;
    }
}
</style>
