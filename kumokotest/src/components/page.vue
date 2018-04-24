<template>
<div class="page">
  <div class="page_image" :class="[slideTo && currentPage === num ? `page_image--to${ slideTo }` : '', isFull ? 'is-full' : 'is-half' ]" :style="{ backgroundImage: `url(${imageSrc})` }"></div>
  <div class="page_content">
    <slot></slot>
  </div>
</div>
</template>

<script>
export default {
  props: [ 'currentPage', 'imageSrc', 'isFull', 'num' ],
  data () {
    return {
      slideTo: ''
    }
  },
  watch: {
    currentPage (after, before) {
      this.$nextTick(() => {
        if (before > after) {
          this.slideTo = 'top'
        } else {
          this.slideTo = 'bottom'
        }
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.page_content {
  display: flex;
  flex-direction: column;
  z-index: 10;
}
</style>
