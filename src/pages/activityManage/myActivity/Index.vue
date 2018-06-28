<template>
  <div class="home-index">
    <el-card shadow="hover" class="shy__full-card">
      <div slot="header" class="clearfix">
        <span>个人中心</span>
        <el-button style="float: right; padding: 3px 0" type="text">提示信息</el-button>
      </div>
      <div class="search-top">
        <div class="search-top-left">
          <el-input
            size="small"
            class="search-top-keyword"
            placeholder="请输入要搜索的专利名关键字"
            v-model="searchForm.name"
            @keyup.enter.native="search"
            >
            <i slot="suffix"
              class="el-input__icon el-icon-search"
              @click="page = 1, loadList()"
            />
          </el-input>
          <el-button
            v-if="!isMobile"
            size="small"
            class="search-top-detail"
            style="margin-left: 15px;"
            @click="isShowSearchForm = !isShowSearchForm"
            >
            筛选<i class="el-icon--right" :class="isShowSearchForm ? 'el-icon-minus' : 'el-icon-plus'"/>
          </el-button>
        </div>
        <div class="search-top-right" v-if="!isMobile">
          <!-- 筛选列 -->
          <el-popover
            ref="columnCheck"
            placement="bottom"
            width="200"
            trigger="click">
            <div>
              <el-checkbox
                :indeterminate="columnChecked.length !== 0 && Object.keys(columnCheckList).length !== columnChecked.length"
                v-model="isColumnCheckAll"
                @change="handleCheckAllChange">
                全选
              </el-checkbox>
              <div style="margin: 15px 0;"></div>
              <el-checkbox-group v-model="columnChecked">
                <el-checkbox
                  class="checkbox-style"
                  style="margin-left: 0"
                  v-for="item in columnCheckList"
                  :label="item.key"
                  :key="item.key">
                  {{item.label}}
                </el-checkbox>
              </el-checkbox-group>
            </div>
          </el-popover>
          <el-button v-popover:columnCheck
            size="small">
            筛选列<i class="el-icon-caret-bottom el-icon--right"></i>
          </el-button>

          <!-- 批量操作 -->
          <el-button
            size="small"
            type="primary"
            style="margin-right: 6px;"
            @click="batchOperation">
            批量编辑
          </el-button>

          <!-- 更多操作 -->
          <el-dropdown
            trigger="click"
            @command="dropdownOpertion"
            >
            <el-button
              size="small">
              更多<i class="el-icon-caret-bottom el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="export">导出检索结果</el-dropdown-item>
              <el-dropdown-item command="guozi">国知局采集</el-dropdown-item>
              <el-dropdown-item command="soopat">SOOPAT采集</el-dropdown-item>
              <el-dropdown-item command="dialog">弹窗</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>

      <!-- 搜索条件 -->
      <div
        class="search-detail"
        :class="{'search-detail-close': !isShowSearchForm}"
        :style="isShowSearchForm ? `height:${searchFormHeight}px` : ''"
      >
        <el-form
          ref="form"
          :model="searchForm"
          label-width="80px"
          class="searchform-box"
          >
          <el-form-item label="专利名">
            <el-input
              class="search-select"
              size="small"
              v-model="searchForm.name"
              placeholder="请输入专利名关键字"
            />
          </el-form-item>

          <el-form-item label="专利号">
            <el-input
              class="search-select"
              size="small"
              v-model="searchForm.code"
              placeholder="请输入专利号"
            />
          </el-form-item>

          <el-form-item label="录入时间">
            <el-date-picker
              size="small"
              type="daterange"
              format="yyyy-MM-dd"
              class="search-select"
              v-model="searchForm.add_time"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              placeholder="选择日期范围"
            />
          </el-form-item>

          <el-form-item label="是否可售">
            <el-radio-group v-model="searchForm.isSell">
              <el-radio label="10">是</el-radio>
              <el-radio label="20">否</el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item label="供应商">
            <el-select
              class="search-select"
              size="small"
              v-model="searchForm.supplier_id"
              clearable
              placeholder="请选择供应商"
            >
              <el-option
                :label="item.name"
                :value="item.id"
                :key="item.id"
                v-for="item in supplierList"
              />
            </el-select>
          </el-form-item>

          <el-form-item label="更新时间">
            <el-date-picker
              size="small"
              type="daterange"
              format="yyyy-MM-dd"
              class="search-select"
              placeholder="选择日期范围"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              v-model="searchForm.update_time"
            />
          </el-form-item>

          <el-form-item label="专利类型">
            <el-select
              clearable
              size="small"
              class="search-select"
              v-model="searchForm.patentType"
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

          <el-form-item label="变更记录">
            <el-radio-group
              size="small"
              v-model="searchForm.isRecord">
              <el-radio label="10">有</el-radio>
              <el-radio label="20">没有</el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item label="法律状态">
            <el-select
              class="search-select"
              size="small"
              v-model="searchForm.patentStatus"
              clearable
              placeholder="请选择法律状态"
            >
              <el-option
                v-for="item in patentStatusList"
                :key="item.value"
                :value="item.value"
                :label="item.name"
              />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button
              size="small"
              type="primary"
              @click="search">
              搜索
            </el-button>
            <el-button
              size="small"
              @click="resetSearchForm">
              重置
            </el-button>
          </el-form-item>
        </el-form>
      </div>

      <!-- 列表 -->
      <el-table
        size="mini"
        class="table-box"
        style="width: 100%"
        v-loading="loading"
        element-loading-text="加载中,请稍后"
        :data="patentList"
        @select="hasSelectData = $event"
        @select-all="hasSelectData = $event"
      >
        <el-table-column
          v-if="!isMobile"
          type="selection"
          align="center"
          width="55"
        />
        <el-table-column
          prop="code"
          label="专利号"
          :width="isMobile ? '' : '80px'"
          fixed="left"
          align="center"
        />
        <el-table-column
          v-if="columnChecked.indexOf('title') !== -1"
          prop="title"
          label="专利名称"
          align="center"
          minWidth="300">
        </el-table-column>
        <el-table-column
          v-if="columnChecked.indexOf('type') !== -1"
          prop="type"
          label="专利类型"
          align="center"
          width="95"
        />
        <el-table-column
          v-if="columnChecked.indexOf('get_certify') !== -1"
          prop="get_certify"
          label="是否下证"
          align="center"
          width="95">
          <template slot-scope="scope">
            {{scope.row.get_certify === 10 ? '是' : '否'}}
          </template>
        </el-table-column>
        <el-table-column
          v-if="columnChecked.indexOf('status') !== -1"
          prop="status"
          label="法律状态"
          align="center"
          width="150"
        />
        <el-table-column
          v-if="columnChecked.indexOf('changed') !== -1"
          prop="changed"
          label="变更记录"
          align="center"
          width="80"
        />
        <el-table-column
          v-if="columnChecked.indexOf('supplier_id') !== -1"
          prop="supplier_id"
          label="供应商"
          align="center"
          width="70">
          <template slot-scope="scope">
            <el-button size="small" type="text" @click="useSupplierMsg(scope.row)">明细</el-button>
          </template>
        </el-table-column>
        <el-table-column
          v-if="columnChecked.indexOf('add_time') !== -1"
          prop="add_time"
          label="录入时间"
          align="center"
          width="180"
        />
        <el-table-column
          v-if="columnChecked.indexOf('update_time') !== -1"
          prop="update_time"
          label="国知局采集时间"
          align="center"
          width="180"
        />
        <el-table-column
          v-show="columnChecked.length === 0"
          prop=" "
          label=" "
        />
        <el-table-column
          label="操作"
          align="center"
          width="180">
          <template slot-scope="scope">
            <el-button
              plain
              size="mini"
              type="primary"
              @click="useSupplierMsg(scope.row)">
              查看
            </el-button>
            <el-button
              plain
              size="mini"
              type="danger"
              @click="useSupplierMsg(scope.row)">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <div class="block">
        <el-pagination
          @current-change="changePage"
          @size-change="pageSizeChange"
          :page-size="Number(pageSize)"
          layout="sizes, total, prev, pager, next"
          :page-sizes="[10, 20, 30, 50, 100, 200, 300, 500, 1000]"
          :total="Number(dataTotal)"
        />
      </div>
    </el-card>

    <!-- 详情 -->
    <ActivityDetailDialog
      v-model="isShowActivityDetailDialog"
      @on-success="loadList()"
    />

    <!-- 批量设置 -->
    <ActivityDetailDialog
      v-model="isShowBatchSetDialog"
      @on-success="loadList()"
    />

  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getActivityList } from '@/api'
import { patentTypeList, patentStatusList } from '@/assets/globalData'
import ActivityDetailDialog from './subPage/ActivityDetailDialog'
import BatchSetDialog from './subPage/BatchSetDialog'

export default {
  components: {
    ActivityDetailDialog,
    BatchSetDialog
  },
  data () {
    return {
      page: 1,
      pageSize: 20,
      loading: true,
      dataTotal: 0,
      patentTypeList,
      patentStatusList,
      isShowActivityDetailDialog: false, // 详情弹窗
      isShowAddSelect: false,
      isShowBatchSetDialog: false,
      isColumnCheckAll: false,
      hasSelectData: [],
      selectIds: [],
      patentList: [],
      isShowSearchForm: false,
      isSeach: false,
      useSupplierList: [],
      supplierList: '',
      addSupplierSelect: {
        supplierId: '',
        patentId: ''
      },
      isShowSupplier: false,
      key: '',
      columnChecked: [],
      columnCheckList: [
        { label: '类型', key: 'type' },
        { label: '编号', key: 'code' },
        { label: '标题', key: 'title' },
        { label: '状态', key: 'status' },
        { label: '是否下证', key: 'get_certify' },
        { label: '是否可售', key: 'is_sell' },
        { label: '成本价', key: 'cost_price' },
        { label: '变更记录', key: 'changed' },
        { label: '供应商', key: 'supplier_id' },
        { label: '录入数据', key: 'add_time' },
        { label: '采集时间', key: 'update_time' }
      ],
      searchForm: {
        name: '',
        code: '',
        add_time: '',
        isSell: '',
        supplier_id: '',
        update_time: '',
        patentType: '',
        patentStatus: '',
        isRecord: ''
      }
    }
  },
  computed: {
    ...mapState('globalModule', [
      'user',
      'isMobile'
    ]),
    // 动态计算筛选列高度
    searchFormHeight () {
      let line = parseInt(Object.keys(this.searchForm).length / 3) + 1
      return line * 45
    },
    columnList () {
      let column = [
        {
          prop: 'keyword',
          label: '关键字',
          width: 140
        }
      ]
      return column
    }
  },
  watch: {
    columnChecked (val) {
      if (Object.keys(this.columnCheckList).length === this.columnChecked.length) {
        this.isColumnCheckAll = true
      } else {
        this.isColumnCheckAll = false
      }
    }
  },
  created () {
    let tableData = []
    for (var i = 0; i < 10; i++) {
      let obj = {
        keyword: '测试' + i
      }
      tableData.push(obj)
    }
    this.columnChecked = this.columnCheckList.map(item => {
      return item.key
    })
    this.patentList = tableData
    let height = window.innerHeight
    this.pageStyle = 'min-height:' + (height - 100) + 'px;'
  },
  methods: {
    loadList () {
      this.loading = true
      let data = {
        page: this.page,
        pageSize: this.pageSize
      }
      getActivityList(data).then(res => {
        if (res.code === 1000) {
          let patentList = res.data
          patentList.forEach((value, key, arr) => {
            arr[key].is_sellEdit = false
            arr[key].cost_priceEdit = false
            arr[key].changedName = arr[key].changed === 10 ? '有' : '没有'
          })
          this.patentList = patentList
          this.dataTotal = res.total
        }
        this.loading = false
      })
    },
    // 分页
    pageSizeChange (val) {
      this.pageSize = val
      this.loadList()
    },
    changePage (page) {
      this.page = page
      this.loadList()
    },
    // 重置表单
    resetSearchForm () {
      for (let key in this.searchForm) {
        if (this.searchForm.hasOwnProperty(key)) {
          this.searchForm[key] = ''
        }
      }
    },
    // 下拉菜单操作
    dropdownOpertion (command) {
      if (command === 'dialog') {
        this.isShowActivityDetailDialog = true
      }
    },
    // 筛选列
    handleCheckAllChange (val) {
      if (val) {
        this.columnChecked = this.columnCheckList.map(item => {
          return item.key
        })
      } else {
        this.columnChecked = []
      }
    },
    // 批量操作
    batchOperation () {
      if (this.hasSelectData.length < 1) {
        this.$message.error('请至少选中一个专利再执行操作')
        return false
      }
      this.selectIds = this.hasSelectData.map(item => item.id)
      this.isShowBatchSetDialog = true
    },
    useSupplierMsg (getData) {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .search-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0 20px;
    box-sizing: border-box;
  }
  .search-top .search-top-keyword {
    display: inline-block;
    width: 300px;
  }
  .search-detail {
    box-sizing: border-box;
    position: relative;
    width: 100%;
    transition: .5s;
  }
  .search-detail-close {
    overflow: hidden;
    height: 0;
    opacity: 0;
  }
  .search-select {
    width: 100%
  }
  .searchform-box {
    display: flex;
    flex-wrap: wrap;
    /* margin-top: 10px; */
  }
  .searchform-box .el-form-item {
    width: 310px;
    margin-bottom: 4px;
  }
  .checkbox-style {
    display: inline-block;
    width: 50%;
  }
</style>
