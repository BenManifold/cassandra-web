webpackJsonp([1],{"0DJ8":function(e,t){},"1qvS":function(e,t){},"7GRK":function(e,t){},"7bcC":function(e,t){},BMy3:function(e,t){},CT0B:function(e,t){},IwlT:function(e,t){},KZ8L:function(e,t){},LJE9:function(e,t){},LuM7:function(e,t){},Mobx:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});a("7bcC"),a("jDwb");var n=a("2X9z"),r=a.n(n),s=(a("Mobx"),a("+TD8")),o=a.n(s),c=(a("vkwB"),a("HJMx")),u=a.n(c),i=(a("0DJ8"),a("6oiW")),l=a.n(i),p=(a("UjAo"),a("eBGF")),f=a.n(p),d=(a("KZ8L"),a("fDPO")),h=a.n(d),m=(a("jlNI"),a("RDoK")),y=a.n(m),w=(a("Sm8n"),a("oTyR")),g=a.n(w),v=(a("ovMW"),a("6mNG")),k=a.n(v),b=(a("QIAS"),a("D8db")),x=a.n(b),C=(a("lh9Z"),a("ACGT")),$=a.n(C),_=(a("BMy3"),a("exT9")),S=a.n(_),E=(a("SUQY"),a("SExR")),q=a.n(E),T=(a("CT0B"),a("q4le")),j=a.n(T),z=(a("sCLk"),a("LR6y")),M=a.n(z),F=(a("a9Mr"),a("nu7/")),Q=a.n(F),R=a("7+uW"),D=a("wUZ8"),A=a.n(D),L=a("urW8"),U=a.n(L);a("LuM7");U.a.use(A.a),R.default.use(Q.a.directive),R.default.use(M.a),R.default.use(j.a),R.default.use(q.a),R.default.use(S.a),R.default.use($.a),R.default.use(x.a),R.default.use(k.a),R.default.use(g.a),R.default.use(y.a),R.default.use(h.a),R.default.use(f.a),R.default.use(l.a),R.default.use(u.a),R.default.config.lang="en-us",R.default.prototype.$loading=Q.a.service,R.default.prototype.$prompt=o.a.prompt,R.default.prototype.$msgbox=o.a,R.default.prototype.$message=r.a;var B={render:function(){var e=this.$createElement;return(this._self._c||e)("router-view",{directives:[{name:"loading",rawName:"v-loading",value:!1,expression:"false"}]})},staticRenderFns:[]};var G=a("VU/8")({name:"App"},B,!1,function(e){a("1qvS")},null,null).exports,O=a("/ocq"),P={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container"},[t("div",{staticClass:"content"},[t("div",{staticClass:"title"},[t("router-link",{attrs:{to:"/keyspace"}},[this._v("Cassandra-Web")])],1)])])},staticRenderFns:[]};var N=a("VU/8")({name:"Home",data:function(){return{}},created:function(){},methods:{}},P,!1,function(e){a("IwlT")},null,null).exports,H=a("Xxa5"),I=a.n(H),J=a("exGp"),K=a.n(J),V=a("HdQ4"),W="http://localhost:8083",Z={root:{keyspace:{type:"GET",url:W+"/keyspace"},table:{type:"GET",url:W+"/table"},row:{type:"GET",url:W+"/row"},query:{type:"POST",url:W+"/query"},save:{type:"POST",url:W+"/save"}}},Y=new(a.n(V).a)(Z,{cors:!1}),X=Y.make("root"),ee={name:"Keyspace",data:function(){return{isCollapse:!1,keyspace:[]}},created:function(){this.fetch()},methods:{getTable:function(e){var t=this;return K()(I.a.mark(function a(){return I.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:try{t.$router.push({name:"table",params:{keyspace:e}})}catch(e){t.$message({type:"error",showClose:!0,message:e})}case 1:case"end":return a.stop()}},a,t)}))()},fetch:function(){var e=this;return K()(I.a.mark(function t(){var a;return I.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,X.request("keyspace");case 3:a=t.sent,e.keyspace=a.get(),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e.$message({type:"error",showClose:!0,message:t.t0});case 10:case"end":return t.stop()}},t,e,[[0,7]])}))()},toggleMenu:function(){this.isCollapse=!this.isCollapse},openQuery:function(){var e,t=this;this.$prompt("Enter Query","CQL Query",{confirmButtonText:"Execute",cancelButtonText:"Cancel",inputType:"textarea"}).then((e=K()(I.a.mark(function e(a){var n=a.value;return I.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:try{t.$router.push({name:"query",params:{query:""+n}})}catch(e){t.$message({type:"error",showClose:!0,duration:0,message:e})}case 1:case"end":return e.stop()}},e,t)})),function(t){return e.apply(this,arguments)})).catch(function(){t.$message({type:"info",message:"Cancel Query"})})}}},te={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",{staticStyle:{height:"100%",border:"1px solid #eee"}},[a("el-aside",{staticStyle:{width:"auto"}},[a("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"2","collapse-transition":!1,collapse:e.isCollapse}},[e._l(e.keyspace,function(t,n){return a("el-menu-item",{key:n,attrs:{index:n.toString()},on:{click:function(a){e.getTable(t.keyspace_name)}}},[a("i",{staticClass:"el-icon-tickets"}),a("span",{attrs:{lot:"title"}},[e._v(e._s(t.keyspace_name))])])}),a("el-menu-item",{attrs:{index:"-1"},on:{click:e.openQuery}},[a("i",{staticClass:"el-icon-edit"}),a("span",{attrs:{lot:"title"}},[e._v("Query")])]),a("el-menu-item",{attrs:{index:"-2"},on:{click:e.toggleMenu}},[a("i",{class:[e.isCollapse?"el-icon-caret-right":"el-icon-caret-left"]}),a("span",{attrs:{lot:"title"}},[e._v("Folding menu")])])],2)],1),a("el-container",[a("router-view",{directives:[{name:"loading",rawName:"v-loading",value:!1,expression:"false"}]})],1)],1)},staticRenderFns:[]};var ae=a("VU/8")(ee,te,!1,function(e){a("pyu/")},null,null).exports,ne=Y.make("root"),re={name:"Table",data:function(){return{tabledata:[]}},created:function(){this.fetch()},watch:{$route:function(){this.fetch()}},methods:{click:function(e){this.$router.push({name:"row",params:{table:e.keyspace_name+"."+e.table_name,page:1,pagesize:50}})},fetch:function(){var e=this;return K()(I.a.mark(function t(){var a;return I.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ne.request("table",{query:{keyspace:e.$route.params.keyspace}});case 3:a=t.sent,e.tabledata=a.get(),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e.$message({type:"error",showClose:!0,message:t.t0});case 10:case"end":return t.stop()}},t,e,[[0,7]])}))()},rowStyle:function(){return{cursor:"pointer"}}}},se={render:function(){var e=this.$createElement,t=this._self._c||e;return t("el-table",{staticStyle:{width:"100%"},attrs:{data:this.tabledata,"empty-text":"empty data",stripe:"stripe","row-style":this.rowStyle},on:{"row-click":this.click}},[t("el-table-column",{attrs:{prop:"table_name",label:"table_name"}}),t("el-table-column",{attrs:{prop:"id",label:"id"}})],1)},staticRenderFns:[]},oe=a("VU/8")(re,se,!1,null,null,null).exports,ce=a("pFYg"),ue=a.n(ce),ie=a("fZjL"),le=a.n(ie),pe=a("M4fF"),fe=a("kx9P"),de=a.n(fe),he=Y.make("root"),me={name:"Row",data:function(){return{keys:[],rowdata:[],rowcount:0,pagesize:50,isEdit:{},originalData:{}}},created:function(){this.fetch()},watch:{$route:function(){this.fetch()}},methods:{fetch:function(){var e=this;return K()(I.a.mark(function t(){var a,n;return I.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,he.request("row",{query:{limit:1e3,table:e.$route.params.table,page:e.$route.params.page,pagesize:e.$route.params.pagesize}});case 3:a=t.sent,void 0!==(n=a.get("row"))&&n.length>0?(e.keys=le()(n[0]),e.rowdata=n.map(function(e){var t=e;return Object(pe.forEach)(t,function(e,a){"object"===(void 0===e?"undefined":ue()(e))?t[a]=de.a.stringify(e):t[a]=e}),t}),e.rowcount=a.get("count")):(e.keys=[],e.rowdata=[],e.rowcount=0),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),e.$message({type:"error",showClose:!0,message:t.t0});case 11:case"end":return t.stop()}},t,e,[[0,8]])}))()},handleCurrentChange:function(e){this.$router.push({name:"row",params:{page:e}})},handleSizeChange:function(e){this.$router.push({name:"row",params:{pagesize:e}})},rowFormatter:function(e,t,a){return a},handleActive:function(e,t){this.originalData[e]=t,this.$set(this.isEdit,e,!this.isEdit[e])},handleEdit:function(e,t,a){var n=this;return K()(I.a.mark(function r(){var s,o,c;return I.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(n.$set(n.isEdit,e,!n.isEdit[e]),n.originalData[e]!==t){r.next=3;break}return r.abrupt("return");case 3:return s=Object(pe.cloneDeep)(a),Object(pe.forEach)(s,function(e,t){s[t]=n.jsonParams(e)}),r.prev=5,r.next=8,he.request("save",{data:{item:de.a.stringify(s),table:n.$route.params.table}});case 8:o=r.sent,c=o.get()===[]?"success":o.get(),n.$message({showClose:!0,duration:0,message:c}),r.next=16;break;case 13:r.prev=13,r.t0=r.catch(5),n.$message({type:"error",showClose:!0,duration:0,message:r.t0.body.message});case 16:case"end":return r.stop()}},r,n,[[5,13]])}))()},rowStyle:function(){return{cursor:"pointer"}},jsonParams:function(e){try{return de.a.parse(e)}catch(t){return e}}}},ye={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"w100"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.rowdata,"highlight-current-row":!0,"empty-text":"empty data",stripe:"stripe","row-style":e.rowStyle}},e._l(e.keys,function(t){return a("el-table-column",{key:t,attrs:{formatter:e.rowFormatter,label:t},scopedSlots:e._u([{key:"default",fn:function(n){return[a("div",{on:{dblclick:function(a){a.stopPropagation(),e.handleActive(""+n.$index+t,n.row[t])}}},[e.isEdit[""+n.$index+t]?a("el-input",{on:{blur:function(a){a.stopPropagation(),e.handleEdit(""+n.$index+t,n.row[t],n.row)}},model:{value:n.row[t],callback:function(a){e.$set(n.row,t,a)},expression:"scope.row[key]"}}):a("span",[e._v(e._s(n.row[t]))])],1)]}}])})})),a("el-pagination",{attrs:{"page-size":20,background:"background",pageSize:e.pagesize,"page-sizes":[50,100,200,300,400],total:e.rowcount,layout:"total, sizes, prev, pager, next"},on:{"current-change":e.handleCurrentChange,"prev-click":e.handleCurrentChange,"next-click":e.handleCurrentChange,"size-change":e.handleSizeChange}})],1)},staticRenderFns:[]};var we=a("VU/8")(me,ye,!1,function(e){a("7GRK")},null,null).exports,ge=a("mvHQ"),ve=a.n(ge),ke=Y.make("root"),be={name:"Query",data:function(){return{keys:[],rowdata:[],rowcount:0}},created:function(){this.fetch()},watch:{$route:function(){this.fetch()}},methods:{fetch:function(){var e=this;return K()(I.a.mark(function t(){var a,n;return I.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ke.request("query",{data:{query:e.$route.params.query}});case 3:if(a=t.sent,n=a.get()[0],Object(pe.isArray)(n)){t.next=8;break}return e.$message({type:"success",showClose:!0,duration:0,message:n}),t.abrupt("return");case 8:void 0!==n&&n.length>0?(e.keys=le()(n[0]),e.rowdata=n.map(function(e){var t=e;return Object(pe.forEach)(t,function(e,a){"object"===(void 0===e?"undefined":ue()(e))?t[a]=ve()(e):t[a]=e}),t}),e.rowcount=n.length):(e.keys=[],e.rowdata=[],e.rowcount=0),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),e.$message({type:"error",showClose:!0,message:t.t0});case 14:case"end":return t.stop()}},t,e,[[0,11]])}))()},rowFormatter:function(e,t,a){return a}}},xe={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"w100"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.rowdata,"highlight-current-row":!0,"empty-text":"empty data",stripe:"stripe"}},e._l(e.keys,function(t){return a("el-table-column",{key:t,attrs:{formatter:e.rowFormatter,label:t},scopedSlots:e._u([{key:"default",fn:function(n){return[a("div",[a("span",[e._v(e._s(n.row[t]))])])]}}])})})),a("el-pagination",{attrs:{background:"background",total:e.rowcount,layout:"total"}})],1)},staticRenderFns:[]};var Ce=a("VU/8")(be,xe,!1,function(e){a("LJE9")},null,null).exports;R.default.use(O.a);var $e=new O.a({routes:[{path:"/",name:"home",component:N},{path:"/keyspace",name:"keyspace",component:ae,children:[{path:":keyspace/table",name:"table",component:oe},{path:":table/row/:page/:pagesize",name:"row",component:we},{path:":query/query",name:"query",component:Ce}]}]});R.default.config.productionTip=!1,new R.default({el:"#app",router:$e,components:{App:G},template:"<App/>",render:function(e){return e(G)}})},QIAS:function(e,t){},SUQY:function(e,t){},Sm8n:function(e,t){},UjAo:function(e,t){},a9Mr:function(e,t){},jDwb:function(e,t){},jlNI:function(e,t){},lh9Z:function(e,t){},ovMW:function(e,t){},"pyu/":function(e,t){},sCLk:function(e,t){},vkwB:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.js.map?30ff7c64f6c7dd69c0a9