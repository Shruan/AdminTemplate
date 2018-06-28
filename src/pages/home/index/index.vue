<template>
  <div class="user-index">
    <div class="user-index-left">
      <el-card
        shadow="hover"
        class="data-card">
        <div class="data-card-num">
          {{activityInfo.create || 0}}
        </div>
        <div class="data-card-title">
          活动数
        </div>
      </el-card>
      <el-card
        shadow="hover"
        class="data-card">
        <div class="data-card-num">
          {{activityInfo.submit || 0}}
        </div>
        <div class="data-card-title">
          报名数
        </div>
      </el-card>
      <el-card
        shadow="hover"
        class="data-card">
        <div class="data-card-num">
          {{activityInfo.join || 0}}
        </div>
        <div class="data-card-title">
          参与数
        </div>
      </el-card>
      <el-card
        shadow="hover"
        class="data-card">
        <div class="data-card-num">
          {{activityInfo.money || 0}}
        </div>
        <div class="data-card-title">
          已收款
        </div>
      </el-card>
      <el-card
        shadow="hover"
        class="data-card">
        <div class="data-card-num">
          {{activityInfo.refund || 0}}
        </div>
        <div class="data-card-title">
          待退票
        </div>
      </el-card>
    </div>
    <div class="user-index-right">
      <el-card shadow="hover" class="shy__full-card">
        <el-tabs v-model="activeName">
         <el-tab-pane
          label="活动进度"
          name="first">
          <TableDemo
            :progress="progress"
            :loading="progressLoading"
          />
        </el-tab-pane>
       </el-tabs>
      </el-card>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TableDemo from './subPages/TableDemo'
import { getReportDtl } from '@/api'
export default {
  components: {
    TableDemo
  },
  data () {
    return {
      activityInfo: {},
      activeName: 'first',
      refund: [],
      progress: [],
      progressLoading: false,
      refundLoading: false
    }
  },
  computed: {
    ...mapState('globalModule', [
      'user',
      'isMobile'
    ])
  },
  created () {
    let height = window.innerHeight
    this.pageStyle = 'min-height:' + (height - 100) + 'px;'
    this.getReportDtl()
  },
  methods: {
    getReportDtl () {
      getReportDtl().then(res => {
        this.activityInfo = res.data
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .user-index {
    display: flex;
    box-sizing: border-box;
  }
  .user-index-left {
    width: 180px;
    margin-right: 20px;
    flex-shrink: 0;
  }
  .data-card {
    text-align: center;
    height: 100px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .data-card-num {
    font-size: 28px;
    font-weight: 700;
    color: inherit;
  }
  .data-card-title {
    margin-top: 10px;
    font-size: 14px;
    color: #80848f;
  }
  .user-index-right {
    width: 1px;
    flex: 1;
    flex-shrink: 1;
  }
  /* 媒体查询 适配手机端 */
  @media screen and (max-width: 900px) {
    .user-index {
      display: block
    }
    .user-index-left {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      width: 100%
    }
    .data-card {
      width: 45%;
      margin-bottom: 10px;
      margin-right: 10px;
      display: inline-block;
    }
    .user-index-right {
      width: 100%;
    }
  }
</style>
