<template lang="html">
  <!-- 详情对话框-->
  <el-dialog
    class="dialog"
    title="供应商详情"
    :visible.sync="isShow"
    >
    <el-table
      border
      v-loading="tableLoading"
      element-loading-text="加载中,请稍后"
      style="width: 100%;margin-bottom: 20px;"
      :data="tableList"
      @cell-click="clickThisCell"
      >
      <el-table-column
        type="expand"
        align="left"
        >
        <template slot-scope="props">
          <el-form
            inline
            :key="item.id"
            label-position="left"
            v-if="props.row.contact"
            v-for="item in props.row.contact"
            class="demo-table-expand table-box"
            >
            <el-form-item label="联系人">
              <span>{{ item.contact }}</span>
            </el-form-item>
            <el-form-item label="手机">
              <span>{{ item.phone }}</span>
            </el-form-item>
            <el-form-item label="电话">
              <span>{{ item.tel }}</span>
            </el-form-item>
            <el-form-item label="qq">
              <span>{{ item.qq }}</span>
            </el-form-item>
            <el-form-item label="微信">
              <span>{{ item.wechat }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="供应商全称"
        minWidth="150"
        align="center"
      />
      <el-table-column
        prop="brief"
        label="供应商简称"
        width="250"
        align="center"
      />
      <el-table-column
        prop="trace_man"
        label="跟踪人"
        width="180"
        align="center"
      />
      <el-table-column
        prop="add_time"
        label="添加时间"
        width="180"
        align="center"
      />
      <el-table-column
        prop="update_time"
        label="更新时间"
        width="180"
        align="center"
      />
      <el-table-column
        label="操作"
        align="center"
        width="150">
        <template slot-scope="scope">
          <el-button size='small' @click='deleteSupplier(scope.row)'>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="">
      <el-form
        label-position="left"
        label-width="100px"
        class="dialog-select"
        v-if="isShowAddSelect"
      >
        <el-form-item label="供应商名称" >
          <el-select
            v-model="addSupplierSelect.supplierId"
            placeholder="请选择供应商名称">
            <el-option
              :label="item.name"
              :value="item.id"
              v-for="item in supplierList"
              :key="item.id"
            />
          </el-select>
        </el-form-item>
        <el-button style="align-self: flex-start;margin-left: 20px" @click="addSupplier">保存</el-button>
        <el-button style="align-self: flex-start;margin-left: 20px" @click="isShow = false">取消</el-button>
      </el-form>
      <el-button @click="isShowAddSelect = true">添加</el-button>
    </div>
  </el-dialog>
</template>

<script>
// import { mapState } from 'vuex'

export default {
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      isShow: this.value,
      tableLoading: false,
      isShowAddSelect: false,
      tableList: [],
      supplierList: [],
      addSupplierSelect: {
        patentId: '',
        supplierId: ''
      }
    }
  },
  watch: {
    value (val) {
      this.isShow = val
    },
    isShow (val) {
      this.$emit('input', val)
    }
  },
  computed: {
    // ...mapState('customTable', [
    //   'modalFormList'
    // ])
  },
  created () {
    // this.getSupplierList()
  },
  methods: {
    getSupplierList () {
      let url = this.apiUrl + '/supplier/manage/' + this.page + '/' + this.pageSize
      let header = {
        'X-TOKEN': this.user.token,
        'X-USER-ID': this.user.id
      }
      this.$http.get(url, {headers: header}).then(res => {
        res = res.data
        if (res) {
          this.supplierList = res.data
        }
      }).catch(() => {
        this.$message.error('网络错误，请稍后再试')
      })
    },
    clickThisCell () {

    },
    deleteSupplier (getData) {
      this.$confirm('确定删除该供应商?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let url = this.apiUrl + '/patent/admin/supplier/delete/' + this.addSupplierSelect.patentId
        let header = {
          'X-TOKEN': this.user.token,
          'X-USER-ID': this.user.id
        }
        let data = {
          id: getData.id
        }
        this.$http.post(url, data, {headers: header}).then(res => {
          res = res.data
          if (res.status === '1000') {
            this.$message.success('删除成功')
          } else {
            this.$message.error(res.msg)
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    addSupplier () {
      let patent = {}
      patent.id = this.addSupplierSelect.patentId
      if (!this.addSupplierSelect.supplierId) {
        this.$message.error('选择供应商结果不能为空')
        return false
      }
      let url = this.apiUrl + '/patent/admin/supplier/add/' + this.addSupplierSelect.patentId
      let data = {
        id: this.addSupplierSelect.supplierId
      }
      let header = {
        'X-TOKEN': this.user.token,
        'X-USER-ID': this.user.id
      }
      this.$http.post(url, data, {headers: header}).then(res => {
        res = res.data
        if (res) {
          if (res.status === '1000') {
          } else {
            this.$message.error(res.msg)
          }
        }
      })
    },
    submit () {
      // this.$http.post(url, this.$qs(data)).then(res => {
      //   if (res.success) {
      this.$emit('on-success')
      //     this.isShow = false
      //   }
      // })
    }
  }
}
</script>
<style style="css" scoped>
  .dialog .table-box .el-form-item {
    width: 200px;
  }
  .dialog-select .dialog .el-form-item {
    width: 400px;
  }
  .dialog-select {
    display: flex;
    justify-content: center;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 165px;
    text-align: left;
  }
</style>
