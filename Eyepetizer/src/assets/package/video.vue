<template lang="pug">
    li.u-video
        div.video-img(@click="$_toVideoPage(data.id)")
            div.cover(:style="`background-image: url(${data.cover.feed});`")
            duration(:duration="data.duration")
        div.video-detail
            p.title {{ data.title }}
            p.cetegory \#{{ data.category }}
</template>
<script>
export default {
    props: {
        data: Object,
    },
    name: 'm-video',
}
</script>
<style lang="scss" scoped>
    .u-video {
        display: flex;
        flex-direction: column;
        width: 100%;

        .video-img {
            position: relative;
            width: 100%;

            .cover {
                width: 100%;
                height: calc(96vw * 0.57971);
                background-position: 50% 50%;
                background-size: cover;
                background-repeat: no-repeat;
                border-radius: 5px;
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


