<template lang="pug">
    div.m-dynamic-info-card(v-if="data.dynamicType === 'reply'")
        img.avatar(:src="user.avatar" width="40" height="40" @click="$_toUserPage(user.uid)")
        div.detail(@click="$_toVideoReplyPage(simpleVideo.id)")
            p.nickname.g-title {{ user.nickname }}
            p.text.g-desc {{ data.text }}
            p.reply {{ reply.message }}
            div.simple-video(@click="$_toVideoPage(simpleVideo.id)")
                m-video.video-img(:data="__videoInfo")
                div.video-info
                    p.g-title {{ simpleVideo.title }}
                    p.g-desc \#{{ simpleVideo.category }}
            div.info.g-desc
                p.likeCount 赞 {{ reply.likeCount }}
                p.create-date {{ reply.createDate | getDate }}


</template>
<script>
export default {
    name: 'DynamicInfoCard',
    props: {
        data: Object
    },
    filters: {
        getDate (val) {
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
        },
        __videoInfo () {
            const { id, duration, cover, playUrl } = this.data.simpleVideo;

            return { id, duration, playUrl, cover: cover.feed };
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../styles/var.scss';

.m-dynamic-info-card {
    @include flex(row);
    @include split-line;
    @include padding(3vw);
    align-items: flex-start;

    .detail {
        @include flex(column);

        .nickname {
            max-width: 65vw;
            @include text-ellipsis;
        }
        .text {
            font-weight: 400;
        }
        .reply {
            margin: 10px 0;
            color: #555;
            line-height: 1.4em;
        }
        .simple-video {
            @include flex(row);
            align-items: center;
            padding: 3vw;
            background: #F5F5F5;
            border-radius: 5px;

            .video-img {
                width: 50%;
            }
            .video-info {
                width: 50%;
                margin-left: 2vw;
            }
        }

        .info {
            @include flex(row);
            margin-top: 2vw;
            color: #777;

            .likeCount {
                margin-right: 5vw;
            }
        }
    }
}
</style>
