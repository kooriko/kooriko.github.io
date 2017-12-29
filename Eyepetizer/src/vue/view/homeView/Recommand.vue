<template lang="pug">
    section.m-section
        component(v-for="(item, index) in recommendData" :is="item.type" :key="index" :data="item.data")
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters('videos',[
            'recommendData'
        ]),
    },
    methods: {
        async requestRecommendData () {
            await this.$store.dispatch('videos/requestRecommendData');
        }
    },
    mounted () {
        this.requestRecommendData();
    }
}
</script>

<style lang="scss">
// .program {
//     position: relative;
//     padding-top: 25px;
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;

//     &:after {
//         content: '';
//         position: absolute;
//         bottom: 0; left: 50%;
//         transform: translateX(-50%) scale(.5);

//         width: 180vw;
//         height: 1px;
//         background: #EEE;

//     }
//     >.title {
//         display: flex;
//         flex-direction: column;
//         align-items: flex-start;
//         padding: 0 5vw 10px 5vw;
//     }
//     .date-text {
//         color: #999;
//         font-size: 13px;
//     }
//     .big-title {
//         font-size: 24px;
//         vertical-align: middle;
//     }
//     .right {
//         display: inline-block;
//         margin-left: 20px;
//         font-size: 12px;
//         color: #DDD;
//         vertical-align: middle;
//     }

//     &:not([class*=picked]) {
//         padding: 20px 5vw;

//         >.title {
//             padding: 0;
//             font-size: 20px;
//         }
//     }
// }
</style>
