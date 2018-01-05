<template lang="pug">
    li.u-video
        div.video-img(@click="$_toVideoPage(data.id)")
            div.cover.div(v-if="data.backgroundMode" :style="`background-image: url(${data.cover});`")
            img.cover.img(v-else :src="data.cover")
            duration(:duration="data.duration")
        div.video-detail(v-if="detail")
            p.title {{ detail.title }}
            p.cetegory \#{{ detail.category }}
</template>
<script>
export default {
    props: {
        data: Object,
    },
    name: 'm-video',

    computed: {
        detail () {
            return this.data.detail
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../styles/var.scss';
    .u-video {
        @include flex(column);
        width: 100%;

        .video-img {
            position: relative;

            .cover {
                width: 100%;
                border-radius: 5px;

                &.div {
                    width: 100%;
                    height: 96vw * 0.57971;
                    background-position: 50% 50%;
                    background-size: cover;
                    background-repeat: no-repeat;
                    border-radius: 5px;

                }
            }
        }

        .video-detail {
            padding: 2vw 0;
            display: flex;
            flex-direction: column;

            .title {
                font-weight: 500;
            }
            .cetegory {
                font-size: 12px;
            }
        }
    }
</style>


