<template lang="pug">
    li.u-video
        div.video-img
            img.cover(:src="data.cover.feed")
            m-duration(:duration="data.duration")
        div.video-detail
            p.title {{ data.title }}
            p.cetegory \#{{ data.category }}
</template>
<script>
export default {
    props: {
        data: Object,
    },
    name: 'video',
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
                border-radius: 5px;
            }
        }
        
        .video-detail {
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


