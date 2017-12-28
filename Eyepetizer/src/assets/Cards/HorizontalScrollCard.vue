<template lang="pug">
    div.m-horizontal-scroll-card
        ul.card-list
            component.scroll-card(v-for="(item, index) in list" :is="item.type" :data="item.data" :key="index")
</template>

<script>
export default {
    name: 'horizontal-scroll-card',
    props: {
        data: Object
    },
    computed: {
        list () {
            return this.data.itemList;
        }
    }
    
}
</script>

<style lang="scss" scoped>
.m-horizontal-scroll-card {
    overflow: hidden;
    height: 220px;
    padding: 3vw 0;

    .card-list {
        display: flex;
        flex-direction: row;
        white-space: nowrap;
        overflow: auto;
        padding-bottom: 40px;

        .scroll-card {
            flex-shrink: 0;
            width: 94vw;

            &:first-child {
                padding-left: 3vw;
            }
            &:last-child {
                padding-right: 3vw;
            }
            &:not(:last-child){
                padding-right: 1.5vw;
            }
        }
    }
    
}
</style>
