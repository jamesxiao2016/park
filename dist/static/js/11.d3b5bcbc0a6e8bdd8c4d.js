webpackJsonp([11],{JsMG:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("mtWM"),s=a.n(i),n=a("ABCa"),o=a("YxJB"),l=a("3Lt7"),c=a("mzja"),r=a("17Ff"),v=a("1DHf"),u=a("rHil"),d=a("2sLL"),_=a("ignk"),f=a("63CM"),m=(f.a,n.a,o.a,l.a,v.a,u.a,d.a,_.a,c.a,{directives:{TransferDom:f.a},components:{XHeader:n.a,Flexbox:o.a,FlexboxItem:l.a,Cell:v.a,Group:u.a,XButton:d.a,XTable:_.a,Alert:c.a},data:function(){return{number1:1,number2:1,userId:r.a.get("userId"),startTime1:"",activeTitle:"",activePace:"",activeCreatePeople:"",activeId:"",activeContext:"",show:!1,activeComplete:"",isActive:!0,signupstatus:"",msg:""}},filters:{formatDuring:function(t){return Date.prototype.toLocaleString=function(){return this.getFullYear()+"年"+(this.getMonth()+1)+"月"+this.getDate()+"日"+this.getHours()+"时"+this.getMinutes()+"分"},new Date(t).toLocaleString()}},methods:{getActivity:function(){var t=this;s()({method:"get",url:"active/getParticipateActive",params:{pageNum:1,pageSize:1,userId:this.$store.getters.user.userid}}).then(function(e){t.activeTitle=e.data.list[0].activeName,t.startTime1=e.data.list[0].startTime,t.endTime1=e.data.list[0].endTime,t.activePace=e.data.list[0].activePace,t.activeCreatePeople=e.data.list[0].activeCreatePeople,t.activeContext=e.data.list[0].activeContext,t.activeId=e.data.list[0].id,t.signupstatus=e.data.list[0].signupstatus}).catch(function(t){console.log(t)})},gettimes1:function(){var t=this;s()({method:"post",url:"active/getParticipateCount",params:{userId:this.userId,activeType:3,year:(new Date).getFullYear()}}).then(function(e){t.number1=e.data}).catch(function(t){console.log(t)})},gettimes2:function(){var t=this;s()({method:"post",url:"active/getParticipateCount",params:{userId:this.userId,activeType:5,year:(new Date).getFullYear()}}).then(function(e){t.number2=e.data}).catch(function(t){console.log(t)})},submit:function(){var t=this;s()({method:"post",url:"active/participate",params:{userId:this.userId,activeId:this.activeId}}).then(function(e){t.msg=e.msg,t.show=!0}).catch(function(t){console.log(t)})},getAlreadyActive:function(){var t=this;s()({method:"get",url:"active/getEnjoyActiveByUserId",params:{userId:this.userId,pageNum:1,pageSize:4}}).then(function(e){t.activeComplete=e.data}).catch(function(t){console.log(t)})},onHide:function(){window.location.reload()},onShow:function(){console.log("on show")},submit1:function(){this.$vux.alert.show({title:"请勿重复报名"})}},mounted:function(){this.getActivity(),this.gettimes1(),this.gettimes2(),this.getAlreadyActive()}}),h=a("XyMi");var g=function(t){a("ZD87")},p=Object(h.a)(m,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-body"},[a("x-header",{attrs:{"left-options":{showBack:!1}}},[t._v("\n        党员活动\n    ")]),t._v(" "),a("flexbox",{attrs:{orient:"vertical"}},[a("flexbox-item",[a("section",{staticClass:"mainbox"},[a("div",{staticClass:"barbg"},[t._v("\n                    年度共参与组织活动："),a("span",{staticStyle:{display:"inline"}},[t._v(t._s(t.number1))]),t._v(" 次\n                ")]),t._v(" "),a("div",{staticClass:"barbg"},[t._v("\n                    年度共参与金领驿站活动："),a("span",{staticStyle:{display:"inline"}},[t._v(t._s(t.number2))]),t._v(" 次\n                ")])]),t._v(" "),a("div",{staticClass:"grayLine"})])],1),t._v(" "),a("flexbox",{attrs:{orient:"vertical"}},[a("section",{staticClass:"mainbox1"},[a("div",{staticClass:" clearfix p15 display"},[a("span",{staticClass:"fl weui-cell__bd1"},[t._v("党员生活通知")]),t._v(" "),a("a",{staticClass:"fRight"},[a("router-link",{attrs:{slot:"right",to:{name:"activeMore"}},slot:"right"},[t._v("查看全部 >")])],1)]),t._v(" "),a("div",{staticClass:"content"},[a("table",{staticClass:"table",attrs:{width:"100%"}},[a("tr",[a("td",{attrs:{width:"100"}},[t._v("标题：")]),t._v(" "),a("td",{staticClass:"f_b"},[t._v(t._s(t.activeTitle))])]),t._v(" "),a("tr",[a("td",{attrs:{width:"100"}},[t._v("活动时间：")]),t._v(" "),a("td",{staticClass:"f_b"},[t._v(t._s(t._f("formatDuring")(t.startTime1))+"~"+t._s(t._f("formatDuring")(t.endTime1)))])]),t._v(" "),a("tr",[a("td",[t._v("地点：")]),t._v(" "),a("td",{staticClass:"f_b"},[t._v(t._s(t.activePace))])]),t._v(" "),a("tr",[a("td",[t._v("发起人：")]),t._v(" "),a("td",{staticClass:"f_b"},[t._v(t._s(t.activeCreatePeople))])]),t._v(" "),a("tr",[a("td",{attrs:{valign:"top"}},[t._v("活动内容：")]),t._v(" "),a("td",{staticClass:"f_b"},[t._v(t._s(t.activeContext))])])])]),t._v(" "),2==t.signupstatus?a("div",{staticClass:"book"},[a("a",{staticStyle:{"background-color":"#B93647"},on:{click:function(e){t.submit()}}},[t._v("报名")])]):t._e(),t._v(" "),1==t.signupstatus?a("div",{staticClass:"book"},[a("a",{staticStyle:{"background-color":"#8b8b8b"},on:{click:function(e){t.submit1()}}},[t._v("已报名")])]):t._e()])]),t._v(" "),a("flexbox",{attrs:{orient:"vertical"}},[a("flexbox-item",[a("section",{staticClass:"mainbox "},[a("div",{staticClass:"p15"},[a("div",{staticClass:" clearfix  display"},[a("span",{staticClass:"fl weui-cell__bd1"},[t._v("已参与组织生活")]),t._v(" "),a("a",{staticClass:" fAll",attrs:{href:"#"}},[a("router-link",{attrs:{slot:"right",to:{name:"Active"}},slot:"right"},[t._v("查看全部 >")])],1)]),t._v(" "),a("ul",{staticClass:"news"},t._l(t.activeComplete,function(e,i){return a("li",{key:i},[a("a",{staticClass:" display clearfix "},[a("div",{staticClass:" fl"},[t._v(t._s(e.activeName))]),t._v(" "),a("div",{staticClass:" fr"},[t._v(t._s(t._f("formatDuring")(e.endTime))),a("span",{staticClass:"rightBtn"})])])])}))])])])],1),t._v(" "),a("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[a("alert",{attrs:{title:t.msg},on:{"on-show":t.onShow,"on-hide":t.onHide},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}})],1)],1)},[],!1,g,"data-v-2c29b13a",null);e.default=p.exports},ZD87:function(t,e){},"gAE/":function(t,e){},ignk:function(t,e,a){"use strict";Boolean,Boolean,Boolean;var i={name:"x-table",props:{fullBordered:Boolean,cellBordered:{type:Boolean,default:!0},contentBordered:{type:Boolean,default:!0}}},s=a("XyMi");var n=function(t){a("gAE/")},o=Object(s.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("table",{staticClass:"vux-table",class:{"vux-table-bordered":this.fullBordered,"vux-table-no-cell-bordered":!this.cellBordered,"vux-table-no-content-bordered":!this.contentBordered}},[this._t("default")],2)},[],!1,n,null,null);e.a=o.exports}});
//# sourceMappingURL=11.d3b5bcbc0a6e8bdd8c4d.js.map