<template lang="html">
  <!-- 批量设置对话框-->
  <el-dialog
    title="批量编辑操作"
    :visible.sync="isShow"
    class="dialog">
    <el-form
      class="dialog"
      label-width="100px"
      label-position="left">
      <el-form-item label="专利类型">
        <el-select
          clearable
          v-model="allEdit.type"
          placeholder="请选择专利类型"
          >
          <el-option
            v-for="item in patentTypeList"
            :key="item.value"
            :value="item.value"
            :label="item.name"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="是否可售">
        <el-radio-group v-model="allEdit.isSell">
          <el-radio label="10">是</el-radio>
          <el-radio label="20">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="成本价格" >
        <el-input
          placeholder="请输入成本价格"
          v-model="allEdit.cost_price"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          @click="isShow = false"
          >取消
        </el-button>
        <el-button
          type="primary"
          @click="saveAllEdit"
          >确定
        </el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
// import { mapState } from 'vuex'
import { patentTypeList } from '@/assets/globalData'

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
      patentTypeList,
      tableLoading: false,
      isShowAddSelect: false,
      supplierList: [],
      addSupplierSelect: {
        supplierId: ''
      },
      allEdit: {
        cost_price: '',
        isSell: '',
        type: ''
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
    console.log(this.patentTypeList)
  },
  methods: {
    saveAllEdit () {

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
