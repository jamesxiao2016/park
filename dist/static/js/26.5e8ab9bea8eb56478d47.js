webpackJsonp([26],{"2+Wi":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o("mtWM"),i=o.n(a),n=o("7+uW"),s=o("1sNz"),l=o("63CM"),r=o("HD9R"),c=o("YxJB"),p=o("3Lt7"),v=o("ABCa");n.a.component(r.a.name,r.a);v.a,s.a,r.a,c.a,p.a,l.a;n.a.component(r.a.name,r.a);var d={data:function(){return{contents:{rights:"评分说明",title:"遵纪守法评分"},list:[],isYellow:!1,showPop:!1}},filters:{Upper:function(t){try{if("N"===t)throw"去处理";if("Y"===t)throw"已审核";if(0===t)throw"待审核"}catch(t){return t}},Upper1:function(t){try{if("N"===t)throw"yellowB";if("Y"===t)throw"yellowC"}catch(t){return t}}},components:{XHeader:v.a,ViewBox:s.a,Popup:r.a,Flexbox:c.a,FlexboxItem:p.a},directives:{TransferDom:l.a},methods:{getlist:function(){var t=this;i()({method:"get",url:"pscoreparty/getDakDetialByDepartmentId",params:{departmentId:1}}).then(function(e){console.log(e),t.list=e.data}).catch(function(t){console.log(t)})},changeItem:function(t){console.log("11111",t),this.$router.push({path:"lawAbidingDetail",name:"lawAbidingDetail",params:{name:encodeURI(t.name),userId:1111}})},showMenu:function(){this.showPop=!0},know:function(){this.showPop=!1}},mounted:function(){this.getlist()}},u=o("XyMi");var f=function(t){o("Ga5r")},h=Object(u.a)(d,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{height:"100%"}},[o("view-box",{ref:"viewBox",attrs:{"body-padding-top":".46rem"}},[o("x-header",{staticStyle:{width:"100%",position:"absolute",left:"0",top:"0","z-index":"100"},attrs:{slot:"header"},slot:"header"},[t._v("\n                "+t._s(t.contents.title)),o("a",{attrs:{slot:"right"},on:{click:t.showMenu},slot:"right"},[t._v("评分说明")])]),t._v(" "),o("div",{staticClass:"points-table"},[o("flexbox",{attrs:{gutter:0}},[o("flexbox-item",[t._v("序号")]),t._v(" "),o("flexbox-item",[t._v("党员姓名")]),t._v(" "),o("flexbox-item",[t._v("分数")]),t._v(" "),o("flexbox-item",[t._v("一票否决")])],1),t._v(" "),t._l(t.list,function(e,a){return o("flexbox",{key:a,attrs:{gutter:0}},[o("flexbox-item",[t._v(t._s(a+1))]),t._v(" "),o("flexbox-item",[t._v(t._s(e.approvedName))]),t._v(" "),o("flexbox-item",[t._v(t._s(e.typetotalscore))]),t._v(" "),o("flexbox-item",[o("input",{staticClass:"btnSub",class:t._f("Upper1")(e.tempint),attrs:{type:"button",value:t._f("Upper")(e.validYn)},on:{click:function(o){t.changeItem(e)}}})])],1)})],2),t._v(" "),o("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[o("popup",{attrs:{position:"left",width:"100%"},model:{value:t.showPop,callback:function(e){t.showPop=e},expression:"showPop"}},[o("div",{staticClass:"middle"},[o("div",{staticClass:"middle-top",on:{click:function(e){t.show()}}},[t._v("评分说明")]),t._v(" "),o("div",{staticClass:"middle-content"},[o("p",[t._v("                            1、党员在支部民主评议党员活动中，被评定为“不合格党员”或受限期改正等组织处置的扣20分；"),o("br"),t._v("\n                            2、党员受到党内纪律处分或行政处罚以上的，实行“一票否决”。\n\t\t\t\t\t\t")])]),t._v(" "),o("div",{staticClass:"knowBtn",on:{click:t.know}},[t._v("我知道了")])])])],1)],1)],1)},[],!1,f,"data-v-8595990e",null);e.default=h.exports},Ga5r:function(t,e){}});
//# sourceMappingURL=26.5e8ab9bea8eb56478d47.js.map