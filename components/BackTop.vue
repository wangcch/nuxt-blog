<template>
  <div class="back-top el-icon-caret-top" v-show="visible" @click="backtop">
  </div>
</template>

<script>
export default {
  name: 'back-top',
  props: ['date', 'topheight'],
  data () {
    return {
      ret: 0,
      visible: false,
      obj: null,
      speed: 0,
      times: 0,
      time: 0
    }
  },
  mounted () {
    window.addEventListener('scroll', this.hanScroll)
  },
  methods: {
    hanScroll () {
      const scrollTop = this.getScroll(window)
      this.visible = scrollTop > this.topheight
    },
    getScroll (w) {
      this.ret = w.pageYOffset
      const method = 'scrollTop'
      if(typeof this.ret !== 'number'){
        let d = w.document;
        this.ret = d.documentElemelnt[method]
        if(typeof this.ret !== 'number'){
          this.ret = d.body[method]
        }
      }
      return this.ret
    },
    backtop () {
      const initerval = 1
      let num = this.date / initerval
      this.time = 0
      this.times = num;
      this.speed = this.ret / num
      this.obj = setInterval(this.setScroll, initerval)
    },
    setScroll(){
      if(this.time > this.times || this.ret <= 0){
        clearInterval(this.obj)
        return
      }
      this.time++
      this.ret -= this.speed
      document.documentElement.scrollTop = document.body.scrollTop = this.ret
    }
  }
}
</script>

<style lang="scss" scoped>
.back-top {
  position: fixed;
  right: 30px;
  bottom: 30px;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(#303133, 0.6);
  color: #e9eaed;
  cursor: pointer;
}
</style>
