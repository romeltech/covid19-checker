(function(t){function e(e){for(var s,o,c=e[0],l=e[1],i=e[2],u=0,f=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,i||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,c=1;c<a.length;c++){var l=a[c];0!==n[l]&&(s=!1)}s&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},n={app:0},r=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var i=0;i<c.length;i++)e(c[i]);var d=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0165":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.dataCount?a("v-row",[a("v-col",{staticClass:"mb-3 sm-6"},[a("v-card",{staticClass:"mx-auto elevation-3"},[a("v-card-text",[a("div",{},[t._v("Confirmed")]),a("div",{staticClass:"blue--text display-1 font-weight-bold"},[t._v(t._s(t.dataCount.TotalConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")))])])],1)],1),a("v-col",{staticClass:"mb-3 sm-6"},[a("v-card",{staticClass:"mx-auto elevation-3",staticStyle:{"background-color":"#04BF68"}},[a("v-card-text",[a("div",{staticClass:"white--text"},[t._v("Recovered")]),a("div",{staticClass:"white--text display-1"},[t._v(t._s(t.dataCount.TotalRecovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")))])])],1)],1),a("v-col",{staticClass:"mb-3 sm-6"},[a("v-card",{staticClass:"mx-auto elevation-3",staticStyle:{"background-color":"#C7363E"}},[a("v-card-text",[a("div",{staticClass:"white--text"},[t._v("Deaths")]),a("div",{staticClass:"white--text display-1"},[t._v(t._s(t.dataCount.TotalDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")))])])],1)],1),a("v-col",{staticClass:"mb-3 sm-6"},[a("v-card",{staticClass:"mx-auto elevation-3",staticStyle:{"background-color":"#06BACC"}},[a("v-card-text",[a("div",{staticClass:"white--text"},[t._v("New Cases")]),a("div",{staticClass:"white--text display-1"},[t._v(t._s(t.dataCount.NewConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")))])])],1)],1)],1):t._e()],1)},n=[],r={props:["dataCount"]},o=r,c=a("2877"),l=a("6544"),i=a.n(l),d=a("b0af"),u=a("99d9"),f=a("62ad"),m=a("0fd9"),b=Object(c["a"])(o,s,n,!1,null,null,null);e["default"]=b.exports;i()(b,{VCard:d["a"],VCardText:u["a"],VCol:f["a"],VRow:m["a"]})},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=r(t);return a(e)}function r(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=r,t.exports=n,n.id="4678"},"4bd8":function(t,e,a){"use strict";a.r(e);var s,n,r=a("1fca"),o={extends:r["a"],props:["data"],mounted:function(){this.renderChart(this.data,{responsive:!0,maintainAspectRatio:!1})}},c=o,l=a("2877"),i=Object(l["a"])(c,s,n,!1,null,null,null);e["default"]=i.exports},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("v-app-bar",{staticClass:"elevation-3",staticStyle:{"background-color":"#ffffff"},attrs:{app:"",color:""}},[s("div",{staticClass:"d-flex align-center"},[s("v-btn",{staticClass:"mr-3",attrs:{to:"/",text:"",small:""}},[t._v("COVID CASE CHECKER")]),s("v-btn",{staticClass:"mr-3",attrs:{href:"https://www.who.int/emergencies/diseases/novel-coronavirus-2019",target:"_blank",text:"",small:""}},[t._v("WHO Website")])],1),s("v-spacer"),s("v-chip",{staticClass:"ma-2",attrs:{outlined:"",color:"primary d-xs-none d-none d-sm-flex"}},[s("span",{staticClass:"primary--text"},[t._v(t._s(t.globalDate))]),s("v-icon",{staticClass:"primary--text",attrs:{right:"",small:""}},[t._v("mdi-calendar")])],1)],1),s("v-content",{staticStyle:{"background-color":"#f5faff"}},[s("router-view",{staticStyle:{"min-height":"80vh"}}),s("div",{staticClass:"d-flex justify-center align-center mt-6 mb-6"},[s("span",{staticClass:"mr-2 overline"},[t._v("created by:")]),s("a",{attrs:{href:"https://romel.tech",target:"_blank"}},[s("v-img",{attrs:{"max-width":"50px",src:a("fb50")}})],1)])],1)],1)},r=[],o=a("5530"),c=a("2f62"),l={name:"App",data:function(){return{date:"",baseUrl:window.location.origin}},methods:Object(o["a"])({},Object(c["b"])(["fetchGlobal"])),computed:Object(c["c"])(["globalDate"]),created:function(){this.fetchGlobal()}},i=l,d=a("2877"),u=a("6544"),f=a.n(u),m=a("7496"),b=a("40dc"),v=a("8336"),h=a("cc20"),p=a("a75b"),j=a("132d"),C=a("adda"),g=a("2fa4"),x=Object(d["a"])(i,n,r,!1,null,null,null),y=x.exports;f()(x,{VApp:m["a"],VAppBar:b["a"],VBtn:v["a"],VChip:h["a"],VContent:p["a"],VIcon:j["a"],VImg:C["a"],VSpacer:g["a"]});var w=a("f309");s["a"].use(w["a"]);var _=new w["a"]({theme:{themes:{light:{primary:"#21272E",secondary:"#f5f5f5",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}},icons:{iconfont:"mdi"}}),k=a("bc3a"),D=a.n(k),S=(a("96cf"),a("1da1")),O=a("c1df"),T=a.n(O),V={summary:[],asOfDate:""},R={globalSummary:function(t){return t.summary},globalDate:function(t){return t.asOfDate}},z={fetchGlobal:function(t){return Object(S["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.commit,e.next=3,D.a.get("https://api.covid19api.com/summary");case 3:s=e.sent,a("setGlobal",s.data.Global),a("setAsOfDate",T()(s.data.Date).format("MMMM Do YYYY"));case 6:case"end":return e.stop()}}),e)})))()}},E={setGlobal:function(t,e){return t.summary=e},setAsOfDate:function(t,e){return t.asOfDate=e}},$={state:V,getters:R,actions:z,mutations:E};s["a"].use(c["a"]);var N=new c["a"].Store({modules:{globaldata:$}}),B=a("8c4f"),F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticStyle:{"max-width":"1000px"}},[a("Search"),1==t.loading?a("v-row",[a("v-col",{staticClass:"text-center"},[a("v-progress-circular",{attrs:{width:3,color:"#06bacc",indeterminate:""}})],1)],1):t._e(),t.dataCount&&0==t.loading?a("v-row",[a("v-col",{staticClass:"mb-3 sm-6"},[a("v-card",{staticClass:"mx-auto elevation-3"},[a("v-card-text",[a("div",{},[t._v("Confirmed")]),a("div",{staticClass:"blue--text display-1 font-weight-bold"},[t._v(t._s(t.dataCount.TotalConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")))])])],1)],1),a("v-col",{staticClass:"mb-3 sm-6"},[a("v-card",{staticClass:"mx-auto elevation-3",staticStyle:{"background-color":"#04BF68"}},[a("v-card-text",[a("div",{staticClass:"white--text"},[t._v("Recovered")]),a("div",{staticClass:"white--text display-1"},[t._v(t._s(t.dataCount.TotalRecovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")))])])],1)],1),a("v-col",{staticClass:"mb-3 sm-6"},[a("v-card",{staticClass:"mx-auto elevation-3",staticStyle:{"background-color":"#C7363E"}},[a("v-card-text",[a("div",{staticClass:"white--text"},[t._v("Deaths")]),a("div",{staticClass:"white--text display-1"},[t._v(t._s(t.dataCount.TotalDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")))])])],1)],1),a("v-col",{staticClass:"mb-3 sm-6"},[a("v-card",{staticClass:"mx-auto elevation-3",staticStyle:{"background-color":"#06BACC"}},[a("v-card-text",[a("div",{staticClass:"white--text"},[t._v("New Cases")]),a("div",{staticClass:"white--text display-1"},[t._v(t._s(t.dataCount.NewConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")))])])],1)],1)],1):t._e(),a("v-row",[t.dataCount?a("v-col",{staticClass:"text-center"},[t.loaded?a("line-chart",{attrs:{data:t.chartData}}):t._e()],1):a("v-col",[a("div",{staticClass:"text-center overline"},[t._v("NO RECORD FOUND")])])],1)],1)},M=[],A=(a("4de4"),a("d81d"),{data:function(){return{loading:!0,loaded:!1,dataCount:{NewConfirmed:"",TotalConfirmed:"",NewDeaths:"",TotalDeaths:"",NewRecovered:"",TotalRecovered:""}}},mounted:function(){this.getData(),this.fillData(this.$route.params.slug)},watch:{"$route.params.slug":function(t){this.loaded=!1,this.getData(),this.fillData(t)}},methods:{getData:function(){var t=this;this.$axios.get("https://api.covid19api.com/summary").then((function(e){var a=e.data.Countries.filter((function(e){return e.Slug===t.$route.params.slug}));t.dataCount=a[0],t.loading=!1})).catch((function(t){console.log("Error: "+t)}))},fillData:function(t){var e,a,s=this;this.$axios.get("https://api.covid19api.com/country/"+t+"/status/confirmed").then((function(t){e=t.data.map((function(t){return T()(t.Date).format("MMM D")})),a=t.data.map((function(t){return t.Cases})),s.loaded=!0,s.chartData={labels:e,datasets:[{label:"Confirmed Cases",backgroundColor:"#2196F3",data:a}]}})).catch((function(t){console.log("Error: "+t)}))}}}),G=A,P=a("b0af"),I=a("99d9"),U=a("62ad"),W=a("a523"),Y=a("490a"),q=a("0fd9"),H=Object(d["a"])(G,F,M,!1,null,null,null),J=H.exports;f()(H,{VCard:P["a"],VCardText:I["a"],VCol:U["a"],VContainer:W["a"],VProgressCircular:Y["a"],VRow:q["a"]});var L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v(" Immune System ")])},K=[],Q={},X=Q,Z=Object(d["a"])(X,L,K,!1,null,null,null),tt=Z.exports,et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v(" Prevention ")])},at=[],st={},nt=st,rt=Object(d["a"])(nt,et,at,!1,null,null,null),ot=rt.exports,ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticStyle:{"max-width":"1000px"}},[a("Search"),a("Count",{attrs:{dataCount:t.summary}}),a("v-row",{staticClass:"text-center"},[a("v-col",[a("v-card",[a("v-card-title",[a("v-text-field",{staticClass:"mb-5",attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),a("v-data-table",{attrs:{headers:t.headers,items:t.countries,search:t.search},scopedSlots:t._u([{key:"item.current",fn:function(e){var a=e.item;return[t._v(t._s(a.TotalConfirmed-a.TotalRecovered-a.TotalDeaths))]}}])})],1)],1)],1)],1)},lt=[],it=a("0165"),dt={name:"WorldWide",components:{Count:it["default"]},mounted:function(){this.getData()},data:function(){return{search:"",headers:[{text:"Country",align:"start",sortable:!1,value:"Country"},{text:"Newly Recovered",align:"center",sortable:!1,value:"NewRecovered"},{text:"Total Recovered",align:"center",sortable:!1,value:"TotalRecovered"},{text:"Total Deaths",align:"center",sortable:!1,value:"TotalDeaths"},{text:"Total Confirmed",align:"center",sortable:!1,value:"TotalConfirmed"},{text:"Current",align:"center",sortable:!1,value:"current"}],countries:[],loaded:!1,date:"",summary:{NewConfirmed:"",TotalConfirmed:"",NewDeaths:"",TotalDeaths:"",NewRecovered:"",TotalRecovered:""},chartData:null,chartOptions:null}},methods:{getData:function(){var t=this;this.$axios.get("https://api.covid19api.com/summary").then((function(e){t.summary=Object.assign({},e.data.Global),t.countries=e.data.Countries.sort((function(t,e){return e.TotalConfirmed-t.TotalConfirmed}))})).catch((function(t){console.log("Error: "+t)}))}}},ut=dt,ft=a("8fea"),mt=a("8654"),bt=Object(d["a"])(ut,ct,lt,!1,null,null,null),vt=bt.exports;f()(bt,{VCard:P["a"],VCardTitle:I["b"],VCol:U["a"],VContainer:W["a"],VDataTable:ft["a"],VRow:q["a"],VTextField:mt["a"]});var ht=[{path:"/",component:vt,props:!1},{path:"/country/:slug",component:J,props:!0},{path:"/immune-system-boosters",component:tt,props:!1},{path:"/prevention",component:ot,props:!1}],pt=a("1fca");s["a"].use(pt["b"]),s["a"].use(B["a"]),s["a"].prototype.$axios=D.a,s["a"].config.productionTip=!1,s["a"].component("Count",a("0165").default),s["a"].component("LineChart",a("4bd8").default),s["a"].component("Search",a("c106").default);var jt=new B["a"]({routes:ht,mode:"history"});new s["a"]({router:jt,store:N,vuetify:_,render:function(t){return t(y)}}).$mount("#app")},c106:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",[a("div",{staticClass:"col-12 col-md-6 my-6 mx-auto"},[a("v-combobox",{attrs:{"max-width":"600px",items:t.countries,"item-text":"Country","item-value":"Slug",solo:"","single-line":"","hide-details":"",label:"Select Country","auto-select-first":""},on:{change:function(e){return t.goToRoute(t.select.Slug)}},model:{value:t.select,callback:function(e){t.select=e},expression:"select"}})],1)])},n=[],r={name:"App",data:function(){return{select:null,search:null,countries:[]}},methods:{getCountries:function(){var t=this;this.$axios.get("https://api.covid19api.com/countries").then((function(e){t.countries=e.data})).catch((function(t){console.log("Error: "+t)}))},goToRoute:function(t){this.$router.push({path:"/country/".concat(t)})}},mounted:function(){this.getCountries()}},o=r,c=a("2877"),l=a("6544"),i=a.n(l),d=a("2b5d"),u=a("0fd9"),f=Object(c["a"])(o,s,n,!1,null,null,null);e["default"]=f.exports;i()(f,{VCombobox:d["a"],VRow:u["a"]})},fb50:function(t,e,a){t.exports=a.p+"img/romel-indemne.f1e173b9.svg"}});
//# sourceMappingURL=app.f682b67c.js.map