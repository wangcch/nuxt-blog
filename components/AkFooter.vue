<template>
  <div class="ak-footer">
    <div class="footer-cr">
      <p>Copyright © 2018 <a href="http://www.ahstu.edu.cn/" target="_blank">ahstu</a>. Designed By <a href="https://wangcch.cc" target="_blank">wangcch</a>.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ak-footer'
}
</script>

<style lang="scss" scoped>
.footer-cr {
  p {
    font-size: 14px;
    color: #303133;
    a {
      color: #303133;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
