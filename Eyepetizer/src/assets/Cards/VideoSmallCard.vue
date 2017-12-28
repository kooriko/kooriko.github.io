<template lang="pug">
    div.m-video-small-card(@click="$_toVideoPage(data.id)")
        div.video-container
            img.cover(:src="data.cover.feed")
            m-duration(:duration="data.duration")
        div.brief
            p.title {{ data.title }}
            p.desc(:class="[ $route.name === 'video' ? 'color--lighten' : null ]") {{ desc }}
</template>
<script>
export default {
    name: 'video-small-card',
    props: {
        data: Object
    },
    computed: {
        desc () {
            return `#${this.data.category} / ${this.data.author.name}`;
        }
    }
}
</script>

<style lang="scss" scoped>
.m-video-small-card {
    display: flex;
    flex-shrink: 0;
    flex-direction: row;
    padding: 3vw 2vw;

        .video-container {
            width: 50%;
            position: relative;

            .cover {

                width: 100%;
                // height: 100%;
                border-radius: 5px;
                margin-right: 20px;
            }
        }

        .brief {
            flex: 1;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            padding: 2vw;

            .title {
                font-weight: 600;
            }
            .desc {
                font-size: 12px;
                color: #999;
                &.color--lighten {
                    color: #DCDCDC;
                }
            }
        }
}

</style>

