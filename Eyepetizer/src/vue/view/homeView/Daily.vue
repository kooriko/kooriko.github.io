<template lang="pug">
    section.m-section
        component(v-for="(item, index) in dailyData" :key="index" :is="item.type" :data="item.data")
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters('videos', [
            'dailyData'
        ])
    },
    methods: {
        requestDailyData () {
            this.$store.dispatch('videos/requestDailyData');
        }
    },
    created () {
        this.requestDailyData();
    }
}
</script>

<style>

</style>
