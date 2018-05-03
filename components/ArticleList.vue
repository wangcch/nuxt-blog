<template>
  <div class="article-list">
    <article-excerpt v-for="(item,index) in data" :key="item.title + index" :data="item" class="list-article"></article-excerpt>
  </div>
</template>

<script>
import ArticleExcerpt from '~/components/ArticleExcerpt.vue'
export default {
  name: "artcle-list",
  props: ['data'],
  data () {
    return {
    }
  },
  created () {
  },
  components: {
    ArticleExcerpt
  }
};
</script>

<style lang="scss" scoped>
.article-list {
  .list-article {
    margin-top: 20px;
    &:first-child {
      margin-top: 0;
    }
  }
}
</style>
