<template lang="pug">
    div.m-video-small-card
        div.video-container
            m-video(:data="__videoInfo")
        div.brief
            p.title.g-title {{ data.title }}
            p.desc(:class="[ $route.name === 'video' ? 'color--lighten' : null ]") {{ desc }}
</template>
<script>
export default {
    name: 'videoSmallCard',
    props: {
        data: Object
    },
    computed: {
        desc () {
            console.log(this.data.author);
            return `#${this.data.category} / ${this.data.author.name}`;
        },
        __videoInfo () {
            const { id, cover, playUrl, duration } = this.data;

            return { id, playUrl, duration, cover: cover.feed };
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../styles/var.scss';

.m-video-small-card {
    @include flex(row);
    @include padding(3vw);

        .video-container {
            width: 50%;
            flex-shrink: 0;
            position: relative;
        }

        .brief {
            @include flex(column);
            @include padding(3vw);
            justify-content: space-between;

            .desc {
                font-size: 12px;
                color: #999;
                .video-container & {
                    color: #DCDCDC;
                }
            }
        }
}

</style>

