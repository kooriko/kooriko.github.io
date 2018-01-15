<template lang="pug">
    ul.m-footer
        li.item 首页
        li.item 关注
        li.item 通知
        li.item 我的
</template>

<script>
export default {

}
</script>

<style lang="scss">
.m-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    right: 0; bottom: 0; left: 0; height: 40px;
    background: #ECECEC;

    .item {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 10px;
        height: 100%;
        flex: 1;
    }
}

</style>