<template>
  <div class="shy__box">
    <nav class="shy__layout-nav" :style="isCollapse ? 'max-width: 64px' : ''">
      <div class="shy__logo" :style="isCollapse ? 'max-width: 64px' : ''">
        <h2 v-if="!isCollapse" class="shy__logo-icon logo-title">Admin</h2>
        <h2 v-else class="shy__logo-icon logo-title">A</h2>
      </div>
      <TpMenu :pageStyle="pageStyle" />
    </nav>
    <div class="shy__layout-right">
        <HeadNav />
      <div class="shy__layout-content">
        <router-view />
      </div>
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
  .user-box {
    margin: 0 20px 0 13px;
    text-align:left;
    align-self:center;
    line-height: 16px;
  }
  .el-dropdown-link {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .el-dropdown-link img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }
  .shy__layout-content {
    padding: 20px;
  }
  .shy__layout-nav {
    max-width: 200px;
    background: #334257;
    -webkit-transition: all cubic-bezier(0.39, 0.58, 0.57, 1) 520ms;
  }
  .shy__logo {
    width: 200px;
    height: 100px;
    text-align: center;
  }
  .clearfix:before, .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .shy__layout-right-header {
    height: 50px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
    text-align: left;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
  }
  .shy__layout-right {
    flex: 0 1 auto;
    flex: 1;
    width: 1px;
  }
  .shy__box {
    display: flex;
    background: #f9f9f9;
  }
  .btn-icon {
    cursor: pointer;
    width: 20px;
    height: 20px;
    display: inline-block;
  }
  .logo-title {
    font-size: 30px;
    font-weight: blod;
    color: #fff;
    padding-top: 40px;
  }
</style>
