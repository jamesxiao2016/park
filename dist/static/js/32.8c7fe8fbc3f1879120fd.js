webpackJsonp([32],{"4Ile":function(t,e){},Ydxj:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("//Fk"),a=i.n(s),r=i("ABCa"),n=i("YxJB"),o=i("3Lt7"),c=i("2FOq"),l=i("63CM"),u=i("fxnj"),p=i.n(u),d=i("zlMP"),v=(r.a,n.a,o.a,c.a,l.a,{components:{XHeader:r.a,Flexbox:n.a,FlexboxItem:o.a,Previewer:c.a},directives:{clipping:{inserted:function(t,e){var i=new Image;i.onload=function(){i.width>i.height?t.style.height="100%":t.style.width="100%",t.src=e.value},i.src=e.value}},TransferDom:l.a},data:function(){return{list:[]}},mounted:function(){d.a.init(["chooseImage","uploadImage"]),this.getList()},methods:{datePick:function(t){return Date.prototype.toLocaleString=function(){return this.getMonth()+1+"月"+this.getDate()+"日 "},new Date(t).toLocaleString()},getList:function(){var t=this;this.$http.get("active/getParticipateActive",{params:{pageNum:1,pageSize:200,departmentid:this.$store.getters.user.departmentid,userId:this.$store.getters.user.userid}}).then(function(e){t.list=e.data.list,t.list.forEach(function(t,e){t.previewerClassName="previewer-"+e+"-img",t.previewerOptions={getThumbBoundsFn:function(e){var i=document.querySelectorAll("."+t.previewerClassName)[e],s=window.pageYOffset||document.documentElement.scrollTop,a=i.getBoundingClientRect();return{x:a.left,y:a.top+s,w:a.width}}},t.pictures=t.pictures||[],t.pictures.forEach(function(t){t.src="http://www.dlbdata.cn/dangjian/picture/show?pictureId="+t.pictureId})})})},preview:function(t,e){this.$refs.previewer[t].show(e)},chooseImage:function(t){var e=this,i=9-t.pictures.length;i&&p.a.chooseImage({count:i,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(i){var s=i.localIds||[];new a.a(function(t){var e=[];s.length?function i(a){return p.a.uploadImage({localId:a,isShowProgressTips:1,success:function(a){e.push(a.serverId),s.length?i(s.shift()):t(e)}})}(s.shift()):t(e)}).then(function(i){var s=[];i.map(function(t){return s.push(e.$http.get("picture/upload",{params:{mediaId:t}}))}),a.a.all(s).then(function(e){e.map(function(e){t.pictures.push({src:"http://www.dlbdata.cn/dangjian/picture/show?pictureId="+e.data})})})})}})}}}),m=i("XyMi");var f=function(t){i("4Ile")},h=Object(m.a)(v,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-body"},[s("x-header",{attrs:{"left-options":{showBack:!1}}},[t._v("\n        党员活动\n        "),s("router-link",{attrs:{slot:"right",to:{name:"activeNews"}},slot:"right"},[t._v("发起活动")])],1),t._v(" "),s("div",{staticClass:"box"},t._l(t.list,function(e,a){return s("flexbox",{key:a,staticClass:"list-item",attrs:{gutter:0,align:"stretch"}},[s("flexbox-item",{staticClass:"list-avatar"},[s("img",{attrs:{src:i("1UPx")}})]),t._v(" "),s("flexbox-item",{staticClass:"list-body"},[s("router-link",{attrs:{to:{name:"activePost",params:{activeId:e.id}}}},[s("flexbox",{attrs:{align:"start"}},[s("flexbox-item",{staticClass:"list-head"},[s("b",[t._v(t._s(e.activeName))]),t._v(" "),s("p",[t._v(t._s(t.datePick(e.createTime)))])])],1),t._v(" "),s("div",{staticClass:"list-content",domProps:{innerHTML:t._s(e.active_Context)}})],1),t._v(" "),s("flexbox",{staticClass:"images-preview",attrs:{gutter:0,wrap:"wrap"}},[t._l(e.pictures,function(i,r){return s("flexbox-item",{key:r,attrs:{span:1/3}},[s("div",[s("img",{directives:[{name:"clipping",rawName:"v-clipping",value:i.src,expression:"img.src"}],class:e.previewerClassName,on:{click:function(e){t.preview(a,r)}}})])])}),t._v(" "),s("flexbox-item",{directives:[{name:"show",rawName:"v-show",value:e.pictures.length<9,expression:"item.pictures.length<9"}],attrs:{span:1/3}},[s("a",{staticClass:"btn-plus",on:{click:function(i){t.chooseImage(e)}}})])],2),t._v(" "),s("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[s("previewer",{ref:"previewer",refInFor:!0,attrs:{list:e.pictures,options:e.previewerOptions}})],1)],1)],1)}))],1)},[],!1,f,"data-v-54fe0adc",null);e.default=h.exports}});
//# sourceMappingURL=32.8c7fe8fbc3f1879120fd.js.map