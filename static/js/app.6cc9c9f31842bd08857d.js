webpackJsonp([1],{"7oCX":function(t,i){},C1Fn:function(t,i){},NHnr:function(t,i,e){"use strict";function n(t){e("7oCX")}function s(t){e("aaY7")}function a(t){e("ZUNL")}function o(t){e("C1Fn")}function r(t){e("mBL4"),e("Vd0i")}function c(t){e("ZqRs")}Object.defineProperty(i,"__esModule",{value:!0});var l=e("7+uW"),d=e("v5o6"),u=e.n(d),h=e("/ocq"),p=e("mvHQ"),g=e.n(p),f=e("//Fk"),m=e.n(f),v=(Array,String,{props:{data:{type:Array},iconWidth:{type:String,default:"3.6rem"}},data:function(){return{list:[]}},watch:{data:{handler:function(t){this.list=this.splitArray(t,4)},deep:!0}},methods:{splitArray:function(t,i){for(var e=t.length,n=[],s=0;s<e;s+=i)n.push(t.slice(s,s+i));return n},open:function(t){window.location.href=t}},created:function(){this.list=this.splitArray(this.data,4)}}),_=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{},t._l(t.list,function(i){return e("div",{staticClass:"sr__card-content"},t._l(i,function(i,n){return e("a",{key:n,staticClass:"sr__card-content-list",attrs:{target:"_self",href:i.url}},[e("div",{staticClass:"sr__card-content-list-icon",style:{backgroundImage:"url("+i.icon+")",width:t.iconWidth,height:t.iconWidth}}),t._v(" "),e("p",[t._v("\n        "+t._s(i.name)+"\n        "),i.num?e("font",{attrs:{color:"#5ed3b4"}},[t._v(t._s(i.num)+"单")]):t._e()],1)])}))}))},w=[],x={render:_,staticRenderFns:w},b=x,y=e("VU/8"),k=n,I=y(v,b,!1,k,"data-v-5821dd58",null),B=I.exports,C=(Array,String,{props:{data:{type:Array},iconWidth:{type:String,default:"3.6rem"}},data:function(){return{list:[]}},watch:{data:{handler:function(t){this.list=this.splitArray(t,2)},deep:!0}},methods:{splitArray:function(t,i){for(var e=t.length,n=[],s=0;s<e;s+=i)n.push(t.slice(s,s+i));return n}},created:function(){this.list=this.splitArray(this.data,2)}}),$=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{},t._l(t.list,function(i){return e("div",{staticClass:"sr__card-content"},t._l(i,function(i,n){return e("a",{key:n,staticClass:"sr__card-content-list",attrs:{target:"_self",href:i.url}},[e("div",{staticClass:"sr__card-content-list-icon",style:{backgroundImage:"url("+i.icon+")",width:t.iconWidth,height:t.iconWidth}}),t._v(" "),e("p",[t._v("\n        "+t._s(i.name)+"\n        "),i.num?e("font",{attrs:{color:"#5ed3b4"}},[t._v(t._s(i.num)+"单")]):t._e()],1)])}))}))},T=[],S={render:$,staticRenderFns:T},L=S,D=e("VU/8"),N=s,R=D(C,L,!1,N,"data-v-41cc443d",null),U=R.exports,F={name:"view-box",props:["bodyPaddingTop","bodyPaddingBottom"],methods:{scrollTo:function(t){this.$refs.viewBoxBody.scrollTop=t},getScrollTop:function(){return this.$refs.viewBoxBody.scrollTop},getScrollBody:function(){return this.$refs.viewBoxBody}}},W=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"weui-tab"},[t._t("header"),t._v(" "),e("div",{ref:"viewBoxBody",staticClass:"weui-tab__panel vux-fix-safari-overflow-scrolling",style:{paddingTop:t.bodyPaddingTop,paddingBottom:t.bodyPaddingBottom},attrs:{id:"vux_view_box_body"}},[t._t("default")],2),t._v(" "),t._t("bottom")],2)},A=[],z={render:W,staticRenderFns:A},V=z,P=e("VU/8"),E=a,M=P(F,V,!1,E,null,null),j=M.exports,H=e("NjrX"),Z=e("0FxO"),q=(Array,String,Boolean,Boolean,String,String,Boolean,Boolean,Number,Number,Number,String,Number,Number,Number,{name:"swiper",created:function(){this.index=this.value||0,this.index&&(this.current=this.index)},mounted:function(){var t=this;this.hasTwoLoopItem(),this.$nextTick(function(){t.list&&0===t.list.length||t.render(t.index),t.xheight=t.getHeight(),t.$emit("on-get-height",t.xheight)})},methods:{hasTwoLoopItem:function(){2===this.list.length&&this.loop?this.listTwoLoopItem=this.list:this.listTwoLoopItem=[]},clickListItem:function(t){Object(Z.a)(t.url,this.$router),this.$emit("on-click-list-item",JSON.parse(g()(t)))},buildBackgroundUrl:function(t){return t.fallbackImg?"url("+t.img+"), url("+t.fallbackImg+")":"url("+t.img+")"},render:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.swiper&&this.swiper.destroy(),this.swiper=new H.a({container:this.$el,direction:this.direction,auto:this.auto,loop:this.loop,interval:this.interval,threshold:this.threshold,duration:this.duration,height:this.height||this._height,minMovingDistance:this.minMovingDistance,imgList:this.imgList}).on("swiped",function(i,e){t.current=e%t.length,t.index=e%t.length}),i>0&&this.swiper.go(i)},rerender:function(){var t=this;this.$el&&!this.hasRender&&(this.hasRender=!0,this.hasTwoLoopItem(),this.$nextTick(function(){t.index=t.value||0,t.current=t.value||0,t.length=t.list.length||t.$children.length,t.destroy(),t.render(t.value)}))},destroy:function(){this.hasRender=!1,this.swiper&&this.swiper.destroy()},getHeight:function(){var t=parseInt(this.height,10);return t?this.height:t?void 0:this.aspectRatio?this.$el.offsetWidth*this.aspectRatio+"px":"180px"}},props:{list:{type:Array,default:function(){return[]}},direction:{type:String,default:"horizontal"},showDots:{type:Boolean,default:!0},showDescMask:{type:Boolean,default:!0},dotsPosition:{type:String,default:"right"},dotsClass:String,auto:Boolean,loop:Boolean,interval:{type:Number,default:3e3},threshold:{type:Number,default:50},duration:{type:Number,default:300},height:{type:String,default:"auto"},aspectRatio:Number,minMovingDistance:{type:Number,default:0},value:{type:Number,default:0}},data:function(){return{hasRender:!1,current:this.index||0,xheight:"auto",length:this.list.length,index:0,listTwoLoopItem:[]}},watch:{auto:function(t){t?this.swiper&&this.swiper._auto():this.swiper&&this.swiper.stop()},list:function(t){this.rerender()},current:function(t){this.index=t,this.$emit("on-index-change",t)},index:function(t){var i=this;t!==this.current&&this.$nextTick(function(){i.swiper&&i.swiper.go(t)}),this.$emit("input",t)},value:function(t){this.index=t}},beforeDestroy:function(){this.destroy()}}),O=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"vux-slider"},[e("div",{staticClass:"vux-swiper",style:{height:t.xheight}},[t._t("default"),t._v(" "),t._l(t.list,function(i,n){return e("div",{staticClass:"vux-swiper-item",attrs:{"data-index":n},on:{click:function(e){t.clickListItem(i)}}},[e("a",{attrs:{href:"javascript:"}},[e("div",{staticClass:"vux-img",style:{backgroundImage:t.buildBackgroundUrl(i)}}),t._v(" "),t.showDescMask?e("p",{staticClass:"vux-swiper-desc"},[t._v(t._s(i.title))]):t._e()])])}),t._v(" "),t._l(t.listTwoLoopItem,function(i,n){return t.listTwoLoopItem.length>0?e("div",{staticClass:"vux-swiper-item vux-swiper-item-clone",attrs:{"data-index":n},on:{click:function(e){t.clickListItem(i)}}},[e("a",{attrs:{href:"javascript:"}},[e("div",{staticClass:"vux-img",style:{backgroundImage:t.buildBackgroundUrl(i)}}),t._v(" "),t.showDescMask?e("p",{staticClass:"vux-swiper-desc"},[t._v(t._s(i.title))]):t._e()])]):t._e()})],2),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.showDots,expression:"showDots"}],class:[t.dotsClass,"vux-indicator","vux-indicator-"+t.dotsPosition]},t._l(t.length,function(i){return e("a",{attrs:{href:"javascript:"}},[e("i",{staticClass:"vux-icon-dot",class:{active:i-1===t.current}})])}))])},X=[],J={render:O,staticRenderFns:X},Y=J,Q=e("VU/8"),G=o,K=Q(q,Y,!1,G,null,null),tt=K.exports,it={name:"swiper-item",mounted:function(){var t=this;this.$nextTick(function(){t.$parent.rerender()})},beforeDestroy:function(){var t=this.$parent;this.$nextTick(function(){t.rerender()})}},et=function(){var t=this,i=t.$createElement;return(t._self._c||i)("div",{staticClass:"vux-swiper-item"},[t._t("default")],2)},nt=[],st={render:et,staticRenderFns:nt},at=st,ot=e("VU/8"),rt=ot(it,at,!1,null,null,null),ct=rt.exports,lt=e("k0ip"),dt=e.n(lt),ut={name:"zhengfu",components:{ViewBox:j,Swiper:tt,SwiperItem:ct,ListBox:B,ListBoxTwo:U},data:function(){return{corpId:"ding5dceb18be2471a5a35c2f4657eb6378f",_config:{},imagesPath:"./static/images/zhengfu/",bannerList:[{img:"./static/images/zhengfu/banner.png"},{img:"./static/images/zhengfu/banner1.png"}],nowTop:0,scroll:"",pageStyle:"",weatherInfo:{},messageList:[],listBoxData:[],listBoxTowData:[],listBoxData2:[],listBoxTowData2:[]}},mounted:function(){var t=this;this.$nextTick(function(){setTimeout(function(){t.initScroll()},100)})},created:function(){var t=this;document.title="标题";var i=window.innerHeight;this.pageStyle="height:"+i+"px",this.iniDingtalk().then(function(i){t.getUserInfo(i)}).catch(function(t){}),this.getWeather()},methods:{getWeather:function(){var t=this;this.$http.get("https://oa.dingcloud.com.cn/ding-ssm-demo/weather/getweather").then(function(i){t.weatherInfo=i.weatherinfo})},getUserInfo:function(t){var i=this;this.$http.get("https://oa.dingcloud.com.cn/ding-ssm-demo/user/code/"+t.code).then(function(t){i.getUsermicrlist(t)})},getUsermicrlist:function(t){var i=this;this.$http.get("https://oa.dingcloud.com.cn/ding-ssm-demo/microapp/getmicrlist/"+t.userid).then(function(t){i.listBoxData=t.dayoffice.map(function(t){return t.icon=t.appIcon,t.url="dingtalk://dingtalkclient/action/switchtab?index=2&name=work&scene=1&corpid="+i.corpId+"&agentid="+t.agentId,t}),i.listBoxData2=t.integratedservices.map(function(t){return t.icon=t.appIcon,t.url="dingtalk://dingtalkclient/action/switchtab?index=2&name=work&scene=1&corpid="+i.corpId+"&agentid="+t.agentId,t}),i.listBoxTowData=t.daywork.map(function(t){return t.icon=t.appIcon,t.url="dingtalk://dingtalkclient/action/switchtab?index=2&name=work&scene=1&corpid="+i.corpId+"&agentid="+t.agentId,t}),i.listBoxTowData2=t.consultation.map(function(t){return t.icon=t.appIcon,t.url="dingtalk://dingtalkclient/action/switchtab?index=2&name=work&scene=1&corpid="+i.corpId+"&agentid="+t.agentId,t})})},getNotice:function(t){var i=this;this.$http.get("https://oa.dingcloud.com.cn/ding-ssm-demo/blackboard/getBlackboard/"+t.userid).then(function(t){t.dingtalk_smartwork_blackboard_listtopten_response&&(i.messageList=t.dingtalk_smartwork_blackboard_listtopten_response.result.blackboard_list.oapi_blackboard_vo)})},iniDingtalk:function(){var t=this;return new m.a(function(i,e){t.$http.get("https://oa.dingcloud.com.cn/ding-ssm-demo/ticket/getconfig").then(function(e){t._config=e,t.corpId=t._config.corpId,i(e)})}).then(function(t){return dt.a.config({agentId:t.agentid,corpId:t.corpId,timeStamp:t.timeStamp,nonceStr:t.nonceStr,signature:t.signature,type:1,jsApiList:["runtime.info","biz.contact.choose","device.notification.confirm","device.notification.alert","device.notification.prompt","biz.ding.post","biz.util.openLink"]}),new m.a(function(i,e){dt.a.runtime.permission.requestAuthCode({corpId:t.corpid,onSuccess:function(t){i(t),console.log(g()(t)),alert(g()(corpid))},onFail:function(t){e(t)}}),dt.a.error(function(t){e(err)})})})},initScroll:function(){}}},ht=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"sr__page-zhengfu"},[e("view-box",{ref:"viewBox"},[e("div",{ref:"wrapper",staticClass:"wrapper"},[e("div",{staticClass:"content",staticStyle:{flex:"1"}},[e("div",{staticStyle:{position:"relative"}},[e("swiper",{staticStyle:{width:"100%",margin:"0 auto"},attrs:{auto:"",interval:5e3,list:t.bannerList,height:"15.2rem","dots-class":"custom-bottom","dots-position":"center"}}),t._v(" "),t.weatherInfo.city?e("div",{staticClass:"weather-body"},[t._v("\n            "+t._s(t.weatherInfo.city)+"\n            "),e("img",{attrs:{src:t.weatherInfo.img1}}),t._v(" "),e("font",{attrs:{color:"#3ccba6"}},[t._v(t._s(t.weatherInfo.temp1))]),t._v("\n            ~\n            "),e("font",{attrs:{color:"#ED3F14"}},[t._v(t._s(t.weatherInfo.temp2))])],1):t._e()],1),t._v(" "),e("div",{staticClass:"sr__message-notice"},[e("div",{staticClass:"sr__message-icon-box"},[e("div",{staticClass:"sr__message-icon",style:{backgroundImage:"url("+t.imagesPath+"notice.png)"}})]),t._v(" "),e("div",{staticClass:"sr__message-box"},[e("swiper",{staticClass:"text-scroll",attrs:{auto:"",height:"30px",direction:"vertical",interval:5e3,"show-dots":!1}},t._l(t.messageList,function(i,n){return e("swiper-item",{key:n},[e("p",{staticClass:"sr__message-text"},[t._v(t._s(i.message))])])}))],1)]),t._v(" "),e("div",{staticClass:"sr__card"},[e("div",{staticClass:"sr__card-title"},[e("h3",[t._v("日程办公")])]),t._v(" "),e("ListBox",{attrs:{data:t.listBoxData,iconWidth:"2.2rem"}})],1),t._v(" "),e("div",{staticClass:"sr__card",staticStyle:{"margin-top":"0.8rem"}},[e("div",{staticClass:"sr__card-title"},[e("h3",[t._v("每日工作")])]),t._v(" "),e("ListBoxTwo",{attrs:{data:t.listBoxTowData,iconWidth:"2rem"}})],1),t._v(" "),e("div",{staticClass:"sr__card",staticStyle:{"margin-top":"0.8rem"}},[e("div",{staticClass:"sr__card-title"},[e("h3",[t._v("综合服务")])]),t._v(" "),e("ListBox",{attrs:{data:t.listBoxData2,iconWidth:"2.2rem"}})],1),t._v(" "),e("div",{staticClass:"sr__card",staticStyle:{"margin-top":"0.8rem"}},[e("div",{staticClass:"sr__card-title"},[e("h3",[t._v("我要咨询")])]),t._v(" "),e("ListBoxTwo",{attrs:{data:t.listBoxTowData2,iconWidth:"2.2rem"}})],1)])])])],1)},pt=[],gt={render:ht,staticRenderFns:pt},ft=gt,mt=e("VU/8"),vt=r,_t=mt(ut,ft,!1,vt,"data-v-b22cc116",null),wt=_t.exports;l.a.use(h.a);var xt=new h.a({routes:[{path:"/",redirect:"/zhengfu"},{path:"/zhengFu",name:"ZhengFu",component:wt}]}),bt={name:"app"},yt=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},kt=[],It={render:yt,staticRenderFns:kt},Bt=It,Ct=e("VU/8"),$t=c,Tt=Ct(bt,Bt,!1,$t,null,null),St=Tt.exports,Lt=e("mtWM"),Dt=e.n(Lt);l.a.use(h.a),Dt.a.interceptors.response.use(function(t){switch(t.status){case 200:return t.data}},function(t){switch(t.response.status){case 404:console.log("404 err");break;case 500:console.log("500 err");break;default:console.log("unknow err")}}),u.a.attach(document.body),l.a.config.productionTip=!1,l.a.prototype.$http=Dt.a,new l.a({router:xt,render:function(t){return t(St)}}).$mount("#app-box")},Vd0i:function(t,i){},ZUNL:function(t,i){},ZqRs:function(t,i){},aaY7:function(t,i){},k0ip:function(t,i){t.exports=dd},mBL4:function(t,i){}},["NHnr"]);
//# sourceMappingURL=app.6cc9c9f31842bd08857d.js.map