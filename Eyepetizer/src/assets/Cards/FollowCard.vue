<template lang="pug">
    div.m-follow-card
        m-video(:data="__videoInfo")
        div.brief
            img.author-avatar(width="40" height="40" :src="header.icon")
            div.detail(@click="toAuthorPage(author.id)")
                p.title(:class="[ header.textAlign ? `align--${header.textAlign}` : null ]") {{ header.title }}
                p.desc {{ header.description }}
</template>
<script>
export default {
    name: 'followCard',
    props: {
        data: Object
    },
    computed: {
        header () {
            return this.data.header;
        },
        content () {
            return this.data.content.data;
        },
        author () {
            return this.content.author;
        },
        __videoInfo () {
            const { id, cover, duration, playUrl } = this.content;
            return { id, duration, playUrl, cover: cover.feed };
        }
    },
    created () {
        console.log(this.__videoInfo);
    }
}
</script>
<style lang="scss" scoped>
@import '../../styles/var.scss';

.m-follow-card {
    @include flex(column);
    @include padding(5vw);

    .video-container {
        position: relative;
        .cover {
            width: 100%;
            border-radius: 5px;
        }
    }

    .brief {
        display: flex;
        flex-direction: row;
        padding: 2vw 0;
        
        .author-avatar {
            border-radius: 50%;
            margin-right: 3vw;
        }

        .detail {
            display: flex;
            flex-direction: column;

            .title {
                font-weight: 400;
            }
            .desc {
                font-size: 12px;
                font-weight: 300;
                color: #999;
            }
        }
    }
}
</style>

