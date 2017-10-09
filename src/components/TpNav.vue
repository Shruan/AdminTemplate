<template>
  <div class="nav">
    <el-menu class="el-menu-vertical-demo"
    :router="true"
    :default-active="nowRoute"
    :collapse="isCollapse"
    :style="pageStyle"
    theme="dark"
    @open="handleOpen"
    @close="handleClose">
      <el-menu-item index="/home/index">
        <i class="el-icon-menu"></i>
        <span slot="title">检索专利</span>
      </el-menu-item>
      <!-- <el-menu-item index="/home/importPatent">
        <i class="el-icon-upload2"></i>
        <span slot="title">导入专利</span>
      </el-menu-item>
      <el-menu-item index="/home/213">
        <i class="el-icon-upload"></i>
        <span slot="title">采集进度</span>
      </el-menu-item> -->
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-upload"></i>
          <span slot="title">采集进度</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/home/importPatent">导入专利</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-message"></i>
          <span slot="title">供应商　</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/home/supplier">供应商管理</el-menu-item>
          <!-- <el-menu-item index="/home/1-2">供应商信息</el-menu-item> -->
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-date"></i>
          <span slot="title">日志管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/home/2321">采集库导入日志</el-menu-item>
          <el-menu-item index="/home/sellPatentLog">可售专利导入日志</el-menu-item>
          <el-menu-item index="/home/1-2">SOOPAT采集日志</el-menu-item>
          <el-menu-item index="/home/1-2">国之局采集日志</el-menu-item>
          <el-menu-item index="/home/loginLog">用户登录日志</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4" v-if="user.type == 1">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span slot="title">系统设置</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/home/manage">用户管理</el-menu-item>
          <!-- <el-menu-item index="/home/1-2">系统管理</el-menu-item> -->
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'nav',
  props: {
    isCollapse: Boolean,
    pageStyle: String
  },
  data () {
    return {
      user: {},
      nowRoute: ''
    }
  },
  created () {
    this.user = this.getUser()
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    updateRouter () {
      console.log(this.$route)
      this.nowRoute = this.$route.path
    }
  },
  watchs: {
    '$route': 'updateRouter'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  /*min-height: 1000px;*/
}
</style>
