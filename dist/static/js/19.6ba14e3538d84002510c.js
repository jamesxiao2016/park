webpackJsonp([19],{BuXm:function(t,e){},NrP9:function(t,e){},rFqn:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("mtWM"),n=a.n(i),s=a("ABCa"),o=a("1HIy"),r=a("YxJB"),l=a("mzja"),c=a("3Lt7"),d=a("2sLL"),u=a("oVYx"),v=a("UNGY"),f=a("rHil"),m=a("taJy"),h=a("/kga"),_=a("63CM"),p=(a("17Ff"),_.a,s.a,o.a,r.a,c.a,d.a,u.a,v.a,f.a,m.a,l.a,h.a,{directives:{TransferDom:_.a},data:function(){return{users:[{id:1,fonts:"年度积分",integral:0},{id:2,fonts:"活动次数",integral:0}],userAbout:{},dateTime:"",charts:"",partAbout:{},todoList:[],headName:{},activeTitle:"",showQrcodeDialog:!1}},components:{XHeader:s.a,GroupTitle:o.a,Flexbox:r.a,FlexboxItem:c.a,XButton:d.a,DatetimePlugin:u.a,Datetime:v.a,Group:f.a,Picker:m.a,Alert:l.a,XDialog:h.a},mounted:function(){var t=(new Date).getHours();this.dateTime=t>=5&&t<8?"早上好":t>=8&&t<11?"上午好":t>=11&&t<13?"中午好":t>=13&&t<19?"下午好":"晚上好",this.getHead(),this.$nextTick(function(){}),this.userName(),this.infoDetail()},methods:{refer:function(t){console.log("11111"),console.log(t),"SCORE"==t.type?this.$router.push({path:"points/review"}):"ACTIVE"==t.type&&("Y"==t.beginYn?this.$router.push({path:"active/partyBranch"}):(this.activeTitle=t.name,this.showQR(t.masId)))},showQR:function(t){document.getElementById("fei").src="http://www.dlbdata.cn/dangjian/active/showQrCode?activeId="+t,this.showQrcodeDialog=!0},infoDetail:function(){var t=this;n.a.get("/dangjian/pdepartment/queryById",{params:{departmentid:this.$store.getters.user.departmentid}}).then(function(e){t.partAbout=e.data}).catch(function(t){console.log(t)}),n.a.get("/dangjian/pscoredetail/todoList",{params:{userId:this.$store.getters.user.userid}}).then(function(e){t.todoList=e.data,console.log(t.todoList)}).catch(function(t){console.log(t)})},userName:function(){var t=this;n.a.get("/dangjian/ppartymember/queryByUserId",{params:{userid:this.$store.getters.user.userid}}).then(function(e){t.userAbout=e.data}).catch(function(t){console.log(t)})},getHead:function(){var t=this;this.$http.get("ppartymember/queryByRoleId",{params:{roleid:this.$store.getters.user.roleid}}).then(function(e){t.headName=JSON.parse(e.data),console.log(t.headName)}).catch(function(t){console.log("fail"+t)})}}}),b=a("XyMi");var g=function(t){a("BuXm"),a("NrP9")},x=Object(b.a)(p,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-body"},[a("x-header",{attrs:{"left-options":{showBack:!1}}},[t._v("\n    花旗银行第二党支部\n  ")]),t._v(" "),a("div",{staticClass:"box"},[a("div",{staticClass:"head"},[a("flexbox",[a("flexbox-item",{staticClass:"label"},[t._v("\n                      片区负责人：\n                  ")]),t._v(" "),a("flexbox-item",[t._v("\n                      "+t._s(t.headName.name)+"\n                  ")])],1),t._v(" "),a("flexbox",[a("flexbox-item",{staticClass:"label"},[t._v("\n                      现有党支部：\n                  ")]),t._v(" "),a("flexbox-item",[a("span",{staticClass:"number"},[t._v(t._s(t.headName.branchSum))]),t._v(" 个\n                  ")])],1),t._v(" "),a("flexbox",[a("flexbox-item",{staticClass:"label"},[t._v("\n                      所属党委：\n                  ")]),t._v(" "),a("flexbox-item",[t._v("\n                      陆家嘴中心\n                  ")])],1),t._v(" "),a("flexbox",[a("flexbox-item",{staticClass:"label"},[t._v("\n                      现有党员：\n                  ")]),t._v(" "),a("flexbox-item",[a("span",{staticClass:"number"},[t._v(t._s(t.headName.peopleSum))]),t._v("\n                      人\n                  ")])],1)],1),t._v(" "),a("div",{staticClass:"list"},[a("h3",[t._v("书记待办事宜")]),t._v(" "),t._l(t.todoList,function(e,i){return a("div",{key:i},[a("div",{staticClass:"item"},[a("div",{staticClass:"title"},[t._v(t._s(i+1)+".\n             "),"SCORE"==e.type?a("span",[t._v(t._s(e.title)+"积分加分确认")]):"ACTIVE"==e.type?a("span",[a("router-link",{attrs:{to:{name:"activePost",params:{activeId:e.masId}}}},[t._v(t._s(e.title))])],1):t._e()]),t._v(" "),a("div",{staticClass:"content"},["SCORE"==e.type?a("div",["Y"==e.beginYn?a("button",{on:{click:function(a){t.refer(e)}}},[t._v("\n                  去处理\n              ")]):"N"==e.beginYn?a("button",{on:{click:function(a){t.refer(e)}}},[t._v("\n                  去处理\n              ")]):t._e()]):t._e(),t._v(" "),"ACTIVE"==e.type?a("div",["Y"==e.beginYn?a("button",{on:{click:function(a){t.refer(e)}}},[t._v("\n                      上传图片\n                  ")]):"N"==e.beginYn?a("button",{on:{click:function(a){t.refer(e)}}},[t._v("\n                      活动二维码\n                  ")]):t._e()]):t._e(),t._v(" "),a("p")])])])})],2)]),t._v(" "),a("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}],staticClass:"qrcode-dialog"},[a("x-dialog",{attrs:{"hide-on-blur":"","dialog-style":{height:"300px"}},model:{value:t.showQrcodeDialog,callback:function(e){t.showQrcodeDialog=e},expression:"showQrcodeDialog"}},[a("div",{staticClass:"title"},[a("label",{attrs:{for:""}},[t._v("活动名称:")]),t._v(" "),a("div",{staticClass:"activeTitle"},[t._v(t._s(t.activeTitle))])]),t._v(" "),a("div",{staticClass:"qrcode"},[a("img",{attrs:{id:"fei",alt:""}})])])],1)],1)},[],!1,g,"data-v-3e14696f",null);e.default=x.exports}});
//# sourceMappingURL=19.6ba14e3538d84002510c.js.map