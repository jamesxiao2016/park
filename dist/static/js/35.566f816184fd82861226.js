webpackJsonp([35],{WrN2:function(t,e){},lVAE:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("//Fk"),a=i.n(s),r=i("ABCa"),n=i("YxJB"),o=i("3Lt7"),c=i("63CM"),l=i("2FOq"),u=i("fxnj"),d=i.n(u),p=i("zlMP"),h=(r.a,n.a,o.a,l.a,c.a,{components:{XHeader:r.a,Flexbox:n.a,FlexboxItem:o.a,Previewer:l.a},directives:{clipping:{inserted:function(t,e){var i=new Image;i.onload=function(){i.width>i.height?t.style.height="100%":t.style.width="100%",t.src=e.value},i.src=e.value}},TransferDom:c.a},data:function(){return{list:[],imgs:[],imgIds:[],pictures:[],options:{getThumbBoundsFn:function(t){var e=document.querySelectorAll(".previewer-demo-img")[t],i=window.pageYOffset||document.documentElement.scrollTop,s=e.getBoundingClientRect();return{x:s.left,y:s.top+i,w:s.width}}},roleid:this.$store.getters.user.roleid}},mounted:function(){p.a.init(["chooseImage","uploadImage"]),this.getList()},methods:{datePick:function(t){return Date.prototype.toLocaleString=function(){return this.getMonth()+1+"月"+this.getDate()+"日 "},new Date(t).toLocaleString()},logIndexChange:function(t){console.log(t)},atShow:function(t,e){this.$refs.previewer[e].show(t)},getList:function(){var t=this;this.$http.get("active/getParticipateActive",{params:{pageNum:1,pageSize:200,departmentid:this.$store.getters.user.departmentid,userId:this.$store.getters.user.userid}}).then(function(e){t.list=e.data.list,console.log(t.list),t.list.forEach(function(t){t.pictureList=[];for(var e=0;e<t.pictures.length;e++){var i={};i.msrc="http://www.dlbdata.cn/dangjian/picture/show?pictureId="+t.pictures[e].pictureId,i.src="http://www.dlbdata.cn/dangjian/picture/show?pictureId="+t.pictures[e].pictureId,t.pictureList.push(i)}})}).catch(function(t){console.log("fail"+t.data)})},chooseImage:function(){var t=this;d.a.chooseImage({count:9,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(e){var i=e.localIds||[];new a.a(function(t){var e=[];i.length?function s(a){return d.a.uploadImage({localId:a,isShowProgressTips:1,success:function(a){e.push(a.serverId),i.length?s(i.shift()):t(e)}})}(i.shift()):t(e)}).then(function(e){var i=[];e.map(function(e){return i.push(t.$http.get("picture/upload",{params:{mediaId:e}}))}),a.a.all(i).then(function(e){var i=[];e.map(function(t){return i.push(t.data)}),t.imgIds.push("pictureIds:"+i.join())})})}})}}}),g=i("XyMi");var m=function(t){i("WrN2")},f=Object(g.a)(h,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-body"},[s("x-header",{attrs:{"left-options":{showBack:!1}}},[t._v("\n            党员活动\n            "),s("router-link",{attrs:{slot:"right",to:{name:"activeNews"}},slot:"right"},[t._v("发起活动")])],1),t._v(" "),s("div",{staticClass:"box"},t._l(t.list,function(e,a){return s("flexbox",{key:a,staticClass:"list-item",attrs:{gutter:0,align:"stretch"}},[s("flexbox-item",{staticClass:"list-avatar"},[s("img",{attrs:{src:i("1UPx")}})]),t._v(" "),s("flexbox-item",{staticClass:"list-body"},[s("router-link",{attrs:{to:{name:"activePost",params:{activeId:e.id}}}},[s("flexbox",{attrs:{align:"start"}},[s("flexbox-item",{staticClass:"list-head"},[s("b",[t._v(t._s(e.activeName))]),t._v(" "),s("p",[t._v(t._s(t.datePick(e.createTime)))])])],1),t._v(" "),s("div",{staticClass:"list-content",domProps:{innerHTML:t._s(e.active_Context)}})],1),t._v(" "),s("flexbox",{staticClass:"images-preview",attrs:{gutter:0,wrap:"wrap"}},[t._l(e.pictureList,function(e,i){return s("flexbox-item",{key:i,attrs:{span:1/3}},[s("div",[s("img",{staticClass:"previewer-demo-img",attrs:{src:e.src},on:{click:function(e){t.atShow(i,a)}}})])])}),t._v(" "),s("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[s("previewer",{ref:"previewer",refInFor:!0,attrs:{list:e.pictureList,options:t.options},on:{"on-index-change":t.logIndexChange}})],1),t._v(" "),s("flexbox-item",{directives:[{name:"show",rawName:"v-show",value:4!=t.roleid,expression:"roleid != 4"}],attrs:{span:1/3}},[s("a",{staticClass:"btn-plus",on:{click:t.chooseImage}})])],2),t._v(" "),t._l(t.imgIds,function(e,i){return s("div",{key:i},[t._v("\n                        "+t._s(e)+"\n                    ")])})],2)],1)}))],1)},[],!1,m,"data-v-3359d5fc",null);e.default=f.exports}});
//# sourceMappingURL=35.566f816184fd82861226.js.map