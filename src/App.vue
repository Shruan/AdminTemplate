<template>
  <div id="app" v-cloak>
    <!-- <img src="./assets/logo.png"> -->
    <!-- <TpLoadingBar :percent="100" status="success"/> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import TpLoadingBar from '@/components/TpLoadingBar'
export default {
  components: {
    // TpLoadingBar
  },
  name: 'app',
  data () {
    return {
    }
  },
  created () {
    // this.$router.push({path: '/login'})
  },
  methods: {

  }
}
</script>

<style>
  @import './assets/reset.css';
  [v-cloak]{
    display: 'none';
  }
  #app {
    font-family: 'Microsoft YaHei', '微软雅黑', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    position: relative;
  }
  body,html {
    width: 100%;
    height: 100%;
  }

  /* 全局样式 */
  .shy__full-card {
    min-height: 100%;
  }

  /* 旋转动画 */
  .shy__rotating{
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation
  {
    from { transform: rotate(0deg); }
    50%  { transform: rotate(180deg); }
    to   { transform: rotate(360deg); }
  }
</style>
