webpackJsonp([15],{BeR1:function(t,e){},JDQa:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("//Fk"),s=a.n(i),o=a("mtWM"),n=a.n(o),r=a("ABCa"),l=a("1HIy"),c=a("YxJB"),u=a("63CM"),m=a("mzja"),p=a("3Lt7"),v=a("2sLL"),d=a("oVYx"),h=a("UNGY"),g=a("rHil"),f=a("taJy"),x=a("2FOq"),w=a("fxnj"),y=a.n(w),b=a("zlMP"),_=(u.a,r.a,l.a,c.a,p.a,v.a,d.a,h.a,g.a,f.a,m.a,x.a,{directives:{TransferDom:u.a},components:{XHeader:r.a,GroupTitle:l.a,Flexbox:c.a,FlexboxItem:p.a,XButton:v.a,DatetimePlugin:d.a,Datetime:h.a,Group:g.a,Picker:f.a,Alert:m.a,Previewer:x.a},data:function(){return{name1:"",value1:"",startTime:"",endTime:"",hourListValue:"",hot:"",ListValue:"",activeContent:"",listSingle:{},userName:"",picList:{list:[],arr:[]}}},methods:{getUser1:function(){var t=this;n.a.get("ppartymember/queryByUserId",{params:{userid:this.$route.params.userId}}).then(function(e){t.name1=e.data.name}).catch(function(t){console.log(t)})},showDeleteButton:function(t){clearInterval(this.Loop);var e=this;this.Loop=setTimeout(function(){e.picList.list.splice(t,1),e.picList.arr.splice(t,1),e.$vux.alert.show({title:"删除成功"})},1e3)},clearLoop:function(){clearInterval(this.Loop)},atBig:function(t){},getList:function(){var t=this;n.a.get("pscoredetail/queryById",{params:{id:this.$route.params.moduleId}}).then(function(e){t.listSingle=e.data}).catch(function(t){console.log("fail"+t.data)})},getUser:function(){var t=this;n.a.get("ppartymember/queryByUserId",{params:{userid:this.$store.getters.user.userid}}).then(function(e){t.userName=e.data.name}).catch(function(t){console.log(t)})},openPicker:function(){this.$refs.picker.open()},submit:function(){var t=this,e=this.startTime.replace(new RegExp("-","gm"),"/");new Date(e).getTime();n()({url:"pscoreparty/scoreCustom",method:"post",params:{detailed:12,userId:this.$route.params.userId,adderId:this.$store.getters.user.userid,score:5,imgs:this.picList.arr.join(),remark:this.activeContent,addTime:new Date(this.startTime.replace(/-/gi,"/")).getTime()}}).then(function(e){console.log(e),e.success?(t.$vux.alert.show({title:"增加成功"}),setTimeout(function(){t.$vux.alert.hide(),t.$router.push({path:"/points"})},1e3)):(t.$vux.alert.show({title:e.msg}),setTimeout(function(){t.$vux.alert.hide()},1e3))}).catch(function(e){e.success&&(t.$vux.alert.show({title:"增加失败"}),setTimeout(function(){t.$vux.alert.hide()},1e3))})},getActivity:function(){},log:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";console.log(t,e)},showPlugin:function(){this.$vux.datetime.show({cancelText:"取消",confirmText:"确定",format:"YYYY-MM-DD HH",value:"2017-05-20 18",onConfirm:function(t){console.log("plugin confirm",t)},onShow:function(){console.log("plugin show")},onHide:function(){console.log("plugin hide")}})},toggleFormat:function(){this.format="YYYY-MM-DD HH:mm"===this.format?"YYYY-MM-DD":"YYYY-MM-DD HH:mm"},changeStart:function(t){this.startTime=t},changeEnd:function(t){this.endTime=t},clearValue:function(t){this.value6=""},clearValue8:function(t){this.value8=""},setToday:function(t){var e=new Date,a=e.getMonth()+1,i=e.getDate();a<10&&(a="0"+a),i<10&&(i="0"+i),this.value7=e.getFullYear()+"-"+a+"-"+i,console.log("set today ok")},chooseImage:function(t){var e=this;y.a.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(a){var i=a.localIds||[];new s.a(function(t){var e=[];i.length?function a(s){return y.a.uploadImage({localId:s,isShowProgressTips:1,success:function(s){e.push(s.serverId),i.length?a(i.shift()):t(e)}})}(i.shift()):t(e)}).then(function(a){var i=[];a.map(function(t){return i.push(e.$http.get("picture/upload",{params:{mediaId:t}}))}),s.a.all(i).then(function(e){var a=[];e.map(function(t){return a.push(t.data)}),t.list.push("http://www.dlbdata.cn/dangjian/picture/show?pictureId="+a.join()),t.arr.push(a.join())})})}})}},mounted:function(){b.a.init(["chooseImage","uploadImage"]),this.getUser1()}}),C=a("XyMi");var T=function(t){a("BeR1"),a("MxWD")},Y=Object(C.a)(_,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-body disabled-tabbar"},[a("x-header",[t._v("思想汇报评分")]),t._v(" "),a("div",{staticClass:"group-item"},[a("span",{staticClass:"bg-line"}),t._v(" "),a("group-title",{staticStyle:{"margin-left":"0.15rem"},attrs:{slot:"title"},slot:"title"},[a("b",[t._v("党员姓名："),a("span",{staticStyle:{color:"#999999"}},[t._v(t._s(t.name1))])])])],1),t._v(" "),a("div",{staticClass:"group-item"},[a("span",{staticClass:"bg-line"}),t._v(" "),a("group-title",{staticStyle:{"margin-left":"0.15rem"},attrs:{slot:"title"},slot:"title"},[a("b",[t._v("时间:")])]),t._v(" "),a("flexbox",{attrs:{gutter:0}},[a("flexbox-item",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.startTime,expression:"startTime"}],attrs:{type:"text"},domProps:{value:t.startTime},on:{input:function(e){e.target.composing||(t.startTime=e.target.value)}}})]),t._v(" "),a("flexbox-item",{staticClass:"input-addon",staticStyle:{position:"relative"}},[a("x-button",{attrs:{mini:"",type:"warn"}},[a("i",{staticClass:"iconfont dlb-icon-rili"})]),t._v(" "),a("group",{staticClass:"date-no-box"},[a("datetime",{attrs:{format:"YYYY-MM-DD HH:mm","year-row":"{value}年","month-row":"{value}月","day-row":"{value}日","hour-row":"{value}点","minute-row":"{value}分"},on:{"on-change":t.changeStart},model:{value:t.hourListValue,callback:function(e){t.hourListValue=e},expression:"hourListValue"}})],1)],1)],1)],1),t._v(" "),a("div",{staticClass:"group-item"},[a("span",{staticClass:"bg-line"}),t._v(" "),a("group-title",{staticStyle:{"margin-left":"0.15rem"},attrs:{slot:"title"},slot:"title"},[a("b",[t._v("汇报类型："),a("span",{staticStyle:{color:"#999999"}},[t._v("书面汇报")])])])],1),t._v(" "),a("div",{staticClass:"group-item"},[a("span",{staticClass:"bg-line"}),t._v(" "),a("group-title",{staticStyle:{"margin-left":"0.15rem"},attrs:{slot:"title"},slot:"title"},[a("b",{staticClass:"colorSet"},[t._v("党员思想汇报主要内容：")])]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.activeContent,expression:"activeContent"}],attrs:{cols:"30",rows:"10",maxlength:"300"},domProps:{value:t.activeContent},on:{input:function(e){e.target.composing||(t.activeContent=e.target.value)}}})],1),t._v(" "),a("div",{staticClass:"group-item"},[a("span",{staticClass:"bg-line"}),t._v(" "),a("group-title",{staticStyle:{"margin-left":"0.15rem"},attrs:{slot:"title"},slot:"title"},[a("b",[t._v("思想汇报图片："),a("span",{staticStyle:{color:"#999999"}},[t._v("最多可传10张")])])]),t._v(" "),a("div",{staticClass:"photo-list cl"},[a("ul",[t._l(t.picList.list,function(e,i){return a("li",[a("div",{staticClass:"preview"},[a("img",{key:i,staticStyle:{float:"left",width:"100%"},attrs:{width:"100",src:e},on:{touchend:t.clearLoop,touchstart:function(e){t.showDeleteButton(i)}}})])])}),t._v(" "),a("li",[a("div",{staticClass:"preview addUpload",on:{click:function(e){t.chooseImage(t.picList)}}},[a("span",{staticClass:"add-bg"})])])],2)])],1),t._v(" "),a("div",{staticClass:"group-item",staticStyle:{"margin-top":"0.8rem"}},[a("group-title",{attrs:{slot:"title"},slot:"title"}),t._v(" "),a("x-button",{attrs:{type:"warn"},nativeOn:{click:function(e){t.submit()}}},[t._v("\n            提交支部书记审核\n        ")])],1)],1)},[],!1,T,"data-v-62879b6c",null);e.default=Y.exports},MxWD:function(t,e){}});
//# sourceMappingURL=15.45ed241bc21938e57945.js.map