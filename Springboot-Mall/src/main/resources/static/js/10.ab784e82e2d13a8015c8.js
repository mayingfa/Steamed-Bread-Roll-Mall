webpackJsonp([10],{DMso:function(t,s){},nKos:function(t,s,o){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e={name:"MallProduct",components:{MallFooter:o("loKF").a},data:function(){return{keyword:null,by:null,byC:null,productInfo:null}},methods:{buy:function(t){null===this.$store.state.user?(this.$notify({title:"警告",message:"请先登录",type:"warning"}),this.$router.push({path:"/loginForm"})):this.$router.push({path:"/MallPurchase",query:{id:t}})}},created:function(){var t=this;null!=this.$route.query.keyword&&(this.keyword=this.$route.query.keyword),null!=this.$route.query.by&&(this.by=this.$route.query.by),null!==this.keyword&&null!=this.by&&("name"===this.by?(this.byC="商品名称",this.$http.post("/product/findAllLikeName?keyWord="+this.keyword).then(function(s){200===s.data.code&&(t.productInfo=s.data.data)}).catch(function(t){console.log(t)})):"type"===this.by?(this.byC="商品类型",this.$http.post("/product/findAllLikeType?keyWord="+this.keyword).then(function(s){200===s.data.code&&(t.productInfo=s.data.data)}).catch(function(t){console.log(t)})):"brand"===this.by&&(this.byC="商品品牌",this.$http.post("/product/findAllLikeBrand?keyWord="+this.keyword).then(function(s){200===s.data.code&&(t.productInfo=s.data.data)}).catch(function(t){console.log(t)})))}},i={render:function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"mall-product"},[o("el-backtop",{staticStyle:{height:"50px",width:"50px"},attrs:{target:".mall-product"}},[o("i",{staticClass:"el-icon-top"})]),t._v(" "),o("div",{staticClass:"mall-info clearfix"},[o("div",{staticClass:"product-hd"},[o("div",{staticClass:"product-box"},[o("div",{staticStyle:{position:"absolute",padding:"23px"}},[o("span",[t._v(t._s(this.byC))]),t._v(" "),o("span",{staticStyle:{"padding-right":"12px"}},[t._v(":")]),t._v(" "),o("span",{staticStyle:{color:"#FF7918",cursor:"pointer"}},[t._v(t._s(this.keyword))])])])]),t._v(" "),t.productInfo?o("div",{staticClass:"mall-container clearfix"},[0!==t.productInfo.length?o("ul",t._l(this.productInfo,function(s,e){return o("li",{key:e,on:{click:function(o){return t.buy(s.productId)}}},[o("div",{staticStyle:{float:"left",width:"44%",height:"100%"}},[o("el-image",{staticStyle:{width:"100%"},attrs:{src:s.productUrl}})],1),t._v(" "),o("div",{staticClass:"pro-con"},[o("span",{staticClass:"name",attrs:{title:s.productName}},[t._v(t._s(s.productName))]),t._v(" "),o("span",{staticClass:"desc"},[t._v(t._s(s.productDescribe))]),t._v(" "),o("span",{staticClass:"price"},[t._v(t._s(s.outPrice)+"元")]),t._v(" "),o("div",{staticStyle:{position:"absolute",bottom:"30px"}},[o("el-button",{staticStyle:{padding:"9px 29px"},attrs:{size:"small",type:"danger"}},[null!=t.$store.state.user?o("span",[t._v("立即抢购")]):o("span",[t._v("登录后抢购")])])],1)])])}),0):o("div",{staticClass:"no-product"},[o("el-image",{staticStyle:{width:"400px",height:"388px"},attrs:{src:"https://spring-oss.oss-cn-beijing.aliyuncs.com/images/img/noproduct.png"}})],1)]):t._e()]),t._v(" "),o("MallFooter")],1)},staticRenderFns:[]};var a=o("VU/8")(e,i,!1,function(t){o("DMso")},null,null);s.default=a.exports}});
//# sourceMappingURL=10.ab784e82e2d13a8015c8.js.map