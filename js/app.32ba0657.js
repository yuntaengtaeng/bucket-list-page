(function(){"use strict";var e={8419:function(e,t,n){var o=n(9242),a=n(3396);const r={class:"wrap"},i=(0,a._)("div",{class:"margin"},null,-1),s={class:"container"},c=(0,a._)("div",{class:"margin"},null,-1);function d(e,t,n,o,d,u){const l=(0,a.up)("Loading"),g=(0,a.up)("BaseHeader"),f=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[e.IsLoggedIn?((0,a.wg)(),(0,a.j4)(l,{key:0})):(0,a.kq)("",!0),(0,a._)("div",r,[i,(0,a._)("div",s,[(0,a.Wm)(g),(0,a.Wm)(f)]),c])],64)}var u=n(7139);const l={key:1,class:"right"};function g(e,t,n,o,r,i){const s=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("header",null,[(0,a._)("span",{onClick:t[0]||(t[0]=(...t)=>e.homeClickHandler&&e.homeClickHandler(...t))},"📃bucket"),e.IsLoggedIn?((0,a.wg)(),(0,a.iD)("div",l,[(0,a._)("div",null,(0,u.zw)(e.nickname),1),(0,a._)("div",{onClick:t[1]||(t[1]=(...t)=>e.logoutHandler&&e.logoutHandler(...t))},"로그아웃")])):((0,a.wg)(),(0,a.j4)(s,{key:0,to:"/login"},{default:(0,a.w5)((()=>[(0,a.Uk)("로그인")])),_:1}))])}n(7658);var f=n(65),m=(0,a.aZ)({name:"base-header",setup(){const e=(0,f.oR)(),t=(0,a.Fl)((()=>e.getters["userState/getIsLoggedIn"])),n=(0,a.Fl)((()=>e.getters["userState/getNickname"])),o=()=>e.commit("userState/initData");return{IsLoggedIn:t,nickname:n,logout:o}},methods:{logoutHandler(){this.logout()},homeClickHandler(){this.$router.push("/")}}}),p=n(89);const h=(0,p.Z)(m,[["render",g],["__scopeId","data-v-8068c092"]]);var k=h;const v=e=>((0,a.dD)("data-v-fe10cad4"),e=e(),(0,a.Cn)(),e),b={class:"wrap"},y=v((()=>(0,a._)("div",{class:"loader"},null,-1))),C=[y];function _(e,t,n,o,r,i){return(0,a.wg)(),(0,a.iD)("div",b,C)}var w=(0,a.aZ)({name:"loading-component"});const I=(0,p.Z)(w,[["render",_],["__scopeId","data-v-fe10cad4"]]);var L=I,S=(0,a.aZ)({name:"App",components:{BaseHeader:k,Loading:L},setup(){const e=(0,f.oR)(),t=(0,a.Fl)((()=>e.getters["loadingState/getIsLoading"]));return{IsLoggedIn:t}}});const T=(0,p.Z)(S,[["render",d]]);var H=T,D=n(2483);const Z={class:"category-items"};function A(e,t,n,r,i,s){const c=(0,a.up)("CategoryItem"),d=(0,a.up)("BucketTotal"),u=(0,a.up)("MoveEdit"),l=(0,a.up)("BucketItem"),g=(0,a.up)("Guidance");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("div",Z,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.categorys,((t,n)=>((0,a.wg)(),(0,a.j4)(c,{key:t.id,title:t.name,icon:t.icon,backgroundColor:e.backgroundPalette[n],isSelected:t.id===e.selectedCategoryId,onClick:n=>e.onCategoryClickHandler(t.id)},null,8,["title","icon","backgroundColor","isSelected","onClick"])))),128))]),(0,a.Wm)(d,{total:e.count.total,completed:e.count.checked,remaining:e.count.notChecked},null,8,["total","completed","remaining"]),(0,a._)("div",null,[(0,a.Wm)(u)]),(0,a._)("div",null,[e.bucketList.length?((0,a.wg)(!0),(0,a.iD)(a.HY,{key:0},(0,a.Ko)(e.bucketList,(t=>((0,a.wg)(),(0,a.j4)(l,{key:t.id,data:t,onClick:(0,o.iM)((n=>e.onBucketItemClickHandler(n,t.id)),["stop"]),onOnDeleteHandler:e.onDeleteHandler,onOnCheckboxHandler:e.onCheckboxHandler},null,8,["data","onClick","onOnDeleteHandler","onOnCheckboxHandler"])))),128)):((0,a.wg)(),(0,a.j4)(g,{key:1}))])])}function j(e,t,n,o,r,i){return(0,a.wg)(),(0,a.iD)("div",{class:(0,u.C_)(["category",{selected:e.isSelected}]),style:(0,u.j5)({"background-color":e.backgroundColor})},[(0,a._)("div",null,(0,u.zw)(e.icon),1),(0,a._)("div",null,(0,u.zw)(e.title),1)],6)}var x=(0,a.aZ)({name:"category-item",props:{icon:String,title:String,backgroundColor:String,isSelected:Boolean}});const O=(0,p.Z)(x,[["render",j],["__scopeId","data-v-c4274278"]]);var E=O;const N=e=>((0,a.dD)("data-v-0a797219"),e=e(),(0,a.Cn)(),e),B=N((()=>(0,a._)("div",{class:"box inner"},[(0,a.Uk)(" 버킷리스트를 작성해보세요! "),(0,a._)("i",null,"📝")],-1))),$=[B];function P(e,t,n,o,r,i){return(0,a.wg)(),(0,a.iD)("div",{class:"wrap box",onClick:t[0]||(t[0]=(...t)=>e.moveEdit&&e.moveEdit(...t))},$)}var q=(0,a.aZ)({name:"custom-input",methods:{moveEdit(){this.$router.push("/edit")}}});const F=(0,p.Z)(q,[["render",P],["__scopeId","data-v-0a797219"]]);var K=F;const z={class:"item"},R={class:"top"},M={class:"left"},U=["checked"];function W(e,t,n,r,i,s){return(0,a.wg)(),(0,a.iD)("div",z,[(0,a._)("div",R,[(0,a._)("div",M,[(0,a._)("input",{type:"checkbox",onChange:t[0]||(t[0]=(0,o.iM)(((...t)=>e.onChangeHandler&&e.onChangeHandler(...t)),["stop"])),checked:e.data?.isChecked},null,40,U),(0,a._)("div",null,(0,u.zw)(e.data?.title),1)]),(0,a._)("div",{class:"right",onClick:t[1]||(t[1]=(0,o.iM)(((...t)=>e.onDelete&&e.onDelete(...t)),["prevent"]))},"❌")]),(0,a._)("div",{class:(0,u.C_)(["bottom",{isChecked:e.data?.isChecked}])},(0,u.zw)(e.data?.context),3)])}var Y=(0,a.aZ)({name:"bucket-item",props:{data:{type:Object}},methods:{onChangeHandler(){this.$emit("onCheckboxHandler",this.data?.id)},onDelete(){this.$emit("onDeleteHandler",this.data?.id)}}});const G=(0,p.Z)(Y,[["render",W],["__scopeId","data-v-66649b58"]]);var V=G;const J=e=>((0,a.dD)("data-v-6abaf4df"),e=e(),(0,a.Cn)(),e),Q=J((()=>(0,a._)("p",null,"버킷리스트 총합",-1))),X={class:"statistics"},ee={class:"completed"},te=J((()=>(0,a._)("span",null,"진행",-1))),ne={class:"remaining"},oe=J((()=>(0,a._)("span",null,"완료",-1)));function ae(e,t,n,o,r,i){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("h1",null,(0,u.zw)(e.total),1),Q,(0,a._)("div",X,[(0,a._)("div",null,[(0,a._)("span",ee,(0,u.zw)(e.remaining),1),te]),(0,a._)("div",null,[(0,a._)("span",ne,(0,u.zw)(e.completed),1),oe])])])}var re=(0,a.aZ)({name:"bucket-total",props:{total:Number,completed:Number,remaining:Number}});const ie=(0,p.Z)(re,[["render",ae],["__scopeId","data-v-6abaf4df"]]);var se=ie;const ce=e=>((0,a.dD)("data-v-798d187e"),e=e(),(0,a.Cn)(),e),de=ce((()=>(0,a._)("br",null,null,-1)));function ue(e,t,n,o,r,i){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Uk)(" 상단의 작성 버튼을 이용해"),de,(0,a.Uk)(" 버킷리스트를 작성해보세요! ")])}var le=(0,a.aZ)({name:"guidance-component"});const ge=(0,p.Z)(le,[["render",ue],["__scopeId","data-v-798d187e"]]);var fe=ge,me=(0,a.aZ)({name:"HomeView",components:{CategoryItem:E,MoveEdit:K,BucketItem:V,BucketTotal:se,Guidance:fe},setup(){const e=(0,f.oR)(),t=(0,a.Fl)((()=>e.getters["userState/getAccessToken"]));return{accessToken:t}},data:()=>({selectedCategoryId:"",backgroundPalette:["#fef3c7","#fce7f3","#fee2e2","#e0e7ff","#d1fae5","#ede9fe"],categorys:[],bucketList:[],count:{total:0,notChecked:0,checked:0}}),methods:{onCategoryClickHandler(e){this.selectedCategoryId=e},onBucketItemClickHandler(e,t){const n=e.target;"INPUT"!==n.tagName&&"right"!==n.className&&this.$router.push(`/detail/${t}`)},async processAfterRequestFromServer({url:e,method:t}){try{const{data:{data:n}}=await this.$axios({url:e,method:t}),o=n.bucketlist,a=n.count;this.bucketList=o,this.count=a}catch(n){const e=n.response;if(400===e?.status){const t=e.data;alert(t.message)}}},async requestBucketList(){const e=this.accessToken;e&&this.processAfterRequestFromServer({url:`/api/main/bucklist/${this.selectedCategoryId}`,method:"get"})},async onCheckboxHandler(e){this.processAfterRequestFromServer({url:`/api/main/bucklist/checked/${e}`,method:"patch"})},async requestCategoryList(){try{const{data:e}=await this.$axios.get("/api/category"),t=e.categoryList;this.categorys=t}catch(e){const t=e.response;if(400===t?.status){const e=t.data;alert(e.message)}}},async onDeleteHandler(e){this.processAfterRequestFromServer({url:`/api/main/bucklist/deleted/${e}`,method:"delete"})}},watch:{selectedCategoryId:"requestBucketList"},created(){this.requestCategoryList()}});const pe=(0,p.Z)(me,[["render",A],["__scopeId","data-v-52b15d32"]]);var he=pe;const ke={namespaced:!0,state:{nickname:"",accessToken:"",refreshTokenKey:""},getters:{getIsLoggedIn(e){return!!e.nickname},getNickname(e){return e.nickname},getAccessToken(e){return e.accessToken},getRefreshTokenKey(e){return e.refreshTokenKey}},mutations:{setData(e,t){console.log(t),e.nickname=t.nickname,e.accessToken=t.accessToken,e.refreshTokenKey=t.refreshTokenKey},initData(e){e.nickname="",e.accessToken="",e.refreshTokenKey=""},setAccessToken(e,t){e.accessToken=t}}},ve={namespaced:!0,state:()=>({isLoading:!1}),mutations:{onLoading(e){e.isLoading=!0},offLoading(e){e.isLoading=!1}},getters:{getIsLoading(e){return e.isLoading}},actions:{}};var be=(0,f.MT)({modules:{userState:ke,loadingState:ve}});const ye=[{path:"/",name:"home",component:he},{path:"/login",name:"login",component:()=>n.e(86).then(n.bind(n,7086))},{path:"/join",name:"join",component:()=>n.e(603).then(n.bind(n,7603))},{path:"/edit",name:"edit",component:()=>n.e(694).then(n.bind(n,2694)),meta:{needsAuth:!0}},{path:"/detail/:id",name:"detail",component:()=>n.e(483).then(n.bind(n,3483)),meta:{needsAuth:!0}}],Ce=(0,D.p7)({history:(0,D.PO)("/bucket-list-page/"),routes:ye});Ce.beforeEach(((e,t,n)=>{if(e.meta.needsAuth){const e=be.getters["userState/getIsLoggedIn"];console.log(e),e?n():n("/login")}else n()}));var _e=Ce,we=n(6943);const Ie=(0,o.ri)(H);we.Z.defaults.baseURL="https://6mnre84rxk.execute-api.ap-northeast-2.amazonaws.com/bucket",we.Z.interceptors.request.use((e=>{be.commit("loadingState/onLoading");const t=be.getters["userState/getAccessToken"];return t&&e.headers.set("Authorization",`bucketlist ${t}`),e})),we.Z.interceptors.response.use((e=>(be.commit("loadingState/offLoading"),e)),(async e=>{const{config:t,response:{status:n}}=e;if(419===n&&"expired"===e.response.data.code){const e=t,n=be.getters["userState/getRefreshTokenKey"],{data:{data:o}}=await we.Z.post("/api/token/refresh-token",{},{headers:{refreshTokenKey:`bucketlist ${n}`}});return be.commit("userState/setAccessToken",o.accessToken),(0,we.Z)(e)}return be.commit("loadingState/offLoading"),Promise.reject(e)})),Ie.config.globalProperties.$axios=we.Z,Ie.use(be).use(_e).mount("#app")}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,r){if(!o){var i=1/0;for(u=0;u<e.length;u++){o=e[u][0],a=e[u][1],r=e[u][2];for(var s=!0,c=0;c<o.length;c++)(!1&r||i>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(s=!1,r<i&&(i=r));if(s){e.splice(u--,1);var d=a();void 0!==d&&(t=d)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[o,a,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{86:"e404db84",483:"e908f9ed",603:"67174d76",694:"d9992391"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{86:"87859252",483:"556e0e8b",603:"1f49ec78",694:"556e0e8b"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="front:";n.l=function(o,a,r,i){if(e[o])e[o].push(a);else{var s,c;if(void 0!==r)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var l=d[u];if(l.getAttribute("src")==o||l.getAttribute("data-webpack")==t+r){s=l;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+r),s.src=o),e[o]=[a];var g=function(t,n){s.onerror=s.onload=null,clearTimeout(f);var a=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(g.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=g.bind(null,s.onerror),s.onload=g.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/bucket-list-page/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,a){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(n){if(r.onerror=r.onload=null,"load"===n.type)o();else{var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,r.parentNode.removeChild(r),a(c)}};return r.onerror=r.onload=i,r.href=t,n?n.parentNode.insertBefore(r,n.nextSibling):document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var a=n[o],r=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(r===e||r===t))return a}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){a=i[o],r=a.getAttribute("data-href");if(r===e||r===t)return a}},o=function(o){return new Promise((function(a,r){var i=n.miniCssF(o),s=n.p+i;if(t(i,s))return a();e(o,s,null,a,r)}))},a={143:0};n.f.miniCss=function(e,t){var n={86:1,483:1,603:1,694:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=o(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,o){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)o.push(a[2]);else{var r=new Promise((function(n,o){a=e[t]=[n,o]}));o.push(a[2]=r);var i=n.p+n.u(t),s=new Error,c=function(o){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var r=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",s.name="ChunkLoadError",s.type=r,s.request=i,a[1](s)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,r,i=o[0],s=o[1],c=o[2],d=0;if(i.some((function(t){return 0!==e[t]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(c)var u=c(n)}for(t&&t(o);d<i.length;d++)r=i[d],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(u)},o=self["webpackChunkfront"]=self["webpackChunkfront"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(8419)}));o=n.O(o)})();
//# sourceMappingURL=app.32ba0657.js.map