webpackJsonp([14],{"2+Lk":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("mtWM"),o=i.n(a),n=i("ABCa"),s=i("1HIy"),r=i("YxJB"),l=i("mzja"),c=i("3Lt7"),u=i("2sLL"),m=i("oVYx"),v=i("UNGY"),d=i("rHil"),p=i("taJy"),g=i("/kga"),h=i("63CM"),f=(h.a,n.a,s.a,r.a,c.a,u.a,m.a,v.a,d.a,p.a,l.a,g.a,{directives:{TransferDom:h.a},components:{XHeader:n.a,GroupTitle:s.a,Flexbox:r.a,FlexboxItem:c.a,XButton:u.a,DatetimePlugin:m.a,Datetime:v.a,Group:d.a,Picker:p.a,Alert:l.a,XDialog:g.a},data:function(){return{value1:"",startTime:"",endTime:"",hourListValue:"",hot:"",activeType:"",activityName:"",activePace:"",activeTitle:"",activeCreatePeople:"",activePrincipalPeople:"",activeContext:"",activeContent:"",activeStatus:0,activeProjectActive:"",PickerVisible1:!1,pickerValue1:"请选择活动类型",years:"",year1:[""],list:"",list1:"",departmentidItem:[],PickerVisible2:!1,PickerVisible3:!1,PickerVisible5:!1,departmentid:this.$store.getters.user.departmentid,showQrcodeDialog:!1,Qrcode:"",departmentname1:"",departmentidId:"",departmentidNames:"",str:[],String:""}},methods:{openPicker:function(){this.$refs.picker.open()},handleConfirm:function(t){var e=t;this.startTime=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()+" "+e.getHours()+":"+e.getMinutes()},handlePicker:function(){var t=this;this.PickerVisible2=!0,o()({method:"get",url:"pscoredetail/queryByJoinList"}).then(function(e){t.list=e.data}).catch(function(t){console.log(t)})},handlePicker1:function(){var t=this;this.PickerVisible5=!0,o()({method:"get",url:"pdepartment/getList"}).then(function(e){t.list1=e.data}).catch(function(t){console.log(t)})},onValuesChange:function(t,e){this.pickerValue1=e[0],this.PickerVisible1=!1},submit:function(){var t=this,e=this.startTime.replace(new RegExp("-","gm"),"/"),i=new Date(e).getTime(),a=this.endTime.replace(new RegExp("-","gm"),"/"),n=new Date(a).getTime();i<n?o()({method:"post",url:"active/create",params:{startTime:i,endTime:n,activeType:this.activeType,activityProjectId:this.activeProjectActive,activePace:this.activePace,activeCreatePeople:this.$store.getters.user.userid,activePrincipalPeople:this.activePrincipalPeople,activeContext:this.activeContext,activeName:this.activeTitle,activeStatus:1,departmentid:this.departmentidId.join()}}).then(function(e){t.$vux.alert.show({title:e.msg}),t.showQR(e.data)}).catch(function(t){console.log(t)}):this.$vux.alert.show({title:"开始日期不能大于结束日期"})},showQR:function(t){document.getElementById("fei").src="http://www.dlbdata.cn/dangjian/active/showQrCode?activeId="+t,this.showQrcodeDialog=!0},submit1:function(t){this.activeType=t.id,this.activeProjectActive=t.projectId,this.activityName=t.projectName,this.PickerVisible2=!1},submit2:function(t){var e=this.departmentidItem;-1==this.departmentidId.indexOf(t.departmentid)&&e.push(t);for(var i=[],a=[],o=0;o<e.length;o++)i.push(e[o].departmentid),a.push(e[o].departmentname);this.departmentidId=i,this.departmentidNames=a.join(),this.PickerVisible5=!1},resetDepartment:function(){this.departmentidItem=[],this.departmentidNames="",this.departmentidId=[],this.PickerVisible5=!1},getActivity:function(){},log:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";console.log(t,e)},showPlugin:function(){this.$vux.datetime.show({cancelText:"取消",confirmText:"确定",format:"YYYY-MM-DD HH",value:"2017-05-20 18",onConfirm:function(t){console.log("plugin confirm",t)},onShow:function(){console.log("plugin show")},onHide:function(){console.log("plugin hide")}})},toggleFormat:function(){this.format="YYYY-MM-DD HH:mm"===this.format?"YYYY-MM-DD":"YYYY-MM-DD HH:mm"},change:function(t){this.startTime=t},change1:function(t){this.endTime=t},clearValue:function(t){this.value6=""},clearValue8:function(t){this.value8=""},setToday:function(t){var e=new Date,i=e.getMonth()+1,a=e.getDate();i<10&&(i="0"+i),a<10&&(a="0"+a),this.value7=e.getFullYear()+"-"+i+"-"+a,console.log("set today ok")}},mounted:function(){this.getActivity()}}),x=i("XyMi");var b=function(t){i("OMLX"),i("XJW9")},y=Object(x.a)(f,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-body disabled-tabbar"},[i("x-header",[t._v("发起活动")]),t._v(" "),i("div",{staticClass:"group-item"},[i("group-title",{attrs:{slot:"title"},slot:"title"},[i("b",[t._v("活动开始时间")])]),t._v(" "),i("flexbox",{attrs:{gutter:0}},[i("flexbox-item",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.startTime,expression:"startTime"}],attrs:{type:"text",readonly:"readonly"},domProps:{value:t.startTime},on:{input:function(e){e.target.composing||(t.startTime=e.target.value)}}})]),t._v(" "),i("flexbox-item",{staticClass:"input-addon",staticStyle:{position:"relative"}},[i("x-button",{attrs:{mini:"",type:"warn"}},[i("i",{staticClass:"iconfont dlb-icon-rili"})]),t._v(" "),i("group",{staticClass:"date-no-box"},[i("datetime",{attrs:{format:"YYYY-MM-DD HH:mm","year-row":"{value}年","month-row":"{value}月","day-row":"{value}日","hour-row":"{value}点","minute-row":"{value}分"},on:{"on-change":t.change},model:{value:t.hourListValue,callback:function(e){t.hourListValue=e},expression:"hourListValue"}})],1)],1)],1)],1),t._v(" "),i("div",{staticClass:"group-item"},[i("group-title",{attrs:{slot:"title"},slot:"title"},[i("b",[t._v("活动结束时间")])]),t._v(" "),i("flexbox",{attrs:{gutter:0}},[i("flexbox-item",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.endTime,expression:"endTime"}],attrs:{type:"text",readonly:"readonly"},domProps:{value:t.endTime},on:{input:function(e){e.target.composing||(t.endTime=e.target.value)}}})]),t._v(" "),i("flexbox-item",{staticClass:"input-addon",staticStyle:{position:"relative"}},[i("x-button",{attrs:{mini:"",type:"warn"}},[i("i",{staticClass:"iconfont dlb-icon-rili"})]),t._v(" "),i("group",{staticClass:"date-no-box"},[i("datetime",{attrs:{format:"YYYY-MM-DD HH:mm","year-row":"{value}年","month-row":"{value}月","day-row":"{value}日","hour-row":"{value}点","minute-row":"{value}分"},on:{"on-change":t.change1},model:{value:t.hot,callback:function(e){t.hot=e},expression:"hot"}})],1)],1)],1)],1),t._v(" "),i("div",{staticClass:"group-item"},[i("group-title",{attrs:{slot:"title"},slot:"title"},[i("b",[t._v("活动类型")])]),t._v(" "),i("flexbox",{attrs:{gutter:0}},[i("flexbox-item",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.activityName,expression:"activityName"}],attrs:{type:"text",readonly:"readonly"},domProps:{value:t.activityName},on:{input:function(e){e.target.composing||(t.activityName=e.target.value)}}})]),t._v(" "),i("flexbox-item",{staticClass:"input-addon"},[i("x-button",{attrs:{mini:"",type:"warn"},nativeOn:{click:function(e){t.handlePicker()}}},[i("i",{staticClass:"iconfont dlb-icon-category"})])],1)],1)],1),t._v(" "),i("ul",{directives:[{name:"show",rawName:"v-show",value:t.PickerVisible2,expression:"PickerVisible2"}],staticClass:"active-type-list"},t._l(t.list,function(e,a){return i("li",{key:a,on:{click:function(i){t.submit1(e)}}},[t._v(t._s(e.projectName))])})),t._v(" "),i("div",{staticClass:"group-item"},[i("group-title",{attrs:{slot:"title"},slot:"title"},[i("b",[t._v("活动名称")])]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.activeTitle,expression:"activeTitle"}],attrs:{type:"text"},domProps:{value:t.activeTitle},on:{input:function(e){e.target.composing||(t.activeTitle=e.target.value)}}})],1),t._v(" "),i("div",{staticClass:"group-item"},[i("group-title",{attrs:{slot:"title"},slot:"title"},[i("b",[t._v("活动地点")])]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.activePace,expression:"activePace"}],attrs:{type:"text"},domProps:{value:t.activePace},on:{input:function(e){e.target.composing||(t.activePace=e.target.value)}}})],1),t._v(" "),i("div",{staticClass:"group-item"},[i("group-title",{attrs:{slot:"title"},slot:"title"},[i("b",[t._v("参与支部")])]),t._v(" "),i("flexbox",{attrs:{gutter:0}},[i("flexbox-item",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.departmentidNames,expression:"departmentidNames"}],attrs:{type:"text"},domProps:{value:t.departmentidNames},on:{input:function(e){e.target.composing||(t.departmentidNames=e.target.value)}}})]),t._v(" "),i("flexbox-item",{staticClass:"input-addon"},[i("x-button",{attrs:{mini:"",type:"warn"},nativeOn:{click:function(e){t.handlePicker1()}}},[i("i",{staticClass:"iconfont dlb-icon-category"})])],1)],1)],1),t._v(" "),i("ul",{directives:[{name:"show",rawName:"v-show",value:t.PickerVisible5,expression:"PickerVisible5"}],staticClass:"active-type-list"},[t._l(t.list1,function(e,a){return i("li",{key:a,on:{click:function(i){t.submit2(e)}}},[t._v(t._s(e.departmentname))])}),t._v(" "),i("li",{staticStyle:{color:"#999"},on:{click:function(e){t.resetDepartment()}}},[t._v("清空所选部门")])],2),t._v(" "),i("div",{staticClass:"group-item"},[i("group-title",{attrs:{slot:"title"},slot:"title"},[i("b",[t._v("活动负责人")])]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.activePrincipalPeople,expression:"activePrincipalPeople"}],attrs:{type:"text"},domProps:{value:t.activePrincipalPeople},on:{input:function(e){e.target.composing||(t.activePrincipalPeople=e.target.value)}}})],1),t._v(" "),i("div",{staticClass:"group-item"},[i("group-title",{attrs:{slot:"title"},slot:"title"},[i("b",[t._v("活动内容")])]),t._v(" "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.activeContext,expression:"activeContext"}],attrs:{cols:"30",rows:"10",maxlength:"300"},domProps:{value:t.activeContext},on:{input:function(e){e.target.composing||(t.activeContext=e.target.value)}}})],1),t._v(" "),i("div",{staticClass:"group-item"},[i("group-title",{attrs:{slot:"title"},slot:"title"}),t._v(" "),i("x-button",{attrs:{type:"warn"},nativeOn:{click:function(e){t.submit()}}},[t._v("\n            生成活动二维码\n        ")])],1),t._v(" "),i("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}],staticClass:"qrcode-dialog"},[i("x-dialog",{attrs:{"hide-on-blur":"","dialog-style":{width:"80%",height:"300px"}},model:{value:t.showQrcodeDialog,callback:function(e){t.showQrcodeDialog=e},expression:"showQrcodeDialog"}},[i("h1",{staticStyle:{"text-align":"center","margin-top":"20px","margin-bottom":"20px"}},[t._v(t._s(t.activeTitle))]),t._v(" "),i("img",{attrs:{id:"fei",alt:""}})])],1)],1)},[],!1,b,"data-v-7a971550",null);e.default=y.exports},OMLX:function(t,e){},XJW9:function(t,e){}});
//# sourceMappingURL=14.6ed42cb6fd8d629fddc0.js.map