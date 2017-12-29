<template lang="pug">
    div.m-brief-card
        img.avatar(:class="[ data.iconType ? `shape--${data.iconType}` : null ]" :src="data.icon" width="40" height="40")
        div.content
            p.title {{ data.title }}
            p.desc {{ data.description }}
        i.btn-action(v-if="false" @click="actionTo")
</template>
<script>
export default {
    name: 'briefCard',
    props: {
        data: Object
    },
    methods: {
        actionTo () {
            const { actionUrl } = this.data;
            this.$router.push()
        }
    }
}
</script>
<style lang="scss" scoped>
.m-brief-card {
    padding: 2.5vw 3vw;
    display: flex;
    overflow: hidden;
    position: relative;
    flex-direction: row;
    &:after {
        content: '';
        position: absolute;
        bottom: 0; left: 3vw;
        transform: scale(.3);
        transform-origin: 0 0;
        width: 500vw; height: 1px;
        background: #EEE;
    }
    .avatar {
        margin-right: 3vw;
        &.shape--square {
            border-radius: 5px;
        }

        &shape--round {
            border-radius: 50%;
        }
    }
    .content {
        display: flex;
        flex-direction: column;
        flex-grow: 1;

        .title {
            font-size: 14px;
        }
        .desc {
            font-size: 12px;
            font-weight: 300;
            color: #999;
        }
    }
}
</style>
