<template lang="pug">
    section
        div.program.picked
            h2.title
                span.date-text TUESDAY, DECEMBER 26
                span.big-title 开眼今日编辑精选
                    i.right >
            video-list(direction="row")
                video-item(v-for="(item, index) in pickedVideos"
                    :key="index"
                    :cover="item.data.cover.detail"
                    :duration="item.data.duration"
                    :avatar="item.data.author.icon"
                    :title="item.data.title"
                    :slogan="item.data.slogan"
                    :id="item.data.id"
                    :authorId="item.data.author.id")
        div.program.hot
            h3.title 近期热门

</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters('videos',[
            'pickedVideos'
        ]),
    },
    methods: {
        async requestRecommendData () {
            await this.$store.dispatch('videos/requestRecommendData');
            await this.$store.dispatch('videos/requestDiscoveryData');
        }
    },
    mounted () {
        this.requestRecommendData();
    }
}
</script>

<style lang="scss">
.program {
    position: relative;
    padding-top: 25px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &:after {
        content: '';
        position: absolute;
        bottom: 0; left: 50%;
        transform: translateX(-50%) scale(.5);

        width: 180vw;
        height: 1px;
        background: #EEE;

    }
    >.title {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0 5vw 10px 5vw;
    }
    .date-text {
        color: #999;
        font-size: 13px;
    }
    .big-title {
        font-size: 24px;
        vertical-align: middle;
    }
    .right {
        display: inline-block;
        margin-left: 20px;
        font-size: 12px;
        color: #DDD;
        vertical-align: middle;
    }

    &:not([class*=picked]) {
        padding: 20px 5vw;

        >.title {
            padding: 0;
            font-size: 20px;
        }
    }
}
</style>
