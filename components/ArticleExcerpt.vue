<template>
  <div class="artcle-excerpt">
    <div class="ts-story_panel">
      <p class="date">{{ formatDate(storyData.create_time) }}</p>
      <h2><router-link :to="routerUrl">{{ storyData.title }}</router-link></h2>
      <div class="img" v-show="isDetailed && storyData.img_url">
        <router-link :to="routerUrl">
          <img :src="storyData.img_url" alt="">
        </router-link>
      </div>
      <p class="excerpt">{{ storyData.excerpt }}</p>
      <p class="more"><router-link :to="routerUrl">Read More</router-link></p>
      <div class="categories" v-show="isDetailed">
        <p><span class="category" v-show="storyData.category">{{ storyData.category }}</span><span class="tag" v-for="(item, index) in storyData.tags" :key="item + index">{{ item }}</span></p>
      </div>
      <p class="author" v-show="isDetailed && storyData.author"><small>by</small>&nbsp;{{ storyData.author }}</p>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: "artcle-excerpt",
  props: ['data', 'isDetailed'],
  data () {
    return {
      storyData: {
        create_time: '2018-05-03T03:24:46+08:00',
        title: 'Designed By Wangcch',
        excerpt: 'People think focus means saying yes to the thing you’ve got to focus on. But that’s not what it means at all. It means saying no to the hundred other good ideas that there are. You have to pick carefully. I’m actually as proud of the things we haven’t done as the things I have done. Innovation is saying ‘no’ to 1,000 things. — Steve Jobs',
        img_url: 'https://cdn.wangcch.cc/tybg.jpg'
      },

      routerUrl: '/blog'
    }
  },

  methods: {
    formatDate (date) {
      return moment(date).format('MMM DD, YYYY')
    }
  },

  created () {
    if (this.data) {
      this.storyData = this.data
      this.routerUrl = '/article/' + this.storyData.title
    }
  }
};
</script>

<style lang="scss" scoped>
.artcle-excerpt {
  .ts-story_panel {
    .date {
      color: #C0C4CC;
      margin-bottom: 6px;
    }
    h2 {
      color: #3b5998;
      font-weight: bold;
      font-size: 26px;
      line-height: 36px;
      a {
        color: #3b5998;
        text-decoration: none;
        &:hover {
          color: #606266;
        }
      }
    }
    .img {
      width: 100%;
      margin-top: 10px;
      img {
        width: 100%;
        box-shadow: 0 6px 20px rgba(#000, 0.5);
        @media (max-width: 768px) {
          box-shadow: 0 3px 10px rgba(#000, 0.3);
        }
      }
    }
    .excerpt {
      margin: 16px 0;
      color: #606266;
      font-weight: 200;
      line-height: 20px;
    }
    .more {
      a {
        white-space: nowrap;
        color: #3b5998;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .categories {
      border-top: 1px solid #E4E7ED;
      margin-top: 10px;
      padding-top: 10px;
      p {
        font-size: 14px;
        color: #909399;
        .category {
          margin-right: 5px;
        }
        .tag {
          margin-right: 5px;
          border: 1px solid #E4E7ED;
          padding: 0 6px;
          border-radius: 10px;
        }
      }
    }
    .author {
      margin-top: 10px;
      font-size: 16px;
      text-align: right;
      color: #303133;
      small {
        color: #606266;
      }
    }
    @media (max-width: 768px) {
      h2 {
        font-size: 22px;
        line-height: 28px;
      }
    }
  }
}
</style>
