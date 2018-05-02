<template>
  <section class="container">
    <top-show></top-show>
    <!-- <top-show></top-show> -->
  </section>
</template>

<script>
import TopShow from '~/components/TopShow.vue'
export default {
  components: {
    TopShow
  }
}
</script>

<style lang="scss" scoped>
.container {
  .top-show {
    margin: 30px 0;
  }
}
</style>
