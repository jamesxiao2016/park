webpackJsonp([37],{SDSK:function(t,e){},dgTT:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("//Fk"),s=i.n(a),r=i("ABCa"),n=i("YxJB"),o=i("3Lt7"),c=i("63CM"),l=i("2FOq"),u=i("fxnj"),p=i.n(u),d=i("zlMP"),m=i("mtWM"),v=i.n(m),h=(r.a,n.a,o.a,l.a,c.a,{components:{XHeader:r.a,Flexbox:n.a,FlexboxItem:o.a,Previewer:l.a},directives:{clipping:{inserted:function(t,e){var i=new Image;i.onload=function(){i.width>i.height?t.style.height="100%":t.style.width="100%",t.src=e.value},i.src=e.value}},TransferDom:c.a},data:function(){return{list:[],imgs:[],roleid:this.$store.getters.user.roleid}},mounted:function(){d.a.init(["chooseImage","uploadImage"]),this.getList()},methods:{datePick:function(t){return Date.prototype.toLocaleString=function(){return this.getMonth()+1+"月"+this.getDate()+"日 "},new Date(t).toLocaleString()},preview:function(t,e){this.$refs.previewer[t].show(e)},getList:function(){var t=this;this.$http.get("active/getParticipateActive",{params:{pageNum:1,pageSize:200,departmentid:this.$store.getters.user.departmentid,userId:this.$store.getters.user.userid}}).then(function(e){t.list=e.data.list,console.log(t.list.pictures),t.list.forEach(function(t,e){t.previewerClassName="previewer-"+e+"-img",t.previewerOptions={getThumbBoundsFn:function(e){var i=document.querySelectorAll("."+t.previewerClassName)[e],a=window.pageYOffset||document.documentElement.scrollTop,s=i.getBoundingClientRect();return{x:s.left,y:s.top+a,w:s.width}}},t.pictures=t.pictures||[],t.pictures.forEach(function(t){t.src="http://www.dlbdata.cn/dangjian/picture/showThumbnail?pictureId="+t.pictureId})})})},chooseImage:function(t){var e=this,i=9-t.pictures.length;i&&p.a.chooseImage({count:i,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(i){var a=i.localIds||[];new s.a(function(t){var e=[];a.length?function i(s){return p.a.uploadImage({localId:s,isShowProgressTips:1,success:function(s){e.push(s.serverId),a.length?i(a.shift()):t(e)}})}(a.shift()):t(e)}).then(function(i){return e.uploadImage(t,i)})}})},uploadImage:function(t,e){var i=this,a=[];e.map(function(t){return a.push(i.$http.get("picture/upload",{params:{mediaId:t}}))}),s.a.all(a).then(function(e){return e.map(function(e){t.pictures.push({src:"http://www.dlbdata.cn/dangjian/picture/showThumbnail?pictureId="+e.data}),v()({url:"active/savePicture",method:"post",headers:{contentType:"application/x-www-form-urlencoded"},params:{activeId:t.id,pictureId:e.data}}).then(function(t){i.$vux.alert.show({title:t.msg})}).catch(function(t){i.$vux.alert.show({title:"提交失败"})})})})}}}),f=i("XyMi");var g=function(t){i("SDSK")},w=Object(f.a)(h,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-body"},[a("x-header",{staticClass:"bgColors",attrs:{"left-options":{showBack:!1}}},[t._v("\n        党员活动\n        "),a("router-link",{attrs:{slot:"right",to:{name:"activeNews"}},slot:"right"},[t._v("发起活动")])],1),t._v(" "),a("div",{staticClass:"box"},t._l(t.list,function(e,s){return a("flexbox",{key:s,staticClass:"list-item",attrs:{gutter:0,align:"stretch"}},[a("flexbox-item",{staticClass:"list-avatar"},[a("img",{attrs:{src:i("1UPx")}})]),t._v(" "),a("flexbox-item",{staticClass:"list-body"},[a("router-link",{attrs:{to:{name:"activePost",params:{activeId:e.id}}}},[a("flexbox",{attrs:{align:"start"}},[a("flexbox-item",{staticClass:"list-head"},[a("b",[t._v(t._s(e.activeName))]),t._v(" "),a("p",[t._v(t._s(t.datePick(e.createTime)))])])],1),t._v(" "),a("div",{staticClass:"list-content",domProps:{innerHTML:t._s(e.active_Context)}})],1),t._v(" "),a("flexbox",{staticClass:"images-preview",attrs:{gutter:0,wrap:"wrap"}},[t._l(e.pictures,function(i,r){return a("flexbox-item",{key:r,attrs:{span:1/3}},[a("div",[a("img",{directives:[{name:"clipping",rawName:"v-clipping",value:i.src,expression:"img.src"}],class:e.previewerClassName,on:{click:function(e){t.preview(s,r)}}})])])}),t._v(" "),4!==t.roleid&&e.pictures.length<9?a("flexbox-item",{attrs:{span:1/3}},[a("a",{staticClass:"btn-plus",on:{click:function(i){t.chooseImage(e)}}})]):t._e()],2),t._v(" "),a("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[a("previewer",{ref:"previewer",refInFor:!0,attrs:{list:e.pictures,options:e.previewerOptions}})],1)],1)],1)}))],1)},[],!1,g,"data-v-31a7b442",null);e.default=w.exports}});
//# sourceMappingURL=37.911526076aa215b37c71.js.map