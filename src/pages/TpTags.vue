<template>
  <div class="shy__tp-tags">
    <el-tag
      closable
      size="medium"
      color="#fff"
      class="shy__tags"
      @click.native="addTag"
      @close="closeTag"
      >
      <i class="el-icon-success icon icon-active" />
      标签一
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  components: {
  },
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
  },
  methods: {
    ...mapMutations('globalModule', [
      '_isCollapse',
      '_user'
    ]),
    addTag () {
      console.log(111)
    },
    closeTag (val) {
      console.log(111)
      console.log(val)
    }
  }
}
</script>

<style lang="css" scoped>
  .shy__tp-tags {
    height: 45px;
    line-height: 45px;
    padding: 0 20px;
    box-shadow: 0 2px 6px #EDEDED;
  }
  .shy__tp-tags .icon {
    margin-right: 5px;
  }
  .shy__tp-tags .shy__tags {
    cursor: pointer;
  }
  .shy__tags {
    color: #495060;
  }
  .shy__tags:hover {
    color: #999;
    cursor: pointer;
  }
  .icon-active {
    color: #409EFF;
  }
</style>
