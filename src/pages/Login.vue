<template>
  <div class="Login">
    <el-button type="primary" @click="Login">主要按钮</el-button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {

    }
  },
  created () {

  },
  methods: {
    Login () {
      this.$router.push({path: '/index'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
