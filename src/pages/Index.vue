<template>
  <div class="shy__box">
    <nav
      class="shy__layout-nav"
      :style="isCollapse ? 'max-width: 64px;' : ''">
      <div
        class="shy__logo"
        :style="isCollapse ? 'width: 64px' : ''">
        <h2 v-if="!isCollapse" class="shy__logo-icon logo-title">Admin</h2>
        <h2 v-else class="shy__logo-icon logo-title">A</h2>
      </div>
      <TpMenu :pageStyle="pageStyle" />
    </nav>
    <div
      class="shy__layout-right"
      :style="isCollapse ? 'padding-left: 65px' : ''">
      <HeadNav />
      <section class="shy__layout-content">
        <router-view class="router"/>
      </section>
    </div>
  </div>
</template>

<script>
import HeadNav from './HeadNav'
import TpMenu from './TpMenu'
import { mapState } from 'vuex'
export default {
  components: {
    TpMenu,
    HeadNav
  },
  name: 'index',
  data () {
    return {
      user: {},
      pageStyle: ''
      // screenWidth: document.body.clientWidth
    }
  },
  computed: {
    ...mapState('globalModule', [
      'isCollapse'
    ])
  },
  // mounted () {
  //   const that = this
  //   window.onresize = () => {
  //     return (() => {
  //       window.screenWidth = document.body.clientWidth
  //       that.screenWidth = window.screenWidth
  //     })()
  //   }
  // },
  // watch: {
  //   screenWidth (val) {
  //     this.screenWidth = val
  //   }
  // },
  created () {
    // console.log(this.isCollapse)
    // this.user = this.getUser()
    let height = window.innerHeight
    this.pageStyle = 'min-height:' + (height - 100) + 'px;'
    // console.log(this.screenWidth)
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  /* 布局 */
  .shy__box {
    background: #f9f9f9;
    height: 100%;
  }
  .shy__layout-right {
    box-sizing: border-box;
    transition: padding-left .28s;
    padding-left: 180px;
    height: 100%;
    width: 100%;
  }
  .shy__layout-content {
    box-sizing: border-box;
    position: relative;
    overflow-x: hidden;
    padding: 15px;
    height: 100%;
    width: 100%;
    height: calc(100% - 50px);
  }
  .shy__layout-nav {
    position: fixed;
    overflow: hidden;
    z-index: 999;
    width: 180px;
    overflow: hidden;
    /* -webkit-transition: all cubic-bezier(0.39, 0.58, 0.57, 1) 520ms; */
  }
  .shy__logo {
    background: #334257;
    width: 179px;
    height: 100px;
    text-align: center;
    border-right: 1px solid #fff;
    -webkit-transition: all .3s ease-in-out;
  }
  .logo-title {
    font-size: 30px;
    font-weight: blod;
    color: #fff;
    padding-top: 40px;
  }
  .clearfix:before, .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .router {
    /* position: absolute; */
    display: block;
    height: 100%;
  }

  /* 全局样式 */
  .shy__full-card {
    min-height: 100%;
  }
</style>
