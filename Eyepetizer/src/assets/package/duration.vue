<template lang="pug">
    div.u-duration {{ duration | $_secondToMin }}
</template>
<script>
export default {
    name: 'duration',
    props: {
        duration: Number
    }
}
</script>
<style lang="scss" scoped>
.u-duration {
    position: absolute;
    display: inline-block;
    right: 5px; bottom: 10px;
    padding: 3px 5px;
    color: #FFF;
    border-radius: 3px;
    font-size: 12px;
    background: rgba(0, 0, 0, .8);
}
</style>
