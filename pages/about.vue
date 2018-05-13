<template>
  <div class="about">
    <div class="about-charts ty-panel animated fadeIn">
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
    <div class="about-introduce ty-panel">
      <p>
        ACM国际大学生程序设计竞赛(英文全称:ACM International Collegiate ProgrammingContest（ACM-ICPC或ICPC）是由美国计算机协会（ACM）主办的，一项旨在展示大学生创新能力、团队精神和在压 力下编写程序、分析和解决问题能力的年度竞赛。经过近30多年的发展，ACM国际大学生程序设计竞赛已经发展成为最具影响力的大学生计算机竞赛。 竞赛的历史可以上溯到1970年，当时在美国德克萨斯A&M大学举办了首届比赛。当时的主办方是the Alpha Chapter of the UPE Computer Science sHonorSociety。作为 一种全新的发现和培养计算机科学顶尖学生的方式，竞赛很快得到美国和加拿大各大学的积极响应。1977年，在ACM计算机科学会议期间举办了首次总决赛， 并演变成为目前的一年一届的多国参与的国际性比赛。迄今已经举办了36届。
      </p>
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
  .about-introduce {
    margin-top: 30px;
    p {
      color: #606266;
      line-height: 22px;
      text-indent: 2em;
    }
  }
}
</style>
