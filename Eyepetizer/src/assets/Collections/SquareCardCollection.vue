<template lang="pug">
    div.m-square-card-collection
        div.header(:class="[ header.textAlign ? `align--${header.textAlign}` : null, header.font ? `font-style--${header.font}` : null ]")
            p.subtitle(v-if="header.subTitle" :style="`font-family: ${header.subTitleFont};`") {{ header.subTitle }}
            div.main-title
                p.title {{ header.title }}
                i.i-right
        div.card-list-container
            ul.card-list
                component.scroll-card(v-for="(item, index) in list" :data="item.data" :key="index" :is="item.type")
</template>
<script>
export default {
    name: 'squareCardCollection',
    props: {
        data: Object,
    },
    computed: {
        header () {
            return this.data.header;
        },
        list () {
            const { itemList } = this.data;
            return itemList;
        }
    }
}
</script>
<style lang="scss" scoped>
.m-square-card-collection{
    display: flex;
    flex-direction: column;
    padding: 4vw 0;

    .header {
        display: flex;
        flex-direction: column;
        padding: 2vw 3vw;

        &.align--center {
            justify-content: center;
        }
        &.font-style--bigBold {
            .main-title .title {
                font-size: 24px;
            }
        }


        .subtitle {
            font-size: 12px;
            color: #999;
        }

        .main-title {
            display: flex;
            flex-direction: row;

            .title {
                font-size: 20px;
                font-weight: 600;
            }
            .i-right {
                margin-left: 2vw;
            }
        }
    }

    .card-list-container {
        height: 230px;
        overflow: hidden;
    }
    .card-list {
        display: flex;
        flex-shrink: 0;
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
