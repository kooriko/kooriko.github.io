webpackJsonp([1],{A0WE:function(t,a){},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("MVMM"),i={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page"},[e("div",{staticClass:"page_image",class:[t.slideTo&&t.currentPage===t.num?"page_image--to"+t.slideTo:"",t.isFull?"is-full":"is-half"],style:{backgroundImage:"url("+t.imageSrc+")"}}),t._v(" "),e("div",{staticClass:"page_content"},[t._t("default")],2)])},staticRenderFns:[]};var n={name:"App",components:{page:e("Z0/y")({props:["currentPage","imageSrc","isFull","num"],data:function(){return{slideTo:""}},watch:{currentPage:function(t,a){var e=this;this.$nextTick(function(){e.slideTo=a>t?"top":"bottom"})}}},i,!1,function(t){e("RuT1")},"data-v-11d88850",null).exports},data:function(){return{page:1,startPoint:0,pageChangable:!1}},methods:{touchstartHandle:function(t){this.startPoint=t.targetTouches[0].clientY,this.pageChangable=!0},touchmoveHandle:function(t){var a=t.targetTouches[0].clientY;a-this.startPoint>50?(this.changePage("prev"),this.pageChangable=!1):a-this.startPoint<-50&&(this.changePage("next"),this.pageChangable=!1),t.preventDefault()},scrollHandle:function(t){t.preventDefault()},changePage:function(t){if(this.pageChangable)if("next"===t){if(this.page+1>4)return;++this.page}else{if(!(this.page-1))return;--this.page}}}},r={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"viewport",on:{touchstart:t.touchstartHandle,touchmove:t.touchmoveHandle,scroll:t.scrollHandle}},[e("ul",{staticClass:"pages",style:"transform: translateY(-"+100*(this.page-1)+"vh)"},[e("page",{attrs:{currentPage:t.page,imageSrc:"./static/page1.jpg",num:1}},[e("h1",{staticClass:"page_title"},[t._v("国内一流互联网在职工程师的前端技术服务")])]),t._v(" "),e("page",{attrs:{currentPage:t.page,imageSrc:"./static/page2.jpg",num:2}},[e("h1",{staticClass:"page_title"},[t._v("与众不同的技术人")]),t._v(" "),e("div",{staticClass:"details"},[e("div",{staticClass:"detail"},[e("div",[t._v("可靠")]),t._v(" "),e("div",[t._v("RELIABLE")])]),t._v(" "),e("div",{staticClass:"detail"},[e("div",[t._v("简单")]),t._v(" "),e("div",[t._v("PURE")])]),t._v(" "),e("div",{staticClass:"detail"},[e("div",[t._v("平等")]),t._v(" "),e("div",[t._v("EQUALITY")])])])]),t._v(" "),e("page",{attrs:{currentPage:t.page,imageSrc:"./static/page3.jpg",num:3}},[e("h3",{staticClass:"page_title"},[t._v("根据客户需求出具完整的项目原型设计与交互流程，在确认后将进一步出具UI设计稿，并与客户、开发双向沟通调整细节。如果已有完备的设计稿，可以跳过此环节。")])]),t._v(" "),e("page",{attrs:{currentPage:t.page,imageSrc:"./static/page4.gif",num:4,isFull:!0}},[e("h1",{staticClass:"page_title"},[t._v("现在就开始试试看吧！")]),t._v(" "),e("img",{staticClass:"foo",attrs:{src:"./static/foo.png",width:"100",height:"100"}})])],1)])},staticRenderFns:[]};var c=e("Z0/y")(n,r,!1,function(t){e("A0WE")},null,null).exports,l=e("zO6J");s.a.use(l.a);var g=new l.a({routes:[]});s.a.config.productionTip=!1,new s.a({el:"#app",router:g,components:{App:c},template:"<App/>"})},RuT1:function(t,a){}},["NHnr"]);