<template>
  <div class="artcle-excerpt">
    <div class="ts-story_panel">
      <p class="date">{{ formatDate(storyData.date) }}</p>
      <h2><router-link to="">{{ storyData.title }}</router-link></h2>
      <p class="excerpt">{{ storyData.excerpt }}</p>
      <a href="#" class="more">Read More</a>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: "artcle-excerpt",
  props: ['data'],
  data () {
    return {
      storyData: {
        date: '2018-05-03T03:24:46+08:00',
        title: 'Designed By Wangcch',
        excerpt: 'People think focus means saying yes to the thing you’ve got to focus on. But that’s not what it means at all. It means saying no to the hundred other good ideas that there are. You have to pick carefully. I’m actually as proud of the things we haven’t done as the things I have done. Innovation is saying ‘no’ to 1,000 things. — Steve Jobs',
        img_url: 'https://cdn.wangcch.cc/tybg.jpg'
      }
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
      font-size: 28px;
      line-height: 36px;
      a {
        color: #3b5998;
        text-decoration: none;
        &:hover {
          color: #606266;
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
      white-space: nowrap;
      color: #3b5998;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
