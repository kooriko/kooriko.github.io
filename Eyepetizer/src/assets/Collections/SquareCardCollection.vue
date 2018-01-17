<template lang="pug">
    div.m-square-card-collection
        div.header(:class="[ header.textAlign ? `align--${header.textAlign}` : null, header.font ? `font-style--${header.font}` : null ]")
            p.subtitle.g-desc(v-if="header.subTitle" :style="`font-family: ${header.subTitleFont};`") {{ header.subTitle }}
            div.main-title
                p.title.g-title {{ header.title }}
                i.i-right
        div.card-list-container
            ul.card-list(ref="list")
                component.scroll-card(v-for="(item, index) in list" :data="item.data" :key="index" :scroll="true" :is="item.type")
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
        },
    }
}
</script>
<style lang="scss" scoped>
@import '../../styles/var.scss';

.m-square-card-collection {
    @include flex(column);
    @include split-line;
    padding: 4vw 0;

    .header {
        @include flex(column);
        padding: 2vw 3vw;

        &.align--center {
            justify-content: center;
        }

        &.font-style--bigBold {
            .main-title .title {
                font-size: 24px;
            }
        }

        .main-title {
            @include flex(row);

            .title {
                font-size: 20px;
            }
        }
    }

    .card-list-container {
        overflow: hidden;
    }
    .card-list {
        @include flex(row);
        white-space: nowrap;
        overflow: auto;


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
