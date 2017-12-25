<template lang="pug">
    section
        div.picked
            span MONDAY.DECEMBER 25
            h2 开眼进入编辑精选 >
            ul
                li(v-for="(item, index) in pickedVideos" :key="index")
                    h4 {{ item.data.title }}
                    span {{ item.data.slogan }}
        div.hot
            h3 近期热门

</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters('recommend',[
            'pickedVideos'
        ]),
    },
    methods: {
        async requestRecommendData () {
            await this.$store.dispatch('recommend/requestRecommendData');
        }
    },
    mounted () {
        this.requestRecommendData();
    }
}
</script>

<style lang="scss">

</style>
