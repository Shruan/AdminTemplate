<template>
  <div class="home-index">
    <el-card shadow="hover" class="shy__full-card">
      <div slot="header" class="clearfix">
        <span>转盘抽奖</span>
        <el-button style="float: right; padding: 3px 0" type="text">提示信息</el-button>
      </div>
      <div
        class="wheelSurf-container"
        >
        <canvas
          :style="{
            transform: `rotate(${1080 * num}deg)`
          }"
          id="wheelSurf"
          width="300"
          height="300"
        />
        <el-button
          style="margin-top: 50px"
          @click="num++">
          转
        </el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'WheelSurf',
  components: {
  },
  data () {
    return {
      num: 0
    }
  },
  computed: {
    ...mapState('globalModule', [
      'user',
      'isMobile'
    ]),
    // 动态计算筛选列高度
    searchFormHeight () {
      let line = parseInt(Object.keys(this.searchForm).length / 3) + 1
      return line * 45
    }
  },
  watch: {
  },
  created () {
    let height = window.innerHeight
    this.pageStyle = 'min-height:' + (height - 100) + 'px;'
  },
  mounted () {
    let arr = [
      { name: '一等奖', color: '#ed655f' },
      { name: '谢谢参与', color: '#ef8683' },
      { name: '二等奖', color: '#ed655f' },
      { name: '五等奖', color: '#ef8683' },
      { name: '谢谢参与', color: '#ed655f' },
      { name: '三等奖', color: '#ef8683' },
      { name: '谢谢参与', color: '#ed655f' },
      { name: '四等奖', color: '#ef8683' }
    ]
    let total = arr.length
    let canvas = document.querySelector('#wheelSurf')
    let ctx = canvas.getContext('2d')
    let startAngle = 0 - 0.5 * Math.PI - 1 / total *  Math.PI
    let endAngle = 1 / total * 2 * Math.PI - 0.5 * Math.PI - 1 / total *  Math.PI
    ctx.moveTo(150, 150)
    arr.forEach((item, index) => {
      ctx.beginPath()
      ctx.strokeStyle = '#fff'
      ctx.arc(150, 150, 149, startAngle, endAngle)
      ctx.lineTo(150, 150)
      ctx.fillStyle = item.color
      ctx.fill()
      ctx.stroke()
      ctx.closePath()
      startAngle += 1 / total * 2 * Math.PI
      endAngle += 1 / total * 2 * Math.PI
    })
    arr.forEach((item, index) => {
      ctx.save()
    	ctx.beginPath()
      ctx.translate(150,150)
      ctx.rotate(index * 2 * Math.PI / 8)
      ctx.fillStyle = '#fff'
      ctx.font = '14px Verdana'
      ctx.fillText(item.name, -30, -95)
      ctx.closePath()
      ctx.restore()
    })
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wheelSurf-container {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  #wheelSurf {
    transition: transform 6s;
    transform-origin: 50% 50%;
  }
</style>
