webpackJsonp([38],{"nKx+":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("//Fk"),s=a.n(i),n=a("ABCa"),r=a("YxJB"),o=a("3Lt7"),c=a("63CM"),l=a("2FOq"),p=a("fxnj"),d=a.n(p),u=a("zlMP"),h=a("mtWM"),m=a.n(h),v=(n.a,r.a,o.a,l.a,c.a,{components:{XHeader:n.a,Flexbox:r.a,FlexboxItem:o.a,Previewer:l.a},directives:{clipping:{inserted:function(t,e){var a=new Image;a.onload=function(){a.width>a.height?t.style.height="100%":t.style.width="100%",t.src=e.value},a.src=e.value}},TransferDom:c.a},data:function(){return{list:[],imgs:[],roleid:this.$store.getters.user.roleid,partyBranch1:"",topShow:!1,showTrans:!1,department:"",departmentids:"",activeS:!1,activesId:1}},mounted:function(){this.getlist1(),u.a.init(["chooseImage","uploadImage"])},methods:{change:function(t){this.activesId=t.departmentid,this.partyBranch1=t.departmentname,this.departmentids=t.departmentid,this.partyBranch=t.partyBranch,this.topShow=!this.topShow,this.showTrans=!this.showTrans,this.getList()},getlist1:function(){var t=this;m()({method:"get",url:"pdepartment/getList"}).then(function(e){t.department=e.data,console.log(e.data),t.partyBranch1=t.department[0].departmentname,t.departmentids=t.department[0].departmentid,t.getList(),m()({method:"get",url:"ppartymember/getPartymemberByDepartmentid",params:{departmentid:t.departmentids,status:1}}).then(function(e){t.length2=e.data.length}).catch(function(t){console.log(t)})}).catch(function(t){console.log(t)})},showDet:function(){this.topShow=!this.topShow,this.showTrans=!this.showTrans},datePick:function(t){return Date.prototype.toLocaleString=function(){return this.getMonth()+1+"月"+this.getDate()+"日 "},new Date(t).toLocaleString()},preview:function(t,e){this.$refs.previewer[t].show(e)},getList:function(){var t=this;this.$http.get("active/getRunningActive",{params:{pageNum:1,pageSize:200,departmentid:this.departmentids,userId:this.$store.getters.user.userid}}).then(function(e){t.list=e.data.list,t.list.forEach(function(t,e){t.previewerClassName="previewer-"+e+"-img",t.previewerOptions={getThumbBoundsFn:function(e){var a=document.querySelectorAll("."+t.previewerClassName)[e],i=window.pageYOffset||document.documentElement.scrollTop,s=a.getBoundingClientRect();return{x:s.left,y:s.top+i,w:s.width}}},t.pictures=t.pictures||[],t.startTime=t.startTime,t.pictures.forEach(function(t){t.msrc="http://www.dlbdata.cn/dangjian/picture/showThumbnail?pictureId="+t.pictureId,t.src="http://www.dlbdata.cn/dangjian/picture/show?pictureId="+t.pictureId})})})},chooseImage:function(t){var e=this,a=9-t.pictures.length;a&&d.a.chooseImage({count:a,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(a){var i=a.localIds||[];new s.a(function(t){var e=[];i.length?function a(s){return d.a.uploadImage({localId:s,isShowProgressTips:1,success:function(s){e.push(s.serverId),i.length?a(i.shift()):t(e)}})}(i.shift()):t(e)}).then(function(a){return e.uploadImage(t,a)})}})},uploadImage:function(t,e){var a=this,i=[];e.map(function(t){return i.push(a.$http.get("picture/upload",{params:{mediaId:t}}))}),s.a.all(i).then(function(e){return e.map(function(e){t.pictures.push({msrc:"http://www.dlbdata.cn/dangjian/picture/showThumbnail?pictureId="+e.data,src:"http://www.dlbdata.cn/dangjian/picture/show?pictureId="+e.data}),m()({url:"active/savePicture",method:"post",headers:{contentType:"application/x-www-form-urlencoded"},params:{activeId:t.id,pictureId:e.data}}).then(function(t){a.$vux.toast.show({text:t.msg,type:"text"})}).catch(function(t){a.$vux.toast.show({text:"提交失败",type:"text"})})})})}}}),g=a("XyMi");var w=function(t){a("ueQ2")},f=Object(g.a)(v,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-body"},[i("x-header",{attrs:{"left-options":{showBack:!1}}},[t._v("\n        片区活动\n        "),i("router-link",{attrs:{slot:"right",to:{name:"activeNews2"}},slot:"right"},[t._v("发起活动")])],1),t._v(" "),i("div",{staticClass:"box"},[i("flexbox",[i("div",{staticClass:"header-list"},[i("div",{staticClass:"list-left"},[i("span",{staticClass:"left-now"},[t._v("当前支部：")]),t._v(" "),i("span",{staticClass:"left-active"},[t._v(t._s(t.partyBranch1))])]),t._v(" "),i("div",{staticClass:"right-btn",on:{click:t.showDet}},[t._v("切换"),i("span")])])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.topShow,expression:"topShow"}],staticClass:"animate-down",staticStyle:{"background-color":"#FFFFFF"}},t._l(t.department,function(e,a){return i("div",{key:a,staticClass:"bg-flag",class:[e.departmentid===t.activesId?"activeColors":""],on:{click:function(a){t.change(e)}}},[t._v("\n                "+t._s(e.departmentname)+"\n            ")])})),t._v(" "),t._l(t.list,function(e,s){return i("flexbox",{key:s,staticClass:"list-item",attrs:{gutter:0,align:"stretch"}},[i("flexbox-item",{staticClass:"list-avatar"},[i("img",{attrs:{src:a("1UPx")}})]),t._v(" "),i("flexbox-item",{staticClass:"list-body"},[i("router-link",{attrs:{to:{name:"activePost",params:{activeId:e.id}}}},[i("flexbox",{attrs:{align:"start"}},[i("flexbox-item",{staticClass:"list-head"},[i("b",[t._v(t._s(e.activeName))]),t._v(" "),i("p",[t._v(t._s(t.datePick(e.createTime)))])])],1),t._v(" "),i("div",{staticClass:"list-content",domProps:{innerHTML:t._s(e.active_Context)}})],1),t._v(" "),i("flexbox",{staticClass:"images-preview",attrs:{gutter:0,wrap:"wrap"}},[t._l(e.pictures,function(a,n){return i("flexbox-item",{key:n,attrs:{span:1/3}},[i("div",[i("img",{directives:[{name:"clipping",rawName:"v-clipping",value:a.msrc,expression:"img.msrc"}],class:e.previewerClassName,on:{click:function(e){t.preview(s,n)}}})])])}),t._v(" "),4!==t.roleid&&e.pictures.length<9?i("flexbox-item",{directives:[{name:"show",rawName:"v-show",value:e.startTime>(new Date).getTime(),expression:"item.startTime > new Date().getTime()"}],attrs:{span:1/3}},[i("a",{staticClass:"btn-plus",on:{click:function(a){t.chooseImage(e)}}})]):t._e()],2),t._v(" "),i("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[i("previewer",{ref:"previewer",refInFor:!0,attrs:{list:e.pictures,options:e.previewerOptions}})],1)],1)],1)})],2)],1)},[],!1,w,"data-v-43be8d87",null);e.default=f.exports},ueQ2:function(t,e){}});
//# sourceMappingURL=38.f6bc6161f6370dc62c80.js.map