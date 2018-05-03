<template>
  <div class="link-share">
    <ul>
      <li v-for="(item, index) in data" :key="item.name + index">
        <h3>{{ item.name }}:</h3>
        <a :href="item.url" target="_blank"><p>{{ item.url }}</p></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "link-share",
  props: ['data']
};
</script>

<style lang="scss" scoped>
.link-share {
  ul {
    padding: 0;
    margin: 0;
    li {
      list-style: none;
      padding-top: 15px;
      &:first-child {
        padding-top: 0;
      }
      h3 {
        margin-bottom: 6px;
        font-size: 16px;
        color: #303133;
      }
      a {
        display: block;
        text-decoration: none;
        color: #3b5998;
        p {
          font-size: 14px;
        }
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
