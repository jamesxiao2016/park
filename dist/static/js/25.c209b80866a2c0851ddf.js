webpackJsonp([25],{Pu2Y:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("mtWM"),s=n.n(a),i=n("ABCa"),r=n("YxJB"),o=n("3Lt7"),l=n("1sNz"),c=n("17Ff"),u=(i.a,r.a,o.a,l.a,{components:{XHeader:i.a,Flexbox:r.a,FlexboxItem:o.a,ViewBox:l.a},data:function(){return{contents:[],navName:{},years:(new Date).getFullYear(),select:{infos:"党员信息",acin:!1},userId:c.a.get("userId"),departmentname:"",person:null,partyBranch:""}},methods:{sub:function(t){this.$router.push({path:"/party/partyPointDetail",name:"partyPointDetail",params:{userid:t.id}})},infor:function(){var t=this;s.a.get("ppartymember/queryByDepartmentId",{params:{departmentid:this.$store.getters.user.departmentid}}).then(function(e){t.contents=e.data,t.departmentname=t.contents[0].departmentname,t.person=t.contents.length}).catch(function(t){console.log("fail"+t)})},nav:function(){var t=this;s.a.get("pdepartment/queryById",{params:{departmentid:this.$store.getters.user.departmentid}}).then(function(e){t.navName=e.data}).catch(function(t){console.log("fail"+t)})},judge:function(t){return"1"===t?"男":"女"}},mounted:function(){this.infor(),this.nav(),this.judge()}}),f=n("XyMi");var m=function(t){n("QYkC")},d=Object(f.a)(u,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-body party-information"},[n("x-header",[t._v("\n        党务信息\n    ")]),t._v(" "),n("flexbox",{attrs:{orient:"vertical",align:"initial"}},[n("view-box",[n("div",{staticClass:"header"},[n("div",{staticClass:"group-name"},[t._v("\n                    "+t._s(t.departmentname)+"\n                ")]),t._v(" "),n("flexbox",{attrs:{gutter:0}},[n("flexbox-item",[t._v("支部人数:"+t._s(t.person)+"人")])],1)],1),t._v(" "),n("div",{staticClass:"points-table"},[n("flexbox",{staticClass:"colors",attrs:{gutter:0}},[n("flexbox-item",[t._v("姓名")]),t._v(" "),n("flexbox-item",[t._v("性别")]),t._v(" "),n("flexbox-item",[t._v("年龄")]),t._v(" "),n("flexbox-item",[t._v("积分")])],1),t._v(" "),t._l(t.contents,function(e,a){return n("flexbox",{key:a,staticClass:"diffrent",attrs:{gutter:0},nativeOn:{click:function(n){t.sub(e)}}},[n("flexbox-item",[t._v(t._s(e.name))]),t._v(" "),n("flexbox-item",[t._v(t._s(t.judge(e.sex)))]),t._v(" "),n("flexbox-item",[t._v(t._s(e.age))]),t._v(" "),n("flexbox-item",[t._v(t._s(e.totalscore||0))])],1)})],2)])],1)],1)},[],!1,m,null,null);e.default=d.exports},QYkC:function(t,e){}});
//# sourceMappingURL=25.c209b80866a2c0851ddf.js.map