webpackJsonp([30],{uL2o:function(t,e){},uYR3:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("mtWM"),i=a.n(s),o=a("ABCa"),n=a("1HIy"),r=a("17Ff"),c=a("YxJB"),l=a("3Lt7"),u=a("2sLL"),v=a("mzja"),d=a("63CM"),_=(d.a,o.a,n.a,c.a,l.a,u.a,v.a,{directives:{TransferDom:d.a},components:{XHeader:o.a,GroupTitle:n.a,Flexbox:c.a,FlexboxItem:l.a,XButton:u.a,Alert:v.a},filters:{formatDuring:function(t){return""==t||null==t||void 0==t?t="无":(Date.prototype.toLocaleString=function(){var t=this.getMonth()+1;t<10&&(t="0"+t);var e=this.getDate();e<10&&(e="0"+e);var a=this.getHours();a<10&&(a="0"+a);var s=this.getMinutes();return s<10&&(s="0"+s),this.getFullYear()+"."+t+"."+e+" "+a+":"+s},new Date(t).toLocaleString())}},data:function(){return{departmentid:this.$store.getters.user.departmentid,active:[],show:!1,msg:"",userId:r.a.get("userId"),isActive:!1}},methods:{getActivityMore:function(){var t=this;i()({method:"get",url:"active/getParticipateActive",params:{pageNum:1,pageSize:200,departmentid:this.departmentid,userId:this.$store.getters.user.userid}}).then(function(e){console.log(e.data.list),t.active=e.data.list}).catch(function(t){console.log(t)})},submit:function(t){var e=this;i()({method:"post",url:"active/participate",params:{userId:this.userId,activeId:t,departmentid:this.departmentid}}).then(function(t){e.msg=t.msg,e.show=!0}).catch(function(t){console.log(t)})},submit1:function(t){this.$vux.alert.show({title:"请勿重复报名"})},onHide:function(){window.location.reload()},onShow:function(){console.log("on show")},datePick:function(t){return Date.prototype.toLocaleString=function(){return this.getFullYear()+"."+(this.getMonth()+1)+"."+this.getDate()},new Date(t).toLocaleString()}},mounted:function(){this.getActivityMore()}}),m=a("XyMi");var p=function(t){a("uL2o")},h=Object(m.a)(_,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-body disabled-tabbar"},[a("x-header",[t._v("全部活动")]),t._v(" "),a("div",{staticClass:"group-item"},t._l(t.active,function(e,s){return a("div",{key:s,staticClass:"allLine"},[a("div",[a("span",{staticClass:"colorL"},[t._v("活动名称：")]),t._v(" "),a("span",{staticClass:"colorW"},[t._v(t._s(e.activeName))])]),t._v(" "),a("div",[a("span",{staticClass:"colorL"},[t._v("活动时间：")]),t._v(" "),a("span",{staticClass:"colorW"},[t._v(t._s(t._f("formatDuring")(e.startTime))+"~"+t._s(t._f("formatDuring")(e.endTime)))])]),t._v(" "),a("div",[a("span",{staticClass:"colorL"},[t._v("地点：")]),t._v(" "),a("span",{staticClass:"colorW"},[t._v(t._s(e.activePace))])]),t._v(" "),a("div",[a("span",{staticClass:"colorL"},[t._v("发起人：")]),t._v(" "),a("span",{staticClass:"colorW"},[t._v(t._s(e.activeCreatePeopleName))])]),t._v(" "),a("div",[a("span",{staticClass:"colorL"},[t._v("活动内容：")]),t._v(" "),a("span",{staticClass:"colorW"},[t._v(t._s(e.active_Context))])]),t._v(" "),2==e.signupstatus?a("div",{staticClass:"book"},[a("a",{on:{click:function(a){t.submit(e.id)}}},[t._v("报名")])]):t._e(),t._v(" "),1==e.signupstatus?a("div",{staticClass:"book"},[a("a",{staticStyle:{"background-color":"#8b8b8b"},on:{click:function(a){t.submit1(e.id)}}},[t._v("已报名")])]):t._e(),t._v(" "),a("div",{staticClass:"grayLine"})])})),t._v(" "),a("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[a("alert",{attrs:{title:t.msg},on:{"on-show":t.onShow,"on-hide":t.onHide},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[t._v("谢谢")])],1)],1)},[],!1,p,"data-v-679cab8c",null);e.default=h.exports}});
//# sourceMappingURL=30.db4e55b2ad57442259a5.js.map