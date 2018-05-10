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
          @current-change="pageChange"
          :current-page="nowPage"
          prev-text="Prev"
          next-text="Next"
          style="text-align: center; margin: 30px;">
        </el-pagination>
      </el-col>
      <el-col :xs="24" :sm="10" :md="8">
        <div class="blog-more ty-panel" v-show="categories">
          <div class="blog-more_category" v-for="(item, index) in categories" :key="'cate' + item + index">{{ item }}</div>
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
      nowPage: 1,
      isLoading: false,
      categories: []
    }
  },
  methods: {
    pageChange (page) {
      this.nowPage = page
      this.getData()
    },

    getCategory () {
      ak.getUrlDataParams('article/category', '' ,true, this, (res, isErr) => {
        if (!isErr && res.data.code === 0) {
          this.categories = res.data.data
        } else {
          this.$message.error(res.data.data)
        }
      })
    },

    getData () {
      this.isLoading = true
      ak.getUrlDataParams('article', 'page=' + this.nowPage ,true, this, (res, isErr) => {
        if (!isErr && res.data.code === 0) {
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
    this.getCategory()
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
    margin-top: 30px;
    margin-left: 20px;
    @media (max-width: 768px) {
      display: none;
    }
    .blog-more_category {
      border: 1px solid #DCDFE6;
      border-radius: 3px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding: 6px 10px;
      margin-top: 10px;
      &:first-child {
        margin-top: 0;
      }
      a {
        display: block;
        text-decoration: none;
        color: #303133;
      }
      &:hover {
        border-color: #303133;
      }
    }
  }
}
</style>
