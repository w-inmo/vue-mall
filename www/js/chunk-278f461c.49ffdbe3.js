(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-278f461c"],{"02e4":function(e,t,n){"use strict";var r=n("3417"),o=n.n(r);o.a},"09fc":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"swiper-item"},[e._t("default")],2)},o=[],i={name:"SwiperItem"},s=i,u=(n("5087"),n("2877")),a=Object(u["a"])(s,r,o,!1,null,null,null);t["a"]=a.exports},"0a06":function(e,t,n){"use strict";var r=n("c532"),o=n("30b5"),i=n("f6b4"),s=n("5270"),u=n("4a7b");function a(e){this.defaults=e,this.interceptors={request:new i,response:new i}}a.prototype.request=function(e){"string"===typeof e?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=u(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[s,void 0],n=Promise.resolve(e);this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));while(t.length)n=n.then(t.shift(),t.shift());return n},a.prototype.getUri=function(e){return e=u(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){a.prototype[e]=function(t,n){return this.request(r.merge(n||{},{method:e,url:t}))}})),r.forEach(["post","put","patch"],(function(e){a.prototype[e]=function(t,n,o){return this.request(r.merge(o||{},{method:e,url:t,data:n}))}})),e.exports=a},"0df6":function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},"1d2b":function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},2444:function(e,t,n){"use strict";(function(t){var r=n("c532"),o=n("c8af"),i={"Content-Type":"application/x-www-form-urlencoded"};function s(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function u(){var e;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof t&&"[object process]"===Object.prototype.toString.call(t))&&(e=n("b50d")),e}var a={adapter:u(),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(s(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(s(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){a.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){a.headers[e]=r.merge(i)})),e.exports=a}).call(this,n("4362"))},"28a0":function(e,t){"function"===typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},"2d83":function(e,t,n){"use strict";var r=n("387f");e.exports=function(e,t,n,o,i){var s=new Error(e);return r(s,t,n,o,i)}},"2e67":function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},3022:function(e,t,n){(function(e){var r=Object.getOwnPropertyDescriptors||function(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++)n[t[r]]=Object.getOwnPropertyDescriptor(e,t[r]);return n},o=/%[sdj%]/g;t.format=function(e){if(!j(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(u(arguments[n]));return t.join(" ")}n=1;for(var r=arguments,i=r.length,s=String(e).replace(o,(function(e){if("%%"===e)return"%";if(n>=i)return e;switch(e){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(t){return"[Circular]"}default:return e}})),a=r[n];n<i;a=r[++n])b(a)||!S(a)?s+=" "+a:s+=" "+u(a);return s},t.deprecate=function(n,r){if("undefined"!==typeof e&&!0===e.noDeprecation)return n;if("undefined"===typeof e)return function(){return t.deprecate(n,r).apply(this,arguments)};var o=!1;function i(){if(!o){if(e.throwDeprecation)throw new Error(r);e.traceDeprecation?console.trace(r):console.error(r),o=!0}return n.apply(this,arguments)}return i};var i,s={};function u(e,n){var r={seen:[],stylize:c};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),v(n)?r.showHidden=n:n&&t._extend(r,n),O(r.showHidden)&&(r.showHidden=!1),O(r.depth)&&(r.depth=2),O(r.colors)&&(r.colors=!1),O(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=a),l(r,e,r.depth)}function a(e,t){var n=u.styles[t];return n?"["+u.colors[n][0]+"m"+e+"["+u.colors[n][1]+"m":e}function c(e,t){return e}function f(e){var t={};return e.forEach((function(e,n){t[e]=!0})),t}function l(e,n,r){if(e.customInspect&&n&&T(n.inspect)&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var o=n.inspect(r,e);return j(o)||(o=l(e,o,r)),o}var i=p(e,n);if(i)return i;var s=Object.keys(n),u=f(s);if(e.showHidden&&(s=Object.getOwnPropertyNames(n)),P(n)&&(s.indexOf("message")>=0||s.indexOf("description")>=0))return d(n);if(0===s.length){if(T(n)){var a=n.name?": "+n.name:"";return e.stylize("[Function"+a+"]","special")}if(C(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp");if(A(n))return e.stylize(Date.prototype.toString.call(n),"date");if(P(n))return d(n)}var c,v="",b=!1,w=["{","}"];if(g(n)&&(b=!0,w=["[","]"]),T(n)){var x=n.name?": "+n.name:"";v=" [Function"+x+"]"}return C(n)&&(v=" "+RegExp.prototype.toString.call(n)),A(n)&&(v=" "+Date.prototype.toUTCString.call(n)),P(n)&&(v=" "+d(n)),0!==s.length||b&&0!=n.length?r<0?C(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special"):(e.seen.push(n),c=b?h(e,n,r,u,s):s.map((function(t){return m(e,n,r,u,t,b)})),e.seen.pop(),y(c,v,w)):w[0]+v+w[1]}function p(e,t){if(O(t))return e.stylize("undefined","undefined");if(j(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}return x(t)?e.stylize(""+t,"number"):v(t)?e.stylize(""+t,"boolean"):b(t)?e.stylize("null","null"):void 0}function d(e){return"["+Error.prototype.toString.call(e)+"]"}function h(e,t,n,r,o){for(var i=[],s=0,u=t.length;s<u;++s)L(t,String(s))?i.push(m(e,t,n,r,String(s),!0)):i.push("");return o.forEach((function(o){o.match(/^\d+$/)||i.push(m(e,t,n,r,o,!0))})),i}function m(e,t,n,r,o,i){var s,u,a;if(a=Object.getOwnPropertyDescriptor(t,o)||{value:t[o]},a.get?u=a.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):a.set&&(u=e.stylize("[Setter]","special")),L(r,o)||(s="["+o+"]"),u||(e.seen.indexOf(a.value)<0?(u=b(n)?l(e,a.value,null):l(e,a.value,n-1),u.indexOf("\n")>-1&&(u=i?u.split("\n").map((function(e){return"  "+e})).join("\n").substr(2):"\n"+u.split("\n").map((function(e){return"   "+e})).join("\n"))):u=e.stylize("[Circular]","special")),O(s)){if(i&&o.match(/^\d+$/))return u;s=JSON.stringify(""+o),s.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=e.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=e.stylize(s,"string"))}return s+": "+u}function y(e,t,n){var r=e.reduce((function(e,t){return t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1}),0);return r>60?n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1]:n[0]+t+" "+e.join(", ")+" "+n[1]}function g(e){return Array.isArray(e)}function v(e){return"boolean"===typeof e}function b(e){return null===e}function w(e){return null==e}function x(e){return"number"===typeof e}function j(e){return"string"===typeof e}function E(e){return"symbol"===typeof e}function O(e){return void 0===e}function C(e){return S(e)&&"[object RegExp]"===N(e)}function S(e){return"object"===typeof e&&null!==e}function A(e){return S(e)&&"[object Date]"===N(e)}function P(e){return S(e)&&("[object Error]"===N(e)||e instanceof Error)}function T(e){return"function"===typeof e}function I(e){return null===e||"boolean"===typeof e||"number"===typeof e||"string"===typeof e||"symbol"===typeof e||"undefined"===typeof e}function N(e){return Object.prototype.toString.call(e)}function k(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(n){if(O(i)&&(i=Object({NODE_ENV:"production",BASE_URL:"./"}).NODE_DEBUG||""),n=n.toUpperCase(),!s[n])if(new RegExp("\\b"+n+"\\b","i").test(i)){var r=e.pid;s[n]=function(){var e=t.format.apply(t,arguments);console.error("%s %d: %s",n,r,e)}}else s[n]=function(){};return s[n]},t.inspect=u,u.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},u.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=g,t.isBoolean=v,t.isNull=b,t.isNullOrUndefined=w,t.isNumber=x,t.isString=j,t.isSymbol=E,t.isUndefined=O,t.isRegExp=C,t.isObject=S,t.isDate=A,t.isError=P,t.isFunction=T,t.isPrimitive=I,t.isBuffer=n("d60a");var R=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function _(){var e=new Date,t=[k(e.getHours()),k(e.getMinutes()),k(e.getSeconds())].join(":");return[e.getDate(),R[e.getMonth()],t].join(" ")}function L(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){console.log("%s - %s",_(),t.format.apply(t,arguments))},t.inherits=n("28a0"),t._extend=function(e,t){if(!t||!S(t))return e;var n=Object.keys(t),r=n.length;while(r--)e[n[r]]=t[n[r]];return e};var D="undefined"!==typeof Symbol?Symbol("util.promisify.custom"):void 0;function z(e,t){if(!e){var n=new Error("Promise was rejected with a falsy value");n.reason=e,e=n}return t(e)}function B(t){if("function"!==typeof t)throw new TypeError('The "original" argument must be of type Function');function n(){for(var n=[],r=0;r<arguments.length;r++)n.push(arguments[r]);var o=n.pop();if("function"!==typeof o)throw new TypeError("The last argument must be of type Function");var i=this,s=function(){return o.apply(i,arguments)};t.apply(this,n).then((function(t){e.nextTick(s,null,t)}),(function(t){e.nextTick(z,t,s)}))}return Object.setPrototypeOf(n,Object.getPrototypeOf(t)),Object.defineProperties(n,r(t)),n}t.promisify=function(e){if("function"!==typeof e)throw new TypeError('The "original" argument must be of type Function');if(D&&e[D]){var t=e[D];if("function"!==typeof t)throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(t,D,{value:t,enumerable:!1,writable:!1,configurable:!0}),t}function t(){for(var t,n,r=new Promise((function(e,r){t=e,n=r})),o=[],i=0;i<arguments.length;i++)o.push(arguments[i]);o.push((function(e,r){e?n(e):t(r)}));try{e.apply(this,o)}catch(s){n(s)}return r}return Object.setPrototypeOf(t,Object.getPrototypeOf(e)),D&&Object.defineProperty(t,D,{value:t,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(t,r(e))},t.promisify.custom=D,t.callbackify=B}).call(this,n("4362"))},"30b5":function(e,t,n){"use strict";var r=n("c532");function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(r.isURLSearchParams(t))i=t.toString();else{var s=[];r.forEach(t,(function(e,t){null!==e&&"undefined"!==typeof e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),s.push(o(t)+"="+o(e))})))})),i=s.join("&")}if(i){var u=e.indexOf("#");-1!==u&&(e=e.slice(0,u)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},3417:function(e,t,n){},"375d":function(e,t,n){"use strict";var r=n("afaf"),o=n.n(r);o.a},"387f":function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},3934:function(e,t,n){"use strict";var r=n("c532");e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return function(){return!0}}()},"3ed7":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"back-top"},[e._v("Top")])},o=[],i={name:"BackTop"},s=i,u=(n("375d"),n("2877")),a=Object(u["a"])(s,r,o,!1,null,null,null);t["a"]=a.exports},4362:function(e,t,n){t.nextTick=function(e){var t=Array.prototype.slice.call(arguments);t.shift(),setTimeout((function(){e.apply(null,t)}),0)},t.platform=t.arch=t.execPath=t.title="browser",t.pid=1,t.browser=!0,t.env={},t.argv=[],t.binding=function(e){throw new Error("No such module. (Possibly not yet loaded)")},function(){var e,r="/";t.cwd=function(){return r},t.chdir=function(t){e||(e=n("df7c")),r=e.resolve(t,r)}}(),t.exit=t.kill=t.umask=t.dlopen=t.uptime=t.memoryUsage=t.uvCounters=function(){},t.features={}},"467f":function(e,t,n){"use strict";var r=n("2d83");e.exports=function(e,t,n){var o=n.config.validateStatus;!o||o(n.status)?e(n):t(r("Request failed with status code "+n.status,n.config,null,n.request,n))}},"4a7b":function(e,t,n){"use strict";var r=n("c532");e.exports=function(e,t){t=t||{};var n={},o=["url","method","params","data"],i=["headers","auth","proxy"],s=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];r.forEach(o,(function(e){"undefined"!==typeof t[e]&&(n[e]=t[e])})),r.forEach(i,(function(o){r.isObject(t[o])?n[o]=r.deepMerge(e[o],t[o]):"undefined"!==typeof t[o]?n[o]=t[o]:r.isObject(e[o])?n[o]=r.deepMerge(e[o]):"undefined"!==typeof e[o]&&(n[o]=e[o])})),r.forEach(s,(function(r){"undefined"!==typeof t[r]?n[r]=t[r]:"undefined"!==typeof e[r]&&(n[r]=e[r])}));var u=o.concat(i).concat(s),a=Object.keys(t).filter((function(e){return-1===u.indexOf(e)}));return r.forEach(a,(function(r){"undefined"!==typeof t[r]?n[r]=t[r]:"undefined"!==typeof e[r]&&(n[r]=e[r])})),n}},5087:function(e,t,n){"use strict";var r=n("f461"),o=n.n(r);o.a},5270:function(e,t,n){"use strict";var r=n("c532"),o=n("c401"),i=n("2e67"),s=n("2444");function u(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){u(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]}));var t=e.adapter||s.adapter;return t(e).then((function(t){return u(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(u(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},"6d71":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"goods"},[n("ul",{staticClass:"goods-list"},e._l(e.goods,(function(e,t){return n("goods-list-item",{key:t,attrs:{"goods-item":e}})})),1)])},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"goods-list-item",on:{click:e.itemClick}},[n("div",{staticClass:"item-image"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.goodsItem.image,expression:"goodsItem.image"}],on:{load:e.imageLoad}})]),n("div",{staticClass:"list-item-desc"},[n("p",[e._v(e._s(e.goodsItem.title))]),n("span",{staticClass:"desc-price"},[e._v("￥"+e._s(e.goodsItem.price))]),n("span",{staticClass:"desc-collect"},[e._v("star: "+e._s(e.goodsItem.collection))])])])},s=[],u=(n("c975"),n("3022"),{props:{goodsItem:{type:Object,default:function(){return{}}}},methods:{imageLoad:function(){-1!==this.$route.path.indexOf("/home")&&this.$bus.$emit("homeRecommendImageLoaded")},itemClick:function(){this.$router.push({path:"/detail",query:{id:this.goodsItem.id}})}}}),a=u,c=(n("eb87"),n("2877")),f=Object(c["a"])(a,i,s,!1,null,null,null),l=f.exports,p={name:"GoodsList",props:{goods:{type:Array,default:function(){return[]}}},components:{GoodsListItem:l}},d=p,h=(n("ed73"),Object(c["a"])(d,r,o,!1,null,"30e6e4cc",null));t["a"]=h.exports},"6e7d":function(e,t,n){},"7a77":function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},"7aac":function(e,t,n){"use strict";var r=n("c532");e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,i,s){var u=[];u.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&u.push("expires="+new Date(n).toGMTString()),r.isString(o)&&u.push("path="+o),r.isString(i)&&u.push("domain="+i),!0===s&&u.push("secure"),document.cookie=u.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},"83b9":function(e,t,n){"use strict";var r=n("d925"),o=n("e683");e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},"8df4":function(e,t,n){"use strict";var r=n("7a77");function o(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e,t=new o((function(t){e=t}));return{token:t,cancel:e}},e.exports=o},ace8:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"swiper-wrapper",attrs:{id:"home_swiper"}},[n("ul",{staticClass:"swiper"},[e._t("default")],2),n("ul",{staticClass:"swiper-point"})])},o=[],i=(n("a9e3"),{name:"Swiper",props:{touchPercentage:{type:Number,default:.3},timerTime:{type:Number,default:3e3},isAutoPlayer:{type:Boolean,default:!1}},data:function(){return{itemCount:1,currentIndex:1,isAddAnimation:!0,swiper:null,swiperPointWrap:null,swiperItemWidth:0,timer:null,offsetPos:0,currenPointIndex:0}},methods:{handleDom:function(){this.swiperItemWidth=document.body.clientWidth,this.swiper=this.$el.firstChild,this.initSwiperList(),this.swiper.style.width=this.swiperItemWidth*this.swiper.children.length+"px",this.swiper.style.transform="translateX(".concat(-this.swiperItemWidth,"px)"),this.itemCount=this.swiper.children.length-2,this.swiperPointWrap=this.$el.lastChild,this.onTouchstartEvent(),this.onTouchendEvent(),this.onTransitionEvent()},moveCard:function(){this.currentIndex++,this.isAddAnimation&&(this.swiper.style.transition="all .8s",this.isAddAnimation=!1),this.swiper.style.transform="translateX(".concat(-this.currentIndex*this.swiperItemWidth,"px)")},timerFun:function(){this.moveCard()},initSwiperPoint:function(){for(var e=0;e<this.itemCount;++e){var t=document.createElement("li");t.classList.add("point-item"),0===e&&t.classList.add("active-point"),this.swiperPointWrap.appendChild(t)}},updatePoint:function(){this.swiperPointWrap.children[this.currenPointIndex].classList.remove("active-point"),this.currenPointIndex=this.currentIndex-1,this.swiperPointWrap.children[this.currenPointIndex].classList.add("active-point")},initSwiperList:function(){var e=this.swiper.children[0].cloneNode(!0),t=this.swiper.children[this.swiper.children.length-1].cloneNode(!0);this.swiper.insertBefore(t,this.swiper.children[0]),this.swiper.appendChild(e)},onTouchstartEvent:function(){var e=this;this.swiper.ontouchstart=function(t){e.isAutoPlayer&&clearInterval(e.timer);var n=t.changedTouches[0].clientX,r=-e.currentIndex*e.swiperItemWidth;e.swiper.ontouchmove=function(t){e.swiper.style.transition="none",e.offsetPos=t.changedTouches[0].clientX-n+r,e.swiper.style.transform="translateX(".concat(e.offsetPos,"px)"),e.isAddAnimation=!0}}},onTransitionEvent:function(){var e=this;this.swiper.addEventListener("transitionend",(function(){e.currentIndex>e.itemCount?(e.swiper.style.transition="none",e.swiper.style.transform="translateX(".concat(-e.swiperItemWidth,"px)"),e.currentIndex=1,e.isAddAnimation=!0):e.currentIndex<1&&(e.swiper.style.transition="none",e.swiper.style.transform="translateX(".concat(-e.swiperItemWidth*e.itemCount,"px)"),e.currentIndex=e.itemCount,e.isAddAnimation=!0),e.updatePoint()}))},onTouchendEvent:function(){var e=this;this.swiper.ontouchend=function(){var t=e.offsetPos+e.currentIndex*e.swiperItemWidth;t<-e.swiperItemWidth*e.touchPercentage?e.moveCard():t>e.swiperItemWidth*e.touchPercentage?(e.currentIndex-=2,e.moveCard()):(e.currentIndex--,e.moveCard()),e.isAutoPlayer&&(e.timer=setInterval(e.timerFun,e.timerTime))}}},mounted:function(){this.handleDom(),this.initSwiperPoint(),this.isAutoPlayer&&(this.timer=setInterval(this.timerFun,this.timerTime))}}),s=i,u=(n("02e4"),n("2877")),a=Object(u["a"])(s,r,o,!1,null,null,null);t["a"]=a.exports},afaf:function(e,t,n){},b383:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("bc3a"),o=n.n(r);function i(e){var t=o.a.create({baseURL:"http://127.0.0.1:3000",timeout:1e4});return t.interceptors.request.use((function(e){return e}),(function(e){if(e)throw e})),t.interceptors.response.use((function(e){return e.data}),(function(e){if(e)throw e})),t(e)}},b50d:function(e,t,n){"use strict";var r=n("c532"),o=n("467f"),i=n("30b5"),s=n("83b9"),u=n("c345"),a=n("3934"),c=n("2d83");e.exports=function(e){return new Promise((function(t,f){var l=e.data,p=e.headers;r.isFormData(l)&&delete p["Content-Type"];var d=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",m=e.auth.password||"";p.Authorization="Basic "+btoa(h+":"+m)}var y=s(e.baseURL,e.url);if(d.open(e.method.toUpperCase(),i(y,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?u(d.getAllResponseHeaders()):null,r=e.responseType&&"text"!==e.responseType?d.response:d.responseText,i={data:r,status:d.status,statusText:d.statusText,headers:n,config:e,request:d};o(t,f,i),d=null}},d.onabort=function(){d&&(f(c("Request aborted",e,"ECONNABORTED",d)),d=null)},d.onerror=function(){f(c("Network Error",e,null,d)),d=null},d.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),f(c(t,e,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var g=n("7aac"),v=(e.withCredentials||a(y))&&e.xsrfCookieName?g.read(e.xsrfCookieName):void 0;v&&(p[e.xsrfHeaderName]=v)}if("setRequestHeader"in d&&r.forEach(p,(function(e,t){"undefined"===typeof l&&"content-type"===t.toLowerCase()?delete p[t]:d.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(d.withCredentials=!!e.withCredentials),e.responseType)try{d.responseType=e.responseType}catch(b){if("json"!==e.responseType)throw b}"function"===typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){d&&(d.abort(),f(e),d=null)})),void 0===l&&(l=null),d.send(l)}))}},bc3a:function(e,t,n){e.exports=n("cee4")},c345:function(e,t,n){"use strict";var r=n("c532"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,s={};return e?(r.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(s[t]&&o.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([n]):s[t]?s[t]+", "+n:n}})),s):s}},c401:function(e,t,n){"use strict";var r=n("c532");e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},c532:function(e,t,n){"use strict";var r=n("1d2b"),o=Object.prototype.toString;function i(e){return"[object Array]"===o.call(e)}function s(e){return"undefined"===typeof e}function u(e){return null!==e&&!s(e)&&null!==e.constructor&&!s(e.constructor)&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function a(e){return"[object ArrayBuffer]"===o.call(e)}function c(e){return"undefined"!==typeof FormData&&e instanceof FormData}function f(e){var t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer,t}function l(e){return"string"===typeof e}function p(e){return"number"===typeof e}function d(e){return null!==e&&"object"===typeof e}function h(e){return"[object Date]"===o.call(e)}function m(e){return"[object File]"===o.call(e)}function y(e){return"[object Blob]"===o.call(e)}function g(e){return"[object Function]"===o.call(e)}function v(e){return d(e)&&g(e.pipe)}function b(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams}function w(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function x(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function j(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),i(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}function E(){var e={};function t(t,n){"object"===typeof e[n]&&"object"===typeof t?e[n]=E(e[n],t):e[n]=t}for(var n=0,r=arguments.length;n<r;n++)j(arguments[n],t);return e}function O(){var e={};function t(t,n){"object"===typeof e[n]&&"object"===typeof t?e[n]=O(e[n],t):e[n]="object"===typeof t?O({},t):t}for(var n=0,r=arguments.length;n<r;n++)j(arguments[n],t);return e}function C(e,t,n){return j(t,(function(t,o){e[o]=n&&"function"===typeof t?r(t,n):t})),e}e.exports={isArray:i,isArrayBuffer:a,isBuffer:u,isFormData:c,isArrayBufferView:f,isString:l,isNumber:p,isObject:d,isUndefined:s,isDate:h,isFile:m,isBlob:y,isFunction:g,isStream:v,isURLSearchParams:b,isStandardBrowserEnv:x,forEach:j,merge:E,deepMerge:O,extend:C,trim:w}},c8af:function(e,t,n){"use strict";var r=n("c532");e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},cee4:function(e,t,n){"use strict";var r=n("c532"),o=n("1d2b"),i=n("0a06"),s=n("4a7b"),u=n("2444");function a(e){var t=new i(e),n=o(i.prototype.request,t);return r.extend(n,i.prototype,t),r.extend(n,t),n}var c=a(u);c.Axios=i,c.create=function(e){return a(s(c.defaults,e))},c.Cancel=n("7a77"),c.CancelToken=n("8df4"),c.isCancel=n("2e67"),c.all=function(e){return Promise.all(e)},c.spread=n("0df6"),e.exports=c,e.exports.default=c},d3e5:function(e,t,n){},d60a:function(e,t){e.exports=function(e){return e&&"object"===typeof e&&"function"===typeof e.copy&&"function"===typeof e.fill&&"function"===typeof e.readUInt8}},d925:function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},df7c:function(e,t,n){(function(e){function n(e,t){for(var n=0,r=e.length-1;r>=0;r--){var o=e[r];"."===o?e.splice(r,1):".."===o?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function r(e){"string"!==typeof e&&(e+="");var t,n=0,r=-1,o=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!o){n=t+1;break}}else-1===r&&(o=!1,r=t+1);return-1===r?"":e.slice(n,r)}function o(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}t.resolve=function(){for(var t="",r=!1,i=arguments.length-1;i>=-1&&!r;i--){var s=i>=0?arguments[i]:e.cwd();if("string"!==typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(t=s+"/"+t,r="/"===s.charAt(0))}return t=n(o(t.split("/"),(function(e){return!!e})),!r).join("/"),(r?"/":"")+t||"."},t.normalize=function(e){var r=t.isAbsolute(e),s="/"===i(e,-1);return e=n(o(e.split("/"),(function(e){return!!e})),!r).join("/"),e||r||(e="."),e&&s&&(e+="/"),(r?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(o(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length;t++)if(""!==e[t])break;for(var n=e.length-1;n>=0;n--)if(""!==e[n])break;return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var o=r(e.split("/")),i=r(n.split("/")),s=Math.min(o.length,i.length),u=s,a=0;a<s;a++)if(o[a]!==i[a]){u=a;break}var c=[];for(a=u;a<o.length;a++)c.push("..");return c=c.concat(i.slice(u)),c.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,r=-1,o=!0,i=e.length-1;i>=1;--i)if(t=e.charCodeAt(i),47===t){if(!o){r=i;break}}else o=!1;return-1===r?n?"/":".":n&&1===r?"/":e.slice(0,r)},t.basename=function(e,t){var n=r(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,n=0,r=-1,o=!0,i=0,s=e.length-1;s>=0;--s){var u=e.charCodeAt(s);if(47!==u)-1===r&&(o=!1,r=s+1),46===u?-1===t?t=s:1!==i&&(i=1):-1!==t&&(i=-1);else if(!o){n=s+1;break}}return-1===t||-1===r||0===i||1===i&&t===r-1&&t===n+1?"":e.slice(t,r)};var i="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n("4362"))},e683:function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},eb87:function(e,t,n){"use strict";var r=n("d3e5"),o=n.n(r);o.a},ed73:function(e,t,n){"use strict";var r=n("6e7d"),o=n.n(r);o.a},eecb:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("3ed7"),o={data:function(){return{isShowToTop:!1}},components:{BackTop:r["a"]},methods:{backClick:function(){this.$refs.scroll.scrollTo(0,0,500)}}}},f461:function(e,t,n){},f6b4:function(e,t,n){"use strict";var r=n("c532");function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o}}]);
//# sourceMappingURL=chunk-278f461c.49ffdbe3.js.map