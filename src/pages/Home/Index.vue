<template>
  <div class="home-index">
    <div class="normalSeach-box">
      <div>
        <el-input
          placeholder="请输入要搜索的内容"
          icon="search"
          v-model="key">
        </el-input>
          <el-button type="primary" @click="seach" style="margin-left: 15px">搜索</el-button>
          <el-button @click="showMore">筛选<i class="el-icon--right" :class="iconChange"></i></el-button>
      </div>
      <div class="">
        <el-button type="primary" @click="seach">批量删除</el-button>
        <el-button @click="showMore">批量修改</el-button>
      </div>
    </div>
    <div class="moreSeach-box" v-if="isShowMore">
      <el-form ref="form" :model="form" label-width="100px" class="form-box">
        <el-form-item label="专利名关键字">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="专利号">
          <el-input v-model="form.number"></el-input>
        </el-form-item>
        <el-form-item label="申请时间">
          <el-date-picker
            v-model="form.applyDate"
            type="daterange"
            placeholder="选择日期范围">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="是否可售">
          <el-radio-group v-model="form.isSell">
            <el-radio label="是"></el-radio>
            <el-radio label="否"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="供应商">
          <el-input v-model="form.supplier"></el-input>
        </el-form-item>
        <el-form-item label="录入时间">
          <el-date-picker
            v-model="form.enterDate"
            type="daterange"
            placeholder="选择日期范围">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="专利类型">
          <el-select v-model="form.patentType" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="法律状态">
          <el-radio-group v-model="form.patentStatus">
            <el-radio label="是"></el-radio>
            <el-radio label="否"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="是否下证">
          <el-radio-group v-model="form.isProve">
            <el-radio label="是"></el-radio>
            <el-radio label="否"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="有无变更记录">
          <el-radio-group v-model="form.isRecord">
            <el-radio label="有"></el-radio>
            <el-radio label="无"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="seach">搜索</el-button>
          <el-button  @click="seach">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table @cell-dblclick="clickThisCell" align="center"
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        fixed
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        fixed
        prop="date"
        label="专利号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="专利号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="专利号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="专利号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="专利号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="专利号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="专利号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="专利号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="专利号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="专利号"
        width="180">
      </el-table-column>
      <el-table-column
        label="姓名"
        prop="name"
        width="180">
        <template scope="scope">
          <el-input v-if="scope.row.nameEdit"
          :autofocus="focusStatus"
          id="input"
          v-model="scope.row.name" placeholder="请输入内容" @blur="saveEdit(scope.row)"></el-input>
          <div v-else>
            {{scope.row.name}}
          </div>
          <!-- <el-button @click="handleEdit(scope.$index, scope.row)">点击</el-button> -->
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        width="180">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {},
      isShowMore: false,
      iconChange: 'el-icon-plus',
      form: {
        name: '',
        number: '',
        applyDate: '',
        isSell: '',
        supplier: '',
        enterDate: '',
        patentType: '',
        patentStatus: '',
        isProve: '',
        isRecord: ''
      },
      editInput: '',
      focusStatus: true,
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        nameEdit: false
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        nameEdit: false
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        nameEdit: false
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        nameEdit: false
      }]
    }
  },
  created () {
    let height = window.innerHeight
    this.pageStyle = 'min-height:' + (height - 100) + 'px;'
  },
  methods: {
    showMore () {
      this.isShowMore = !this.isShowMore
      if (this.isShowMore) {
        this.iconChange = 'el-icon-minus'
      } else {
        this.iconChange = 'el-icon-plus'
      }
    },
    saveEdit (data) {
      console.log(data)
      data.nameEdit = false
      this.focusStatus = false
    },
    handleEdit (i, j) {
      // console.log(i)
      // console.log(j)
    },
    clickThisCell (data, index, $event) {
      if (index.property === 'name') {
        data.nameEdit = true
        this.focusStatus = false
        window.setTimeout(() => {
          this.$nextTick(() => {
            this.focusStatus = true
            document.getElementById('input').focus()
          })
        }, 500)
      }
      console.log(data)
      console.log(index)
      // console.log(scope.row.$index)
    },
    seach () {
      console.log('xxx')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .normalSeach-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px 20px;
  }
  .normalSeach-box .el-input {
    width: 300px;
  }
  .moreSeach-box {
    position: relative;
    width: 100%;
    padding: 0 20px;
  }
  .el-input, .el-select, .el-radio-group {
    width: 150px;
  }
  .form-box {
    display: flex;
    flex-wrap: wrap;
  }
  .el-form-item {
    width: 250px;
  }
</style>
