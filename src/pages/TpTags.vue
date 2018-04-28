<template>
  <div class="shy__tp-tags">
    <el-tag
      v-for="item in tagsList"
      :key="item.routerName"
      closable
      size="medium"
      color="#fff"
      class="shy__tags"
      @click.native="$router.push({ name: item.routerName })"
      @close="closeTag"
      >
      <i class="el-icon-success icon"
        :class="{'icon-active': tag === item.routerName}"
      />
      {{item.label}}
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
      'isCollapse',
      'tagsList',
      'tag'
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
    margin-right: 5px;
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
