<template lang="pug">
    section
        component(v-for="(item, index) in discoveryData" :is="item.type" :data="item.data")
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

<style>

</style>
