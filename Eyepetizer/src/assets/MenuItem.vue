<template lang="pug">
    li.eye-menu-item(@click="clickHandler" :class="[ isActive ? 'is-active' : '' ]")
        slot
</template>

<script>
export default {
    name: 'eye-menu-item',
    props: {
        index: String,
    },
    computed: {
        menu () {
            return this.$parent;
        },
        isActive () {
            return this.menu.activeIndex === this.index;
        }
    },
    methods: {
        clickHandler () {
            this.$bus.$emit('handleClick', this.index);
        }
    },
}
</script>

<style lang="scss">
.eye-menu-item {
    color: #888;
    font-size: 12px;
    width: 55px;
    display: inline-block;
    text-align: center;

    &.is-active {
        color: #444;
    }
}
</style>
