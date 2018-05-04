<template>
  <div class="shy__box">
    <!-- 左侧布局 -->
    <nav
      class="shy__layout-nav"
      :class="{'shy__layout-nav-hidden': isCollapse}">
      <!-- logo部分 -->
      <div class="shy__logo">
        <h2 v-if="!isCollapse" class="shy__logo-icon logo-title">Admin</h2>
        <h2 v-else class="shy__logo-icon logo-title">A</h2>
      </div>
      <!-- 菜单部分 -->
      <TpMenu :pageStyle="pageMinHeight" />
    </nav>

    <!-- 右侧布局 -->
    <div
      class="shy__layout-right"
      :class="{'shy__layout-right-show': isCollapse}"
      @click="_isCollapse(isMobile ? true : isCollapse)">
      <!-- 右侧顶部 -->
      <HeadNav />
      <!-- 右侧tags标签栏 -->
      <TpTags v-show="!isMobile"/>

      <!-- 内容部分 -->
      <section class="shy__layout-content">
        <transition :name="transitionName">
          <router-view class="router"/>
        </transition>
      </section>

    </div>
  </div>
</template>

<script>
import HeadNav from './subPage/HeadNav'
import TpMenu from './subPage/TpMenu'
import TpTags from './subPage/TpTags'
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  components: {
    TpMenu,
    HeadNav,
    TpTags
  },
  name: 'Layout',
  data () {
    return {
      pageMinHeight: `min-height: ${window.innerHeight - 100}px;`,  // 计算页面最小高度
      transitionName: 'slide-left',
      screenWidth: document.body.clientWidth  // 计算浏览器视口宽度
    }
  },
  computed: {
    ...mapState('globalModule', [
      'isCollapse',
      'isMobile'
    ])
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      // 屏幕小于900时 路由跳转成功后隐藏菜单
      if (this.screenWidth < 900) {
        this._isCollapse(true)
      }
    },
    screenWidth (val) {
      this._isMobile(val < 900 ? true : false)
      this.pageMinHeight = `min-height: ${window.innerHeight - 100}px;`
    }
  },
  mounted () {
    // 监听屏幕size改变
    const that = this
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth
        that.screenWidth = window.screenWidth
      })()
    }
  },
  created () {
    this._isMobile(this.screenWidth < 900 ? true : false)
    if (this.isMobile) {
      this._isCollapse(true)
    }
  },
  methods: {
    ...mapMutations('globalModule', [
      '_isCollapse',
      '_isMobile'
    ]),
    ...mapActions('globalModule', [
      '_AddTag'
    ])
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
  .shy__layout-nav {
    position: fixed;
    overflow: hidden;
    z-index: 9999;
    width: 179px;
    overflow: hidden;
    /* -webkit-transition: all cubic-bezier(0.39, 0.58, 0.57, 1) 520ms; */
  }
  .shy__layout-nav-hidden {
    max-width: 64px;
  }
  .shy__layout-right {
    box-sizing: border-box;
    transition: padding-left .28s;
    padding-left: 180px;
    height: 100%;
    width: 100%;
  }
  .shy__layout-right-show {
    padding-left: 65px;
  }
  .shy__layout-content {
    box-sizing: border-box;
    position: relative;
    overflow-x: hidden;
    padding: 15px;
    height: calc(100% - 95px);
    width: 100%;
  }
  .shy__logo {
    width: 100%;
    background: #334257;
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
    content: '';
  }
  .clearfix:after {
    clear: both
  }

  /* 页面切换 动态效果 */
  .router {
    position: absolute;
    display: block;
    height: calc(100% - 30px);
    width: calc(100% - 30px);
  }
  /* 左滑 */
  .slide-left-enter-active, .slide-left-leave-active {
    transition: all .5s;
  }
  .slide-left-enter, .slide-left-leave-active {
    opacity: 0;
  }
  .slide-left-enter {
    transform: translateX(50px);
  }
  .slide-left-leave-active {
    transform: translateX(-50px);
  }
  /* 右滑 */
  .slide-right-enter-active, .slide-right-leave-active {
    transition: all 1s;
  }
  .slide-right-enter, .slide-right-leave-active {
    opacity: 0;
  }
  .slide-right-enter {
    transform: translateX(31px);
  }
  .slide-right-leave-active {
    transform: translateX(-31px);
  }
  /* 页面切换 动态效果 */

  /* 覆盖element ui样式 */
  .searchform-box .el-form-item .el-form-item__label {
    font-size: 12px;
  }
  .el-form-item .el-date-editor--daterange.el-input {
    width: 100%;
  }
  .el-table__body .el-table__expanded-cell {
    background: #fbfbfb;
  }

  /* 媒体查询 适配手机端 */
  @media screen and (max-width: 900px) {
    .shy__layout-right {
      padding-left: 0;
    }
    .shy__layout-nav-hidden {
      max-width: 0;
    }
    .shy__layout-content {
      height: calc(100% - 65px);
    }
  }
</style>
