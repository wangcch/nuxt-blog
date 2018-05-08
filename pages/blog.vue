<template>
  <div class="blog">
    <el-row>
      <el-col :xs="24" :sm="14" :md="16" v-loading="isLoading">
        <div class="blog-panel ty-panel" v-for="(item, index) in articleDataList" :key="'artcile' + item.id + index">
          <article-excerpt :data="item" :isDetailed="true"></article-excerpt>
        </div>
        <el-pagination
          layout="prev, pager, next"
          v-show="articleTotal > 9"
          :total="articleTotal"
          prev-text="Prev"
          next-text="Next"
          style="text-align: center; margin: 30px;">
        </el-pagination>
      </el-col>
      <el-col :xs="24" :sm="10" :md="8">
        <div class="blog-more">
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ak from '~/assets/lib/ak.js'
import ArticleExcerpt from '~/components/ArticleExcerpt.vue'
export default {
  data () {
    return {
      articleDataList: [],
      articleTotal: 0,
      isLoading: false
    }
  },
  methods: {
    getData () {
      this.isLoading = true
      ak.getUrlDataParams('article', '' ,true, this, (res, isErr) => {
        if (!isErr) {
          this.articleDataList = res.data.data.data
          this.articleTotal = res.data.data.total
          this.isLoading = false
        } else {
          this.isLoading = false
          this.$message.error(res.data.data)
        }
      })
    }
  },
  created () {
    this.getData()
  },
  components: {
    ArticleExcerpt
  }
}
</script>

<style lang="scss" scoped>
.blog {
  .blog-panel {
    margin-top: 30px;
  }
  
  .blog-more {
    @media (max-width: 768px) {
      display: none;
    }
  }
}
</style>
