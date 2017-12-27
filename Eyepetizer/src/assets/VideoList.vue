<template lang="pug">
    div.video-list-container(:class="direction ? direction : null")
        ul.video-list
            slot
</template>
<script>
export default {
    name: 'video-list',
    provide () {
        return {
            direction: this.direction
        }
    },
    props: {
        direction: {
            type: String,
            default: 'column',
            validator: function (str) {
                return str === 'row' || str === 'column';
            }
        },
    },
    
}
</script>
<style lang="scss" scoped>
.video-list-container {
    width: 100vw;

    .video-list {
        display: flex;
        padding-bottom: 30px;
    }

    &.row {
        height: 290px;
        overflow: hidden;

        .video-list {
            flex-direction: row;
            overflow: auto;
        }
    }

    &.column {
        .video-list {
            flex-direction: column;
        }
    }
}
</style>
