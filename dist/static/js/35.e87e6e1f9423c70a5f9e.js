webpackJsonp([35],{"1TZ1":function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("mtWM"),i=s.n(e),n=s("ABCa"),r=s("1HIy"),d=s("YxJB"),_=s("3Lt7"),c=s("2sLL"),v=(n.a,r.a,d.a,_.a,c.a,{components:{XHeader:n.a,GroupTitle:r.a,Flexbox:d.a,FlexboxItem:_.a,XButton:c.a},data:function(){return{departmentid:this.$store.getters.user.departmentid,partyBranch:"",address:"",honor:"",people:""}},methods:{getDepartment:function(){var t=this;i()({method:"get",url:"/dangjian/pdepartment/queryById",params:{departmentid:this.departmentid}}).then(function(a){t.partyBranch=a.data.partyBranch,t.address=a.data.address,t.honor=a.data.honor,t.people=a.data.people,console.log(a.data)}).catch(function(t){console.log(t)})}},mounted:function(){this.getDepartment()}}),l=s("XyMi");var o=function(t){s("FKuA")},p=Object(l.a)(v,function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"page-body"},[a("x-header",{attrs:{"left-options":{showBack:!1}}},[this._v("\n        花旗银行第二党支部\n    ")]),this._v(" "),this._m(0),this._v(" "),this._m(1)],1)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"mainbox"},[s("div",{staticStyle:{padding:"2vw 3.5vw 2vw"}},[s("table",{staticClass:"table",attrs:{width:"100%"}},[s("tr",[s("td",{attrs:{width:"100"}},[t._v("姓名：")]),t._v(" "),s("td",{staticClass:"f_b"},[t._v("张海丽")])]),t._v(" "),s("tr",[s("td",[t._v("现有党支部：")]),t._v(" "),s("td",{staticClass:"f_b"},[t._v("金领驿站第一支部")])]),t._v(" "),s("tr",[s("td",[t._v("党支部书记：")]),t._v(" "),s("td",{staticClass:"f_b"},[t._v("韩书记")])]),t._v(" "),s("tr",[s("td",[t._v("现有积分：")]),t._v(" "),s("td",{staticClass:"f_b"},[s("span",{staticClass:"red"},[t._v("43")])])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"mainbox"},[s("div",{staticClass:" clearfix p15 display"},[s("span",{staticClass:"fl weui-cell__bd1"},[t._v("积分获取明细")])]),t._v(" "),s("div",{staticStyle:{padding:"2vw 3.5vw 6vw"}},[s("table",{staticClass:"table",attrs:{width:"100%"}},[s("tr",[s("td",{attrs:{width:"100"}},[t._v("获取时间：")]),t._v(" "),s("td",{staticClass:"f_b"},[t._v("2018.05.27")])]),t._v(" "),s("tr",[s("td",[t._v("积分类型：")]),t._v(" "),s("td",{staticClass:"f_b"},[t._v("党费缴纳党费缴纳党费缴纳")])]),t._v(" "),s("tr",[s("td",[t._v("审核人：")]),t._v(" "),s("td",{staticClass:"f_b"},[t._v("支部书记")])]),t._v(" "),s("tr",[s("td",{attrs:{valign:"top"}},[t._v("积分变动：")]),t._v(" "),s("td",{staticClass:"f_b"},[t._v("+5")])])])])])}],!1,o,"data-v-357430cc",null);a.default=p.exports},FKuA:function(t,a){}});
//# sourceMappingURL=35.e87e6e1f9423c70a5f9e.js.map