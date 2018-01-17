<template lang="pug">
    section.m-section
        component(v-for="(item, index) in categoryData" :key="index" :is="item.type" :data="item.data")
</template>
<script>
import { mapGetters } from 'vuex';

export default {
    data () {
        return {
            categoryData: []
        }
    },
    computed: {
        ...mapGetters('videos', [
            'originCategoryData'
        ]),
    },
    watch: {
        '$route.query.category' (after) {
            this.requestCategoryData(after);
        },
    },
    methods: {
        async requestCategoryData (category) {
            await this.$store.dispatch('videos/requestCategoryData', { category });
            this.categoryData = this.originCategoryData[category];
        }
    },
    created () {
        const { category } = this.$route.query;
        this.requestCategoryData(category);
    }

}
</script>
<style lang="scss" scoped>

</style>
