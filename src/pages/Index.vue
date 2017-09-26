<template>
  <div class="page-index">
    <nav class="index-left-nav" :style="isCollapse ? 'max-width: 64px' : ''">
      <div class="index-left-logo" :style="isCollapse ? 'max-width: 64px' : ''">
        <h2 v-if="!isCollapse" style="font-size:30px;font-weight:blod;color:#fff;padding-top:40px" class="index-left-logo-icon">LOGO</h2>
        <h2 v-else style="font-size:30px;font-weight:blod;color:#fff;padding-top:40px" class="index-left-logo-icon">L</h2>
      </div>
      <tp-nav :isCollapse="isCollapse" :pageStyle="pageStyle"></tp-nav>
    </nav>
    <div class="index-right">
      <header class="index-right-header">
        <div class="btn-icon" @click="changeNav">
          <i class="el-icon-menu"></i>
        </div>
        <div class="">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              qiushiyuan{{user}}<i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </header>
      <div class="index-right-content">
        <router-view></router-view>
          <el-table @cell-click="clickThisCell" align="center"
            :data="tableData"
            stripe
            style="width: 100%">
            <el-table-column
              prop="date"
              label="日期"
              width="180">
            </el-table-column>
            <el-table-column
              label="姓名"
              prop="name"
              width="180">
              <template scope="scope">
                <el-input v-if="scope.row.nameEdit"
                v-myfocus="focusStatus"
                v-model="scope.row.name" placeholder="请输入内容" @blur="saveEdit(scope.row)"></el-input>
                <div v-else>
                  {{scope.row.name}}
                </div>
                <!-- <el-button @click="handleEdit(scope.$index, scope.row)">点击</el-button> -->
              </template>
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
          </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import TpNav from '@/components/TpNav'
export default {
  components: {
    TpNav
  },
  name: 'nav',
  data () {
    return {
      user: {},
      editInput: '',
      pageStyle: '',
      focusStatus: false,
      isCollapse: true,
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
        nameEdit: true
      }]
    }
  },
  created () {
    let height = window.innerHeight
    this.pageStyle = 'min-height:' + (height - 100) + 'px;'
  },
  methods: {
    saveEdit (data) {
      console.log(data)
      data.nameEdit = false
      this.focusStatus = false
    },
    handleEdit (i, j) {
      // console.log(i)
      // console.log(j)
    },
    changeNav () {
      this.isCollapse = !this.isCollapse
    },
    clickThisCell (data, index, $event) {
      // console.log(event.srcElement.innerText)
      // this.editInput = event.srcElement.innerText
      if (index.property === 'name') {
        data.nameEdit = true
        this.focusStatus = true
      }
      console.log(data)
      console.log(index)
      // console.log(scope.row.$index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index-right-content {
    padding: 20px;
  }
  .index-left-nav {
    max-width: 200px;
    height: 100%;
    background: #334257;
    -webkit-transition: all cubic-bezier(0.39, 0.58, 0.57, 1) 520ms;
  }
  .index-left-logo {
    width: 200px;
    height: 100px;
  }
  .index-left-logo-icon {
  }
  .index-right-header {
    height: 50px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
    text-align: left;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
  }
  .index-right {
    flex: 1 1 auto;
  }
  .page-index {
    display: flex;
    background: #f9f9f9;
  }
  .btn-icon {
    cursor: pointer;
    width: 20px;
    height: 20px;
    display: inline-block;
  }
</style>
