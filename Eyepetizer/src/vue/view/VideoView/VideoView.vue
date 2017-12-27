<template lang="pug">
    div.video-container
        video.video(controls autoplay)
            source(:src="video.playUrl")
        div.content
            div.cover(:style="`background-image: url(${video.cover.blurred})`")
            button.return(@click.prevent="returnTo") 返回
            div.infos.section
                h4.title {{ video.title }}
                p.detail \#{{ video.category }} / {{ video.duration | secondToMin }} / {{ author.name }}
                p.desc {{ video.description }} 
                ul.consumption
                    li.item 喜欢 
                        span.value {{ consumption.collectionCount }}
                    li.item 分享 
                        span.value {{ consumption.shareCount }}
                    li.item 评论 
                        span.value {{ consumption.replyCount }}
                    li.item 
                        span.value 缓存
            ul.tags.section
                li.tag(v-for="(item, index) in tags" :key="index")
                    div.cover(:style="`background-image: url(${item.headerImage};`")
                    span.name \#{{ item.name }}#
            div.author.section
                img.avatar(:src="author.icon")
                div.detail
                    h5.title {{ author.name }}
                    p.desc {{ author.description }}
                
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    filters: {
        secondToMin (val) {
            const arr = [ (val / 60) | 0, val % 60 ];
            return arr.map(item => String(item).padStart(2, '0')).join(':');
        }
    },
    computed: {
        ...mapGetters('videos', [
            'getVideoInfoById'
        ]),
        video () {
            const video = this.getVideoInfoById(this.$route.query.id);
            if (!video) this.$router.push({path: '/'});
            return video.data;
        },
        consumption () {
            if (!this.video) return false;
            return this.video.consumption;
        },
        author () {
            if (!this.video) return false;
            return this.video.author;
        },
        tags () {
            if (!this.video) return false;
            return this.video.tags.slice(0, 3);
        }
    },
    methods: {
        returnTo () {
            console.log(`!!!`);
            this.$router.push({path: '/'});
        }
    }
}
</script>

<style lang="scss">
.video-container {
    .video {
        width: 100vw;
    }
    .content {
        position: relative;
        color: #FFF;
        overflow: hidden;
        padding: 5px 4vw;
        text-align: left;

        .return {
            position: absolute;
            z-index: 2;
            right: 4vw;
            top: 20px;
            background-color: unset;
            color: #FFF;
            border: 1px solid #FFF;
            border-radius: 5px;

        }
        .cover {
            position: absolute;
            z-index: -1;
            background-size: cover;
            left: 0; top: 0; right: 0; bottom: 0;
            filter: brightness(.7);
        }
        .section {
            position: relative;
            &:after {
                content: '';
                position: absolute;
                bottom: 0; left: -200vw;
                width: 500vw;
                height: 1px;
                background: #CCC;
                transform: scale(.3);
            }
        }
        .infos {
            display: flex;
            position: relative;
            flex-direction: column;
            align-items: flex-start;
            padding: 5px 0 10px;

            .title {
                padding: 5px 0;
                font-size: 16px;
            }
            .detail {
                font-size: 12px;
                font-weight: 300;
            }
            .desc {
                padding: 10px 0;
                font-size: 13px;
                font-weight: 300;
            }
            .consumption {
                display: flex;
                flex-direction: row;
                .item {
                    margin-right: 20px;
                    .value {
                        font-size: 12px;
                        font-weight: 300;
                    }
                }
            }
        }
        .tags {
            padding: 15px 0;
            display: flex;
            flex-direction: row;

            .tag {
                flex-grow: 1;
                position: relative;
                text-align: center;
                height: 50px;
                border-radius: 5px;
                overflow: hidden;

                .cover {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    background-size: cover;
                    left: 50%; 
                    filter: brightness(.5);
                    transform: translateX(-50%);
                }
                .name {
                    position: relative;
                    line-height: 50px;
                    z-index: 2;
                }
                &:not(:last-child) {
                    margin-right: 10px;
                }
            }
        }
        .author {
            display: flex;
            padding: 20px 0;
            .avatar {
                height: 40px;
                width: 40px;
                margin-right: 10px;
                border-radius: 50%;
            }
            .detail {
                display: flex;
                flex-direction: column;
                .desc {
                    font-size: 12px;
                    font-weight: 300;
                }
            }
        }
    }
}
</style>
