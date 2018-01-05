<template lang="pug">
    div.m-video-collection-with-brief
        div.header
            img.avatar(:src="header.icon" width="40" height="40")
            div.brief
                p.title.g-title {{ header.title }}
                p.desc.g-desc {{ header.description }}
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
            const videoInfos = itemList.map(item => {
                const { data, type } = item;
                const { category, title, cover, duration, playUrl, id } = data;

                const videoInfo = {
                    type: item.type,
                    data: { backgroundMode: true, id, duration, playUrl, cover: cover.feed, detail: { category, title } }
                }
                return videoInfo;
            });
            return videoInfos;
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../styles/var.scss';

.m-video-collection-with-brief {
    @include flex(column);
    @include split-line;
    padding: 3vw 0;
    
    
    .header {
        @include flex(row);
        padding: 2vw 3vw;

        .brief {
            @include flex(column);
            margin-left: 3vw;


            .desc {
                font-weight: 400;
            }
        }
    }
    .card-list {
        @include flex(row);
        white-space: nowrap;
        overflow-x: auto;
        // todo!!!
        // ::-webkit-scrollbar {

        // }

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
