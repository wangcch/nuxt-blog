import Vue from 'vue'
import ECharts from 'echarts'
import VeLine from 'v-charts/lib/line'
import VePie from 'v-charts/lib/pie'
import VeHistogram from 'v-charts/lib/histogram'
import VeRing from 'v-charts/lib/ring'
import VeBar from 'v-charts/lib/bar'

Vue.use(ECharts)
Vue.component('ve-line', VeLine)
Vue.component('ve-pie', VePie)
Vue.component('ve-histogram', VeHistogram)
Vue.component('ve-ring', VeRing)
Vue.component('ve-bar', VeBar)