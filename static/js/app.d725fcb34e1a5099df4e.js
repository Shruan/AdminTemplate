webpackJsonp([1],{"1QhQ":function(t,e){},"6lK2":function(t,e){},C1Fn:function(t,e){},NHnr:function(t,e,i){"use strict";function n(t){i("1QhQ")}function s(t){i("dxGD")}function o(t){i("ZUNL")}function r(t){i("C1Fn")}function a(t){i("XI00"),i("6lK2")}function c(t){i("ZqRs")}Object.defineProperty(e,"__esModule",{value:!0});var l=i("7+uW"),u=i("v5o6"),d=i.n(u),h=i("/ocq"),p=i("//Fk"),g=i.n(p),m=i("mvHQ"),f=i.n(m),v=(Array,String,{props:{data:{type:Array},iconWidth:{type:String,default:"3.6rem"}},methods:{open:function(t){window.location.href=t}}}),_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{},t._l(t.data,function(e){return i("div",{staticClass:"sr__card-content"},t._l(e,function(e,n){return i("a",{key:n,staticClass:"sr__card-content-list",attrs:{target:"_self",href:e.url}},[i("div",{staticClass:"sr__card-content-list-icon",style:{backgroundImage:"url("+e.icon+")",width:t.iconWidth,height:t.iconWidth}}),t._v(" "),i("p",[t._v("\n        "+t._s(e.name)+"\n        "),e.num?i("font",{attrs:{color:"#5ed3b4"}},[t._v(t._s(e.num)+"单")]):t._e()],1)])}))}))},w=[],x={render:_,staticRenderFns:w},b=x,y=i("VU/8"),k=n,C=y(v,b,!1,k,"data-v-380f122e",null),B=C.exports,I=(Array,String,{props:{data:{type:Array},iconWidth:{type:String,default:"3.6rem"}}}),$=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{},t._l(t.data,function(e){return i("div",{staticClass:"sr__card-content"},t._l(e,function(e,n){return i("a",{key:n,staticClass:"sr__card-content-list",attrs:{target:"_self",href:e.url}},[i("div",{staticClass:"sr__card-content-list-icon",style:{backgroundImage:"url("+e.icon+")",width:t.iconWidth,height:t.iconWidth}}),t._v(" "),i("p",[t._v("\n        "+t._s(e.name)+"\n        "),e.num?i("font",{attrs:{color:"#5ed3b4"}},[t._v(t._s(e.num)+"单")]):t._e()],1)])}))}))},S=[],T={render:$,staticRenderFns:S},L=T,D=i("VU/8"),N=s,R=D(I,L,!1,N,"data-v-146b22c6",null),F=R.exports,W={name:"view-box",props:["bodyPaddingTop","bodyPaddingBottom"],methods:{scrollTo:function(t){this.$refs.viewBoxBody.scrollTop=t},getScrollTop:function(){return this.$refs.viewBoxBody.scrollTop},getScrollBody:function(){return this.$refs.viewBoxBody}}},U=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weui-tab"},[t._t("header"),t._v(" "),i("div",{ref:"viewBoxBody",staticClass:"weui-tab__panel vux-fix-safari-overflow-scrolling",style:{paddingTop:t.bodyPaddingTop,paddingBottom:t.bodyPaddingBottom},attrs:{id:"vux_view_box_body"}},[t._t("default")],2),t._v(" "),t._t("bottom")],2)},z=[],P={render:U,staticRenderFns:z},A=P,E=i("VU/8"),M=o,V=E(W,A,!1,M,null,null),j=V.exports,H=i("NjrX"),q=i("0FxO"),Q=(Array,String,Boolean,Boolean,String,String,Boolean,Boolean,Number,Number,Number,String,Number,Number,Number,{name:"swiper",created:function(){this.index=this.value||0,this.index&&(this.current=this.index)},mounted:function(){var t=this;this.hasTwoLoopItem(),this.$nextTick(function(){t.list&&0===t.list.length||t.render(t.index),t.xheight=t.getHeight(),t.$emit("on-get-height",t.xheight)})},methods:{hasTwoLoopItem:function(){2===this.list.length&&this.loop?this.listTwoLoopItem=this.list:this.listTwoLoopItem=[]},clickListItem:function(t){Object(q.a)(t.url,this.$router),this.$emit("on-click-list-item",JSON.parse(f()(t)))},buildBackgroundUrl:function(t){return t.fallbackImg?"url("+t.img+"), url("+t.fallbackImg+")":"url("+t.img+")"},render:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.swiper&&this.swiper.destroy(),this.swiper=new H.a({container:this.$el,direction:this.direction,auto:this.auto,loop:this.loop,interval:this.interval,threshold:this.threshold,duration:this.duration,height:this.height||this._height,minMovingDistance:this.minMovingDistance,imgList:this.imgList}).on("swiped",function(e,i){t.current=i%t.length,t.index=i%t.length}),e>0&&this.swiper.go(e)},rerender:function(){var t=this;this.$el&&!this.hasRender&&(this.hasRender=!0,this.hasTwoLoopItem(),this.$nextTick(function(){t.index=t.value||0,t.current=t.value||0,t.length=t.list.length||t.$children.length,t.destroy(),t.render(t.value)}))},destroy:function(){this.hasRender=!1,this.swiper&&this.swiper.destroy()},getHeight:function(){var t=parseInt(this.height,10);return t?this.height:t?void 0:this.aspectRatio?this.$el.offsetWidth*this.aspectRatio+"px":"180px"}},props:{list:{type:Array,default:function(){return[]}},direction:{type:String,default:"horizontal"},showDots:{type:Boolean,default:!0},showDescMask:{type:Boolean,default:!0},dotsPosition:{type:String,default:"right"},dotsClass:String,auto:Boolean,loop:Boolean,interval:{type:Number,default:3e3},threshold:{type:Number,default:50},duration:{type:Number,default:300},height:{type:String,default:"auto"},aspectRatio:Number,minMovingDistance:{type:Number,default:0},value:{type:Number,default:0}},data:function(){return{hasRender:!1,current:this.index||0,xheight:"auto",length:this.list.length,index:0,listTwoLoopItem:[]}},watch:{auto:function(t){t?this.swiper&&this.swiper._auto():this.swiper&&this.swiper.stop()},list:function(t){this.rerender()},current:function(t){this.index=t,this.$emit("on-index-change",t)},index:function(t){var e=this;t!==this.current&&this.$nextTick(function(){e.swiper&&e.swiper.go(t)}),this.$emit("input",t)},value:function(t){this.index=t}},beforeDestroy:function(){this.destroy()}}),Z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-slider"},[i("div",{staticClass:"vux-swiper",style:{height:t.xheight}},[t._t("default"),t._v(" "),t._l(t.list,function(e,n){return i("div",{staticClass:"vux-swiper-item",attrs:{"data-index":n},on:{click:function(i){t.clickListItem(e)}}},[i("a",{attrs:{href:"javascript:"}},[i("div",{staticClass:"vux-img",style:{backgroundImage:t.buildBackgroundUrl(e)}}),t._v(" "),t.showDescMask?i("p",{staticClass:"vux-swiper-desc"},[t._v(t._s(e.title))]):t._e()])])}),t._v(" "),t._l(t.listTwoLoopItem,function(e,n){return t.listTwoLoopItem.length>0?i("div",{staticClass:"vux-swiper-item vux-swiper-item-clone",attrs:{"data-index":n},on:{click:function(i){t.clickListItem(e)}}},[i("a",{attrs:{href:"javascript:"}},[i("div",{staticClass:"vux-img",style:{backgroundImage:t.buildBackgroundUrl(e)}}),t._v(" "),t.showDescMask?i("p",{staticClass:"vux-swiper-desc"},[t._v(t._s(e.title))]):t._e()])]):t._e()})],2),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showDots,expression:"showDots"}],class:[t.dotsClass,"vux-indicator","vux-indicator-"+t.dotsPosition]},t._l(t.length,function(e){return i("a",{attrs:{href:"javascript:"}},[i("i",{staticClass:"vux-icon-dot",class:{active:e-1===t.current}})])}))])},O=[],X={render:Z,staticRenderFns:O},G=X,J=i("VU/8"),K=r,Y=J(Q,G,!1,K,null,null),tt=Y.exports,et={name:"swiper-item",mounted:function(){var t=this;this.$nextTick(function(){t.$parent.rerender()})},beforeDestroy:function(){var t=this.$parent;this.$nextTick(function(){t.rerender()})}},it=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"vux-swiper-item"},[t._t("default")],2)},nt=[],st={render:it,staticRenderFns:nt},ot=st,rt=i("VU/8"),at=rt(et,ot,!1,null,null,null),ct=at.exports,lt=i("k0ip"),ut=i.n(lt),dt="./static/images/zhengfu/",ht={name:"zhengfu",components:{ViewBox:j,Swiper:tt,SwiperItem:ct,ListBox:B,ListBoxTwo:F},data:function(){return{corpId:"ding5dceb18be2471a5a35c2f4657eb6378f",_config:"",imagesPath:dt,bannerList:[{img:dt+"banner.png"},{img:dt+"banner1.png"}],nowTop:0,scroll:"",pageStyle:"",weatherInfo:{},messageList:[{message:"5月4日，纪念马克思诞辰200周年"},{message:"5月4日，纪念马克思诞辰200周年大会在北京人民大会堂隆重举行。习近平、李克强…"},{message:"5月4日，纪念马克思诞辰200周年大会在北京人民大会堂隆重举行。5月4日，纪念马克思诞辰200周年大会在北京人民大会堂隆重举行"}],listBoxData:[[{name:"通知公告",url:"https://www.baidu.com",icon:dt+"notice2.png"},{name:"工作审批",url:"",icon:dt+"approve.png"},{name:"电话会议",url:"",icon:dt+"mobile-meeting.png"},{name:"视频会议",url:"",icon:dt+"video-meeting.png"}],[{name:"云文档中心",url:"",icon:dt+"cloud-document.png"},{name:"办公电话",url:"",icon:dt+"office-phone.png"},{name:"日程任务",url:"",icon:dt+"schedule-task.png"},{name:"钉邮",url:"",icon:dt+"email.png"}]],listBoxTowData:[[{name:"法律顾问工作日志",url:"",icon:dt+"work-log.png"},{name:"每日签到",url:"",icon:dt+"position.png"}],[{name:"服务客户档案",url:"",icon:dt+"record.png"},{name:"个人档案",url:"",icon:dt+"person-record.png"}]],listBoxData2:[[{name:"日志",url:"",icon:dt+"log.png"},{name:"考勤打卡",url:"",icon:dt+"attendance-clockin.png"},{name:"智能人事",url:"",icon:dt+"smart-personnel.png"},{name:"我要比武",url:"",icon:dt+"ratio.png"}],[{name:"组织架构",url:"",icon:dt+"organizational-structure.png"},{name:"智能报表",url:"",icon:dt+"smart-report.png"},{name:"智能硬件",url:"",icon:dt+"smart-hardware.png"},{name:"其他",url:"",icon:dt+"more.png"}]],listBoxTowData2:[[{name:"智能问答",url:"",icon:dt+"smart-question.png"},{name:"12368热线",url:"",icon:dt+"line-phone.png"}],[{name:"意见反馈",url:"",icon:dt+"feedback.png"},{name:"法治地图",url:"",icon:dt+"law-map.png"}]]}},mounted:function(){var t=this;this.$nextTick(function(){setTimeout(function(){t.initScroll()},100)})},created:function(){var t=this;document.title="标题";var e=window.innerHeight;this.pageStyle="height:"+e+"px",this.iniDingtalk().then(function(e){alert(f()(e)),t.getUserInfo(e)}).catch(function(t){alert(f()(t))}),this.getWeather(),this.getallmicrlist()},methods:{iniDingtalk:function(){var t=this;return new g.a(function(e,i){t.$http.get("https://oa.dingcloud.com.cn/ding-ssm-demo/ticket/getconfig").then(function(i){t._config=i,t.corpId=t._config.corpId,e(i)})}).then(function(t){return ut.a.config({agentId:t.agentid,corpId:t.corpId,timeStamp:t.timeStamp,nonceStr:t.nonceStr,signature:t.signature,type:1,jsApiList:["runtime.info","biz.contact.choose","device.notification.confirm","device.notification.alert","device.notification.prompt","biz.ding.post","biz.util.openLink"]}),new g.a(function(e,i){ut.a.runtime.permission.requestAuthCode({corpId:t.corpid,onSuccess:function(t){e(t),console.log(f()(t)),alert(f()(t))},onFail:function(t){i(t),console.log(t),alert(f()(t))}}),ut.a.error(function(t){alert("dd error: "+f()(err)),i(err)})})})},getallmicrlist:function(){this.$http.get("https://oa.dingcloud.com.cn/ding-ssm-demo/microapp/getallmicrlist").then(function(t){console.log(t)})},getUserInfo:function(t){this.$http.get("https://oa.dingcloud.com.cn/ding-ssm-demo/user/code/"+t.code).then(function(t){alert(f()(t)),console.log(f()(err))})},getWeather:function(){var t=this;this.$http.get("https://oa.dingcloud.com.cn/ding-ssm-demo/weather/getweather").then(function(e){t.weatherInfo=e.weatherinfo})},initScroll:function(){}}},pt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sr__page-zhengfu"},[i("view-box",{ref:"viewBox"},[i("div",{ref:"wrapper",staticClass:"wrapper"},[i("div",{staticClass:"content",staticStyle:{flex:"1"}},[i("div",{staticStyle:{position:"relative"}},[i("swiper",{staticStyle:{width:"100%",margin:"0 auto"},attrs:{auto:"",interval:5e3,list:t.bannerList,height:"15.2rem","dots-class":"custom-bottom","dots-position":"center"}}),t._v(" "),t.weatherInfo.city?i("div",{staticClass:"weather-body"},[t._v("\n            "+t._s(t.weatherInfo.city)+"\n            "),i("img",{attrs:{src:t.weatherInfo.img1}}),t._v(" "),i("font",{attrs:{color:"#3ccba6"}},[t._v(t._s(t.weatherInfo.temp1))]),t._v("\n            ~\n            "),i("font",{attrs:{color:"#ED3F14"}},[t._v(t._s(t.weatherInfo.temp2))])],1):t._e()],1),t._v(" "),i("div",{staticClass:"sr__message-notice"},[i("div",{staticClass:"sr__message-icon-box"},[i("div",{staticClass:"sr__message-icon",style:{backgroundImage:"url("+t.imagesPath+"notice.png)"}})]),t._v(" "),i("div",{staticClass:"sr__message-box"},[i("swiper",{staticClass:"text-scroll",attrs:{auto:"",height:"30px",direction:"vertical",interval:5e3,"show-dots":!1}},t._l(t.messageList,function(e,n){return i("swiper-item",{key:n},[i("p",{staticClass:"sr__message-text"},[t._v(t._s(e.message))])])}))],1)]),t._v(" "),i("div",{staticClass:"sr__card"},[i("div",{staticClass:"sr__card-title"},[i("h3",[t._v("日程办公")])]),t._v(" "),i("ListBox",{attrs:{data:t.listBoxData,iconWidth:"2.2rem"}})],1),t._v(" "),i("div",{staticClass:"sr__card",staticStyle:{"margin-top":"0.8rem"}},[i("div",{staticClass:"sr__card-title"},[i("h3",[t._v("每日工作")])]),t._v(" "),i("ListBoxTwo",{attrs:{data:t.listBoxTowData,iconWidth:"2rem"}})],1),t._v(" "),i("div",{staticClass:"sr__card",staticStyle:{"margin-top":"0.8rem"}},[i("div",{staticClass:"sr__card-title"},[i("h3",[t._v("综合服务")])]),t._v(" "),i("ListBox",{attrs:{data:t.listBoxData2,iconWidth:"2.2rem"}})],1),t._v(" "),i("div",{staticClass:"sr__card",staticStyle:{"margin-top":"0.8rem"}},[i("div",{staticClass:"sr__card-title"},[i("h3",[t._v("我要咨询")])]),t._v(" "),i("ListBoxTwo",{attrs:{data:t.listBoxTowData2,iconWidth:"2.2rem"}})],1)])])])],1)},gt=[],mt={render:pt,staticRenderFns:gt},ft=mt,vt=i("VU/8"),_t=a,wt=vt(ht,ft,!1,_t,"data-v-603c8ccd",null),xt=wt.exports;l.a.use(h.a);var bt=new h.a({routes:[{path:"/",redirect:"/zhengfu"},{path:"/zhengFu",name:"ZhengFu",component:xt}]}),yt={name:"app"},kt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},Ct=[],Bt={render:kt,staticRenderFns:Ct},It=Bt,$t=i("VU/8"),St=c,Tt=$t(yt,It,!1,St,null,null),Lt=Tt.exports,Dt=i("mtWM"),Nt=i.n(Dt);l.a.use(h.a),Nt.a.interceptors.response.use(function(t){switch(t.status){case 200:return t.data}},function(t){switch(t.response.status){case 404:console.log("404 err");break;case 500:console.log("500 err");break;default:console.log("unknow err")}}),d.a.attach(document.body),l.a.config.productionTip=!1,l.a.prototype.$http=Nt.a,new l.a({router:bt,render:function(t){return t(Lt)}}).$mount("#app-box")},XI00:function(t,e){},ZUNL:function(t,e){},ZqRs:function(t,e){},dxGD:function(t,e){},k0ip:function(t,e){t.exports=dd}},["NHnr"]);
//# sourceMappingURL=app.d725fcb34e1a5099df4e.js.map