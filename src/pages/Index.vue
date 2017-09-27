<template>
  <div class="page-index" :style="'width:' + screenWidth + 'px'">
    <nav class="index-left-nav" :style="isCollapse ? 'max-width: 64px' : ''">
      <div class="index-left-logo" :style="isCollapse ? 'max-width: 64px' : ''">
        <h2 v-if="!isCollapse" style="font-size:30px;font-weight:blod;color:#fff;padding-top:40px" class="index-left-logo-icon">LOGO</h2>
        <h2 v-else style="font-size:30px;font-weight:blod;color:#fff;padding-top:40px" class="index-left-logo-icon">L</h2>
      </div>
      <tp-nav :isCollapse="isCollapse" :pageStyle="pageStyle"></tp-nav>
    </nav>
    <div class="index-right">
      <header class="index-right-header">
        <div class="btn-icon" @click="changeNav">
          <i class="el-icon-menu"></i>
        </div>
        <div class="">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              qiushiyuan{{user}}<i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </header>
      <div class="index-right-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import TpNav from '@/components/TpNav'
export default {
  components: {
    TpNav
  },
  name: 'nav',
  data () {
    return {
      user: {},
      editInput: '',
      pageStyle: '',
      isCollapse: false,
      screenWidth: document.body.clientWidth
    }
  },
  mounted () {
    const that = this
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth
        that.screenWidth = window.screenWidth
      })()
    }
  },
  watch: {
    screenWidth (val) {
      this.screenWidth = val
    }
  },
  created () {
    let height = window.innerHeight
    this.pageStyle = 'min-height:' + (height - 100) + 'px;'
    console.log(this.screenWidth)
  },
  methods: {
    changeNav () {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index-right-content {
    padding-top: 20px;
  }
  .index-left-nav {
    max-width: 200px;
    height: 100%;
    background: #334257;
    -webkit-transition: all cubic-bezier(0.39, 0.58, 0.57, 1) 520ms;
  }
  .index-left-logo {
    width: 200px;
    height: 100px;
  }
  .index-left-logo-icon {
  }
  .index-right-header {
    height: 50px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
    text-align: left;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
  }
  .index-right {
    flex: 0 1 auto;
    flex: 1;
    width: 1px;
  }
  .page-index {
    display: flex;
    background: #f9f9f9;
  }
  .btn-icon {
    cursor: pointer;
    width: 20px;
    height: 20px;
    display: inline-block;
  }
</style>
