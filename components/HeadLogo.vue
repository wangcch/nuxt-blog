<template>
  <div class="head-logo">
    <h1><router-link to="/">AK Lab</router-link></h1>
  </div>
</template>

<script>
export default {
  name: "head-logo"
};
</script>

<style lang="scss" scoped>
.head-logo {
  height: 100%;
  display: flex;
  align-items: center;
  h1 {
    font-weight: 200;
    margin: 0;
    font-size: 26px;
    @media (max-width: 768px) {
      font-size: 22px;
    }
    a {
      text-decoration: none;
      color: #303133;
    }
  }
}
</style>
