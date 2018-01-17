<template lang="pug">
    div.eye-menu
        ul.eye-menu-truth(ref="menu")
            slot
            div.hover-bar(ref="hoverBar" :style="`transform: translateX(${22 + 55 * activeIndex }px)`")
</template>

<script>
export default {
    name: 'eye-menu',
    props: {
        defaultIndex: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
            activeIndex: this.defaultIndex
        }
    },
    watch: {
        defaultIndex (after) {
            this.activeIndex = after;
        },
        activeIndex (after, before) {
            const { menu, hoverBar } = this.$refs;
            if (after !== before) {
                this.changeHandler(after);
            }
        }
    },
    methods: {
        changeHandler (after) {
            this.$emit('change', after);
        }
    },
    created () {
        this.$bus.$off('handleClick');
        this.$bus.$on('handleClick', (index, times = 10) => {
            const { menu } = this.$refs;
            const originCenter = menu.scrollLeft + (menu.offsetWidth / 2);

            const newChild = menu.children[index];
            const newChildCenter = newChild.offsetLeft + (newChild.offsetWidth / 2);
            const dVal = newChildCenter - originCenter;

            let t = times;
            const menuScroll = () => {
                if (--t) {
                    menu.scrollLeft += dVal / times;
                    requestAnimationFrame(menuScroll);
                }
            }
            requestAnimationFrame(menuScroll);

            this.activeIndex = index;
        });
    },
}
</script>

<style lang="scss">
.eye-menu {
    width: 85vw;
    height: 40px;
    overflow: hidden;

    .eye-menu-truth {
        position: relative;
        width: 100%;
        height: 40px;
        padding-top: 10px;
        white-space: nowrap;
        overflow-y: scroll;
        font-size: 0;

        .hover-bar {
            position: absolute;
            width: 11px;
            height: 3px;
            background: #666;
            bottom: 15px;
            transform: translateX(77px);
            transition: transform .3s;
        }
    }
}
</style>
