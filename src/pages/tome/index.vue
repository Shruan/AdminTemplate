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
            class="seach-top-keyword"
            size="small"
            placeholder="请输入要搜索的专利名关键字"
            v-model="searchForm.name">
            <i slot="suffix"
              class="el-input__icon el-icon-search"
              @click="seach"
            />
          </el-input>
          <el-button
            size="small"
            class="seach-top-detail"
            style="margin-left: 15px;"
            @click="showMore"
            >
            筛选<i class="el-icon--right" :class="iconChange"/>
          </el-button>
        </div>
        <div class="seach-top-right">
          <!-- <el-button
            size="small"
            type="primary"
          >
            <a :href="apiUrl + '/patent/adminlist/excel?title=' + searchForm.name
             + '&code=' + searchForm.code
              + '&supplier_id=' + searchForm.supplier_id
               + '&type=' + searchForm.patentType
                + '&changed=' + searchForm.isRecord
                 + '&status=' + searchForm.patentStatus
                  + '&add_time_s=' + (searchForm.add_time[0] ? searchForm.add_time[0] : '')
                   + '&add_time_e=' + (searchForm.add_time[1] ? searchForm.add_time[1] : '')
                    + '&update_time_s=' + (searchForm.update_time[0] ? searchForm.update_time[0] : '')
                     + '&update_time_e=' + (searchForm.update_time[1] ? searchForm.update_time[1] : '')
                      + '&is_sell=' + searchForm.isSell"
                      target="_blank"><font color="#fff">导出检索结果</font></a>
          </el-button> -->
          <el-button
            size="small"
            type="primary"
            style="margin-right: 6px;"
            @click="showSelectEdit">
            批量编辑
          </el-button>

          <el-dropdown trigger="click">
            <el-button
              size="small">
              更多<i class="el-icon-caret-bottom el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>导出检索结果</el-dropdown-item>
              <el-dropdown-item>国知局采集</el-dropdown-item>
              <el-dropdown-item>SOOPAT采集</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <!-- <el-button size="small" @click="collectionType('gzj')">国知局采集</el-button>
          <el-button size="small" @click="collectionType('soopat')">SOOPAT采集</el-button> -->
        </div>
      </div>
      <div
        class="search-detail"
        :class="{'search-detail-close': !isShowMore}"
        :style="isShowMore ? `height:${seachFormHeight}px` : ''"
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
              <el-option label="发明专利" value="1" />
              <el-option label="实用新型" value="2" />
              <el-option label="外观专利" value="3" />
              <el-option label="PCT发明" value="4" />
              <el-option label="PCT实用" value="5" />
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
              <el-option label="授权未下证" value="授权未下证" />
              <el-option label="专利权维持" value="专利权维持" />
              <el-option label="等年费滞纳金" value="等年费滞纳金" />
              <el-option label="视为放弃，等恢复" value="视为放弃，等恢复" />
              <el-option label="审核中" value="审核中" />
              <el-option label="无效" value="无效" />
              <el-option label="其他" value="其他" />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button
              size="small"
              type="primary"
              @click="seach">
              搜索
            </el-button>
            <el-button
              size="small"
              @click="reset">
              重置
            </el-button>
          </el-form-item>
        </el-form>
      </div>
      <el-table
        border
        size="mini"
        class="table-box"
        style="width: 100%"
        v-loading="loading"
        element-loading-text="加载中,请稍后"
        :data="patentList"
        @select="selectData"
        @select-all="selectData"
        @cell-click="clickThisCell"
        >
        <el-table-column
          type="selection"
          align="center"
          width="55"
        />
        <el-table-column
          prop="code"
          label="专利号"
          width="150"
          align="center"
        />
        <el-table-column
          prop="title"
          label="专利名称"
          align="center"
          minWidth="300">
          <template slot-scope="scope">
            <a :href="apiUrl + '/detail/' + scope.row.code" target="-_blank">{{scope.row.title}}</a>
          </template>
        </el-table-column>
        <el-table-column
          prop="type"
          label="专利类型"
          align="center"
          width="95"
        />
        <el-table-column
          prop="get_certify"
          label="是否下证"
          align="center"
          width="95">
          <template slot-scope="scope">
            {{scope.row.get_certify === 10 ? '是' : '否'}}
          </template>
        </el-table-column>
        <el-table-column
          label="是否可售"
          prop="is_sell"
          align="center"
          width="100">
          <template slot-scope="scope">
            <div v-if="!scope.row.is_sellEdit" style="cursor: pointer">
              {{scope.row.is_sell}}
            </div>
            <el-select v-model="scope.row.is_sell"
              @change="saveEdit(scope.row, 'is_sellEdit')"
              v-else>
              <el-option label="是" value="10"></el-option>
              <el-option label="否" value="20"></el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column
          prop="cost_price"
          label="成本价"
          align="center"
          width="105">
          <template slot-scope="scope">
            <div v-if="!scope.row.cost_priceEdit" style="cursor: pointer">
              {{scope.row.cost_price}}
            </div>
            <el-input v-else
              id="input"
              v-model="scope.row.cost_price"
              placeholder="请输入内容"
              @blur="saveEdit(scope.row)">
            </el-input>
          </template>
        </el-table-column>
        <el-table-column
          prop="status"
          label="法律状态"
          align="center"
          width="150"
        />
        <el-table-column
          prop="changed"
          label="变更记录"
          align="center"
          width="80"
        />
        <el-table-column
          prop="supplier_id"
          label="供应商"
          align="center"
          width="70">
          <template slot-scope="scope">
            <el-button size="small" type="text" @click="useSupplierMsg(scope.row)">明细</el-button>
          </template>
        </el-table-column>
        <el-table-column
          prop="add_time"
          label="录入时间"
          align="center"
          width="180"
        />
        <el-table-column
          prop="update_time"
          label="国知局采集时间"
          align="center"
          width="180"
        />
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
    <el-dialog
      title="批量编辑操作"
      :visible.sync="isShowSelectEdit"
      class="dialog">
      <el-form label-position="left" label-width="100px" class="dialog">
        <el-form-item label="专利类型">
          <el-select v-model="allEdit.type" clearable placeholder="请选择专利类型">
            <el-option label="发明专利" value="1"></el-option>
            <el-option label="实用新型" value="2"></el-option>
            <el-option label="外观专利" value="3"></el-option>
            <el-option label="PCT发明" value="4"></el-option>
            <el-option label="PCT实用" value="5"></el-option>
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
            v-model="allEdit.cost_price">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="cancelEdit">取消</el-button>
          <el-button type="primary" @click="saveAllEdit">确定</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {
  },
  data () {
    return {
      isShowActivityDetailDialog: false, // 详情弹窗
      isShowAddSelect: false,
      isShowSelectEdit: false,
      hasSelectData: [],
      selectDataId: [],
      patentList: [],
      isShowMore: false,
      isSeach: false,
      useSupplierList: [],
      supplierList: '',
      addSupplierSelect: {
        supplierId: '',
        patentId: ''
      },
      loading: true,
      isShowSupplier: false,
      iconChange: 'el-icon-plus',
      page: 1,
      pageSize: 20,
      dataTotal: '',
      key: '',
      allEdit: {
        cost_price: '',
        isSell: '',
        type: ''
      },
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
    ...mapState([
      'user'
    ]),
    // 动态计算筛选列高度
    seachFormHeight () {
      let line = parseInt(Object.keys(this.searchForm).length / 3) + 1
      return line * 45
    }
  },
  created () {
    let height = window.innerHeight
    this.pageStyle = 'min-height:' + (height - 100) + 'px;'
    // if (!this.user.id) {
    //   this.$message.error('请登录后再试')
    //   this.$router.push({path: '/login'})
    // }
    // if (window.localStorage.ehpat_index_pageSize) {
    //   this.pageSize = window.localStorage.ehpat_index_pageSize
    // }
    // this.getPatentList()
    // this.getSupplierList()
  },
  methods: {
    collectionType (val) {
      if (this.patentList.length === 0) {
        this.$message.error('暂无检索到数据，请检索到数据后再执行采集操作')
        return false
      }
      let url = ''
      if (val === 'gzj') {
        url = this.apiUrl + '/patent/admin/collect/gzj?title=' + this.searchForm.name +
        '&code=' + this.searchForm.code +
        '&supplier_id=' + this.searchForm.supplier_id +
        '&type=' + this.searchForm.patentType +
        '&changed=' + this.searchForm.isRecord +
        '&status=' + this.searchForm.patentStatus +
        '&add_time_s=' + (this.searchForm.add_time[0] ? this.searchForm.add_time[0] : '') +
        '&add_time_e=' + (this.searchForm.add_time[1] ? this.searchForm.add_time[1] : '') +
        '&update_time_s=' + (this.searchForm.update_time[0] ? this.searchForm.update_time[0] : '') +
        '&update_time_e=' + (this.searchForm.update_time[1] ? this.searchForm.update_time[1] : '') +
        '&is_sell=' + this.searchForm.isSell
      } else if (val === 'soopat') {
        url = this.apiUrl + '/patent/admin/collect/soopat?title=' + this.searchForm.name +
        '&code=' + this.searchForm.code +
        '&supplier_id=' + this.searchForm.supplier_id +
        '&type=' + this.searchForm.patentType +
        '&changed=' + this.searchForm.isRecord +
        '&status=' + this.searchForm.patentStatus +
        '&add_time_s=' + (this.searchForm.add_time[0] ? this.searchForm.add_time[0] : '') +
        '&add_time_e=' + (this.searchForm.add_time[1] ? this.searchForm.add_time[1] : '') +
        '&update_time_s=' + (this.searchForm.update_time[0] ? this.searchForm.update_time[0] : '') +
        '&update_time_e=' + (this.searchForm.update_time[1] ? this.searchForm.update_time[1] : '') +
        '&is_sell=' + this.searchForm.isSell
      }
      let header = {
        'X-TOKEN': this.user.token,
        'X-USER-ID': this.user.id
      }
      if (val === 'gzj') {
        this.$confirm('即将对 ' + this.dataTotal + ' 条专利到国知局数据采集，确认OR取消?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$http.get(url, {headers: header}).then(res => {
            res = res.data
            if (res) {
              if (res.status) {
                this.$message.success(res.msg)
                this.$router.push({path: '/home/importpatent', query: {order: 'gzj'}})
              }
            }
          }).catch(res => {
            this.$message.error(res.msg)
          })
        }).catch(() => {
          this.$message.info('已取消采集')
        })
      } else if (val === 'soopat') {
        this.$confirm('即将对 ' + this.dataTotal + ' 条专利到SOOPAT数据采集，确认OR取消?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$http.get(url, {headers: header}).then(res => {
            res = res.data
            if (res) {
              if (res.status) {
                this.$message.success(res.msg)
                this.$router.push({path: '/home/importpatent', query: {order: 'soopat'}})
              }
            }
          }).catch(res => {
            this.$message.error(res.msg)
          })
        }).catch(() => {
          this.$message.info('已取消采集')
        })
      }
    },
    reset () {
      this.searchForm.name = this.searchForm.code = this.searchForm.add_time = this.searchForm.isSell = this.searchForm.supplier_id = this.searchForm.patentType = this.searchForm.update_time = this.searchForm.patentStatus = this.searchForm.isRecord = ''
    },
    deleteSupplier (getData) {
      let patent = {}
      patent.id = this.addSupplierSelect.patentId
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
            this.useSupplierMsg(patent)
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
    cancelEdit () {
      this.allEdit.isSell = this.allEdit.cost_price = this.allEdit.type = ''
      this.isShowSelectEdit = false
    },
    saveAllEdit () {
      if (!this.allEdit.isSell && !this.allEdit.cost_price && !this.allEdit.type) {
        this.$message.error('至少执行一个批量操作')
        return false
      }
      let url = this.apiUrl + '/patent/admin/edit/list'
      let data = {
        ids: this.selectDataId.join(',')
      }
      if (this.allEdit.isSell) {
        data.is_sell = this.allEdit.isSell
      }
      if (this.allEdit.cost_price) {
        data.cost_price = this.allEdit.cost_price
      }
      if (this.allEdit.type) {
        data.type = this.allEdit.type
      }
      console.log(data)
      let header = {
        'X-TOKEN': this.user.token,
        'X-USER-ID': this.user.id
      }
      this.$http.post(url, data, {headers: header}).then(res => {
        res = res.data
        if (res) {
          if (res.status === '1000') {
            this.$message.success('修改成功')
            this.getPatentList()
            this.allEdit.isSell = this.allEdit.cost_price = this.allEdit.type = ''
            this.isShowSelectEdit = false
          } else {
            this.$message.error(res.msg)
          }
        }
      })
    },
    showSelectEdit () {
      if (this.hasSelectData.length < 1) {
        this.$message.error('请至少选中一个专利再执行操作')
        return false
      }
      this.allEdit.isSell = this.allEdit.cost_price = this.allEdit.type = ''
      this.selectDataId = []
      this.hasSelectData.forEach((value, key, arr) => {
        this.selectDataId.push(arr[key].id)
      })
      this.isShowSelectEdit = true
      console.log(this.selectDataId)
    },
    selectData (selection, row) {
      this.hasSelectData = selection
      console.log(this.hasSelectData)
    },
    showAddSelect (value) {
      if (value === 'show') {
        this.isShowAddSelect = true
      } else if (value === 'cancel') {
        this.isShowAddSelect = false
        this.addSupplierSelect.supplierId = ''
      }
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
      console.log(data)
      let header = {
        'X-TOKEN': this.user.token,
        'X-USER-ID': this.user.id
      }
      this.$http.post(url, data, {headers: header}).then(res => {
        res = res.data
        if (res) {
          if (res.status === '1000') {
            this.$message.success('添加成功')
            this.addSupplierSelect.patentId = ''
            this.addSupplierSelect.supplierId = ''
            this.isShowAddSelect = false
            this.useSupplierMsg(patent)
          } else {
            this.$message.error(res.msg)
          }
        }
      })
    },
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
          console.log(this.supplierList)
        }
      }).catch(() => {
        this.$message.error('网络错误，请稍后再试')
      })
    },
    useSupplierMsg (getData) {
      console.log(getData)
      this.isShowAddSelect = false
      this.addSupplierSelect.supplierId = ''
      this.addSupplierSelect.patentId = getData.id
      let url = this.apiUrl + '/patent/admin/supplier/' + getData.id
      let header = {
        'X-TOKEN': this.user.token,
        'X-USER-ID': this.user.id
      }
      this.$http.get(url, {headers: header}).then(res => {
        res = res.data
        if (res) {
          console.log(res)
          this.isShowSupplier = true
          this.useSupplierList = res
        }
      }).catch(() => {
        this.$message.error('网络错误，请稍后再试')
      })
    },
    getPatentList () {
      let url = this.apiUrl + '/patent/adminlist/' + this.page + '/' + this.pageSize
      let header = {
        'X-TOKEN': this.user.token,
        'X-USER-ID': this.user.id
      }
      this.$http.get(url, {headers: header}).then(res => {
        res = res.data
        if (res) {
          let patentList = res.data
          patentList.forEach((value, key, arr) => {
            arr[key].is_sellEdit = false
            arr[key].cost_priceEdit = false
            arr[key].changedName = arr[key].changed === 10 ? '有' : '没有'
          })
          this.patentList = patentList
          this.dataTotal = res.total
          console.log(this.patentList)
        }
        this.loading = false
      }).catch(() => {
        this.$message.error('网络错误，请稍后再试')
      })
    },
    saveEdit (getData, value) {
      console.log(getData)
      if (!getData.is_sell) {
        this.$message.error('专利销售状态不能为空')
        return false
      } else if (getData.cost_price === '') {
        this.$message.error('专利价格不能为空')
        return false
      }
      let url = this.apiUrl + '/patent/admin/edit/' + getData.id
      let data = {
        is_sell: getData.is_sell,
        cost_price: getData.cost_price
      }
      let header = {
        'X-TOKEN': this.user.token,
        'X-USER-ID': this.user.id
      }
      this.$http.post(url, data, {headers: header}).then(res => {
        res = res.data
        if (res) {
          if (res.status === '1000') {
            this.$message.success('修改成功')
            if (value === 'is_sellEdit') {
              getData.is_sellEdit = false
            } else if (value === 'cost_priceEdit') {
              getData.cost_priceEdit = false
            }
            if (this.isSeach) {
              this.seach()
            } else {
              this.getPatentList()
            }
          } else {
            this.$message.error(res.msg)
          }
        }
      }).catch(() => {
        this.$message.error('网络错误，请稍后再试')
      })
    },
    clickThisCell (data, index, $event) {
      if (index.property === 'is_sell') {
        this.patentList.forEach((value, key, arr) => {
          // console.log(arr[key])
          arr[key].fullNameEdit = false
          arr[key].abbreviationEdit = false
          arr[key].followUserEdit = false
          arr[key].is_sellEdit = false
          arr[key].cost_priceEdit = false
        })
        data.is_sellEdit = true
      } else if (index.property === 'cost_price') {
        this.patentList.forEach((value, key, arr) => {
          arr[key].fullNameEdit = false
          arr[key].abbreviationEdit = false
          arr[key].followUserEdit = false
          arr[key].is_sellEdit = false
          arr[key].cost_priceEdit = false
        })
        data.cost_priceEdit = true
      }
    },
    showMore () {
      this.isShowMore = !this.isShowMore
      if (this.isShowMore) {
        this.iconChange = 'el-icon-minus'
      } else {
        this.iconChange = 'el-icon-plus'
      }
    },
    pageSizeChange (val) {
      this.pageSize = val
      window.localStorage.ehpat_index_pageSize = val
      this.getPatentList()
    },
    changePage (page) {
      this.page = page
      if (this.isSeach) {
        this.seach()
      } else {
        this.getPatentList()
      }
    },
    seach () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 500)
      // if (!this.searchForm.name && !this.searchForm.code && !this.searchForm.update_time && !this.searchForm.isSell && !this.searchForm.supplier_id && !this.searchForm.add_time && !this.searchForm.patentType && !this.searchForm.patentStatus && !this.searchForm.isRecord) {
      //   this.isSeach = false
      //   this.getPatentList()
      // } else {
      //   this.isSeach = true
      //   let url = this.apiUrl + '/patent/adminlist/' + this.page + '/' + this.pageSize
      //   let header = {
      //     'X-TOKEN': this.user.token,
      //     'X-USER-ID': this.user.id
      //   }
      //   let data = {
      //     title: this.searchForm.name,
      //     code: this.searchForm.code,
      //     is_sell: this.searchForm.isSell,
      //     supplier_id: this.searchForm.supplier_id,
      //     add_time_s: this.searchForm.add_time[0],
      //     add_time_e: this.searchForm.add_time[1],
      //     update_time_s: this.searchForm.update_time[0],
      //     update_time_e: this.searchForm.update_time[1],
      //     type: this.searchForm.patentType,
      //     status: this.searchForm.patentStatus,
      //     changed: this.searchForm.isRecord
      //   }
      //   this.$http.get(url, {params: data, headers: header}).then(res => {
      //     res = res.data
      //     if (res) {
      //       let patentList = res.data
      //       patentList.forEach((value, key, arr) => {
      //         arr[key].is_sellEdit = false
      //         arr[key].cost_priceEdit = false
      //         arr[key].changedName = arr[key].changed === 10 ? '有' : '没有'
      //       })
      //       this.patentList = patentList
      //       this.dataTotal = res.total
      //       this.loading = false
      //       console.log(this.patentList)
      //     }
      //   }).catch(() => {
      //     this.$message.error('网络错误，请稍后再试')
      //   })
      // }
    }
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
  .search-top .seach-top-keyword {
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
    width: 270px;
    margin-bottom: 4px;
  }
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
