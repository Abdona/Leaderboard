(()=>{var t={98:function(t,e){var n="undefined"!=typeof self?self:this,r=function(){function t(){this.fetch=!1,this.DOMException=n.DOMException}return t.prototype=n,new t}();!function(t){!function(e){var n="URLSearchParams"in t,r="Symbol"in t&&"iterator"in Symbol,o="FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),i="FormData"in t,s="ArrayBuffer"in t;if(s)var a=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],c=ArrayBuffer.isView||function(t){return t&&a.indexOf(Object.prototype.toString.call(t))>-1};function u(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function d(t){return"string"!=typeof t&&(t=String(t)),t}function l(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return r&&(e[Symbol.iterator]=function(){return e}),e}function h(t){this.map={},t instanceof h?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function p(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function f(t){return new Promise((function(e,n){t.onload=function(){e(t.result)},t.onerror=function(){n(t.error)}}))}function y(t){var e=new FileReader,n=f(e);return e.readAsArrayBuffer(t),n}function b(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function m(){return this.bodyUsed=!1,this._initBody=function(t){var e;this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:o&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:i&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:n&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():s&&o&&(e=t)&&DataView.prototype.isPrototypeOf(e)?(this._bodyArrayBuffer=b(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):s&&(ArrayBuffer.prototype.isPrototypeOf(t)||c(t))?this._bodyArrayBuffer=b(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},o&&(this.blob=function(){var t=p(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?p(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(y)}),this.text=function(){var t,e,n,r=p(this);if(r)return r;if(this._bodyBlob)return t=this._bodyBlob,n=f(e=new FileReader),e.readAsText(t),n;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),n=new Array(e.length),r=0;r<e.length;r++)n[r]=String.fromCharCode(e[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},i&&(this.formData=function(){return this.text().then(w)}),this.json=function(){return this.text().then(JSON.parse)},this}h.prototype.append=function(t,e){t=u(t),e=d(e);var n=this.map[t];this.map[t]=n?n+", "+e:e},h.prototype.delete=function(t){delete this.map[u(t)]},h.prototype.get=function(t){return t=u(t),this.has(t)?this.map[t]:null},h.prototype.has=function(t){return this.map.hasOwnProperty(u(t))},h.prototype.set=function(t,e){this.map[u(t)]=d(e)},h.prototype.forEach=function(t,e){for(var n in this.map)this.map.hasOwnProperty(n)&&t.call(e,this.map[n],n,this)},h.prototype.keys=function(){var t=[];return this.forEach((function(e,n){t.push(n)})),l(t)},h.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),l(t)},h.prototype.entries=function(){var t=[];return this.forEach((function(e,n){t.push([n,e])})),l(t)},r&&(h.prototype[Symbol.iterator]=h.prototype.entries);var g=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function v(t,e){var n,r,o=(e=e||{}).body;if(t instanceof v){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new h(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new h(e.headers)),this.method=(r=(n=e.method||this.method||"GET").toUpperCase(),g.indexOf(r)>-1?r:n),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function w(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var n=t.split("="),r=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");e.append(decodeURIComponent(r),decodeURIComponent(o))}})),e}function x(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new h(e.headers),this.url=e.url||"",this._initBody(t)}v.prototype.clone=function(){return new v(this,{body:this._bodyInit})},m.call(v.prototype),m.call(x.prototype),x.prototype.clone=function(){return new x(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new h(this.headers),url:this.url})},x.error=function(){var t=new x(null,{status:0,statusText:""});return t.type="error",t};var E=[301,302,303,307,308];x.redirect=function(t,e){if(-1===E.indexOf(e))throw new RangeError("Invalid status code");return new x(null,{status:e,headers:{location:t}})},e.DOMException=t.DOMException;try{new e.DOMException}catch(t){e.DOMException=function(t,e){this.message=t,this.name=e;var n=Error(t);this.stack=n.stack},e.DOMException.prototype=Object.create(Error.prototype),e.DOMException.prototype.constructor=e.DOMException}function T(t,n){return new Promise((function(r,i){var s=new v(t,n);if(s.signal&&s.signal.aborted)return i(new e.DOMException("Aborted","AbortError"));var a=new XMLHttpRequest;function c(){a.abort()}a.onload=function(){var t,e,n={status:a.status,statusText:a.statusText,headers:(t=a.getAllResponseHeaders()||"",e=new h,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(t){var n=t.split(":"),r=n.shift().trim();if(r){var o=n.join(":").trim();e.append(r,o)}})),e)};n.url="responseURL"in a?a.responseURL:n.headers.get("X-Request-URL");var o="response"in a?a.response:a.responseText;r(new x(o,n))},a.onerror=function(){i(new TypeError("Network request failed"))},a.ontimeout=function(){i(new TypeError("Network request failed"))},a.onabort=function(){i(new e.DOMException("Aborted","AbortError"))},a.open(s.method,s.url,!0),"include"===s.credentials?a.withCredentials=!0:"omit"===s.credentials&&(a.withCredentials=!1),"responseType"in a&&o&&(a.responseType="blob"),s.headers.forEach((function(t,e){a.setRequestHeader(e,t)})),s.signal&&(s.signal.addEventListener("abort",c),a.onreadystatechange=function(){4===a.readyState&&s.signal.removeEventListener("abort",c)}),a.send(void 0===s._bodyInit?null:s._bodyInit)}))}T.polyfill=!0,t.fetch||(t.fetch=T,t.Headers=h,t.Request=v,t.Response=x),e.Headers=h,e.Request=v,e.Response=x,e.fetch=T,Object.defineProperty(e,"__esModule",{value:!0})}({})}(r),r.fetch.ponyfill=!0,delete r.fetch.polyfill;var o=r;(e=o.fetch).default=o.fetch,e.fetch=o.fetch,e.Headers=o.Headers,e.Request=o.Request,e.Response=o.Response,t.exports=e},426:(t,e,n)=>{"use strict";n.d(e,{Z:()=>d});var r=n(645),o=n.n(r),i=n(667),s=n.n(i),a=n(309),c=o()((function(t){return t[1]})),u=s()(a);c.push([t.id,"body {\n  background-image: url("+u+");\n  background-size: cover;\n}\n\n.fs-1 {\n  color: #bf645c;\n}\n\n.title {\n  margin-left: 10%;\n}\n\n.showscore {\n  margin-left: 50px;\n  width: 30%;\n}\n\n.butt {\n  display: inline-block;\n  background-color: black;\n  padding: 0.35em 1.2em;\n  border: 0.1em solid #000;\n  margin: 0 0.3em 0.3em 0;\n  border-radius: 0.12em;\n  box-sizing: border-box;\n  text-decoration: none;\n  font-weight: 300;\n  color: #bf645c;\n  text-align: center;\n  transition: all 0.2s;\n}\n\n.butt:hover {\n  color: #000;\n  background-color: #fff;\n}\n\n@media all and (max-width: 30em) {\n  .butt {\n    display: block;\n    margin: 0.4em auto;\n  }\n}\n\n.showscore ul {\n  list-style: none;\n  border: 2px black solid;\n  margin: 0;\n  padding: 0;\n}\n\n.headcont h2 {\n  float: left;\n}\n\n.headcont button {\n  float: right;\n  margin-top: 20px;\n}\n\n.headcont::after {\n  content: '';\n  clear: both;\n  display: table;\n}\n\n.main {\n  display: flex;\n  justify-content: space-evenly;\n  padding: 100px;\n}\n\n.addscore {\n  position: relative;\n}\n\n.addscore input {\n  border: 2px solid black;\n  margin-top: 10px;\n}\n\n#submbutt {\n  position: absolute;\n  right: 0;\n  margin-top: 10px;\n}",""]);const d=c},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(o[s]=!0)}for(var a=0;a<t.length;a++){var c=[].concat(t[a]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},667:t=>{"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var i={},s=[],a=0;a<t.length;a++){var c=t[a],u=r.base?c[0]+r.base:c[0],d=i[u]||0,l="".concat(u," ").concat(d);i[u]=d+1;var h=n(l),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==h?(e[h].references++,e[h].updater(p)):e.push({identifier:l,updater:o(p,r),references:1}),s.push(l)}return s}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var s=0;s<i.length;s++){var a=n(i[s]);e[a].references--}for(var c=r(t,o),u=0;u<i.length;u++){var d=n(i[u]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=c}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r=n.css,o=n.media,i=n.sourceMap;o?t.setAttribute("media",o):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,t)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},309:(t,e,n)=>{"use strict";t.exports=n.p+"73088518457577866c52.jpg"}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),(()=>{"use strict";var t=n(379),e=n.n(t),r=n(795),o=n.n(r),i=n(569),s=n.n(i),a=n(565),c=n.n(a),u=n(216),d=n.n(u),l=n(589),h=n.n(l),p=n(426),f={};f.styleTagTransform=h(),f.setAttributes=c(),f.insert=s().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),e()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;var y=n(98),b=n.n(y);let m=!0;const g=new class{async create(){return this.gameId=await(async()=>{const t=await b()("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/",{method:"POST",body:JSON.stringify({name:"My ScoreBoard"}),headers:{"Content-type":"application/json; charset=UTF-8"}});return(await t.json()).result})(),this.gameId=this.gameId.replace(/Game with ID: /g,"").replace(/ added./g,""),this.gameId}async getScores(){return await(async t=>{const e=(await b()(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${t}/scores`)).json();return await e})(this.gameId)}async addNewscore(t,e){await(async(t,e,n)=>{const r=await b()(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${n}/scores`,{method:"POST",body:JSON.stringify({user:t,score:e}),headers:{"Content-type":"application/json; charset=UTF-8"}});return(await r.json()).result})(t,e,this.gameId)}};document.getElementById("newgame").addEventListener("click",(async()=>{await g.create()})),document.getElementById("refreshbutt").addEventListener("click",(async()=>{!function(t){const e=document.getElementById("listcontainer");e.innerHTML="",t.forEach((t=>{const n=document.createElement("li");n.innerText=`${t.user} ${t.score}`,!1===m&&(n.style.backgroundColor="#DCDCDC"),e.appendChild(n),m=!m}))}((await g.getScores()).result)})),document.getElementById("submbutt").addEventListener("click",(async()=>{const t=document.getElementById("username"),e=document.getElementById("userscore");!function(t,e){const n=document.getElementById("listcontainer"),r=document.createElement("li");r.innerText=`${t} ${e}`,!1===m&&(r.style.backgroundColor="#DCDCDC"),n.appendChild(r),m=!m}(t.value,e.value),await g.addNewscore(t.value,e.value),t.value="",e.value=""}))})()})();