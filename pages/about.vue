<template>
  <div class="about">
    <div class="about-charts ty-panel">
      <el-row :gutter="10">
        <el-col :xs="24" :sm="10">
          <ve-pie :data="chartData" :settings="chartSettings" :colors="colors"></ve-pie>
        </el-col>
        <el-col :xs="24" :sm="14">
          <h2>Honner</h2>
          <el-table
            :data="gradeData"
            border
            show-summary
            sum-text="sum total"
            style="width: 100%">
            <el-table-column
              prop="grade"
              label="grade">
            </el-table-column>
            <el-table-column
              prop="count"
              label="count">
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import LinkShare from '~/components/LinkShare.vue'
export default {
  data () {
    return {
      gradeData: [
        {
          grade: 'national',
          count: 10
        },
        {
          grade: 'provincial',
          count: 20
        },
        {
          grade: 'school',
          count: 50
        }
      ]
    }
  },
  created () {
    this.chartData = {
      columns: ['奖项', '数量'],
      rows: [
        { '奖项': 'national', '数量': 10 },
        { '奖项': 'provincial', '数量': 20 },
        { '奖项': 'school', '数量': 50 }
      ]
    }
    this.chartSettings = {
      dimension: '奖项',
      metrics: '数量',
      radius: 80,
    }
    this.colors = ['#666', '#888', '#aaa']
  },
  components: {
    LinkShare
  }
}
</script>

<style lang="scss" scoped>
.about {
  .about-charts  {
    margin-top: 30px;
    h2 {
      text-align: center;
      margin: 40px 0 20px 0;
      @media (max-width: 768px) {
        margin: 0 0 10px 0;
      }
    }
  }
}
</style>
