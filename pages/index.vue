<template>
  <section class="container">
    <top-show :data="topShow" :topTag="true"></top-show>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="8">
        <article-list :data="articleDataList"></article-list>
      </el-col>
      <el-col :xs="24" :sm="16">
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
  .top-show {
    margin: 30px 0;
  }
  .article-list {
    background: #aaa;
  }
}
</style>
