<template lang="pug">
    section.m-section
        component(v-for="(item, index) in discoveryData" :is="item.type" :key="index" :data="item.data")
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters('videos', [
            'discoveryData'
        ])
    },
    methods: {
        async getDiscoveryData () {
            await this.$store.dispatch('videos/requestDiscoveryData');
        }
    },
    created () {
        this.getDiscoveryData();
    }
}
</script>
