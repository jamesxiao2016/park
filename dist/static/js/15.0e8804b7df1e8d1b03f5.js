webpackJsonp([15],{CZ7w:function(t,s){},JhwI:function(t,s){},dA7d:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("5enu"),i={data:function(){return{}},components:{},mounted:function(){},methods:{dataPick:function(t){return Date.prototype.toLocaleString=function(){return this.getFullYear()+"年"+(this.getMonth()+1)+"月"+this.getDay()+"日"},new Date(t).toLocaleString()}},props:["list"]},o=a("XyMi");var n=function(t){a("JhwI")},r=Object(o.a)(i,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"detail"},t._l(t.list,function(s,e){return a("div",{key:e,staticClass:"allLine"},[a("div",[a("span",{staticClass:"colorL"},[t._v("时间：")]),t._v(" "),a("span",{staticClass:"colorW"},[t._v(t._s(t.dataPick(s.scoreTime)))])]),t._v(" "),a("div",[a("span",{staticClass:"colorL"},[t._v("积分类型：")]),t._v(" "),a("span",{staticClass:"colorW"},[t._v(t._s(s.detailTitle))])]),t._v(" "),a("div",[a("span",{staticClass:"colorL"},[t._v("积分变动：")]),t._v(" "),a("span",{staticClass:"colorW",class:[s.score>=0?"colored":"colorGreen"]},[t._v(t._s(s.score))])]),t._v(" "),a("div",[a("span",{staticClass:"colorL"},[t._v("审核人：")]),t._v(" "),a("span",{staticClass:"colorW"},[t._v(t._s(s.approvedName))])])])}))},[],!1,n,"data-v-a2b88ad4",null).exports,c=a("1sNz"),l=a("mtWM"),d=a.n(l),v=(e.a,c.a,{data:function(){return{contents:{rights:"",title:"积分获取明细"},list:[],temporarily:!1}},components:{"r-header":e.a,gain:r,ViewBox:c.a},methods:{details:function(){var t=this;d.a.get("pscoreparty/queryByUserId",{params:{userid:this.$route.params.userid,year:this.$route.params.year}}).then(function(s){console.log(s),0==s.data.length&&(t.temporarily=!0),t.list=s.data}).catch(function(t){console.log("fail"+t)})}},mounted:function(){this.details()}});var u=function(t){a("CZ7w")},p=Object(o.a)(v,function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticStyle:{height:"100%",width:"100%","overflow-x":"hidden"}},[s("view-box",{ref:"viewBox",attrs:{"body-padding-top":".46rem"}},[s("r-header",{attrs:{rfs:this.contents}}),this._v(" "),s("gain",{attrs:{list:this.list}}),this._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:this.temporarily,expression:"temporarily"}],staticClass:"temp"},[this._v("暂无数据。。。")])],1)],1)},[],!1,u,"data-v-4bab55e8",null);s.default=p.exports}});
//# sourceMappingURL=15.0e8804b7df1e8d1b03f5.js.map