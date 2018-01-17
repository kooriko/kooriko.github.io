<template lang="pug">
    ul.m-footer
        li.item(v-for="(item, index) in footerItems" :key="index")
            svg(:id="`svg-${item.label}`")
            span {{ item.name }}
</template>

<script>
import Snap from 'snapsvg-cjs';

const footerItems = [
    {
        label: 'home',
        name: '首页',
        partern: /home/,
        stroke: {
            method: 'polygon',
            params: ['10,2, 2,18, 18,18, 10,2']
        },
        exStroke: {
            method: 'polygon',
            params: ['10,2, 2,18, 18,18, 10,2']
        }
    },
    {
        label: 'follow',
        name: '关注',
        partern: /follow/,
        stroke: {
            method: 'path',
            params: ['M2,2L18,18ZM2,18L18,2Z']
        },
        exStroke: {

        }
    },
    {
        label: 'notice',
        name: '通知',
        partern: /notice/,
        stroke: {
            method: 'circle',
            params: [ '50%', '50%', 8 ]
        },
        exStroke: {

        }
    },
    {
        label: 'me',
        name: '我的',
        partern: /\bme\b/,
        stroke: {
            method: 'rect',
            params: [ 2, 2, 16, 16 ]
        },
        exStroke: {

        }
    }
]

export default {
    data () {
        return {
            ex: 0,
        }
    },
    watch: {
        '$route.path.name' (after) {
            const index = this.footerItems.findIndex(item => {
                item.partern.test(after.name);
            });
            this.ex = index;
        }
    },
    computed: {
        footerItems () {
            return footerItems;
        }
    },
    mounted () {
        const originItems = this.footerItems.map((item, index) => {
            let paper = Snap(`#svg-${item.label}`);
            const partern = paper[item.stroke.method].apply(paper, item.stroke.params);
            partern.attr({
                fill: 'rgba(0, 0, 0, 0)',
                stroke: '#999',
                strokeWidth: 2,
            });
        });
    }

}
</script>

<style lang="scss">
@import '../../styles/var.scss';

.m-footer {
    @include flex(row);
    position: fixed;
    align-items: center;
    right: 0; bottom: 0; left: 0; height: 50px;
    background: #ECECEC;

    .item {
        @include flex(column);
        font-size: 10px;
        justify-content: center;
        align-items: center;
        flex-grow: 1;

        svg {
            width: 20px;
            height: 20px;
            margin-bottom: 3px;
        }
    }
}

</style>