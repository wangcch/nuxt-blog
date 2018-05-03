<template>
  <section class="container">
    <top-show :data="topShow" :topTag="true"></top-show>
    <el-row>
      <el-col :xs="24" :sm="14" :md="16">
        <div class="blog-list">
          <h1 class="blog-list_title">Recent News and Blogs</h1>
          <article-list :data="articleDataList"></article-list>
          <div class="blog-list_more">
            <router-link to="/blog">See All</router-link>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="10" :md="8">
        <div class="index-more">
          more
        </div>
      </el-col>
    </el-row>
  </section>
</template>

<script>
import TopShow from '~/components/TopShow.vue'
import ArticleList from '~/components/ArticleList.vue'

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
      articleDataList: [
        {
          id: 0,
          date: '2018-05-03T03:24:46+08:00',
          title: 'Demon 2018: The ak lab test',
          excerpt: 'We\'re announcing the next step in the evolution of the Messenger Platform: the ability for brands to incorporate augmented reality into their Messenger experiences.',
          url: '',
          img_url: 'https://cdn.wangcch.cc/demo/demobg.jpg'
        },
        {
          id: 1,
          date: '2018-05-03T03:24:46+08:00',
          title: 'Demon 2018: The ak lab test',
          excerpt: 'We\'re announcing the next step in the evolution of the Messenger Platform: the ability for brands to incorporate augmented reality into their Messenger experiences.',
          url: '',
          img_url: 'https://cdn.wangcch.cc/demo/demobg.jpg'
        },
        {
          id: 2,
          date: '2018-05-03T03:24:46+08:00',
          title: 'Demon 2018: The ak lab test',
          excerpt: 'We\'re announcing the next step in the evolution of the Messenger Platform: the ability for brands to incorporate augmented reality into their Messenger experiences.',
          url: '',
          img_url: 'https://cdn.wangcch.cc/demo/demobg.jpg'
        }
      ]
    }
  },
  components: {
    TopShow,
    ArticleList
  }
}
</script>

<style lang="scss" scoped>
.container {
  overflow: hidden;
  .top-show {
    margin: 30px 0;
  }
  .blog-list, .index-more {
    padding: 30px;
    @media (max-width: 768px) {
      padding: 20px;
    }
  }
  .blog-list {
    border: 1px solid #E4E7ED;
    background: #ffffff;
    border-radius: 3px;
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
}
</style>
