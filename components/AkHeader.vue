<template>
  <div class="ak-header">
    <div class="head-logo">
       <head-logo></head-logo>
    </div>
    <div class="head-menu">
      <nav-menu></nav-menu>
    </div>
  </div>
</template>

<script>
import HeadLogo from '~/components/HeadLogo.vue'
import NavMenu from '~/components/NavMenu.vue'
export default {
  name: 'ak-header',
  components: {
    HeadLogo,
    NavMenu
  }
}
</script>

<style lang="scss" scoped>
.ak-header {
  display: flex;
  height: 60px;
  .head-logo {
    width: 100px;
    overflow: hidden;
  }
  .head-menu {
    flex: 1;
    // overflow: hidden;
  }
}
</style>
