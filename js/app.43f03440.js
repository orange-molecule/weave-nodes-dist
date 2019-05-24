(function(t){function e(e){for(var o,i,n=e[0],u=e[1],l=e[2],d=0,p=[];d<n.length;d++)i=n[d],r[i]&&p.push(r[i][0]),r[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);c&&c(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],o=!0,n=1;n<a.length;n++){var u=a[n];0!==r[u]&&(o=!1)}o&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var o={},r={app:0},s=[];function i(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=o,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(a,o,function(e){return t[e]}.bind(null,o));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],u=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var c=u;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var o=a("64a9"),r=a.n(o);r.a},"1a42":function(t,e,a){},"49de":function(t,e,a){"use strict";var o=a("1a42"),r=a.n(o);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var o=a("2b0e"),r=a("bc3a"),s=a.n(r),i=a("2b88"),n=a.n(i),u=a("92d5"),l=a.n(u),c=(a("c4ca"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),o("portal-target",{attrs:{name:"semantic-ui-vue"}}),o("Nodes",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)}),d=[],p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("sui-container",[a("sui-menu",{attrs:{attached:"top"}},[a("div",{staticClass:"header item"},[t._v("Arweave Node Monitor")]),a("sui-menu-menu",{attrs:{position:"right"}},[a("sui-menu-item",{attrs:{right:""}},[a("sui-button",{attrs:{basic:"",icon:"sync alternate",size:"medium"},on:{click:function(e){return t.refresh()}}})],1)],1)],1)],1),a("br"),a("br"),a("sui-container",[a("sui-popup",{attrs:{flowing:"",hoverable:""}},[a("sui-grid",{attrs:{centered:"",divided:"",columns:1}},[a("sui-grid-column",{attrs:{"text-align":"center"}},[a("form",{on:{submit:function(e){return e.preventDefault(),t.onNodeSubmit(e)}}},[a("sui-header",{tag:"h4"},[t._v("Add a New Node")]),a("p",[a("sui-input",{attrs:{placeholder:"IP: 188.166.200.45",focus:"",required:""},model:{value:t.form.ip,callback:function(e){t.$set(t.form,"ip",e)},expression:"form.ip"}}),t._v("  \n                  "),a("sui-input",{attrs:{placeholder:"Port( default: 1984)",focus:""},model:{value:t.form.port,callback:function(e){t.$set(t.form,"port",e)},expression:"form.port"}}),t._v(" \n                  "),a("sui-input",{attrs:{placeholder:"Give a name",focus:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("sui-button",[t._v("Submit")])],1)])],1),a("button",{staticClass:"ui labeled icon right floated button",staticStyle:{"margin-botton":"10px"},attrs:{slot:"trigger"},slot:"trigger"},[a("i",{staticClass:"plus icon"}),t._v("\n                  Add\n                  ")])],1)],1),a("sui-container",[a("br"),a("sui-table",{staticStyle:{"margin-top":"25px"},attrs:{fixed:"","single-line":""}},[a("sui-table-header",[a("sui-table-row",[a("sui-table-header-cell",[t._v("Ip")]),a("sui-table-header-cell",[t._v("Port")]),a("sui-table-header-cell",[t._v("Name")]),a("sui-table-header-cell",[t._v("Release")]),a("sui-table-header-cell",[t._v("Height")]),a("sui-table-header-cell",[t._v("Total Blocks")]),a("sui-table-header-cell",[t._v("Peers")]),a("sui-table-header-cell",[t._v("Latency")]),a("sui-table-header-cell",[t._v("Status")]),a("sui-table-header-cell")],1)],1),t.nodes?a("sui-table-body",t._l(t.nodes,function(e){return a("sui-table-row",{key:e.id,attrs:{positive:"active"==e.status,negative:"unreachable"==e.status}},[a("sui-table-cell",[t._v(t._s(e.ip))]),a("sui-table-cell",[t._v(t._s(e.port))]),a("sui-table-cell",[t._v(t._s(e.name))]),a("sui-table-cell",[t._v(t._s(e.data?e.data.release:""))]),a("sui-table-cell",[t._v(t._s(e.data?e.data.height:""))]),a("sui-table-cell",[t._v(t._s(e.data?e.data.blocks:""))]),a("sui-table-cell",[t._v(t._s(e.data?e.data.peers:""))]),a("sui-table-cell",[t._v(t._s(e.data?e.data.node_state_latency:""))]),a("sui-table-cell",[t._v(t._s("active"==e.status?"Active":"Unreachable"))]),a("sui-table-cell",[a("sui-button",{attrs:{circular:"",icon:"close",size:"mini"},on:{click:function(a){return t.removeNode(e.id)}}}),t._v("\n                          "),a("sui-loader",{attrs:{active:e.loading,inline:""}})],1)],1)}),1):t._e()],1),a("sui-segment",{attrs:{aligned:"center"}},[a("p",[t._v('Use the "Add" button to create your node list.  For getting latest status use the refresh button.')]),a("p",[t._v(" Nodes are stored in your browser's localstorage.")])])],1)],1)},h=[],f=(a("456d"),a("ac6a"),a("7f7f"),{name:"Nodes",props:{msg:String},data:function(){return{nodes:{},form:{ip:"",port:"",name:""}}},created:function(){this.getNodes(),this.updateNodes()},methods:{refresh:function(){this.updateNodes()},onNodeSubmit:function(){""==this.form.port&&(this.form.port="1984");var t=this.form.ip.trim()+":"+this.form.port.trim(),e={id:this.form.ip.trim()+":"+this.form.port.trim(),name:this.form.name.trim(),ip:this.form.ip.trim(),port:this.form.port.trim(),status:"",loading:!0};this.$set(this.nodes,t,e),this.form.name="",this.form.ip="",this.form.port="",this.syncNode(e)},getNodes:function(){this.nodes=JSON.parse(localStorage.getItem("nodes"))},saveNodes:function(){localStorage.setItem("nodes",JSON.stringify(this.nodes))},updateNodes:function(){this.nodes;var t=this;console.log("updating..."),Object.keys(this.nodes).forEach(function(e){var a=t.nodes[e];t.syncNode(a)})},syncNode:function(t){var e=this,a="http://"+t.ip+":"+t.port+"/info";console.log("URl: "+a),this.$set(t,"loading",!0),this.$axios.get(a,{timeout:4e3}).then(function(a){console.log(a.data),e.$set(t,"loading",!1),e.$set(t,"status","active"),e.$set(t,"data",a.data),e.saveNodes(),console.log("blocks",a.data.blocks)}).catch(function(a){e.$set(t,"loading",!1),e.$set(t,"status","unreachable"),console.log(a)})},removeNode:function(t){this.$delete(this.nodes,t),this.saveNodes()}}}),m=f,b=(a("49de"),a("2877")),v=Object(b["a"])(m,p,h,!1,null,"49b5608d",null),A=v.exports,g={name:"app",components:{Nodes:A}},w=g,S=(a("034f"),Object(b["a"])(w,c,d,!1,null,null,null)),C=S.exports;o["default"].use(l.a),o["default"].use(n.a),o["default"].prototype.$axios=s.a,o["default"].config.productionTip=!1,new o["default"]({render:function(t){return t(C)}}).$mount("#app")},"64a9":function(t,e,a){},cf05:function(t,e){t.exports="data:image/png;base64,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"}});
//# sourceMappingURL=app.43f03440.js.map