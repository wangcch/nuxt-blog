<template>
  <div class="article">
    <el-row>
      <el-col :xs="24" :sm="18">
        <div class="article-panel ty-panel" v-loading="isLoading">
          <h1 class="article_title">{{ articleData.title }}</h1>
          <p class="article_time" v-show="articleData.create_time">{{ formatDate(articleData.create_time) }} <span class="article_author"><router-link :to="'/author/' + articleData.author">{{ articleData.author }}</router-link></span></p>
          <p class="article_time" v-show="articleData.update_time">{{ formatDate(articleData.update_time) }}</p>
          <p class="article_more" v-show="articleData.category"><span class="article_category">{{ articleData.category }}</span><span class="article_tag" v-for="(tag, index) in articleData.tags" :key="'tag' + tag + index">{{ tag }}</span></p>
          <div class="article_img" v-show="articleData.img_url">
            <img :src="articleData.img_url" :alt="articleData.title">
          </div>
          <div class="article_content" id="article_content" v-html="articleContentHtml" v-highlightjs></div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="6">
        <div class="article-more ty-panel_nopadding" v-show="prevTitle">
          <router-link :to="'/article/' + prevTitle">
            <p class="sub">Prev</p>
            <p class="title">{{ prevTitle }}</p>
          </router-link>
        </div>
        <div class="article-more ty-panel_nopadding" v-show="nextTitle">
          <router-link :to="'/article/' + nextTitle">
            <p class="sub">Next</p>
            <p class="title">{{ nextTitle }}</p>
          </router-link>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ak from '~/assets/lib/ak.js'
import moment from 'moment'
// import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      articleData: {},
      articleContentHtml: '',
      isLoading: false,
      searchTitle: this.$route.params.title,
      prevTitle: '',
      nextTitle: ''
    }
  },
  methods: {
    formatDate (date) {
      return moment(date).format('YYYY/MM/DD HH:mm')
    },

    getData () {
      this.isLoading = true
      ak.getUrlDataParams('article', 'title=' + this.searchTitle , true, this, (res, isErr) => {
        if (!isErr && res.data.code === 0) {
          this.articleData = res.data.data
          this.prevTitle = this.articleData.prev ? this.articleData.prev.title : ''
          this.nextTitle = this.articleData.next ? this.articleData.next.title : ''
          ak.makedownToHtml(this.articleData.excerpt + this.articleData.content, (data) => {
            this.articleContentHtml = data
            this.isLoading = false
          })
        } else {
          this.isLoading = false
          this.$message.error(res.data.error)
        }
      })
    }
  },
  created () {
    this.getData()
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>
.article {
  .article-panel {
    margin-top: 30px;
    overflow: hidden;
    color: #303133;
  }

  .article_title {
    font-size: 26px;
    margin: 0 0 10px 0;
  }

  .article_time {
    color: #909399;
  }
  .article_author {
    color: #606266;
    margin-left: 10px;
    a {
      color: #3b5998;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .article_more {
    margin-top: 10px;
    color: #606266;
    .article_category {
      border: 1px solid #DCDFE6;
      font-size: 14px;
      padding: 0 6px;
      margin-right: 10px;
    }
    .article_tag {
      font-size: 12px;
      margin-left: 6px;
      background: #C0C4CC;
      color: #ffffff;
      padding: 2px 6px;
      border-radius: 10px;
    }
  }

  .article_img {
    margin: 20px -30px 0 -30px;
    @media (max-width: 768px) {
      margin: 20px -20px 0 -20px;
    }
    img {
      box-shadow: 0 3px 20px rgba(#000, 0.5);
      width: 100%;
    }
  }

  .article_content {
    color: #303133;
    margin-top: 20px;
    p {
      word-break: break-word;
    }
  }
  
  .article-more {
    margin-top: 20px;
    margin-left: 20px;
    transition: all 0.3s;
    &:first-child {
      margin-top: 30px;
    }
    @media (max-width: 768px) {
      margin: 10px 0 0 0;
    }
    a {
      display: block;
      text-decoration: none;
      color: #303133;
      padding: 20px;
      .sub {
        color: #606266;
        font-size: 14px;
        margin-bottom: 5px;
      }
    }
    &:hover {
      box-shadow: 0 6px 20px rgba(#000, 0.1);
    }
  }
}
</style>
