<template>
  <div class="top-show">
    <el-row>
      <el-col :xs="24" :sm="14" :md="16">
        <div class="ts-left">left</div>
          <div class="ts-top-tag">Top Stories</div>
      </el-col>
      <el-col :xs="24" :sm="10" :md="8">
        <div class="ts-right">right
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "top-show"
};
</script>

<style lang="scss" scoped>
.top-show {
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
