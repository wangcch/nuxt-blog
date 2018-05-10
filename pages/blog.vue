<template>
  <div class="blog">
    <el-row>
      <el-col :xs="24" :sm="14" :md="16" v-loading="isLoading">
        <div class="blog-panel ty-panel animated fadeInUp" v-for="(item, index) in articleDataList" :key="'artcile' + item.id + index">
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
        <div class="blog-more ty-panel animated fadeIn" v-show="categories.length">
          <div class="blog-more_title">
            <h2>Category</h2>
            <el-button v-show="selectCategory" @click="cleanSelectCategory" size="mini" icon="el-icon-circle-close-outline"></el-button>
          </div>
          <!-- <div class="blog-more_category" v-for="(item, index) in categories" :key="'cate' + item + index">{{ item }}</div> -->
          <div>
            <el-radio-group v-model="selectCategory" @change="changeCategory">
              <el-radio class="blog-more_category" :label="item" border v-for="(item, index) in categories" :key="'cate' + item + index">{{ item }}</el-radio>
            </el-radio-group>
          </div>
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
      categories: [],
      selectCategory: ''
    }
  },
  methods: {
    cleanSelectCategory () {
      this.selectCategory = ''
      this.getData()
    },
    changeCategory (val) {
      this.selectCategory = val
      this.getData()
    },

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
      let paramStr =  this.selectCategory ? ('page=' + this.nowPage + '&category=' + this.selectCategory) : ('page=' + this.nowPage)
      ak.getUrlDataParams('article', paramStr,true, this, (res, isErr) => {
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
    .blog-more_title {
      color: #303133;
      overflow: hidden;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      h2 {
        flex: 1;
        padding: 5px 0;
      }
    }
    .blog-more_category {
      width: 100%;
      margin: 10px 0 0 0;
      a {
        display: block;
        text-decoration: none;
        color: #303133;
      }
    }
  }
}
</style>
