webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_ZhengFu_index_vue__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_ZhengFu_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__pages_ZhengFu_index_vue__);


// import ZhongYiFu from '@/pages/ZhongYiFu'


__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/',
    redirect: '/zhengfu'
  },
  // {
  //   path: '/zhongyifu',
  //   name: 'ZhongYiFu',
  //   component: ZhongYiFu
  // },
  {
    path: '/zhengfu',
    name: 'ZhengFu',
    component: __WEBPACK_IMPORTED_MODULE_2__pages_ZhengFu_index_vue___default.a
    // {
    //   path: '/hello',
    //   name: 'Hello',
    //   component: Hello
    // }
  }]
}));

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(48)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(36),
  /* template */
  __webpack_require__(58),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ListBox__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ListBox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ListBox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ListBoxTwo__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ListBoxTwo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ListBoxTwo__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ListBox___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__ListBoxTwo___default.a; });





/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fastclick__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fastclick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fastclick__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_index_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__App__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_axios__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.





// import Home from './components/HelloFromVux'


__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_2_vue_router__["a" /* default */]);

// const routes = [{
//   path: '/',
//   component: Home
// }]

// const router = new VueRouter({
//   routes
// })

__WEBPACK_IMPORTED_MODULE_1_fastclick___default.a.attach(document.body);

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].prototype.$http = __WEBPACK_IMPORTED_MODULE_5_axios___default.a;
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].prototype.webUrl = 'http://shangmenyi.biniukeji.com';
// Vue.prototype.webUrl = 'http://192.168.1.145/smy'

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  router: __WEBPACK_IMPORTED_MODULE_3__router_index_js__["a" /* default */],
  render: h => h(__WEBPACK_IMPORTED_MODULE_4__App___default.a)
}).$mount('#app-box');

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'swiper-item',
  mounted() {
    this.$nextTick(() => {
      this.$parent.rerender();
    });
  },
  beforeDestroy() {
    const $parent = this.$parent;
    this.$nextTick(() => {
      $parent.rerender();
    });
  }
});

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__swiper_js__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_router__ = __webpack_require__(41);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'swiper',
  created() {
    this.index = this.value || 0;
    if (this.index) {
      this.current = this.index;
    }
  },
  mounted() {
    this.hasTwoLoopItem();
    this.$nextTick(() => {
      if (!(this.list && this.list.length === 0)) {
        this.render(this.index);
      }
      this.xheight = this.getHeight();
    });
  },
  methods: {
    hasTwoLoopItem() {
      if (this.list.length === 2 && this.loop) {
        this.listTwoLoopItem = this.list;
      } else {
        this.listTwoLoopItem = [];
      }
    },
    clickListItem(item) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__libs_router__["a" /* go */])(item.url, this.$router);
      this.$emit('on-click-list-item', JSON.parse(JSON.stringify(item)));
    },
    buildBackgroundUrl(url) {
      return `url(${url})`;
    },
    render(index = 0) {
      this.swiper && this.swiper.destroy();
      this.swiper = new __WEBPACK_IMPORTED_MODULE_0__swiper_js__["a" /* default */]({
        container: this.$el,
        direction: this.direction,
        auto: this.auto,
        loop: this.loop,
        interval: this.interval,
        threshold: this.threshold,
        duration: this.duration,
        height: this.height || this._height,
        minMovingDistance: this.minMovingDistance,
        imgList: this.imgList
      }).on('swiped', (prev, index) => {
        this.current = index % this.length;
        this.index = index % this.length;
      });
      if (index > 0) {
        this.swiper.go(index);
      }
    },
    rerender() {
      if (!this.$el || this.hasRender) {
        return;
      }
      this.hasRender = true;
      this.hasTwoLoopItem();
      this.$nextTick(() => {
        this.index = this.value || 0;
        this.current = this.value || 0;
        this.length = this.list.length || this.$children.length;
        this.destroy();
        this.render(this.value);
      });
    },
    destroy() {
      this.hasRender = false;
      this.swiper && this.swiper.destroy();
    },
    getHeight() {
      // when list.length > 0, it's better to set height or ratio
      const hasHeight = parseInt(this.height, 10);
      if (hasHeight) return this.height;
      if (!hasHeight) {
        if (this.aspectRatio) {
          return this.$el.offsetWidth * this.aspectRatio + 'px';
        }
        return '180px';
      }
    }
  },
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    },
    direction: {
      type: String,
      default: 'horizontal'
    },
    showDots: {
      type: Boolean,
      default: true
    },
    showDescMask: {
      type: Boolean,
      default: true
    },
    dotsPosition: {
      type: String,
      default: 'right'
    },
    dotsClass: String,
    auto: {
      type: Boolean,
      default: false
    },
    loop: Boolean,
    interval: {
      type: Number,
      default: 3000
    },
    threshold: {
      type: Number,
      default: 50
    },
    duration: {
      type: Number,
      default: 300
    },
    height: {
      type: String,
      default: 'auto'
    },
    aspectRatio: Number,
    minMovingDistance: {
      type: Number,
      default: 0
    },
    value: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      hasRender: false,
      current: this.index || 0,
      xheight: 'auto',
      length: this.list.length,
      index: 0,
      // issue #1484 Fix click to fail
      listTwoLoopItem: []
    };
  },
  watch: {
    list(val) {
      this.rerender();
    },
    current(currentIndex) {
      this.index = currentIndex;
      this.$emit('on-index-change', currentIndex);
    },
    index(val) {
      const _this = this;
      if (val !== this.current) {
        this.$nextTick(() => {
          _this.swiper && _this.swiper.go(val);
        });
      }
      this.$emit('input', val);
    },
    value(val) {
      this.index = val;
    }
  },
  beforeDestroy() {
    this.destroy();
  }
});

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'view-box',
  props: ['bodyPaddingTop', 'bodyPaddingBottom'],
  methods: {
    scrollTo(top) {
      this.$refs.viewBoxBody.scrollTop = top;
    },
    getScrollTop() {
      return this.$refs.viewBoxBody.scrollTop;
    },
    getScrollBody() {
      return this.$refs.viewBoxBody;
    }
  }
});

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//

// import getCode from '@/utils/getCode.js'

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app',
  data() {
    return {
      // count: 0
    };
  },
  created() {
    // setInterval(() => {
    //   this.count ++
    // }, 1000)
    // console.log(dd)
    // console.log(getCode)
    // dd.ready(() => {
    //   alert('进入ready')
    //   setInterval(() => {
    //     this.test()
    //   }, 1000)
    // })
    // let url = this.webUrl + '/cfg2'
    // let header = {
    //   'Content-Type': 'application/x-www-form-urlencoded'
    //   // 'X-Requested-With': 'XMLHttpRequest',
    //   // 'Access-Control-Allow-Headers': 'Authorization,Origin, X-Requested-With, Content-Type, Accept',
    //   // 'Access-Control-Allow-Methods': 'GET,POST'
    // }
    // let data = {
    //   url: window.location.href,
    //   corpId: this.corpId
    // }
    // this.$http.post(url, data, {headers: header}).then(res => {
    //   res = res.data
    //   alert('获取成功' + res)
    //   console.log(res)
    //   if (res.success) {
    //     alert(res)
    //     res = res.data
    //     this._config = res
    //     getDingCode.getCode(this._config)
    //   }
    //   // console.log(this._config)
    // }).catch(res => {
    //   alert('请求发送错误' + res)
    //   console.log(res)
    // })
    // this._config = mydata
    // getDingCode.getCode(this._config)
  },
  methods: {
    // test () {
    //   dd.device.geolocation.get({
    //       targetAccuracy : Number,
    //       coordinate : Number,
    //       withReGeocode : Boolean,
    //       useCache:true, //默认是true，如果需要频繁获取地理位置，请设置false
    //       onSuccess : function(result) {
    //           /* 高德坐标 result 结构
    //           {
    //               longitude : Number,
    //               latitude : Number,
    //               accuracy : Number,
    //               address : String,
    //               province : String,
    //               city : String,
    //               district : String,
    //               road : String,
    //               netType : String,
    //               operatorType : String,
    //               errorMessage : String,
    //               errorCode : Number,
    //               isWifiEnabled : Boolean,
    //               isGpsEnabled : Boolean,
    //               isFromMock : Boolean,
    //               provider : wifi|lbs|gps,
    //               accuracy : Number,
    //               isMobileEnabled : Boolean
    //           }
    //           */
    //       },
    //       onFail : function(err) {
    //         alert(err)
    //       }
    //   });
    // }
  }
});

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    data: {
      type: Array
    },
    iconWidth: {
      type: String,
      default: '3.6rem'
    }
  },
  methods: {
    open(url) {
      window.location.href = url;
    }
  }
});

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    data: {
      type: Array
    },
    iconWidth: {
      type: String,
      default: '3.6rem'
    }
  }
});

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_better_scroll__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_ListBox__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vux_src_components_view_box_index_vue__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vux_src_components_view_box_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vux_src_components_view_box_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vux_src_components_swiper_swiper_vue__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vux_src_components_swiper_swiper_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vux_src_components_swiper_swiper_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vux_src_components_swiper_swiper_item_vue__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vux_src_components_swiper_swiper_item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vux_src_components_swiper_swiper_item_vue__);







const imagesPath = './static/images/zhengfu/';
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'zhengfu',
  components: {
    ViewBox: __WEBPACK_IMPORTED_MODULE_2_vux_src_components_view_box_index_vue___default.a,
    Swiper: __WEBPACK_IMPORTED_MODULE_3_vux_src_components_swiper_swiper_vue___default.a,
    SwiperItem: __WEBPACK_IMPORTED_MODULE_4_vux_src_components_swiper_swiper_item_vue___default.a,
    ListBox: __WEBPACK_IMPORTED_MODULE_1__components_ListBox__["a" /* ListBox */],
    ListBoxTwo: __WEBPACK_IMPORTED_MODULE_1__components_ListBox__["b" /* ListBoxTwo */]
  },
  data() {
    return {
      corpId: 'ding5dceb18be2471a5a35c2f4657eb6378f',
      _config: '',
      imagesPath,
      bannerList: [{ img: imagesPath + 'banner1.png' }, { img: imagesPath + 'banner1.png' }],
      nowTop: 0,
      scroll: '',
      pageStyle: '',
      messageList: [{ message: '5月4日，纪念马克思诞辰200周年' }, { message: '5月4日，纪念马克思诞辰200周年大会在北京人民大会堂隆重举行。习近平、李克强…' }, { message: '5月4日，纪念马克思诞辰200周年大会在北京人民大会堂隆重举行。5月4日，纪念马克思诞辰200周年大会在北京人民大会堂隆重举行' }],
      listBoxData: [[{ name: '通知公告', url: 'https://www.baidu.com', icon: imagesPath + 'notice2.png' }, { name: '工作审批', url: '', icon: imagesPath + 'approve.png' }, { name: '电话会议', url: '', icon: imagesPath + 'mobile-meeting.png' }, { name: '视频会议', url: '', icon: imagesPath + 'video-meeting.png' }], [{ name: '云文档中心', url: '', icon: imagesPath + 'cloud-document.png' }, { name: '办公电话', url: '', icon: imagesPath + 'office-phone.png' }, { name: '日程任务', url: '', icon: imagesPath + 'schedule-task.png' }, { name: '钉邮', url: '', icon: imagesPath + 'email.png' }]],
      listBoxTowData: [[{ name: '法律顾问工作日志', url: '', icon: imagesPath + 'work-log.png' }, { name: '每日签到', url: '', icon: imagesPath + 'position.png' }], [{ name: '服务客户档案', url: '', icon: imagesPath + 'record.png' }, { name: '个人档案', url: '', icon: imagesPath + 'person-record.png' }]],
      listBoxData2: [[{ name: '日志', url: '', icon: imagesPath + 'log.png' }, { name: '考勤打卡', url: '', icon: imagesPath + 'attendance-clockin.png' }, { name: '智能人事', url: '', icon: imagesPath + 'smart-personnel.png' }, { name: '我要比武', url: '', icon: imagesPath + 'ratio.png' }], [{ name: '组织架构', url: '', icon: imagesPath + 'organizational-structure.png' }, { name: '智能报表', url: '', icon: imagesPath + 'smart-report.png' }, { name: '智能硬件', url: '', icon: imagesPath + 'smart-hardware.png' }, { name: '其他', url: '', icon: imagesPath + 'more.png' }]],
      listBoxTowData2: [[{ name: '智能问答', url: '', icon: imagesPath + 'smart-question.png' }, { name: '12368热线', url: '', icon: imagesPath + 'line-phone.png' }], [{ name: '意见反馈', url: '', icon: imagesPath + 'feedback.png' }, { name: '法治地图', url: '', icon: imagesPath + 'law-map.png' }]]
    };
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.initScroll();
      }, 200);
    });
  },
  created() {

    document.title = '标题';
    let screemHeight = window.innerHeight;
    this.pageStyle = 'height:' + screemHeight + 'px';
  },
  methods: {
    initScroll() {
      if (!this.scroll) {
        this.scroll = new __WEBPACK_IMPORTED_MODULE_0_better_scroll__["a" /* default */](this.$refs.wrapper, {
          click: true
        });
      } else {
        this.scroll.refresh();
      }
    },
    setMessageNotice() {
      clearInterval(timer);
      let len = this.messageList.length;
      let nowIndex = 0;
      let timer = setInterval(() => {
        console.log('change');
        this.nowTop = 2.6 * nowIndex;
        console.log(this.nowTop);
        nowIndex = nowIndex + 1;
        if (nowIndex === len && nowIndex !== 0) {
          nowIndex = 0;
        }
      }, 5000);
    }
  }
});

/***/ }),
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 44 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 45 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 46 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 47 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 48 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 49 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vux-slider"
  }, [_c('div', {
    staticClass: "vux-swiper",
    style: ({
      height: _vm.xheight
    })
  }, [_vm._t("default"), _vm._v(" "), _vm._l((_vm.list), function(item, index) {
    return _c('div', {
      staticClass: "vux-swiper-item",
      attrs: {
        "data-index": index
      },
      on: {
        "click": function($event) {
          _vm.clickListItem(item)
        }
      }
    }, [_c('a', {
      attrs: {
        "href": "javascript:"
      }
    }, [_c('div', {
      staticClass: "vux-img",
      style: ({
        backgroundImage: _vm.buildBackgroundUrl(item.img)
      })
    }), _vm._v(" "), (_vm.showDescMask) ? _c('p', {
      staticClass: "vux-swiper-desc"
    }, [_vm._v(_vm._s(item.title))]) : _vm._e()])])
  }), _vm._v(" "), _vm._l((_vm.listTwoLoopItem), function(item, index) {
    return (_vm.listTwoLoopItem.length > 0) ? _c('div', {
      staticClass: "vux-swiper-item vux-swiper-item-clone",
      attrs: {
        "data-index": index
      },
      on: {
        "click": function($event) {
          _vm.clickListItem(item)
        }
      }
    }, [_c('a', {
      attrs: {
        "href": "javascript:"
      }
    }, [_c('div', {
      staticClass: "vux-img",
      style: ({
        backgroundImage: _vm.buildBackgroundUrl(item.img)
      })
    }), _vm._v(" "), (_vm.showDescMask) ? _c('p', {
      staticClass: "vux-swiper-desc"
    }, [_vm._v(_vm._s(item.title))]) : _vm._e()])]) : _vm._e()
  })], 2), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showDots),
      expression: "showDots"
    }],
    class: [_vm.dotsClass, 'vux-indicator', 'vux-indicator-' + _vm.dotsPosition]
  }, _vm._l((_vm.length), function(key) {
    return _c('a', {
      attrs: {
        "href": "javascript:"
      }
    }, [_c('i', {
      staticClass: "vux-icon-dot",
      class: {
        'active': key - 1 === _vm.current
      }
    })])
  }))])
},staticRenderFns: []}

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "sr__page-zhengfu"
  }, [_c('view-box', {
    ref: "viewBox"
  }, [_c('div', {
    ref: "wrapper",
    staticClass: "wrapper",
    style: (_vm.pageStyle)
  }, [_c('div', {
    staticClass: "content",
    staticStyle: {
      "flex": "1"
    }
  }, [_c('swiper', {
    staticStyle: {
      "width": "100%",
      "margin": "0 auto"
    },
    attrs: {
      "auto": "",
      "interval": 5000,
      "list": _vm.bannerList,
      "height": "15.2rem",
      "dots-class": "custom-bottom",
      "dots-position": "center"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "sr__message-notice"
  }, [_c('div', {
    staticClass: "sr__message-icon-box"
  }, [_c('div', {
    staticClass: "sr__message-icon",
    style: ({
      backgroundImage: ("url(" + _vm.imagesPath + "notice.png)")
    })
  })]), _vm._v(" "), _c('div', {
    staticClass: "sr__message-box"
  }, [_c('swiper', {
    staticClass: "text-scroll",
    attrs: {
      "auto": "",
      "height": "30px",
      "direction": "vertical",
      "interval": 5000,
      "show-dots": false
    }
  }, _vm._l((_vm.messageList), function(item, index) {
    return _c('swiper-item', {
      key: index
    }, [_c('p', {
      staticClass: "sr__message-text"
    }, [_vm._v(_vm._s(item.message))])])
  }))], 1)]), _vm._v(" "), _c('div', {
    staticClass: "sr__card"
  }, [_c('div', {
    staticClass: "sr__card-title"
  }, [_c('h3', [_vm._v("日程办公")])]), _vm._v(" "), _c('ListBox', {
    attrs: {
      "data": _vm.listBoxData,
      "iconWidth": "2.2rem"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "sr__card",
    staticStyle: {
      "margin-top": "0.8rem"
    }
  }, [_c('div', {
    staticClass: "sr__card-title"
  }, [_c('h3', [_vm._v("每日工作")])]), _vm._v(" "), _c('ListBoxTwo', {
    attrs: {
      "data": _vm.listBoxTowData,
      "iconWidth": "2rem"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "sr__card",
    staticStyle: {
      "margin-top": "0.8rem"
    }
  }, [_c('div', {
    staticClass: "sr__card-title"
  }, [_c('h3', [_vm._v("综合服务")])]), _vm._v(" "), _c('ListBox', {
    attrs: {
      "data": _vm.listBoxData2,
      "iconWidth": "2.2rem"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "sr__card",
    staticStyle: {
      "margin-top": "0.8rem"
    }
  }, [_c('div', {
    staticClass: "sr__card-title"
  }, [_c('h3', [_vm._v("我要咨询")])]), _vm._v(" "), _c('ListBoxTwo', {
    attrs: {
      "data": _vm.listBoxTowData2,
      "iconWidth": "2.2rem"
    }
  })], 1)], 1)])])], 1)
},staticRenderFns: []}

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-tab"
  }, [_vm._t("header"), _vm._v(" "), _c('div', {
    ref: "viewBoxBody",
    staticClass: "weui-tab__panel vux-fix-safari-overflow-scrolling",
    style: ({
      paddingTop: _vm.bodyPaddingTop,
      paddingBottom: _vm.bodyPaddingBottom
    }),
    attrs: {
      "id": "vux_view_box_body"
    }
  }, [_vm._t("default")], 2), _vm._v(" "), _vm._t("bottom")], 2)
},staticRenderFns: []}

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {}, _vm._l((_vm.data), function(list) {
    return _c('div', {
      staticClass: "sr__card-content"
    }, _vm._l((list), function(item, index) {
      return _c('a', {
        key: index,
        staticClass: "sr__card-content-list",
        attrs: {
          "target": "_self",
          "href": item.url
        }
      }, [_c('div', {
        staticClass: "sr__card-content-list-icon",
        style: ({
          backgroundImage: ("url(" + (item.icon) + ")"),
          width: _vm.iconWidth,
          height: _vm.iconWidth
        })
      }), _vm._v(" "), _c('p', [_vm._v("\n        " + _vm._s(item.name) + "\n        "), (item.num) ? _c('font', {
        attrs: {
          "color": "#5ed3b4"
        }
      }, [_vm._v(_vm._s(item.num) + "单")]) : _vm._e()], 1)])
    }))
  }))
},staticRenderFns: []}

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vux-swiper-item"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('router-view')], 1)
},staticRenderFns: []}

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {}, _vm._l((_vm.data), function(list) {
    return _c('div', {
      staticClass: "sr__card-content"
    }, _vm._l((list), function(item, index) {
      return _c('a', {
        key: index,
        staticClass: "sr__card-content-list",
        attrs: {
          "target": "_self",
          "href": item.url
        }
      }, [_c('div', {
        staticClass: "sr__card-content-list-icon",
        style: ({
          backgroundImage: ("url(" + (item.icon) + ")"),
          width: _vm.iconWidth,
          height: _vm.iconWidth
        })
      }), _vm._v(" "), _c('p', [_vm._v("\n        " + _vm._s(item.name) + "\n        "), (item.num) ? _c('font', {
        attrs: {
          "color": "#5ed3b4"
        }
      }, [_vm._v(_vm._s(item.num) + "单")]) : _vm._e()], 1)])
    }))
  }))
},staticRenderFns: []}

/***/ }),
/* 60 */,
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(33),
  /* template */
  __webpack_require__(57),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(43)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(34),
  /* template */
  __webpack_require__(53),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(46)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(35),
  /* template */
  __webpack_require__(55),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(47)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(37),
  /* template */
  __webpack_require__(56),
  /* scopeId */
  "data-v-666df8f1",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(49)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(38),
  /* template */
  __webpack_require__(59),
  /* scopeId */
  "data-v-99db146a",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(45)
__webpack_require__(44)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(39),
  /* template */
  __webpack_require__(54),
  /* scopeId */
  "data-v-1d017468",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })
],[32]);
//# sourceMappingURL=app.200d0f93fe7ff6ca24ea.js.map