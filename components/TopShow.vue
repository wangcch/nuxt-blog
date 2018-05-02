<template>
  <div class="top-show">
    <el-row>
      <el-col :xs="24" :sm="14" :md="16">
        <div class="ts-left">
        </div>
      </el-col>
      <el-col :xs="24" :sm="10" :md="8">
        <div class="ts-right">
          <div class="ts-story_panel">
            <p class="date">{{ formatDate(storyData.date) }}</p>
            <h2>{{ storyData.title }}</h2>
            <p class="excerpt">{{ storyData.excerpt }}</p>
            <a href="#" class="more">Read More</a>
          </div>
        </div>
      </el-col>
    </el-row>
    <div class="ts-top-tag">Top Stories</div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: "top-show",
  data () {
    return {
      storyData: {
        date: '2018-05-03T03:24:46+08:00',
        title: 'F8 2018: New Tools in Messenger',
        excerpt: 'We\'re announcing the next step in the evolution of the Messenger Platform: the ability for brands to incorporate augmented reality into their Messenger experiences.',
        url: ''
      }
    }
  },
  methods: {
    formatDate (date) {
      return moment(date).format('MMM DD, YYYY')
    }
  },
  created () {
  }
};
</script>

<style lang="scss" scoped>
.top-show {
  position: relative;
  width: 100%;
  border: 1px solid #E4E7ED;
  background: #ffffff;
  border-radius: 3px;
  .ts-left, .ts-right {
    height: 100%;
  }
  .ts-left {
    // background: #666;
    position: relative;
    background: url('https://cdn.wangcch.cc/blog/2018-09-16-demo10.jpg') no-repeat;
    background-size: cover;
    background-position: center;
  }
  .ts-right {
    // background: #aaa;
    position: relative;
  }
  .el-row, .el-col {
    height: 420px;
    @media (max-width: 768px) {
      height: 200px;
    }
  }
  .ts-top-tag {
    position: absolute;
    top: 30px;
    left: -6px;
    padding: 5px 10px;
    background: #4e74c5;
    color: #ffffff;
    font-size: 18px;
    font-weight: 200;
    @media (max-width: 768px) {
      font-size: 14px;
    }
    &::before {
      content: '';
      position: absolute;
      bottom: -6px;
      left: 0;
      width: 0;
      height: 0;
      border: {
        width: 3px;
        color: #3b5998 #3b5998 transparent transparent;
        style: solid;
      }
    }
  }

  .ts-story_panel {
    padding: 30px;
    .date {
      color: #C0C4CC;
      // font-weight: 200;
      margin-bottom: 6px;
    }
    h2 {
      color: #3b5998;
      font-weight: bold;
      font-size: 28px;
      line-height: 36px;
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
    }
  }
}
</style>
