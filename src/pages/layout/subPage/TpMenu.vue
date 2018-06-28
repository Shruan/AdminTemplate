<template>
  <div class="nav"
    :style="`height: ${pageStyle}px`">
    <el-menu
      text-color="#fff"
      background-color="#333"
      active-text-color="#ffd04b"
      class="el-menu-vertical-demo"
      :style="`min-height: ${pageStyle}px`"
      :default-active="nowRoute"
      :collapse="isCollapse"
      @select="selectMenu"
      @open="handleOpen"
      @close="handleClose">

      <template v-for="(item, index) in menuList">
        <el-menu-item
          v-if="!item.children && menuControll(item.key)"
          :index="item.key"
          :key="index">
          <i :class="item.icon" />
          <span slot="title">{{item.name}}</span>
        </el-menu-item>

        <el-submenu
          v-else-if="item.children && menuControll(item.key)"
          :index="`${index}`"
          :key="index">
          <template slot="title">
            <i :class="item.icon"></i>
            <span slot="title">{{item.name}}</span>
          </template>
          <el-menu-item
            v-if="menuControll(child.key)"
            v-for="child in item.children"
            :key="child.key"
            :index="child.key">
            <span slot="title">{{child.name}}</span>
          </el-menu-item>
        </el-submenu>

      </template>

    </el-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'srn-menu',
  props: {
    pageStyle: Number
  },
  data () {
    return {
      nowRoute: '',
      isVip: false
    }
  },
  computed: {
    ...mapState('globalModule', [
      'menuList',
      'user',
      'tag',
      'isCollapse'
    ])
  },
  watch: {
    tag (val) {
      this.nowRoute = val
    }
  },
  methods: {
    menuControll (routerName) {
      if (['MiniProgram'].indexOf(routerName) !== -1) {
        return this.isVip
      }
      if (['HomePage'].indexOf(routerName) !== -1) {
        return !this.isVip
      }
      return true
    },
    selectMenu (val) {
      this.$router.push({ name: val })
    },
    handleOpen (key, keyPath) {
      // console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      // console.log(key, keyPath)
    },
    updateRouter () {
      // console.log(this.$route)
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
    width: 179px!important;
    overflow: hidden;
  }
  .nav {
    overflow-x: hidden;
  }
  .nav::-webkit-scrollbar {
    display:none
  }
</style>
