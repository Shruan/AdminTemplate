<template>
  <div class="page-index">
    <nav class="index-left-nav" :style="isCollapse ? 'max-width: 64px' : ''">
      <div class="index-left-logo" :style="isCollapse ? 'max-width: 64px' : ''">

      </div>
      <tp-nav :isCollapse="isCollapse" :pageStyle="pageStyle"></tp-nav>
    </nav>
    <div class="index-right">
      <header class="index-right-header">
        <div class="btn-icon" @click="changeNav">
          <i class="el-icon-menu"></i>
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
      pageStyle: '',
      isCollapse: true
    }
  },
  created () {
    let height = window.innerHeight
    this.pageStyle = 'min-height:' + (height - 100) + 'px;'
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
  .index-left-nav {
    max-width: 200px;
    height: 100%;
    background: #334257;
  }
  .index-left-logo {
    width: 200px;
    height: 100px;
  }
  .index-right-header {
    height: 50px;
    width: 100%;
    background: #eee;
    text-align: left;
  }
  .index-right {
    flex: 1 1 auto;
  }
  .page-index {
    display: flex;
  }
  .btn-icon {
    width: 20px;
    height: 20px;
    display: inline-block;
  }
</style>
