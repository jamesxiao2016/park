webpackJsonp([7],{"162o":function(t,e,i){(function(t){var a=Function.prototype.apply;function n(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new n(a.call(setTimeout,window,arguments),clearTimeout)},e.setInterval=function(){return new n(a.call(setInterval,window,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},n.prototype.unref=n.prototype.ref=function(){},n.prototype.close=function(){this._clearFn.call(window,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},i("mypn"),e.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==t&&t.clearImmediate||this&&this.clearImmediate}).call(e,i("DuR2"))},JDQa:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("//Fk"),n=i.n(a),o=i("mtWM"),s=i.n(o),r=i("ABCa"),l=i("1HIy"),c=i("YxJB"),u=i("63CM"),m=i("mzja"),d=i("3Lt7"),p=i("2sLL"),f=i("oVYx"),h=i("UNGY"),v=i("rHil"),g=i("taJy"),y=i("2FOq"),w=i("fxnj"),x=i.n(w),b=i("zlMP"),T=i("162o"),_=(u.a,r.a,l.a,c.a,d.a,p.a,f.a,h.a,v.a,g.a,m.a,y.a,{directives:{TransferDom:u.a},components:{XHeader:r.a,GroupTitle:l.a,Flexbox:c.a,FlexboxItem:d.a,XButton:p.a,DatetimePlugin:f.a,Datetime:h.a,Group:v.a,Picker:g.a,Alert:m.a,Previewer:y.a},data:function(){return{name1:"",value1:"",startTime:"",endTime:"",hourListValue:"",hot:"",ListValue:"",list1:[{text:"口头汇报",moduleId:11},{text:"书面汇报",moduleId:12}],list1Selected:{},activeContent:"",listSingle:{},userName:"",picList:{list:[],arr:[]}}},methods:{getUser1:function(){var t=this;s.a.get("ppartymember/queryByUserId",{params:{userid:this.$route.params.userId}}).then(function(e){t.name1=e.data.name}).catch(function(t){console.log(t)})},showDeleteButton:function(t){clearInterval(this.Loop);var e=this;this.Loop=Object(T.setTimeout)(function(){e.picList.list.splice(t,1),e.picList.arr.splice(t,1),e.$vux.alert.show({title:"删除成功"})},1e3)},clearLoop:function(){clearInterval(this.Loop)},atBig:function(t){},getList:function(){var t=this;s.a.get("pscoredetail/queryById",{params:{id:this.$route.params.moduleid}}).then(function(e){t.listSingle=e.data}).catch(function(t){console.log("fail"+t.data)})},getUser:function(){var t=this;s.a.get("ppartymember/queryByUserId",{params:{userid:this.$store.getters.user.userid}}).then(function(e){t.userName=e.data.name}).catch(function(t){console.log(t)})},openPicker:function(){this.$refs.picker.open()},submit:function(){var t=this,e=this.startTime.replace(new RegExp("-","gm"),"/");new Date(e).getTime();return e?this.activeContent?this.picList.arr.length?void s()({url:"pscoreparty/scoreCustom",method:"post",params:{detailId:12,userId:this.$route.params.userId,adderId:this.$store.getters.user.userid,score:5,imgs:this.picList.arr.join(),remark:this.activeContent,addTimes:new Date(this.startTime.replace(/-/gi,"/")).getTime()}}).then(function(e){console.log(e),e.success?(t.$vux.alert.show({title:"增加成功"}),Object(T.setTimeout)(function(){t.$vux.alert.hide(),Object(T.setTimeout)(function(){return history.back()},1e3)},3e3)):(t.$vux.alert.show({title:e.msg}),Object(T.setTimeout)(function(){t.$vux.alert.hide()},1e3))}).catch(function(e){e.success&&(t.$vux.alert.show({title:"增加失败"}),Object(T.setTimeout)(function(){t.$vux.alert.hide()},1e3))}):this.$vux.toast.show({text:"请上传图片",type:"text"}):this.$vux.toast.show({text:"请填写内容",type:"text"}):this.$vux.toast.show({text:"请设置时间",type:"text"})},getActivity:function(){},log:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";console.log(t,e)},showPlugin:function(){this.$vux.datetime.show({cancelText:"取消",confirmText:"确定",format:"YYYY-MM-DD HH",value:"2017-05-20 18",onConfirm:function(t){console.log("plugin confirm",t)},onShow:function(){console.log("plugin show")},onHide:function(){console.log("plugin hide")}})},toggleFormat:function(){this.format="YYYY-MM-DD HH:mm"===this.format?"YYYY-MM-DD":"YYYY-MM-DD HH:mm"},changeStart:function(t){this.startTime=t},changeEnd:function(t){this.endTime=t},clearValue:function(t){this.value6=""},clearValue8:function(t){this.value8=""},setToday:function(t){var e=new Date,i=e.getMonth()+1,a=e.getDate();i<10&&(i="0"+i),a<10&&(a="0"+a),this.value7=e.getFullYear()+"-"+i+"-"+a,console.log("set today ok")},chooseImage:function(t){var e=this;x.a.chooseImage({count:3,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(i){var a=i.localIds||[];new n.a(function(t){var e=[];a.length?function i(n){return x.a.uploadImage({localId:n,isShowProgressTips:1,success:function(n){e.push(n.serverId),a.length?i(a.shift()):t(e)}})}(a.shift()):t(e)}).then(function(i){var a=[];i.map(function(t){return a.push(e.$http.get("picture/upload",{params:{mediaId:t}}))}),n.a.all(a).then(function(e){var i=[];e.map(function(t){return i.push(t.data)}),t.list.push("http://www.dlbdata.cn/dangjian/picture/showThumbnail?pictureId="+i.join()),t.arr.push(i.join())})})}})}},mounted:function(){var t=this;b.a.init(["chooseImage","uploadImage"]),this.list1Selected=this.list1.find(function(e){return e.moduleId==t.$route.params.moduleid}),this.getUser1()}}),I=i("XyMi");var C=function(t){i("T7O+"),i("MxWD")},M=Object(I.a)(_,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-body disabled-tabbar"},[i("x-header",[t._v("思想汇报评分")]),t._v(" "),i("div",{staticClass:"group-item"},[i("span",{staticClass:"bg-line"}),t._v(" "),i("group-title",{staticStyle:{"margin-left":"0.15rem"},attrs:{slot:"title"},slot:"title"},[i("b",[t._v("党员姓名：\n                "),i("span",{staticStyle:{color:"#999999"}},[t._v(t._s(t.name1))])])])],1),t._v(" "),i("div",{staticClass:"group-item"},[i("span",{staticClass:"bg-line"}),t._v(" "),i("group-title",{staticStyle:{"margin-left":"0.15rem"},attrs:{slot:"title"},slot:"title"},[i("b",[t._v("时间:")])]),t._v(" "),i("flexbox",{attrs:{gutter:0}},[i("flexbox-item",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.startTime,expression:"startTime"}],attrs:{type:"text"},domProps:{value:t.startTime},on:{input:function(e){e.target.composing||(t.startTime=e.target.value)}}})]),t._v(" "),i("flexbox-item",{staticClass:"input-addon",staticStyle:{position:"relative"}},[i("x-button",{attrs:{mini:"",type:"warn"}},[i("i",{staticClass:"iconfont dlb-icon-rili"})]),t._v(" "),i("group",{staticClass:"date-no-box"},[i("datetime",{attrs:{format:"YYYY-MM-DD HH:mm","year-row":"{value}年","month-row":"{value}月","day-row":"{value}日","hour-row":"{value}点","minute-row":"{value}分"},on:{"on-change":t.changeStart},model:{value:t.hourListValue,callback:function(e){t.hourListValue=e},expression:"hourListValue"}})],1)],1)],1)],1),t._v(" "),i("div",{staticClass:"group-item"},[i("span",{staticClass:"bg-line"}),t._v(" "),i("group-title",{staticStyle:{"margin-left":"0.15rem"},attrs:{slot:"title"},slot:"title"},[i("b",[t._v("汇报类型：\n                "),i("span",{staticStyle:{color:"#999999"}},[t._v(t._s(t.list1Selected.text))])])])],1),t._v(" "),i("div",{staticClass:"group-item"},[i("span",{staticClass:"bg-line"}),t._v(" "),i("group-title",{staticStyle:{"margin-left":"0.15rem"},attrs:{slot:"title"},slot:"title"},[i("b",{staticClass:"colorSet"},[t._v("党员思想汇报主要内容：")])]),t._v(" "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.activeContent,expression:"activeContent"}],attrs:{cols:"30",rows:"10",maxlength:"300"},domProps:{value:t.activeContent},on:{input:function(e){e.target.composing||(t.activeContent=e.target.value)}}})],1),t._v(" "),i("div",{staticClass:"group-item"},[i("span",{staticClass:"bg-line"}),t._v(" "),i("group-title",{staticStyle:{"margin-left":"0.15rem"},attrs:{slot:"title"},slot:"title"},[i("b",[t._v("思想汇报图片：\n                "),i("span",{staticStyle:{color:"#999999"}},[t._v("最多可传10张")])])]),t._v(" "),i("div",{staticClass:"photo-list cl"},[i("ul",[t._l(t.picList.list,function(e,a){return i("li",{key:a},[i("div",{staticClass:"preview"},[i("img",{key:a,staticStyle:{float:"left",width:"100%"},attrs:{width:"100",src:e},on:{touchend:t.clearLoop,touchstart:function(e){t.showDeleteButton(a)}}})])])}),t._v(" "),i("li",[i("div",{staticClass:"preview addUpload",on:{click:function(e){t.chooseImage(t.picList)}}},[i("span",{staticClass:"add-bg"})])])],2)])],1),t._v(" "),i("div",{staticClass:"group-item",staticStyle:{"margin-top":"0.8rem"}},[i("group-title",{attrs:{slot:"title"},slot:"title"}),t._v(" "),i("x-button",{attrs:{type:"warn"},nativeOn:{click:function(e){t.submit()}}},[t._v("\n            提交支部书记审核\n        ")])],1)],1)},[],!1,C,"data-v-83f8339e",null);e.default=M.exports},MxWD:function(t,e){},"T7O+":function(t,e){},mypn:function(t,e,i){(function(t,e){!function(t,i){"use strict";if(!t.setImmediate){var a,n,o,s,r,l=1,c={},u=!1,m=t.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(t);d=d&&d.setTimeout?d:t,"[object process]"==={}.toString.call(t.process)?a=function(t){e.nextTick(function(){f(t)})}:!function(){if(t.postMessage&&!t.importScripts){var e=!0,i=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=i,e}}()?t.MessageChannel?((o=new MessageChannel).port1.onmessage=function(t){f(t.data)},a=function(t){o.port2.postMessage(t)}):m&&"onreadystatechange"in m.createElement("script")?(n=m.documentElement,a=function(t){var e=m.createElement("script");e.onreadystatechange=function(){f(t),e.onreadystatechange=null,n.removeChild(e),e=null},n.appendChild(e)}):a=function(t){setTimeout(f,0,t)}:(s="setImmediate$"+Math.random()+"$",r=function(e){e.source===t&&"string"==typeof e.data&&0===e.data.indexOf(s)&&f(+e.data.slice(s.length))},t.addEventListener?t.addEventListener("message",r,!1):t.attachEvent("onmessage",r),a=function(e){t.postMessage(s+e,"*")}),d.setImmediate=function(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),i=0;i<e.length;i++)e[i]=arguments[i+1];var n={callback:t,args:e};return c[l]=n,a(l),l++},d.clearImmediate=p}function p(t){delete c[t]}function f(t){if(u)setTimeout(f,0,t);else{var e=c[t];if(e){u=!0;try{!function(t){var e=t.callback,a=t.args;switch(a.length){case 0:e();break;case 1:e(a[0]);break;case 2:e(a[0],a[1]);break;case 3:e(a[0],a[1],a[2]);break;default:e.apply(i,a)}}(e)}finally{p(t),u=!1}}}}}("undefined"==typeof self?void 0===t?this:t:self)}).call(e,i("DuR2"),i("W2nU"))}});
//# sourceMappingURL=7.236826387c3c153b49c9.js.map