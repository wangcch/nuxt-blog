<template>
  <div class="nav-menu">
    <el-menu :default-active="activeUrl" mode="horizontal" router>
      <el-menu-item :index="item.url" v-for="(item, index) in data" :key="item.name + index">{{ item.name }}</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "nav-menu",
  props: ['data'],
  data () {
    return {
      activeUrl: '/'
    }
  },
  created () {
    this.activeUrl = this.$router.history.current.path
  }
};
</script>

<style lang="scss" scoped>
.nav-menu {
  height: 100%;
  ul {
    height: 100%;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
