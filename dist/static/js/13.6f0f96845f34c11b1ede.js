webpackJsonp([13],{JsMG:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("mtWM"),s=a.n(i),n=a("ABCa"),o=a("YxJB"),r=a("3Lt7"),l=a("mzja"),c=a("17Ff"),v=a("1DHf"),u=a("rHil"),d=a("2sLL"),_=a("ignk"),f=a("63CM"),m=(f.a,n.a,o.a,r.a,v.a,u.a,d.a,_.a,l.a,{directives:{TransferDom:f.a},components:{XHeader:n.a,Flexbox:o.a,FlexboxItem:r.a,Cell:v.a,Group:u.a,XButton:d.a,XTable:_.a,Alert:l.a},data:function(){return{number1:1,number2:1,userId:c.a.get("userId"),startTime1:"",activeTitle:"",activePace:"",activeCreatePeopleName:"",activeId:"",active_Context:"",show:!1,activeComplete:"",isActive:!0,signupstatus:"",msg:""}},filters:{formatDuring:function(t){return""==t||null==t||void 0==t?t="无":(Date.prototype.toLocaleString=function(){var t=this.getMonth()+1;t<10&&(t="0"+t);var e=this.getDate();e<10&&(e="0"+e);var a=this.getHours();a<10&&(a="0"+a);var i=this.getMinutes();return i<10&&(i="0"+i),this.getFullYear()+"."+t+"."+e+" "+a+":"+i},new Date(t).toLocaleString())},formatDurings:function(t){return Date.prototype.toLocaleString=function(){var t=this.getMinutes();return t<10&&(t="0"+t),this.getFullYear()+"."+(this.getMonth()+1)+"."+this.getDate()},new Date(t).toLocaleString()}},methods:{getActivity:function(){var t=this;s()({method:"get",url:"active/getParticipateActive",params:{pageNum:1,pageSize:1,userId:this.$store.getters.user.userid}}).then(function(e){t.activeTitle=e.data.list[0].activeName,t.startTime1=e.data.list[0].startTime,t.endTime1=e.data.list[0].endTime,t.activePace=e.data.list[0].activePace,t.activeCreatePeopleName=e.data.list[0].activeCreatePeopleName,t.active_Context=e.data.list[0].active_Context,t.activeId=e.data.list[0].id,t.signupstatus=e.data.list[0].signupstatus}).catch(function(t){console.log(t)})},gettimes1:function(){var t=this;s()({method:"post",url:"active/getParticipateCount",params:{userId:this.userId,activeType:3,year:(new Date).getFullYear()}}).then(function(e){t.number1=e.data}).catch(function(t){console.log(t)})},gettimes2:function(){var t=this;s()({method:"post",url:"active/getParticipateCount",params:{userId:this.userId,activeType:5,year:(new Date).getFullYear()}}).then(function(e){t.number2=e.data}).catch(function(t){console.log(t)})},submit:function(){var t=this;s()({method:"post",url:"active/participate",params:{userId:this.userId,activeId:this.activeId}}).then(function(e){t.msg=e.msg,t.show=!0}).catch(function(t){console.log(t)})},getAlreadyActive:function(){var t=this;s()({method:"get",url:"active/getEnjoyActiveByUserId",params:{userId:this.userId,pageNum:1,pageSize:4}}).then(function(e){t.activeComplete=e.data}).catch(function(t){console.log(t)})},onHide:function(){window.location.reload()},onShow:function(){console.log("on show")},submit1:function(){this.$vux.alert.show({title:"请勿重复报名"})}},mounted:function(){this.getActivity(),this.gettimes1(),this.gettimes2(),this.getAlreadyActive()}}),g=a("XyMi");var h=function(t){a("vbzP")},p=Object(g.a)(m,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-body"},[a("x-header",{attrs:{"left-options":{showBack:!1}}},[t._v("\n        党员活动\n    ")]),t._v(" "),a("div",{staticClass:"box"},[a("flexbox",{attrs:{orient:"vertical"}},[a("flexbox-item",[a("section",{staticClass:"mainbox"},[a("div",{staticClass:"barbg"},[t._v("\n                    年度共参与组织活动：\n                    "),a("span",{staticStyle:{display:"inline"}},[t._v(t._s(t.number1))]),t._v("\n                     次\n                ")]),t._v(" "),a("div",{staticClass:"barbg"},[t._v("\n                    年度共参与金领驿站活动："),a("span",{staticStyle:{display:"inline"}},[t._v(t._s(t.number2))]),t._v(" 次\n                ")])]),t._v(" "),a("div",{staticClass:"grayLine"})])],1),t._v(" "),a("flexbox",{attrs:{orient:"vertical"}},[a("section",{staticClass:"mainbox1"},[a("div",{staticClass:" clearfix p15 display"},[a("span",{staticClass:"fl weui-cell__bd1"},[t._v("党员生活通知")]),t._v(" "),a("a",{staticClass:"fRight"},[a("router-link",{attrs:{slot:"right",to:{name:"activeMore"}},slot:"right"},[t._v("查看全部 >")])],1)]),t._v(" "),a("div",{staticClass:"content"},[a("table",{staticClass:"table",attrs:{width:"100%"}},[a("tr",[a("td",{attrs:{width:"100"}},[t._v("标题：")]),t._v(" "),a("td",{staticClass:"f_b"},[t._v(t._s(t.activeTitle))])]),t._v(" "),a("tr",[a("td",{attrs:{width:"100"}},[t._v("活动时间：")]),t._v(" "),a("td",{staticClass:"f_b"},[t._v(t._s(t._f("formatDuring")(t.startTime1))+"~"+t._s(t._f("formatDuring")(t.endTime1)))])]),t._v(" "),a("tr",[a("td",[t._v("地点：")]),t._v(" "),a("td",{staticClass:"f_b"},[t._v(t._s(t.activePace))])]),t._v(" "),a("tr",[a("td",[t._v("发起人：")]),t._v(" "),a("td",{staticClass:"f_b"},[t._v(t._s(t.activeCreatePeopleName))])]),t._v(" "),a("tr",[a("td",{attrs:{valign:"top"}},[t._v("活动内容：")]),t._v(" "),a("td",{staticClass:"f_b"},[t._v(t._s(t.active_Context))])])])]),t._v(" "),2==t.signupstatus?a("div",{staticClass:"book"},[a("a",{staticStyle:{"background-color":"#B93647"},on:{click:function(e){t.submit()}}},[t._v("报名")])]):t._e(),t._v(" "),1==t.signupstatus?a("div",{staticClass:"book"},[a("a",{staticStyle:{"background-color":"#8b8b8b"},on:{click:function(e){t.submit1()}}},[t._v("已报名")])]):t._e(),t._v(" "),a("div",{staticClass:"grayLine margin-top"})])]),t._v(" "),a("flexbox",{attrs:{orient:"vertical"}},[a("flexbox-item",[a("section",{staticClass:"mainbox "},[a("div",{staticClass:"p15"},[a("div",{staticClass:" clearfix  display"},[a("span",{staticClass:"fl weui-cell__bd1"},[t._v("已参与组织生活")]),t._v(" "),a("a",{staticClass:" fAll",attrs:{href:"#"}},[a("router-link",{attrs:{slot:"right",to:{name:"Active"}},slot:"right"},[t._v("查看全部 >")])],1)]),t._v(" "),a("ul",{staticClass:"news"},t._l(t.activeComplete,function(e,i){return a("li",{key:e.departmentid},[a("a",{staticClass:" display clearfix "},[a("div",{staticClass:" fl"},[t._v(t._s(e.activeName))]),t._v(" "),a("div",{staticClass:" fr"},[t._v(t._s(t._f("formatDuring")(e.endTime))),a("span",{staticClass:"rightBtn"})])])])}))])])])],1)],1),t._v(" "),a("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[a("alert",{attrs:{title:t.msg},on:{"on-show":t.onShow,"on-hide":t.onHide},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}})],1)],1)},[],!1,h,"data-v-31e12ed5",null);e.default=p.exports},"gAE/":function(t,e){},ignk:function(t,e,a){"use strict";Boolean,Boolean,Boolean;var i={name:"x-table",props:{fullBordered:Boolean,cellBordered:{type:Boolean,default:!0},contentBordered:{type:Boolean,default:!0}}},s=a("XyMi");var n=function(t){a("gAE/")},o=Object(s.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("table",{staticClass:"vux-table",class:{"vux-table-bordered":this.fullBordered,"vux-table-no-cell-bordered":!this.cellBordered,"vux-table-no-content-bordered":!this.contentBordered}},[this._t("default")],2)},[],!1,n,null,null);e.a=o.exports},vbzP:function(t,e){}});
//# sourceMappingURL=13.6f0f96845f34c11b1ede.js.map