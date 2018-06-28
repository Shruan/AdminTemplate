<template lang="html">
  <div class="table-box">
    <el-table
      size="mini"
      class="table-box"
      v-loading="loading"
      element-loading-text="加载中,请稍后"
      :data="tableList">
      <el-table-column
        prop="title"
        label="活动标题"
        width="160"
        :fixed="!isMobile ? 'left' : false"
      />
      <el-table-column
        prop="ticket_title"
        label="票券信息"
        width="180"
      />
      <el-table-column
        prop="price"
        align="center"
        label="单价"
        width="100"
      />
      <el-table-column
        prop="submit"
        align="center"
        label="报名数"
        width="100"
      />
      <el-table-column
        prop="pay"
        align="center"
        label="已收款"
        width="100"
      />
      <el-table-column
        prop=" "
        label=" "
      />
      <el-table-column
        label="操作"
        align="center"
        :fixed="!isMobile ? 'right' : false"
        width="100">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="$router.push({name: 'RegistList', query: {id: scope.row.activity_id, title: scope.row.activity, standard: scope.row.ticket_id}})"
            size="small">
            详情
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import { getHomeTableList } from '@/api'
export default {
  props: {
    progress: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      loading: false,
      tableList: []
    }
  },
  computed: {
    ...mapState('globalModule', [
      'user',
      'isMobile'
    ])
  },
  created () {
    this.loadList()
  },
  methods: {
    loadList () {
      this.loading = true
      // getHomeTableList({ id: this.user.id }).then(res => {
      //   if (res) {
      //     this.tableList = res.data
      //   }
      //   this.loading = false
      // })
      for (var i = 0; i < 8; i++) {
        this.tableList.push({title: 'test' + i})
      }
      setTimeout(() => { this.loading = false }, 1000)
    }
  }
}
</script>

<style lang="css" scoped>
  .table-box {
    width: 100%;
  }
</style>
