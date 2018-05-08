<template>
  <section class="container">
    <top-show :data="topShow" :topTag="true"></top-show>
    <el-row>
      <el-col :xs="24" :sm="14" :md="16">
        <div class="blog-list ty-panel" v-loading="isLoading">
          <h1 class="blog-list_title">Recent News and Blogs</h1>
          <article-list :data="articleDataList"></article-list>
          <div class="blog-list_more">
            <router-link to="/blog">See All</router-link>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="10" :md="8">
        <div class="index-more">
          <h2 class="index-more_title">More</h2>
          <link-share :data="moreLink"></link-share>
          <h2 class="index-more_title">Links</h2>
          <link-share :data="akLink"></link-share>
        </div>
      </el-col>
    </el-row>
  </section>
</template>

<script>
import ak from '~/assets/lib/ak.js'
import TopShow from '~/components/TopShow.vue'
import ArticleList from '~/components/ArticleList.vue'
import LinkShare from '~/components/LinkShare.vue'

export default {
  data () {
    return {
      topShow: {
        date: '2018-05-03T03:24:46+08:00',
        title: 'Demon 2018: The ak lab test',
        excerpt: 'We\'re announcing the next step in the evolution of the Messenger Platform: the ability for brands to incorporate augmented reality into their Messenger experiences.',
        url: '',
        img_url: 'https://cdn.wangcch.cc/demo/demobg.jpg'
      },
      articleDataList: [],
      isLoading: false,

      moreLink: [
        {
          name: 'OJ',
          url: 'https://oj.ahstu.cc'
        },
        {
          name: 'Git',
          url: 'https://git.ahstu.cc'
        },
        {
          name: 'Talk',
          url: 'http://talk.ahstu.cc'
        }
      ],
      akLink: [
        {
          name: 'ahstu',
          url: 'http://www.ahstu.edu.cn'
        },
        {
          name: 'ahstu-cine',
          url: 'http://www.ahstu.edu.cn/xxxy'
        }
      ]
    }
  },
  methods: {
    getData () {
      this.isLoading = true
      ak.getUrlDataParams('article', '' ,true, this, (res, isErr) => {
        if (!isErr) {
          this.articleDataList = res.data.data.data
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
    TopShow,
    ArticleList,
    LinkShare
  }
}
</script>

<style lang="scss" scoped>
.container {
  .top-show {
    margin: 30px 0;
  }

  .blog-list {
    .blog-list_title {
      margin: 0 0 20px 0;
      font-size: 22px;
      color: #303133;
    }
  }
  .blog-list_more {
    text-align: right;
    margin-top: 30px;
    a {
      text-decoration: none;
      color: #3b5998;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .index-more {
    padding: 30px;
    @media (max-width: 768px) {
      padding: 20px;
    }
    .index-more_title {
      font-size: 22px;
      color: #303133;
      margin: 0 0 15px 0;
      padding-bottom: 5px;
      border-bottom: 1px solid #DCDFE6;
      margin-top: 30px;
      &:first-child {
        margin-top: 0;
      }
    }
  }
}
</style>
