<template lang="pug">
    header.m-header.flex
        div.left
        h1.title
            eye-menu(:defaultIndex="`0`" @change="foo")
                eye-menu-item(v-for="(item, index) in menuItems" :key="index" :index="String(index)") {{ item.name }}
        div.search
</template>
<script>
const template = [{
    name: '发现',
    label: '0',
    to: 'home-discovery'
}, {
    name: '推荐',
    label: '1',
    to: 'home-recommand'
}, {
    name: '日报',
    label: '2',
    to: 'home-daily'
}, {
    name: '创意',
    label: '3'
}, {
    name: '音乐',
    label: '4'
}, {
    name: '旅行',
    label: '5'
}, {
    name: '科普',
    label: '6'
}, {
    name: '搞笑',
    label: '7'
}, {
    name: '时尚',
    label: '8'
}, {
    name: '运动',
    label: '9'
}, {
    name: '动画',
    label: '10'
}, {
    name: '广告',
    label: '11'
}, {
    name: '开胃',
    label: '12'
}, {
    name: '生活',
    label: '13'
}, {
    name: '剧情',
    label: '14'
}, {
    name: '预告',
    label: '15'
}, {
    name: '集锦',
    label: '16'
}, {
    name: '纪录',
    label: '17'
}, {
    name: '游戏',
    label: '18'
}, {
    name: '萌宠',
    label: '19'
}, {
    name: '综艺',
    label: '20'
}];
export default {
    data () {
        return {
            activeIndex: "0",
        }
    },
    computed: {
        menuItems () {
            return template;
        },
    },
    methods: {
        foo (index) {
            const to = this.menuItems[index].to;
        
            if (to) {
                this.$router.push({ name: to });
            }
        }
    }
}
</script>
<style lang="scss">
.m-header {
    position: absolute;
    top: 0; right: 0; left: 0;
    height: 40px;
    justify-content: center;
    background: #ECECEC;

    .title {
        margin: 0 atuo;
    }
}
</style>
