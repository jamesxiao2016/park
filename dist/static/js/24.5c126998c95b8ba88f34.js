webpackJsonp([24],{SZXa:function(t,e){},rFqn:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("mtWM"),s=a.n(i),n=a("ABCa"),o=a("1HIy"),r=a("YxJB"),l=a("mzja"),c=a("3Lt7"),d=a("2sLL"),u=a("oVYx"),m=a("UNGY"),h=a("rHil"),v=a("taJy"),f=a("/kga"),g=a("63CM"),p=(a("17Ff"),g.a,n.a,o.a,r.a,c.a,d.a,u.a,m.a,h.a,v.a,l.a,f.a,{directives:{TransferDom:g.a},data:function(){return{users:[{id:1,fonts:"年度积分",integral:0},{id:2,fonts:"活动次数",integral:0}],userAbout:{},dateTime:"",charts:"",partAbout:{},todoList:[],headName:{},activeTitle:"",showQrcodeDialog:!1}},components:{XHeader:n.a,GroupTitle:o.a,Flexbox:r.a,FlexboxItem:c.a,XButton:d.a,DatetimePlugin:u.a,Datetime:m.a,Group:h.a,Picker:v.a,Alert:l.a,XDialog:f.a},mounted:function(){var t=(new Date).getHours();this.dateTime=t>=5&&t<8?"早上好":t>=8&&t<11?"上午好":t>=11&&t<13?"中午好":t>=13&&t<19?"下午好":"晚上好",this.getHead(),this.$nextTick(function(){}),this.userName(),this.infoDetail()},methods:{refer:function(t){console.log(t),"SCORE"==t.type?this.$router.push({path:"points/review"}):(this.activeTitle=t.name,this.showQR(t.masId))},showQR:function(t){document.getElementById("fei").src="http://www.dlbdata.cn/dangjian/active/showQrCode?activeId="+t,this.showQrcodeDialog=!0},infoDetail:function(){var t=this;s.a.get("/dangjian/pdepartment/queryById",{params:{departmentid:this.$store.getters.user.departmentid}}).then(function(e){t.partAbout=e.data}).catch(function(t){console.log(t)}),s.a.get("/dangjian/pscoredetail/todoList",{params:{userId:this.$store.getters.user.userid}}).then(function(e){t.todoList=e.data}).catch(function(t){console.log(t)})},userName:function(){var t=this;s.a.get("/dangjian/ppartymember/queryByUserId",{params:{userid:this.$store.getters.user.userid}}).then(function(e){t.userAbout=e.data}).catch(function(t){console.log(t)})},getHead:function(){var t=this;this.$http.get("ppartymember/queryByRoleId",{params:{roleid:this.$store.getters.user.roleid}}).then(function(e){t.headName=JSON.parse(e.data),console.log(t.headName)}).catch(function(t){console.log("fail"+t)})}}}),x=a("XyMi");var _=function(t){a("SZXa")},b=Object(x.a)(p,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-body"},[a("x-header",{attrs:{"left-options":{showBack:!1}}},[t._v("\n    花旗银行第二党支部\n  ")]),t._v(" "),a("div",{staticClass:"box"},[a("div",{staticClass:"head"},[a("flexbox",[a("flexbox-item",{staticClass:"label"},[t._v("\n                      片区负责人：\n                  ")]),t._v(" "),a("flexbox-item",[t._v("\n                      "+t._s(t.headName.name)+"\n                  ")])],1),t._v(" "),a("flexbox",[a("flexbox-item",{staticClass:"label"},[t._v("\n                      现有党支部：\n                  ")]),t._v(" "),a("flexbox-item",[t._v("\n                      "+t._s(t.headName.branchSum)+"个\n                  ")])],1),t._v(" "),a("flexbox",[a("flexbox-item",{staticClass:"label"},[t._v("\n                      所属党委：\n                  ")]),t._v(" "),a("flexbox-item",[t._v("\n                      陆家嘴中心\n                  ")])],1),t._v(" "),a("flexbox",[a("flexbox-item",{staticClass:"label"},[t._v("\n                      现有党员：\n                  ")]),t._v(" "),a("flexbox-item",[a("span",{staticClass:"number"},[t._v(t._s(t.headName.peopleSum))]),t._v("\n                      人\n                  ")])],1)],1),t._v(" "),a("div",{staticClass:"list"},[a("h3",[t._v("书记代办事宜")]),t._v(" "),t._l(t.todoList,function(e,i){return[a("div",{staticClass:"item"},[a("div",{staticClass:"title"},[t._v(t._s(i+1)+". "+t._s(e.title)+t._s("SCORE"==e.type?"积分加分确认":"图片上传"))]),t._v(" "),a("div",{staticClass:"content"},[a("x-button",{attrs:{type:"warn"},nativeOn:{click:function(a){t.refer(e)}}},[t._v("\n                  "+t._s("Y"==e.beginYn?"去处理":"活动二维码")+"\n              ")])],1)])]})],2)]),t._v(" "),a("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}],staticClass:"qrcode-dialog"},[a("x-dialog",{attrs:{"hide-on-blur":"","dialog-style":{width:"80%",height:"300px"}},model:{value:t.showQrcodeDialog,callback:function(e){t.showQrcodeDialog=e},expression:"showQrcodeDialog"}},[a("h1",{staticStyle:{"text-align":"center","margin-top":"20px","margin-bottom":"20px"}},[t._v(t._s(t.activeTitle))]),t._v(" "),a("img",{attrs:{id:"fei",alt:""}})])],1)],1)},[],!1,_,"data-v-6e8da3a2",null);e.default=b.exports}});
//# sourceMappingURL=24.5c126998c95b8ba88f34.js.map