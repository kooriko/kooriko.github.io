<template lang="pug">
    li.u-banner
        img.image(:src="data.image")
</template>

<script>
export default {
    name: 'banner',
    props: {
        data: Object
    },
}
</script>

<style lang="scss" scoped>
    .u-banner {
        width: 100%;

        .image {
            width: 100%;
            border-radius: 5px;
        }
    }
</style>
