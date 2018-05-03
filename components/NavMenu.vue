<template>
  <div class="nav-menu">
    <ul>
      <li v-for="(item, index) in data" :key="item.name + index"><router-link :to="item.url">{{ item.name }}</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "nav-menu",
  props: ['data']
};
</script>

<style lang="scss" scoped>
.nav-menu {
  height: 100%;
  ul {
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0;
    li {
      list-style: none;
      margin-left: 20px;
      &:first-child {
        margin-left: 0;
      }
    }
    a {
      text-decoration: none;
      color: #303133;
    }
  }
}
</style>
