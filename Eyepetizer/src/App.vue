<template lang="pug">
  div#app
    router-view(name="header")
    router-view
    router-view(name="footer")

</template>
<script>
import Header from '@/vue/components/Header';

export default {
  name: 'app',
  components: { Header },
  data () {
    return {

    }
  },
}
</script>
<style lang="scss">
@import './styles/global.scss';

#app {
  text-align: center;
}
</style>
