webpackJsonp([28],{eVEZ:function(t,e){},uYR3:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("mtWM"),s=a.n(i),o=a("ABCa"),n=a("1HIy"),r=a("17Ff"),c=a("YxJB"),l=a("3Lt7"),u=a("2sLL"),d=a("mzja"),v=a("63CM"),h=(v.a,o.a,n.a,c.a,l.a,u.a,d.a,{directives:{TransferDom:v.a},components:{XHeader:o.a,GroupTitle:n.a,Flexbox:c.a,FlexboxItem:l.a,XButton:u.a,Alert:d.a},filters:{formatDuring:function(t){return Date.prototype.toLocaleString=function(){return this.getFullYear()+"年"+(this.getMonth()+1)+"月"+this.getDate()+"日"+this.getHours()+"时"+this.getMinutes()+"分"},new Date(t).toLocaleString()}},data:function(){return{departmentid:this.$store.getters.user.departmentid,active:[],show:!1,msg:"",userId:r.a.get("userId"),isActive:!1}},methods:{getActivityMore:function(){var t=this;s()({method:"get",url:"active/getParticipateActive",params:{pageNum:1,pageSize:200,departmentid:this.departmentid,userId:this.$store.getters.user.userid,all:"Y"}}).then(function(e){t.active=e.data.list}).catch(function(t){console.log(t)})},submit:function(t){var e=this;s()({method:"post",url:"active/participate",params:{userId:this.userId,activeId:t,departmentid:this.departmentid}}).then(function(t){e.msg=t.msg,e.show=!0}).catch(function(t){console.log(t)})},submit1:function(t){this.$vux.alert.show({title:"请勿重复报名"})},onHide:function(){window.location.reload()},onShow:function(){console.log("on show")},datePick:function(t){return Date.prototype.toLocaleString=function(){return this.getFullYear()+"."+(this.getMonth()+1)+"."+this.getDate()},new Date(t).toLocaleString()}},mounted:function(){this.getActivityMore()}}),m=a("XyMi");var p=function(t){a("eVEZ")},_=Object(m.a)(h,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-body disabled-tabbar"},[a("x-header",[t._v("全部活动")]),t._v(" "),a("div",{staticClass:"group-item"},t._l(t.active,function(e,i){return a("div",{key:i,staticClass:"allLine"},[a("div",[a("span",{staticClass:"colorL"},[t._v("活动时间：")]),t._v(" "),a("span",{staticClass:"colorW"},[t._v(t._s(t._f("formatDuring")(e.startTime))+"~"+t._s(t._f("formatDuring")(e.endTime)))])]),t._v(" "),a("div",[a("span",{staticClass:"colorL"},[t._v("地点：")]),t._v(" "),a("span",{staticClass:"colorW"},[t._v(t._s(e.activePace))])]),t._v(" "),a("div",[a("span",{staticClass:"colorL"},[t._v("发起人：")]),t._v(" "),a("span",{staticClass:"colorW"},[t._v(t._s(e.activeCreatePeopleName))])]),t._v(" "),a("div",[a("span",{staticClass:"colorL"},[t._v("活动内容：")]),t._v(" "),a("span",{staticClass:"colorW"},[t._v(t._s(e.activeContext))])]),t._v(" "),2==e.signupstatus?a("div",{staticClass:"book"},[a("a",{on:{click:function(a){t.submit(e.id)}}},[t._v("报名")])]):t._e(),t._v(" "),1==e.signupstatus?a("div",{staticClass:"book"},[a("a",{staticStyle:{"background-color":"#8b8b8b"},on:{click:function(a){t.submit1(e.id)}}},[t._v("已报名")])]):t._e(),t._v(" "),a("div",{staticClass:"grayLine"})])})),t._v(" "),a("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[a("alert",{attrs:{title:t.msg},on:{"on-show":t.onShow,"on-hide":t.onHide},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[t._v("谢谢")])],1)],1)},[],!1,p,"data-v-628176f0",null);e.default=_.exports}});
//# sourceMappingURL=28.616516260014bfa6ff75.js.map