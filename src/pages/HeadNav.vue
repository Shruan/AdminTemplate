<template>
  <header class="shy__layout-right-header">
    <div class="btn-icon" @click="changeNav">
      <i class="el-icon-menu"></i>
    </div>
    <div>
      <el-dropdown trigger="click" @command='logout'>
        <div class="el-dropdown-link">
          <img src="../assets/logo.png">
          <div class="user-box">
            <p>{{user.account || '管理员'}}</p>
            <p style="font-size:12px">{{user.name || 'Shruan'}}</p>
          </div>
          <i class="el-icon-caret-bottom el-icon--right"></i>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>注销</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapState('globalModule', [
      'user',
      'isCollapse'
    ])
  },
  created () {
    console.log(this.user)
  },
  methods: {
    ...mapMutations('globalModule', [
      '_isCollapse',
      '_user'
    ]),
    changeNav () {
      this._isCollapse(!this.isCollapse)
    },
    logout () {
      this.user = {}
      this._user(this.user)
      window.localStorage.token = ''
      window.localStorage.user_id = ''
      this.$router.replace('/login')
    }
  }
}
</script>

<style lang="css">
</style>
