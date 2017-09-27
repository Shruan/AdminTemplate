<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  },
  created () {
    this.$router.push({path: '/login'})
  },
  methods: {

  }
}
</script>

<style>
@import './assets/reset.css';

#app {
  font-family: 'Microsoft YaHei', '微软雅黑', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  position: relative;
}
body,html {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
