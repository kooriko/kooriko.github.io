<template lang="pug">
    li.video-item(:class="direction ? direction : null")
        div.cover-container(@click="jumpToVideo(id)")
            img.cover(:src="cover")
            span.duration {{ duration | secondToMin }}
        div.desc
            img.avatar(:src="avatar")
            div.detail 
                h4.title {{ title }}
                span.slogan {{ slogan }}
</template>
<script>
export default {
    name: 'video-item',
    inject: [ 'direction' ],
    props: {
        cover: String,
        duration: Number,
        avatar: String,
        title: String,
        slogan: String,
        id: Number,
        authorId: Number
    },
    filters: {
        secondToMin (val) {
            const arr = [ (val / 60) | 0, val % 60 ];
            return arr.map(item => String(item).padStart(2, '0')).join(':');
        }
    },
    methods: {
        jumpToVideo (id) {
            this.$router.push({ name: 'video', query: { id } });
        }
    }
}
</script>
<style lang="scss" scoped>
.video-item {
    display: flex;
    flex-direction: column;

    &.row {
        padding-bottom: 20px;
        padding-right: 0;

        &:first-child {
            padding-left: 5vw;
        }
        &:not(:first-child) {
            padding-left: 2.5vw;
        }
        &:last-child {
            padding-right: 5vw;
        }
    }

    .cover-container {
        position: relative;
        text-align: left;

        .cover {
            width: 90vw;
            border-radius: 5px;
        }
        .duration {
            position: absolute;
            right: 10px; bottom: 10px;
            display: inline-block;
            padding: 2px 5px;
            border-radius: 3px;
            font-size: 12px;
            color: #FFF;
            background: #333;

        }
    }

    .desc {
        display: flex;
        margin-top: 10px;
        flex-direction: row;

        .avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
        .detail {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-left: 5px;

            .title {
                max-height: 60vw;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                letter-spacing: 0.07em;
            }
            .slogan {
                font-weight: 300;
                font-size: 12px;
            }
        }
    }
}
</style>
