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
@import '../../styles/var.scss';
.m-brief-card {
    @include flex(row);
    @include padding(3vw);
    @include split-line;

    .content {
        @include flex(column);

        .title {
            @include title-font-style;
        }
        .desc {
            @include minor-font-style;
        }
    }
}
</style>
