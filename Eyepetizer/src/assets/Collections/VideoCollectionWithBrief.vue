<template lang="pug">
    div.m-video-collection-with-brief
        div.header
            img.avatar(:src="header.icon" width="40" height="40")
            div.brief
                p.title {{ header.title }}
                p.desc {{ header.description }}
        div.card-list-container
            ul.card-list
                component.scroll-card(v-for="(item, index) in list" :is="item.type" :data="item.data" :key="index")
</template>

<script>
export default {
    name: 'videoCollectionWithBrief',
    props: {
        data: Object
    },
    computed: {
        header () {
            return this.data.header
        },
        list () {
            const { itemList } = this.data;
            return itemList;
        }
    }
}
</script>

<style lang="scss" scoped>
.m-video-collection-with-brief {
    display: flex;
    flex-direction: column;
    padding: 3vw 0;
    
    .header {
        flex-shrink: 0;
        display: flex;
        flex-direction: row;
        padding: 2vw 3vw;

        .avatar {
            flex-shrink: 0;
            border-radius: 50%;
            margin-right: 3vw;
        }

        .brief {
            display: flex;
            flex-direction: column;

            .title {
                font-weight: 500;
            }

            .desc {
                font-size: 12px;
                color: #999;
            }
        }
    }

    .card-list-container {
        height: 280px;
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
