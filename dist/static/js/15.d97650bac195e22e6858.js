webpackJsonp([15],{"0dLg":function(t,e){},V6SM:function(t,e){},dTCK:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("mtWM"),i=a.n(n),s=a("ABCa"),o=a("1HIy"),r=a("YxJB"),l=a("mzja"),d=a("3Lt7"),c=a("2sLL"),v=a("oVYx"),_=a("UNGY"),f=a("rHil"),u=a("taJy"),p=a("/kga"),m=a("63CM"),h=(a("17Ff"),m.a,s.a,o.a,r.a,d.a,c.a,v.a,_.a,f.a,u.a,l.a,p.a,{directives:{TransferDom:m.a},components:{XHeader:s.a,GroupTitle:o.a,Flexbox:r.a,FlexboxItem:d.a,XButton:c.a,DatetimePlugin:v.a,Datetime:_.a,Group:f.a,Picker:u.a,Alert:l.a,XDialog:p.a},data:function(){return{departmentid:this.$store.getters.user.departmentid,partyBranch:"",address:"",honor:"",people:"",todoList:[],activeTitle:"",info:[],dateTimes:"",showQrcodeDialog:!1}},methods:{refer:function(t){"SCORE"==t.type?this.$router.push({path:"points/evaluation"}):"ACTIVE"==t.type&&("Y"==t.beginYn?this.$router.push({path:"active/partyBranch"}):(this.activeTitle=t.name,this.showQR(t.masId)))},getDate:function(){var t=(new Date).getHours();this.dateTimes=t>=5&t<8?"早上好":t>=8&t<11?"上午好":t>=11&t<13?"中午好":t>=13&t<19?"下午好":"晚上好"},showQR:function(t){document.getElementById("fei").src="http://www.dlbdata.cn/dangjian/active/showQrCode?activeId="+t,this.showQrcodeDialog=!0},getDepartment:function(){var t=this;i()({method:"get",url:"pdepartment/queryById",params:{departmentid:this.departmentid}}).then(function(e){t.info=e.data,t.partyBranch=e.data.partyBranch,t.address=e.data.address,t.honor=e.data.honor,t.people=e.data.people}).catch(function(t){console.log(t)}),i.a.get("pscoredetail/todoList",{params:{userId:this.$store.getters.user.userid}}).then(function(e){t.todoList=e.data}).catch(function(t){console.log(t)})}},mounted:function(){this.getDepartment(),this.getDate()}}),b=a("XyMi");var x=function(t){a("0dLg"),a("V6SM")},g=Object(b.a)(h,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-body"},[a("x-header",{attrs:{"left-options":{showBack:!1}}},[t._v("\n    "+t._s(t.info.departmentname)+"\n  ")]),t._v(" "),a("div",{staticClass:"head"},[a("flexbox",[a("flexbox-item",{staticClass:"dateLable"},[t._v("\n        "+t._s(t.dateTimes)+",\n      ")]),t._v(" "),a("flexbox-item",[t._v("\n        "+t._s(t.info.partyBranch)+"\n\n      ")])],1),t._v(" "),a("flexbox",[a("flexbox-item",{staticClass:"label"},[t._v("\n        所属片区：\n      ")]),t._v(" "),a("flexbox-item",[t._v("\n        "+t._s(t.info.address)+"\n\n      ")])],1),t._v(" "),a("flexbox",[a("flexbox-item",{staticClass:"label"},[t._v("\n        党支部评级：\n      ")]),t._v(" "),a("flexbox-item",[t._v("\n        "+t._s(t.info.honor)+"\n      ")])],1),t._v(" "),a("flexbox",[a("flexbox-item",{staticClass:"label"},[t._v("\n        现有党员：\n      ")]),t._v(" "),a("flexbox-item",[a("span",{staticClass:"number"},[t._v(t._s(t.info.people))]),t._v("\n        人\n      ")])],1)],1),t._v(" "),a("div",{staticClass:"list"},[a("h3",[t._v("书记待办事宜")]),t._v(" "),t._l(t.todoList,function(e,n){return a("div",{key:n},[a("div",{staticClass:"item"},[a("div",{staticClass:"title"},[t._v(t._s(n+1)+".\n              "),"SCORE"==e.type?a("span",[t._v(t._s(e.title)+"积分加分确认")]):"ACTIVE"==e.type?a("span",[a("router-link",{attrs:{to:{name:"activePost",params:{activeId:e.masId}}}},[t._v(t._s(e.title))])],1):t._e()]),t._v(" "),a("div",{staticClass:"content"},["SCORE"==e.type?a("div",["Y"==e.beginYn?a("button",{on:{click:function(a){t.refer(e)}}},[t._v("\n                      去处理\n                  ")]):"N"==e.beginYn?a("button",{on:{click:function(a){t.refer(e)}}},[t._v("\n                      去处理\n                  ")]):t._e(),t._v(" "),a("p")]):t._e(),t._v(" "),"ACTIVE"==e.type?a("div",["Y"==e.beginYn?a("button",{on:{click:function(a){t.refer(e)}}},[t._v("\n                      上传图片\n                  ")]):"N"==e.beginYn?a("button",{on:{click:function(a){t.refer(e)}}},[t._v("\n                      活动二维码\n                  ")]):t._e(),t._v(" "),a("p")]):t._e()])])])})],2),t._v(" "),a("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}],staticClass:"qrcode-dialog"},[a("x-dialog",{attrs:{"hide-on-blur":"","dialog-style":{minHeight:"350px"}},model:{value:t.showQrcodeDialog,callback:function(e){t.showQrcodeDialog=e},expression:"showQrcodeDialog"}},[a("div",{staticClass:"title"},[a("label",[t._v("活动名称:")]),t._v(" "),a("div",{staticClass:"activeTitle"},[t._v(t._s(t.activeTitle))])]),t._v(" "),a("div",{staticClass:"qrcode"},[a("img",{attrs:{id:"fei",alt:""}})])])],1)],1)},[],!1,x,"data-v-a0b461fc",null);e.default=g.exports}});
//# sourceMappingURL=15.d97650bac195e22e6858.js.map