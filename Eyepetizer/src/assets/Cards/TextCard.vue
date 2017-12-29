<template lang="pug">
    div.m-text-card(:class="data.type") 
        p {{ data.text }}
        i.btn-action(v-if="false")
</template>
<script>
export default {
    name: 'textCard',
    props: {
        data: Object,
    }
}
</script>
<style lang="scss" scoped>
.m-text-card {
    padding: 5px 3vw;
    &[class*=header] {
        margin-top: 22px;
        font-weight: 600;
    }
    &[class*=footer] {
        text-align: right;
        font-weight: 400;
    }
    &.header5 {
        font-size: 20px;
    }
    &.footer2 {
        font-size: 12px;
    }
}
</style>
