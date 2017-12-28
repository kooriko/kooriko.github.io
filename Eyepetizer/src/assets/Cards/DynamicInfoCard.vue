<template lang="pug">
    div.m-dynamic-info-card(v-if="data.dynamicType === 'reply'")
        img.user-avatar(:src="user.avatar" width="40" height="40" @click="$_toUserPage(user.uid)")
        div.detail(@click="$_toVideoReplyPage(simpleVideo.id)")
            p.nickname {{ user.nickname }}
            p.text {{ data.text }}
            p.reply {{ reply.message }}
            div.simple-video(@click="$_toVideoPage(simpleVideo.id)")
                div.video-img
                    img.cover(:src="simpleVideo.cover.feed")
                    duration(:duration="simpleVideo.duration")
                div.video-info
                    p.title {{ simpleVideo.title }}
                    p.desc \#{{ simpleVideo.category }}
            div.info
                p.likeCount 赞 {{ reply.likeCount }}
                p.create-date {{ reply.createDate | getDate }}


</template>
<script>
export default {
    name: 'dynamic-info-card',
    props: {
        data: Object
    },
    filters: {
        getDate (val) {
            console.log(val);
            return $(val).format('YYYY-MM-DD');
        }
    },
    computed: {
        user () {
            return this.data.user;
        },
        reply () {
            return this.data.reply;
        },
        simpleVideo () {
            return this.data.simpleVideo;
        }
    }
}
</script>
<style lang="scss" scoped>
.m-dynamic-info-card {
    padding: 3vw 4vw;
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    .user-avatar {
        flex-shrink: 0;
        margin-right: 2vw;
        border-radius: 50%;
    }
    .detail {
        display: flex;
        flex-direction: column;

        .nickname {
            font-weight: 400;   
        }
        .text {
            font-size: 12px;
            font-weight: 300;
            margin-top: 5px;
        }
        .reply {
            margin: 10px 0;
            font-weight: 300;
        }
        .simple-video {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 2vw;
            background: #F5F5F5;

            .video-img {
                position: relative;
                width: 50%;
                margin-right: 2vw;
                .cover {
                    width: 100%;
                    border-radius: 3px;
                }
            }
            .video-info {
                width: 50%;

                .title {
                    font-weight: 500;
                }
                .desc {
                    font-size: 12px;
                    font-weight: 300;
                }
            }
        }
        .info {
            display: flex;
            margin-top: 2vw;
            flex-direction: row;
            color: #999;
            font-weight: 300;
            font-size: 12px;

            .likeCount {
                margin-right: 5vw;
            }
        }
    }
}
</style>
