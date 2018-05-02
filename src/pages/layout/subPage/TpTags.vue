<template>
  <div class="shy__tp-tags">
    <div class="tags-box">
      <div class="tags-list">
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
    </div>
    <div class="tags-btn">
      <el-dropdown trigger="click">
        <el-button
          type="primary"
          size="mini">
          关闭操作
          <i class="el-icon-caret-bottom el-icon--right"/>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>关闭所有</el-dropdown-item>
          <el-dropdown-item>关闭其他</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
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
    position: relative;
    height: 45px;
    line-height: 45px;
    padding: 0 0 0 20px;
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
  .tags-box {
    white-space: nowrap;
    position: relative;
    overflow-y: hidden;
    width: 100%;
}
  .tags-list {
    padding-right: 100px;
    display: inline-block;
  }
  .tags-btn {
    position: absolute;
    right: 0;
    top: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-align: center;
    width: 110px;
    height: 100%;
    background: #fff;
    box-shadow: -2px 2px 6px #ededed;
    z-index: 10;
  }
</style>
