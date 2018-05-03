<template>
  <el-container>
    <el-header>
      <div class="wrap">
        <ak-header></ak-header>
      </div>
    </el-header>
    <el-main>
      <div class="wrap">
        <nuxt/>
      </div>
    </el-main>
    <el-footer>
      <div class="wrap">
        <ak-footer></ak-footer>
      </div>
    </el-footer>
  </el-container>
</template>

<script>
import AkHeader from '~/components/AkHeader.vue'
import AkFooter from '~/components/AkFooter.vue'
export default {
  components: {
    AkHeader,
    AkFooter
  }
}
</script>

<style lang="scss" scoped>
.el-container {
  position: relative;
  .el-header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
    background: #fff;
    border-bottom: 1px solid #E4E7ED;
  }
  .el-main {
    box-sizing: border-box;
    padding-top: 60px;
    width: 100%;
  }
  .wrap {
    max-width: 960px;
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    .el-header, .el-main, .el-footer {
      padding: 0 10px;
    }
    .el-main {
      padding-top: 60px;
    }
  }
}
</style>
