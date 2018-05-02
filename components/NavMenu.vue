<template>
  <div class="nav-menu">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/blog">Blog</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "nav-menu"
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
