<template>
  <div class="blog">
    <el-row>
      <el-col :xs="24" :sm="14" :md="16">
        <div class="blog-panel ty-panel" v-for="(item, index) in articleDataList" :key="item.id + index">
          <article-excerpt :data="item" :isDetailed="true"></article-excerpt>
        </div>
      </el-col>
      <el-col :xs="24" :sm="10" :md="8">
        <div class="blog-more">
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ArticleExcerpt from '~/components/ArticleExcerpt.vue'
export default {
  data () {
    return {
       articleDataList: [
        {
          id: 0,
          date: '2018-05-03T03:24:46+08:00',
          title: 'Demon 2018: The ak lab test',
          excerpt: 'We\'re announcing the next step in the evolution of the Messenger Platform: the ability for brands to incorporate augmented reality into their Messenger experiences.',
          url: '',
          img_url: 'https://cdn.wangcch.cc/demo/demobg.jpg',
          categories: ['cate1', 'cate2']
        },
        {
          id: 1,
          date: '2018-05-03T03:24:46+08:00',
          title: 'Demon 2018: The ak lab test',
          excerpt: 'We\'re announcing the next step in the evolution of the Messenger Platform: the ability for brands to incorporate augmented reality into their Messenger experiences.',
          url: '',
          categories: ['cate1', 'cate2']
        },
        {
          id: 2,
          date: '2018-05-03T03:24:46+08:00',
          title: 'Demon 2018: The ak lab test',
          excerpt: 'We\'re announcing the next step in the evolution of the Messenger Platform: the ability for brands to incorporate augmented reality into their Messenger experiences.',
          url: ''
        },
        {
          id: 3,
          date: '2018-05-03T03:24:46+08:00',
          title: 'Demon 2018: The ak lab test',
          excerpt: 'We\'re announcing the next step in the evolution of the Messenger Platform: the ability for brands to incorporate augmented reality into their Messenger experiences.',
          url: '',
          img_url: 'https://cdn.wangcch.cc/tybg.jpg'
        },
        {
          id: 4,
          date: '2018-05-03T03:24:46+08:00',
          title: 'Demon 2018: The ak lab test',
          excerpt: 'We\'re announcing the next step in the evolution of the Messenger Platform: the ability for brands to incorporate augmented reality into their Messenger experiences.',
          url: '',
          img_url: 'https://cdn.wangcch.cc/demo/demobg.jpg'
        }
      ],
    }
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
