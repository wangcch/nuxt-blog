<template>
  <div class="top-show">
    <el-row>
      <el-col :xs="24" :sm="14" :md="16">
        <div class="ts-left" :style="formatImgUrl(storyData.img_url)"></div>
      </el-col>
      <el-col :xs="24" :sm="10" :md="8">
        <div class="ts-right">
          <article-excerpt :data="data"></article-excerpt>
        </div>
      </el-col>
    </el-row>
    <div class="ts-top-tag" v-show="topTag || tagText">{{ tagText ? tagText : 'Top Stories' }}</div>
  </div>
</template>

<script>
import ArticleExcerpt from '~/components/ArticleExcerpt.vue'
export default {
  name: "top-show",
  props: ['data', 'topTag', 'tagText'],
  data () {
    return {
      storyData: {
        img_url: 'https://cdn.wangcch.cc/demo/demobg.jpg'
      }
    }
  },
  methods: {
    formatImgUrl (url) {
      return 'background: url(' + url + ') no-repeat; background-size: cover; background-position: center;'
    }
  },
  created () {
    if (this.data) {
      this.storyData = this.data
    }
  },
  components: {
    ArticleExcerpt
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
    position: relative;
  }
  .ts-right {
    position: relative;
    padding: 30px;
    overflow: hidden;
    @media (max-width: 768px) {
      padding: 20px;
    }
  }
  .el-row {
    height: 420px;
    .el-col {
      height: 100%;
    } 
    @media (max-width: 768px) {
      height: auto;
      .el-col {
        height: auto;
        &:first-child {
          height: 200px;
        }
      }
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
}
</style>
