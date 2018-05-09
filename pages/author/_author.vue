<template>
  <div class="author">
    <el-row>
      <el-col :xs="24" :sm="14" :md="16">
        <div class="author-panel ty-panel userinfo-panel" v-loading="isUserLoading">
          <el-row>
            <el-col :xs="24" :sm="10">
              <div class="user_count">{{ userInfo.article_count }}</div>
            </el-col>
            <el-col :xs="24" :sm="14">
              <div class="user-item user_name">{{ userInfo.username }}</div>
              <div class="user-item user_email">{{ userInfo.email }}</div>
              <div class="user-item user_create_time" v-show="userInfo.create_time">{{ formatDate(userInfo.create_time) }}</div>
            </el-col>
          </el-row>
        </div>
        <div class="author-panel ty-panel" v-loading="isArticleLoading">
          <div class="author-article" v-for="(item, index) in articleData" :key="'art' + item.title + index">
            <article-excerpt :data="item"></article-excerpt>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="10" :md="8">
        <div class="author-more">
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ak from '~/assets/lib/ak.js'
import moment from 'moment'
import ArticleExcerpt from '~/components/ArticleExcerpt.vue'
export default {
  data () {
    return {
      articleData: {},
      userInfo: {},
      isUserLoading: false,
      isArticleLoading: false,
      searchAuthor: this.$route.params.author
    }
  },
  methods: {
    formatDate (date) {
      return moment(date).format('YYYY/MM/DD')
    },

    async getData () {
      this.isUserLoading = true
      this.isArticleLoading = true
      ak.getUrlDataParams('user/info', 'username=' + this.searchAuthor, true, this, (res, isErr) => {
        if (!isErr && res.data.code === 0) {
          this.userInfo = res.data.data
          this.isUserLoading = false
        } else {
          this.isUserLoading = false
          this.$message.error(res.data.error)
        }
      })
      ak.getUrlDataParams('article', 'author=' + this.searchAuthor , true, this, (res, isErr) => {
        if (!isErr && res.data.code === 0) {
          this.articleData = res.data.data
          this.isArticleLoading = false
        } else {
          this.isArticleLoading = false
          this.$message.error(res.data.error)
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
.author {
  .author-panel {
    margin-top: 30px;
    overflow: hidden;
    color: #303133;
  }
  .author-more {
    @media (max-width: 768px) {
      display: none;
    }
  }
  .userinfo-panel {
    .el-row {
      display: flex;
      align-items: center;
      @media (max-width: 768px) {
        display: block;
      }
    }
  }

  .user_count {
    text-align: center;
    font-size: 56px;
    position: relative;
  }

  .user-item {
    margin-top: 6px;
    &:first-child {
      margin-top: 0;
    }
    @media (max-width: 768px) {
      text-align: center;
    }
  }
  .user_name {
    text-transform: capitalize;
    font-size: 26px;
    @media (max-width: 768px) {
      font-size: 22px;
      text-align: center;
      padding-top: 20px;
    }
  }
  .author-article {
    padding: 10px 0;
  }
}
</style>
