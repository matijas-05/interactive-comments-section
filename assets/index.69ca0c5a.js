var bk=Object.defineProperty,Sk=Object.defineProperties;var kk=Object.getOwnPropertyDescriptors;var al=Object.getOwnPropertySymbols;var xg=Object.prototype.hasOwnProperty,Og=Object.prototype.propertyIsEnumerable;var cf=(t,e,n)=>e in t?bk(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,ee=(t,e)=>{for(var n in e||(e={}))xg.call(e,n)&&cf(t,n,e[n]);if(al)for(var n of al(e))Og.call(e,n)&&cf(t,n,e[n]);return t},At=(t,e)=>Sk(t,kk(e));var Ri=(t,e)=>{var n={};for(var r in t)xg.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&al)for(var r of al(t))e.indexOf(r)<0&&Og.call(t,r)&&(n[r]=t[r]);return n};var ff=(t,e,n)=>(cf(t,typeof e!="symbol"?e+"":e,n),n);const Tk=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};Tk();var Ck=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function hw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Ik(t){if(t.__esModule)return t;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(t).forEach(function(n){var r=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:function(){return t[n]}})}),e}var se={exports:{}},be={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Ag=Object.getOwnPropertySymbols,xk=Object.prototype.hasOwnProperty,Ok=Object.prototype.propertyIsEnumerable;function Ak(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function Rk(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(e).map(function(s){return e[s]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(s){i[s]=s}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var pw=Rk()?Object.assign:function(t,e){for(var n,r=Ak(t),i,s=1;s<arguments.length;s++){n=Object(arguments[s]);for(var o in n)xk.call(n,o)&&(r[o]=n[o]);if(Ag){i=Ag(n);for(var a=0;a<i.length;a++)Ok.call(n,i[a])&&(r[i[a]]=n[i[a]])}}return r};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yh=pw,Rs=60103,mw=60106;be.Fragment=60107;be.StrictMode=60108;be.Profiler=60114;var gw=60109,yw=60110,vw=60112;be.Suspense=60113;var ww=60115,_w=60116;if(typeof Symbol=="function"&&Symbol.for){var en=Symbol.for;Rs=en("react.element"),mw=en("react.portal"),be.Fragment=en("react.fragment"),be.StrictMode=en("react.strict_mode"),be.Profiler=en("react.profiler"),gw=en("react.provider"),yw=en("react.context"),vw=en("react.forward_ref"),be.Suspense=en("react.suspense"),ww=en("react.memo"),_w=en("react.lazy")}var Rg=typeof Symbol=="function"&&Symbol.iterator;function Nk(t){return t===null||typeof t!="object"?null:(t=Rg&&t[Rg]||t["@@iterator"],typeof t=="function"?t:null)}function xa(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ew={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bw={};function Ns(t,e,n){this.props=t,this.context=e,this.refs=bw,this.updater=n||Ew}Ns.prototype.isReactComponent={};Ns.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error(xa(85));this.updater.enqueueSetState(this,t,e,"setState")};Ns.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Sw(){}Sw.prototype=Ns.prototype;function Qh(t,e,n){this.props=t,this.context=e,this.refs=bw,this.updater=n||Ew}var Xh=Qh.prototype=new Sw;Xh.constructor=Qh;Yh(Xh,Ns.prototype);Xh.isPureReactComponent=!0;var Jh={current:null},kw=Object.prototype.hasOwnProperty,Tw={key:!0,ref:!0,__self:!0,__source:!0};function Cw(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)kw.call(e,r)&&!Tw.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Rs,type:t,key:s,ref:o,props:i,_owner:Jh.current}}function Pk(t,e){return{$$typeof:Rs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Zh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Rs}function Dk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ng=/\/+/g;function df(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Dk(""+t.key):e.toString(36)}function Dl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Rs:case mw:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+df(o,0):r,Array.isArray(i)?(n="",t!=null&&(n=t.replace(Ng,"$&/")+"/"),Dl(i,e,n,"",function(u){return u})):i!=null&&(Zh(i)&&(i=Pk(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ng,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Array.isArray(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+df(s,a);o+=Dl(s,e,n,l,i)}else if(l=Nk(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+df(s,a++),o+=Dl(s,e,n,l,i);else if(s==="object")throw e=""+t,Error(xa(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e));return o}function ll(t,e,n){if(t==null)return t;var r=[],i=0;return Dl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Mk(t){if(t._status===-1){var e=t._result;e=e(),t._status=0,t._result=e,e.then(function(n){t._status===0&&(n=n.default,t._status=1,t._result=n)},function(n){t._status===0&&(t._status=2,t._result=n)})}if(t._status===1)return t._result;throw t._result}var Iw={current:null};function Kn(){var t=Iw.current;if(t===null)throw Error(xa(321));return t}var Lk={ReactCurrentDispatcher:Iw,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:Jh,IsSomeRendererActing:{current:!1},assign:Yh};be.Children={map:ll,forEach:function(t,e,n){ll(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ll(t,function(){e++}),e},toArray:function(t){return ll(t,function(e){return e})||[]},only:function(t){if(!Zh(t))throw Error(xa(143));return t}};be.Component=Ns;be.PureComponent=Qh;be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lk;be.cloneElement=function(t,e,n){if(t==null)throw Error(xa(267,t));var r=Yh({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Jh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)kw.call(e,l)&&!Tw.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Rs,type:t.type,key:i,ref:s,props:r,_owner:o}};be.createContext=function(t,e){return e===void 0&&(e=null),t={$$typeof:yw,_calculateChangedBits:e,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider={$$typeof:gw,_context:t},t.Consumer=t};be.createElement=Cw;be.createFactory=function(t){var e=Cw.bind(null,t);return e.type=t,e};be.createRef=function(){return{current:null}};be.forwardRef=function(t){return{$$typeof:vw,render:t}};be.isValidElement=Zh;be.lazy=function(t){return{$$typeof:_w,_payload:{_status:-1,_result:t},_init:Mk}};be.memo=function(t,e){return{$$typeof:ww,type:t,compare:e===void 0?null:e}};be.useCallback=function(t,e){return Kn().useCallback(t,e)};be.useContext=function(t,e){return Kn().useContext(t,e)};be.useDebugValue=function(){};be.useEffect=function(t,e){return Kn().useEffect(t,e)};be.useImperativeHandle=function(t,e,n){return Kn().useImperativeHandle(t,e,n)};be.useLayoutEffect=function(t,e){return Kn().useLayoutEffect(t,e)};be.useMemo=function(t,e){return Kn().useMemo(t,e)};be.useReducer=function(t,e,n){return Kn().useReducer(t,e,n)};be.useRef=function(t){return Kn().useRef(t)};be.useState=function(t){return Kn().useState(t)};be.version="17.0.2";se.exports=be;var Ge=se.exports;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},$k=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Ow={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,f=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(d=64)),r.push(n[c],n[f],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):$k(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||f==null)throw Error();const d=s<<2|a>>4;if(r.push(d),u!==64){const g=a<<4&240|u>>2;if(r.push(g),f!==64){const _=u<<6&192|f;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Fk=function(t){const e=xw(t);return Ow.encodeByteArray(e,!0)},Aw=function(t){return Fk(t).replace(/\./g,"")},Uk=function(t){try{return Ow.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Rw(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tt())}function Nw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Pw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Vk(){return tt().indexOf("Electron/")>=0}function Dw(){const t=tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Bk(){return tt().indexOf("MSAppHost/")>=0}function zk(){return typeof indexedDB=="object"}function Hk(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wk="FirebaseError";class Dr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Wk,Object.setPrototypeOf(this,Dr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Oa.prototype.create)}}class Oa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?qk(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Dr(i,a,r)}}function qk(t,e){return t.replace(Kk,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Kk=/\{\$([^}]+)}/g;function Gk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ru(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Pg(s)&&Pg(o)){if(!ru(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Pg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function mo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function go(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Yk(t,e){const n=new Qk(t,e);return n.subscribe.bind(n)}class Qk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Xk(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=hf),i.error===void 0&&(i.error=hf),i.complete===void 0&&(i.complete=hf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Xk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function hf(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(t){return t&&t._delegate?t._delegate:t}class br{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new jk;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(eT(e))try{this.getOrInitializeService({instanceIdentifier:Ur})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ur){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ur){return this.instances.has(e)}getOptions(e=Ur){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Zk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ur){return this.component?this.component.multipleInstances?e:Ur:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Zk(t){return t===Ur?void 0:t}function eT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Jk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Se||(Se={}));const nT={debug:Se.DEBUG,verbose:Se.VERBOSE,info:Se.INFO,warn:Se.WARN,error:Se.ERROR,silent:Se.SILENT},rT=Se.INFO,iT={[Se.DEBUG]:"log",[Se.VERBOSE]:"log",[Se.INFO]:"info",[Se.WARN]:"warn",[Se.ERROR]:"error"},sT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=iT[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ep{constructor(e){this.name=e,this._logLevel=rT,this._logHandler=sT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?nT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Se.DEBUG,...e),this._logHandler(this,Se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Se.VERBOSE,...e),this._logHandler(this,Se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Se.INFO,...e),this._logHandler(this,Se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Se.WARN,...e),this._logHandler(this,Se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Se.ERROR,...e),this._logHandler(this,Se.ERROR,...e)}}const oT=(t,e)=>e.some(n=>t instanceof n);let Dg,Mg;function aT(){return Dg||(Dg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lT(){return Mg||(Mg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mw=new WeakMap,dd=new WeakMap,Lw=new WeakMap,pf=new WeakMap,tp=new WeakMap;function uT(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(fr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Mw.set(n,t)}).catch(()=>{}),tp.set(e,t),e}function cT(t){if(dd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});dd.set(t,e)}let hd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return dd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Lw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return fr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function fT(t){hd=t(hd)}function dT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(mf(this),e,...n);return Lw.set(r,e.sort?e.sort():[e]),fr(r)}:lT().includes(t)?function(...e){return t.apply(mf(this),e),fr(Mw.get(this))}:function(...e){return fr(t.apply(mf(this),e))}}function hT(t){return typeof t=="function"?dT(t):(t instanceof IDBTransaction&&cT(t),oT(t,aT())?new Proxy(t,hd):t)}function fr(t){if(t instanceof IDBRequest)return uT(t);if(pf.has(t))return pf.get(t);const e=hT(t);return e!==t&&(pf.set(t,e),tp.set(e,t)),e}const mf=t=>tp.get(t);function pT(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=fr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(fr(o.result),l.oldVersion,l.newVersion,fr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const mT=["get","getKey","getAll","getAllKeys","count"],gT=["put","add","delete","clear"],gf=new Map;function Lg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(gf.get(e))return gf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=gT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||mT.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return gf.set(e,s),s}fT(t=>At(ee({},t),{get:(e,n,r)=>Lg(e,n)||t.get(e,n,r),has:(e,n)=>!!Lg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(vT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function vT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pd="@firebase/app",$g="0.7.26";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np=new ep("@firebase/app"),wT="@firebase/app-compat",_T="@firebase/analytics-compat",ET="@firebase/analytics",bT="@firebase/app-check-compat",ST="@firebase/app-check",kT="@firebase/auth",TT="@firebase/auth-compat",CT="@firebase/database",IT="@firebase/database-compat",xT="@firebase/functions",OT="@firebase/functions-compat",AT="@firebase/installations",RT="@firebase/installations-compat",NT="@firebase/messaging",PT="@firebase/messaging-compat",DT="@firebase/performance",MT="@firebase/performance-compat",LT="@firebase/remote-config",$T="@firebase/remote-config-compat",FT="@firebase/storage",UT="@firebase/storage-compat",jT="@firebase/firestore",VT="@firebase/firestore-compat",BT="firebase",zT="9.8.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w="[DEFAULT]",HT={[pd]:"fire-core",[wT]:"fire-core-compat",[ET]:"fire-analytics",[_T]:"fire-analytics-compat",[ST]:"fire-app-check",[bT]:"fire-app-check-compat",[kT]:"fire-auth",[TT]:"fire-auth-compat",[CT]:"fire-rtdb",[IT]:"fire-rtdb-compat",[xT]:"fire-fn",[OT]:"fire-fn-compat",[AT]:"fire-iid",[RT]:"fire-iid-compat",[NT]:"fire-fcm",[PT]:"fire-fcm-compat",[DT]:"fire-perf",[MT]:"fire-perf-compat",[LT]:"fire-rc",[$T]:"fire-rc-compat",[FT]:"fire-gcs",[UT]:"fire-gcs-compat",[jT]:"fire-fst",[VT]:"fire-fst-compat","fire-js":"fire-js",[BT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu=new Map,md=new Map;function WT(t,e){try{t.container.addComponent(e)}catch(n){np.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function oi(t){const e=t.name;if(md.has(e))return np.debug(`There were multiple attempts to register component ${e}.`),!1;md.set(e,t);for(const n of iu.values())WT(n,t);return!0}function fc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qT={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},ai=new Oa("app","Firebase",qT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new br("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ai.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps=zT;function GT(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:$w,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw ai.create("bad-app-name",{appName:String(r)});const i=iu.get(r);if(i){if(ru(t,i.options)&&ru(n,i.config))return i;throw ai.create("duplicate-app",{appName:r})}const s=new tT(r);for(const a of md.values())s.addComponent(a);const o=new KT(t,n,s);return iu.set(r,o),o}function rp(t=$w){const e=iu.get(t);if(!e)throw ai.create("no-app",{appName:t});return e}function wn(t,e,n){var r;let i=(r=HT[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),np.warn(a.join(" "));return}oi(new br(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YT="firebase-heartbeat-database",QT=1,Xo="firebase-heartbeat-store";let yf=null;function Fw(){return yf||(yf=pT(YT,QT,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Xo)}}}).catch(t=>{throw ai.create("storage-open",{originalErrorMessage:t.message})})),yf}async function XT(t){var e;try{return(await Fw()).transaction(Xo).objectStore(Xo).get(Uw(t))}catch(n){throw ai.create("storage-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message})}}async function Fg(t,e){var n;try{const i=(await Fw()).transaction(Xo,"readwrite");return await i.objectStore(Xo).put(e,Uw(t)),i.done}catch(r){throw ai.create("storage-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message})}}function Uw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JT=1024,ZT=30*24*60*60*1e3;class eC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new nC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ug();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=ZT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ug(),{heartbeatsToSend:n,unsentEntries:r}=tC(this._heartbeatsCache.heartbeats),i=Aw(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ug(){return new Date().toISOString().substring(0,10)}function tC(t,e=JT){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),jg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),jg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class nC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zk()?Hk().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await XT(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function jg(t){return Aw(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rC(t){oi(new br("platform-logger",e=>new yT(e),"PRIVATE")),oi(new br("heartbeat",e=>new eC(e),"PRIVATE")),wn(pd,$g,t),wn(pd,$g,"esm2017"),wn("fire-js","")}rC("");var iC="firebase",sC="9.8.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wn(iC,sC,"app");function ip(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function jw(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const oC=jw,Vw=new Oa("auth","Firebase",jw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg=new ep("@firebase/auth");function Ml(t,...e){Vg.logLevel<=Se.ERROR&&Vg.error(`Auth (${Ps}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(t,...e){throw sp(t,...e)}function _n(t,...e){return sp(t,...e)}function aC(t,e,n){const r=Object.assign(Object.assign({},oC()),{[e]:n});return new Oa("auth","Firebase",r).create(e,{appName:t.name})}function sp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Vw.create(t,...e)}function ue(t,e,...n){if(!t)throw sp(e,...n)}function Nn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ml(e),new Error(e)}function jn(t,e){t||Nn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg=new Map;function Pn(t){jn(t instanceof Function,"Expected a class definition");let e=Bg.get(t);return e?(jn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Bg.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lC(t,e){const n=fc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ru(s,e!=null?e:{}))return i;un(i,"already-initialized")}return n.initialize({options:e})}function uC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Pn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function cC(){return zg()==="http:"||zg()==="https:"}function zg(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fC(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cC()||Nw()||"connection"in navigator)?navigator.onLine:!0}function dC(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e,n){this.shortDelay=e,this.longDelay=n,jn(n>e,"Short delay should be less than long delay!"),this.isMobile=Rw()||Pw()}get(){return fC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(t,e){jn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Nn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Nn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Nn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pC=new Ra(3e4,6e4);function Na(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ds(t,e,n,r,i={}){return zw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Aa(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Bw.fetch()(Hw(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function zw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},hC),e);try{const i=new mC(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ul(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ul(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ul(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ul(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw aC(t,c,u);un(t,c)}}catch(i){if(i instanceof Dr)throw i;un(t,"network-request-failed")}}async function Pa(t,e,n,r,i={}){const s=await Ds(t,e,n,r,i);return"mfaPendingCredential"in s&&un(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Hw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?op(t.config,i):`${t.config.apiScheme}://${i}`}class mC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(_n(this.auth,"network-request-failed")),pC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ul(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=_n(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gC(t,e){return Ds(t,"POST","/v1/accounts:delete",e)}async function yC(t,e){return Ds(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vC(t,e=!1){const n=xt(t),r=await n.getIdToken(e),i=ap(r);ue(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:To(vf(i.auth_time)),issuedAtTime:To(vf(i.iat)),expirationTime:To(vf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function vf(t){return Number(t)*1e3}function ap(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ml("JWT malformed, contained fewer than 3 sections"),null;try{const i=Uk(n);return i?JSON.parse(i):(Ml("Failed to decode base64 JWT payload"),null)}catch(i){return Ml("Caught error parsing JWT payload as JSON",i),null}}function wC(t){const e=ap(t);return ue(e,"internal-error"),ue(typeof e.exp!="undefined","internal-error"),ue(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Dr&&_C(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function _C({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=To(this.lastLoginAt),this.creationTime=To(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function su(t){var e;const n=t.auth,r=await t.getIdToken(),i=await gs(t,yC(n,{idToken:r}));ue(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?kC(s.providerUserInfo):[],a=SC(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Ww(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function bC(t){const e=xt(t);await su(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function SC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function kC(t){return t.map(e=>{var{providerId:n}=e,r=ip(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TC(t,e){const n=await zw(t,{},async()=>{const r=Aa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Hw(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Bw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ue(e.idToken,"internal-error"),ue(typeof e.idToken!="undefined","internal-error"),ue(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):wC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ue(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await TC(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Jo;return r&&(ue(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ue(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ue(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Jo,this.toJSON())}_performRefresh(){return Nn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(t,e){ue(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class ei{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=ip(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new EC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ww(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await gs(this,this.stsTokenManager.getToken(this.auth,e));return ue(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return vC(this,e)}reload(){return bC(this)}_assign(e){this!==e&&(ue(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ei(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){ue(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await su(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await gs(this,gC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,p=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,h=(u=n.createdAt)!==null&&u!==void 0?u:void 0,m=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:v,emailVerified:w,isAnonymous:C,providerData:T,stsTokenManager:x}=n;ue(v&&x,e,"internal-error");const L=Jo.fromJSON(this.name,x);ue(typeof v=="string",e,"internal-error"),Yn(f,e.name),Yn(d,e.name),ue(typeof w=="boolean",e,"internal-error"),ue(typeof C=="boolean",e,"internal-error"),Yn(g,e.name),Yn(_,e.name),Yn(E,e.name),Yn(p,e.name),Yn(h,e.name),Yn(m,e.name);const S=new ei({uid:v,auth:e,email:d,emailVerified:w,displayName:f,isAnonymous:C,photoURL:_,phoneNumber:g,tenantId:E,stsTokenManager:L,createdAt:h,lastLoginAt:m});return T&&Array.isArray(T)&&(S.providerData=T.map(D=>Object.assign({},D))),p&&(S._redirectEventId=p),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new Jo;i.updateFromServerResponse(n);const s=new ei({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await su(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}qw.type="NONE";const Hg=qw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(t,e,n){return`firebase:${t}:${e}:${n}`}class ts{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ll(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ll("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ei._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ts(Pn(Hg),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Pn(Hg);const o=Ll(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const f=ei._fromJSON(e,c);u!==s&&(a=f),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ts(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ts(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Yw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Kw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Xw(e))return"Blackberry";if(Jw(e))return"Webos";if(lp(e))return"Safari";if((e.includes("chrome/")||Gw(e))&&!e.includes("edge/"))return"Chrome";if(Qw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Kw(t=tt()){return/firefox\//i.test(t)}function lp(t=tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Gw(t=tt()){return/crios\//i.test(t)}function Yw(t=tt()){return/iemobile/i.test(t)}function Qw(t=tt()){return/android/i.test(t)}function Xw(t=tt()){return/blackberry/i.test(t)}function Jw(t=tt()){return/webos/i.test(t)}function dc(t=tt()){return/iphone|ipad|ipod/i.test(t)}function CC(t=tt()){var e;return dc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function IC(){return Dw()&&document.documentMode===10}function Zw(t=tt()){return dc(t)||Qw(t)||Jw(t)||Xw(t)||/windows phone/i.test(t)||Yw(t)}function xC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e1(t,e=[]){let n;switch(t){case"Browser":n=Wg(tt());break;case"Worker":n=`${Wg(tt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ps}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qg(this),this.idTokenSubscription=new qg(this),this.beforeStateQueue=new OC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vw,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Pn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ts.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ue(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await su(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=dC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?xt(e):null;return n&&ue(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ue(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Pn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Oa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Pn(e)||this._popupRedirectResolver;ue(n,this,"argument-error"),this.redirectPersistenceManager=await ts.create(this,[Pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ue(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ue(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=e1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function hc(t){return xt(t)}class qg{constructor(e){this.auth=e,this.observer=null,this.addObserver=Yk(n=>this.observer=n)}get next(){return ue(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Nn("not implemented")}_getIdTokenResponse(e){return Nn("not implemented")}_linkToIdToken(e,n){return Nn("not implemented")}_getReauthenticationResolver(e){return Nn("not implemented")}}async function RC(t,e){return Ds(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NC(t,e){return Pa(t,"POST","/v1/accounts:signInWithPassword",Na(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PC(t,e){return Pa(t,"POST","/v1/accounts:signInWithEmailLink",Na(t,e))}async function DC(t,e){return Pa(t,"POST","/v1/accounts:signInWithEmailLink",Na(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo extends up{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Zo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Zo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return NC(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return PC(e,{email:this._email,oobCode:this._password});default:un(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return RC(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return DC(e,{idToken:n,email:this._email,oobCode:this._password});default:un(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ns(t,e){return Pa(t,"POST","/v1/accounts:signInWithIdp",Na(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MC="http://localhost";class li extends up{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new li(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):un("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=ip(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new li(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ns(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ns(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ns(e,n)}buildRequest(){const e={requestUri:MC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Aa(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function $C(t){const e=mo(go(t)).link,n=e?mo(go(e)).deep_link_id:null,r=mo(go(t)).deep_link_id;return(r?mo(go(r)).link:null)||r||n||e||t}class cp{constructor(e){var n,r,i,s,o,a;const l=mo(go(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,f=LC((i=l.mode)!==null&&i!==void 0?i:null);ue(u&&c&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=$C(e);try{return new cp(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(){this.providerId=Ms.PROVIDER_ID}static credential(e,n){return Zo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=cp.parseLink(n);return ue(r,"argument-error"),Zo._fromEmailAndCode(e,r.code,r.tenantId)}}Ms.PROVIDER_ID="password";Ms.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ms.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da extends t1{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends Da{constructor(){super("facebook.com")}static credential(e){return li._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Jn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends Da{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return li._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Zn.credential(n,r)}catch{return null}}}Zn.GOOGLE_SIGN_IN_METHOD="google.com";Zn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends Da{constructor(){super("github.com")}static credential(e){return li._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return er.credential(e.oauthAccessToken)}catch{return null}}}er.GITHUB_SIGN_IN_METHOD="github.com";er.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends Da{constructor(){super("twitter.com")}static credential(e,n){return li._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return tr.credential(n,r)}catch{return null}}}tr.TWITTER_SIGN_IN_METHOD="twitter.com";tr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FC(t,e){return Pa(t,"POST","/v1/accounts:signUp",Na(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ei._fromIdTokenResponse(e,r,i),o=Kg(r);return new ui({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Kg(r);return new ui({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Kg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou extends Dr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ou.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ou(e,n,r,i)}}function n1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ou._fromErrorAndOperation(t,s,e,r):s})}async function UC(t,e,n=!1){const r=await gs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ui._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jC(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await gs(t,n1(r,i,e,t),n);ue(s.idToken,r,"internal-error");const o=ap(s.idToken);ue(o,r,"internal-error");const{sub:a}=o;return ue(t.uid===a,r,"user-mismatch"),ui._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&un(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r1(t,e,n=!1){const r="signIn",i=await n1(t,r,e),s=await ui._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function VC(t,e){return r1(hc(t),e)}async function BC(t,e,n){const r=hc(t),i=await FC(r,{returnSecureToken:!0,email:e,password:n}),s=await ui._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function zC(t,e,n){return VC(xt(t),Ms.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HC(t,e){return Ds(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WC(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=xt(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await gs(r,HC(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}const au="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(au,"1"),this.storage.removeItem(au),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qC(){const t=tt();return lp(t)||dc(t)}const KC=1e3,GC=10;class s1 extends i1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=qC()&&xC(),this.fallbackToPolling=Zw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);IC()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,GC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},KC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}s1.type="LOCAL";const YC=s1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1 extends i1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}o1.type="SESSION";const a1=o1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QC(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new pc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await QC(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=fp("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const d=f;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(){return window}function JC(t){En().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l1(){return typeof En().WorkerGlobalScope!="undefined"&&typeof En().importScripts=="function"}async function ZC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function eI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function tI(){return l1()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1="firebaseLocalStorageDb",nI=1,lu="firebaseLocalStorage",c1="fbase_key";class Ma{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function mc(t,e){return t.transaction([lu],e?"readwrite":"readonly").objectStore(lu)}function rI(){const t=indexedDB.deleteDatabase(u1);return new Ma(t).toPromise()}function yd(){const t=indexedDB.open(u1,nI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(lu,{keyPath:c1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(lu)?e(r):(r.close(),await rI(),e(await yd()))})})}async function Gg(t,e,n){const r=mc(t,!0).put({[c1]:e,value:n});return new Ma(r).toPromise()}async function iI(t,e){const n=mc(t,!1).get(e),r=await new Ma(n).toPromise();return r===void 0?null:r.value}function Yg(t,e){const n=mc(t,!0).delete(e);return new Ma(n).toPromise()}const sI=800,oI=3;class f1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>oI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return l1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pc._getInstance(tI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ZC(),!this.activeServiceWorker)return;this.sender=new XC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||eI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yd();return await Gg(e,au,"1"),await Yg(e,au),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Gg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>iI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Yg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=mc(i,!1).getAll();return new Ma(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),sI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}f1.type="LOCAL";const aI=f1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function uI(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=_n("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",lI().appendChild(r)})}function cI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ra(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fI(t,e){return e?Pn(e):(ue(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp extends up{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ns(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ns(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ns(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function dI(t){return r1(t.auth,new dp(t),t.bypassAuthState)}function hI(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),jC(n,new dp(t),t.bypassAuthState)}async function pI(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),UC(n,new dp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dI;case"linkViaPopup":case"linkViaRedirect":return pI;case"reauthViaPopup":case"reauthViaRedirect":return hI;default:un(this.auth,"internal-error")}}resolve(e){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI=new Ra(2e3,1e4);class Ui extends d1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ui.currentPopupAction&&Ui.currentPopupAction.cancel(),Ui.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ue(e,this.auth,"internal-error"),e}async onExecution(){jn(this.filter.length===1,"Popup operations only handle one event");const e=fp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(_n(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(_n(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ui.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_n(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,mI.get())};e()}}Ui.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI="pendingRedirect",$l=new Map;class yI extends d1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=$l.get(this.auth._key());if(!e){try{const r=await vI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}$l.set(this.auth._key(),e)}return this.bypassAuthState||$l.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vI(t,e){const n=EI(e),r=_I(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function wI(t,e){$l.set(t._key(),e)}function _I(t){return Pn(t._redirectPersistence)}function EI(t){return Ll(gI,t.config.apiKey,t.name)}async function bI(t,e,n=!1){const r=hc(t),i=fI(r,e),o=await new yI(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI=10*60*1e3;class kI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!TI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!h1(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(_n(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=SI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qg(e))}saveEventToCache(e){this.cachedEventUids.add(Qg(e)),this.lastProcessedEventTime=Date.now()}}function Qg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function h1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function TI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return h1(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CI(t,e={}){return Ds(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xI=/^https?/;async function OI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await CI(t);for(const n of e)try{if(AI(n))return}catch{}un(t,"unauthorized-domain")}function AI(t){const e=gd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!xI.test(n))return!1;if(II.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RI=new Ra(3e4,6e4);function Xg(){const t=En().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function NI(t){return new Promise((e,n)=>{var r,i,s;function o(){Xg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xg(),n(_n(t,"network-request-failed"))},timeout:RI.get()})}if(!((i=(r=En().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=En().gapi)===null||s===void 0)&&s.load)o();else{const a=cI("iframefcb");return En()[a]=()=>{gapi.load?o():n(_n(t,"network-request-failed"))},uI(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Fl=null,e})}let Fl=null;function PI(t){return Fl=Fl||NI(t),Fl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI=new Ra(5e3,15e3),MI="__/auth/iframe",LI="emulator/auth/iframe",$I={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},FI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function UI(t){const e=t.config;ue(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?op(e,LI):`https://${t.config.authDomain}/${MI}`,r={apiKey:e.apiKey,appName:t.name,v:Ps},i=FI.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Aa(r).slice(1)}`}async function jI(t){const e=await PI(t),n=En().gapi;return ue(n,t,"internal-error"),e.open({where:document.body,url:UI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$I,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=_n(t,"network-request-failed"),a=En().setTimeout(()=>{s(o)},DI.get());function l(){En().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},BI=500,zI=600,HI="_blank",WI="http://localhost";class Jg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qI(t,e,n,r=BI,i=zI){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},VI),{width:r.toString(),height:i.toString(),top:s,left:o}),u=tt().toLowerCase();n&&(a=Gw(u)?HI:n),Kw(u)&&(e=e||WI,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[g,_])=>`${d}${g}=${_},`,"");if(CC(u)&&a!=="_self")return KI(e||"",a),new Jg(null);const f=window.open(e||"",a,c);ue(f,t,"popup-blocked");try{f.focus()}catch{}return new Jg(f)}function KI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI="__/auth/handler",YI="emulator/auth/handler";function Zg(t,e,n,r,i,s){ue(t.config.authDomain,t,"auth-domain-config-required"),ue(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ps,eventId:i};if(e instanceof t1){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Gk(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof Da){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${QI(t)}?${Aa(a).slice(1)}`}function QI({config:t}){return t.emulator?op(t,YI):`https://${t.authDomain}/${GI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf="webStorageSupport";class XI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=a1,this._completeRedirectFn=bI,this._overrideRedirectResult=wI}async _openPopup(e,n,r,i){var s;jn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Zg(e,n,r,gd(),i);return qI(e,o,fp())}async _openRedirect(e,n,r,i){return await this._originValidation(e),JC(Zg(e,n,r,gd(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(jn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await jI(e),r=new kI(e);return n.register("authEvent",i=>(ue(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(wf,{type:wf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[wf];o!==void 0&&n(!!o),un(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=OI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Zw()||lp()||dc()}}const JI=XI;var ey="@firebase/auth",ty="0.20.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ue(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ex(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function tx(t){oi(new br("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{ue(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),ue(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:e1(t)},c=new AC(a,l,u);return uC(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),oi(new br("auth-internal",e=>{const n=hc(e.getProvider("auth").getImmediate());return(r=>new ZI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),wn(ey,ty,ex(t)),wn(ey,ty,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nx(t=rp()){const e=fc(t,"auth");return e.isInitialized()?e.getImmediate():lC(t,{popupRedirectResolver:JI,persistence:[aI,YC,a1]})}tx("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p1="firebasestorage.googleapis.com",m1="storageBucket",rx=2*60*1e3,ix=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be extends Dr{constructor(e,n){super(_f(e),`Firebase Storage: ${n} (${_f(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Be.prototype)}_codeEquals(e){return _f(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function _f(t){return"storage/"+t}function hp(){const t="An unknown error occurred, please check the error payload for server response.";return new Be("unknown",t)}function sx(t){return new Be("object-not-found","Object '"+t+"' does not exist.")}function ox(t){return new Be("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function ax(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Be("unauthenticated",t)}function lx(){return new Be("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function ux(t){return new Be("unauthorized","User does not have permission to access '"+t+"'.")}function cx(){return new Be("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function fx(){return new Be("canceled","User canceled the upload/download.")}function dx(t){return new Be("invalid-url","Invalid URL '"+t+"'.")}function hx(t){return new Be("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function px(){return new Be("no-default-bucket","No default bucket found. Did you set the '"+m1+"' property when initializing the app?")}function mx(){return new Be("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function gx(){return new Be("no-download-url","The given file does not have any download URLs.")}function vd(t){return new Be("invalid-argument",t)}function g1(){return new Be("app-deleted","The Firebase app was deleted.")}function yx(t){return new Be("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Co(t,e){return new Be("invalid-format","String does not match format '"+t+"': "+e)}function Zs(t){throw new Be("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Ut.makeFromUrl(e,n)}catch{return new Ut(e,"")}if(r.path==="")return r;throw hx(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(w){w.path_=decodeURIComponent(w.path)}const c="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",g=new RegExp(`^https?://${f}/${c}/b/${i}/o${d}`,"i"),_={bucket:1,path:3},E=n===p1?"(?:storage.googleapis.com|storage.cloud.google.com)":n,p="([^?#]*)",h=new RegExp(`^https?://${E}/${i}/${p}`,"i"),v=[{regex:a,indices:l,postModify:s},{regex:g,indices:_,postModify:u},{regex:h,indices:{bucket:1,path:2},postModify:u}];for(let w=0;w<v.length;w++){const C=v[w],T=C.regex.exec(e);if(T){const x=T[C.indices.bucket];let L=T[C.indices.path];L||(L=""),r=new Ut(x,L),C.postModify(r);break}}if(r==null)throw dx(e);return r}}class vx{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wx(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...p){u||(u=!0,e.apply(null,p))}function f(p){i=setTimeout(()=>{i=null,t(g,l())},p)}function d(){s&&clearTimeout(s)}function g(p,...h){if(u){d();return}if(p){d(),c.call(null,p,...h);return}if(l()||o){d(),c.call(null,p,...h);return}r<64&&(r*=2);let v;a===1?(a=2,v=0):v=(r+Math.random())*1e3,f(v)}let _=!1;function E(p){_||(_=!0,d(),!u&&(i!==null?(p||(a=2),clearTimeout(i),f(0)):p||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,E(!0)},n),E}function _x(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ex(t){return t!==void 0}function bx(t){return typeof t=="object"&&!Array.isArray(t)}function pp(t){return typeof t=="string"||t instanceof String}function ny(t){return mp()&&t instanceof Blob}function mp(){return typeof Blob!="undefined"}function ry(t,e,n,r){if(r<e)throw vd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw vd(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gp(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function y1(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ti;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ti||(ti={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sx{constructor(e,n,r,i,s,o,a,l,u,c,f){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,g)=>{this.resolve_=d,this.reject_=g,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new cl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===ti.NO_ERROR,l=s.getStatus();if(!a||this.isRetryStatusCode_(l)){const c=s.getErrorCode()===ti.ABORT;r(!1,new cl(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new cl(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());Ex(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=hp();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?g1():fx();o(l)}else{const l=cx();o(l)}};this.canceled_?n(!1,new cl(!1,null,!0)):this.backoffId_=wx(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&_x(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=this.additionalRetryCodes_.indexOf(e)!==-1;return n||i||s}}class cl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function kx(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Tx(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function Cx(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Ix(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function xx(t,e,n,r,i,s){const o=y1(t.urlParams),a=t.url+o,l=Object.assign({},t.headers);return Cx(l,e),kx(l,n),Tx(l,s),Ix(l,r),new Sx(a,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ox(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function Ax(...t){const e=Ox();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(mp())return new Blob(t);throw new Be("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function Rx(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nx(t){return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ef{constructor(e,n){this.data=e,this.contentType=n||null}}function Px(t,e){switch(t){case hn.RAW:return new Ef(v1(e));case hn.BASE64:case hn.BASE64URL:return new Ef(w1(t,e));case hn.DATA_URL:return new Ef(Mx(e),Lx(e))}throw hp()}function v1(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function Dx(t){let e;try{e=decodeURIComponent(t)}catch{throw Co(hn.DATA_URL,"Malformed data URL.")}return v1(e)}function w1(t,e){switch(t){case hn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Co(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case hn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Co(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Nx(e)}catch{throw Co(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class _1{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Co(hn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=$x(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function Mx(t){const e=new _1(t);return e.base64?w1(hn.BASE64,e.rest):Dx(e.rest)}function Lx(t){return new _1(t).contentType}function $x(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,n){let r=0,i="";ny(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(ny(this.data_)){const r=this.data_,i=Rx(r,e,n);return i===null?null:new nr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new nr(r,!0)}}static getBlob(...e){if(mp()){const n=e.map(r=>r instanceof nr?r.data_:r);return new nr(Ax.apply(null,n))}else{const n=e.map(o=>pp(o)?Px(hn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new nr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E1(t){let e;try{e=JSON.parse(t)}catch{return null}return bx(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fx(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Ux(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function b1(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jx(t,e){return e}class bt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||jx}}let fl=null;function Vx(t){return!pp(t)||t.length<2?t:b1(t)}function S1(){if(fl)return fl;const t=[];t.push(new bt("bucket")),t.push(new bt("generation")),t.push(new bt("metageneration")),t.push(new bt("name","fullPath",!0));function e(s,o){return Vx(o)}const n=new bt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new bt("size");return i.xform=r,t.push(i),t.push(new bt("timeCreated")),t.push(new bt("updated")),t.push(new bt("md5Hash",null,!0)),t.push(new bt("cacheControl",null,!0)),t.push(new bt("contentDisposition",null,!0)),t.push(new bt("contentEncoding",null,!0)),t.push(new bt("contentLanguage",null,!0)),t.push(new bt("contentType",null,!0)),t.push(new bt("metadata","customMetadata",!0)),fl=t,fl}function Bx(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Ut(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function zx(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return Bx(r,t),r}function k1(t,e,n){const r=E1(e);return r===null?null:zx(t,r,n)}function Hx(t,e,n,r){const i=E1(e);if(i===null||!pp(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,f=t.fullPath,d="/b/"+o(c)+"/o/"+o(f),g=gp(d,n,r),_=y1({alt:"media",token:u});return g+_})[0]}function Wx(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class T1{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C1(t){if(!t)throw hp()}function qx(t,e){function n(r,i){const s=k1(t,i,e);return C1(s!==null),s}return n}function Kx(t,e){function n(r,i){const s=k1(t,i,e);return C1(s!==null),Hx(s,i,t.host,t._protocol)}return n}function I1(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=lx():i=ax():n.getStatus()===402?i=ox(t.bucket):n.getStatus()===403?i=ux(t.path):i=r,i.serverResponse=r.serverResponse,i}return e}function Gx(t){const e=I1(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=sx(t.path)),s.serverResponse=i.serverResponse,s}return n}function Yx(t,e,n){const r=e.fullServerUrl(),i=gp(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new T1(i,s,Kx(t,n),o);return a.errorHandler=Gx(e),a}function Qx(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Xx(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=Qx(null,e)),r}function Jx(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let v="";for(let w=0;w<2;w++)v=v+Math.random().toString().slice(2);return v}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=Xx(e,r,i),c=Wx(u,n),f="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+l+"--",g=nr.getBlob(f,r,d);if(g===null)throw mx();const _={name:u.fullPath},E=gp(s,t.host,t._protocol),p="POST",h=t.maxUploadRetryTime,m=new T1(E,p,qx(t,n),h);return m.urlParams=_,m.headers=o,m.body=g.uploadData(),m.errorHandler=I1(e),m}class Zx{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ti.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ti.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ti.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Zs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Zs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Zs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Zs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Zs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class eO extends Zx{initXhr(){this.xhr_.responseType="text"}}function x1(){return new eO}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,n){this._service=e,n instanceof Ut?this._location=n:this._location=Ut.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ci(e,n)}get root(){const e=new Ut(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return b1(this._location.path)}get storage(){return this._service}get parent(){const e=Fx(this._location.path);if(e===null)return null;const n=new Ut(this._location.bucket,e);return new ci(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw yx(e)}}function tO(t,e,n){t._throwIfRoot("uploadBytes");const r=Jx(t.storage,t._location,S1(),new nr(e,!0),n);return t.storage.makeRequestWithTokens(r,x1).then(i=>({metadata:i,ref:t}))}function nO(t){t._throwIfRoot("getDownloadURL");const e=Yx(t.storage,t._location,S1());return t.storage.makeRequestWithTokens(e,x1).then(n=>{if(n===null)throw gx();return n})}function rO(t,e){const n=Ux(t._location.path,e),r=new Ut(t._location.bucket,n);return new ci(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iO(t){return/^[A-Za-z]+:\/\//.test(t)}function sO(t,e){return new ci(t,e)}function O1(t,e){if(t instanceof yp){const n=t;if(n._bucket==null)throw px();const r=new ci(n,n._bucket);return e!=null?O1(r,e):r}else return e!==void 0?rO(t,e):t}function oO(t,e){if(e&&iO(e)){if(t instanceof yp)return sO(t,e);throw vd("To use ref(service, url), the first argument must be a Storage instance.")}else return O1(t,e)}function iy(t,e){const n=e==null?void 0:e[m1];return n==null?null:Ut.makeFromBucketSpec(n,t)}class yp{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=p1,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=rx,this._maxUploadRetryTime=ix,this._requests=new Set,i!=null?this._bucket=Ut.makeFromBucketSpec(i,this._host):this._bucket=iy(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ut.makeFromBucketSpec(this._url,e):this._bucket=iy(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ry("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ry("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ci(this,e)}_makeRequest(e,n,r,i){if(this._deleted)return new vx(g1());{const s=xx(e,this._appId,r,i,n,this._firebaseVersion);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const sy="@firebase/storage",oy="0.9.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A1="storage";function aO(t,e,n){return t=xt(t),tO(t,e,n)}function lO(t){return t=xt(t),nO(t)}function R1(t,e){return t=xt(t),oO(t,e)}function uO(t=rp(),e){return t=xt(t),fc(t,A1).getImmediate({identifier:e})}function cO(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new yp(n,r,i,e,Ps)}function fO(){oi(new br(A1,cO,"PUBLIC").setMultipleInstances(!0)),wn(sy,oy,""),wn(sy,oy,"esm2017")}fO();var dO=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},K,vp=vp||{},ce=dO||self;function uu(){}function wd(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function La(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function hO(t){return Object.prototype.hasOwnProperty.call(t,bf)&&t[bf]||(t[bf]=++pO)}var bf="closure_uid_"+(1e9*Math.random()>>>0),pO=0;function mO(t,e,n){return t.call.apply(t.bind,arguments)}function gO(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function lt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?lt=mO:lt=gO,lt.apply(null,arguments)}function dl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function dt(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Mr(){this.s=this.s,this.o=this.o}var yO=0,vO={};Mr.prototype.s=!1;Mr.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),yO!=0)){var t=hO(this);delete vO[t]}};Mr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const N1=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},P1=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function wO(t){e:{var e=cA;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function ay(t){return Array.prototype.concat.apply([],arguments)}function wp(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function cu(t){return/^[\s\xa0]*$/.test(t)}var ly=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function kt(t,e){return t.indexOf(e)!=-1}function Sf(t,e){return t<e?-1:t>e?1:0}var Tt;e:{var uy=ce.navigator;if(uy){var cy=uy.userAgent;if(cy){Tt=cy;break e}}Tt=""}function _p(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function D1(t){const e={};for(const n in t)e[n]=t[n];return e}var fy="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M1(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<fy.length;s++)n=fy[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ep(t){return Ep[" "](t),t}Ep[" "]=uu;function _O(t){var e=SO;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var EO=kt(Tt,"Opera"),ys=kt(Tt,"Trident")||kt(Tt,"MSIE"),L1=kt(Tt,"Edge"),_d=L1||ys,$1=kt(Tt,"Gecko")&&!(kt(Tt.toLowerCase(),"webkit")&&!kt(Tt,"Edge"))&&!(kt(Tt,"Trident")||kt(Tt,"MSIE"))&&!kt(Tt,"Edge"),bO=kt(Tt.toLowerCase(),"webkit")&&!kt(Tt,"Edge");function F1(){var t=ce.document;return t?t.documentMode:void 0}var fu;e:{var kf="",Tf=function(){var t=Tt;if($1)return/rv:([^\);]+)(\)|;)/.exec(t);if(L1)return/Edge\/([\d\.]+)/.exec(t);if(ys)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(bO)return/WebKit\/(\S+)/.exec(t);if(EO)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Tf&&(kf=Tf?Tf[1]:""),ys){var Cf=F1();if(Cf!=null&&Cf>parseFloat(kf)){fu=String(Cf);break e}}fu=kf}var SO={};function kO(){return _O(function(){let t=0;const e=ly(String(fu)).split("."),n=ly("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Sf(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Sf(i[2].length==0,s[2].length==0)||Sf(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Ed;if(ce.document&&ys){var dy=F1();Ed=dy||parseInt(fu,10)||void 0}else Ed=void 0;var TO=Ed,CO=function(){if(!ce.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ce.addEventListener("test",uu,e),ce.removeEventListener("test",uu,e)}catch{}return t}();function vt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}vt.prototype.h=function(){this.defaultPrevented=!0};function ea(t,e){if(vt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if($1){e:{try{Ep(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:IO[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ea.Z.h.call(this)}}dt(ea,vt);var IO={2:"touch",3:"pen",4:"mouse"};ea.prototype.h=function(){ea.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var $a="closure_listenable_"+(1e6*Math.random()|0),xO=0;function OO(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++xO,this.ca=this.fa=!1}function gc(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function yc(t){this.src=t,this.g={},this.h=0}yc.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Sd(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new OO(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function bd(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=N1(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(gc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Sd(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var bp="closure_lm_"+(1e6*Math.random()|0),If={};function U1(t,e,n,r,i){if(r&&r.once)return V1(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)U1(t,e[s],n,r,i);return null}return n=Tp(n),t&&t[$a]?t.N(e,n,La(r)?!!r.capture:!!r,i):j1(t,e,n,!1,r,i)}function j1(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=La(i)?!!i.capture:!!i,a=kp(t);if(a||(t[bp]=a=new yc(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=AO(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)CO||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(z1(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function AO(){function t(n){return e.call(t.src,t.listener,n)}var e=RO;return t}function V1(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)V1(t,e[s],n,r,i);return null}return n=Tp(n),t&&t[$a]?t.O(e,n,La(r)?!!r.capture:!!r,i):j1(t,e,n,!0,r,i)}function B1(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)B1(t,e[s],n,r,i);else r=La(r)?!!r.capture:!!r,n=Tp(n),t&&t[$a]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Sd(s,n,r,i),-1<n&&(gc(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=kp(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Sd(e,n,r,i)),(n=-1<t?e[t]:null)&&Sp(n))}function Sp(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[$a])bd(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(z1(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=kp(e))?(bd(n,t),n.h==0&&(n.src=null,e[bp]=null)):gc(t)}}}function z1(t){return t in If?If[t]:If[t]="on"+t}function RO(t,e){if(t.ca)t=!0;else{e=new ea(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Sp(t),t=n.call(r,e)}return t}function kp(t){return t=t[bp],t instanceof yc?t:null}var xf="__closure_events_fn_"+(1e9*Math.random()>>>0);function Tp(t){return typeof t=="function"?t:(t[xf]||(t[xf]=function(e){return t.handleEvent(e)}),t[xf])}function nt(){Mr.call(this),this.i=new yc(this),this.P=this,this.I=null}dt(nt,Mr);nt.prototype[$a]=!0;nt.prototype.removeEventListener=function(t,e,n,r){B1(this,t,e,n,r)};function ut(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new vt(e,t);else if(e instanceof vt)e.target=e.target||t;else{var i=e;e=new vt(r,t),M1(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=hl(o,r,!0,e)&&i}if(o=e.g=t,i=hl(o,r,!0,e)&&i,i=hl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=hl(o,r,!1,e)&&i}nt.prototype.M=function(){if(nt.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)gc(n[r]);delete t.g[e],t.h--}}this.I=null};nt.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};nt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function hl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&bd(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Cp=ce.JSON.stringify;function NO(){var t=W1;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class PO{constructor(){this.h=this.g=null}add(e,n){const r=H1.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var H1=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new DO,t=>t.reset());class DO{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function MO(t){ce.setTimeout(()=>{throw t},0)}function Ip(t,e){kd||LO(),Td||(kd(),Td=!0),W1.add(t,e)}var kd;function LO(){var t=ce.Promise.resolve(void 0);kd=function(){t.then($O)}}var Td=!1,W1=new PO;function $O(){for(var t;t=NO();){try{t.h.call(t.g)}catch(n){MO(n)}var e=H1;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Td=!1}function vc(t,e){nt.call(this),this.h=t||1,this.g=e||ce,this.j=lt(this.kb,this),this.l=Date.now()}dt(vc,nt);K=vc.prototype;K.da=!1;K.S=null;K.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),ut(this,"tick"),this.da&&(xp(this),this.start()))}};K.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function xp(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}K.M=function(){vc.Z.M.call(this),xp(this),delete this.g};function Op(t,e,n){if(typeof t=="function")n&&(t=lt(t,n));else if(t&&typeof t.handleEvent=="function")t=lt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ce.setTimeout(t,e||0)}function q1(t){t.g=Op(()=>{t.g=null,t.i&&(t.i=!1,q1(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class FO extends Mr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:q1(this)}M(){super.M(),this.g&&(ce.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ta(t){Mr.call(this),this.h=t,this.g={}}dt(ta,Mr);var hy=[];function K1(t,e,n,r){Array.isArray(n)||(n&&(hy[0]=n.toString()),n=hy);for(var i=0;i<n.length;i++){var s=U1(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function G1(t){_p(t.g,function(e,n){this.g.hasOwnProperty(n)&&Sp(e)},t),t.g={}}ta.prototype.M=function(){ta.Z.M.call(this),G1(this)};ta.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function wc(){this.g=!0}wc.prototype.Aa=function(){this.g=!1};function UO(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var f=c.split("_");o=2<=f.length&&f[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function jO(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function ji(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+BO(t,n)+(r?" "+r:"")})}function VO(t,e){t.info(function(){return"TIMEOUT: "+e})}wc.prototype.info=function(){};function BO(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Cp(n)}catch{return e}}var Si={},py=null;function _c(){return py=py||new nt}Si.Ma="serverreachability";function Y1(t){vt.call(this,Si.Ma,t)}dt(Y1,vt);function na(t){const e=_c();ut(e,new Y1(e,t))}Si.STAT_EVENT="statevent";function Q1(t,e){vt.call(this,Si.STAT_EVENT,t),this.stat=e}dt(Q1,vt);function Ct(t){const e=_c();ut(e,new Q1(e,t))}Si.Na="timingevent";function X1(t,e){vt.call(this,Si.Na,t),this.size=e}dt(X1,vt);function Fa(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ce.setTimeout(function(){t()},e)}var Ec={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},J1={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Ap(){}Ap.prototype.h=null;function my(t){return t.h||(t.h=t.i())}function Z1(){}var Ua={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Rp(){vt.call(this,"d")}dt(Rp,vt);function Np(){vt.call(this,"c")}dt(Np,vt);var Cd;function bc(){}dt(bc,Ap);bc.prototype.g=function(){return new XMLHttpRequest};bc.prototype.i=function(){return{}};Cd=new bc;function ja(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new ta(this),this.P=zO,t=_d?125:void 0,this.W=new vc(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new e_}function e_(){this.i=null,this.g="",this.h=!1}var zO=45e3,Id={},du={};K=ja.prototype;K.setTimeout=function(t){this.P=t};function xd(t,e,n){t.K=1,t.v=kc(Vn(e)),t.s=n,t.U=!0,t_(t,null)}function t_(t,e){t.F=Date.now(),Va(t),t.A=Vn(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),l_(n.h,"t",r),t.C=0,n=t.l.H,t.h=new e_,t.g=x_(t.l,n?e:null,!t.s),0<t.O&&(t.L=new FO(lt(t.Ia,t,t.g),t.O)),K1(t.V,t.g,"readystatechange",t.gb),e=t.H?D1(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),na(1),UO(t.j,t.u,t.A,t.m,t.X,t.s)}K.gb=function(t){t=t.target;const e=this.L;e&&Dn(t)==3?e.l():this.Ia(t)};K.Ia=function(t){try{if(t==this.g)e:{const c=Dn(this.g);var e=this.g.Da();const f=this.g.ba();if(!(3>c)&&(c!=3||_d||this.g&&(this.h.h||this.g.ga()||wy(this.g)))){this.I||c!=4||e==7||(e==8||0>=f?na(3):na(2)),Sc(this);var n=this.g.ba();this.N=n;t:if(n_(this)){var r=wy(this.g);t="";var i=r.length,s=Dn(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Wr(this),Io(this);var o="";break t}this.h.i=new ce.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,jO(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!cu(a)){var u=a;break t}}u=null}if(n=u)ji(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Od(this,n);else{this.i=!1,this.o=3,Ct(12),Wr(this),Io(this);break e}}this.U?(r_(this,c,o),_d&&this.i&&c==3&&(K1(this.V,this.W,"tick",this.fb),this.W.start())):(ji(this.j,this.m,o,null),Od(this,o)),c==4&&Wr(this),this.i&&!this.I&&(c==4?k_(this.l,this):(this.i=!1,Va(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ct(12)):(this.o=0,Ct(13)),Wr(this),Io(this)}}}catch{}finally{}};function n_(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function r_(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=HO(t,n),i==du){e==4&&(t.o=4,Ct(14),r=!1),ji(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Id){t.o=4,Ct(15),ji(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else ji(t.j,t.m,i,null),Od(t,i);n_(t)&&i!=du&&i!=Id&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ct(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Vp(e),e.L=!0,Ct(11))):(ji(t.j,t.m,n,"[Invalid Chunked Response]"),Wr(t),Io(t))}K.fb=function(){if(this.g){var t=Dn(this.g),e=this.g.ga();this.C<e.length&&(Sc(this),r_(this,t,e),this.i&&t!=4&&Va(this))}};function HO(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?du:(n=Number(e.substring(n,r)),isNaN(n)?Id:(r+=1,r+n>e.length?du:(e=e.substr(r,n),t.C=r+n,e)))}K.cancel=function(){this.I=!0,Wr(this)};function Va(t){t.Y=Date.now()+t.P,i_(t,t.P)}function i_(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Fa(lt(t.eb,t),e)}function Sc(t){t.B&&(ce.clearTimeout(t.B),t.B=null)}K.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(VO(this.j,this.A),this.K!=2&&(na(3),Ct(17)),Wr(this),this.o=2,Io(this)):i_(this,this.Y-t)};function Io(t){t.l.G==0||t.I||k_(t.l,t)}function Wr(t){Sc(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,xp(t.W),G1(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Od(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Ad(n.i,t))){if(n.I=t.N,!t.J&&Ad(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)gu(n),Ic(n);else break e;jp(n),Ct(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=Fa(lt(n.ab,n),6e3));if(1>=f_(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else qr(n,11)}else if((t.J||n.g==t)&&gu(n),!cu(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const c=u[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const f=u[4];f!=null&&(n.za=f,n.h.info("SVER="+n.za));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const _=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var s=r.i;!s.g&&(kt(_,"spdy")||kt(_,"quic")||kt(_,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(Mp(s,s.h),s.h=null))}if(r.D){const E=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(r.sa=E,Ne(r.F,r.D,E))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=I_(r,r.H?r.la:null,r.W),o.J){d_(r.i,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(Sc(a),Va(a)),r.g=o}else b_(r);0<n.l.length&&xc(n)}else u[0]!="stop"&&u[0]!="close"||qr(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?qr(n,7):Up(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}na(4)}catch{}}function WO(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(wd(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Pp(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(wd(t)||typeof t=="string")P1(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(wd(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=WO(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function Ls(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Ls)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}K=Ls.prototype;K.R=function(){Dp(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};K.T=function(){return Dp(this),this.g.concat()};function Dp(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];fi(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],fi(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}K.get=function(t,e){return fi(this.h,t)?this.h[t]:e};K.set=function(t,e){fi(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};K.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function fi(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var s_=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function qO(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function di(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof di){this.g=e!==void 0?e:t.g,hu(this,t.j),this.s=t.s,pu(this,t.i),mu(this,t.m),this.l=t.l,e=t.h;var n=new ra;n.i=e.i,e.g&&(n.g=new Ls(e.g),n.h=e.h),gy(this,n),this.o=t.o}else t&&(n=String(t).match(s_))?(this.g=!!e,hu(this,n[1]||"",!0),this.s=xo(n[2]||""),pu(this,n[3]||"",!0),mu(this,n[4]),this.l=xo(n[5]||"",!0),gy(this,n[6]||"",!0),this.o=xo(n[7]||"")):(this.g=!!e,this.h=new ra(null,this.g))}di.prototype.toString=function(){var t=[],e=this.j;e&&t.push(yo(e,yy,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(yo(e,yy,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(yo(n,n.charAt(0)=="/"?XO:QO,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",yo(n,ZO)),t.join("")};function Vn(t){return new di(t)}function hu(t,e,n){t.j=n?xo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function pu(t,e,n){t.i=n?xo(e,!0):e}function mu(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function gy(t,e,n){e instanceof ra?(t.h=e,eA(t.h,t.g)):(n||(e=yo(e,JO)),t.h=new ra(e,t.g))}function Ne(t,e,n){t.h.set(e,n)}function kc(t){return Ne(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function KO(t){return t instanceof di?Vn(t):new di(t,void 0)}function GO(t,e,n,r){var i=new di(null,void 0);return t&&hu(i,t),e&&pu(i,e),n&&mu(i,n),r&&(i.l=r),i}function xo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function yo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,YO),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function YO(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var yy=/[#\/\?@]/g,QO=/[#\?:]/g,XO=/[#\?]/g,JO=/[#\?@]/g,ZO=/#/g;function ra(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Lr(t){t.g||(t.g=new Ls,t.h=0,t.i&&qO(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}K=ra.prototype;K.add=function(t,e){Lr(this),this.i=null,t=$s(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function o_(t,e){Lr(t),e=$s(t,e),fi(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,fi(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Dp(t)))}function a_(t,e){return Lr(t),e=$s(t,e),fi(t.g.h,e)}K.forEach=function(t,e){Lr(this),this.g.forEach(function(n,r){P1(n,function(i){t.call(e,i,r,this)},this)},this)};K.T=function(){Lr(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};K.R=function(t){Lr(this);var e=[];if(typeof t=="string")a_(this,t)&&(e=ay(e,this.g.get($s(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=ay(e,t[n])}return e};K.set=function(t,e){return Lr(this),this.i=null,t=$s(this,t),a_(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};K.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function l_(t,e,n){o_(t,e),0<n.length&&(t.i=null,t.g.set($s(t,e),wp(n)),t.h+=n.length)}K.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function $s(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function eA(t,e){e&&!t.j&&(Lr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(o_(this,r),l_(this,i,n))},t)),t.j=e}var tA=class{constructor(t,e){this.h=t,this.g=e}};function u_(t){this.l=t||nA,ce.PerformanceNavigationTiming?(t=ce.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ce.g&&ce.g.Ea&&ce.g.Ea()&&ce.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var nA=10;function c_(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function f_(t){return t.h?1:t.g?t.g.size:0}function Ad(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Mp(t,e){t.g?t.g.add(e):t.h=e}function d_(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}u_.prototype.cancel=function(){if(this.i=h_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function h_(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return wp(t.i)}function Lp(){}Lp.prototype.stringify=function(t){return ce.JSON.stringify(t,void 0)};Lp.prototype.parse=function(t){return ce.JSON.parse(t,void 0)};function rA(){this.g=new Lp}function iA(t,e,n){const r=n||"";try{Pp(t,function(i,s){let o=i;La(i)&&(o=Cp(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function sA(t,e){const n=new wc;if(ce.Image){const r=new Image;r.onload=dl(pl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=dl(pl,n,r,"TestLoadImage: error",!1,e),r.onabort=dl(pl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=dl(pl,n,r,"TestLoadImage: timeout",!1,e),ce.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function pl(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Ba(t){this.l=t.$b||null,this.j=t.ib||!1}dt(Ba,Ap);Ba.prototype.g=function(){return new Tc(this.l,this.j)};Ba.prototype.i=function(t){return function(){return t}}({});function Tc(t,e){nt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=$p,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}dt(Tc,nt);var $p=0;K=Tc.prototype;K.open=function(t,e){if(this.readyState!=$p)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ia(this)};K.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||ce).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};K.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,za(this)),this.readyState=$p};K.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ia(this)),this.g&&(this.readyState=3,ia(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof ce.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;p_(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function p_(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}K.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?za(this):ia(this),this.readyState==3&&p_(this)}};K.Ua=function(t){this.g&&(this.response=this.responseText=t,za(this))};K.Ta=function(t){this.g&&(this.response=t,za(this))};K.ha=function(){this.g&&za(this)};function za(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ia(t)}K.setRequestHeader=function(t,e){this.v.append(t,e)};K.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};K.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ia(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Tc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var oA=ce.JSON.parse;function qe(t){nt.call(this),this.headers=new Ls,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=m_,this.K=this.L=!1}dt(qe,nt);var m_="",aA=/^https?$/i,lA=["POST","PUT"];K=qe.prototype;K.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Cd.g(),this.C=this.u?my(this.u):my(Cd),this.g.onreadystatechange=lt(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){vy(this,s);return}t=n||"";const i=new Ls(this.headers);r&&Pp(r,function(s,o){i.set(o,s)}),r=wO(i.T()),n=ce.FormData&&t instanceof ce.FormData,!(0<=N1(lA,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{v_(this),0<this.B&&((this.K=uA(this.g))?(this.g.timeout=this.B,this.g.ontimeout=lt(this.pa,this)):this.A=Op(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){vy(this,s)}};function uA(t){return ys&&kO()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function cA(t){return t.toLowerCase()=="content-type"}K.pa=function(){typeof vp!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ut(this,"timeout"),this.abort(8))};function vy(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,g_(t),Cc(t)}function g_(t){t.D||(t.D=!0,ut(t,"complete"),ut(t,"error"))}K.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ut(this,"complete"),ut(this,"abort"),Cc(this))};K.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Cc(this,!0)),qe.Z.M.call(this)};K.Fa=function(){this.s||(this.F||this.v||this.l?y_(this):this.cb())};K.cb=function(){y_(this)};function y_(t){if(t.h&&typeof vp!="undefined"&&(!t.C[1]||Dn(t)!=4||t.ba()!=2)){if(t.v&&Dn(t)==4)Op(t.Fa,0,t);else if(ut(t,"readystatechange"),Dn(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(s_)[1]||null;if(!i&&ce.self&&ce.self.location){var s=ce.self.location.protocol;i=s.substr(0,s.length-1)}r=!aA.test(i?i.toLowerCase():"")}n=r}if(n)ut(t,"complete"),ut(t,"success");else{t.m=6;try{var o=2<Dn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",g_(t)}}finally{Cc(t)}}}}function Cc(t,e){if(t.g){v_(t);const n=t.g,r=t.C[0]?uu:null;t.g=null,t.C=null,e||ut(t,"ready");try{n.onreadystatechange=r}catch{}}}function v_(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(ce.clearTimeout(t.A),t.A=null)}function Dn(t){return t.g?t.g.readyState:0}K.ba=function(){try{return 2<Dn(this)?this.g.status:-1}catch{return-1}};K.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};K.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),oA(e)}};function wy(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case m_:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}K.Da=function(){return this.m};K.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function fA(t){let e="";return _p(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Fp(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=fA(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ne(t,e,n))}function eo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function w_(t){this.za=0,this.l=[],this.h=new wc,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=eo("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=eo("baseRetryDelayMs",5e3,t),this.$a=eo("retryDelaySeedMs",1e4,t),this.Ya=eo("forwardChannelMaxRetries",2,t),this.ra=eo("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new u_(t&&t.concurrentRequestLimit),this.Ca=new rA,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}K=w_.prototype;K.ma=8;K.G=1;function Up(t){if(__(t),t.G==3){var e=t.V++,n=Vn(t.F);Ne(n,"SID",t.J),Ne(n,"RID",e),Ne(n,"TYPE","terminate"),Ha(t,n),e=new ja(t,t.h,e,void 0),e.K=2,e.v=kc(Vn(n)),n=!1,ce.navigator&&ce.navigator.sendBeacon&&(n=ce.navigator.sendBeacon(e.v.toString(),"")),!n&&ce.Image&&(new Image().src=e.v,n=!0),n||(e.g=x_(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Va(e)}C_(t)}K.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Ic(t){t.g&&(Vp(t),t.g.cancel(),t.g=null)}function __(t){Ic(t),t.u&&(ce.clearTimeout(t.u),t.u=null),gu(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&ce.clearTimeout(t.m),t.m=null)}function Of(t,e){t.l.push(new tA(t.Za++,e)),t.G==3&&xc(t)}function xc(t){c_(t.i)||t.m||(t.m=!0,Ip(t.Ha,t),t.C=0)}function dA(t,e){return f_(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Fa(lt(t.Ha,t,e),T_(t,t.C)),t.C++,!0)}K.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new ja(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=D1(s),M1(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=E_(this,i,e),n=Vn(this.F),Ne(n,"RID",t),Ne(n,"CVER",22),this.D&&Ne(n,"X-HTTP-Session-Id",this.D),Ha(this,n),this.o&&s&&Fp(n,this.o,s),Mp(this.i,i),this.Ra&&Ne(n,"TYPE","init"),this.ja?(Ne(n,"$req",e),Ne(n,"SID","null"),i.$=!0,xd(i,n,null)):xd(i,n,e),this.G=2}}else this.G==3&&(t?_y(this,t):this.l.length==0||c_(this.i)||_y(this))};function _y(t,e){var n;e?n=e.m:n=t.V++;const r=Vn(t.F);Ne(r,"SID",t.J),Ne(r,"RID",n),Ne(r,"AID",t.U),Ha(t,r),t.o&&t.s&&Fp(r,t.o,t.s),n=new ja(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=E_(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Mp(t.i,n),xd(n,r,e)}function Ha(t,e){t.j&&Pp({},function(n,r){Ne(e,r,n)})}function E_(t,e,n){n=Math.min(t.l.length,n);var r=t.j?lt(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{iA(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function b_(t){t.g||t.u||(t.Y=1,Ip(t.Ga,t),t.A=0)}function jp(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Fa(lt(t.Ga,t),T_(t,t.A)),t.A++,!0)}K.Ga=function(){if(this.u=null,S_(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Fa(lt(this.bb,this),t)}};K.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Ct(10),Ic(this),S_(this))};function Vp(t){t.B!=null&&(ce.clearTimeout(t.B),t.B=null)}function S_(t){t.g=new ja(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Vn(t.oa);Ne(e,"RID","rpc"),Ne(e,"SID",t.J),Ne(e,"CI",t.N?"0":"1"),Ne(e,"AID",t.U),Ha(t,e),Ne(e,"TYPE","xmlhttp"),t.o&&t.s&&Fp(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=kc(Vn(e)),n.s=null,n.U=!0,t_(n,t)}K.ab=function(){this.v!=null&&(this.v=null,Ic(this),jp(this),Ct(19))};function gu(t){t.v!=null&&(ce.clearTimeout(t.v),t.v=null)}function k_(t,e){var n=null;if(t.g==e){gu(t),Vp(t),t.g=null;var r=2}else if(Ad(t.i,e))n=e.D,d_(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=_c(),ut(r,new X1(r,n,e,i)),xc(t)}else b_(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&dA(t,e)||r==2&&jp(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:qr(t,5);break;case 4:qr(t,10);break;case 3:qr(t,6);break;default:qr(t,2)}}}function T_(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function qr(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=lt(t.jb,t);n||(n=new di("//www.google.com/images/cleardot.gif"),ce.location&&ce.location.protocol=="http"||hu(n,"https"),kc(n)),sA(n.toString(),r)}else Ct(2);t.G=0,t.j&&t.j.va(e),C_(t),__(t)}K.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Ct(2)):(this.h.info("Failed to ping google.com"),Ct(1))};function C_(t){t.G=0,t.I=-1,t.j&&((h_(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,wp(t.l),t.l.length=0),t.j.ua())}function I_(t,e,n){let r=KO(n);if(r.i!="")e&&pu(r,e+"."+r.i),mu(r,r.m);else{const i=ce.location;r=GO(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&_p(t.aa,function(i,s){Ne(r,s,i)}),e=t.D,n=t.sa,e&&n&&Ne(r,e,n),Ne(r,"VER",t.ma),Ha(t,r),r}function x_(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new qe(new Ba({ib:!0})):new qe(t.qa),e.L=t.H,e}function O_(){}K=O_.prototype;K.xa=function(){};K.wa=function(){};K.va=function(){};K.ua=function(){};K.Oa=function(){};function yu(){if(ys&&!(10<=Number(TO)))throw Error("Environmental error: no available transport.")}yu.prototype.g=function(t,e){return new Vt(t,e)};function Vt(t,e){nt.call(this),this.g=new w_(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!cu(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!cu(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Fs(this)}dt(Vt,nt);Vt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Ip(lt(t.hb,t,e))),Ct(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=I_(t,null,t.W),xc(t)};Vt.prototype.close=function(){Up(this.g)};Vt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Of(this.g,e)}else this.v?(e={},e.__data__=Cp(t),Of(this.g,e)):Of(this.g,t)};Vt.prototype.M=function(){this.g.j=null,delete this.j,Up(this.g),delete this.g,Vt.Z.M.call(this)};function A_(t){Rp.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}dt(A_,Rp);function R_(){Np.call(this),this.status=1}dt(R_,Np);function Fs(t){this.g=t}dt(Fs,O_);Fs.prototype.xa=function(){ut(this.g,"a")};Fs.prototype.wa=function(t){ut(this.g,new A_(t))};Fs.prototype.va=function(t){ut(this.g,new R_(t))};Fs.prototype.ua=function(){ut(this.g,"b")};yu.prototype.createWebChannel=yu.prototype.g;Vt.prototype.send=Vt.prototype.u;Vt.prototype.open=Vt.prototype.m;Vt.prototype.close=Vt.prototype.close;Ec.NO_ERROR=0;Ec.TIMEOUT=8;Ec.HTTP_ERROR=6;J1.COMPLETE="complete";Z1.EventType=Ua;Ua.OPEN="a";Ua.CLOSE="b";Ua.ERROR="c";Ua.MESSAGE="d";nt.prototype.listen=nt.prototype.N;qe.prototype.listenOnce=qe.prototype.O;qe.prototype.getLastError=qe.prototype.La;qe.prototype.getLastErrorCode=qe.prototype.Da;qe.prototype.getStatus=qe.prototype.ba;qe.prototype.getResponseJson=qe.prototype.Qa;qe.prototype.getResponseText=qe.prototype.ga;qe.prototype.send=qe.prototype.ea;var hA=function(){return new yu},pA=function(){return _c()},Af=Ec,mA=J1,gA=Si,Ey={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},yA=Ba,ml=Z1,vA=qe;const by="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Pt.UNAUTHENTICATED=new Pt(null),Pt.GOOGLE_CREDENTIALS=new Pt("google-credentials-uid"),Pt.FIRST_PARTY=new Pt("first-party-uid"),Pt.MOCK_USER=new Pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Us="9.8.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi=new ep("@firebase/firestore");function Sy(){return hi.logLevel}function Z(t,...e){if(hi.logLevel<=Se.DEBUG){const n=e.map(Bp);hi.debug(`Firestore (${Us}): ${t}`,...n)}}function Sr(t,...e){if(hi.logLevel<=Se.ERROR){const n=e.map(Bp);hi.error(`Firestore (${Us}): ${t}`,...n)}}function ky(t,...e){if(hi.logLevel<=Se.WARN){const n=e.map(Bp);hi.warn(`Firestore (${Us}): ${t}`,...n)}}function Bp(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(t="Unexpected state"){const e=`FIRESTORE (${Us}) INTERNAL ASSERTION FAILED: `+t;throw Sr(e),new Error(e)}function xe(t,e){t||de()}function pe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends Dr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _A{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Pt.UNAUTHENTICATED))}shutdown(){}}class EA{constructor(e){this.t=e,this.currentUser=Pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new dr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new dr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new dr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(xe(typeof r.accessToken=="string"),new wA(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return xe(e===null||typeof e=="string"),new Pt(e)}}class bA{constructor(e,n,r){this.type="FirstParty",this.user=Pt.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class SA{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new bA(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class kA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class TA{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const r=s=>{s.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.p;return this.p=s.token,Z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.g.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.g.getImmediate({optional:!0});s?i(s):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(xe(typeof n.token=="string"),this.p=n.token,new kA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CA(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=CA(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ke(t,e){return t<e?-1:t>e?1:0}function vs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ie(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ie(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ie(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return We.fromMillis(Date.now())}static fromDate(e){return We.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new We(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ke(this.nanoseconds,e.nanoseconds):ke(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.timestamp=e}static fromTimestamp(e){return new me(e)}static min(){return new me(new We(0,0))}static max(){return new me(new We(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,n,r){n===void 0?n=0:n>e.length&&de(),r===void 0?r=e.length-n:r>e.length-n&&de(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return sa.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof sa?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Pe extends sa{construct(e,n,r){return new Pe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ie(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Pe(n)}static emptyPath(){return new Pe([])}}const IA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gt extends sa{construct(e,n,r){return new gt(e,n,r)}static isValidIdentifier(e){return IA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new gt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new ie(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new ie(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ie(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new ie(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new gt(n)}static emptyPath(){return new gt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.path=e}static fromPath(e){return new te(Pe.fromString(e))}static fromName(e){return new te(Pe.fromString(e).popFirst(5))}static empty(){return new te(Pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new te(new Pe(e.slice()))}}function xA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=me.fromTimestamp(r===1e9?new We(n+1,0):new We(n,r));return new kr(i,te.empty(),e)}function OA(t){return new kr(t.readTime,t.key,-1)}class kr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new kr(me.min(),te.empty(),-1)}static max(){return new kr(me.max(),te.empty(),-1)}}function AA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=te.comparator(t.documentKey,e.documentKey),n!==0?n:ke(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class NA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wa(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==RA)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&de(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,r)=>{n(e)})}static reject(e){return new $((n,r)=>{r(e)})}static waitFor(e){return new $((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next(i=>i?$.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new $((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new $((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function qa(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.it(r),this.rt=r=>n.writeSequenceNumber(r))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ty(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function js(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function P_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zp.ot=-1;class Je{constructor(e,n){this.comparator=e,this.root=n||it.EMPTY}insert(e,n){return new Je(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,it.BLACK,null,null))}remove(e){return new Je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,it.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new gl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new gl(this.root,e,this.comparator,!1)}getReverseIterator(){return new gl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new gl(this.root,e,this.comparator,!0)}}class gl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class it{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:it.RED,this.left=i!=null?i:it.EMPTY,this.right=s!=null?s:it.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new it(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return it.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw de();const e=this.left.check();if(e!==this.right.check())throw de();return e+(this.isRed()?0:1)}}it.EMPTY=null,it.RED=!0,it.BLACK=!1;it.EMPTY=new class{constructor(){this.size=0}get key(){throw de()}get value(){throw de()}get color(){throw de()}get left(){throw de()}get right(){throw de()}copy(t,e,n,r,i){return this}insert(t,e,n){return new it(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.comparator=e,this.data=new Je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Cy(this.data.getIterator())}getIteratorFrom(e){return new Cy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Xe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Xe(this.comparator);return n.data=e,n}}class Cy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e){this.fields=e,e.sort(gt.comparator)}static empty(){return new bn([])}unionWith(e){let n=new Xe(gt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new bn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return vs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new ct(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new ct(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ke(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const PA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Tr(t){if(xe(!!t),typeof t=="string"){let e=0;const n=PA.exec(t);if(xe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:He(t.seconds),nanos:He(t.nanos)}}function He(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ws(t){return typeof t=="string"?ct.fromBase64String(t):ct.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D_(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function M_(t){const e=t.mapValue.fields.__previous_value__;return D_(e)?M_(e):e}function oa(t){const e=Tr(t.mapValue.fields.__local_write_time__.timestampValue);return new We(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class _s{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new _s("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof _s&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(t){return t==null}function vu(t){return t===0&&1/t==-1/0}function MA(t){return typeof t=="number"&&Number.isInteger(t)&&!vu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function pi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?D_(t)?4:LA(t)?9007199254740991:10:de()}function Tn(t,e){if(t===e)return!0;const n=pi(t);if(n!==pi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return oa(t).isEqual(oa(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Tr(r.timestampValue),o=Tr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return ws(r.bytesValue).isEqual(ws(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return He(r.geoPointValue.latitude)===He(i.geoPointValue.latitude)&&He(r.geoPointValue.longitude)===He(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return He(r.integerValue)===He(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=He(r.doubleValue),o=He(i.doubleValue);return s===o?vu(s)===vu(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return vs(t.arrayValue.values||[],e.arrayValue.values||[],Tn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Ty(s)!==Ty(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Tn(s[a],o[a])))return!1;return!0}(t,e);default:return de()}}function aa(t,e){return(t.values||[]).find(n=>Tn(n,e))!==void 0}function Es(t,e){if(t===e)return 0;const n=pi(t),r=pi(e);if(n!==r)return ke(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ke(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=He(i.integerValue||i.doubleValue),a=He(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Iy(t.timestampValue,e.timestampValue);case 4:return Iy(oa(t),oa(e));case 5:return ke(t.stringValue,e.stringValue);case 6:return function(i,s){const o=ws(i),a=ws(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=ke(o[l],a[l]);if(u!==0)return u}return ke(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=ke(He(i.latitude),He(s.latitude));return o!==0?o:ke(He(i.longitude),He(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=Es(o[l],a[l]);if(u)return u}return ke(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===yl.mapValue&&s===yl.mapValue)return 0;if(i===yl.mapValue)return 1;if(s===yl.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const f=ke(a[c],u[c]);if(f!==0)return f;const d=Es(o[a[c]],l[u[c]]);if(d!==0)return d}return ke(a.length,u.length)}(t.mapValue,e.mapValue);default:throw de()}}function Iy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ke(t,e);const n=Tr(t),r=Tr(e),i=ke(n.seconds,r.seconds);return i!==0?i:ke(n.nanos,r.nanos)}function rs(t){return Rd(t)}function Rd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Tr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ws(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,te.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Rd(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Rd(r.fields[a])}`;return s+"}"}(t.mapValue):de();var e,n}function Nd(t){return!!t&&"integerValue"in t}function Hp(t){return!!t&&"arrayValue"in t}function xy(t){return!!t&&"nullValue"in t}function Oy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ul(t){return!!t&&"mapValue"in t}function Oo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return js(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Oo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Oo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function LA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this.value=e}static empty(){return new Kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ul(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Oo(n)}setAll(e){let n=gt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Oo(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ul(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Tn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ul(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){js(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Kt(Oo(this.value))}}function L_(t){const e=[];return js(t.fields,(n,r)=>{const i=new gt([n]);if(Ul(r)){const s=L_(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new bn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new ot(e,0,me.min(),me.min(),Kt.empty(),0)}static newFoundDocument(e,n,r){return new ot(e,1,n,me.min(),r,0)}static newNoDocument(e,n){return new ot(e,2,n,me.min(),Kt.empty(),0)}static newUnknownDocument(e,n){return new ot(e,3,n,me.min(),Kt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=me.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ot&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ot(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ut=null}}function Ay(t,e=null,n=[],r=[],i=null,s=null,o=null){return new $A(t,e,n,r,i,s,o)}function Wp(t){const e=pe(t);if(e.ut===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+rs(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Oc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>rs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>rs(r)).join(",")),e.ut=n}return e.ut}function FA(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${rs(r.value)}`;var r}).join(", ")}]`),Oc(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>rs(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>rs(n)).join(",")),`Target(${e})`}function qp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!qA(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Tn(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ny(t.startAt,e.startAt)&&Ny(t.endAt,e.endAt)}function Pd(t){return te.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Dt extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.ct(e,n,r):new UA(e,n,r):n==="array-contains"?new BA(e,r):n==="in"?new zA(e,r):n==="not-in"?new HA(e,r):n==="array-contains-any"?new WA(e,r):new Dt(e,n,r)}static ct(e,n,r){return n==="in"?new jA(e,r):new VA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.at(Es(n,this.value)):n!==null&&pi(this.value)===pi(n)&&this.at(Es(n,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return de()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class UA extends Dt{constructor(e,n,r){super(e,n,r),this.key=te.fromName(r.referenceValue)}matches(e){const n=te.comparator(e.key,this.key);return this.at(n)}}class jA extends Dt{constructor(e,n){super(e,"in",n),this.keys=$_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class VA extends Dt{constructor(e,n){super(e,"not-in",n),this.keys=$_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function $_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>te.fromName(r.referenceValue))}class BA extends Dt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Hp(n)&&aa(n.arrayValue,this.value)}}class zA extends Dt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&aa(this.value.arrayValue,n)}}class HA extends Dt{constructor(e,n){super(e,"not-in",n)}matches(e){if(aa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!aa(this.value.arrayValue,n)}}class WA extends Dt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Hp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>aa(this.value.arrayValue,r))}}class wu{constructor(e,n){this.position=e,this.inclusive=n}}class Ao{constructor(e,n="asc"){this.field=e,this.dir=n}}function qA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Ry(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=te.comparator(te.fromName(o.referenceValue),n.key):r=Es(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ny(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Tn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.lt=null,this.ft=null,this.startAt,this.endAt}}function KA(t,e,n,r,i,s,o,a){return new Ac(t,e,n,r,i,s,o,a)}function F_(t){return new Ac(t)}function GA(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function YA(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function QA(t){for(const e of t.filters)if(e.ht())return e.field;return null}function XA(t){return t.collectionGroup!==null}function la(t){const e=pe(t);if(e.lt===null){e.lt=[];const n=QA(e),r=YA(e);if(n!==null&&r===null)n.isKeyField()||e.lt.push(new Ao(n)),e.lt.push(new Ao(gt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.lt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new Ao(gt.keyField(),s))}}}return e.lt}function mi(t){const e=pe(t);if(!e.ft)if(e.limitType==="F")e.ft=Ay(e.path,e.collectionGroup,la(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of la(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Ao(s.field,o))}const r=e.endAt?new wu(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new wu(e.startAt.position,e.startAt.inclusive):null;e.ft=Ay(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.ft}function JA(t,e,n){return new Ac(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Rc(t,e){return qp(mi(t),mi(e))&&t.limitType===e.limitType}function U_(t){return`${Wp(mi(t))}|lt:${t.limitType}`}function Dd(t){return`Query(target=${FA(mi(t))}; limitType=${t.limitType})`}function Kp(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):te.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Ry(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,la(n),r)||n.endAt&&!function(i,s,o){const a=Ry(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,la(n),r))}(t,e)}function ZA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function j_(t){return(e,n)=>{let r=!1;for(const i of la(t)){const s=eR(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function eR(t,e,n){const r=t.field.isKeyField()?te.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Es(a,l):de()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return de()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V_(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vu(e)?"-0":e}}function B_(t){return{integerValue:""+t}}function tR(t,e){return MA(e)?B_(e):V_(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(){this._=void 0}}function nR(t,e,n){return t instanceof _u?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof ua?H_(t,e):t instanceof ca?W_(t,e):function(r,i){const s=z_(r,i),o=Py(s)+Py(r._t);return Nd(s)&&Nd(r._t)?B_(o):V_(r.wt,o)}(t,e)}function rR(t,e,n){return t instanceof ua?H_(t,e):t instanceof ca?W_(t,e):n}function z_(t,e){return t instanceof Eu?Nd(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class _u extends Nc{}class ua extends Nc{constructor(e){super(),this.elements=e}}function H_(t,e){const n=q_(e);for(const r of t.elements)n.some(i=>Tn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ca extends Nc{constructor(e){super(),this.elements=e}}function W_(t,e){let n=q_(e);for(const r of t.elements)n=n.filter(i=>!Tn(i,r));return{arrayValue:{values:n}}}class Eu extends Nc{constructor(e,n){super(),this.wt=e,this._t=n}}function Py(t){return He(t.integerValue||t.doubleValue)}function q_(t){return Hp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function iR(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof ua&&r instanceof ua||n instanceof ca&&r instanceof ca?vs(n.elements,r.elements,Tn):n instanceof Eu&&r instanceof Eu?Tn(n._t,r._t):n instanceof _u&&r instanceof _u}(t.transform,e.transform)}class sR{constructor(e,n){this.version=e,this.transformResults=n}}class $n{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new $n}static exists(e){return new $n(void 0,e)}static updateTime(e){return new $n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function jl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Pc{}function K_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Y_(t.key,$n.none()):new Ka(t.key,t.data,$n.none());{const n=t.data,r=Kt.empty();let i=new Xe(gt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ki(t.key,r,new bn(i.toArray()),$n.none())}}function oR(t,e,n){t instanceof Ka?function(r,i,s){const o=r.value.clone(),a=My(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ki?function(r,i,s){if(!jl(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=My(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(G_(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Ro(t,e,n,r){return t instanceof Ka?function(i,s,o,a){if(!jl(i.precondition,s))return o;const l=i.value.clone(),u=Ly(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof ki?function(i,s,o,a){if(!jl(i.precondition,s))return o;const l=Ly(i.fieldTransforms,a,s),u=s.data;return u.setAll(G_(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return jl(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function aR(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=z_(r.transform,i||null);s!=null&&(n===null&&(n=Kt.empty()),n.set(r.field,s))}return n||null}function Dy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&vs(n,r,(i,s)=>iR(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ka extends Pc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ki extends Pc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function G_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function My(t,e,n){const r=new Map;xe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,rR(o,a,n[i]))}return r}function Ly(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,nR(s,o,e))}return r}class Y_ extends Pc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lR extends Pc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ze,Ee;function cR(t){switch(t){default:return de();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0}}function Q_(t){if(t===void 0)return Sr("GRPC error has no .code"),F.UNKNOWN;switch(t){case ze.OK:return F.OK;case ze.CANCELLED:return F.CANCELLED;case ze.UNKNOWN:return F.UNKNOWN;case ze.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case ze.INTERNAL:return F.INTERNAL;case ze.UNAVAILABLE:return F.UNAVAILABLE;case ze.UNAUTHENTICATED:return F.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case ze.NOT_FOUND:return F.NOT_FOUND;case ze.ALREADY_EXISTS:return F.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return F.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case ze.ABORTED:return F.ABORTED;case ze.OUT_OF_RANGE:return F.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return F.UNIMPLEMENTED;case ze.DATA_LOSS:return F.DATA_LOSS;default:return de()}}(Ee=ze||(ze={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){js(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return P_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fR=new Je(te.comparator);function Bn(){return fR}const X_=new Je(te.comparator);function vo(...t){let e=X_;for(const n of t)e=e.insert(n.key,n);return e}function J_(t){let e=X_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Kr(){return No()}function Z_(){return No()}function No(){return new Vs(t=>t.toString(),(t,e)=>t.isEqual(e))}const dR=new Je(te.comparator),hR=new Xe(te.comparator);function ve(...t){let e=hR;for(const n of t)e=e.add(n);return e}const pR=new Xe(ke);function eE(){return pR}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,Ga.createSynthesizedTargetChangeForCurrentChange(e,n)),new Dc(me.min(),r,eE(),Bn(),ve())}}class Ga{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Ga(ct.EMPTY_BYTE_STRING,n,ve(),ve(),ve())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e,n,r,i){this.gt=e,this.removedTargetIds=n,this.key=r,this.yt=i}}class tE{constructor(e,n){this.targetId=e,this.It=n}}class nE{constructor(e,n,r=ct.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class $y{constructor(){this.Tt=0,this.Et=Uy(),this.At=ct.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=ve(),n=ve(),r=ve();return this.Et.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:de()}}),new Ga(this.At,this.Rt,e,n,r)}Dt(){this.bt=!1,this.Et=Uy()}Ct(e,n){this.bt=!0,this.Et=this.Et.insert(e,n)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Ot(){this.bt=!0,this.Rt=!0}}class mR{constructor(e){this.Mt=e,this.Ft=new Map,this.$t=Bn(),this.Bt=Fy(),this.Lt=new Xe(ke)}Ut(e){for(const n of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(n,e.yt):this.Kt(n,e.key,e.yt);for(const n of e.removedTargetIds)this.Kt(n,e.key,e.yt)}Gt(e){this.forEachTarget(e,n=>{const r=this.Qt(n);switch(e.state){case 0:this.jt(n)&&r.Vt(e.resumeToken);break;case 1:r.kt(),r.Pt||r.Dt(),r.Vt(e.resumeToken);break;case 2:r.kt(),r.Pt||this.removeTarget(n);break;case 3:this.jt(n)&&(r.Ot(),r.Vt(e.resumeToken));break;case 4:this.jt(n)&&(this.Wt(n),r.Vt(e.resumeToken));break;default:de()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ft.forEach((r,i)=>{this.jt(i)&&n(i)})}zt(e){const n=e.targetId,r=e.It.count,i=this.Ht(n);if(i){const s=i.target;if(Pd(s))if(r===0){const o=new te(s.path);this.Kt(n,o,ot.newNoDocument(o,me.min()))}else xe(r===1);else this.Jt(n)!==r&&(this.Wt(n),this.Lt=this.Lt.add(n))}}Yt(e){const n=new Map;this.Ft.forEach((s,o)=>{const a=this.Ht(o);if(a){if(s.current&&Pd(a.target)){const l=new te(a.target.path);this.$t.get(l)!==null||this.Xt(o,l)||this.Kt(o,l,ot.newNoDocument(l,e))}s.vt&&(n.set(o,s.St()),s.Dt())}});let r=ve();this.Bt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ht(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.$t.forEach((s,o)=>o.setReadTime(e));const i=new Dc(e,n,this.Lt,this.$t,r);return this.$t=Bn(),this.Bt=Fy(),this.Lt=new Xe(ke),i}qt(e,n){if(!this.jt(e))return;const r=this.Xt(e,n.key)?2:0;this.Qt(e).Ct(n.key,r),this.$t=this.$t.insert(n.key,n),this.Bt=this.Bt.insert(n.key,this.Zt(n.key).add(e))}Kt(e,n,r){if(!this.jt(e))return;const i=this.Qt(e);this.Xt(e,n)?i.Ct(n,1):i.xt(n),this.Bt=this.Bt.insert(n,this.Zt(n).delete(e)),r&&(this.$t=this.$t.insert(n,r))}removeTarget(e){this.Ft.delete(e)}Jt(e){const n=this.Qt(e).St();return this.Mt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let n=this.Ft.get(e);return n||(n=new $y,this.Ft.set(e,n)),n}Zt(e){let n=this.Bt.get(e);return n||(n=new Xe(ke),this.Bt=this.Bt.insert(e,n)),n}jt(e){const n=this.Ht(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}Ht(e){const n=this.Ft.get(e);return n&&n.Pt?null:this.Mt.te(e)}Wt(e){this.Ft.set(e,new $y),this.Mt.getRemoteKeysForTarget(e).forEach(n=>{this.Kt(e,n,null)})}Xt(e,n){return this.Mt.getRemoteKeysForTarget(e).has(n)}}function Fy(){return new Je(te.comparator)}function Uy(){return new Je(te.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),yR=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class vR{constructor(e,n){this.databaseId=e,this.dt=n}}function bu(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function rE(t,e){return t.dt?e.toBase64():e.toUint8Array()}function wR(t,e){return bu(t,e.toTimestamp())}function Fn(t){return xe(!!t),me.fromTimestamp(function(e){const n=Tr(e);return new We(n.seconds,n.nanos)}(t))}function Gp(t,e){return function(n){return new Pe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function iE(t){const e=Pe.fromString(t);return xe(aE(e)),e}function Md(t,e){return Gp(t.databaseId,e.path)}function Rf(t,e){const n=iE(e);if(n.get(1)!==t.databaseId.projectId)throw new ie(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ie(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new te(sE(n))}function Ld(t,e){return Gp(t.databaseId,e)}function _R(t){const e=iE(t);return e.length===4?Pe.emptyPath():sE(e)}function $d(t){return new Pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function sE(t){return xe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function jy(t,e,n){return{name:Md(t,e),fields:n.value.mapValue.fields}}function ER(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:de()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.dt?(xe(u===void 0||typeof u=="string"),ct.fromBase64String(u||"")):(xe(u===void 0||u instanceof Uint8Array),ct.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?F.UNKNOWN:Q_(l.code);return new ie(u,l.message||"")}(o);n=new nE(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Rf(t,r.document.name),s=Fn(r.document.updateTime),o=new Kt({mapValue:{fields:r.document.fields}}),a=ot.newFoundDocument(i,s,o),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Vl(l,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Rf(t,r.document),s=r.readTime?Fn(r.readTime):me.min(),o=ot.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Vl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Rf(t,r.document),s=r.removedTargetIds||[];n=new Vl([],s,i,null)}else{if(!("filter"in e))return de();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new uR(i),o=r.targetId;n=new tE(o,s)}}return n}function bR(t,e){let n;if(e instanceof Ka)n={update:jy(t,e.key,e.value)};else if(e instanceof Y_)n={delete:Md(t,e.key)};else if(e instanceof ki)n={update:jy(t,e.key,e.data),updateMask:NR(e.fieldMask)};else{if(!(e instanceof lR))return de();n={verify:Md(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof _u)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ua)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ca)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Eu)return{fieldPath:s.field.canonicalString(),increment:o._t};throw de()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:wR(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:de()}(t,e.precondition)),n}function SR(t,e){return t&&t.length>0?(xe(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Fn(r.updateTime):Fn(i);return s.isEqual(me.min())&&(s=Fn(i)),new sR(s,r.transformResults||[])}(n,e))):[]}function kR(t,e){return{documents:[Ld(t,e.path)]}}function TR(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Ld(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ld(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length===0)return;const u=l.map(c=>function(f){if(f.op==="=="){if(Oy(f.value))return{unaryFilter:{field:Ni(f.field),op:"IS_NAN"}};if(xy(f.value))return{unaryFilter:{field:Ni(f.field),op:"IS_NULL"}}}else if(f.op==="!="){if(Oy(f.value))return{unaryFilter:{field:Ni(f.field),op:"IS_NOT_NAN"}};if(xy(f.value))return{unaryFilter:{field:Ni(f.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ni(f.field),op:OR(f.op),value:f.value}}}(c));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:Ni(c.field),direction:xR(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.dt||Oc(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function CR(t){let e=_R(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){xe(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=oE(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(f){return new Ao(Vi(f.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(f.direction))}(c)));let a=null;n.limit&&(a=function(c){let f;return f=typeof c=="object"?c.value:c,Oc(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(c){const f=!!c.before,d=c.values||[];return new wu(d,f)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const f=!c.before,d=c.values||[];return new wu(d,f)}(n.endAt)),KA(e,i,o,s,a,"F",l,u)}function IR(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return de()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function oE(t){return t?t.unaryFilter!==void 0?[RR(t)]:t.fieldFilter!==void 0?[AR(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>oE(e)).reduce((e,n)=>e.concat(n)):de():[]}function xR(t){return gR[t]}function OR(t){return yR[t]}function Ni(t){return{fieldPath:t.canonicalString()}}function Vi(t){return gt.fromServerFormat(t.fieldPath)}function AR(t){return Dt.create(Vi(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return de()}}(t.fieldFilter.op),t.fieldFilter.value)}function RR(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Vi(t.unaryFilter.field);return Dt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Vi(t.unaryFilter.field);return Dt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Vi(t.unaryFilter.field);return Dt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Vi(t.unaryFilter.field);return Dt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return de()}}function NR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function aE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&oR(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ro(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ro(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Z_();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=K_(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(me.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ve())}isEqual(e){return this.batchId===e.batchId&&vs(this.mutations,e.mutations,(n,r)=>Dy(n,r))&&vs(this.baseMutations,e.baseMutations,(n,r)=>Dy(n,r))}}class Yp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){xe(e.mutations.length===r.length);let i=dR;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Yp(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,n,r,i,s=me.min(),o=me.min(),a=ct.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new ni(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new ni(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new ni(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(e){this.ne=e}}function LR(t){const e=CR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?JA(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(){this.ze=new FR}addToCollectionParentIndex(e,n){return this.ze.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.ze.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(kr.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(kr.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class FR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Xe(Pe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Xe(Pe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new bs(0)}static Rn(){return new bs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(){this.changes=new Vs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ot.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.getBaseDocument(e,n,r))).next(i=>(r!==null&&Ro(r.mutation,i,bn.empty(),We.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ve()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ve()){const i=Kr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=vo();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Kr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ve()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Bn();const o=No(),a=No();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof ki)?s=s.insert(u.key,u):c!==void 0&&(o.set(u.key,c.mutation.getFieldMask()),Ro(c.mutation,u,c.mutation.getFieldMask(),We.now()))}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var f;return a.set(u,new jR(c,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=No();let i=new Je((o,a)=>o-a),s=ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||bn.empty();c=a.applyToLocalView(u,c),r.set(l,c);const f=(i.get(a.batchId)||ve()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,f=Z_();c.forEach(d=>{if(!s.has(d)){const g=K_(n.get(d),r.get(d));g!==null&&f.set(d,g),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return $.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return te.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):XA(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):$.resolve(Kr());let a=-1,l=s;return o.next(u=>$.forEach(u,(c,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(c)?$.resolve():this.getBaseDocument(e,c,f).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,ve())).next(c=>({batchId:a,changes:J_(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new te(n)).next(r=>{let i=vo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=vo();return this.indexManager.getCollectionParents(e,i).next(o=>$.forEach(o,a=>{const l=function(u,c){return new Ac(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,f)=>{s=s.insert(c,f)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,l)=>{const u=l.getKey();i.get(u)===null&&(i=i.insert(u,ot.newInvalidDocument(u)))});let o=vo();return i.forEach((a,l)=>{const u=s.get(a);u!==void 0&&Ro(u.mutation,l,bn.empty(),We.now()),Kp(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):$.resolve(ot.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,n){return $.resolve(this.Jn.get(n))}saveBundleMetadata(e,n){var r;return this.Jn.set(n.id,{id:(r=n).id,version:r.version,createTime:Fn(r.createTime)}),$.resolve()}getNamedQuery(e,n){return $.resolve(this.Yn.get(n))}saveNamedQuery(e,n){return this.Yn.set(n.name,function(r){return{name:r.name,query:LR(r.bundledQuery),readTime:Fn(r.readTime)}}(n)),$.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(){this.overlays=new Je(te.comparator),this.Xn=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Kr();return $.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ie(e,n,s)}),$.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Xn.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Xn.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const i=Kr(),s=n.length+1,o=new te(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return $.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Je((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Kr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Kr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return $.resolve(a)}ie(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Xn.get(i.largestBatchId).delete(r.key);this.Xn.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new DR(n,r));let s=this.Xn.get(n);s===void 0&&(s=ve(),this.Xn.set(n,s)),this.Xn.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(){this.Zn=new Xe(et.ts),this.es=new Xe(et.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const r=new et(e,n);this.Zn=this.Zn.add(r),this.es=this.es.add(r)}ss(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.rs(new et(e,n))}os(e,n){e.forEach(r=>this.removeReference(r,n))}us(e){const n=new te(new Pe([])),r=new et(n,e),i=new et(n,e+1),s=[];return this.es.forEachInRange([r,i],o=>{this.rs(o),s.push(o.key)}),s}cs(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new te(new Pe([])),r=new et(n,e),i=new et(n,e+1);let s=ve();return this.es.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new et(e,0),r=this.Zn.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class et{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return te.comparator(e.key,n.key)||ke(e.ls,n.ls)}static ns(e,n){return ke(e.ls,n.ls)||te.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new Xe(et.ts)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new PR(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.ds=this.ds.add(new et(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,n){return $.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ws(r),s=i<0?0:i;return $.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new et(n,0),i=new et(n,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([r,i],o=>{const a=this._s(o.ls);s.push(a)}),$.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Xe(ke);return n.forEach(i=>{const s=new et(i,0),o=new et(i,Number.POSITIVE_INFINITY);this.ds.forEachInRange([s,o],a=>{r=r.add(a.ls)})}),$.resolve(this.gs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;te.isDocumentKey(s)||(s=s.child(""));const o=new et(new te(s),0);let a=new Xe(ke);return this.ds.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.ls)),!0)},o),$.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(r=>{const i=this._s(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){xe(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.ds;return $.forEach(n.mutations,i=>{const s=new et(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ds=r})}In(e){}containsKey(e,n){const r=new et(n,0),i=this.ds.firstAfterOrEqual(r);return $.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}ys(e,n){return this.ws(e)}ws(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}_s(e){const n=this.ws(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e){this.ps=e,this.docs=new Je(te.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ps(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():ot.newInvalidDocument(n))}getEntries(e,n){let r=Bn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ot.newInvalidDocument(i))}),$.resolve(r)}getAllFromCollection(e,n,r){let i=Bn();const s=new te(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||AA(OA(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return $.resolve(i)}getAllFromCollectionGroup(e,n,r,i){de()}Is(e,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new qR(this)}getSize(e){return $.resolve(this.size)}}class qR extends UR{constructor(e){super(),this.zn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.zn.addEntry(e,i)):this.zn.removeEntry(r)}),$.waitFor(n)}getFromCache(e,n){return this.zn.getEntry(e,n)}getAllFromCache(e,n){return this.zn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(e){this.persistence=e,this.Ts=new Vs(n=>Wp(n),qp),this.lastRemoteSnapshotVersion=me.min(),this.highestTargetId=0,this.Es=0,this.As=new Qp,this.targetCount=0,this.Rs=bs.An()}forEachTarget(e,n){return this.Ts.forEach((r,i)=>n(i)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Es&&(this.Es=n),$.resolve()}vn(e){this.Ts.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new bs(n),this.highestTargetId=n),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,n){return this.vn(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.vn(n),$.resolve()}removeTargetData(e,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Ts.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),$.waitFor(s).next(()=>i)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.Ts.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this.As.ss(n,r),$.resolve()}removeMatchingKeys(e,n,r){this.As.os(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),$.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.As.us(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this.As.hs(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this.As.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(e,n){this.bs={},this.overlays={},this.Ps=new zp(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new KR(this),this.indexManager=new $R,this.remoteDocumentCache=function(r){return new WR(r)}(r=>this.referenceDelegate.Ss(r)),this.wt=new MR(n),this.Ds=new BR(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new zR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.bs[e.toKey()];return r||(r=new HR(n,this.referenceDelegate),this.bs[e.toKey()]=r),r}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const i=new YR(this.Ps.next());return this.referenceDelegate.Cs(),r(i).next(s=>this.referenceDelegate.xs(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ns(e,n){return $.or(Object.values(this.bs).map(r=>()=>r.containsKey(e,n)))}}class YR extends NA{constructor(e){super(),this.currentSequenceNumber=e}}class Xp{constructor(e){this.persistence=e,this.ks=new Qp,this.Os=null}static Ms(e){return new Xp(e)}get Fs(){if(this.Os)return this.Os;throw de()}addReference(e,n,r){return this.ks.addReference(r,n),this.Fs.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.ks.removeReference(r,n),this.Fs.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.Fs.add(n.toString()),$.resolve()}removeTarget(e,n){this.ks.us(n.targetId).forEach(i=>this.Fs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Fs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Cs(){this.Os=new Set}xs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.Fs,r=>{const i=te.fromPath(r);return this.$s(e,i).next(s=>{s||n.removeEntry(i,me.min())})}).next(()=>(this.Os=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(r=>{r?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(e){return 0}$s(e,n){return $.or([()=>$.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ns(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Pi=r,this.vi=i}static Vi(e,n){let r=ve(),i=ve();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Jp(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(){this.Si=!1}initialize(e,n){this.Di=e,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ci(e,n).next(s=>s||this.xi(e,n,i,r)).next(s=>s||this.Ni(e,n))}Ci(e,n){return $.resolve(null)}xi(e,n,r,i){return GA(n)||i.isEqual(me.min())?this.Ni(e,n):this.Di.getDocuments(e,r).next(s=>{const o=this.ki(n,s);return this.Oi(n,o,r,i)?this.Ni(e,n):(Sy()<=Se.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Dd(n)),this.Mi(e,o,n,xA(i,-1)))})}ki(e,n){let r=new Xe(j_(e));return n.forEach((i,s)=>{Kp(e,s)&&(r=r.add(s))}),r}Oi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ni(e,n){return Sy()<=Se.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",Dd(n)),this.Di.getDocumentsMatchingQuery(e,n,kr.min())}Mi(e,n,r,i){return this.Di.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(e,n,r,i){this.persistence=e,this.Fi=n,this.wt=i,this.$i=new Je(ke),this.Bi=new Vs(s=>Wp(s),qp),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(r)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new VR(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.$i))}}function JR(t,e,n,r){return new XR(t,e,n,r)}async function lE(t,e){const n=pe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=ve();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Ki:u,removedBatchIds:o,addedBatchIds:a}))})})}function ZR(t,e){const n=pe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ui.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,f=c.keys();let d=$.resolve();return f.forEach(g=>{d=d.next(()=>u.getEntry(a,g)).next(_=>{const E=l.docVersions.get(g);xe(E!==null),_.version.compareTo(E)<0&&(c.applyToRemoteDocument(_,l),_.isValidDocument()&&(_.setReadTime(l.commitVersion),u.addEntry(_)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=ve();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function uE(t){const e=pe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Vs.getLastRemoteSnapshotVersion(n))}function eN(t,e){const n=pe(t),r=e.snapshotVersion;let i=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ui.newChangeBuffer({trackRemovals:!0});i=n.$i;const a=[];e.targetChanges.forEach((c,f)=>{const d=i.get(f);if(!d)return;a.push(n.Vs.removeMatchingKeys(s,c.removedDocuments,f).next(()=>n.Vs.addMatchingKeys(s,c.addedDocuments,f)));let g=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(f)?g=g.withResumeToken(ct.EMPTY_BYTE_STRING,me.min()).withLastLimboFreeSnapshotVersion(me.min()):c.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(c.resumeToken,r)),i=i.insert(f,g),function(_,E,p){return _.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:p.addedDocuments.size+p.modifiedDocuments.size+p.removedDocuments.size>0}(d,g,c)&&a.push(n.Vs.updateTargetData(s,g))});let l=Bn(),u=ve();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(tN(s,o,e.documentUpdates).next(c=>{l=c.Gi,u=c.Qi})),!r.isEqual(me.min())){const c=n.Vs.getLastRemoteSnapshotVersion(s).next(f=>n.Vs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return $.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.$i=i,s))}function tN(t,e,n){let r=ve(),i=ve();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Bn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(me.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):Z("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Gi:o,Qi:i}})}function nN(t,e){const n=pe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function rN(t,e){const n=pe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Vs.getTargetData(r,e).next(s=>s?(i=s,$.resolve(i)):n.Vs.allocateTargetId(r).next(o=>(i=new ni(e,o,0,r.currentSequenceNumber),n.Vs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.$i.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.$i=n.$i.insert(r.targetId,r),n.Bi.set(e,r.targetId)),r})}async function Fd(t,e,n){const r=pe(t),i=r.$i.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!qa(o))throw o;Z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.$i=r.$i.remove(e),r.Bi.delete(i.target)}function Vy(t,e,n){const r=pe(t);let i=me.min(),s=ve();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=pe(a),f=c.Bi.get(u);return f!==void 0?$.resolve(c.$i.get(f)):c.Vs.getTargetData(l,u)}(r,o,mi(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Vs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Fi.getDocumentsMatchingQuery(o,e,n?i:me.min(),n?s:ve())).next(a=>(iN(r,ZA(e),a),{documents:a,ji:s})))}function iN(t,e,n){let r=me.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Li.set(e,r)}class By{constructor(){this.activeTargetIds=eE()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class sN{constructor(){this.Fr=new By,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,n,r){this.$r[e]=n}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new By,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{Br(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){Z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){Z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.so=n+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,n,r,i,s){const o=this.oo(e,n);Z("RestConnection","Sending: ",o,r);const a={};return this.uo(a,i,s),this.co(e,o,a,r).then(l=>(Z("RestConnection","Received: ",l),l),l=>{throw ky("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}ao(e,n,r,i,s){return this.ro(e,n,r,i,s)}uo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Us,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}oo(e,n){const r=aN[e];return`${this.so}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,r,i){return new Promise((s,o)=>{const a=new vA;a.listenOnce(mA.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Af.NO_ERROR:const u=a.getResponseJson();Z("Connection","XHR received:",JSON.stringify(u)),s(u);break;case Af.TIMEOUT:Z("Connection",'RPC "'+e+'" timed out'),o(new ie(F.DEADLINE_EXCEEDED,"Request time out"));break;case Af.HTTP_ERROR:const c=a.getStatus();if(Z("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const f=a.getResponseJson().error;if(f&&f.status&&f.message){const d=function(g){const _=g.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(_)>=0?_:F.UNKNOWN}(f.status);o(new ie(d,f.message))}else o(new ie(F.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new ie(F.UNAVAILABLE,"Connection failed."));break;default:de()}}finally{Z("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}ho(e,n,r){const i=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=hA(),o=pA(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new yA({})),this.uo(a.initMessageHeaders,n,r),Rw()||Pw()||Vk()||Dw()||Bk()||Nw()||(a.httpHeadersOverwriteParam="$httpHeaders");const l=i.join("");Z("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,f=!1;const d=new lN({jr:_=>{f?Z("Connection","Not sending because WebChannel is closed:",_):(c||(Z("Connection","Opening WebChannel transport."),u.open(),c=!0),Z("Connection","WebChannel sending:",_),u.send(_))},Wr:()=>u.close()}),g=(_,E,p)=>{_.listen(E,h=>{try{p(h)}catch(m){setTimeout(()=>{throw m},0)}})};return g(u,ml.EventType.OPEN,()=>{f||Z("Connection","WebChannel transport opened.")}),g(u,ml.EventType.CLOSE,()=>{f||(f=!0,Z("Connection","WebChannel transport closed"),d.eo())}),g(u,ml.EventType.ERROR,_=>{f||(f=!0,ky("Connection","WebChannel transport errored:",_),d.eo(new ie(F.UNAVAILABLE,"The operation could not be completed")))}),g(u,ml.EventType.MESSAGE,_=>{var E;if(!f){const p=_.data[0];xe(!!p);const h=p,m=h.error||((E=h[0])===null||E===void 0?void 0:E.error);if(m){Z("Connection","WebChannel received error:",m);const v=m.status;let w=function(T){const x=ze[T];if(x!==void 0)return Q_(x)}(v),C=m.message;w===void 0&&(w=F.INTERNAL,C="Unknown error status: "+v+" with message "+m.message),f=!0,d.eo(new ie(w,C)),u.close()}else Z("Connection","WebChannel received:",p),d.no(p)}}),g(o,gA.STAT_EVENT,_=>{_.stat===Ey.PROXY?Z("Connection","Detected buffering proxy"):_.stat===Ey.NOPROXY&&Z("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.Zr()},0),d}}function Nf(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(t){return new vR(t,!0)}class cE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.js=e,this.timerId=n,this.lo=r,this.fo=i,this._o=s,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const n=Math.floor(this.wo+this.To()),r=Math.max(0,Date.now()-this.yo),i=Math.max(0,n-r);i>0&&Z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,i,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(e,n,r,i,s,o,a,l){this.js=e,this.Ao=r,this.Ro=i,this.bo=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new cE(e,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Oo()))}Mo(e){this.Fo(),this.stream.send(e)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(Sr(n.toString()),Sr("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Po===n&&this.Uo(r,i)},r=>{e(()=>{const i=new ie(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.qo(i)})})}Uo(e,n){const r=this.Lo(this.Po);this.stream=this.Ko(e,n),this.stream.zr(()=>{r(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(i=>{r(()=>this.qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return Z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return n=>{this.js.enqueueAndForget(()=>this.Po===e?n():(Z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class cN extends fE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.wt=s}Ko(e,n){return this.bo.ho("Listen",e,n)}onMessage(e){this.So.reset();const n=ER(this.wt,e),r=function(i){if(!("targetChange"in i))return me.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?me.min():s.readTime?Fn(s.readTime):me.min()}(e);return this.listener.Go(n,r)}Qo(e){const n={};n.database=$d(this.wt),n.addTarget=function(i,s){let o;const a=s.target;return o=Pd(a)?{documents:kR(i,a)}:{query:TR(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=rE(i,s.resumeToken):s.snapshotVersion.compareTo(me.min())>0&&(o.readTime=bu(i,s.snapshotVersion.toTimestamp())),o}(this.wt,e);const r=IR(this.wt,e);r&&(n.labels=r),this.Mo(n)}jo(e){const n={};n.database=$d(this.wt),n.removeTarget=e,this.Mo(n)}}class fN extends fE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.wt=s,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(e,n){return this.bo.ho("Write",e,n)}onMessage(e){if(xe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const n=SR(e.writeResults,e.commitTime),r=Fn(e.commitTime);return this.listener.Jo(r,n)}return xe(!e.writeResults||e.writeResults.length===0),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=$d(this.wt),this.Mo(e)}Ho(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>bR(this.wt,r))};this.Mo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=r,this.wt=i,this.Zo=!1}tu(){if(this.Zo)throw new ie(F.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.bo.ro(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ie(F.UNKNOWN,i.toString())})}ao(e,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.bo.ao(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ie(F.UNKNOWN,i.toString())})}terminate(){this.Zo=!0}}class hN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(Sr(n),this.su=!1):Z("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pN{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=s,this.du.Br(o=>{r.enqueueAndForget(async()=>{Ti(this)&&(Z("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=pe(a);l.lu.add(4),await Ya(l),l._u.set("Unknown"),l.lu.delete(4),await Lc(l)}(this))})}),this._u=new hN(r,i)}}async function Lc(t){if(Ti(t))for(const e of t.fu)await e(!0)}async function Ya(t){for(const e of t.fu)await e(!1)}function dE(t,e){const n=pe(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),tm(n)?em(n):Bs(n).Co()&&Zp(n,e))}function hE(t,e){const n=pe(t),r=Bs(n);n.hu.delete(e),r.Co()&&pE(n,e),n.hu.size===0&&(r.Co()?r.ko():Ti(n)&&n._u.set("Unknown"))}function Zp(t,e){t.wu.Nt(e.targetId),Bs(t).Qo(e)}function pE(t,e){t.wu.Nt(e),Bs(t).jo(e)}function em(t){t.wu=new mR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),Bs(t).start(),t._u.iu()}function tm(t){return Ti(t)&&!Bs(t).Do()&&t.hu.size>0}function Ti(t){return pe(t).lu.size===0}function mE(t){t.wu=void 0}async function mN(t){t.hu.forEach((e,n)=>{Zp(t,e)})}async function gN(t,e){mE(t),tm(t)?(t._u.uu(e),em(t)):t._u.set("Unknown")}async function yN(t,e,n){if(t._u.set("Online"),e instanceof nE&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.hu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.hu.delete(o),r.wu.removeTarget(o))}(t,e)}catch(r){Z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Su(t,r)}else if(e instanceof Vl?t.wu.Ut(e):e instanceof tE?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(me.min()))try{const r=await uE(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.wu.Yt(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.hu.get(l);u&&i.hu.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.hu.get(a);if(!l)return;i.hu.set(a,l.withResumeToken(ct.EMPTY_BYTE_STRING,l.snapshotVersion)),pE(i,a);const u=new ni(l.target,a,1,l.sequenceNumber);Zp(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){Z("RemoteStore","Failed to raise snapshot:",r),await Su(t,r)}}async function Su(t,e,n){if(!qa(e))throw e;t.lu.add(1),await Ya(t),t._u.set("Offline"),n||(n=()=>uE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await Lc(t)})}function gE(t,e){return e().catch(n=>Su(t,n,e))}async function $c(t){const e=pe(t),n=Cr(e);let r=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;vN(e);)try{const i=await nN(e.localStore,r);if(i===null){e.au.length===0&&n.ko();break}r=i.batchId,wN(e,i)}catch(i){await Su(e,i)}yE(e)&&vE(e)}function vN(t){return Ti(t)&&t.au.length<10}function wN(t,e){t.au.push(e);const n=Cr(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function yE(t){return Ti(t)&&!Cr(t).Do()&&t.au.length>0}function vE(t){Cr(t).start()}async function _N(t){Cr(t).Xo()}async function EN(t){const e=Cr(t);for(const n of t.au)e.Ho(n.mutations)}async function bN(t,e,n){const r=t.au.shift(),i=Yp.from(r,e,n);await gE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await $c(t)}async function SN(t,e){e&&Cr(t).zo&&await async function(n,r){if(i=r.code,cR(i)&&i!==F.ABORTED){const s=n.au.shift();Cr(n).No(),await gE(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await $c(n)}var i}(t,e),yE(t)&&vE(t)}async function Hy(t,e){const n=pe(t);n.asyncQueue.verifyOperationInProgress(),Z("RemoteStore","RemoteStore received new credentials");const r=Ti(n);n.lu.add(3),await Ya(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await Lc(n)}async function kN(t,e){const n=pe(t);e?(n.lu.delete(2),await Lc(n)):e||(n.lu.add(2),await Ya(n),n._u.set("Unknown"))}function Bs(t){return t.mu||(t.mu=function(e,n,r){const i=pe(e);return i.tu(),new cN(n,i.bo,i.authCredentials,i.appCheckCredentials,i.wt,r)}(t.datastore,t.asyncQueue,{zr:mN.bind(null,t),Jr:gN.bind(null,t),Go:yN.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),tm(t)?em(t):t._u.set("Unknown")):(await t.mu.stop(),mE(t))})),t.mu}function Cr(t){return t.gu||(t.gu=function(e,n,r){const i=pe(e);return i.tu(),new fN(n,i.bo,i.authCredentials,i.appCheckCredentials,i.wt,r)}(t.datastore,t.asyncQueue,{zr:_N.bind(null,t),Jr:SN.bind(null,t),Yo:EN.bind(null,t),Jo:bN.bind(null,t)}),t.fu.push(async e=>{e?(t.gu.No(),await $c(t)):(await t.gu.stop(),t.au.length>0&&(Z("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))})),t.gu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new dr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new nm(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function rm(t,e){if(Sr("AsyncQueue",`${e}: ${t}`),qa(t))return new ie(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this.comparator=e?(n,r)=>e(n,r)||te.comparator(n.key,r.key):(n,r)=>te.comparator(n.key,r.key),this.keyedMap=vo(),this.sortedSet=new Je(this.comparator)}static emptySet(e){return new is(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof is)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new is;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(){this.yu=new Je(te.comparator)}track(e){const n=e.doc.key,r=this.yu.get(n);r?e.type!==0&&r.type===3?this.yu=this.yu.insert(n,e):e.type===3&&r.type!==1?this.yu=this.yu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.yu=this.yu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.yu=this.yu.remove(n):e.type===1&&r.type===2?this.yu=this.yu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):de():this.yu=this.yu.insert(n,e)}pu(){const e=[];return this.yu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ss{constructor(e,n,r,i,s,o,a,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new Ss(e,n,is.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Rc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TN{constructor(){this.Iu=void 0,this.listeners=[]}}class CN{constructor(){this.queries=new Vs(e=>U_(e),Rc),this.onlineState="Unknown",this.Tu=new Set}}async function IN(t,e){const n=pe(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new TN),i)try{s.Iu=await n.onListen(r)}catch(o){const a=rm(o,`Initialization of query '${Dd(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Eu(n.onlineState),s.Iu&&e.Au(s.Iu)&&im(n)}async function xN(t,e){const n=pe(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function ON(t,e){const n=pe(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Au(i)&&(r=!0);o.Iu=i}}r&&im(n)}function AN(t,e,n){const r=pe(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function im(t){t.Tu.forEach(e=>{e.next()})}class RN{constructor(e,n,r){this.query=e,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=r||{}}Au(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ss(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),n=!0):this.Vu(e,this.onlineState)&&(this.Su(e),n=!0),this.Pu=e,n}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let n=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),n=!0),n}Vu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Du||!r)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(e){e=Ss.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{constructor(e){this.key=e}}class _E{constructor(e){this.key=e}}class NN{constructor(e,n){this.query=e,this.Fu=n,this.$u=null,this.current=!1,this.Bu=ve(),this.mutatedKeys=ve(),this.Lu=j_(e),this.Uu=new is(this.Lu)}get qu(){return this.Fu}Ku(e,n){const r=n?n.Gu:new Wy,i=n?n.Uu:this.Uu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,f)=>{const d=i.get(c),g=Kp(this.query,f)?f:null,_=!!d&&this.mutatedKeys.has(d.key),E=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let p=!1;d&&g?d.data.isEqual(g.data)?_!==E&&(r.track({type:3,doc:g}),p=!0):this.Qu(d,g)||(r.track({type:2,doc:g}),p=!0,(l&&this.Lu(g,l)>0||u&&this.Lu(g,u)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),p=!0):d&&!g&&(r.track({type:1,doc:d}),p=!0,(l||u)&&(a=!0)),p&&(g?(o=o.add(g),s=E?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Uu:o,Gu:r,Oi:a,mutatedKeys:s}}Qu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const s=e.Gu.pu();s.sort((u,c)=>function(f,d){const g=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return de()}};return g(f)-g(d)}(u.type,c.type)||this.Lu(u.doc,c.doc)),this.ju(r);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,l=a!==this.$u;return this.$u=a,s.length!==0||l?{snapshot:new Ss(this.query,e.Uu,i,s,e.mutatedKeys,a===0,l,!1),zu:o}:{zu:o}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new Wy,mutatedKeys:this.mutatedKeys,Oi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=ve(),this.Uu.forEach(r=>{this.Hu(r.key)&&(this.Bu=this.Bu.add(r.key))});const n=[];return e.forEach(r=>{this.Bu.has(r)||n.push(new _E(r))}),this.Bu.forEach(r=>{e.has(r)||n.push(new wE(r))}),n}Ju(e){this.Fu=e.ji,this.Bu=ve();const n=this.Ku(e.documents);return this.applyChanges(n,!0)}Yu(){return Ss.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class PN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class DN{constructor(e){this.key=e,this.Xu=!1}}class MN{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new Vs(a=>U_(a),Rc),this.ec=new Map,this.nc=new Set,this.sc=new Je(te.comparator),this.ic=new Map,this.rc=new Qp,this.oc={},this.uc=new Map,this.cc=bs.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function LN(t,e){const n=qN(t);let r,i;const s=n.tc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Yu();else{const o=await rN(n.localStore,mi(e));n.isPrimaryClient&&dE(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await $N(n,e,r,a==="current")}return i}async function $N(t,e,n,r){t.hc=(c,f,d)=>async function(g,_,E,p){let h=_.view.Ku(E);h.Oi&&(h=await Vy(g.localStore,_.query,!1).then(({documents:w})=>_.view.Ku(w,h)));const m=p&&p.targetChanges.get(_.targetId),v=_.view.applyChanges(h,g.isPrimaryClient,m);return Ky(g,_.targetId,v.zu),v.snapshot}(t,c,f,d);const i=await Vy(t.localStore,e,!0),s=new NN(e,i.ji),o=s.Ku(i.documents),a=Ga.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),l=s.applyChanges(o,t.isPrimaryClient,a);Ky(t,n,l.zu);const u=new PN(e,n,s);return t.tc.set(e,u),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),l.snapshot}async function FN(t,e){const n=pe(t),r=n.tc.get(e),i=n.ec.get(r.targetId);if(i.length>1)return n.ec.set(r.targetId,i.filter(s=>!Rc(s,e))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Fd(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),hE(n.remoteStore,r.targetId),Ud(n,r.targetId)}).catch(Wa)):(Ud(n,r.targetId),await Fd(n.localStore,r.targetId,!0))}async function UN(t,e,n){const r=KN(t);try{const i=await function(s,o){const a=pe(s),l=We.now(),u=o.reduce((d,g)=>d.add(g.key),ve());let c,f;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=Bn(),_=ve();return a.Ui.getEntries(d,u).next(E=>{g=E,g.forEach((p,h)=>{h.isValidDocument()||(_=_.add(p))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(E=>{c=E;const p=[];for(const h of o){const m=aR(h,c.get(h.key).overlayedDocument);m!=null&&p.push(new ki(h.key,m,L_(m.value.mapValue),$n.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,p,o)}).next(E=>{f=E;const p=E.applyToLocalDocumentSet(c,_);return a.documentOverlayCache.saveOverlays(d,E.batchId,p)})}).then(()=>({batchId:f.batchId,changes:J_(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.oc[s.currentUser.toKey()];l||(l=new Je(ke)),l=l.insert(o,a),s.oc[s.currentUser.toKey()]=l}(r,i.batchId,n),await Qa(r,i.changes),await $c(r.remoteStore)}catch(i){const s=rm(i,"Failed to persist write");n.reject(s)}}async function EE(t,e){const n=pe(t);try{const r=await eN(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.ic.get(s);o&&(xe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Xu=!0:i.modifiedDocuments.size>0?xe(o.Xu):i.removedDocuments.size>0&&(xe(o.Xu),o.Xu=!1))}),await Qa(n,r,e)}catch(r){await Wa(r)}}function qy(t,e,n){const r=pe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.tc.forEach((s,o)=>{const a=o.view.Eu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=pe(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const f of c.listeners)f.Eu(o)&&(l=!0)}),l&&im(a)}(r.eventManager,e),i.length&&r.Zu.Go(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function jN(t,e,n){const r=pe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ic.get(e),s=i&&i.key;if(s){let o=new Je(te.comparator);o=o.insert(s,ot.newNoDocument(s,me.min()));const a=ve().add(s),l=new Dc(me.min(),new Map,new Xe(ke),o,a);await EE(r,l),r.sc=r.sc.remove(s),r.ic.delete(e),sm(r)}else await Fd(r.localStore,e,!1).then(()=>Ud(r,e,n)).catch(Wa)}async function VN(t,e){const n=pe(t),r=e.batch.batchId;try{const i=await ZR(n.localStore,e);SE(n,r,null),bE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Qa(n,i)}catch(i){await Wa(i)}}async function BN(t,e,n){const r=pe(t);try{const i=await function(s,o){const a=pe(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(xe(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);SE(r,e,n),bE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Qa(r,i)}catch(i){await Wa(i)}}function bE(t,e){(t.uc.get(e)||[]).forEach(n=>{n.resolve()}),t.uc.delete(e)}function SE(t,e,n){const r=pe(t);let i=r.oc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.oc[r.currentUser.toKey()]=i}}function Ud(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ec.get(e))t.tc.delete(r),n&&t.Zu.lc(r,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach(r=>{t.rc.containsKey(r)||kE(t,r)})}function kE(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);n!==null&&(hE(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),sm(t))}function Ky(t,e,n){for(const r of n)r instanceof wE?(t.rc.addReference(r.key,e),zN(t,r)):r instanceof _E?(Z("SyncEngine","Document no longer in limbo: "+r.key),t.rc.removeReference(r.key,e),t.rc.containsKey(r.key)||kE(t,r.key)):de()}function zN(t,e){const n=e.key,r=n.path.canonicalString();t.sc.get(n)||t.nc.has(r)||(Z("SyncEngine","New document in limbo: "+n),t.nc.add(r),sm(t))}function sm(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new te(Pe.fromString(e)),r=t.cc.next();t.ic.set(r,new DN(n)),t.sc=t.sc.insert(n,r),dE(t.remoteStore,new ni(mi(F_(n.path)),r,2,zp.ot))}}async function Qa(t,e,n){const r=pe(t),i=[],s=[],o=[];r.tc.isEmpty()||(r.tc.forEach((a,l)=>{o.push(r.hc(l,e,n).then(u=>{if(u){r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u.fromCache?"not-current":"current"),i.push(u);const c=Jp.Vi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Zu.Go(i),await async function(a,l){const u=pe(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>$.forEach(l,f=>$.forEach(f.Pi,d=>u.persistence.referenceDelegate.addReference(c,f.targetId,d)).next(()=>$.forEach(f.vi,d=>u.persistence.referenceDelegate.removeReference(c,f.targetId,d)))))}catch(c){if(!qa(c))throw c;Z("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const f=c.targetId;if(!c.fromCache){const d=u.$i.get(f),g=d.snapshotVersion,_=d.withLastLimboFreeSnapshotVersion(g);u.$i=u.$i.insert(f,_)}}}(r.localStore,s))}async function HN(t,e){const n=pe(t);if(!n.currentUser.isEqual(e)){Z("SyncEngine","User change. New user:",e.toKey());const r=await lE(n.localStore,e);n.currentUser=e,function(i,s){i.uc.forEach(o=>{o.forEach(a=>{a.reject(new ie(F.CANCELLED,s))})}),i.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Qa(n,r.Ki)}}function WN(t,e){const n=pe(t),r=n.ic.get(e);if(r&&r.Xu)return ve().add(r.key);{let i=ve();const s=n.ec.get(e);if(!s)return i;for(const o of s){const a=n.tc.get(o);i=i.unionWith(a.view.qu)}return i}}function qN(t){const e=pe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=EE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=WN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=jN.bind(null,e),e.Zu.Go=ON.bind(null,e.eventManager),e.Zu.lc=AN.bind(null,e.eventManager),e}function KN(t){const e=pe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=VN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=BN.bind(null,e),e}class GN{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=Mc(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,n){return null}gc(e,n){return null}wc(e){return JR(this.persistence,new QR,e.initialUser,this.wt)}_c(e){return new GR(Xp.Ms,this.wt)}dc(e){return new sN}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class YN{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>qy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=HN.bind(null,this.syncEngine),await kN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new CN}createDatastore(e){const n=Mc(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new uN(i));var i;return function(s,o,a,l){return new dN(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>qy(this.syncEngine,a,0),o=zy.V()?new zy:new oN,new pN(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new MN(r,i,s,o,a,l);return u&&(c.ac=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=pe(e);Z("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await Ya(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Pt.UNAUTHENTICATED,this.clientId=N_.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{Z("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(Z("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ie(F.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new dr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=rm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function JN(t,e){t.asyncQueue.verifyOperationInProgress(),Z("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await lE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function ZN(t,e){t.asyncQueue.verifyOperationInProgress();const n=await eP(t);Z("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Hy(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Hy(e.remoteStore,s)),t.onlineComponents=e}async function eP(t){return t.offlineComponents||(Z("FirestoreClient","Using default OfflineComponentProvider"),await JN(t,new GN)),t.offlineComponents}async function TE(t){return t.onlineComponents||(Z("FirestoreClient","Using default OnlineComponentProvider"),await ZN(t,new YN)),t.onlineComponents}function tP(t){return TE(t).then(e=>e.syncEngine)}async function nP(t){const e=await TE(t),n=e.eventManager;return n.onListen=LN.bind(null,e.syncEngine),n.onUnlisten=FN.bind(null,e.syncEngine),n}function rP(t,e,n={}){const r=new dr;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new QN({next:f=>{s.enqueueAndForget(()=>xN(i,c)),f.fromCache&&a.source==="server"?l.reject(new ie(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(f)},error:f=>l.reject(f)}),c=new RN(o,u,{includeMetadataChanges:!0,Du:!0});return IN(i,c)}(await nP(t),t.asyncQueue,e,n,r)),r.promise}const Gy=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CE(t,e,n){if(!n)throw new ie(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function iP(t,e,n,r){if(e===!0&&r===!0)throw new ie(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Yy(t){if(!te.isDocumentKey(t))throw new ie(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Qy(t){if(te.isDocumentKey(t))throw new ie(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function om(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":de()}function jd(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ie(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=om(t);throw new ie(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new ie(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ie(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,iP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xy({}),this._settingsFrozen=!1,e instanceof _s?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new ie(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _s(i.options.projectId)}(e))}get app(){if(!this._app)throw new ie(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ie(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xy(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new _A;switch(n.type){case"gapi":const r=n.client;return xe(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new SA(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new ie(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Gy.get(e);n&&(Z("ComponentProvider","Removing Datastore"),Gy.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new hr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new an(this.firestore,e,this._key)}}class Fc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Fc(this.firestore,e,this._query)}}class hr extends Fc{constructor(e,n,r){super(e,n,F_(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new an(this.firestore,null,new te(e))}withConverter(e){return new hr(this.firestore,e,this._path)}}function sP(t,e,...n){if(t=xt(t),CE("collection","path",e),t instanceof am){const r=Pe.fromString(e,...n);return Qy(r),new hr(t,null,r)}{if(!(t instanceof an||t instanceof hr))throw new ie(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Pe.fromString(e,...n));return Qy(r),new hr(t.firestore,null,r)}}function oP(t,e,...n){if(t=xt(t),arguments.length===1&&(e=N_.I()),CE("doc","path",e),t instanceof am){const r=Pe.fromString(e,...n);return Yy(r),new an(t,null,new te(r))}{if(!(t instanceof an||t instanceof hr))throw new ie(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Pe.fromString(e,...n));return Yy(r),new an(t.firestore,t instanceof hr?t.converter:null,new te(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new cE(this,"async_queue_retry"),this.Kc=()=>{const n=Nf();n&&Z("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const e=Nf();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const n=Nf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new dr;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Mc.push(e),this.jc()))}async jc(){if(this.Mc.length!==0){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(e){if(!qa(e))throw e;Z("AsyncQueue","Operation failed with retryable error: "+e)}this.Mc.length>0&&this.So.Io(()=>this.jc())}}Qc(e){const n=this.Oc.then(()=>(this.Lc=!0,e().catch(r=>{this.Bc=r,this.Lc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Sr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Lc=!1,r))));return this.Oc=n,n}enqueueAfterDelay(e,n,r){this.Gc(),this.qc.indexOf(e)>-1&&(n=0);const i=nm.createAndSchedule(this,e,n,r,s=>this.Wc(s));return this.$c.push(i),i}Gc(){this.Bc&&de()}verifyOperationInProgress(){}async zc(){let e;do e=this.Oc,await e;while(e!==this.Oc)}Hc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Jc(e){return this.zc().then(()=>{this.$c.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Yc(e){this.qc.push(e)}Wc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class lm extends am{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new aP,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||xE(this),this._firestoreClient.terminate()}}function lP(t=rp()){return fc(t,"firestore").getImmediate()}function IE(t){return t._firestoreClient||xE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function xE(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new DA(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new XN(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ie(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ks(ct.fromBase64String(e))}catch(n){throw new ie(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ks(ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ie(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ie(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ke(this._lat,e._lat)||ke(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uP=/^__.*__$/;class cP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ki(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ka(e,this.data,n,this.fieldTransforms)}}function AE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw de()}}class fm{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.wt=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Xc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(e){return new fm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ta({path:r,na:!1});return i.sa(e),i}ia(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ta({path:r,na:!1});return i.Xc(),i}ra(e){return this.ta({path:void 0,na:!0})}oa(e){return ku(e,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.sa(this.path.get(e))}sa(e){if(e.length===0)throw this.oa("Document fields must not be empty");if(AE(this.Zc)&&uP.test(e))throw this.oa('Document fields cannot begin and end with "__"')}}class fP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.wt=r||Mc(e)}aa(e,n,r,i=!1){return new fm({Zc:e,methodName:n,ca:r,path:gt.emptyPath(),na:!1,ua:i},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function dP(t){const e=t._freezeSettings(),n=Mc(t._databaseId);return new fP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function hP(t,e,n,r,i,s={}){const o=t.aa(s.merge||s.mergeFields?2:0,e,n,i);DE("Data must be an object, but it was:",o,r);const a=NE(r,o);let l,u;if(s.merge)l=new bn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const f of s.mergeFields){const d=pP(e,f,n);if(!o.contains(d))throw new ie(F.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);gP(c,d)||c.push(d)}l=new bn(c),u=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,u=o.fieldTransforms;return new cP(new Kt(a),l,u)}function RE(t,e){if(PE(t=xt(t)))return DE("Unsupported field value:",e,t),NE(t,e);if(t instanceof OE)return function(n,r){if(!AE(r.Zc))throw r.oa(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.oa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&e.Zc!==4)throw e.oa("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=RE(o,r.ra(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=xt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return tR(r.wt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=We.fromDate(n);return{timestampValue:bu(r.wt,i)}}if(n instanceof We){const i=new We(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:bu(r.wt,i)}}if(n instanceof cm)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ks)return{bytesValue:rE(r.wt,n._byteString)};if(n instanceof an){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.oa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Gp(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.oa(`Unsupported field value: ${om(n)}`)}(t,e)}function NE(t,e){const n={};return P_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):js(t,(r,i)=>{const s=RE(i,e.ea(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function PE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof We||t instanceof cm||t instanceof ks||t instanceof an||t instanceof OE)}function DE(t,e,n){if(!PE(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=om(n);throw r==="an object"?e.oa(t+" a custom object"):e.oa(t+" "+r)}}function pP(t,e,n){if((e=xt(e))instanceof um)return e._internalPath;if(typeof e=="string")return ME(t,e);throw ku("Field path arguments must be of type string or ",t,!1,void 0,n)}const mP=new RegExp("[~\\*/\\[\\]]");function ME(t,e,n){if(e.search(mP)>=0)throw ku(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new um(...e.split("."))._internalPath}catch{throw ku(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ku(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new ie(F.INVALID_ARGUMENT,a+t+l)}function gP(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new an(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new yP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field($E("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class yP extends LE{data(){return super.data()}}function $E(t,e){return typeof e=="string"?ME(t,e):e instanceof um?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class vP extends LE{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Bl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field($E("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Bl extends vP{data(e={}){return super.data(e)}}class wP{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new vl(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Bl(this._firestore,this._userDataWriter,r.key,r,new vl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ie(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new Bl(r._firestore,r._userDataWriter,o.doc.key,o.doc,new vl(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Bl(r._firestore,r._userDataWriter,o.doc.key,o.doc,new vl(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:_P(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function _P(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return de()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ie(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function bP(t,...e){for(const n of e)t=n._apply(t);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SP{convertValue(e,n="none"){switch(pi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return He(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ws(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw de()}}convertObject(e,n){const r={};return js(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new cm(He(e.latitude),He(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=M_(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(oa(e));default:return null}}convertTimestamp(e){const n=Tr(e);return new We(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Pe.fromString(e);xe(aE(r));const i=new _s(r.get(1),r.get(3)),s=new te(r.popFirst(5));return i.isEqual(n)||Sr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kP(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class TP extends SP{constructor(e){super(),this.firestore=e}convertBytes(e){return new ks(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new an(this.firestore,null,n)}}function CP(t){t=jd(t,Fc);const e=jd(t.firestore,lm),n=IE(e),r=new TP(e);return EP(t._query),rP(n,t._query).then(i=>new wP(e,r,t,i))}function IP(t,e){const n=jd(t.firestore,lm),r=oP(t),i=kP(t.converter,e);return xP(n,[hP(dP(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,$n.exists(!1))]).then(()=>r)}function xP(t,e){return function(n,r){const i=new dr;return n.asyncQueue.enqueueAndForget(async()=>UN(await tP(n),r,i)),i.promise}(IE(t),e)}(function(t,e=!0){(function(n){Us=n})(Ps),oi(new br("firestore",(n,{options:r})=>{const i=n.getProvider("app").getImmediate(),s=new lm(i,new EA(n.getProvider("auth-internal")),new TA(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC")),wn(by,"3.4.10",t),wn(by,"3.4.10","esm2017")})();const OP={apiKey:"AIzaSyBIGSitMwae90gp8mJRPuZyZ0jVEVlF8x0",authDomain:"interactive-comments-sec-7758b.firebaseapp.com",projectId:"interactive-comments-sec-7758b",storageBucket:"interactive-comments-sec-7758b.appspot.com",messagingSenderId:"723039941161",appId:"1:723039941161:web:0a655affc64287f664a238",measurementId:"G-1SK65D4MJC"},dm=GT(OP),FE=uO(dm),hm=nx(dm);let sr=null;const Ts="currentUser",Cn=()=>{var e;if(sr)return sr;const t=(e=localStorage.getItem(Ts))!=null?e:sessionStorage.getItem(Ts);return t?(sr=JSON.parse(t),sr):null};async function AP(t,e,n,r,i,s){try{const o=await BC(hm,t,r),a=n?`user_data/${o.user.uid}/profile_picture.${n.name.split(".")[1]}`:"no_pp.png",l=R1(FE,a);n&&await aO(l,n);try{await WC(o.user,{displayName:e,photoURL:l.fullPath}),i(o)}catch(u){s(u)}}catch(o){s(o)}}async function RP(t,e,n,r,i){try{const s=await zC(hm,t,e);r(s);const o=R1(FE,s.user.photoURL),a=await lO(o);sr={uid:s.user.uid,userName:s.user.displayName,profilePictureDownloadURL:a},n?localStorage.setItem(Ts,JSON.stringify(sr)):sessionStorage.setItem(Ts,JSON.stringify(sr))}catch(s){i(s)}}async function NP(){try{await hm.signOut(),sr=null,localStorage.removeItem(Ts),sessionStorage.removeItem(Ts)}catch(t){console.error(t)}}const PP=lP(dm),UE=sP(PP,"comments");async function DP(t,e){try{const n=await IP(UE,{user:Cn(),message:t,date:e,edited:!1,votes:0,replies:null});console.log(n.id)}catch(n){console.error("Error adding comment",n)}}async function MP(){try{const t=await CP(bP(UE)),e=[];return t.forEach(n=>{const r=n.data();e.push({id:n.id,user:r.user,message:r.message,date:r.date,edited:r.edited,votes:r.votes,replies:r.replies})}),e}catch(t){return console.error("Error getting comments",t),null}}var jE={exports:{}};(function(t,e){(function(r,i){t.exports=i(se.exports)})(Ck,n=>(()=>{var r={"./node_modules/css-mediaquery/index.js":(a,l)=>{l.match=_,l.parse=E;var u=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,c=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,f=/^(?:(min|max)-)?(.+)/,d=/(em|rem|px|cm|mm|in|pt|pc)?$/,g=/(dpi|dpcm|dppx)?$/;function _(v,w){return E(v).some(function(C){var T=C.inverse,x=C.type==="all"||w.type===C.type;if(x&&T||!(x||T))return!1;var L=C.expressions.every(function(S){var D=S.feature,B=S.modifier,V=S.value,j=w[D];if(!j)return!1;switch(D){case"orientation":case"scan":return j.toLowerCase()===V.toLowerCase();case"width":case"height":case"device-width":case"device-height":V=m(V),j=m(j);break;case"resolution":V=h(V),j=h(j);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":V=p(V),j=p(j);break;case"grid":case"color":case"color-index":case"monochrome":V=parseInt(V,10)||1,j=parseInt(j,10)||0;break}switch(B){case"min":return j>=V;case"max":return j<=V;default:return j===V}});return L&&!T||!L&&T})}function E(v){return v.split(",").map(function(w){w=w.trim();var C=w.match(u),T=C[1],x=C[2],L=C[3]||"",S={};return S.inverse=!!T&&T.toLowerCase()==="not",S.type=x?x.toLowerCase():"all",L=L.match(/\([^\)]+\)/g)||[],S.expressions=L.map(function(D){var B=D.match(c),V=B[1].toLowerCase().match(f);return{modifier:V[1],feature:V[2],value:B[2]}}),S})}function p(v){var w=Number(v),C;return w||(C=v.match(/^(\d+)\s*\/\s*(\d+)$/),w=C[1]/C[2]),w}function h(v){var w=parseFloat(v),C=String(v).match(g)[1];switch(C){case"dpcm":return w/2.54;case"dppx":return w*96;default:return w}}function m(v){var w=parseFloat(v),C=String(v).match(d)[1];switch(C){case"em":return w*16;case"rem":return w*16;case"cm":return w*96/2.54;case"mm":return w*96/2.54/10;case"in":return w*96;case"pt":return w*72;case"pc":return w*72/12;default:return w}}},"./node_modules/hyphenate-style-name/index.js":(a,l,u)=>{u.r(l),u.d(l,{default:()=>E});var c=/[A-Z]/g,f=/^ms-/,d={};function g(p){return"-"+p.toLowerCase()}function _(p){if(d.hasOwnProperty(p))return d[p];var h=p.replace(c,g);return d[p]=f.test(h)?"-"+h:h}const E=_},"./node_modules/matchmediaquery/index.js":(a,l,u)=>{var c=u("./node_modules/css-mediaquery/index.js").match,f=typeof window!="undefined"?window.matchMedia:null;function d(_,E,p){var h=this;if(f&&!p){var m=f.call(window,_);this.matches=m.matches,this.media=m.media,m.addListener(C)}else this.matches=c(_,E),this.media=_;this.addListener=v,this.removeListener=w,this.dispose=T;function v(x){m&&m.addListener(x)}function w(x){m&&m.removeListener(x)}function C(x){h.matches=x.matches,h.media=x.media}function T(){m&&m.removeListener(C)}}function g(_,E,p){return new d(_,E,p)}a.exports=g},"./node_modules/object-assign/index.js":a=>{/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function f(g){if(g==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(g)}function d(){try{if(!Object.assign)return!1;var g=new String("abc");if(g[5]="de",Object.getOwnPropertyNames(g)[0]==="5")return!1;for(var _={},E=0;E<10;E++)_["_"+String.fromCharCode(E)]=E;var p=Object.getOwnPropertyNames(_).map(function(m){return _[m]});if(p.join("")!=="0123456789")return!1;var h={};return"abcdefghijklmnopqrst".split("").forEach(function(m){h[m]=m}),Object.keys(Object.assign({},h)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}a.exports=d()?Object.assign:function(g,_){for(var E,p=f(g),h,m=1;m<arguments.length;m++){E=Object(arguments[m]);for(var v in E)u.call(E,v)&&(p[v]=E[v]);if(l){h=l(E);for(var w=0;w<h.length;w++)c.call(E,h[w])&&(p[h[w]]=E[h[w]])}}return p}},"./node_modules/prop-types/checkPropTypes.js":(a,l,u)=>{var c=function(){};{var f=u("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),d={},g=u("./node_modules/prop-types/lib/has.js");c=function(E){var p="Warning: "+E;typeof console!="undefined"&&console.error(p);try{throw new Error(p)}catch{}}}function _(E,p,h,m,v){for(var w in E)if(g(E,w)){var C;try{if(typeof E[w]!="function"){var T=Error((m||"React class")+": "+h+" type `"+w+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof E[w]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw T.name="Invariant Violation",T}C=E[w](p,w,m,h,null,f)}catch(L){C=L}if(C&&!(C instanceof Error)&&c((m||"React class")+": type specification of "+h+" `"+w+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof C+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),C instanceof Error&&!(C.message in d)){d[C.message]=!0;var x=v?v():"";c("Failed "+h+" type: "+C.message+(x!=null?x:""))}}}_.resetWarningCache=function(){d={}},a.exports=_},"./node_modules/prop-types/factoryWithTypeCheckers.js":(a,l,u)=>{var c=u("./node_modules/react-is/index.js"),f=u("./node_modules/object-assign/index.js"),d=u("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),g=u("./node_modules/prop-types/lib/has.js"),_=u("./node_modules/prop-types/checkPropTypes.js"),E=function(){};E=function(h){var m="Warning: "+h;typeof console!="undefined"&&console.error(m);try{throw new Error(m)}catch{}};function p(){return null}a.exports=function(h,m){var v=typeof Symbol=="function"&&Symbol.iterator,w="@@iterator";function C(y){var b=y&&(v&&y[v]||y[w]);if(typeof b=="function")return b}var T="<<anonymous>>",x={array:B("array"),bigint:B("bigint"),bool:B("boolean"),func:B("function"),number:B("number"),object:B("object"),string:B("string"),symbol:B("symbol"),any:V(),arrayOf:j,element:z(),elementType:W(),instanceOf:re,node:Me(),objectOf:Q,oneOf:I,oneOfType:Te,shape:J,exact:ae};function L(y,b){return y===b?y!==0||1/y===1/b:y!==y&&b!==b}function S(y,b){this.message=y,this.data=b&&typeof b=="object"?b:{},this.stack=""}S.prototype=Error.prototype;function D(y){var b={},k=0;function R(O,P,X,le,_e,ge,H){if(le=le||T,ge=ge||X,H!==d){if(m){var je=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw je.name="Invariant Violation",je}else if(typeof console!="undefined"){var $t=le+":"+X;!b[$t]&&k<3&&(E("You are manually calling a React.PropTypes validation function for the `"+ge+"` prop on `"+le+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),b[$t]=!0,k++)}}return P[X]==null?O?P[X]===null?new S("The "+_e+" `"+ge+"` is marked as required "+("in `"+le+"`, but its value is `null`.")):new S("The "+_e+" `"+ge+"` is marked as required in "+("`"+le+"`, but its value is `undefined`.")):null:y(P,X,le,_e,ge)}var M=R.bind(null,!1);return M.isRequired=R.bind(null,!0),M}function B(y){function b(k,R,M,O,P,X){var le=k[R],_e=Ue(le);if(_e!==y){var ge=Ke(le);return new S("Invalid "+O+" `"+P+"` of type "+("`"+ge+"` supplied to `"+M+"`, expected ")+("`"+y+"`."),{expectedType:y})}return null}return D(b)}function V(){return D(p)}function j(y){function b(k,R,M,O,P){if(typeof y!="function")return new S("Property `"+P+"` of component `"+M+"` has invalid PropType notation inside arrayOf.");var X=k[R];if(!Array.isArray(X)){var le=Ue(X);return new S("Invalid "+O+" `"+P+"` of type "+("`"+le+"` supplied to `"+M+"`, expected an array."))}for(var _e=0;_e<X.length;_e++){var ge=y(X,_e,M,O,P+"["+_e+"]",d);if(ge instanceof Error)return ge}return null}return D(b)}function z(){function y(b,k,R,M,O){var P=b[k];if(!h(P)){var X=Ue(P);return new S("Invalid "+M+" `"+O+"` of type "+("`"+X+"` supplied to `"+R+"`, expected a single ReactElement."))}return null}return D(y)}function W(){function y(b,k,R,M,O){var P=b[k];if(!c.isValidElementType(P)){var X=Ue(P);return new S("Invalid "+M+" `"+O+"` of type "+("`"+X+"` supplied to `"+R+"`, expected a single ReactElement type."))}return null}return D(y)}function re(y){function b(k,R,M,O,P){if(!(k[R]instanceof y)){var X=y.name||T,le=Ht(k[R]);return new S("Invalid "+O+" `"+P+"` of type "+("`"+le+"` supplied to `"+M+"`, expected ")+("instance of `"+X+"`."))}return null}return D(b)}function I(y){if(!Array.isArray(y))return arguments.length>1?E("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):E("Invalid argument supplied to oneOf, expected an array."),p;function b(k,R,M,O,P){for(var X=k[R],le=0;le<y.length;le++)if(L(X,y[le]))return null;var _e=JSON.stringify(y,function(H,je){var $t=Ke(je);return $t==="symbol"?String(je):je});return new S("Invalid "+O+" `"+P+"` of value `"+String(X)+"` "+("supplied to `"+M+"`, expected one of "+_e+"."))}return D(b)}function Q(y){function b(k,R,M,O,P){if(typeof y!="function")return new S("Property `"+P+"` of component `"+M+"` has invalid PropType notation inside objectOf.");var X=k[R],le=Ue(X);if(le!=="object")return new S("Invalid "+O+" `"+P+"` of type "+("`"+le+"` supplied to `"+M+"`, expected an object."));for(var _e in X)if(g(X,_e)){var ge=y(X,_e,M,O,P+"."+_e,d);if(ge instanceof Error)return ge}return null}return D(b)}function Te(y){if(!Array.isArray(y))return E("Invalid argument supplied to oneOfType, expected an instance of array."),p;for(var b=0;b<y.length;b++){var k=y[b];if(typeof k!="function")return E("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+dn(k)+" at index "+b+"."),p}function R(M,O,P,X,le){for(var _e=[],ge=0;ge<y.length;ge++){var H=y[ge],je=H(M,O,P,X,le,d);if(je==null)return null;je.data&&g(je.data,"expectedType")&&_e.push(je.data.expectedType)}var $t=_e.length>0?", expected one of type ["+_e.join(", ")+"]":"";return new S("Invalid "+X+" `"+le+"` supplied to "+("`"+P+"`"+$t+"."))}return D(R)}function Me(){function y(b,k,R,M,O){return we(b[k])?null:new S("Invalid "+M+" `"+O+"` supplied to "+("`"+R+"`, expected a ReactNode."))}return D(y)}function N(y,b,k,R,M){return new S((y||"React class")+": "+b+" type `"+k+"."+R+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+M+"`.")}function J(y){function b(k,R,M,O,P){var X=k[R],le=Ue(X);if(le!=="object")return new S("Invalid "+O+" `"+P+"` of type `"+le+"` "+("supplied to `"+M+"`, expected `object`."));for(var _e in y){var ge=y[_e];if(typeof ge!="function")return N(M,O,P,_e,Ke(ge));var H=ge(X,_e,M,O,P+"."+_e,d);if(H)return H}return null}return D(b)}function ae(y){function b(k,R,M,O,P){var X=k[R],le=Ue(X);if(le!=="object")return new S("Invalid "+O+" `"+P+"` of type `"+le+"` "+("supplied to `"+M+"`, expected `object`."));var _e=f({},k[R],y);for(var ge in _e){var H=y[ge];if(g(y,ge)&&typeof H!="function")return N(M,O,P,ge,Ke(H));if(!H)return new S("Invalid "+O+" `"+P+"` key `"+ge+"` supplied to `"+M+"`.\nBad object: "+JSON.stringify(k[R],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(y),null,"  "));var je=H(X,ge,M,O,P+"."+ge,d);if(je)return je}return null}return D(b)}function we(y){switch(typeof y){case"number":case"string":case"undefined":return!0;case"boolean":return!y;case"object":if(Array.isArray(y))return y.every(we);if(y===null||h(y))return!0;var b=C(y);if(b){var k=b.call(y),R;if(b!==y.entries){for(;!(R=k.next()).done;)if(!we(R.value))return!1}else for(;!(R=k.next()).done;){var M=R.value;if(M&&!we(M[1]))return!1}}else return!1;return!0;default:return!1}}function Ce(y,b){return y==="symbol"?!0:b?b["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&b instanceof Symbol:!1}function Ue(y){var b=typeof y;return Array.isArray(y)?"array":y instanceof RegExp?"object":Ce(b,y)?"symbol":b}function Ke(y){if(typeof y=="undefined"||y===null)return""+y;var b=Ue(y);if(b==="object"){if(y instanceof Date)return"date";if(y instanceof RegExp)return"regexp"}return b}function dn(y){var b=Ke(y);switch(b){case"array":case"object":return"an "+b;case"boolean":case"date":case"regexp":return"a "+b;default:return b}}function Ht(y){return!y.constructor||!y.constructor.name?T:y.constructor.name}return x.checkPropTypes=_,x.resetWarningCache=_.resetWarningCache,x.PropTypes=x,x}},"./node_modules/prop-types/index.js":(a,l,u)=>{{var c=u("./node_modules/react-is/index.js"),f=!0;a.exports=u("./node_modules/prop-types/factoryWithTypeCheckers.js")(c.isElement,f)}},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":a=>{var l="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";a.exports=l},"./node_modules/prop-types/lib/has.js":a=>{a.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":(a,l)=>{/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var u=typeof Symbol=="function"&&Symbol.for,c=u?Symbol.for("react.element"):60103,f=u?Symbol.for("react.portal"):60106,d=u?Symbol.for("react.fragment"):60107,g=u?Symbol.for("react.strict_mode"):60108,_=u?Symbol.for("react.profiler"):60114,E=u?Symbol.for("react.provider"):60109,p=u?Symbol.for("react.context"):60110,h=u?Symbol.for("react.async_mode"):60111,m=u?Symbol.for("react.concurrent_mode"):60111,v=u?Symbol.for("react.forward_ref"):60112,w=u?Symbol.for("react.suspense"):60113,C=u?Symbol.for("react.suspense_list"):60120,T=u?Symbol.for("react.memo"):60115,x=u?Symbol.for("react.lazy"):60116,L=u?Symbol.for("react.block"):60121,S=u?Symbol.for("react.fundamental"):60117,D=u?Symbol.for("react.responder"):60118,B=u?Symbol.for("react.scope"):60119;function V(H){return typeof H=="string"||typeof H=="function"||H===d||H===m||H===_||H===g||H===w||H===C||typeof H=="object"&&H!==null&&(H.$$typeof===x||H.$$typeof===T||H.$$typeof===E||H.$$typeof===p||H.$$typeof===v||H.$$typeof===S||H.$$typeof===D||H.$$typeof===B||H.$$typeof===L)}function j(H){if(typeof H=="object"&&H!==null){var je=H.$$typeof;switch(je){case c:var $t=H.type;switch($t){case h:case m:case d:case _:case g:case w:return $t;default:var Js=$t&&$t.$$typeof;switch(Js){case p:case v:case x:case T:case E:return Js;default:return je}}case f:return je}}}var z=h,W=m,re=p,I=E,Q=c,Te=v,Me=d,N=x,J=T,ae=f,we=_,Ce=g,Ue=w,Ke=!1;function dn(H){return Ke||(Ke=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),Ht(H)||j(H)===h}function Ht(H){return j(H)===m}function y(H){return j(H)===p}function b(H){return j(H)===E}function k(H){return typeof H=="object"&&H!==null&&H.$$typeof===c}function R(H){return j(H)===v}function M(H){return j(H)===d}function O(H){return j(H)===x}function P(H){return j(H)===T}function X(H){return j(H)===f}function le(H){return j(H)===_}function _e(H){return j(H)===g}function ge(H){return j(H)===w}l.AsyncMode=z,l.ConcurrentMode=W,l.ContextConsumer=re,l.ContextProvider=I,l.Element=Q,l.ForwardRef=Te,l.Fragment=Me,l.Lazy=N,l.Memo=J,l.Portal=ae,l.Profiler=we,l.StrictMode=Ce,l.Suspense=Ue,l.isAsyncMode=dn,l.isConcurrentMode=Ht,l.isContextConsumer=y,l.isContextProvider=b,l.isElement=k,l.isForwardRef=R,l.isFragment=M,l.isLazy=O,l.isMemo=P,l.isPortal=X,l.isProfiler=le,l.isStrictMode=_e,l.isSuspense=ge,l.isValidElementType=V,l.typeOf=j})()},"./node_modules/react-is/index.js":(a,l,u)=>{a.exports=u("./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":(a,l,u)=>{u.r(l),u.d(l,{shallowEqualArrays:()=>f,shallowEqualObjects:()=>c});function c(d,g){if(d===g)return!0;if(!d||!g)return!1;var _=Object.keys(d),E=Object.keys(g),p=_.length;if(E.length!==p)return!1;for(var h=0;h<p;h++){var m=_[h];if(d[m]!==g[m]||!Object.prototype.hasOwnProperty.call(g,m))return!1}return!0}function f(d,g){if(d===g)return!0;if(!d||!g)return!1;var _=d.length;if(g.length!==_)return!1;for(var E=0;E<_;E++)if(d[E]!==g[E])return!1;return!0}},"./src/Component.ts":function(a,l,u){var c=this&&this.__rest||function(_,E){var p={};for(var h in _)Object.prototype.hasOwnProperty.call(_,h)&&E.indexOf(h)<0&&(p[h]=_[h]);if(_!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,h=Object.getOwnPropertySymbols(_);m<h.length;m++)E.indexOf(h[m])<0&&Object.prototype.propertyIsEnumerable.call(_,h[m])&&(p[h[m]]=_[h[m]]);return p},f=this&&this.__importDefault||function(_){return _&&_.__esModule?_:{default:_}};Object.defineProperty(l,"__esModule",{value:!0});var d=f(u("./src/useMediaQuery.ts")),g=function(_){var E=_.children,p=_.device,h=_.onChange,m=c(_,["children","device","onChange"]),v=(0,d.default)(m,p,h);return typeof E=="function"?E(v):v?E:null};l.default=g},"./src/Context.ts":(a,l,u)=>{Object.defineProperty(l,"__esModule",{value:!0});var c=u("react"),f=(0,c.createContext)(void 0);l.default=f},"./src/index.ts":function(a,l,u){var c=this&&this.__importDefault||function(E){return E&&E.__esModule?E:{default:E}};Object.defineProperty(l,"__esModule",{value:!0}),l.Context=l.toQuery=l.useMediaQuery=l.default=void 0;var f=c(u("./src/useMediaQuery.ts"));l.useMediaQuery=f.default;var d=c(u("./src/Component.ts"));l.default=d.default;var g=c(u("./src/toQuery.ts"));l.toQuery=g.default;var _=c(u("./src/Context.ts"));l.Context=_.default},"./src/mediaQuery.ts":function(a,l,u){var c=this&&this.__assign||function(){return c=Object.assign||function(w){for(var C,T=1,x=arguments.length;T<x;T++){C=arguments[T];for(var L in C)Object.prototype.hasOwnProperty.call(C,L)&&(w[L]=C[L])}return w},c.apply(this,arguments)},f=this&&this.__rest||function(w,C){var T={};for(var x in w)Object.prototype.hasOwnProperty.call(w,x)&&C.indexOf(x)<0&&(T[x]=w[x]);if(w!=null&&typeof Object.getOwnPropertySymbols=="function")for(var L=0,x=Object.getOwnPropertySymbols(w);L<x.length;L++)C.indexOf(x[L])<0&&Object.prototype.propertyIsEnumerable.call(w,x[L])&&(T[x[L]]=w[x[L]]);return T},d=this&&this.__importDefault||function(w){return w&&w.__esModule?w:{default:w}};Object.defineProperty(l,"__esModule",{value:!0});var g=d(u("./node_modules/prop-types/index.js")),_=g.default.oneOfType([g.default.string,g.default.number]),E={all:g.default.bool,grid:g.default.bool,aural:g.default.bool,braille:g.default.bool,handheld:g.default.bool,print:g.default.bool,projection:g.default.bool,screen:g.default.bool,tty:g.default.bool,tv:g.default.bool,embossed:g.default.bool},p={orientation:g.default.oneOf(["portrait","landscape"]),scan:g.default.oneOf(["progressive","interlace"]),aspectRatio:g.default.string,deviceAspectRatio:g.default.string,height:_,deviceHeight:_,width:_,deviceWidth:_,color:g.default.bool,colorIndex:g.default.bool,monochrome:g.default.bool,resolution:_,type:Object.keys(E)};p.type;var h=f(p,["type"]),m=c({minAspectRatio:g.default.string,maxAspectRatio:g.default.string,minDeviceAspectRatio:g.default.string,maxDeviceAspectRatio:g.default.string,minHeight:_,maxHeight:_,minDeviceHeight:_,maxDeviceHeight:_,minWidth:_,maxWidth:_,minDeviceWidth:_,maxDeviceWidth:_,minColor:g.default.number,maxColor:g.default.number,minColorIndex:g.default.number,maxColorIndex:g.default.number,minMonochrome:g.default.number,maxMonochrome:g.default.number,minResolution:_,maxResolution:_},h),v=c(c({},E),m);l.default={all:v,types:E,matchers:p,features:m}},"./src/toQuery.ts":function(a,l,u){var c=this&&this.__importDefault||function(h){return h&&h.__esModule?h:{default:h}};Object.defineProperty(l,"__esModule",{value:!0});var f=c(u("./node_modules/hyphenate-style-name/index.js")),d=c(u("./src/mediaQuery.ts")),g=function(h){return"not ".concat(h)},_=function(h,m){var v=(0,f.default)(h);return typeof m=="number"&&(m="".concat(m,"px")),m===!0?v:m===!1?g(v):"(".concat(v,": ").concat(m,")")},E=function(h){return h.join(" and ")},p=function(h){var m=[];return Object.keys(d.default.all).forEach(function(v){var w=h[v];w!=null&&m.push(_(v,w))}),E(m)};l.default=p},"./src/useMediaQuery.ts":function(a,l,u){var c=this&&this.__importDefault||function(S){return S&&S.__esModule?S:{default:S}};Object.defineProperty(l,"__esModule",{value:!0});var f=u("react"),d=c(u("./node_modules/matchmediaquery/index.js")),g=c(u("./node_modules/hyphenate-style-name/index.js")),_=u("./node_modules/shallow-equal/dist/index.esm.js"),E=c(u("./src/toQuery.ts")),p=c(u("./src/Context.ts")),h=function(S){return S.query||(0,E.default)(S)},m=function(S){if(!!S){var D=Object.keys(S);return D.reduce(function(B,V){return B[(0,g.default)(V)]=S[V],B},{})}},v=function(){var S=(0,f.useRef)(!1);return(0,f.useEffect)(function(){S.current=!0},[]),S.current},w=function(S){var D=(0,f.useContext)(p.default),B=function(){return m(S)||m(D)},V=(0,f.useState)(B),j=V[0],z=V[1];return(0,f.useEffect)(function(){var W=B();(0,_.shallowEqualObjects)(j,W)||z(W)},[S,D]),j},C=function(S){var D=function(){return h(S)},B=(0,f.useState)(D),V=B[0],j=B[1];return(0,f.useEffect)(function(){var z=D();V!==z&&j(z)},[S]),V},T=function(S,D){var B=function(){return(0,d.default)(S,D||{},!!D)},V=(0,f.useState)(B),j=V[0],z=V[1],W=v();return(0,f.useEffect)(function(){if(W){var re=B();return z(re),function(){re&&re.dispose()}}},[S,D]),j},x=function(S){var D=(0,f.useState)(S.matches),B=D[0],V=D[1];return(0,f.useEffect)(function(){var j=function(z){V(z.matches)};return S.addListener(j),V(S.matches),function(){S.removeListener(j)}},[S]),B},L=function(S,D,B){var V=w(D),j=C(S);if(!j)throw new Error("Invalid or missing MediaQuery!");var z=T(j,V),W=x(z),re=v();return(0,f.useEffect)(function(){re&&B&&B(W)},[W]),(0,f.useEffect)(function(){return function(){z&&z.dispose()}},[]),W};l.default=L},react:a=>{a.exports=n}},i={};function s(a){var l=i[a];if(l!==void 0)return l.exports;var u=i[a]={exports:{}};return r[a].call(u.exports,u,u.exports,s),u.exports}s.d=(a,l)=>{for(var u in l)s.o(l,u)&&!s.o(a,u)&&Object.defineProperty(a,u,{enumerable:!0,get:l[u]})},s.o=(a,l)=>Object.prototype.hasOwnProperty.call(a,l),s.r=a=>{typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})};var o=s("./src/index.ts");return o})())})(jE);var zr=hw(jE.exports);/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function Jy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function q(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Jy(Object(n),!0).forEach(function(r){FP(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Jy(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Tu(t){return Tu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Tu(t)}function LP(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Zy(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function $P(t,e,n){return e&&Zy(t.prototype,e),n&&Zy(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function FP(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function pm(t,e){return jP(t)||BP(t,e)||VE(t,e)||HP()}function Uc(t){return UP(t)||VP(t)||VE(t)||zP()}function UP(t){if(Array.isArray(t))return Vd(t)}function jP(t){if(Array.isArray(t))return t}function VP(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function BP(t,e){var n=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function VE(t,e){if(!!t){if(typeof t=="string")return Vd(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Vd(t,e)}}function Vd(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function zP(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function HP(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ev=function(){},mm={},BE={},zE=null,HE={mark:ev,measure:ev};try{typeof window!="undefined"&&(mm=window),typeof document!="undefined"&&(BE=document),typeof MutationObserver!="undefined"&&(zE=MutationObserver),typeof performance!="undefined"&&(HE=performance)}catch{}var WP=mm.navigator||{},tv=WP.userAgent,nv=tv===void 0?"":tv,Ir=mm,Ae=BE,rv=zE,wl=HE;Ir.document;var Gn=!!Ae.documentElement&&!!Ae.head&&typeof Ae.addEventListener=="function"&&typeof Ae.createElement=="function",WE=~nv.indexOf("MSIE")||~nv.indexOf("Trident/"),zn="___FONT_AWESOME___",Bd=16,qE="fa",KE="svg-inline--fa",gi="data-fa-i2svg",zd="data-fa-pseudo-element",qP="data-fa-pseudo-element-pending",gm="data-prefix",ym="data-icon",iv="fontawesome-i2svg",KP="async",GP=["HTML","HEAD","STYLE","SCRIPT"],GE=function(){try{return!0}catch{return!1}}(),vm={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},Cu={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},YE={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},YP={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},QP=/fa[srltdbk\-\ ]/,QE="fa-layers-text",XP=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,JP={"900":"fas","400":"far",normal:"far","300":"fal","100":"fat"},XE=[1,2,3,4,5,6,7,8,9,10],ZP=XE.concat([11,12,13,14,15,16,17,18,19,20]),e2=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Gr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},t2=[].concat(Uc(Object.keys(Cu)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Gr.GROUP,Gr.SWAP_OPACITY,Gr.PRIMARY,Gr.SECONDARY]).concat(XE.map(function(t){return"".concat(t,"x")})).concat(ZP.map(function(t){return"w-".concat(t)})),JE=Ir.FontAwesomeConfig||{};function n2(t){var e=Ae.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function r2(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Ae&&typeof Ae.querySelector=="function"){var i2=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];i2.forEach(function(t){var e=pm(t,2),n=e[0],r=e[1],i=r2(n2(n));i!=null&&(JE[r]=i)})}var s2={familyPrefix:qE,styleDefault:"solid",replacementClass:KE,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Po=q(q({},s2),JE);Po.autoReplaceSvg||(Po.observeMutations=!1);var ne={};Object.keys(Po).forEach(function(t){Object.defineProperty(ne,t,{enumerable:!0,set:function(n){Po[t]=n,zl.forEach(function(r){return r(ne)})},get:function(){return Po[t]}})});Ir.FontAwesomeConfig=ne;var zl=[];function o2(t){return zl.push(t),function(){zl.splice(zl.indexOf(t),1)}}var Qn=Bd,pn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function a2(t){if(!(!t||!Gn)){var e=Ae.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Ae.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Ae.head.insertBefore(e,r),t}}var l2="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function fa(){for(var t=12,e="";t-- >0;)e+=l2[Math.random()*62|0];return e}function zs(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function wm(t){return t.classList?zs(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function ZE(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function u2(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(ZE(t[n]),'" ')},"").trim()}function jc(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function _m(t){return t.size!==pn.size||t.x!==pn.x||t.y!==pn.y||t.rotate!==pn.rotate||t.flipX||t.flipY}function c2(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function f2(t){var e=t.transform,n=t.width,r=n===void 0?Bd:n,i=t.height,s=i===void 0?Bd:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&WE?l+="translate(".concat(e.x/Qn-r/2,"em, ").concat(e.y/Qn-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/Qn,"em), calc(-50% + ").concat(e.y/Qn,"em)) "):l+="translate(".concat(e.x/Qn,"em, ").concat(e.y/Qn,"em) "),l+="scale(".concat(e.size/Qn*(e.flipX?-1:1),", ").concat(e.size/Qn*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var d2=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function eb(){var t=qE,e=KE,n=ne.familyPrefix,r=ne.replacementClass,i=d2;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var sv=!1;function Pf(){ne.autoAddCss&&!sv&&(a2(eb()),sv=!0)}var h2={mixout:function(){return{dom:{css:eb,insertCss:Pf}}},hooks:function(){return{beforeDOMElementCreation:function(){Pf()},beforeI2svg:function(){Pf()}}}},Hn=Ir||{};Hn[zn]||(Hn[zn]={});Hn[zn].styles||(Hn[zn].styles={});Hn[zn].hooks||(Hn[zn].hooks={});Hn[zn].shims||(Hn[zn].shims=[]);var sn=Hn[zn],tb=[],p2=function t(){Ae.removeEventListener("DOMContentLoaded",t),Iu=1,tb.map(function(e){return e()})},Iu=!1;Gn&&(Iu=(Ae.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ae.readyState),Iu||Ae.addEventListener("DOMContentLoaded",p2));function m2(t){!Gn||(Iu?setTimeout(t,0):tb.push(t))}function Xa(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?ZE(t):"<".concat(e," ").concat(u2(r),">").concat(s.map(Xa).join(""),"</").concat(e,">")}function ov(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var g2=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},Df=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?g2(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function y2(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Hd(t){var e=y2(t);return e.length===1?e[0].toString(16):null}function v2(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function av(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Wd(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=av(e);typeof sn.hooks.addPack=="function"&&!i?sn.hooks.addPack(t,av(e)):sn.styles[t]=q(q({},sn.styles[t]||{}),s),t==="fas"&&Wd("fa",e)}var Do=sn.styles,w2=sn.shims,_2=Object.values(YE),Em=null,nb={},rb={},ib={},sb={},ob={},E2=Object.keys(vm);function b2(t){return~t2.indexOf(t)}function S2(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!b2(i)?i:null}var ab=function(){var e=function(s){return Df(Do,function(o,a,l){return o[l]=Df(a,s,{}),o},{})};nb=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),rb=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),ob=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in Do||ne.autoFetchSvg,r=Df(w2,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});ib=r.names,sb=r.unicodes,Em=Vc(ne.styleDefault)};o2(function(t){Em=Vc(t.styleDefault)});ab();function bm(t,e){return(nb[t]||{})[e]}function k2(t,e){return(rb[t]||{})[e]}function Bi(t,e){return(ob[t]||{})[e]}function lb(t){return ib[t]||{prefix:null,iconName:null}}function T2(t){var e=sb[t],n=bm("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function xr(){return Em}var Sm=function(){return{prefix:null,iconName:null,rest:[]}};function Vc(t){var e=vm[t],n=Cu[t]||Cu[e],r=t in sn.styles?t:null;return n||r||null}function Bc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.skipLookups,r=n===void 0?!1:n,i=null,s=t.reduce(function(o,a){var l=S2(ne.familyPrefix,a);if(Do[a]?(a=_2.includes(a)?YP[a]:a,i=a,o.prefix=a):E2.indexOf(a)>-1?(i=a,o.prefix=Vc(a)):l?o.iconName=l:a!==ne.replacementClass&&o.rest.push(a),!r&&o.prefix&&o.iconName){var u=i==="fa"?lb(o.iconName):{},c=Bi(o.prefix,o.iconName);u.prefix&&(i=null),o.iconName=u.iconName||c||o.iconName,o.prefix=u.prefix||o.prefix,o.prefix==="far"&&!Do.far&&Do.fas&&!ne.autoFetchSvg&&(o.prefix="fas")}return o},Sm());return(s.prefix==="fa"||i==="fa")&&(s.prefix=xr()||"fas"),s}var C2=function(){function t(){LP(this,t),this.definitions={}}return $P(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=q(q({},n.definitions[a]||{}),o[a]),Wd(a,o[a]);var l=YE[a];l&&Wd(l,o[a]),ab()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[a][f]=u)}),n[a][l]=u}),n}}]),t}(),lv=[],zi={},ss={},I2=Object.keys(ss);function x2(t,e){var n=e.mixoutsTo;return lv=t,zi={},Object.keys(ss).forEach(function(r){I2.indexOf(r)===-1&&delete ss[r]}),lv.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Tu(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){zi[o]||(zi[o]=[]),zi[o].push(s[o])})}r.provides&&r.provides(ss)}),n}function qd(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=zi[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function yi(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=zi[t]||[];i.forEach(function(s){s.apply(null,n)})}function Wn(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return ss[t]?ss[t].apply(null,e):void 0}function Kd(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||xr();if(!!e)return e=Bi(n,e)||e,ov(ub.definitions,n,e)||ov(sn.styles,n,e)}var ub=new C2,O2=function(){ne.autoReplaceSvg=!1,ne.observeMutations=!1,yi("noAuto")},A2={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Gn?(yi("beforeI2svg",e),Wn("pseudoElements2svg",e),Wn("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;ne.autoReplaceSvg===!1&&(ne.autoReplaceSvg=!0),ne.observeMutations=!0,m2(function(){N2({autoReplaceSvgRoot:n}),yi("watch",e)})}},R2={icon:function(e){if(e===null)return null;if(Tu(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Bi(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Vc(e[0]);return{prefix:r,iconName:Bi(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(ne.familyPrefix,"-"))>-1||e.match(QP))){var i=Bc(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||xr(),iconName:Bi(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=xr();return{prefix:s,iconName:Bi(s,e)||e}}}},Bt={noAuto:O2,config:ne,dom:A2,parse:R2,library:ub,findIconDefinition:Kd,toHtml:Xa},N2=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?Ae:n;(Object.keys(sn.styles).length>0||ne.autoFetchSvg)&&Gn&&ne.autoReplaceSvg&&Bt.dom.i2svg({node:r})};function zc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Xa(r)})}}),Object.defineProperty(t,"node",{get:function(){if(!!Gn){var r=Ae.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function P2(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(_m(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=jc(q(q({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function D2(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(ne.familyPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:q(q({},i),{},{id:o}),children:r}]}]}function km(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,f=t.extra,d=t.watchable,g=d===void 0?!1:d,_=r.found?r:n,E=_.width,p=_.height,h=i==="fak",m=[ne.replacementClass,s?"".concat(ne.familyPrefix,"-").concat(s):""].filter(function(S){return f.classes.indexOf(S)===-1}).filter(function(S){return S!==""||!!S}).concat(f.classes).join(" "),v={children:[],attributes:q(q({},f.attributes),{},{"data-prefix":i,"data-icon":s,class:m,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(E," ").concat(p)})},w=h&&!~f.classes.indexOf("fa-fw")?{width:"".concat(E/p*16*.0625,"em")}:{};g&&(v.attributes[gi]=""),l&&(v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(c||fa())},children:[l]}),delete v.attributes.title);var C=q(q({},v),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:q(q({},w),f.styles)}),T=r.found&&n.found?Wn("generateAbstractMask",C)||{children:[],attributes:{}}:Wn("generateAbstractIcon",C)||{children:[],attributes:{}},x=T.children,L=T.attributes;return C.children=x,C.attributes=L,a?D2(C):P2(C)}function uv(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=q(q(q({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[gi]="");var c=q({},o.styles);_m(i)&&(c.transform=f2({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=jc(c);f.length>0&&(u.style=f);var d=[];return d.push({tag:"span",attributes:u,children:[e]}),s&&d.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),d}function M2(t){var e=t.content,n=t.title,r=t.extra,i=q(q(q({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=jc(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Mf=sn.styles;function Gd(t){var e=t[0],n=t[1],r=t.slice(4),i=pm(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(ne.familyPrefix,"-").concat(Gr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(ne.familyPrefix,"-").concat(Gr.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(ne.familyPrefix,"-").concat(Gr.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var L2={found:!1,width:512,height:512};function $2(t,e){!GE&&!ne.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Yd(t,e){var n=e;return e==="fa"&&ne.styleDefault!==null&&(e=xr()),new Promise(function(r,i){if(Wn("missingIconAbstract"),n==="fa"){var s=lb(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Mf[e]&&Mf[e][t]){var o=Mf[e][t];return r(Gd(o))}$2(t,e),r(q(q({},L2),{},{icon:ne.showMissingIcons&&t?Wn("missingIconAbstract")||{}:{}}))})}var cv=function(){},Qd=ne.measurePerformance&&wl&&wl.mark&&wl.measure?wl:{mark:cv,measure:cv},wo='FA "6.1.1"',F2=function(e){return Qd.mark("".concat(wo," ").concat(e," begins")),function(){return cb(e)}},cb=function(e){Qd.mark("".concat(wo," ").concat(e," ends")),Qd.measure("".concat(wo," ").concat(e),"".concat(wo," ").concat(e," begins"),"".concat(wo," ").concat(e," ends"))},Tm={begin:F2,end:cb},Hl=function(){};function fv(t){var e=t.getAttribute?t.getAttribute(gi):null;return typeof e=="string"}function U2(t){var e=t.getAttribute?t.getAttribute(gm):null,n=t.getAttribute?t.getAttribute(ym):null;return e&&n}function j2(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(ne.replacementClass)}function V2(){if(ne.autoReplaceSvg===!0)return Wl.replace;var t=Wl[ne.autoReplaceSvg];return t||Wl.replace}function B2(t){return Ae.createElementNS("http://www.w3.org/2000/svg",t)}function z2(t){return Ae.createElement(t)}function fb(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?B2:z2:n;if(typeof t=="string")return Ae.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(fb(o,{ceFn:r}))}),i}function H2(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Wl={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(fb(i),n)}),n.getAttribute(gi)===null&&ne.keepOriginalSource){var r=Ae.createComment(H2(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~wm(n).indexOf(ne.replacementClass))return Wl.replace(e);var i=new RegExp("".concat(ne.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===ne.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Xa(a)}).join(`
`);n.setAttribute(gi,""),n.innerHTML=o}};function dv(t){t()}function db(t,e){var n=typeof e=="function"?e:Hl;if(t.length===0)n();else{var r=dv;ne.mutateApproach===KP&&(r=Ir.requestAnimationFrame||dv),r(function(){var i=V2(),s=Tm.begin("mutate");t.map(i),s(),n()})}}var Cm=!1;function hb(){Cm=!0}function Xd(){Cm=!1}var xu=null;function hv(t){if(!!rv&&!!ne.observeMutations){var e=t.treeCallback,n=e===void 0?Hl:e,r=t.nodeCallback,i=r===void 0?Hl:r,s=t.pseudoElementsCallback,o=s===void 0?Hl:s,a=t.observeMutationsRoot,l=a===void 0?Ae:a;xu=new rv(function(u){if(!Cm){var c=xr();zs(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!fv(f.addedNodes[0])&&(ne.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&ne.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&fv(f.target)&&~e2.indexOf(f.attributeName))if(f.attributeName==="class"&&U2(f.target)){var d=Bc(wm(f.target)),g=d.prefix,_=d.iconName;f.target.setAttribute(gm,g||c),_&&f.target.setAttribute(ym,_)}else j2(f.target)&&i(f.target)})}}),Gn&&xu.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function W2(){!xu||xu.disconnect()}function q2(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function K2(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Bc(wm(t));return i.prefix||(i.prefix=xr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||i.prefix&&r.length>0&&(i.iconName=k2(i.prefix,t.innerText)||bm(i.prefix,Hd(t.innerText))),i}function G2(t){var e=zs(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return ne.autoA11y&&(n?e["aria-labelledby"]="".concat(ne.replacementClass,"-title-").concat(r||fa()):(e["aria-hidden"]="true",e.focusable="false")),e}function Y2(){return{iconName:null,title:null,titleId:null,prefix:null,transform:pn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function pv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=K2(t),r=n.iconName,i=n.prefix,s=n.rest,o=G2(t),a=qd("parseNodeAttributes",{},t),l=e.styleParser?q2(t):[];return q({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:pn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var Q2=sn.styles;function pb(t){var e=ne.autoReplaceSvg==="nest"?pv(t,{styleParser:!1}):pv(t);return~e.extra.classes.indexOf(QE)?Wn("generateLayersText",t,e):Wn("generateSvgReplacementMutation",t,e)}function mv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Gn)return Promise.resolve();var n=Ae.documentElement.classList,r=function(f){return n.add("".concat(iv,"-").concat(f))},i=function(f){return n.remove("".concat(iv,"-").concat(f))},s=ne.autoFetchSvg?Object.keys(vm):Object.keys(Q2),o=[".".concat(QE,":not([").concat(gi,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(gi,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=zs(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Tm.begin("onTree"),u=a.reduce(function(c,f){try{var d=pb(f);d&&c.push(d)}catch(g){GE||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(d){db(d,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(d){l(),f(d)})})}function X2(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;pb(t).then(function(n){n&&db([n],e)})}function J2(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Kd(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Kd(i||{})),t(r,q(q({},n),{},{mask:i}))}}var Z2=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?pn:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,f=n.title,d=f===void 0?null:f,g=n.titleId,_=g===void 0?null:g,E=n.classes,p=E===void 0?[]:E,h=n.attributes,m=h===void 0?{}:h,v=n.styles,w=v===void 0?{}:v;if(!!e){var C=e.prefix,T=e.iconName,x=e.icon;return zc(q({type:"icon"},e),function(){return yi("beforeDOMElementCreation",{iconDefinition:e,params:n}),ne.autoA11y&&(d?m["aria-labelledby"]="".concat(ne.replacementClass,"-title-").concat(_||fa()):(m["aria-hidden"]="true",m.focusable="false")),km({icons:{main:Gd(x),mask:l?Gd(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:T,transform:q(q({},pn),i),symbol:o,title:d,maskId:c,titleId:_,extra:{attributes:m,styles:w,classes:p}})})}},eD={mixout:function(){return{icon:J2(Z2)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=mv,n.nodeCallback=X2,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?Ae:r,s=n.callback,o=s===void 0?function(){}:s;return mv(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,d=r.extra;return new Promise(function(g,_){Promise.all([Yd(i,a),c.iconName?Yd(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(E){var p=pm(E,2),h=p[0],m=p[1];g([n,km({icons:{main:h,mask:m},prefix:a,iconName:i,transform:l,symbol:u,maskId:f,title:s,titleId:o,extra:d,watchable:!0})])}).catch(_)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=jc(a);l.length>0&&(i.style=l);var u;return _m(o)&&(u=Wn("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},tD={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return zc({type:"layer"},function(){yi("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(ne.familyPrefix,"-layers")].concat(Uc(s)).join(" ")},children:o}]})}}}},nD={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return zc({type:"counter",content:n},function(){return yi("beforeDOMElementCreation",{content:n,params:r}),M2({content:n.toString(),title:s,extra:{attributes:u,styles:f,classes:["".concat(ne.familyPrefix,"-layers-counter")].concat(Uc(a))}})})}}}},rD={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?pn:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,d=r.styles,g=d===void 0?{}:d;return zc({type:"text",content:n},function(){return yi("beforeDOMElementCreation",{content:n,params:r}),uv({content:n,transform:q(q({},pn),s),title:a,extra:{attributes:f,styles:g,classes:["".concat(ne.familyPrefix,"-layers-text")].concat(Uc(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(WE){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return ne.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,uv({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},iD=new RegExp('"',"ug"),gv=[1105920,1112319];function sD(t){var e=t.replace(iD,""),n=v2(e,0),r=n>=gv[0]&&n<=gv[1],i=e.length===2?e[0]===e[1]:!1;return{value:Hd(i?e[0]:e),isSecondary:r||i}}function yv(t,e){var n="".concat(qP).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=zs(t.children),o=s.filter(function(T){return T.getAttribute(zd)===e})[0],a=Ir.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(XP),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var f=a.getPropertyValue("content"),d=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Cu[l[2].toLowerCase()]:JP[u],g=sD(f),_=g.value,E=g.isSecondary,p=l[0].startsWith("FontAwesome"),h=bm(d,_),m=h;if(p){var v=T2(_);v.iconName&&v.prefix&&(h=v.iconName,d=v.prefix)}if(h&&!E&&(!o||o.getAttribute(gm)!==d||o.getAttribute(ym)!==m)){t.setAttribute(n,m),o&&t.removeChild(o);var w=Y2(),C=w.extra;C.attributes[zd]=e,Yd(h,d).then(function(T){var x=km(q(q({},w),{},{icons:{main:T,mask:Sm()},prefix:d,iconName:m,extra:C,watchable:!0})),L=Ae.createElement("svg");e==="::before"?t.insertBefore(L,t.firstChild):t.appendChild(L),L.outerHTML=x.map(function(S){return Xa(S)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function oD(t){return Promise.all([yv(t,"::before"),yv(t,"::after")])}function aD(t){return t.parentNode!==document.head&&!~GP.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(zd)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function vv(t){if(!!Gn)return new Promise(function(e,n){var r=zs(t.querySelectorAll("*")).filter(aD).map(oD),i=Tm.begin("searchPseudoElements");hb(),Promise.all(r).then(function(){i(),Xd(),e()}).catch(function(){i(),Xd(),n()})})}var lD={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=vv,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Ae:r;ne.searchPseudoElements&&vv(i)}}},wv=!1,uD={mixout:function(){return{dom:{unwatch:function(){hb(),wv=!0}}}},hooks:function(){return{bootstrap:function(){hv(qd("mutationObserverCallbacks",{}))},noAuto:function(){W2()},watch:function(n){var r=n.observeMutationsRoot;wv?Xd():hv(qd("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},_v=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},cD={mixout:function(){return{parse:{transform:function(n){return _v(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=_v(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},d={transform:"translate(".concat(o/2*-1," -256)")},g={outer:a,inner:f,path:d};return{tag:"g",attributes:q({},g.outer),children:[{tag:"g",attributes:q({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:q(q({},r.icon.attributes),g.path)}]}]}}}},Lf={x:0,y:0,width:"100%",height:"100%"};function Ev(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function fD(t){return t.tag==="g"?t.children:[t]}var dD={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Bc(i.split(" ").map(function(o){return o.trim()})):Sm();return s.prefix||(s.prefix=xr()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,f=o.width,d=o.icon,g=c2({transform:l,containerWidth:f,iconWidth:u}),_={tag:"rect",attributes:q(q({},Lf),{},{fill:"white"})},E=c.children?{children:c.children.map(Ev)}:{},p={tag:"g",attributes:q({},g.inner),children:[Ev(q({tag:c.tag,attributes:q(q({},c.attributes),g.path)},E))]},h={tag:"g",attributes:q({},g.outer),children:[p]},m="mask-".concat(a||fa()),v="clip-".concat(a||fa()),w={tag:"mask",attributes:q(q({},Lf),{},{id:m,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[_,h]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:fD(d)},w]};return r.push(C,{tag:"rect",attributes:q({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(m,")")},Lf)}),{children:r,attributes:i}}}},hD={provides:function(e){var n=!1;Ir.matchMedia&&(n=Ir.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:q(q({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=q(q({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:q(q({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:q(q({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:q(q({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:q(q({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:q(q({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:q(q({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:q(q({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},pD={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},mD=[h2,eD,tD,nD,rD,lD,uD,cD,dD,hD,pD];x2(mD,{mixoutsTo:Bt});Bt.noAuto;Bt.config;Bt.library;Bt.dom;var Jd=Bt.parse;Bt.findIconDefinition;Bt.toHtml;var gD=Bt.icon;Bt.layer;Bt.text;Bt.counter;var Hc={exports:{}},yD="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",vD=yD,wD=vD;function mb(){}function gb(){}gb.resetWarningCache=mb;var _D=function(){function t(r,i,s,o,a,l){if(l!==wD){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:gb,resetWarningCache:mb};return n.PropTypes=n,n};Hc.exports=_D();var ye=Hc.exports;function bv(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function or(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?bv(Object(n),!0).forEach(function(r){Hi(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):bv(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Ou(t){return Ou=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ou(t)}function Hi(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ED(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function yb(t,e){if(t==null)return{};var n=ED(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(n[r]=t[r]))}return n}function Zd(t){return bD(t)||SD(t)||kD(t)||TD()}function bD(t){if(Array.isArray(t))return eh(t)}function SD(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function kD(t,e){if(!!t){if(typeof t=="string")return eh(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return eh(t,e)}}function eh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function TD(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function CD(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,f=t.pulse,d=t.fixedWidth,g=t.inverse,_=t.border,E=t.listItem,p=t.flip,h=t.size,m=t.rotation,v=t.pull,w=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":d,"fa-inverse":g,"fa-border":_,"fa-li":E,"fa-flip-horizontal":p==="horizontal"||p==="both","fa-flip-vertical":p==="vertical"||p==="both"},Hi(e,"fa-".concat(h),typeof h!="undefined"&&h!==null),Hi(e,"fa-rotate-".concat(m),typeof m!="undefined"&&m!==null&&m!==0),Hi(e,"fa-pull-".concat(v),typeof v!="undefined"&&v!==null),Hi(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(w).map(function(C){return w[C]?C:null}).filter(function(C){return C})}function ID(t){return t=t-0,t===t}function vb(t){return ID(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var xD=["style"];function OD(t){return t.charAt(0).toUpperCase()+t.slice(1)}function AD(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=vb(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[OD(i)]=s:e[i]=s,e},{})}function wb(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return wb(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=AD(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[vb(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=yb(n,xD);return i.attrs.style=or(or({},i.attrs.style),o),t.apply(void 0,[e.tag,or(or({},i.attrs),a)].concat(Zd(r)))}var _b=!1;try{_b=!0}catch{}function RD(){if(!_b&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Sv(t){if(t&&Ou(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Jd.icon)return Jd.icon(t);if(t===null)return null;if(t&&Ou(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function $f(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Hi({},t,e):{}}var ND=["forwardedRef"];function Hs(t){var e=t.forwardedRef,n=yb(t,ND),r=n.icon,i=n.mask,s=n.symbol,o=n.className,a=n.title,l=n.titleId,u=n.maskId,c=Sv(r),f=$f("classes",[].concat(Zd(CD(n)),Zd(o.split(" ")))),d=$f("transform",typeof n.transform=="string"?Jd.transform(n.transform):n.transform),g=$f("mask",Sv(i)),_=gD(c,or(or(or(or({},f),d),g),{},{symbol:s,title:a,titleId:l,maskId:u}));if(!_)return RD("Could not find icon",c),null;var E=_.abstract,p={ref:e};return Object.keys(n).forEach(function(h){Hs.defaultProps.hasOwnProperty(h)||(p[h]=n[h])}),PD(E[0],p)}Hs.displayName="FontAwesomeIcon";Hs.propTypes={beat:ye.bool,border:ye.bool,bounce:ye.bool,className:ye.string,fade:ye.bool,flash:ye.bool,mask:ye.oneOfType([ye.object,ye.array,ye.string]),maskId:ye.string,fixedWidth:ye.bool,inverse:ye.bool,flip:ye.oneOf(["horizontal","vertical","both"]),icon:ye.oneOfType([ye.object,ye.array,ye.string]),listItem:ye.bool,pull:ye.oneOf(["right","left"]),pulse:ye.bool,rotation:ye.oneOf([0,90,180,270]),shake:ye.bool,size:ye.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:ye.bool,spinPulse:ye.bool,spinReverse:ye.bool,symbol:ye.oneOfType([ye.bool,ye.string]),title:ye.string,titleId:ye.string,transform:ye.oneOfType([ye.string,ye.object]),swapOpacity:ye.bool};Hs.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var PD=wb.bind(null,Ge.createElement),DD={"btn-secondary":"_btn-secondary_15i31_1"},Wc={exports:{}},Ja={};/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var MD=se.exports,Eb=60103;Ja.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var kv=Symbol.for;Eb=kv("react.element"),Ja.Fragment=kv("react.fragment")}var LD=MD.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$D=Object.prototype.hasOwnProperty,FD={key:!0,ref:!0,__self:!0,__source:!0};function bb(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)$D.call(e,r)&&!FD.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Eb,type:t,key:s,ref:o,props:i,_owner:LD.current}}Ja.jsx=bb;Ja.jsxs=bb;Wc.exports=Ja;const A=Wc.exports.jsx,he=Wc.exports.jsxs,Sb=Wc.exports.Fragment;function An(t){var c;const[,e]=se.exports.useState(!1),n=new Image;n.src=(c=t.iconSrc)!=null?c:"";const f=t,{iconSrc:r,iconClassName:i,faIcon:s,alt:o,noHoverEffect:a,children:l}=f,u=Ri(f,["iconSrc","iconClassName","faIcon","alt","noHoverEffect","children"]);return he("button",At(ee({},u),{className:`f-center ${DD["btn-secondary"]} ${!t.noHoverEffect&&"hover-opacity"} ${t.className}`,children:[t.iconSrc&&A("img",{className:t.iconClassName,src:t.iconSrc,width:n.width,height:n.height,alt:typeof t.children=="string"?t.children:t.alt,onLoad:()=>e(!0)}),s&&A(Hs,{className:t.iconClassName,icon:t.faIcon}),t.children]}))}const UD="_header_uk8ay_1",jD="_navbar_uk8ay_18",VD="_icon_uk8ay_23";var Pi={header:UD,"header-text":"_header-text_uk8ay_14",navbar:jD,icon:VD};/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var BD={prefix:"fas",iconName:"arrow-right-from-bracket",icon:[512,512,["sign-out"],"f08b","M160 416H96c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h64c17.67 0 32-14.33 32-32S177.7 32 160 32H96C42.98 32 0 74.98 0 128v256c0 53.02 42.98 96 96 96h64c17.67 0 32-14.33 32-32S177.7 416 160 416zM502.6 233.4l-128-128c-12.51-12.51-32.76-12.49-45.25 0c-12.5 12.5-12.5 32.75 0 45.25L402.8 224H192C174.3 224 160 238.3 160 256s14.31 32 32 32h210.8l-73.38 73.38c-12.5 12.5-12.5 32.75 0 45.25s32.75 12.5 45.25 0l128-128C515.1 266.1 515.1 245.9 502.6 233.4z"]},zD={prefix:"fas",iconName:"arrow-right-to-bracket",icon:[512,512,["sign-in"],"f090","M416 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c17.67 0 32 14.33 32 32v256c0 17.67-14.33 32-32 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c53.02 0 96-42.98 96-96V128C512 74.98 469 32 416 32zM342.6 233.4l-128-128c-12.51-12.51-32.76-12.49-45.25 0c-12.5 12.5-12.5 32.75 0 45.25L242.8 224H32C14.31 224 0 238.3 0 256s14.31 32 32 32h210.8l-73.38 73.38c-12.5 12.5-12.5 32.75 0 45.25s32.75 12.5 45.25 0l128-128C355.1 266.1 355.1 245.9 342.6 233.4z"]},kb={prefix:"fas",iconName:"check",icon:[448,512,[10004,10003],"f00c","M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"]},HD={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M490.3 40.4C512.2 62.27 512.2 97.73 490.3 119.6L460.3 149.7L362.3 51.72L392.4 21.66C414.3-.2135 449.7-.2135 471.6 21.66L490.3 40.4zM172.4 241.7L339.7 74.34L437.7 172.3L270.3 339.6C264.2 345.8 256.7 350.4 248.4 353.2L159.6 382.8C150.1 385.6 141.5 383.4 135 376.1C128.6 370.5 126.4 361 129.2 352.4L158.8 263.6C161.6 255.3 166.2 247.8 172.4 241.7V241.7zM192 63.1C209.7 63.1 224 78.33 224 95.1C224 113.7 209.7 127.1 192 127.1H96C78.33 127.1 64 142.3 64 159.1V416C64 433.7 78.33 448 96 448H352C369.7 448 384 433.7 384 416V319.1C384 302.3 398.3 287.1 416 287.1C433.7 287.1 448 302.3 448 319.1V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V159.1C0 106.1 42.98 63.1 96 63.1H192z"]},WD=HD,Tv={prefix:"fas",iconName:"reply",icon:[512,512,[61714,"mail-reply"],"f3e5","M8.31 189.9l176-151.1c15.41-13.3 39.69-2.509 39.69 18.16v80.05C384.6 137.9 512 170.1 512 322.3c0 61.44-39.59 122.3-83.34 154.1c-13.66 9.938-33.09-2.531-28.06-18.62c45.34-145-21.5-183.5-176.6-185.8v87.92c0 20.7-24.31 31.45-39.69 18.16l-176-151.1C-2.753 216.6-2.784 199.4 8.31 189.9z"]},qD={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z"]},KD={prefix:"fas",iconName:"user-plus",icon:[640,512,[],"f234","M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3C0 496.5 15.52 512 34.66 512h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM616 200h-48v-48C568 138.8 557.3 128 544 128s-24 10.75-24 24v48h-48C458.8 200 448 210.8 448 224s10.75 24 24 24h48v48C520 309.3 530.8 320 544 320s24-10.75 24-24v-48h48C629.3 248 640 237.3 640 224S629.3 200 616 200z"]};function GD(t){const n=se.exports.useRef(null);return se.exports.useEffect(()=>{const r=()=>{document.querySelectorAll(".comments > div > div").forEach(i=>i.style.scrollMargin=`${n.current.offsetHeight+10}px`)};setInterval(()=>r(),100)},[]),he("header",{ref:n,className:`${Pi.header} left-right g-1`,children:[A("h2",{className:`${Pi["header-text"]}`,children:"Interactive comments section"}),he("nav",{className:`${Pi.navbar} f-row g-1`,children:[A(zr,{maxWidth:650-1,children:A("hr",{className:"vertical-separator"})}),Cn()?A(An,{className:"text-purple",iconClassName:`${Pi.icon} fa-lg`,faIcon:BD,alt:"Sign in",onClick:t.openSignOutModal,children:A(zr,{minWidth:650,children:"Sign out"})}):A(An,{className:"text-purple",iconClassName:`${Pi.icon} fa-lg`,faIcon:zD,alt:"Sign in",onClick:t.openSignInModal,children:A(zr,{minWidth:650,children:"Sign in"})}),!Cn()&&he(Sb,{children:[A(zr,{minWidth:650,children:A("hr",{className:"vertical-separator"})}),A(An,{className:"text-purple",iconClassName:`${Pi.icon} fa-lg`,faIcon:KD,alt:"Sign up",onClick:t.openSignUpModal,children:A(zr,{minWidth:650,children:"Sign up"})})]})]})]})}const YD="_votes_a94nk_1";var QD={votes:YD},XD="/interactive-comments-section/assets/icon-plus.e731c8fe.svg",JD="/interactive-comments-section/assets/icon-minus.cb46e373.svg";function Cv(t){const[e,n]=se.exports.useState(t.initialVotes);return he("div",{className:`${QD.votes} ${t.className} f-center`,style:t.style,children:[A("img",{src:XD,alt:"+",onClick:()=>n(e+1),width:"11",height:"11"}),A("p",{className:"text-purple",style:{width:`${e.toString().length}ch`},children:e}),A("img",{src:JD,alt:"-",onClick:()=>n(e-1),width:"11",height:"3"})]})}var ZD={"profile-pic":"_profile-pic_1fuzr_1"};function Im(t){return A("img",{className:ZD["profile-pic"],src:t.src,alt:"",width:"32",height:"32"})}const eM="_date_4s8o1_5";var _l={"comment-info":"_comment-info_4s8o1_1","user-name":"_user-name_4s8o1_1",date:eM,"current-user":"_current-user_4s8o1_9"};function Iv(t){var n;const e=(n=Cn())==null?void 0:n.userName;return he("div",{className:`${_l["comment-info"]} f-ai-c g-1`,children:[A(Im,{src:t.profilePicture}),A("p",{className:`${_l["user-name"]} ${t.userName===e&&_l["current-user"]} f-ai-c`,children:t.userName}),A("p",{className:_l.date,children:t.date})]})}const Tb=768,tM=t=>A(zr,{maxWidth:Tb,children:t.children}),Cb=t=>A(zr,{minWidth:Tb+1,children:t.children}),nM="_replies_jazoz_1";var rM={replies:nM};function th(){return th=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},th.apply(this,arguments)}function iM(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var sM=se.exports.useLayoutEffect,oM=function(e){var n=se.exports.useRef(e);return sM(function(){n.current=e}),n},xv=function(e,n){if(typeof e=="function"){e(n);return}e.current=n},aM=function(e,n){var r=se.exports.useRef();return se.exports.useCallback(function(i){e.current=i,r.current&&xv(r.current,null),r.current=n,n&&xv(n,i)},[n])},Ov={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},Av=function(e){Object.keys(Ov).forEach(function(n){e.style.setProperty(n,Ov[n],"important")})},Ft=null,lM=function(e,n){var r=e.scrollHeight;return n.sizingStyle.boxSizing==="border-box"?r+n.borderSize:r-n.paddingSize};function uM(t,e,n,r){n===void 0&&(n=1),r===void 0&&(r=1/0),Ft||(Ft=document.createElement("textarea"),Ft.setAttribute("tabindex","-1"),Ft.setAttribute("aria-hidden","true"),Av(Ft)),Ft.parentNode===null&&document.body.appendChild(Ft);var i=t.paddingSize,s=t.borderSize,o=t.sizingStyle,a=o.boxSizing;Object.keys(o).forEach(function(d){var g=d;Ft.style[g]=o[g]}),Av(Ft),Ft.value=e;var l=lM(Ft,t);Ft.value="x";var u=Ft.scrollHeight-i,c=u*n;a==="border-box"&&(c=c+i+s),l=Math.max(c,l);var f=u*r;return a==="border-box"&&(f=f+i+s),l=Math.min(f,l),[l,u]}var Rv=function(){},cM=function(e,n){return e.reduce(function(r,i){return r[i]=n[i],r},{})},fM=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],dM=!!document.documentElement.currentStyle,hM=function(e){var n=window.getComputedStyle(e);if(n===null)return null;var r=cM(fM,n),i=r.boxSizing;if(i==="")return null;dM&&i==="border-box"&&(r.width=parseFloat(r.width)+parseFloat(r.borderRightWidth)+parseFloat(r.borderLeftWidth)+parseFloat(r.paddingRight)+parseFloat(r.paddingLeft)+"px");var s=parseFloat(r.paddingBottom)+parseFloat(r.paddingTop),o=parseFloat(r.borderBottomWidth)+parseFloat(r.borderTopWidth);return{sizingStyle:r,paddingSize:s,borderSize:o}},pM=function(e){var n=oM(e);se.exports.useLayoutEffect(function(){var r=function(s){n.current(s)};return window.addEventListener("resize",r),function(){window.removeEventListener("resize",r)}},[])},mM=function(e,n){var r=e.cacheMeasurements,i=e.maxRows,s=e.minRows,o=e.onChange,a=o===void 0?Rv:o,l=e.onHeightChange,u=l===void 0?Rv:l,c=iM(e,["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"]),f=c.value!==void 0,d=se.exports.useRef(null),g=aM(d,n),_=se.exports.useRef(0),E=se.exports.useRef(),p=function(){var v=d.current,w=r&&E.current?E.current:hM(v);if(!!w){E.current=w;var C=uM(w,v.value||v.placeholder||"x",s,i),T=C[0],x=C[1];_.current!==T&&(_.current=T,v.style.setProperty("height",T+"px","important"),u(T,{rowHeight:x}))}},h=function(v){f||p(),a(v)};return se.exports.useLayoutEffect(p),pM(p),se.exports.createElement("textarea",th({},c,{onChange:h,ref:g}))},gM=se.exports.forwardRef(mM),xm=gM;function Nv(t){const e=se.exports.useRef(null),[n,r]=se.exports.useState(t.mention),[i,s]=se.exports.useState(t.message),[o,a]=se.exports.useState("");return se.exports.useEffect(()=>{var l;r((l=i.split("@")[1])==null?void 0:l.split(" ")[0]),n&&s(i.replace(`@${n} `,"")),a(i)},[]),se.exports.useEffect(()=>{if(t.isEditing){const l=e.current,u=l.selectionEnd+l.value.length;l.selectionStart=u,l.selectionEnd=u,l.focus()}}),he("p",{children:[!t.isEditing&&n&&n===t.mention&&he("span",{className:"text-purple hover-opacity",style:{cursor:"pointer"},onClick:()=>{const l=t.parentRef.current.firstChild;l.getBoundingClientRect().top<Number.parseInt(document.querySelector(".comments div > div").style.scrollMargin.replace("px",""))&&l.scrollIntoView({behavior:"smooth"}),l.animate([{backgroundColor:"#e6e60073"},{}],{duration:1e3})},children:["@",n+" "]}),t.isEditing?A(xm,{ref:e,defaultValue:o,onKeyDown:l=>l.key==="Escape"&&t.toggleEditing()}):i]})}var yM={"btn-primary":"_btn-primary_r3pjn_1"};function vi(t){var l;const[,e]=se.exports.useState(!1),n=new Image;n.src=(l=t.iconSrc)!=null?l:"";const u=t,{iconSrc:r,iconClassName:i,faIcon:s,alt:o}=u,a=Ri(u,["iconSrc","iconClassName","faIcon","alt"]);return he("button",At(ee({},a),{className:`f-center ${yM["btn-primary"]} ${t.className} hover-opacity`,children:[t.children,t.iconSrc&&A("img",{className:t.iconClassName,src:t.iconSrc,width:n.width,height:n.height,alt:typeof t.children=="string"?t.children:t.alt,onLoad:()=>e(!0)}),t.faIcon&&A(Hs,{className:t.iconClassName,icon:t.faIcon})]}))}function Pv(t){var e;return Cn()?t.userName===((e=Cn())==null?void 0:e.userName)?t.isEditing?he("div",{className:"f-ai-c g-1-5",children:[A(An,{onClick:t.toggleEditing,noHoverEffect:!0,children:A("p",{className:"hover-underline",children:"Cancel"})}),A(vi,{className:"bg-purple",onClick:t.toggleEditing,children:"UPDATE"})]}):he("div",{className:"f-jc-fe f-ai-c f-wrap-rev g-1",children:[A(An,{className:"text-red",iconClassName:"fa-sm",faIcon:qD,alt:"Delete",onClick:t.openDeleteCommentModal,children:A(Cb,{children:"Delete"})}),A(An,{className:"text-purple",iconClassName:"fa-sm",faIcon:Tv,onClick:t.toggleEditing,children:"Edit"}),A(An,{className:"text-purple",iconClassName:"fa-sm",faIcon:WD,onClick:()=>t.openReplyModal(t.repliesRef.current,t.userName),children:"Reply"})]}):A(An,{className:"text-purple",iconClassName:"fa-sm",faIcon:Tv,onClick:()=>t.openReplyModal(t.repliesRef.current,t.userName),children:"Reply"}):null}class vM extends Ge.Component{constructor(n){super(n);ff(this,"thisRef",Ge.createRef());ff(this,"repliesRef",Ge.createRef());this.thisRef=Ge.createRef(),this.repliesRef=Ge.createRef(),this.state={isEditing:!1},this.toggleEditing=this.toggleEditing.bind(this)}toggleEditing(){this.setState({isEditing:!this.state.isEditing})}render(){var r,i;const n=Ge.Children.map(this.props.children,s=>Ge.isValidElement(s)?Ge.cloneElement(s,{parent:this,parentRef:this.thisRef}):s);return he("div",{ref:this.thisRef,className:"f-col g-1 hide-empty",children:[A(tM,{children:he("div",{className:"f-col g-1-25 card",children:[A(Iv,{userName:this.props.userName,profilePicture:this.props.profilePicture,date:this.props.date}),A(Nv,{message:this.props.message,mention:(r=this.props.parent)==null?void 0:r.props.userName,isEditing:this.state.isEditing,toggleEditing:this.toggleEditing,parentRef:this.props.parentRef}),he("div",{className:"left-right f-span-y g-1",children:[A(Cv,{initialVotes:this.props.votes}),A(Pv,{userName:this.props.userName,repliesRef:this.repliesRef,isEditing:this.state.isEditing,toggleEditing:this.toggleEditing,openDeleteCommentModal:this.props.openDeleteCommentModal,openReplyModal:this.props.openReplyModal})]})]})}),A(Cb,{children:he("div",{className:"f-row g-1-25 card",children:[A(Cv,{className:"f-col",style:{alignSelf:"flex-start"},initialVotes:this.props.votes}),he("div",{className:"f-col g-1-25",style:{flexGrow:1},children:[he("div",{className:"f-row f-span-y left-right g-1",children:[A(Iv,{userName:this.props.userName,profilePicture:this.props.profilePicture,date:this.props.date}),A(Pv,{userName:this.props.userName,repliesRef:this.repliesRef,isEditing:this.state.isEditing,toggleEditing:this.toggleEditing,openDeleteCommentModal:this.props.openDeleteCommentModal,openReplyModal:this.props.openReplyModal})]}),A(Nv,{message:this.props.message,mention:(i=this.props.parent)==null?void 0:i.props.userName,isEditing:this.state.isEditing,toggleEditing:this.toggleEditing,parentRef:this.props.parentRef})]})]})}),A("div",{ref:this.repliesRef,className:`${rM.replies} f-col g-1`,children:n})]})}}var nh={exports:{}},wi={},Om={exports:{}},Zt={},Ib={exports:{}},xb={};/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){var e,n,r,i;if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}if(typeof window=="undefined"||typeof MessageChannel!="function"){var l=null,u=null,c=function(){if(l!==null)try{var N=t.unstable_now();l(!0,N),l=null}catch(J){throw setTimeout(c,0),J}};e=function(N){l!==null?setTimeout(e,0,N):(l=N,setTimeout(c,0))},n=function(N,J){u=setTimeout(N,J)},r=function(){clearTimeout(u)},t.unstable_shouldYield=function(){return!1},i=t.unstable_forceFrameRate=function(){}}else{var f=window.setTimeout,d=window.clearTimeout;if(typeof console!="undefined"){var g=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof g!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var _=!1,E=null,p=-1,h=5,m=0;t.unstable_shouldYield=function(){return t.unstable_now()>=m},i=function(){},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):h=0<N?Math.floor(1e3/N):5};var v=new MessageChannel,w=v.port2;v.port1.onmessage=function(){if(E!==null){var N=t.unstable_now();m=N+h;try{E(!0,N)?w.postMessage(null):(_=!1,E=null)}catch(J){throw w.postMessage(null),J}}else _=!1},e=function(N){E=N,_||(_=!0,w.postMessage(null))},n=function(N,J){p=f(function(){N(t.unstable_now())},J)},r=function(){d(p),p=-1}}function C(N,J){var ae=N.length;N.push(J);e:for(;;){var we=ae-1>>>1,Ce=N[we];if(Ce!==void 0&&0<L(Ce,J))N[we]=J,N[ae]=Ce,ae=we;else break e}}function T(N){return N=N[0],N===void 0?null:N}function x(N){var J=N[0];if(J!==void 0){var ae=N.pop();if(ae!==J){N[0]=ae;e:for(var we=0,Ce=N.length;we<Ce;){var Ue=2*(we+1)-1,Ke=N[Ue],dn=Ue+1,Ht=N[dn];if(Ke!==void 0&&0>L(Ke,ae))Ht!==void 0&&0>L(Ht,Ke)?(N[we]=Ht,N[dn]=ae,we=dn):(N[we]=Ke,N[Ue]=ae,we=Ue);else if(Ht!==void 0&&0>L(Ht,ae))N[we]=Ht,N[dn]=ae,we=dn;else break e}}return J}return null}function L(N,J){var ae=N.sortIndex-J.sortIndex;return ae!==0?ae:N.id-J.id}var S=[],D=[],B=1,V=null,j=3,z=!1,W=!1,re=!1;function I(N){for(var J=T(D);J!==null;){if(J.callback===null)x(D);else if(J.startTime<=N)x(D),J.sortIndex=J.expirationTime,C(S,J);else break;J=T(D)}}function Q(N){if(re=!1,I(N),!W)if(T(S)!==null)W=!0,e(Te);else{var J=T(D);J!==null&&n(Q,J.startTime-N)}}function Te(N,J){W=!1,re&&(re=!1,r()),z=!0;var ae=j;try{for(I(J),V=T(S);V!==null&&(!(V.expirationTime>J)||N&&!t.unstable_shouldYield());){var we=V.callback;if(typeof we=="function"){V.callback=null,j=V.priorityLevel;var Ce=we(V.expirationTime<=J);J=t.unstable_now(),typeof Ce=="function"?V.callback=Ce:V===T(S)&&x(S),I(J)}else x(S);V=T(S)}if(V!==null)var Ue=!0;else{var Ke=T(D);Ke!==null&&n(Q,Ke.startTime-J),Ue=!1}return Ue}finally{V=null,j=ae,z=!1}}var Me=i;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){W||z||(W=!0,e(Te))},t.unstable_getCurrentPriorityLevel=function(){return j},t.unstable_getFirstCallbackNode=function(){return T(S)},t.unstable_next=function(N){switch(j){case 1:case 2:case 3:var J=3;break;default:J=j}var ae=j;j=J;try{return N()}finally{j=ae}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=Me,t.unstable_runWithPriority=function(N,J){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var ae=j;j=N;try{return J()}finally{j=ae}},t.unstable_scheduleCallback=function(N,J,ae){var we=t.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?we+ae:we):ae=we,N){case 1:var Ce=-1;break;case 2:Ce=250;break;case 5:Ce=1073741823;break;case 4:Ce=1e4;break;default:Ce=5e3}return Ce=ae+Ce,N={id:B++,callback:J,priorityLevel:N,startTime:ae,expirationTime:Ce,sortIndex:-1},ae>we?(N.sortIndex=ae,C(D,N),T(S)===null&&N===T(D)&&(re?r():re=!0,n(Q,ae-we))):(N.sortIndex=Ce,C(S,N),W||z||(W=!0,e(Te))),N},t.unstable_wrapCallback=function(N){var J=j;return function(){var ae=j;j=J;try{return N.apply(this,arguments)}finally{j=ae}}}})(xb);Ib.exports=xb;/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qc=se.exports,De=pw,rt=Ib.exports;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!qc)throw Error(U(227));var Ob=new Set,da={};function Ci(t,e){Cs(t,e),Cs(t+"Capture",e)}function Cs(t,e){for(da[t]=e,t=0;t<e.length;t++)Ob.add(e[t])}var qn=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),wM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dv=Object.prototype.hasOwnProperty,Mv={},Lv={};function _M(t){return Dv.call(Lv,t)?!0:Dv.call(Mv,t)?!1:wM.test(t)?Lv[t]=!0:(Mv[t]=!0,!1)}function EM(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function bM(t,e,n,r){if(e===null||typeof e=="undefined"||EM(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ot(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ft[t]=new Ot(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ft[e]=new Ot(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ft[t]=new Ot(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ft[t]=new Ot(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ft[t]=new Ot(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ft[t]=new Ot(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ft[t]=new Ot(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ft[t]=new Ot(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ft[t]=new Ot(t,5,!1,t.toLowerCase(),null,!1,!1)});var Am=/[\-:]([a-z])/g;function Rm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Am,Rm);ft[e]=new Ot(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Am,Rm);ft[e]=new Ot(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Am,Rm);ft[e]=new Ot(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ft[t]=new Ot(t,1,!1,t.toLowerCase(),null,!1,!1)});ft.xlinkHref=new Ot("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ft[t]=new Ot(t,1,!1,t.toLowerCase(),null,!0,!0)});function Nm(t,e,n,r){var i=ft.hasOwnProperty(e)?ft[e]:null,s=i!==null?i.type===0:r?!1:!(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N");s||(bM(e,n,i,r)&&(n=null),r||i===null?_M(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Ii=qc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_o=60103,Yr=60106,rr=60107,Pm=60108,Mo=60114,Dm=60109,Mm=60110,Kc=60112,Lo=60113,Au=60120,Gc=60115,Lm=60116,$m=60121,Fm=60128,Ab=60129,Um=60130,rh=60131;if(typeof Symbol=="function"&&Symbol.for){var Ze=Symbol.for;_o=Ze("react.element"),Yr=Ze("react.portal"),rr=Ze("react.fragment"),Pm=Ze("react.strict_mode"),Mo=Ze("react.profiler"),Dm=Ze("react.provider"),Mm=Ze("react.context"),Kc=Ze("react.forward_ref"),Lo=Ze("react.suspense"),Au=Ze("react.suspense_list"),Gc=Ze("react.memo"),Lm=Ze("react.lazy"),$m=Ze("react.block"),Ze("react.scope"),Fm=Ze("react.opaque.id"),Ab=Ze("react.debug_trace_mode"),Um=Ze("react.offscreen"),rh=Ze("react.legacy_hidden")}var $v=typeof Symbol=="function"&&Symbol.iterator;function to(t){return t===null||typeof t!="object"?null:(t=$v&&t[$v]||t["@@iterator"],typeof t=="function"?t:null)}var Ff;function Eo(t){if(Ff===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ff=e&&e[1]||""}return`
`+Ff+t}var Uf=!1;function El(t,e){if(!t||Uf)return"";Uf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(l){var r=l}Reflect.construct(t,[],e)}else{try{e.call()}catch(l){r=l}t.call(e.prototype)}else{try{throw Error()}catch(l){r=l}t()}}catch(l){if(l&&r&&typeof l.stack=="string"){for(var i=l.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a])return`
`+i[o].replace(" at new "," at ");while(1<=o&&0<=a);break}}}finally{Uf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Eo(t):""}function SM(t){switch(t.tag){case 5:return Eo(t.type);case 16:return Eo("Lazy");case 13:return Eo("Suspense");case 19:return Eo("SuspenseList");case 0:case 2:case 15:return t=El(t.type,!1),t;case 11:return t=El(t.type.render,!1),t;case 22:return t=El(t.type._render,!1),t;case 1:return t=El(t.type,!0),t;default:return""}}function os(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case rr:return"Fragment";case Yr:return"Portal";case Mo:return"Profiler";case Pm:return"StrictMode";case Lo:return"Suspense";case Au:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Mm:return(t.displayName||"Context")+".Consumer";case Dm:return(t._context.displayName||"Context")+".Provider";case Kc:var e=t.render;return e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case Gc:return os(t.type);case $m:return os(t._render);case Lm:e=t._payload,t=t._init;try{return os(t(e))}catch{}}return null}function Or(t){switch(typeof t){case"boolean":case"number":case"object":case"string":case"undefined":return t;default:return""}}function Rb(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function kM(t){var e=Rb(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function bl(t){t._valueTracker||(t._valueTracker=kM(t))}function Nb(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Rb(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ru(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}function ih(t,e){var n=e.checked;return De({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function Fv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Or(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Pb(t,e){e=e.checked,e!=null&&Nm(t,"checked",e,!1)}function sh(t,e){Pb(t,e);var n=Or(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?oh(t,e.type,n):e.hasOwnProperty("defaultValue")&&oh(t,e.type,Or(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Uv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function oh(t,e,n){(e!=="number"||Ru(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}function TM(t){var e="";return qc.Children.forEach(t,function(n){n!=null&&(e+=n)}),e}function ah(t,e){return t=De({children:void 0},e),(e=TM(e.children))&&(t.children=e),t}function as(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Or(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function lh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return De({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function jv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Or(n)}}function Db(t,e){var n=Or(e.value),r=Or(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Vv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}var uh={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function Mb(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ch(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Mb(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Sl,Lb=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!==uh.svg||"innerHTML"in t)t.innerHTML=e;else{for(Sl=Sl||document.createElement("div"),Sl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Sl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ha(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var $o={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},CM=["Webkit","ms","Moz","O"];Object.keys($o).forEach(function(t){CM.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),$o[e]=$o[t]})});function $b(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||$o.hasOwnProperty(t)&&$o[t]?(""+e).trim():e+"px"}function Fb(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=$b(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var IM=De({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fh(t,e){if(e){if(IM[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(!(typeof e.dangerouslySetInnerHTML=="object"&&"__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function dh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function jm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var hh=null,ls=null,us=null;function Bv(t){if(t=el(t)){if(typeof hh!="function")throw Error(U(280));var e=t.stateNode;e&&(e=ef(e),hh(t.stateNode,t.type,e))}}function Ub(t){ls?us?us.push(t):us=[t]:ls=t}function jb(){if(ls){var t=ls,e=us;if(us=ls=null,Bv(t),e)for(t=0;t<e.length;t++)Bv(e[t])}}function Vm(t,e){return t(e)}function Vb(t,e,n,r,i){return t(e,n,r,i)}function Bm(){}var Bb=Vm,Qr=!1,jf=!1;function zm(){(ls!==null||us!==null)&&(Bm(),jb())}function xM(t,e,n){if(jf)return t(e,n);jf=!0;try{return Bb(t,e,n)}finally{jf=!1,zm()}}function pa(t,e){var n=t.stateNode;if(n===null)return null;var r=ef(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var ph=!1;if(qn)try{var no={};Object.defineProperty(no,"passive",{get:function(){ph=!0}}),window.addEventListener("test",no,no),window.removeEventListener("test",no,no)}catch{ph=!1}function OM(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Fo=!1,Nu=null,Pu=!1,mh=null,AM={onError:function(t){Fo=!0,Nu=t}};function RM(t,e,n,r,i,s,o,a,l){Fo=!1,Nu=null,OM.apply(AM,arguments)}function NM(t,e,n,r,i,s,o,a,l){if(RM.apply(this,arguments),Fo){if(Fo){var u=Nu;Fo=!1,Nu=null}else throw Error(U(198));Pu||(Pu=!0,mh=u)}}function xi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&1026)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function zb(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function zv(t){if(xi(t)!==t)throw Error(U(188))}function PM(t){var e=t.alternate;if(!e){if(e=xi(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return zv(i),t;if(s===r)return zv(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function Hb(t){if(t=PM(t),!t)return null;for(var e=t;;){if(e.tag===5||e.tag===6)return e;if(e.child)e.child.return=e,e=e.child;else{if(e===t)break;for(;!e.sibling;){if(!e.return||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}}return null}function Hv(t,e){for(var n=t.alternate;e!==null;){if(e===t||e===n)return!0;e=e.return}return!1}var Wb,Hm,qb,Kb,gh=!1,mn=[],pr=null,mr=null,gr=null,ma=new Map,ga=new Map,ro=[],Wv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yh(t,e,n,r,i){return{blockedOn:t,domEventName:e,eventSystemFlags:n|16,nativeEvent:i,targetContainers:[r]}}function qv(t,e){switch(t){case"focusin":case"focusout":pr=null;break;case"dragenter":case"dragleave":mr=null;break;case"mouseover":case"mouseout":gr=null;break;case"pointerover":case"pointerout":ma.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ga.delete(e.pointerId)}}function io(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t=yh(e,n,r,i,s),e!==null&&(e=el(e),e!==null&&Hm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function DM(t,e,n,r,i){switch(e){case"focusin":return pr=io(pr,t,e,n,r,i),!0;case"dragenter":return mr=io(mr,t,e,n,r,i),!0;case"mouseover":return gr=io(gr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ma.set(s,io(ma.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ga.set(s,io(ga.get(s)||null,t,e,n,r,i)),!0}return!1}function MM(t){var e=Xr(t.target);if(e!==null){var n=xi(e);if(n!==null){if(e=n.tag,e===13){if(e=zb(n),e!==null){t.blockedOn=e,Kb(t.lanePriority,function(){rt.unstable_runWithPriority(t.priority,function(){qb(n)})});return}}else if(e===3&&n.stateNode.hydrate){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ql(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Gm(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n!==null)return e=el(n),e!==null&&Hm(e),t.blockedOn=n,!1;e.shift()}return!0}function Kv(t,e,n){ql(t)&&n.delete(e)}function LM(){for(gh=!1;0<mn.length;){var t=mn[0];if(t.blockedOn!==null){t=el(t.blockedOn),t!==null&&Wb(t);break}for(var e=t.targetContainers;0<e.length;){var n=Gm(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n!==null){t.blockedOn=n;break}e.shift()}t.blockedOn===null&&mn.shift()}pr!==null&&ql(pr)&&(pr=null),mr!==null&&ql(mr)&&(mr=null),gr!==null&&ql(gr)&&(gr=null),ma.forEach(Kv),ga.forEach(Kv)}function so(t,e){t.blockedOn===e&&(t.blockedOn=null,gh||(gh=!0,rt.unstable_scheduleCallback(rt.unstable_NormalPriority,LM)))}function Gb(t){function e(i){return so(i,t)}if(0<mn.length){so(mn[0],t);for(var n=1;n<mn.length;n++){var r=mn[n];r.blockedOn===t&&(r.blockedOn=null)}}for(pr!==null&&so(pr,t),mr!==null&&so(mr,t),gr!==null&&so(gr,t),ma.forEach(e),ga.forEach(e),n=0;n<ro.length;n++)r=ro[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ro.length&&(n=ro[0],n.blockedOn===null);)MM(n),n.blockedOn===null&&ro.shift()}function kl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Wi={animationend:kl("Animation","AnimationEnd"),animationiteration:kl("Animation","AnimationIteration"),animationstart:kl("Animation","AnimationStart"),transitionend:kl("Transition","TransitionEnd")},Vf={},Yb={};qn&&(Yb=document.createElement("div").style,"AnimationEvent"in window||(delete Wi.animationend.animation,delete Wi.animationiteration.animation,delete Wi.animationstart.animation),"TransitionEvent"in window||delete Wi.transitionend.transition);function Yc(t){if(Vf[t])return Vf[t];if(!Wi[t])return t;var e=Wi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Yb)return Vf[t]=e[n];return t}var Qb=Yc("animationend"),Xb=Yc("animationiteration"),Jb=Yc("animationstart"),Zb=Yc("transitionend"),eS=new Map,Wm=new Map,$M=["abort","abort",Qb,"animationEnd",Xb,"animationIteration",Jb,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Zb,"transitionEnd","waiting","waiting"];function qm(t,e){for(var n=0;n<t.length;n+=2){var r=t[n],i=t[n+1];i="on"+(i[0].toUpperCase()+i.slice(1)),Wm.set(r,e),eS.set(r,i),Ci(i,[r])}}var FM=rt.unstable_now;FM();var Ie=8;function $i(t){if((1&t)!==0)return Ie=15,1;if((2&t)!==0)return Ie=14,2;if((4&t)!==0)return Ie=13,4;var e=24&t;return e!==0?(Ie=12,e):(t&32)!==0?(Ie=11,32):(e=192&t,e!==0?(Ie=10,e):(t&256)!==0?(Ie=9,256):(e=3584&t,e!==0?(Ie=8,e):(t&4096)!==0?(Ie=7,4096):(e=4186112&t,e!==0?(Ie=6,e):(e=62914560&t,e!==0?(Ie=5,e):t&67108864?(Ie=4,67108864):(t&134217728)!==0?(Ie=3,134217728):(e=805306368&t,e!==0?(Ie=2,e):(1073741824&t)!==0?(Ie=1,1073741824):(Ie=8,t))))))}function UM(t){switch(t){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function jM(t){switch(t){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(U(358,t))}}function ya(t,e){var n=t.pendingLanes;if(n===0)return Ie=0;var r=0,i=0,s=t.expiredLanes,o=t.suspendedLanes,a=t.pingedLanes;if(s!==0)r=s,i=Ie=15;else if(s=n&134217727,s!==0){var l=s&~o;l!==0?(r=$i(l),i=Ie):(a&=s,a!==0&&(r=$i(a),i=Ie))}else s=n&~o,s!==0?(r=$i(s),i=Ie):a!==0&&(r=$i(a),i=Ie);if(r===0)return 0;if(r=31-Ar(r),r=n&((0>r?0:1<<r)<<1)-1,e!==0&&e!==r&&(e&o)===0){if($i(e),i<=Ie)return e;Ie=i}if(e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ar(e),i=1<<n,r|=t[n],e&=~i;return r}function tS(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Du(t,e){switch(t){case 15:return 1;case 14:return 2;case 12:return t=Fi(24&~e),t===0?Du(10,e):t;case 10:return t=Fi(192&~e),t===0?Du(8,e):t;case 8:return t=Fi(3584&~e),t===0&&(t=Fi(4186112&~e),t===0&&(t=512)),t;case 2:return e=Fi(805306368&~e),e===0&&(e=268435456),e}throw Error(U(358,t))}function Fi(t){return t&-t}function Bf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Qc(t,e,n){t.pendingLanes|=e;var r=e-1;t.suspendedLanes&=r,t.pingedLanes&=r,t=t.eventTimes,e=31-Ar(e),t[e]=n}var Ar=Math.clz32?Math.clz32:zM,VM=Math.log,BM=Math.LN2;function zM(t){return t===0?32:31-(VM(t)/BM|0)|0}var HM=rt.unstable_UserBlockingPriority,WM=rt.unstable_runWithPriority,Kl=!0;function qM(t,e,n,r){Qr||Bm();var i=Km,s=Qr;Qr=!0;try{Vb(i,t,e,n,r)}finally{(Qr=s)||zm()}}function KM(t,e,n,r){WM(HM,Km.bind(null,t,e,n,r))}function Km(t,e,n,r){if(Kl){var i;if((i=(e&4)===0)&&0<mn.length&&-1<Wv.indexOf(t))t=yh(null,t,e,n,r),mn.push(t);else{var s=Gm(t,e,n,r);if(s===null)i&&qv(t,r);else{if(i){if(-1<Wv.indexOf(t)){t=yh(s,t,e,n,r),mn.push(t);return}if(DM(s,t,e,n,r))return;qv(t,r)}pS(t,e,r,null,n)}}}}function Gm(t,e,n,r){var i=jm(r);if(i=Xr(i),i!==null){var s=xi(i);if(s===null)i=null;else{var o=s.tag;if(o===13){if(i=zb(s),i!==null)return i;i=null}else if(o===3){if(s.stateNode.hydrate)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null)}}return pS(t,e,r,i,n),null}var ar=null,Ym=null,Gl=null;function nS(){if(Gl)return Gl;var t,e=Ym,n=e.length,r,i="value"in ar?ar.value:ar.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Gl=i.slice(t,1<r?1-r:void 0)}function Yl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Tl(){return!0}function Gv(){return!1}function zt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Tl:Gv,this.isPropagationStopped=Gv,this}return De(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Tl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Tl)},persist:function(){},isPersistent:Tl}),e}var Ws={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qm=zt(Ws),Za=De({},Ws,{view:0,detail:0}),GM=zt(Za),zf,Hf,oo,Xc=De({},Za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==oo&&(oo&&t.type==="mousemove"?(zf=t.screenX-oo.screenX,Hf=t.screenY-oo.screenY):Hf=zf=0,oo=t),zf)},movementY:function(t){return"movementY"in t?t.movementY:Hf}}),Yv=zt(Xc),YM=De({},Xc,{dataTransfer:0}),QM=zt(YM),XM=De({},Za,{relatedTarget:0}),Wf=zt(XM),JM=De({},Ws,{animationName:0,elapsedTime:0,pseudoElement:0}),ZM=zt(JM),eL=De({},Ws,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),tL=zt(eL),nL=De({},Ws,{data:0}),Qv=zt(nL),rL={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},iL={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sL={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function oL(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=sL[t])?!!e[t]:!1}function Xm(){return oL}var aL=De({},Za,{key:function(t){if(t.key){var e=rL[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Yl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?iL[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xm,charCode:function(t){return t.type==="keypress"?Yl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Yl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),lL=zt(aL),uL=De({},Xc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xv=zt(uL),cL=De({},Za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xm}),fL=zt(cL),dL=De({},Ws,{propertyName:0,elapsedTime:0,pseudoElement:0}),hL=zt(dL),pL=De({},Xc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),mL=zt(pL),gL=[9,13,27,32],Jm=qn&&"CompositionEvent"in window,Uo=null;qn&&"documentMode"in document&&(Uo=document.documentMode);var yL=qn&&"TextEvent"in window&&!Uo,rS=qn&&(!Jm||Uo&&8<Uo&&11>=Uo),Jv=String.fromCharCode(32),Zv=!1;function iS(t,e){switch(t){case"keyup":return gL.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sS(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var qi=!1;function vL(t,e){switch(t){case"compositionend":return sS(e);case"keypress":return e.which!==32?null:(Zv=!0,Jv);case"textInput":return t=e.data,t===Jv&&Zv?null:t;default:return null}}function wL(t,e){if(qi)return t==="compositionend"||!Jm&&iS(t,e)?(t=nS(),Gl=Ym=ar=null,qi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return rS&&e.locale!=="ko"?null:e.data;default:return null}}var _L={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function e0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!_L[t.type]:e==="textarea"}function oS(t,e,n,r){Ub(r),e=Mu(e,"onChange"),0<e.length&&(n=new Qm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var jo=null,va=null;function EL(t){fS(t,0)}function Jc(t){var e=Gi(t);if(Nb(e))return t}function bL(t,e){if(t==="change")return e}var aS=!1;if(qn){var qf;if(qn){var Kf="oninput"in document;if(!Kf){var t0=document.createElement("div");t0.setAttribute("oninput","return;"),Kf=typeof t0.oninput=="function"}qf=Kf}else qf=!1;aS=qf&&(!document.documentMode||9<document.documentMode)}function n0(){jo&&(jo.detachEvent("onpropertychange",lS),va=jo=null)}function lS(t){if(t.propertyName==="value"&&Jc(va)){var e=[];if(oS(e,va,t,jm(t)),t=EL,Qr)t(e);else{Qr=!0;try{Vm(t,e)}finally{Qr=!1,zm()}}}}function SL(t,e,n){t==="focusin"?(n0(),jo=e,va=n,jo.attachEvent("onpropertychange",lS)):t==="focusout"&&n0()}function kL(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Jc(va)}function TL(t,e){if(t==="click")return Jc(e)}function CL(t,e){if(t==="input"||t==="change")return Jc(e)}function IL(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Gt=typeof Object.is=="function"?Object.is:IL,xL=Object.prototype.hasOwnProperty;function wa(t,e){if(Gt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!xL.call(e,n[r])||!Gt(t[n[r]],e[n[r]]))return!1;return!0}function r0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function i0(t,e){var n=r0(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=r0(n)}}function uS(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?uS(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function s0(){for(var t=window,e=Ru();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ru(t.document)}return e}function vh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var OL=qn&&"documentMode"in document&&11>=document.documentMode,Ki=null,wh=null,Vo=null,_h=!1;function o0(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_h||Ki==null||Ki!==Ru(r)||(r=Ki,"selectionStart"in r&&vh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vo&&wa(Vo,r)||(Vo=r,r=Mu(wh,"onSelect"),0<r.length&&(e=new Qm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ki)))}qm("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);qm("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);qm($M,2);for(var a0="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),Gf=0;Gf<a0.length;Gf++)Wm.set(a0[Gf],0);Cs("onMouseEnter",["mouseout","mouseover"]);Cs("onMouseLeave",["mouseout","mouseover"]);Cs("onPointerEnter",["pointerout","pointerover"]);Cs("onPointerLeave",["pointerout","pointerover"]);Ci("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ci("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ci("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ci("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ci("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ci("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cS=new Set("cancel close invalid load scroll toggle".split(" ").concat(bo));function l0(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,NM(r,e,void 0,t),t.currentTarget=null}function fS(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;l0(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;l0(i,a,u),s=l}}}if(Pu)throw t=mh,Pu=!1,mh=null,t}function Oe(t,e){var n=gS(e),r=t+"__bubble";n.has(r)||(hS(e,t,2,!1),n.add(r))}var u0="_reactListening"+Math.random().toString(36).slice(2);function dS(t){t[u0]||(t[u0]=!0,Ob.forEach(function(e){cS.has(e)||c0(e,!1,t,null),c0(e,!0,t,null)}))}function c0(t,e,n,r){var i=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,s=n;if(t==="selectionchange"&&n.nodeType!==9&&(s=n.ownerDocument),r!==null&&!e&&cS.has(t)){if(t!=="scroll")return;i|=2,s=r}var o=gS(s),a=t+"__"+(e?"capture":"bubble");o.has(a)||(e&&(i|=4),hS(s,t,i,e),o.add(a))}function hS(t,e,n,r){var i=Wm.get(e);switch(i===void 0?2:i){case 0:i=qM;break;case 1:i=KM;break;default:i=Km}n=i.bind(null,e,n,t),i=void 0,!ph||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function pS(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Xr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}xM(function(){var u=s,c=jm(n),f=[];e:{var d=eS.get(t);if(d!==void 0){var g=Qm,_=t;switch(t){case"keypress":if(Yl(n)===0)break e;case"keydown":case"keyup":g=lL;break;case"focusin":_="focus",g=Wf;break;case"focusout":_="blur",g=Wf;break;case"beforeblur":case"afterblur":g=Wf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Yv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=QM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=fL;break;case Qb:case Xb:case Jb:g=ZM;break;case Zb:g=hL;break;case"scroll":g=GM;break;case"wheel":g=mL;break;case"copy":case"cut":case"paste":g=tL;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Xv}var E=(e&4)!==0,p=!E&&t==="scroll",h=E?d!==null?d+"Capture":null:d;E=[];for(var m=u,v;m!==null;){v=m;var w=v.stateNode;if(v.tag===5&&w!==null&&(v=w,h!==null&&(w=pa(m,h),w!=null&&E.push(_a(m,w,v)))),p)break;m=m.return}0<E.length&&(d=new g(d,_,null,n,c),f.push({event:d,listeners:E}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&(e&16)===0&&(_=n.relatedTarget||n.fromElement)&&(Xr(_)||_[qs]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?Xr(_):null,_!==null&&(p=xi(_),_!==p||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(E=Yv,w="onMouseLeave",h="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(E=Xv,w="onPointerLeave",h="onPointerEnter",m="pointer"),p=g==null?d:Gi(g),v=_==null?d:Gi(_),d=new E(w,m+"leave",g,n,c),d.target=p,d.relatedTarget=v,w=null,Xr(c)===u&&(E=new E(h,m+"enter",_,n,c),E.target=v,E.relatedTarget=p,w=E),p=w,g&&_)t:{for(E=g,h=_,m=0,v=E;v;v=Di(v))m++;for(v=0,w=h;w;w=Di(w))v++;for(;0<m-v;)E=Di(E),m--;for(;0<v-m;)h=Di(h),v--;for(;m--;){if(E===h||h!==null&&E===h.alternate)break t;E=Di(E),h=Di(h)}E=null}else E=null;g!==null&&f0(f,d,g,E,!1),_!==null&&p!==null&&f0(f,p,_,E,!0)}}e:{if(d=u?Gi(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var C=bL;else if(e0(d))if(aS)C=CL;else{C=kL;var T=SL}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=TL);if(C&&(C=C(t,u))){oS(f,C,n,c);break e}T&&T(t,d,u),t==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&oh(d,"number",d.value)}switch(T=u?Gi(u):window,t){case"focusin":(e0(T)||T.contentEditable==="true")&&(Ki=T,wh=u,Vo=null);break;case"focusout":Vo=wh=Ki=null;break;case"mousedown":_h=!0;break;case"contextmenu":case"mouseup":case"dragend":_h=!1,o0(f,n,c);break;case"selectionchange":if(OL)break;case"keydown":case"keyup":o0(f,n,c)}var x;if(Jm)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else qi?iS(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(rS&&n.locale!=="ko"&&(qi||L!=="onCompositionStart"?L==="onCompositionEnd"&&qi&&(x=nS()):(ar=c,Ym="value"in ar?ar.value:ar.textContent,qi=!0)),T=Mu(u,L),0<T.length&&(L=new Qv(L,t,null,n,c),f.push({event:L,listeners:T}),x?L.data=x:(x=sS(n),x!==null&&(L.data=x)))),(x=yL?vL(t,n):wL(t,n))&&(u=Mu(u,"onBeforeInput"),0<u.length&&(c=new Qv("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=x))}fS(f,e)})}function _a(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Mu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=pa(t,n),s!=null&&r.unshift(_a(t,s,i)),s=pa(t,e),s!=null&&r.push(_a(t,s,i))),t=t.return}return r}function Di(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function f0(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=pa(n,s),l!=null&&o.unshift(_a(n,l,a))):i||(l=pa(n,s),l!=null&&o.push(_a(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}function Lu(){}var Yf=null,Qf=null;function mS(t,e){switch(t){case"button":case"input":case"select":case"textarea":return!!e.autoFocus}return!1}function Eh(t,e){return t==="textarea"||t==="option"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var d0=typeof setTimeout=="function"?setTimeout:void 0,AL=typeof clearTimeout=="function"?clearTimeout:void 0;function Zm(t){t.nodeType===1?t.textContent="":t.nodeType===9&&(t=t.body,t!=null&&(t.textContent=""))}function cs(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break}return t}function h0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Xf=0;function RL(t){return{$$typeof:Fm,toString:t,valueOf:t}}var Zc=Math.random().toString(36).slice(2),lr="__reactFiber$"+Zc,$u="__reactProps$"+Zc,qs="__reactContainer$"+Zc,p0="__reactEvents$"+Zc;function Xr(t){var e=t[lr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[qs]||n[lr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=h0(t);t!==null;){if(n=t[lr])return n;t=h0(t)}return e}t=n,n=t.parentNode}return null}function el(t){return t=t[lr]||t[qs],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Gi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function ef(t){return t[$u]||null}function gS(t){var e=t[p0];return e===void 0&&(e=t[p0]=new Set),e}var bh=[],Yi=-1;function $r(t){return{current:t}}function Re(t){0>Yi||(t.current=bh[Yi],bh[Yi]=null,Yi--)}function Fe(t,e){Yi++,bh[Yi]=t.current,t.current=e}var Rr={},_t=$r(Rr),Mt=$r(!1),_i=Rr;function Is(t,e){var n=t.type.contextTypes;if(!n)return Rr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Lt(t){return t=t.childContextTypes,t!=null}function Fu(){Re(Mt),Re(_t)}function m0(t,e,n){if(_t.current!==Rr)throw Error(U(168));Fe(_t,e),Fe(Mt,n)}function yS(t,e,n){var r=t.stateNode;if(t=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(U(108,os(e)||"Unknown",i));return De({},n,r)}function Ql(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Rr,_i=_t.current,Fe(_t,t),Fe(Mt,Mt.current),!0}function g0(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=yS(t,e,_i),r.__reactInternalMemoizedMergedChildContext=t,Re(Mt),Re(_t),Fe(_t,t)):Re(Mt),Fe(Mt,n)}var eg=null,ri=null,NL=rt.unstable_runWithPriority,tg=rt.unstable_scheduleCallback,Sh=rt.unstable_cancelCallback,PL=rt.unstable_shouldYield,y0=rt.unstable_requestPaint,kh=rt.unstable_now,DL=rt.unstable_getCurrentPriorityLevel,tf=rt.unstable_ImmediatePriority,vS=rt.unstable_UserBlockingPriority,wS=rt.unstable_NormalPriority,_S=rt.unstable_LowPriority,ES=rt.unstable_IdlePriority,Jf={},ML=y0!==void 0?y0:function(){},On=null,Xl=null,Zf=!1,v0=kh(),yt=1e4>v0?kh:function(){return kh()-v0};function xs(){switch(DL()){case tf:return 99;case vS:return 98;case wS:return 97;case _S:return 96;case ES:return 95;default:throw Error(U(332))}}function bS(t){switch(t){case 99:return tf;case 98:return vS;case 97:return wS;case 96:return _S;case 95:return ES;default:throw Error(U(332))}}function Ei(t,e){return t=bS(t),NL(t,e)}function Ea(t,e,n){return t=bS(t),tg(t,e,n)}function In(){if(Xl!==null){var t=Xl;Xl=null,Sh(t)}SS()}function SS(){if(!Zf&&On!==null){Zf=!0;var t=0;try{var e=On;Ei(99,function(){for(;t<e.length;t++){var n=e[t];do n=n(!0);while(n!==null)}}),On=null}catch(n){throw On!==null&&(On=On.slice(t+1)),tg(tf,In),n}finally{Zf=!1}}}var LL=Ii.ReactCurrentBatchConfig;function tn(t,e){if(t&&t.defaultProps){e=De({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Uu=$r(null),ju=null,Qi=null,Vu=null;function ng(){Vu=Qi=ju=null}function rg(t){var e=Uu.current;Re(Uu),t.type._context._currentValue=e}function kS(t,e){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)===e){if(n===null||(n.childLanes&e)===e)break;n.childLanes|=e}else t.childLanes|=e,n!==null&&(n.childLanes|=e);t=t.return}}function fs(t,e){ju=t,Vu=Qi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(on=!0),t.firstContext=null)}function Xt(t,e){if(Vu!==t&&e!==!1&&e!==0)if((typeof e!="number"||e===1073741823)&&(Vu=t,e=1073741823),e={context:t,observedBits:e,next:null},Qi===null){if(ju===null)throw Error(U(308));Qi=e,ju.dependencies={lanes:0,firstContext:e,responders:null}}else Qi=Qi.next=e;return t._currentValue}var Xn=!1;function ig(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function TS(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function yr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function vr(t,e){if(t=t.updateQueue,t!==null){t=t.shared;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}}function w0(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ba(t,e,n,r){var i=t.updateQueue;Xn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;if(c!==null){c=c.updateQueue;var f=c.lastBaseUpdate;f!==o&&(f===null?c.firstBaseUpdate=u:f.next=u,c.lastBaseUpdate=l)}}if(s!==null){f=i.baseState,o=0,c=u=l=null;do{a=s.lane;var d=s.eventTime;if((r&a)===a){c!==null&&(c=c.next={eventTime:d,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=t,_=s;switch(a=e,d=n,_.tag){case 1:if(g=_.payload,typeof g=="function"){f=g.call(d,f,a);break e}f=g;break e;case 3:g.flags=g.flags&-4097|64;case 0:if(g=_.payload,a=typeof g=="function"?g.call(d,f,a):g,a==null)break e;f=De({},f,a);break e;case 2:Xn=!0}}s.callback!==null&&(t.flags|=32,a=i.effects,a===null?i.effects=[s]:a.push(s))}else d={eventTime:d,lane:a,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=d,l=f):c=c.next=d,o|=a;if(s=s.next,s===null){if(a=i.shared.pending,a===null)break;s=a.next,a.next=null,i.lastBaseUpdate=a,i.shared.pending=null}}while(1);c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,nl|=o,t.lanes=o,t.memoizedState=f}}function _0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var CS=new qc.Component().refs;function Bu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:De({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var nf={isMounted:function(t){return(t=t._reactInternals)?xi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=jt(),i=wr(t),s=yr(r,i);s.payload=e,n!=null&&(s.callback=n),vr(t,s),_r(t,i,r)},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=jt(),i=wr(t),s=yr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),vr(t,s),_r(t,i,r)},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=jt(),r=wr(t),i=yr(n,r);i.tag=2,e!=null&&(i.callback=e),vr(t,i),_r(t,r,n)}};function E0(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!wa(n,r)||!wa(i,s):!0}function IS(t,e,n){var r=!1,i=Rr,s=e.contextType;return typeof s=="object"&&s!==null?s=Xt(s):(i=Lt(e)?_i:_t.current,r=e.contextTypes,s=(r=r!=null)?Is(t,i):Rr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=nf,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function b0(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&nf.enqueueReplaceState(e,e.state,null)}function Th(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=CS,ig(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Xt(s):(s=Lt(e)?_i:_t.current,i.context=Is(t,s)),ba(t,n,i,r),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Bu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&nf.enqueueReplaceState(i,i.state,null),ba(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4)}var Cl=Array.isArray;function ao(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(s){var o=r.refs;o===CS&&(o=r.refs={}),s===null?delete o[i]:o[i]=s},e._stringRef=i,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function Il(t,e){if(t.type!=="textarea")throw Error(U(31,Object.prototype.toString.call(e)==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":e))}function xS(t){function e(p,h){if(t){var m=p.lastEffect;m!==null?(m.nextEffect=h,p.lastEffect=h):p.firstEffect=p.lastEffect=h,h.nextEffect=null,h.flags=8}}function n(p,h){if(!t)return null;for(;h!==null;)e(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=Pr(p,h),p.index=0,p.sibling=null,p}function s(p,h,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<h?(p.flags=2,h):m):(p.flags=2,h)):h}function o(p){return t&&p.alternate===null&&(p.flags=2),p}function a(p,h,m,v){return h===null||h.tag!==6?(h=id(m,p.mode,v),h.return=p,h):(h=i(h,m),h.return=p,h)}function l(p,h,m,v){return h!==null&&h.elementType===m.type?(v=i(h,m.props),v.ref=ao(p,h,m),v.return=p,v):(v=tu(m.type,m.key,m.props,null,p.mode,v),v.ref=ao(p,h,m),v.return=p,v)}function u(p,h,m,v){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=sd(m,p.mode,v),h.return=p,h):(h=i(h,m.children||[]),h.return=p,h)}function c(p,h,m,v,w){return h===null||h.tag!==7?(h=ms(m,p.mode,v,w),h.return=p,h):(h=i(h,m),h.return=p,h)}function f(p,h,m){if(typeof h=="string"||typeof h=="number")return h=id(""+h,p.mode,m),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case _o:return m=tu(h.type,h.key,h.props,null,p.mode,m),m.ref=ao(p,null,h),m.return=p,m;case Yr:return h=sd(h,p.mode,m),h.return=p,h}if(Cl(h)||to(h))return h=ms(h,p.mode,m,null),h.return=p,h;Il(p,h)}return null}function d(p,h,m,v){var w=h!==null?h.key:null;if(typeof m=="string"||typeof m=="number")return w!==null?null:a(p,h,""+m,v);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case _o:return m.key===w?m.type===rr?c(p,h,m.props.children,v,w):l(p,h,m,v):null;case Yr:return m.key===w?u(p,h,m,v):null}if(Cl(m)||to(m))return w!==null?null:c(p,h,m,v,null);Il(p,m)}return null}function g(p,h,m,v,w){if(typeof v=="string"||typeof v=="number")return p=p.get(m)||null,a(h,p,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case _o:return p=p.get(v.key===null?m:v.key)||null,v.type===rr?c(h,p,v.props.children,w,v.key):l(h,p,v,w);case Yr:return p=p.get(v.key===null?m:v.key)||null,u(h,p,v,w)}if(Cl(v)||to(v))return p=p.get(m)||null,c(h,p,v,w,null);Il(h,v)}return null}function _(p,h,m,v){for(var w=null,C=null,T=h,x=h=0,L=null;T!==null&&x<m.length;x++){T.index>x?(L=T,T=null):L=T.sibling;var S=d(p,T,m[x],v);if(S===null){T===null&&(T=L);break}t&&T&&S.alternate===null&&e(p,T),h=s(S,h,x),C===null?w=S:C.sibling=S,C=S,T=L}if(x===m.length)return n(p,T),w;if(T===null){for(;x<m.length;x++)T=f(p,m[x],v),T!==null&&(h=s(T,h,x),C===null?w=T:C.sibling=T,C=T);return w}for(T=r(p,T);x<m.length;x++)L=g(T,p,x,m[x],v),L!==null&&(t&&L.alternate!==null&&T.delete(L.key===null?x:L.key),h=s(L,h,x),C===null?w=L:C.sibling=L,C=L);return t&&T.forEach(function(D){return e(p,D)}),w}function E(p,h,m,v){var w=to(m);if(typeof w!="function")throw Error(U(150));if(m=w.call(m),m==null)throw Error(U(151));for(var C=w=null,T=h,x=h=0,L=null,S=m.next();T!==null&&!S.done;x++,S=m.next()){T.index>x?(L=T,T=null):L=T.sibling;var D=d(p,T,S.value,v);if(D===null){T===null&&(T=L);break}t&&T&&D.alternate===null&&e(p,T),h=s(D,h,x),C===null?w=D:C.sibling=D,C=D,T=L}if(S.done)return n(p,T),w;if(T===null){for(;!S.done;x++,S=m.next())S=f(p,S.value,v),S!==null&&(h=s(S,h,x),C===null?w=S:C.sibling=S,C=S);return w}for(T=r(p,T);!S.done;x++,S=m.next())S=g(T,p,x,S.value,v),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?x:S.key),h=s(S,h,x),C===null?w=S:C.sibling=S,C=S);return t&&T.forEach(function(B){return e(p,B)}),w}return function(p,h,m,v){var w=typeof m=="object"&&m!==null&&m.type===rr&&m.key===null;w&&(m=m.props.children);var C=typeof m=="object"&&m!==null;if(C)switch(m.$$typeof){case _o:e:{for(C=m.key,w=h;w!==null;){if(w.key===C){switch(w.tag){case 7:if(m.type===rr){n(p,w.sibling),h=i(w,m.props.children),h.return=p,p=h;break e}break;default:if(w.elementType===m.type){n(p,w.sibling),h=i(w,m.props),h.ref=ao(p,w,m),h.return=p,p=h;break e}}n(p,w);break}else e(p,w);w=w.sibling}m.type===rr?(h=ms(m.props.children,p.mode,v,m.key),h.return=p,p=h):(v=tu(m.type,m.key,m.props,null,p.mode,v),v.ref=ao(p,h,m),v.return=p,p=v)}return o(p);case Yr:e:{for(w=m.key;h!==null;){if(h.key===w)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(p,h.sibling),h=i(h,m.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else e(p,h);h=h.sibling}h=sd(m,p.mode,v),h.return=p,p=h}return o(p)}if(typeof m=="string"||typeof m=="number")return m=""+m,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,m),h.return=p,p=h):(n(p,h),h=id(m,p.mode,v),h.return=p,p=h),o(p);if(Cl(m))return _(p,h,m,v);if(to(m))return E(p,h,m,v);if(C&&Il(p,m),typeof m=="undefined"&&!w)switch(p.tag){case 1:case 22:case 0:case 11:case 15:throw Error(U(152,os(p.type)||"Component"))}return n(p,h)}}var zu=xS(!0),OS=xS(!1),tl={},Sn=$r(tl),Sa=$r(tl),ka=$r(tl);function Jr(t){if(t===tl)throw Error(U(174));return t}function Ch(t,e){switch(Fe(ka,e),Fe(Sa,t),Fe(Sn,tl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ch(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ch(e,t)}Re(Sn),Fe(Sn,e)}function Os(){Re(Sn),Re(Sa),Re(ka)}function S0(t){Jr(ka.current);var e=Jr(Sn.current),n=ch(e,t.type);e!==n&&(Fe(Sa,t),Fe(Sn,n))}function sg(t){Sa.current===t&&(Re(Sn),Re(Sa))}var $e=$r(0);function Hu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&64)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Mn=null,ur=null,kn=!1;function AS(t,e){var n=Yt(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=e,n.return=t,n.flags=8,t.lastEffect!==null?(t.lastEffect.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n}function k0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,!0):!1;case 13:return!1;default:return!1}}function Ih(t){if(kn){var e=ur;if(e){var n=e;if(!k0(t,e)){if(e=cs(n.nextSibling),!e||!k0(t,e)){t.flags=t.flags&-1025|2,kn=!1,Mn=t;return}AS(Mn,n)}Mn=t,ur=cs(e.firstChild)}else t.flags=t.flags&-1025|2,kn=!1,Mn=t}}function T0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Mn=t}function xl(t){if(t!==Mn)return!1;if(!kn)return T0(t),kn=!0,!1;var e=t.type;if(t.tag!==5||e!=="head"&&e!=="body"&&!Eh(e,t.memoizedProps))for(e=ur;e;)AS(t,e),e=cs(e.nextSibling);if(T0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ur=cs(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ur=null}}else ur=Mn?cs(t.stateNode.nextSibling):null;return!0}function ed(){ur=Mn=null,kn=!1}var ds=[];function og(){for(var t=0;t<ds.length;t++)ds[t]._workInProgressVersionPrimary=null;ds.length=0}var Bo=Ii.ReactCurrentDispatcher,Qt=Ii.ReactCurrentBatchConfig,Ta=0,Ve=null,pt=null,st=null,Wu=!1,zo=!1;function Rt(){throw Error(U(321))}function ag(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Gt(t[n],e[n]))return!1;return!0}function lg(t,e,n,r,i,s){if(Ta=s,Ve=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Bo.current=t===null||t.memoizedState===null?FL:UL,t=n(r,i),zo){s=0;do{if(zo=!1,!(25>s))throw Error(U(301));s+=1,st=pt=null,e.updateQueue=null,Bo.current=jL,t=n(r,i)}while(zo)}if(Bo.current=Yu,e=pt!==null&&pt.next!==null,Ta=0,st=pt=Ve=null,Wu=!1,e)throw Error(U(300));return t}function Zr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return st===null?Ve.memoizedState=st=t:st=st.next=t,st}function Oi(){if(pt===null){var t=Ve.alternate;t=t!==null?t.memoizedState:null}else t=pt.next;var e=st===null?Ve.memoizedState:st.next;if(e!==null)st=e,pt=t;else{if(t===null)throw Error(U(310));pt=t,t={memoizedState:pt.memoizedState,baseState:pt.baseState,baseQueue:pt.baseQueue,queue:pt.queue,next:null},st===null?Ve.memoizedState=st=t:st=st.next=t}return st}function gn(t,e){return typeof e=="function"?e(t):e}function lo(t){var e=Oi(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=pt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){i=i.next,r=r.baseState;var a=o=s=null,l=i;do{var u=l.lane;if((Ta&u)===u)a!==null&&(a=a.next={lane:0,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null}),r=l.eagerReducer===t?l.eagerState:t(r,l.action);else{var c={lane:u,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null};a===null?(o=a=c,s=r):a=a.next=c,Ve.lanes|=u,nl|=u}l=l.next}while(l!==null&&l!==i);a===null?s=r:a.next=o,Gt(r,e.memoizedState)||(on=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=a,n.lastRenderedState=r}return[e.memoizedState,n.dispatch]}function uo(t){var e=Oi(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Gt(s,e.memoizedState)||(on=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function C0(t,e,n){var r=e._getVersion;r=r(e._source);var i=e._workInProgressVersionPrimary;if(i!==null?t=i===r:(t=t.mutableReadLanes,(t=(Ta&t)===t)&&(e._workInProgressVersionPrimary=r,ds.push(e))),t)return n(e._source);throw ds.push(e),Error(U(350))}function RS(t,e,n,r){var i=It;if(i===null)throw Error(U(349));var s=e._getVersion,o=s(e._source),a=Bo.current,l=a.useState(function(){return C0(i,e,n)}),u=l[1],c=l[0];l=st;var f=t.memoizedState,d=f.refs,g=d.getSnapshot,_=f.source;f=f.subscribe;var E=Ve;return t.memoizedState={refs:d,source:e,subscribe:r},a.useEffect(function(){d.getSnapshot=n,d.setSnapshot=u;var p=s(e._source);if(!Gt(o,p)){p=n(e._source),Gt(c,p)||(u(p),p=wr(E),i.mutableReadLanes|=p&i.pendingLanes),p=i.mutableReadLanes,i.entangledLanes|=p;for(var h=i.entanglements,m=p;0<m;){var v=31-Ar(m),w=1<<v;h[v]|=p,m&=~w}}},[n,e,r]),a.useEffect(function(){return r(e._source,function(){var p=d.getSnapshot,h=d.setSnapshot;try{h(p(e._source));var m=wr(E);i.mutableReadLanes|=m&i.pendingLanes}catch(v){h(function(){throw v})}})},[e,r]),Gt(g,n)&&Gt(_,e)&&Gt(f,r)||(t={pending:null,dispatch:null,lastRenderedReducer:gn,lastRenderedState:c},t.dispatch=u=fg.bind(null,Ve,t),l.queue=t,l.baseQueue=null,c=C0(i,e,n),l.memoizedState=l.baseState=c),c}function NS(t,e,n){var r=Oi();return RS(r,t,e,n)}function co(t){var e=Zr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t=e.queue={pending:null,dispatch:null,lastRenderedReducer:gn,lastRenderedState:t},t=t.dispatch=fg.bind(null,Ve,t),[e.memoizedState,t]}function qu(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ve.updateQueue,e===null?(e={lastEffect:null},Ve.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function I0(t){var e=Zr();return t={current:t},e.memoizedState=t}function Ku(){return Oi().memoizedState}function xh(t,e,n,r){var i=Zr();Ve.flags|=t,i.memoizedState=qu(1|e,n,void 0,r===void 0?null:r)}function ug(t,e,n,r){var i=Oi();r=r===void 0?null:r;var s=void 0;if(pt!==null){var o=pt.memoizedState;if(s=o.destroy,r!==null&&ag(r,o.deps)){qu(e,n,s,r);return}}Ve.flags|=t,i.memoizedState=qu(1|e,n,s,r)}function x0(t,e){return xh(516,4,t,e)}function Gu(t,e){return ug(516,4,t,e)}function PS(t,e){return ug(4,2,t,e)}function DS(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function MS(t,e,n){return n=n!=null?n.concat([t]):null,ug(4,2,DS.bind(null,e,t),n)}function cg(){}function LS(t,e){var n=Oi();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ag(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function $S(t,e){var n=Oi();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ag(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function $L(t,e){var n=xs();Ei(98>n?98:n,function(){t(!0)}),Ei(97<n?97:n,function(){var r=Qt.transition;Qt.transition=1;try{t(!1),e()}finally{Qt.transition=r}})}function fg(t,e,n){var r=jt(),i=wr(t),s={lane:i,action:n,eagerReducer:null,eagerState:null,next:null},o=e.pending;if(o===null?s.next=s:(s.next=o.next,o.next=s),e.pending=s,o=t.alternate,t===Ve||o!==null&&o===Ve)zo=Wu=!0;else{if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var a=e.lastRenderedState,l=o(a,n);if(s.eagerReducer=o,s.eagerState=l,Gt(l,a))return}catch{}finally{}_r(t,i,r)}}var Yu={readContext:Xt,useCallback:Rt,useContext:Rt,useEffect:Rt,useImperativeHandle:Rt,useLayoutEffect:Rt,useMemo:Rt,useReducer:Rt,useRef:Rt,useState:Rt,useDebugValue:Rt,useDeferredValue:Rt,useTransition:Rt,useMutableSource:Rt,useOpaqueIdentifier:Rt,unstable_isNewReconciler:!1},FL={readContext:Xt,useCallback:function(t,e){return Zr().memoizedState=[t,e===void 0?null:e],t},useContext:Xt,useEffect:x0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,xh(4,2,DS.bind(null,e,t),n)},useLayoutEffect:function(t,e){return xh(4,2,t,e)},useMemo:function(t,e){var n=Zr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Zr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t=r.queue={pending:null,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},t=t.dispatch=fg.bind(null,Ve,t),[r.memoizedState,t]},useRef:I0,useState:co,useDebugValue:cg,useDeferredValue:function(t){var e=co(t),n=e[0],r=e[1];return x0(function(){var i=Qt.transition;Qt.transition=1;try{r(t)}finally{Qt.transition=i}},[t]),n},useTransition:function(){var t=co(!1),e=t[0];return t=$L.bind(null,t[1]),I0(t),[t,e]},useMutableSource:function(t,e,n){var r=Zr();return r.memoizedState={refs:{getSnapshot:e,setSnapshot:null},source:t,subscribe:n},RS(r,t,e,n)},useOpaqueIdentifier:function(){if(kn){var t=!1,e=RL(function(){throw t||(t=!0,n("r:"+(Xf++).toString(36))),Error(U(355))}),n=co(e)[1];return(Ve.mode&2)===0&&(Ve.flags|=516,qu(5,function(){n("r:"+(Xf++).toString(36))},void 0,null)),e}return e="r:"+(Xf++).toString(36),co(e),e},unstable_isNewReconciler:!1},UL={readContext:Xt,useCallback:LS,useContext:Xt,useEffect:Gu,useImperativeHandle:MS,useLayoutEffect:PS,useMemo:$S,useReducer:lo,useRef:Ku,useState:function(){return lo(gn)},useDebugValue:cg,useDeferredValue:function(t){var e=lo(gn),n=e[0],r=e[1];return Gu(function(){var i=Qt.transition;Qt.transition=1;try{r(t)}finally{Qt.transition=i}},[t]),n},useTransition:function(){var t=lo(gn)[0];return[Ku().current,t]},useMutableSource:NS,useOpaqueIdentifier:function(){return lo(gn)[0]},unstable_isNewReconciler:!1},jL={readContext:Xt,useCallback:LS,useContext:Xt,useEffect:Gu,useImperativeHandle:MS,useLayoutEffect:PS,useMemo:$S,useReducer:uo,useRef:Ku,useState:function(){return uo(gn)},useDebugValue:cg,useDeferredValue:function(t){var e=uo(gn),n=e[0],r=e[1];return Gu(function(){var i=Qt.transition;Qt.transition=1;try{r(t)}finally{Qt.transition=i}},[t]),n},useTransition:function(){var t=uo(gn)[0];return[Ku().current,t]},useMutableSource:NS,useOpaqueIdentifier:function(){return uo(gn)[0]},unstable_isNewReconciler:!1},VL=Ii.ReactCurrentOwner,on=!1;function Nt(t,e,n,r){e.child=t===null?OS(e,null,n,r):zu(e,t.child,n,r)}function O0(t,e,n,r,i){n=n.render;var s=e.ref;return fs(e,i),r=lg(t,e,n,r,s,i),t!==null&&!on?(e.updateQueue=t.updateQueue,e.flags&=-517,t.lanes&=~i,Ln(t,e,i)):(e.flags|=1,Nt(t,e,r,i),e.child)}function A0(t,e,n,r,i,s){if(t===null){var o=n.type;return typeof o=="function"&&!yg(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,FS(t,e,o,r,i,s)):(t=tu(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}return o=t.child,(i&s)===0&&(i=o.memoizedProps,n=n.compare,n=n!==null?n:wa,n(i,r)&&t.ref===e.ref)?Ln(t,e,s):(e.flags|=1,t=Pr(o,r),t.ref=e.ref,t.return=e,e.child=t)}function FS(t,e,n,r,i,s){if(t!==null&&wa(t.memoizedProps,r)&&t.ref===e.ref)if(on=!1,(s&i)!==0)(t.flags&16384)!==0&&(on=!0);else return e.lanes=t.lanes,Ln(t,e,s);return Oh(t,e,n,r,s)}function td(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden"||r.mode==="unstable-defer-without-hiding")if((e.mode&4)===0)e.memoizedState={baseLanes:0},Al(e,n);else if((n&1073741824)!==0)e.memoizedState={baseLanes:0},Al(e,s!==null?s.baseLanes:n);else return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t},Al(e,t),null;else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Al(e,r);return Nt(t,e,i,n),e.child}function US(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=128)}function Oh(t,e,n,r,i){var s=Lt(n)?_i:_t.current;return s=Is(e,s),fs(e,i),n=lg(t,e,n,r,s,i),t!==null&&!on?(e.updateQueue=t.updateQueue,e.flags&=-517,t.lanes&=~i,Ln(t,e,i)):(e.flags|=1,Nt(t,e,n,i),e.child)}function R0(t,e,n,r,i){if(Lt(n)){var s=!0;Ql(e)}else s=!1;if(fs(e,i),e.stateNode===null)t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),IS(e,n,r),Th(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Xt(u):(u=Lt(n)?_i:_t.current,u=Is(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&b0(e,o,r,u),Xn=!1;var d=e.memoizedState;o.state=d,ba(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Mt.current||Xn?(typeof c=="function"&&(Bu(e,n,c,r),l=e.memoizedState),(a=Xn||E0(e,n,a,r,d,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4)):(typeof o.componentDidMount=="function"&&(e.flags|=4),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4),r=!1)}else{o=e.stateNode,TS(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:tn(e.type,a),o.props=u,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Xt(l):(l=Lt(n)?_i:_t.current,l=Is(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&b0(e,o,r,l),Xn=!1,d=e.memoizedState,o.state=d,ba(e,r,o,i);var _=e.memoizedState;a!==f||d!==_||Mt.current||Xn?(typeof g=="function"&&(Bu(e,n,g,r),_=e.memoizedState),(u=Xn||E0(e,n,u,r,d,_,l))?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=256)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=256),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=256),r=!1)}return Ah(t,e,n,r,s,i)}function Ah(t,e,n,r,i,s){US(t,e);var o=(e.flags&64)!==0;if(!r&&!o)return i&&g0(e,n,!1),Ln(t,e,s);r=e.stateNode,VL.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=zu(e,t.child,null,s),e.child=zu(e,null,a,s)):Nt(t,e,a,s),e.memoizedState=r.state,i&&g0(e,n,!0),e.child}function N0(t){var e=t.stateNode;e.pendingContext?m0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&m0(t,e.context,!1),Ch(t,e.containerInfo)}var Ol={dehydrated:null,retryLane:0};function P0(t,e,n){var r=e.pendingProps,i=$e.current,s=!1,o;return(o=(e.flags&64)!==0)||(o=t!==null&&t.memoizedState===null?!1:(i&2)!==0),o?(s=!0,e.flags&=-65):t!==null&&t.memoizedState===null||r.fallback===void 0||r.unstable_avoidThisFallback===!0||(i|=1),Fe($e,i&1),t===null?(r.fallback!==void 0&&Ih(e),t=r.children,i=r.fallback,s?(t=D0(e,t,i,n),e.child.memoizedState={baseLanes:n},e.memoizedState=Ol,t):typeof r.unstable_expectedLoadTime=="number"?(t=D0(e,t,i,n),e.child.memoizedState={baseLanes:n},e.memoizedState=Ol,e.lanes=33554432,t):(n=vg({mode:"visible",children:t},e.mode,n,null),n.return=e,e.child=n)):t.memoizedState!==null?s?(r=L0(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},s.childLanes=t.childLanes&~n,e.memoizedState=Ol,r):(n=M0(t,e,r.children,n),e.memoizedState=null,n):s?(r=L0(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},s.childLanes=t.childLanes&~n,e.memoizedState=Ol,r):(n=M0(t,e,r.children,n),e.memoizedState=null,n)}function D0(t,e,n,r){var i=t.mode,s=t.child;return e={mode:"hidden",children:e},(i&2)===0&&s!==null?(s.childLanes=0,s.pendingProps=e):s=vg(e,i,0,null),n=ms(n,i,r,null),s.return=t,n.return=t,s.sibling=n,t.child=s,n}function M0(t,e,n,r){var i=t.child;return t=i.sibling,n=Pr(i,{mode:"visible",children:n}),(e.mode&2)===0&&(n.lanes=r),n.return=e,n.sibling=null,t!==null&&(t.nextEffect=null,t.flags=8,e.firstEffect=e.lastEffect=t),e.child=n}function L0(t,e,n,r,i){var s=e.mode,o=t.child;t=o.sibling;var a={mode:"hidden",children:n};return(s&2)===0&&e.child!==o?(n=e.child,n.childLanes=0,n.pendingProps=a,o=n.lastEffect,o!==null?(e.firstEffect=n.firstEffect,e.lastEffect=o,o.nextEffect=null):e.firstEffect=e.lastEffect=null):n=Pr(o,a),t!==null?r=Pr(t,r):(r=ms(r,s,i,null),r.flags|=2),r.return=e,n.return=e,n.sibling=r,e.child=n,r}function $0(t,e){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),kS(t.return,e)}function nd(t,e,n,r,i,s){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,lastEffect:s}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.lastEffect=s)}function F0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Nt(t,e,r.children,n),r=$e.current,(r&2)!==0)r=r&1|2,e.flags|=64;else{if(t!==null&&(t.flags&64)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&$0(t,n);else if(t.tag===19)$0(t,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Fe($e,r),(e.mode&2)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Hu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),nd(e,!1,i,n,s,e.lastEffect);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Hu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}nd(e,!0,n,null,s,e.lastEffect);break;case"together":nd(e,!1,null,null,void 0,e.lastEffect);break;default:e.memoizedState=null}return e.child}function Ln(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),nl|=e.lanes,(n&e.childLanes)!==0){if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=Pr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Pr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}return null}var jS,Rh,VS,BS;jS=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Rh=function(){};VS=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Jr(Sn.current);var s=null;switch(n){case"input":i=ih(t,i),r=ih(t,r),s=[];break;case"option":i=ah(t,i),r=ah(t,r),s=[];break;case"select":i=De({},i,{value:void 0}),r=De({},r,{value:void 0}),s=[];break;case"textarea":i=lh(t,i),r=lh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Lu)}fh(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(da.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(da.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Oe("scroll",t),s||a===l||(s=[])):typeof l=="object"&&l!==null&&l.$$typeof===Fm?l.toString():(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};BS=function(t,e,n,r){n!==r&&(e.flags|=4)};function fo(t,e){if(!kn)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function BL(t,e,n){var r=e.pendingProps;switch(e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Lt(e.type)&&Fu(),null;case 3:return Os(),Re(Mt),Re(_t),og(),r=e.stateNode,r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(xl(e)?e.flags|=4:r.hydrate||(e.flags|=256)),Rh(e),null;case 5:sg(e);var i=Jr(ka.current);if(n=e.type,t!==null&&e.stateNode!=null)VS(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=128);else{if(!r){if(e.stateNode===null)throw Error(U(166));return null}if(t=Jr(Sn.current),xl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[lr]=e,r[$u]=s,n){case"dialog":Oe("cancel",r),Oe("close",r);break;case"iframe":case"object":case"embed":Oe("load",r);break;case"video":case"audio":for(t=0;t<bo.length;t++)Oe(bo[t],r);break;case"source":Oe("error",r);break;case"img":case"image":case"link":Oe("error",r),Oe("load",r);break;case"details":Oe("toggle",r);break;case"input":Fv(r,s),Oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Oe("invalid",r);break;case"textarea":jv(r,s),Oe("invalid",r)}fh(n,s),t=null;for(var o in s)s.hasOwnProperty(o)&&(i=s[o],o==="children"?typeof i=="string"?r.textContent!==i&&(t=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(t=["children",""+i]):da.hasOwnProperty(o)&&i!=null&&o==="onScroll"&&Oe("scroll",r));switch(n){case"input":bl(r),Uv(r,s,!0);break;case"textarea":bl(r),Vv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Lu)}r=t,e.updateQueue=r,r!==null&&(e.flags|=4)}else{switch(o=i.nodeType===9?i:i.ownerDocument,t===uh.html&&(t=Mb(n)),t===uh.html?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[lr]=e,t[$u]=r,jS(t,e,!1,!1),e.stateNode=t,o=dh(n,r),n){case"dialog":Oe("cancel",t),Oe("close",t),i=r;break;case"iframe":case"object":case"embed":Oe("load",t),i=r;break;case"video":case"audio":for(i=0;i<bo.length;i++)Oe(bo[i],t);i=r;break;case"source":Oe("error",t),i=r;break;case"img":case"image":case"link":Oe("error",t),Oe("load",t),i=r;break;case"details":Oe("toggle",t),i=r;break;case"input":Fv(t,r),i=ih(t,r),Oe("invalid",t);break;case"option":i=ah(t,r);break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=De({},r,{value:void 0}),Oe("invalid",t);break;case"textarea":jv(t,r),i=lh(t,r),Oe("invalid",t);break;default:i=r}fh(n,i);var a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Fb(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Lb(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ha(t,l):typeof l=="number"&&ha(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(da.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Oe("scroll",t):l!=null&&Nm(t,s,l,o))}switch(n){case"input":bl(t),Uv(t,r,!1);break;case"textarea":bl(t),Vv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Or(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?as(t,!!r.multiple,s,!1):r.defaultValue!=null&&as(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Lu)}mS(n,r)&&(e.flags|=4)}e.ref!==null&&(e.flags|=128)}return null;case 6:if(t&&e.stateNode!=null)BS(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));n=Jr(ka.current),Jr(Sn.current),xl(e)?(r=e.stateNode,n=e.memoizedProps,r[lr]=e,r.nodeValue!==n&&(e.flags|=4)):(r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[lr]=e,e.stateNode=r)}return null;case 13:return Re($e),r=e.memoizedState,(e.flags&64)!==0?(e.lanes=n,e):(r=r!==null,n=!1,t===null?e.memoizedProps.fallback!==void 0&&xl(e):n=t.memoizedState!==null,r&&!n&&(e.mode&2)!==0&&(t===null&&e.memoizedProps.unstable_avoidThisFallback!==!0||($e.current&1)!==0?at===0&&(at=3):((at===0||at===3)&&(at=4),It===null||(nl&134217727)===0&&(Gs&134217727)===0||hs(It,wt))),(r||n)&&(e.flags|=4),null);case 4:return Os(),Rh(e),t===null&&dS(e.stateNode.containerInfo),null;case 10:return rg(e),null;case 17:return Lt(e.type)&&Fu(),null;case 19:if(Re($e),r=e.memoizedState,r===null)return null;if(s=(e.flags&64)!==0,o=r.rendering,o===null)if(s)fo(r,!1);else{if(at!==0||t!==null&&(t.flags&64)!==0)for(t=e.child;t!==null;){if(o=Hu(t),o!==null){for(e.flags|=64,fo(r,!1),s=o.updateQueue,s!==null&&(e.updateQueue=s,e.flags|=4),r.lastEffect===null&&(e.firstEffect=null),e.lastEffect=r.lastEffect,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=2,s.nextEffect=null,s.firstEffect=null,s.lastEffect=null,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Fe($e,$e.current&1|2),e.child}t=t.sibling}r.tail!==null&&yt()>$h&&(e.flags|=64,s=!0,fo(r,!1),e.lanes=33554432)}else{if(!s)if(t=Hu(o),t!==null){if(e.flags|=64,s=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),fo(r,!0),r.tail===null&&r.tailMode==="hidden"&&!o.alternate&&!kn)return e=e.lastEffect=r.lastEffect,e!==null&&(e.nextEffect=null),null}else 2*yt()-r.renderingStartTime>$h&&n!==1073741824&&(e.flags|=64,s=!0,fo(r,!1),e.lanes=33554432);r.isBackwards?(o.sibling=e.child,e.child=o):(n=r.last,n!==null?n.sibling=o:e.child=o,r.last=o)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=e.lastEffect,r.renderingStartTime=yt(),n.sibling=null,e=$e.current,Fe($e,s?e&1|2:e&1),n):null;case 23:case 24:return gg(),t!==null&&t.memoizedState!==null!=(e.memoizedState!==null)&&r.mode!=="unstable-defer-without-hiding"&&(e.flags|=4),null}throw Error(U(156,e.tag))}function zL(t){switch(t.tag){case 1:Lt(t.type)&&Fu();var e=t.flags;return e&4096?(t.flags=e&-4097|64,t):null;case 3:if(Os(),Re(Mt),Re(_t),og(),e=t.flags,(e&64)!==0)throw Error(U(285));return t.flags=e&-4097|64,t;case 5:return sg(t),null;case 13:return Re($e),e=t.flags,e&4096?(t.flags=e&-4097|64,t):null;case 19:return Re($e),null;case 4:return Os(),null;case 10:return rg(t),null;case 23:case 24:return gg(),null;default:return null}}function dg(t,e){try{var n="",r=e;do n+=SM(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i}}function Nh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var HL=typeof WeakMap=="function"?WeakMap:Map;function zS(t,e,n){n=yr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Xu||(Xu=!0,Fh=r),Nh(t,e)},n}function HS(t,e,n){n=yr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return Nh(t,e),r(i)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){typeof r!="function"&&(yn===null?yn=new Set([this]):yn.add(this),Nh(t,e));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}var WL=typeof WeakSet=="function"?WeakSet:Set;function U0(t){var e=t.ref;if(e!==null)if(typeof e=="function")try{e(null)}catch(n){Er(t,n)}else e.current=null}function qL(t,e){switch(e.tag){case 0:case 11:case 15:case 22:return;case 1:if(e.flags&256&&t!==null){var n=t.memoizedProps,r=t.memoizedState;t=e.stateNode,e=t.getSnapshotBeforeUpdate(e.elementType===e.type?n:tn(e.type,n),r),t.__reactInternalSnapshotBeforeUpdate=e}return;case 3:e.flags&256&&Zm(e.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(U(163))}function KL(t,e,n){switch(n.tag){case 0:case 11:case 15:case 22:if(e=n.updateQueue,e=e!==null?e.lastEffect:null,e!==null){t=e=e.next;do{if((t.tag&3)===3){var r=t.create;t.destroy=r()}t=t.next}while(t!==e)}if(e=n.updateQueue,e=e!==null?e.lastEffect:null,e!==null){t=e=e.next;do{var i=t;r=i.next,i=i.tag,(i&4)!==0&&(i&1)!==0&&(ZS(n,t),t$(n,t)),t=r}while(t!==e)}return;case 1:t=n.stateNode,n.flags&4&&(e===null?t.componentDidMount():(r=n.elementType===n.type?e.memoizedProps:tn(n.type,e.memoizedProps),t.componentDidUpdate(r,e.memoizedState,t.__reactInternalSnapshotBeforeUpdate))),e=n.updateQueue,e!==null&&_0(n,e,t);return;case 3:if(e=n.updateQueue,e!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}_0(n,e,t)}return;case 5:t=n.stateNode,e===null&&n.flags&4&&mS(n.type,n.memoizedProps)&&t.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&Gb(n))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(U(163))}function j0(t,e){for(var n=t;;){if(n.tag===5){var r=n.stateNode;if(e)r=r.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{r=n.stateNode;var i=n.memoizedProps.style;i=i!=null&&i.hasOwnProperty("display")?i.display:null,r.style.display=$b("display",i)}}else if(n.tag===6)n.stateNode.nodeValue=e?"":n.memoizedProps;else if((n.tag!==23&&n.tag!==24||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function V0(t,e){if(ri&&typeof ri.onCommitFiberUnmount=="function")try{ri.onCommitFiberUnmount(eg,e)}catch{}switch(e.tag){case 0:case 11:case 14:case 15:case 22:if(t=e.updateQueue,t!==null&&(t=t.lastEffect,t!==null)){var n=t=t.next;do{var r=n,i=r.destroy;if(r=r.tag,i!==void 0)if((r&4)!==0)ZS(e,n);else{r=e;try{i()}catch(s){Er(r,s)}}n=n.next}while(n!==t)}break;case 1:if(U0(e),t=e.stateNode,typeof t.componentWillUnmount=="function")try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(s){Er(e,s)}break;case 5:U0(e);break;case 4:WS(t,e)}}function B0(t){t.alternate=null,t.child=null,t.dependencies=null,t.firstEffect=null,t.lastEffect=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.return=null,t.updateQueue=null}function z0(t){return t.tag===5||t.tag===3||t.tag===4}function H0(t){e:{for(var e=t.return;e!==null;){if(z0(e))break e;e=e.return}throw Error(U(160))}var n=e;switch(e=n.stateNode,n.tag){case 5:var r=!1;break;case 3:e=e.containerInfo,r=!0;break;case 4:e=e.containerInfo,r=!0;break;default:throw Error(U(161))}n.flags&16&&(ha(e,""),n.flags&=-17);e:t:for(n=t;;){for(;n.sibling===null;){if(n.return===null||z0(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2)){n=n.stateNode;break e}}r?Ph(t,n,e):Dh(t,n,e)}function Ph(t,e,n){var r=t.tag,i=r===5||r===6;if(i)t=i?t.stateNode:t.stateNode.instance,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Lu));else if(r!==4&&(t=t.child,t!==null))for(Ph(t,e,n),t=t.sibling;t!==null;)Ph(t,e,n),t=t.sibling}function Dh(t,e,n){var r=t.tag,i=r===5||r===6;if(i)t=i?t.stateNode:t.stateNode.instance,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Dh(t,e,n),t=t.sibling;t!==null;)Dh(t,e,n),t=t.sibling}function WS(t,e){for(var n=e,r=!1,i,s;;){if(!r){r=n.return;e:for(;;){if(r===null)throw Error(U(160));switch(i=r.stateNode,r.tag){case 5:s=!1;break e;case 3:i=i.containerInfo,s=!0;break e;case 4:i=i.containerInfo,s=!0;break e}r=r.return}r=!0}if(n.tag===5||n.tag===6){e:for(var o=t,a=n,l=a;;)if(V0(o,l),l.child!==null&&l.tag!==4)l.child.return=l,l=l.child;else{if(l===a)break e;for(;l.sibling===null;){if(l.return===null||l.return===a)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}s?(o=i,a=n.stateNode,o.nodeType===8?o.parentNode.removeChild(a):o.removeChild(a)):i.removeChild(n.stateNode)}else if(n.tag===4){if(n.child!==null){i=n.stateNode.containerInfo,s=!0,n.child.return=n,n=n.child;continue}}else if(V0(t,n),n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return,n.tag===4&&(r=!1)}n.sibling.return=n.return,n=n.sibling}}function rd(t,e){switch(e.tag){case 0:case 11:case 14:case 15:case 22:var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do(r.tag&3)===3&&(t=r.destroy,r.destroy=void 0,t!==void 0&&t()),r=r.next;while(r!==n)}return;case 1:return;case 5:if(n=e.stateNode,n!=null){r=e.memoizedProps;var i=t!==null?t.memoizedProps:r;t=e.type;var s=e.updateQueue;if(e.updateQueue=null,s!==null){for(n[$u]=r,t==="input"&&r.type==="radio"&&r.name!=null&&Pb(n,r),dh(t,i),e=dh(t,r),i=0;i<s.length;i+=2){var o=s[i],a=s[i+1];o==="style"?Fb(n,a):o==="dangerouslySetInnerHTML"?Lb(n,a):o==="children"?ha(n,a):Nm(n,o,a,e)}switch(t){case"input":sh(n,r);break;case"textarea":Db(n,r);break;case"select":t=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,s=r.value,s!=null?as(n,!!r.multiple,s,!1):t!==!!r.multiple&&(r.defaultValue!=null?as(n,!!r.multiple,r.defaultValue,!0):as(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(e.stateNode===null)throw Error(U(162));e.stateNode.nodeValue=e.memoizedProps;return;case 3:n=e.stateNode,n.hydrate&&(n.hydrate=!1,Gb(n.containerInfo));return;case 12:return;case 13:e.memoizedState!==null&&(mg=yt(),j0(e.child,!0)),W0(e);return;case 19:W0(e);return;case 17:return;case 23:case 24:j0(e,e.memoizedState!==null);return}throw Error(U(163))}function W0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new WL),e.forEach(function(r){var i=i$.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function GL(t,e){return t!==null&&(t=t.memoizedState,t===null||t.dehydrated!==null)?(e=e.memoizedState,e!==null&&e.dehydrated===null):!1}var YL=Math.ceil,Qu=Ii.ReactCurrentDispatcher,hg=Ii.ReactCurrentOwner,oe=0,It=null,Qe=null,wt=0,bi=0,Mh=$r(0),at=0,rf=null,Ks=0,nl=0,Gs=0,pg=0,Lh=null,mg=0,$h=1/0;function Ys(){$h=yt()+500}var G=null,Xu=!1,Fh=null,yn=null,Nr=!1,Ho=null,So=90,Uh=[],jh=[],Un=null,Wo=0,Vh=null,Jl=-1,Rn=0,Zl=0,qo=null,eu=!1;function jt(){return(oe&48)!==0?yt():Jl!==-1?Jl:Jl=yt()}function wr(t){if(t=t.mode,(t&2)===0)return 1;if((t&4)===0)return xs()===99?1:2;if(Rn===0&&(Rn=Ks),LL.transition!==0){Zl!==0&&(Zl=Lh!==null?Lh.pendingLanes:0),t=Rn;var e=4186112&~Zl;return e&=-e,e===0&&(t=4186112&~t,e=t&-t,e===0&&(e=8192)),e}return t=xs(),(oe&4)!==0&&t===98?t=Du(12,Rn):(t=UM(t),t=Du(t,Rn)),t}function _r(t,e,n){if(50<Wo)throw Wo=0,Vh=null,Error(U(185));if(t=sf(t,e),t===null)return null;Qc(t,e,n),t===It&&(Gs|=e,at===4&&hs(t,wt));var r=xs();e===1?(oe&8)!==0&&(oe&48)===0?Bh(t):(Jt(t,n),oe===0&&(Ys(),In())):((oe&4)===0||r!==98&&r!==99||(Un===null?Un=new Set([t]):Un.add(t)),Jt(t,n)),Lh=t}function sf(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}function Jt(t,e){for(var n=t.callbackNode,r=t.suspendedLanes,i=t.pingedLanes,s=t.expirationTimes,o=t.pendingLanes;0<o;){var a=31-Ar(o),l=1<<a,u=s[a];if(u===-1){if((l&r)===0||(l&i)!==0){u=e,$i(l);var c=Ie;s[a]=10<=c?u+250:6<=c?u+5e3:-1}}else u<=e&&(t.expiredLanes|=l);o&=~l}if(r=ya(t,t===It?wt:0),e=Ie,r===0)n!==null&&(n!==Jf&&Sh(n),t.callbackNode=null,t.callbackPriority=0);else{if(n!==null){if(t.callbackPriority===e)return;n!==Jf&&Sh(n)}e===15?(n=Bh.bind(null,t),On===null?(On=[n],Xl=tg(tf,SS)):On.push(n),n=Jf):e===14?n=Ea(99,Bh.bind(null,t)):(n=jM(e),n=Ea(n,qS.bind(null,t))),t.callbackPriority=e,t.callbackNode=n}}function qS(t){if(Jl=-1,Zl=Rn=0,(oe&48)!==0)throw Error(U(327));var e=t.callbackNode;if(Fr()&&t.callbackNode!==e)return null;var n=ya(t,t===It?wt:0);if(n===0)return null;var r=n,i=oe;oe|=16;var s=QS();(It!==t||wt!==r)&&(Ys(),ps(t,r));do try{JL();break}catch(a){YS(t,a)}while(1);if(ng(),Qu.current=s,oe=i,Qe!==null?r=0:(It=null,wt=0,r=at),(Ks&Gs)!==0)ps(t,0);else if(r!==0){if(r===2&&(oe|=64,t.hydrate&&(t.hydrate=!1,Zm(t.containerInfo)),n=tS(t),n!==0&&(r=ko(t,n))),r===1)throw e=rf,ps(t,0),hs(t,n),Jt(t,yt()),e;switch(t.finishedWork=t.current.alternate,t.finishedLanes=n,r){case 0:case 1:throw Error(U(345));case 2:jr(t);break;case 3:if(hs(t,n),(n&62914560)===n&&(r=mg+500-yt(),10<r)){if(ya(t,0)!==0)break;if(i=t.suspendedLanes,(i&n)!==n){jt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=d0(jr.bind(null,t),r);break}jr(t);break;case 4:if(hs(t,n),(n&4186112)===n)break;for(r=t.eventTimes,i=-1;0<n;){var o=31-Ar(n);s=1<<o,o=r[o],o>i&&(i=o),n&=~s}if(n=i,n=yt()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*YL(n/1960))-n,10<n){t.timeoutHandle=d0(jr.bind(null,t),n);break}jr(t);break;case 5:jr(t);break;default:throw Error(U(329))}}return Jt(t,yt()),t.callbackNode===e?qS.bind(null,t):null}function hs(t,e){for(e&=~pg,e&=~Gs,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ar(e),r=1<<n;t[n]=-1,e&=~r}}function Bh(t){if((oe&48)!==0)throw Error(U(327));if(Fr(),t===It&&(t.expiredLanes&wt)!==0){var e=wt,n=ko(t,e);(Ks&Gs)!==0&&(e=ya(t,e),n=ko(t,e))}else e=ya(t,0),n=ko(t,e);if(t.tag!==0&&n===2&&(oe|=64,t.hydrate&&(t.hydrate=!1,Zm(t.containerInfo)),e=tS(t),e!==0&&(n=ko(t,e))),n===1)throw n=rf,ps(t,0),hs(t,e),Jt(t,yt()),n;return t.finishedWork=t.current.alternate,t.finishedLanes=e,jr(t),Jt(t,yt()),null}function QL(){if(Un!==null){var t=Un;Un=null,t.forEach(function(e){e.expiredLanes|=24&e.pendingLanes,Jt(e,yt())})}In()}function KS(t,e){var n=oe;oe|=1;try{return t(e)}finally{oe=n,oe===0&&(Ys(),In())}}function GS(t,e){var n=oe;oe&=-2,oe|=8;try{return t(e)}finally{oe=n,oe===0&&(Ys(),In())}}function Al(t,e){Fe(Mh,bi),bi|=e,Ks|=e}function gg(){bi=Mh.current,Re(Mh)}function ps(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,AL(n)),Qe!==null)for(n=Qe.return;n!==null;){var r=n;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&Fu();break;case 3:Os(),Re(Mt),Re(_t),og();break;case 5:sg(r);break;case 4:Os();break;case 13:Re($e);break;case 19:Re($e);break;case 10:rg(r);break;case 23:case 24:gg()}n=n.return}It=t,Qe=Pr(t.current,null),wt=bi=Ks=e,at=0,rf=null,pg=Gs=nl=0}function YS(t,e){do{var n=Qe;try{if(ng(),Bo.current=Yu,Wu){for(var r=Ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Wu=!1}if(Ta=0,st=pt=Ve=null,zo=!1,hg.current=null,n===null||n.return===null){at=1,rf=e,Qe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=wt,a.flags|=2048,a.firstEffect=a.lastEffect=null,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l;if((a.mode&2)===0){var c=a.alternate;c?(a.updateQueue=c.updateQueue,a.memoizedState=c.memoizedState,a.lanes=c.lanes):(a.updateQueue=null,a.memoizedState=null)}var f=($e.current&1)!==0,d=o;do{var g;if(g=d.tag===13){var _=d.memoizedState;if(_!==null)g=_.dehydrated!==null;else{var E=d.memoizedProps;g=E.fallback===void 0?!1:E.unstable_avoidThisFallback!==!0?!0:!f}}if(g){var p=d.updateQueue;if(p===null){var h=new Set;h.add(u),d.updateQueue=h}else p.add(u);if((d.mode&2)===0){if(d.flags|=64,a.flags|=16384,a.flags&=-2981,a.tag===1)if(a.alternate===null)a.tag=17;else{var m=yr(-1,1);m.tag=2,vr(a,m)}a.lanes|=1;break e}l=void 0,a=e;var v=s.pingCache;if(v===null?(v=s.pingCache=new HL,l=new Set,v.set(u,l)):(l=v.get(u),l===void 0&&(l=new Set,v.set(u,l))),!l.has(a)){l.add(a);var w=r$.bind(null,s,u,a);u.then(w,w)}d.flags|=4096,d.lanes=e;break e}d=d.return}while(d!==null);l=Error((os(a.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}at!==5&&(at=2),l=dg(l,a),d=o;do{switch(d.tag){case 3:s=l,d.flags|=4096,e&=-e,d.lanes|=e;var C=zS(d,s,e);w0(d,C);break e;case 1:s=l;var T=d.type,x=d.stateNode;if((d.flags&64)===0&&(typeof T.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(yn===null||!yn.has(x)))){d.flags|=4096,e&=-e,d.lanes|=e;var L=HS(d,s,e);w0(d,L);break e}}d=d.return}while(d!==null)}JS(n)}catch(S){e=S,Qe===n&&n!==null&&(Qe=n=n.return);continue}break}while(1)}function QS(){var t=Qu.current;return Qu.current=Yu,t===null?Yu:t}function ko(t,e){var n=oe;oe|=16;var r=QS();It===t&&wt===e||ps(t,e);do try{XL();break}catch(i){YS(t,i)}while(1);if(ng(),oe=n,Qu.current=r,Qe!==null)throw Error(U(261));return It=null,wt=0,at}function XL(){for(;Qe!==null;)XS(Qe)}function JL(){for(;Qe!==null&&!PL();)XS(Qe)}function XS(t){var e=ek(t.alternate,t,bi);t.memoizedProps=t.pendingProps,e===null?JS(t):Qe=e,hg.current=null}function JS(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&2048)===0){if(n=BL(n,e,bi),n!==null){Qe=n;return}if(n=e,n.tag!==24&&n.tag!==23||n.memoizedState===null||(bi&1073741824)!==0||(n.mode&4)===0){for(var r=0,i=n.child;i!==null;)r|=i.lanes|i.childLanes,i=i.sibling;n.childLanes=r}t!==null&&(t.flags&2048)===0&&(t.firstEffect===null&&(t.firstEffect=e.firstEffect),e.lastEffect!==null&&(t.lastEffect!==null&&(t.lastEffect.nextEffect=e.firstEffect),t.lastEffect=e.lastEffect),1<e.flags&&(t.lastEffect!==null?t.lastEffect.nextEffect=e:t.firstEffect=e,t.lastEffect=e))}else{if(n=zL(e),n!==null){n.flags&=2047,Qe=n;return}t!==null&&(t.firstEffect=t.lastEffect=null,t.flags|=2048)}if(e=e.sibling,e!==null){Qe=e;return}Qe=e=t}while(e!==null);at===0&&(at=5)}function jr(t){var e=xs();return Ei(99,ZL.bind(null,t,e)),null}function ZL(t,e){do Fr();while(Ho!==null);if((oe&48)!==0)throw Error(U(327));var n=t.finishedWork;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null;var r=n.lanes|n.childLanes,i=r,s=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;for(var o=t.eventTimes,a=t.expirationTimes;0<s;){var l=31-Ar(s),u=1<<l;i[l]=0,o[l]=-1,a[l]=-1,s&=~u}if(Un!==null&&(r&24)===0&&Un.has(t)&&Un.delete(t),t===It&&(Qe=It=null,wt=0),1<n.flags?n.lastEffect!==null?(n.lastEffect.nextEffect=n,r=n.firstEffect):r=n:r=n.firstEffect,r!==null){if(i=oe,oe|=32,hg.current=null,Yf=Kl,o=s0(),vh(o)){if("selectionStart"in o)a={start:o.selectionStart,end:o.selectionEnd};else e:if(a=(a=o.ownerDocument)&&a.defaultView||window,(u=a.getSelection&&a.getSelection())&&u.rangeCount!==0){a=u.anchorNode,s=u.anchorOffset,l=u.focusNode,u=u.focusOffset;try{a.nodeType,l.nodeType}catch{a=null;break e}var c=0,f=-1,d=-1,g=0,_=0,E=o,p=null;t:for(;;){for(var h;E!==a||s!==0&&E.nodeType!==3||(f=c+s),E!==l||u!==0&&E.nodeType!==3||(d=c+u),E.nodeType===3&&(c+=E.nodeValue.length),(h=E.firstChild)!==null;)p=E,E=h;for(;;){if(E===o)break t;if(p===a&&++g===s&&(f=c),p===l&&++_===u&&(d=c),(h=E.nextSibling)!==null)break;E=p,p=E.parentNode}E=h}a=f===-1||d===-1?null:{start:f,end:d}}else a=null;a=a||{start:0,end:0}}else a=null;Qf={focusedElem:o,selectionRange:a},Kl=!1,qo=null,eu=!1,G=r;do try{e$()}catch(S){if(G===null)throw Error(U(330));Er(G,S),G=G.nextEffect}while(G!==null);qo=null,G=r;do try{for(o=t;G!==null;){var m=G.flags;if(m&16&&ha(G.stateNode,""),m&128){var v=G.alternate;if(v!==null){var w=v.ref;w!==null&&(typeof w=="function"?w(null):w.current=null)}}switch(m&1038){case 2:H0(G),G.flags&=-3;break;case 6:H0(G),G.flags&=-3,rd(G.alternate,G);break;case 1024:G.flags&=-1025;break;case 1028:G.flags&=-1025,rd(G.alternate,G);break;case 4:rd(G.alternate,G);break;case 8:a=G,WS(o,a);var C=a.alternate;B0(a),C!==null&&B0(C)}G=G.nextEffect}}catch(S){if(G===null)throw Error(U(330));Er(G,S),G=G.nextEffect}while(G!==null);if(w=Qf,v=s0(),m=w.focusedElem,o=w.selectionRange,v!==m&&m&&m.ownerDocument&&uS(m.ownerDocument.documentElement,m)){for(o!==null&&vh(m)&&(v=o.start,w=o.end,w===void 0&&(w=v),"selectionStart"in m?(m.selectionStart=v,m.selectionEnd=Math.min(w,m.value.length)):(w=(v=m.ownerDocument||document)&&v.defaultView||window,w.getSelection&&(w=w.getSelection(),a=m.textContent.length,C=Math.min(o.start,a),o=o.end===void 0?C:Math.min(o.end,a),!w.extend&&C>o&&(a=o,o=C,C=a),a=i0(m,C),s=i0(m,o),a&&s&&(w.rangeCount!==1||w.anchorNode!==a.node||w.anchorOffset!==a.offset||w.focusNode!==s.node||w.focusOffset!==s.offset)&&(v=v.createRange(),v.setStart(a.node,a.offset),w.removeAllRanges(),C>o?(w.addRange(v),w.extend(s.node,s.offset)):(v.setEnd(s.node,s.offset),w.addRange(v)))))),v=[],w=m;w=w.parentNode;)w.nodeType===1&&v.push({element:w,left:w.scrollLeft,top:w.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<v.length;m++)w=v[m],w.element.scrollLeft=w.left,w.element.scrollTop=w.top}Kl=!!Yf,Qf=Yf=null,t.current=n,G=r;do try{for(m=t;G!==null;){var T=G.flags;if(T&36&&KL(m,G.alternate,G),T&128){v=void 0;var x=G.ref;if(x!==null){var L=G.stateNode;switch(G.tag){case 5:v=L;break;default:v=L}typeof x=="function"?x(v):x.current=v}}G=G.nextEffect}}catch(S){if(G===null)throw Error(U(330));Er(G,S),G=G.nextEffect}while(G!==null);G=null,ML(),oe=i}else t.current=n;if(Nr)Nr=!1,Ho=t,So=e;else for(G=r;G!==null;)e=G.nextEffect,G.nextEffect=null,G.flags&8&&(T=G,T.sibling=null,T.stateNode=null),G=e;if(r=t.pendingLanes,r===0&&(yn=null),r===1?t===Vh?Wo++:(Wo=0,Vh=t):Wo=0,n=n.stateNode,ri&&typeof ri.onCommitFiberRoot=="function")try{ri.onCommitFiberRoot(eg,n,void 0,(n.current.flags&64)===64)}catch{}if(Jt(t,yt()),Xu)throw Xu=!1,t=Fh,Fh=null,t;return(oe&8)!==0||In(),null}function e$(){for(;G!==null;){var t=G.alternate;eu||qo===null||((G.flags&8)!==0?Hv(G,qo)&&(eu=!0):G.tag===13&&GL(t,G)&&Hv(G,qo)&&(eu=!0));var e=G.flags;(e&256)!==0&&qL(t,G),(e&512)===0||Nr||(Nr=!0,Ea(97,function(){return Fr(),null})),G=G.nextEffect}}function Fr(){if(So!==90){var t=97<So?97:So;return So=90,Ei(t,n$)}return!1}function t$(t,e){Uh.push(e,t),Nr||(Nr=!0,Ea(97,function(){return Fr(),null}))}function ZS(t,e){jh.push(e,t),Nr||(Nr=!0,Ea(97,function(){return Fr(),null}))}function n$(){if(Ho===null)return!1;var t=Ho;if(Ho=null,(oe&48)!==0)throw Error(U(331));var e=oe;oe|=32;var n=jh;jh=[];for(var r=0;r<n.length;r+=2){var i=n[r],s=n[r+1],o=i.destroy;if(i.destroy=void 0,typeof o=="function")try{o()}catch(l){if(s===null)throw Error(U(330));Er(s,l)}}for(n=Uh,Uh=[],r=0;r<n.length;r+=2){i=n[r],s=n[r+1];try{var a=i.create;i.destroy=a()}catch(l){if(s===null)throw Error(U(330));Er(s,l)}}for(a=t.current.firstEffect;a!==null;)t=a.nextEffect,a.nextEffect=null,a.flags&8&&(a.sibling=null,a.stateNode=null),a=t;return oe=e,In(),!0}function q0(t,e,n){e=dg(n,e),e=zS(t,e,1),vr(t,e),e=jt(),t=sf(t,1),t!==null&&(Qc(t,1,e),Jt(t,e))}function Er(t,e){if(t.tag===3)q0(t,t,e);else for(var n=t.return;n!==null;){if(n.tag===3){q0(n,t,e);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yn===null||!yn.has(r))){t=dg(e,t);var i=HS(n,t,1);if(vr(n,i),i=jt(),n=sf(n,1),n!==null)Qc(n,1,i),Jt(n,i);else if(typeof r.componentDidCatch=="function"&&(yn===null||!yn.has(r)))try{r.componentDidCatch(e,t)}catch{}break}}n=n.return}}function r$(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=jt(),t.pingedLanes|=t.suspendedLanes&n,It===t&&(wt&n)===n&&(at===4||at===3&&(wt&62914560)===wt&&500>yt()-mg?ps(t,0):pg|=n),Jt(t,e)}function i$(t,e){var n=t.stateNode;n!==null&&n.delete(e),e=0,e===0&&(e=t.mode,(e&2)===0?e=1:(e&4)===0?e=xs()===99?1:2:(Rn===0&&(Rn=Ks),e=Fi(62914560&~Rn),e===0&&(e=4194304))),n=jt(),t=sf(t,e),t!==null&&(Qc(t,e,n),Jt(t,n))}var ek;ek=function(t,e,n){var r=e.lanes;if(t!==null)if(t.memoizedProps!==e.pendingProps||Mt.current)on=!0;else if((n&r)!==0)on=(t.flags&16384)!==0;else{switch(on=!1,e.tag){case 3:N0(e),ed();break;case 5:S0(e);break;case 1:Lt(e.type)&&Ql(e);break;case 4:Ch(e,e.stateNode.containerInfo);break;case 10:r=e.memoizedProps.value;var i=e.type._context;Fe(Uu,i._currentValue),i._currentValue=r;break;case 13:if(e.memoizedState!==null)return(n&e.child.childLanes)!==0?P0(t,e,n):(Fe($e,$e.current&1),e=Ln(t,e,n),e!==null?e.sibling:null);Fe($e,$e.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&64)!==0){if(r)return F0(t,e,n);e.flags|=64}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Fe($e,$e.current),r)break;return null;case 23:case 24:return e.lanes=0,td(t,e,n)}return Ln(t,e,n)}else on=!1;switch(e.lanes=0,e.tag){case 2:if(r=e.type,t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,i=Is(e,_t.current),fs(e,n),i=lg(null,e,r,t,i,n),e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0){if(e.tag=1,e.memoizedState=null,e.updateQueue=null,Lt(r)){var s=!0;Ql(e)}else s=!1;e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ig(e);var o=r.getDerivedStateFromProps;typeof o=="function"&&Bu(e,r,o,t),i.updater=nf,e.stateNode=i,i._reactInternals=e,Th(e,r,t,n),e=Ah(null,e,r,!0,s,n)}else e.tag=0,Nt(null,e,i,n),e=e.child;return e;case 16:i=e.elementType;e:{switch(t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,s=i._init,i=s(i._payload),e.type=i,s=e.tag=o$(i),t=tn(i,t),s){case 0:e=Oh(null,e,i,t,n);break e;case 1:e=R0(null,e,i,t,n);break e;case 11:e=O0(null,e,i,t,n);break e;case 14:e=A0(null,e,i,tn(i.type,t),r,n);break e}throw Error(U(306,i,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tn(r,i),Oh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tn(r,i),R0(t,e,r,i,n);case 3:if(N0(e),r=e.updateQueue,t===null||r===null)throw Error(U(282));if(r=e.pendingProps,i=e.memoizedState,i=i!==null?i.element:null,TS(t,e),ba(e,r,null,n),r=e.memoizedState.element,r===i)ed(),e=Ln(t,e,n);else{if(i=e.stateNode,(s=i.hydrate)&&(ur=cs(e.stateNode.containerInfo.firstChild),Mn=e,s=kn=!0),s){if(t=i.mutableSourceEagerHydrationData,t!=null)for(i=0;i<t.length;i+=2)s=t[i],s._workInProgressVersionPrimary=t[i+1],ds.push(s);for(n=OS(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|1024,n=n.sibling}else Nt(t,e,r,n),ed();e=e.child}return e;case 5:return S0(e),t===null&&Ih(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Eh(r,i)?o=null:s!==null&&Eh(r,s)&&(e.flags|=16),US(t,e),Nt(t,e,o,n),e.child;case 6:return t===null&&Ih(e),null;case 13:return P0(t,e,n);case 4:return Ch(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=zu(e,null,r,n):Nt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tn(r,i),O0(t,e,r,i,n);case 7:return Nt(t,e,e.pendingProps,n),e.child;case 8:return Nt(t,e,e.pendingProps.children,n),e.child;case 12:return Nt(t,e,e.pendingProps.children,n),e.child;case 10:e:{r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value;var a=e.type._context;if(Fe(Uu,a._currentValue),a._currentValue=s,o!==null)if(a=o.value,s=Gt(a,s)?0:(typeof r._calculateChangedBits=="function"?r._calculateChangedBits(a,s):1073741823)|0,s===0){if(o.children===i.children&&!Mt.current){e=Ln(t,e,n);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var u=l.firstContext;u!==null;){if(u.context===r&&(u.observedBits&s)!==0){a.tag===1&&(u=yr(-1,n&-n),u.tag=2,vr(a,u)),a.lanes|=n,u=a.alternate,u!==null&&(u.lanes|=n),kS(a.return,n),l.lanes|=n;break}u=u.next}}else o=a.tag===10&&a.type===e.type?null:a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}Nt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,s=e.pendingProps,r=s.children,fs(e,n),i=Xt(i,s.unstable_observedBits),r=r(i),e.flags|=1,Nt(t,e,r,n),e.child;case 14:return i=e.type,s=tn(i,e.pendingProps),s=tn(i.type,s),A0(t,e,i,s,r,n);case 15:return FS(t,e,e.type,e.pendingProps,r,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tn(r,i),t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),e.tag=1,Lt(r)?(t=!0,Ql(e)):t=!1,fs(e,n),IS(e,r,i),Th(e,r,i,n),Ah(null,e,r,!0,t,n);case 19:return F0(t,e,n);case 23:return td(t,e,n);case 24:return td(t,e,n)}throw Error(U(156,e.tag))};function s$(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function Yt(t,e,n,r){return new s$(t,e,n,r)}function yg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function o$(t){if(typeof t=="function")return yg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Kc)return 11;if(t===Gc)return 14}return 2}function Pr(t,e){var n=t.alternate;return n===null?(n=Yt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function tu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")yg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case rr:return ms(n.children,i,s,e);case Ab:o=8,i|=16;break;case Pm:o=8,i|=1;break;case Mo:return t=Yt(12,n,e,i|8),t.elementType=Mo,t.type=Mo,t.lanes=s,t;case Lo:return t=Yt(13,n,e,i),t.type=Lo,t.elementType=Lo,t.lanes=s,t;case Au:return t=Yt(19,n,e,i),t.elementType=Au,t.lanes=s,t;case Um:return vg(n,i,s,e);case rh:return t=Yt(24,n,e,i),t.elementType=rh,t.lanes=s,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Dm:o=10;break e;case Mm:o=9;break e;case Kc:o=11;break e;case Gc:o=14;break e;case Lm:o=16,r=null;break e;case $m:o=22;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=Yt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ms(t,e,n,r){return t=Yt(7,t,r,e),t.lanes=n,t}function vg(t,e,n,r){return t=Yt(23,t,r,e),t.elementType=Um,t.lanes=n,t}function id(t,e,n){return t=Yt(6,t,null,e),t.lanes=n,t}function sd(t,e,n){return e=Yt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function a$(t,e,n){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=Bf(0),this.expirationTimes=Bf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bf(0),this.mutableSourceEagerHydrationData=null}function l$(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Ju(t,e,n,r){var i=e.current,s=jt(),o=wr(i);e:if(n){n=n._reactInternals;t:{if(xi(n)!==n||n.tag!==1)throw Error(U(170));var a=n;do{switch(a.tag){case 3:a=a.stateNode.context;break t;case 1:if(Lt(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break t}}a=a.return}while(a!==null);throw Error(U(171))}if(n.tag===1){var l=n.type;if(Lt(l)){n=yS(n,l,a);break e}}n=a}else n=Rr;return e.context===null?e.context=n:e.pendingContext=n,e=yr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),vr(i,e),_r(i,o,s),o}function od(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function K0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function wg(t,e){K0(t,e),(t=t.alternate)&&K0(t,e)}function u$(){return null}function _g(t,e,n){var r=n!=null&&n.hydrationOptions!=null&&n.hydrationOptions.mutableSources||null;if(n=new a$(t,e,n!=null&&n.hydrate===!0),e=Yt(3,null,null,e===2?7:e===1?3:0),n.current=e,e.stateNode=n,ig(e),t[qs]=n.current,dS(t.nodeType===8?t.parentNode:t),r)for(t=0;t<r.length;t++){e=r[t];var i=e._getVersion;i=i(e._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[e,i]:n.mutableSourceEagerHydrationData.push(e,i)}this._internalRoot=n}_g.prototype.render=function(t){Ju(t,this._internalRoot,null,null)};_g.prototype.unmount=function(){var t=this._internalRoot,e=t.containerInfo;Ju(null,t,null,function(){e[qs]=null})};function rl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function c$(t,e){if(e||(e=t?t.nodeType===9?t.documentElement:t.firstChild:null,e=!(!e||e.nodeType!==1||!e.hasAttribute("data-reactroot"))),!e)for(var n;n=t.lastChild;)t.removeChild(n);return new _g(t,0,e?{hydrate:!0}:void 0)}function of(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s._internalRoot;if(typeof i=="function"){var a=i;i=function(){var u=od(o);a.call(u)}}Ju(e,o,t,i)}else{if(s=n._reactRootContainer=c$(n,r),o=s._internalRoot,typeof i=="function"){var l=i;i=function(){var u=od(o);l.call(u)}}GS(function(){Ju(e,o,t,i)})}return od(o)}Wb=function(t){if(t.tag===13){var e=jt();_r(t,4,e),wg(t,4)}};Hm=function(t){if(t.tag===13){var e=jt();_r(t,67108864,e),wg(t,67108864)}};qb=function(t){if(t.tag===13){var e=jt(),n=wr(t);_r(t,n,e),wg(t,n)}};Kb=function(t,e){return e()};hh=function(t,e,n){switch(e){case"input":if(sh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ef(r);if(!i)throw Error(U(90));Nb(r),sh(r,i)}}}break;case"textarea":Db(t,n);break;case"select":e=n.value,e!=null&&as(t,!!n.multiple,e,!1)}};Vm=KS;Vb=function(t,e,n,r,i){var s=oe;oe|=4;try{return Ei(98,t.bind(null,e,n,r,i))}finally{oe=s,oe===0&&(Ys(),In())}};Bm=function(){(oe&49)===0&&(QL(),Fr())};Bb=function(t,e){var n=oe;oe|=2;try{return t(e)}finally{oe=n,oe===0&&(Ys(),In())}};function tk(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rl(e))throw Error(U(200));return l$(t,e,null,n)}var f$={Events:[el,Gi,ef,Ub,jb,Fr,{current:!1}]},ho={findFiberByHostInstance:Xr,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},d$={bundleType:ho.bundleType,version:ho.version,rendererPackageName:ho.rendererPackageName,rendererConfig:ho.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ii.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Hb(t),t===null?null:t.stateNode},findFiberByHostInstance:ho.findFiberByHostInstance||u$,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rl.isDisabled&&Rl.supportsFiber)try{eg=Rl.inject(d$),ri=Rl}catch{}}Zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=f$;Zt.createPortal=tk;Zt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):Error(U(268,Object.keys(t)));return t=Hb(e),t=t===null?null:t.stateNode,t};Zt.flushSync=function(t,e){var n=oe;if((n&48)!==0)return t(e);oe|=1;try{if(t)return Ei(99,t.bind(null,e))}finally{oe=n,In()}};Zt.hydrate=function(t,e,n){if(!rl(e))throw Error(U(200));return of(null,t,e,!0,n)};Zt.render=function(t,e,n){if(!rl(e))throw Error(U(200));return of(null,t,e,!1,n)};Zt.unmountComponentAtNode=function(t){if(!rl(t))throw Error(U(40));return t._reactRootContainer?(GS(function(){of(null,null,t,!1,function(){t._reactRootContainer=null,t[qs]=null})}),!0):!1};Zt.unstable_batchedUpdates=KS;Zt.unstable_createPortal=function(t,e){return tk(t,e,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)};Zt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!rl(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return of(t,e,n,!1,r)};Zt.version="17.0.2";function nk(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nk)}catch(t){console.error(t)}}nk(),Om.exports=Zt;var h$=Om.exports,zh={exports:{}},cn={},Zu={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var n=/input|select|textarea|button|object|iframe/;function r(l){var u=l.offsetWidth<=0&&l.offsetHeight<=0;if(u&&!l.innerHTML)return!0;try{var c=window.getComputedStyle(l);return u?c.getPropertyValue("overflow")!=="visible"||l.scrollWidth<=0&&l.scrollHeight<=0:c.getPropertyValue("display")=="none"}catch{return console.warn("Failed to inspect element style"),!1}}function i(l){for(var u=l,c=l.getRootNode&&l.getRootNode();u&&u!==document.body;){if(c&&u===c&&(u=c.host.parentNode),r(u))return!1;u=u.parentNode}return!0}function s(l,u){var c=l.nodeName.toLowerCase(),f=n.test(c)&&!l.disabled||c==="a"&&l.href||u;return f&&i(l)}function o(l){var u=l.getAttribute("tabindex");u===null&&(u=void 0);var c=isNaN(u);return(c||u>=0)&&s(l,!c)}function a(l){var u=[].slice.call(l.querySelectorAll("*"),0).reduce(function(c,f){return c.concat(f.shadowRoot?a(f.shadowRoot):[f])},[]);return u.filter(o)}t.exports=e.default})(Zu,Zu.exports);Object.defineProperty(cn,"__esModule",{value:!0});cn.resetState=y$;cn.log=v$;cn.handleBlur=Ca;cn.handleFocus=Ia;cn.markForFocusLater=w$;cn.returnFocus=_$;cn.popWithoutFocus=E$;cn.setupScopedFocus=b$;cn.teardownScopedFocus=S$;var p$=Zu.exports,m$=g$(p$);function g$(t){return t&&t.__esModule?t:{default:t}}var As=[],Xi=null,Hh=!1;function y$(){As=[]}function v$(){}function Ca(){Hh=!0}function Ia(){if(Hh){if(Hh=!1,!Xi)return;setTimeout(function(){if(!Xi.contains(document.activeElement)){var t=(0,m$.default)(Xi)[0]||Xi;t.focus()}},0)}}function w$(){As.push(document.activeElement)}function _$(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=null;try{As.length!==0&&(e=As.pop(),e.focus({preventScroll:t}));return}catch{console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}}function E$(){As.length>0&&As.pop()}function b$(t){Xi=t,window.addEventListener?(window.addEventListener("blur",Ca,!1),document.addEventListener("focus",Ia,!0)):(window.attachEvent("onBlur",Ca),document.attachEvent("onFocus",Ia))}function S$(){Xi=null,window.addEventListener?(window.removeEventListener("blur",Ca),document.removeEventListener("focus",Ia)):(window.detachEvent("onBlur",Ca),document.detachEvent("onFocus",Ia))}var Wh={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var n=Zu.exports,r=i(n);function i(a){return a&&a.__esModule?a:{default:a}}function s(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return a.activeElement.shadowRoot?s(a.activeElement.shadowRoot):a.activeElement}function o(a,l){var u=(0,r.default)(a);if(!u.length){l.preventDefault();return}var c=void 0,f=l.shiftKey,d=u[0],g=u[u.length-1],_=s();if(a===_){if(!f)return;c=g}if(g===_&&!f&&(c=d),d===_&&f&&(c=g),c){l.preventDefault(),c.focus();return}var E=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),p=E!=null&&E[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(!!p){var h=u.indexOf(_);if(h>-1&&(h+=f?-1:1),c=u[h],typeof c=="undefined"){l.preventDefault(),c=f?g:d,c.focus();return}l.preventDefault(),c.focus()}}t.exports=e.default})(Wh,Wh.exports);var fn={},k$=function(){},T$=k$,ln={},rk={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(t){(function(){var e=!!(typeof window!="undefined"&&window.document&&window.document.createElement),n={canUseDOM:e,canUseWorkers:typeof Worker!="undefined",canUseEventListeners:e&&!!(window.addEventListener||window.attachEvent),canUseViewport:e&&!!window.screen};t.exports?t.exports=n:window.ExecutionEnvironment=n})()})(rk);Object.defineProperty(ln,"__esModule",{value:!0});ln.canUseDOM=ln.SafeNodeList=ln.SafeHTMLCollection=void 0;var C$=rk.exports,I$=x$(C$);function x$(t){return t&&t.__esModule?t:{default:t}}var af=I$.default,O$=af.canUseDOM?window.HTMLElement:{};ln.SafeHTMLCollection=af.canUseDOM?window.HTMLCollection:{};ln.SafeNodeList=af.canUseDOM?window.NodeList:{};ln.canUseDOM=af.canUseDOM;ln.default=O$;Object.defineProperty(fn,"__esModule",{value:!0});fn.resetState=D$;fn.log=M$;fn.assertNodeList=ik;fn.setElement=L$;fn.validateElement=Eg;fn.hide=$$;fn.show=F$;fn.documentNotReadyOrSSRTesting=U$;var A$=T$,R$=P$(A$),N$=ln;function P$(t){return t&&t.__esModule?t:{default:t}}var qt=null;function D$(){qt&&(qt.removeAttribute?qt.removeAttribute("aria-hidden"):qt.length!=null?qt.forEach(function(t){return t.removeAttribute("aria-hidden")}):document.querySelectorAll(qt).forEach(function(t){return t.removeAttribute("aria-hidden")})),qt=null}function M$(){}function ik(t,e){if(!t||!t.length)throw new Error("react-modal: No elements were found for selector "+e+".")}function L$(t){var e=t;if(typeof e=="string"&&N$.canUseDOM){var n=document.querySelectorAll(e);ik(n,e),e=n}return qt=e||qt,qt}function Eg(t){var e=t||qt;return e?Array.isArray(e)||e instanceof HTMLCollection||e instanceof NodeList?e:[e]:((0,R$.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function $$(t){var e=!0,n=!1,r=void 0;try{for(var i=Eg(t)[Symbol.iterator](),s;!(e=(s=i.next()).done);e=!0){var o=s.value;o.setAttribute("aria-hidden","true")}}catch(a){n=!0,r=a}finally{try{!e&&i.return&&i.return()}finally{if(n)throw r}}}function F$(t){var e=!0,n=!1,r=void 0;try{for(var i=Eg(t)[Symbol.iterator](),s;!(e=(s=i.next()).done);e=!0){var o=s.value;o.removeAttribute("aria-hidden")}}catch(a){n=!0,r=a}finally{try{!e&&i.return&&i.return()}finally{if(n)throw r}}}function U$(){qt=null}var Qs={};Object.defineProperty(Qs,"__esModule",{value:!0});Qs.resetState=j$;Qs.log=V$;var Ko={},Go={};function G0(t,e){t.classList.remove(e)}function j$(){var t=document.getElementsByTagName("html")[0];for(var e in Ko)G0(t,Ko[e]);var n=document.body;for(var r in Go)G0(n,Go[r]);Ko={},Go={}}function V$(){}var B$=function(e,n){return e[n]||(e[n]=0),e[n]+=1,n},z$=function(e,n){return e[n]&&(e[n]-=1),n},H$=function(e,n,r){r.forEach(function(i){B$(n,i),e.add(i)})},W$=function(e,n,r){r.forEach(function(i){z$(n,i),n[i]===0&&e.remove(i)})};Qs.add=function(e,n){return H$(e.classList,e.nodeName.toLowerCase()=="html"?Ko:Go,n.split(" "))};Qs.remove=function(e,n){return W$(e.classList,e.nodeName.toLowerCase()=="html"?Ko:Go,n.split(" "))};var Xs={};Object.defineProperty(Xs,"__esModule",{value:!0});Xs.log=K$;Xs.resetState=G$;function q$(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var sk=function t(){var e=this;q$(this,t),this.register=function(n){e.openInstances.indexOf(n)===-1&&(e.openInstances.push(n),e.emit("register"))},this.deregister=function(n){var r=e.openInstances.indexOf(n);r!==-1&&(e.openInstances.splice(r,1),e.emit("deregister"))},this.subscribe=function(n){e.subscribers.push(n)},this.emit=function(n){e.subscribers.forEach(function(r){return r(n,e.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},ec=new sk;function K$(){console.log("portalOpenInstances ----------"),console.log(ec.openInstances.length),ec.openInstances.forEach(function(t){return console.log(t)}),console.log("end portalOpenInstances ----------")}function G$(){ec=new sk}Xs.default=ec;var bg={};Object.defineProperty(bg,"__esModule",{value:!0});bg.resetState=J$;bg.log=Z$;var Y$=Xs,Q$=X$(Y$);function X$(t){return t&&t.__esModule?t:{default:t}}var ht=void 0,nn=void 0,ii=[];function J$(){for(var t=[ht,nn],e=0;e<t.length;e++){var n=t[e];!n||n.parentNode&&n.parentNode.removeChild(n)}ht=nn=null,ii=[]}function Z$(){console.log("bodyTrap ----------"),console.log(ii.length);for(var t=[ht,nn],e=0;e<t.length;e++){var n=t[e],r=n||{};console.log(r.nodeName,r.className,r.id)}console.log("edn bodyTrap ----------")}function Y0(){ii.length!==0&&ii[ii.length-1].focusContent()}function eF(t,e){!ht&&!nn&&(ht=document.createElement("div"),ht.setAttribute("data-react-modal-body-trap",""),ht.style.position="absolute",ht.style.opacity="0",ht.setAttribute("tabindex","0"),ht.addEventListener("focus",Y0),nn=ht.cloneNode(),nn.addEventListener("focus",Y0)),ii=e,ii.length>0?(document.body.firstChild!==ht&&document.body.insertBefore(ht,document.body.firstChild),document.body.lastChild!==nn&&document.body.appendChild(nn)):(ht.parentElement&&ht.parentElement.removeChild(ht),nn.parentElement&&nn.parentElement.removeChild(nn))}Q$.default.subscribe(eF);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(z){for(var W=1;W<arguments.length;W++){var re=arguments[W];for(var I in re)Object.prototype.hasOwnProperty.call(re,I)&&(z[I]=re[I])}return z},r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(z){return typeof z}:function(z){return z&&typeof Symbol=="function"&&z.constructor===Symbol&&z!==Symbol.prototype?"symbol":typeof z},i=function(){function z(W,re){for(var I=0;I<re.length;I++){var Q=re[I];Q.enumerable=Q.enumerable||!1,Q.configurable=!0,"value"in Q&&(Q.writable=!0),Object.defineProperty(W,Q.key,Q)}}return function(W,re,I){return re&&z(W.prototype,re),I&&z(W,I),W}}(),s=se.exports,o=Hc.exports,a=C(o),l=cn,u=w(l),c=Wh.exports,f=C(c),d=fn,g=w(d),_=Qs,E=w(_),p=ln,h=C(p),m=Xs,v=C(m);function w(z){if(z&&z.__esModule)return z;var W={};if(z!=null)for(var re in z)Object.prototype.hasOwnProperty.call(z,re)&&(W[re]=z[re]);return W.default=z,W}function C(z){return z&&z.__esModule?z:{default:z}}function T(z,W){if(!(z instanceof W))throw new TypeError("Cannot call a class as a function")}function x(z,W){if(!z)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return W&&(typeof W=="object"||typeof W=="function")?W:z}function L(z,W){if(typeof W!="function"&&W!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof W);z.prototype=Object.create(W&&W.prototype,{constructor:{value:z,enumerable:!1,writable:!0,configurable:!0}}),W&&(Object.setPrototypeOf?Object.setPrototypeOf(z,W):z.__proto__=W)}var S={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},D=9,B=27,V=0,j=function(z){L(W,z);function W(re){T(this,W);var I=x(this,(W.__proto__||Object.getPrototypeOf(W)).call(this,re));return I.setOverlayRef=function(Q){I.overlay=Q,I.props.overlayRef&&I.props.overlayRef(Q)},I.setContentRef=function(Q){I.content=Q,I.props.contentRef&&I.props.contentRef(Q)},I.afterClose=function(){var Q=I.props,Te=Q.appElement,Me=Q.ariaHideApp,N=Q.htmlOpenClassName,J=Q.bodyOpenClassName;J&&E.remove(document.body,J),N&&E.remove(document.getElementsByTagName("html")[0],N),Me&&V>0&&(V-=1,V===0&&g.show(Te)),I.props.shouldFocusAfterRender&&(I.props.shouldReturnFocusAfterClose?(u.returnFocus(I.props.preventScroll),u.teardownScopedFocus()):u.popWithoutFocus()),I.props.onAfterClose&&I.props.onAfterClose(),v.default.deregister(I)},I.open=function(){I.beforeOpen(),I.state.afterOpen&&I.state.beforeClose?(clearTimeout(I.closeTimer),I.setState({beforeClose:!1})):(I.props.shouldFocusAfterRender&&(u.setupScopedFocus(I.node),u.markForFocusLater()),I.setState({isOpen:!0},function(){I.openAnimationFrame=requestAnimationFrame(function(){I.setState({afterOpen:!0}),I.props.isOpen&&I.props.onAfterOpen&&I.props.onAfterOpen({overlayEl:I.overlay,contentEl:I.content})})}))},I.close=function(){I.props.closeTimeoutMS>0?I.closeWithTimeout():I.closeWithoutTimeout()},I.focusContent=function(){return I.content&&!I.contentHasFocus()&&I.content.focus({preventScroll:!0})},I.closeWithTimeout=function(){var Q=Date.now()+I.props.closeTimeoutMS;I.setState({beforeClose:!0,closesAt:Q},function(){I.closeTimer=setTimeout(I.closeWithoutTimeout,I.state.closesAt-Date.now())})},I.closeWithoutTimeout=function(){I.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},I.afterClose)},I.handleKeyDown=function(Q){Q.keyCode===D&&(0,f.default)(I.content,Q),I.props.shouldCloseOnEsc&&Q.keyCode===B&&(Q.stopPropagation(),I.requestClose(Q))},I.handleOverlayOnClick=function(Q){I.shouldClose===null&&(I.shouldClose=!0),I.shouldClose&&I.props.shouldCloseOnOverlayClick&&(I.ownerHandlesClose()?I.requestClose(Q):I.focusContent()),I.shouldClose=null},I.handleContentOnMouseUp=function(){I.shouldClose=!1},I.handleOverlayOnMouseDown=function(Q){!I.props.shouldCloseOnOverlayClick&&Q.target==I.overlay&&Q.preventDefault()},I.handleContentOnClick=function(){I.shouldClose=!1},I.handleContentOnMouseDown=function(){I.shouldClose=!1},I.requestClose=function(Q){return I.ownerHandlesClose()&&I.props.onRequestClose(Q)},I.ownerHandlesClose=function(){return I.props.onRequestClose},I.shouldBeClosed=function(){return!I.state.isOpen&&!I.state.beforeClose},I.contentHasFocus=function(){return document.activeElement===I.content||I.content.contains(document.activeElement)},I.buildClassName=function(Q,Te){var Me=(typeof Te=="undefined"?"undefined":r(Te))==="object"?Te:{base:S[Q],afterOpen:S[Q]+"--after-open",beforeClose:S[Q]+"--before-close"},N=Me.base;return I.state.afterOpen&&(N=N+" "+Me.afterOpen),I.state.beforeClose&&(N=N+" "+Me.beforeClose),typeof Te=="string"&&Te?N+" "+Te:N},I.attributesFromObject=function(Q,Te){return Object.keys(Te).reduce(function(Me,N){return Me[Q+"-"+N]=Te[N],Me},{})},I.state={afterOpen:!1,beforeClose:!1},I.shouldClose=null,I.moveFromContentToOverlay=null,I}return i(W,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(I,Q){this.props.isOpen&&!I.isOpen?this.open():!this.props.isOpen&&I.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!Q.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var I=this.props,Q=I.appElement,Te=I.ariaHideApp,Me=I.htmlOpenClassName,N=I.bodyOpenClassName;N&&E.add(document.body,N),Me&&E.add(document.getElementsByTagName("html")[0],Me),Te&&(V+=1,g.hide(Q)),v.default.register(this)}},{key:"render",value:function(){var I=this.props,Q=I.id,Te=I.className,Me=I.overlayClassName,N=I.defaultStyles,J=I.children,ae=Te?{}:N.content,we=Me?{}:N.overlay;if(this.shouldBeClosed())return null;var Ce={ref:this.setOverlayRef,className:this.buildClassName("overlay",Me),style:n({},we,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},Ue=n({id:Q,ref:this.setContentRef,style:n({},ae,this.props.style.content),className:this.buildClassName("content",Te),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",n({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),Ke=this.props.contentElement(Ue,J);return this.props.overlayElement(Ce,Ke)}}]),W}(s.Component);j.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},j.propTypes={isOpen:a.default.bool.isRequired,defaultStyles:a.default.shape({content:a.default.object,overlay:a.default.object}),style:a.default.shape({content:a.default.object,overlay:a.default.object}),className:a.default.oneOfType([a.default.string,a.default.object]),overlayClassName:a.default.oneOfType([a.default.string,a.default.object]),bodyOpenClassName:a.default.string,htmlOpenClassName:a.default.string,ariaHideApp:a.default.bool,appElement:a.default.oneOfType([a.default.instanceOf(h.default),a.default.instanceOf(p.SafeHTMLCollection),a.default.instanceOf(p.SafeNodeList),a.default.arrayOf(a.default.instanceOf(h.default))]),onAfterOpen:a.default.func,onAfterClose:a.default.func,onRequestClose:a.default.func,closeTimeoutMS:a.default.number,shouldFocusAfterRender:a.default.bool,shouldCloseOnOverlayClick:a.default.bool,shouldReturnFocusAfterClose:a.default.bool,preventScroll:a.default.bool,role:a.default.string,contentLabel:a.default.string,aria:a.default.object,data:a.default.object,children:a.default.node,shouldCloseOnEsc:a.default.bool,overlayRef:a.default.func,contentRef:a.default.func,id:a.default.string,overlayElement:a.default.func,contentElement:a.default.func,testId:a.default.string},e.default=j,t.exports=e.default})(zh,zh.exports);function ok(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);t!=null&&this.setState(t)}function ak(t){function e(n){var r=this.constructor.getDerivedStateFromProps(t,n);return r!=null?r:null}this.setState(e.bind(this))}function lk(t,e){try{var n=this.props,r=this.state;this.props=t,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}ok.__suppressDeprecationWarning=!0;ak.__suppressDeprecationWarning=!0;lk.__suppressDeprecationWarning=!0;function tF(t){var e=t.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if(typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function")return t;var n=null,r=null,i=null;if(typeof e.componentWillMount=="function"?n="componentWillMount":typeof e.UNSAFE_componentWillMount=="function"&&(n="UNSAFE_componentWillMount"),typeof e.componentWillReceiveProps=="function"?r="componentWillReceiveProps":typeof e.UNSAFE_componentWillReceiveProps=="function"&&(r="UNSAFE_componentWillReceiveProps"),typeof e.componentWillUpdate=="function"?i="componentWillUpdate":typeof e.UNSAFE_componentWillUpdate=="function"&&(i="UNSAFE_componentWillUpdate"),n!==null||r!==null||i!==null){var s=t.displayName||t.name,o=typeof t.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+s+" uses "+o+" but also contains the following legacy lifecycles:"+(n!==null?`
  `+n:"")+(r!==null?`
  `+r:"")+(i!==null?`
  `+i:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof t.getDerivedStateFromProps=="function"&&(e.componentWillMount=ok,e.componentWillReceiveProps=ak),typeof e.getSnapshotBeforeUpdate=="function"){if(typeof e.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=lk;var a=e.componentDidUpdate;e.componentDidUpdate=function(u,c,f){var d=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:f;a.call(this,u,c,d)}}return t}var nF=Object.freeze(Object.defineProperty({__proto__:null,polyfill:tF},Symbol.toStringTag,{value:"Module"})),rF=Ik(nF);Object.defineProperty(wi,"__esModule",{value:!0});wi.bodyOpenClassName=wi.portalClassName=void 0;var Q0=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},iF=function(){function t(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),uk=se.exports,tc=il(uk),sF=Om.exports,nc=il(sF),oF=Hc.exports,fe=il(oF),aF=zh.exports,X0=il(aF),lF=fn,uF=fF(lF),cr=ln,J0=il(cr),cF=rF;function fF(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function il(t){return t&&t.__esModule?t:{default:t}}function dF(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Z0(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function hF(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var pF=wi.portalClassName="ReactModalPortal",mF=wi.bodyOpenClassName="ReactModal__Body--open",Vr=cr.canUseDOM&&nc.default.createPortal!==void 0,ew=function(e){return document.createElement(e)},tw=function(){return Vr?nc.default.createPortal:nc.default.unstable_renderSubtreeIntoContainer};function Nl(t){return t()}var sl=function(t){hF(e,t);function e(){var n,r,i,s;dF(this,e);for(var o=arguments.length,a=Array(o),l=0;l<o;l++)a[l]=arguments[l];return s=(r=(i=Z0(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(a))),i),i.removePortal=function(){!Vr&&nc.default.unmountComponentAtNode(i.node);var u=Nl(i.props.parentSelector);u&&u.contains(i.node)?u.removeChild(i.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},i.portalRef=function(u){i.portal=u},i.renderPortal=function(u){var c=tw(),f=c(i,tc.default.createElement(X0.default,Q0({defaultStyles:e.defaultStyles},u)),i.node);i.portalRef(f)},r),Z0(i,s)}return iF(e,[{key:"componentDidMount",value:function(){if(!!cr.canUseDOM){Vr||(this.node=ew("div")),this.node.className=this.props.portalClassName;var r=Nl(this.props.parentSelector);r.appendChild(this.node),!Vr&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(r){var i=Nl(r.parentSelector),s=Nl(this.props.parentSelector);return{prevParent:i,nextParent:s}}},{key:"componentDidUpdate",value:function(r,i,s){if(!!cr.canUseDOM){var o=this.props,a=o.isOpen,l=o.portalClassName;r.portalClassName!==l&&(this.node.className=l);var u=s.prevParent,c=s.nextParent;c!==u&&(u.removeChild(this.node),c.appendChild(this.node)),!(!r.isOpen&&!a)&&!Vr&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!cr.canUseDOM||!this.node||!this.portal)){var r=this.portal.state,i=Date.now(),s=r.isOpen&&this.props.closeTimeoutMS&&(r.closesAt||i+this.props.closeTimeoutMS);s?(r.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,s-i)):this.removePortal()}}},{key:"render",value:function(){if(!cr.canUseDOM||!Vr)return null;!this.node&&Vr&&(this.node=ew("div"));var r=tw();return r(tc.default.createElement(X0.default,Q0({ref:this.portalRef,defaultStyles:e.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(r){uF.setElement(r)}}]),e}(uk.Component);sl.propTypes={isOpen:fe.default.bool.isRequired,style:fe.default.shape({content:fe.default.object,overlay:fe.default.object}),portalClassName:fe.default.string,bodyOpenClassName:fe.default.string,htmlOpenClassName:fe.default.string,className:fe.default.oneOfType([fe.default.string,fe.default.shape({base:fe.default.string.isRequired,afterOpen:fe.default.string.isRequired,beforeClose:fe.default.string.isRequired})]),overlayClassName:fe.default.oneOfType([fe.default.string,fe.default.shape({base:fe.default.string.isRequired,afterOpen:fe.default.string.isRequired,beforeClose:fe.default.string.isRequired})]),appElement:fe.default.oneOfType([fe.default.instanceOf(J0.default),fe.default.instanceOf(cr.SafeHTMLCollection),fe.default.instanceOf(cr.SafeNodeList),fe.default.arrayOf(fe.default.instanceOf(J0.default))]),onAfterOpen:fe.default.func,onRequestClose:fe.default.func,closeTimeoutMS:fe.default.number,ariaHideApp:fe.default.bool,shouldFocusAfterRender:fe.default.bool,shouldCloseOnOverlayClick:fe.default.bool,shouldReturnFocusAfterClose:fe.default.bool,preventScroll:fe.default.bool,parentSelector:fe.default.func,aria:fe.default.object,data:fe.default.object,role:fe.default.string,contentLabel:fe.default.string,shouldCloseOnEsc:fe.default.bool,overlayRef:fe.default.func,contentRef:fe.default.func,id:fe.default.string,overlayElement:fe.default.func,contentElement:fe.default.func};sl.defaultProps={isOpen:!1,portalClassName:pF,bodyOpenClassName:mF,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,n){return tc.default.createElement("div",e,n)},contentElement:function(e,n){return tc.default.createElement("div",e,n)}};sl.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,cF.polyfill)(sl);wi.default=sl;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=wi,r=i(n);function i(s){return s&&s.__esModule?s:{default:s}}e.default=r.default,t.exports=e.default})(nh,nh.exports);var Ai=hw(nh.exports);Ai.defaultStyles.overlay={};Ai.defaultStyles.content={};function gF(){if(!Cn())return null;const[t,e]=se.exports.useState("");async function n(){await DP(t,We.fromDate(new Date))}return A(Ai,{bodyOpenClassName:"AddCommentModal__Body",portalClassName:"AddCommentModalPortal",contentLabel:"Add comment",ariaHideApp:!1,isOpen:!0,parentSelector:()=>document.querySelector(".add-comment-modal"),style:{content:{outline:"none"}},children:he("div",{className:"f-col g-1 card",children:[A(xm,{onChange:r=>e(r.target.value),placeholder:"Add a comment..."}),he("div",{className:"left-right",children:[A(Im,{src:Cn().profilePictureDownloadURL}),A(vi,{className:"bg-purple pad-1-2",disabled:t==="",onClick:async()=>await n(),children:"SEND"})]})]})})}Ai.defaultStyles.overlay={};Ai.defaultStyles.content={};function yF(t){if(!Cn())return null;const e=se.exports.useRef(null),[n,r]=se.exports.useState("");return se.exports.useEffect(()=>{var s,o,a;const i=document.querySelector(".ReplyModalPortal");t.isOpen?(i.style.removeProperty("display"),(s=i.parentElement)==null||s.style.removeProperty("display")):(i.style.setProperty("display","none"),((o=i.parentElement)==null?void 0:o.childElementCount)===1&&((a=i.parentElement)==null||a.style.setProperty("display","none")))}),A(Ai,{bodyOpenClassName:"ReplyModal__Body",portalClassName:"ReplyModalPortal",contentLabel:"Reply to a comment",ariaHideApp:!1,isOpen:t.isOpen,shouldCloseOnEsc:!0,onAfterOpen:()=>{const i=e.current,s=i.getBoundingClientRect().top+window.scrollY;s>window.visualViewport.height&&window.scrollTo({top:s,behavior:"smooth"});const o=i.selectionEnd+i.value.length;i.selectionStart=o,i.selectionEnd=o,i.focus(),r(`@${t.userName} `)},parentSelector:()=>t.parent,children:he("div",{className:"f-col g-1 card",children:[A(xm,{ref:e,placeholder:"Add a comment...",defaultValue:`@${t.userName} `,onChange:i=>r(i.target.value),autoFocus:!0}),he("div",{className:"left-right",children:[A(Im,{src:Cn().profilePictureDownloadURL}),he("div",{className:"f-center g-1-5",children:[A(An,{onClick:t.onCancel,noHoverEffect:!0,children:A("p",{className:"hover-underline",children:"Cancel"})}),A(vi,{className:"bg-purple pad-1-2",disabled:n==="",onClick:()=>console.log("replying"),children:"SEND"})]})]})]})})}function vF(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}else return Array.from(t)}var Sg=!1;if(typeof window!="undefined"){var nw={get passive(){Sg=!0}};window.addEventListener("testPassive",null,nw),window.removeEventListener("testPassive",null,nw)}var rc=typeof window!="undefined"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),si=[],ic=!1,ck=-1,Yo=void 0,Hr=void 0,Qo=void 0,fk=function(e){return si.some(function(n){return!!(n.options.allowTouchMove&&n.options.allowTouchMove(e))})},sc=function(e){var n=e||window.event;return fk(n.target)||n.touches.length>1?!0:(n.preventDefault&&n.preventDefault(),!1)},wF=function(e){if(Qo===void 0){var n=!!e&&e.reserveScrollBarGap===!0,r=window.innerWidth-document.documentElement.clientWidth;if(n&&r>0){var i=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);Qo=document.body.style.paddingRight,document.body.style.paddingRight=i+r+"px"}}Yo===void 0&&(Yo=document.body.style.overflow,document.body.style.overflow="hidden")},_F=function(){Qo!==void 0&&(document.body.style.paddingRight=Qo,Qo=void 0),Yo!==void 0&&(document.body.style.overflow=Yo,Yo=void 0)},EF=function(){return window.requestAnimationFrame(function(){if(Hr===void 0){Hr={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,n=e.scrollY,r=e.scrollX,i=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-n,document.body.style.left=-r,setTimeout(function(){return window.requestAnimationFrame(function(){var s=i-window.innerHeight;s&&n>=i&&(document.body.style.top=-(n+s))})},300)}})},bF=function(){if(Hr!==void 0){var e=-parseInt(document.body.style.top,10),n=-parseInt(document.body.style.left,10);document.body.style.position=Hr.position,document.body.style.top=Hr.top,document.body.style.left=Hr.left,window.scrollTo(n,e),Hr=void 0}},SF=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},kF=function(e,n){var r=e.targetTouches[0].clientY-ck;return fk(e.target)?!1:n&&n.scrollTop===0&&r>0||SF(n)&&r<0?sc(e):(e.stopPropagation(),!0)},TF=function(e,n){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!si.some(function(i){return i.targetElement===e})){var r={targetElement:e,options:n||{}};si=[].concat(vF(si),[r]),rc?EF():wF(n),rc&&(e.ontouchstart=function(i){i.targetTouches.length===1&&(ck=i.targetTouches[0].clientY)},e.ontouchmove=function(i){i.targetTouches.length===1&&kF(i,e)},ic||(document.addEventListener("touchmove",sc,Sg?{passive:!1}:void 0),ic=!0))}},CF=function(e){if(!e){console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}si=si.filter(function(n){return n.targetElement!==e}),rc&&(e.ontouchstart=null,e.ontouchmove=null,ic&&si.length===0&&(document.removeEventListener("touchmove",sc,Sg?{passive:!1}:void 0),ic=!1)),rc?bF():_F()};const IF="_PopupModal__Content_1kh3p_1",xF="_PopupModal__Overlay_1kh3p_28";var Mi={PopupModal__Content:IF,"PopupModal__Content--after-open":"_PopupModal__Content--after-open_1kh3p_18","PopupModal__Content--before-close":"_PopupModal__Content--before-close_1kh3p_23",PopupModal__Overlay:xF,"PopupModal__Overlay--after-open":"_PopupModal__Overlay--after-open_1kh3p_41","PopupModal__Overlay--before-close":"_PopupModal__Overlay--before-close_1kh3p_45"};function kg(t){return A(Ai,At(ee({bodyOpenClassName:"PopupModal__Body",portalClassName:"PopupModalPortal",shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,closeTimeoutMS:200,onRequestClose:t.onRequestClose,onAfterOpen:()=>TF(document.querySelector("body")),onAfterClose:()=>CF(document.querySelector("body")),ariaHideApp:!1},t),{className:{base:`${Mi.PopupModal__Content} ${t.className}`,afterOpen:Mi["PopupModal__Content--after-open"],beforeClose:Mi["PopupModal__Content--before-close"]},overlayClassName:{base:`${Mi.PopupModal__Overlay} f-center`,afterOpen:Mi["PopupModal__Overlay--after-open"],beforeClose:Mi["PopupModal__Overlay--before-close"]},children:t.children}))}const OF="_NoYesModal__Content_6h4ts_1";var AF={NoYesModal__Content:OF};function rw(t){return he(kg,{bodyOpenClassName:"NoYesModal__Body",portalClassName:"NoYesPortal",className:`${AF.NoYesModal__Content} f-col g-1 card`,isOpen:t.isOpen,onRequestClose:t.onNoClicked,contentLabel:t.header,children:[A("h1",{children:t.header}),A("p",{children:t.message}),he("div",{className:"f-center g-1",children:[A(vi,{className:"f-1",onClick:t.onNoClicked,children:t.noText}),A(vi,{className:"f-1 bg-red",onClick:t.onYesClicked,children:t.yesText})]})]})}var ol=t=>t.type==="checkbox",Ji=t=>t instanceof Date,mt=t=>t==null;const dk=t=>typeof t=="object";var Et=t=>!mt(t)&&!Array.isArray(t)&&dk(t)&&!Ji(t),RF=t=>Et(t)&&t.target?ol(t.target)?t.target.checked:t.target.value:t,NF=t=>t.substring(0,t.search(/\.\d+(\.|$)/))||t,PF=(t,e)=>t.has(NF(e)),lf=t=>Array.isArray(t)?t.filter(Boolean):[],Ye=t=>t===void 0,Y=(t,e,n)=>{if(!e||!Et(t))return n;const r=lf(e.split(/[,[\].]+?/)).reduce((i,s)=>mt(i)?i:i[s],t);return Ye(r)||r===t?Ye(t[e])?n:t[e]:r};const iw={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},rn={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},xn={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},DF=Ge.createContext(null),MF=()=>Ge.useContext(DF);var LF=(t,e,n,r=!0)=>{const i={};for(const s in t)Object.defineProperty(i,s,{get:()=>{const o=s;return e[o]!==rn.all&&(e[o]=!r||rn.all),n&&(n[o]=!0),t[o]}});return i},Wt=t=>Et(t)&&!Object.keys(t).length,$F=(t,e,n)=>{const s=t,{name:r}=s,i=Ri(s,["name"]);return Wt(i)||Object.keys(i).length>=Object.keys(e).length||Object.keys(i).find(o=>e[o]===(!n||rn.all))},ad=t=>Array.isArray(t)?t:[t];function FF(t){const e=Ge.useRef(t);e.current=t,Ge.useEffect(()=>{const n=i=>{i&&i.unsubscribe()},r=!t.disabled&&e.current.subject.subscribe({next:e.current.callback});return()=>n(r)},[t.disabled])}var vn=t=>typeof t=="string",UF=(t,e,n,r)=>{const i=Array.isArray(t);return vn(t)?(r&&e.watch.add(t),Y(n,t)):i?t.map(s=>(r&&e.watch.add(s),Y(n,s))):(r&&(e.watchAll=!0),n)},uf=t=>typeof t=="function",hk=t=>{for(const e in t)if(uf(t[e]))return!0;return!1},jF=(t,e,n,r,i)=>e?At(ee({},n[t]),{types:At(ee({},n[t]&&n[t].types?n[t].types:{}),{[r]:i||!0})}):{},Tg=t=>/^\w*$/.test(t),pk=t=>lf(t.replace(/["|']|\]/g,"").split(/\.|\[/));function Le(t,e,n){let r=-1;const i=Tg(e)?[e]:pk(e),s=i.length,o=s-1;for(;++r<s;){const a=i[r];let l=n;if(r!==o){const u=t[a];l=Et(u)||Array.isArray(u)?u:isNaN(+i[r+1])?{}:[]}t[a]=l,t=t[a]}return t}const qh=(t,e,n)=>{for(const i of n||Object.keys(t)){const s=Y(t,i);if(s){const r=s,{_f:o}=r,a=Ri(r,["_f"]);if(o&&e(o.name)){if(o.ref.focus&&Ye(o.ref.focus()))break;if(o.refs){o.refs[0].focus();break}}else Et(a)&&qh(a,e)}}};var sw=(t,e,n)=>!n&&(e.watchAll||e.watch.has(t)||[...e.watch].some(r=>t.startsWith(r)&&/^\.\w+/.test(t.slice(r.length)))),Kh=typeof window!="undefined"&&typeof window.HTMLElement!="undefined"&&typeof document!="undefined";function Br(t){let e;const n=Array.isArray(t);if(t instanceof Date)e=new Date(t);else if(t instanceof Set)e=new Set(t);else if(!(Kh&&(t instanceof Blob||t instanceof FileList))&&(n||Et(t))){e=n?[]:{};for(const r in t){if(uf(t[r])){e=t;break}e[r]=Br(t[r])}}else return t;return e}function VF(t,e){const n=e.slice(0,-1).length;let r=0;for(;r<n;)t=Ye(t)?r++:t[e[r++]];return t}function St(t,e){const n=Tg(e)?[e]:pk(e),r=n.length==1?t:VF(t,n),i=n[n.length-1];let s;r&&delete r[i];for(let o=0;o<n.slice(0,-1).length;o++){let a=-1,l;const u=n.slice(0,-(o+1)),c=u.length-1;for(o>0&&(s=t);++a<u.length;){const f=u[a];l=l?l[f]:t[f],c===a&&(Et(l)&&Wt(l)||Array.isArray(l)&&!l.filter(d=>!Ye(d)).length)&&(s?delete s[f]:delete t[f]),s=l}}return t}function ld(){let t=[];return{get observers(){return t},next:i=>{for(const s of t)s.next(i)},subscribe:i=>(t.push(i),{unsubscribe:()=>{t=t.filter(s=>s!==i)}}),unsubscribe:()=>{t=[]}}}var oc=t=>mt(t)||!dk(t);function Zi(t,e){if(oc(t)||oc(e))return t===e;if(Ji(t)&&Ji(e))return t.getTime()===e.getTime();const n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(const i of n){const s=t[i];if(!r.includes(i))return!1;if(i!=="ref"){const o=e[i];if(Ji(s)&&Ji(o)||Et(s)&&Et(o)||Array.isArray(s)&&Array.isArray(o)?!Zi(s,o):s!==o)return!1}}return!0}var ow=t=>({isOnSubmit:!t||t===rn.onSubmit,isOnBlur:t===rn.onBlur,isOnChange:t===rn.onChange,isOnAll:t===rn.all,isOnTouch:t===rn.onTouched}),ac=t=>typeof t=="boolean",Cg=t=>t.type==="file",Gh=t=>{const e=t?t.ownerDocument:0,n=e&&e.defaultView?e.defaultView.HTMLElement:HTMLElement;return t instanceof n},mk=t=>t.type==="select-multiple",Ig=t=>t.type==="radio",BF=t=>Ig(t)||ol(t),ud=t=>Gh(t)&&t.isConnected;function lc(t,e={}){const n=Array.isArray(t);if(Et(t)||n)for(const r in t)Array.isArray(t[r])||Et(t[r])&&!hk(t[r])?(e[r]=Array.isArray(t[r])?[]:{},lc(t[r],e[r])):mt(t[r])||(e[r]=!0);return e}function gk(t,e,n){const r=Array.isArray(t);if(Et(t)||r)for(const i in t)Array.isArray(t[i])||Et(t[i])&&!hk(t[i])?Ye(e)||oc(n[i])?n[i]=Array.isArray(t[i])?lc(t[i],[]):ee({},lc(t[i])):gk(t[i],mt(e)?{}:e[i],n[i]):n[i]=!Zi(t[i],e[i]);return n}var cd=(t,e)=>gk(t,e,lc(e));const aw={value:!1,isValid:!1},lw={value:!0,isValid:!0};var yk=t=>{if(Array.isArray(t)){if(t.length>1){const e=t.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:e,isValid:!!e.length}}return t[0].checked&&!t[0].disabled?t[0].attributes&&!Ye(t[0].attributes.value)?Ye(t[0].value)||t[0].value===""?lw:{value:t[0].value,isValid:!0}:lw:aw}return aw},vk=(t,{valueAsNumber:e,valueAsDate:n,setValueAs:r})=>Ye(t)?t:e?t===""||mt(t)?NaN:+t:n&&vn(t)?new Date(t):r?r(t):t;const uw={isValid:!1,value:null};var wk=t=>Array.isArray(t)?t.reduce((e,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:e,uw):uw;function fd(t){const e=t.ref;if(!(t.refs?t.refs.every(n=>n.disabled):e.disabled))return Cg(e)?e.files:Ig(e)?wk(t.refs).value:mk(e)?[...e.selectedOptions].map(({value:n})=>n):ol(e)?yk(t.refs).value:vk(Ye(e.value)?t.ref.value:e.value,t)}var zF=(t,e,n,r)=>{const i={};for(const s of t){const o=Y(e,s);o&&Le(i,s,o._f)}return{criteriaMode:n,names:[...t],fields:i,shouldUseNativeValidation:r}},uc=t=>t instanceof RegExp,po=t=>Ye(t)?void 0:uc(t)?t.source:Et(t)?uc(t.value)?t.value.source:t.value:t,HF=t=>t.mount&&(t.required||t.min||t.max||t.maxLength||t.minLength||t.pattern||t.validate);function cw(t,e,n){const r=Y(t,n);if(r||Tg(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const s=i.join("."),o=Y(e,s),a=Y(t,s);if(o&&!Array.isArray(o)&&n!==s)return{name:n};if(a&&a.type)return{name:s,error:a};i.pop()}return{name:n}}var WF=(t,e,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(e||t):(n?r.isOnBlur:i.isOnBlur)?!t:(n?r.isOnChange:i.isOnChange)?t:!0,qF=(t,e)=>!lf(Y(t,e)).length&&St(t,e),nu=t=>vn(t)||Ge.isValidElement(t);function fw(t,e,n="validate"){if(nu(t)||Array.isArray(t)&&t.every(nu)||ac(t)&&!t)return{type:n,message:nu(t)?t:"",ref:e}}var Li=t=>Et(t)&&!uc(t)?t:{value:t,message:""},dw=async(t,e,n,r)=>{const{ref:i,refs:s,required:o,maxLength:a,minLength:l,min:u,max:c,pattern:f,validate:d,name:g,valueAsNumber:_,mount:E,disabled:p}=t._f;if(!E||p)return{};const h=s?s[0]:i,m=D=>{r&&h.reportValidity&&(h.setCustomValidity(ac(D)?"":D||" "),h.reportValidity())},v={},w=Ig(i),C=ol(i),T=w||C,x=(_||Cg(i))&&!i.value||e===""||Array.isArray(e)&&!e.length,L=jF.bind(null,g,n,v),S=(D,B,V,j=xn.maxLength,z=xn.minLength)=>{const W=D?B:V;v[g]=ee({type:D?j:z,message:W,ref:i},L(D?j:z,W))};if(o&&(!T&&(x||mt(e))||ac(e)&&!e||C&&!yk(s).isValid||w&&!wk(s).isValid)){const{value:D,message:B}=nu(o)?{value:!!o,message:o}:Li(o);if(D&&(v[g]=ee({type:xn.required,message:B,ref:h},L(xn.required,B)),!n))return m(B),v}if(!x&&(!mt(u)||!mt(c))){let D,B;const V=Li(c),j=Li(u);if(!mt(e)&&!isNaN(e)){const z=i.valueAsNumber||+e;mt(V.value)||(D=z>V.value),mt(j.value)||(B=z<j.value)}else{const z=i.valueAsDate||new Date(e);vn(V.value)&&(D=z>new Date(V.value)),vn(j.value)&&(B=z<new Date(j.value))}if((D||B)&&(S(!!D,V.message,j.message,xn.max,xn.min),!n))return m(v[g].message),v}if((a||l)&&!x&&vn(e)){const D=Li(a),B=Li(l),V=!mt(D.value)&&e.length>D.value,j=!mt(B.value)&&e.length<B.value;if((V||j)&&(S(V,D.message,B.message),!n))return m(v[g].message),v}if(f&&!x&&vn(e)){const{value:D,message:B}=Li(f);if(uc(D)&&!e.match(D)&&(v[g]=ee({type:xn.pattern,message:B,ref:i},L(xn.pattern,B)),!n))return m(B),v}if(d){if(uf(d)){const D=await d(e),B=fw(D,h);if(B&&(v[g]=ee(ee({},B),L(xn.validate,B.message)),!n))return m(B.message),v}else if(Et(d)){let D={};for(const B in d){if(!Wt(D)&&!n)break;const V=fw(await d[B](e),h,B);V&&(D=ee(ee({},V),L(B,V.message)),m(V.message),n&&(v[g]=D))}if(!Wt(D)&&(v[g]=ee({ref:h},D),!n))return v}}return m(!0),v};const KF={mode:rn.onSubmit,reValidateMode:rn.onChange,shouldFocusError:!0};function GF(t={}){let e=ee(ee({},KF),t),n={isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,errors:{}},r={},i=Br(e.defaultValues)||{},s=e.shouldUnregister?{}:Br(i),o={action:!1,mount:!1,watch:!1},a={mount:new Set,unMount:new Set,array:new Set,watch:new Set},l,u=0,c={};const f={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},d={watch:ld(),array:ld(),state:ld()},g=ow(e.mode),_=ow(e.reValidateMode),E=e.criteriaMode===rn.all,p=y=>b=>{clearTimeout(u),u=window.setTimeout(y,b)},h=async y=>{let b=!1;return f.isValid&&(b=e.resolver?Wt((await x()).errors):await S(r,!0),!y&&b!==n.isValid&&(n.isValid=b,d.state.next({isValid:b}))),b},m=(y,b=[],k,R,M=!0,O=!0)=>{if(R&&k){if(o.action=!0,O&&Array.isArray(Y(r,y))){const P=k(Y(r,y),R.argA,R.argB);M&&Le(r,y,P)}if(f.errors&&O&&Array.isArray(Y(n.errors,y))){const P=k(Y(n.errors,y),R.argA,R.argB);M&&Le(n.errors,y,P),qF(n.errors,y)}if(f.touchedFields&&O&&Array.isArray(Y(n.touchedFields,y))){const P=k(Y(n.touchedFields,y),R.argA,R.argB);M&&Le(n.touchedFields,y,P)}f.dirtyFields&&(n.dirtyFields=cd(i,s)),d.state.next({isDirty:B(y,b),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else Le(s,y,b)},v=(y,b)=>(Le(n.errors,y,b),d.state.next({errors:n.errors})),w=(y,b,k,R)=>{const M=Y(r,y);if(M){const O=Y(s,y,Ye(k)?Y(i,y):k);Ye(O)||R&&R.defaultChecked||b?Le(s,y,b?O:fd(M._f)):z(y,O),o.mount&&h()}},C=(y,b,k,R,M)=>{let O=!1;const P={name:y},X=Y(n.touchedFields,y);if(f.isDirty){const le=n.isDirty;n.isDirty=P.isDirty=B(),O=le!==P.isDirty}if(f.dirtyFields&&(!k||R)){const le=Y(n.dirtyFields,y);Zi(Y(i,y),b)?St(n.dirtyFields,y):Le(n.dirtyFields,y,!0),P.dirtyFields=n.dirtyFields,O=O||le!==Y(n.dirtyFields,y)}return k&&!X&&(Le(n.touchedFields,y,k),P.touchedFields=n.touchedFields,O=O||f.touchedFields&&X!==k),O&&M&&d.state.next(P),O?P:{}},T=async(y,b,k,R)=>{const M=Y(n.errors,y),O=f.isValid&&n.isValid!==b;if(t.delayError&&k?(l=l||p(()=>v(y,k)),l(t.delayError)):(clearTimeout(u),l=null,k?Le(n.errors,y,k):St(n.errors,y)),(k?!Zi(M,k):M)||!Wt(R)||O){const P=At(ee(ee({},R),O?{isValid:b}:{}),{errors:n.errors,name:y});n=ee(ee({},n),P),d.state.next(P)}c[y]--,f.isValidating&&!Object.values(c).some(P=>P)&&(d.state.next({isValidating:!1}),c={})},x=async y=>e.resolver?await e.resolver(ee({},s),e.context,zF(y||a.mount,r,e.criteriaMode,e.shouldUseNativeValidation)):{},L=async y=>{const{errors:b}=await x();if(y)for(const k of y){const R=Y(b,k);R?Le(n.errors,k,R):St(n.errors,k)}else n.errors=b;return b},S=async(y,b,k={valid:!0})=>{for(const M in y){const O=y[M];if(O){const R=O,{_f:P}=R,X=Ri(R,["_f"]);if(P){const le=await dw(O,Y(s,P.name),E,e.shouldUseNativeValidation);if(le[P.name]&&(k.valid=!1,b))break;b||(le[P.name]?Le(n.errors,P.name,le[P.name]):St(n.errors,P.name))}X&&await S(X,b,k)}}return k.valid},D=()=>{for(const y of a.unMount){const b=Y(r,y);b&&(b._f.refs?b._f.refs.every(k=>!ud(k)):!ud(b._f.ref))&&we(y)}a.unMount=new Set},B=(y,b)=>(y&&b&&Le(s,y,b),!Zi(Te(),i)),V=(y,b,k)=>{const R=ee({},o.mount?s:Ye(b)?i:vn(y)?{[y]:b}:b);return UF(y,a,R,k)},j=y=>lf(Y(o.mount?s:i,y,t.shouldUnregister?Y(i,y,[]):[])),z=(y,b,k={})=>{const R=Y(r,y);let M=b;if(R){const O=R._f;O&&(!O.disabled&&Le(s,y,vk(b,O)),M=Kh&&Gh(O.ref)&&mt(b)?"":b,mk(O.ref)?[...O.ref.options].forEach(P=>P.selected=M.includes(P.value)):O.refs?ol(O.ref)?O.refs.length>1?O.refs.forEach(P=>!P.disabled&&(P.checked=Array.isArray(M)?!!M.find(X=>X===P.value):M===P.value)):O.refs[0]&&(O.refs[0].checked=!!M):O.refs.forEach(P=>P.checked=P.value===M):Cg(O.ref)?O.ref.value="":(O.ref.value=M,O.ref.type||d.watch.next({name:y})))}(k.shouldDirty||k.shouldTouch)&&C(y,M,k.shouldTouch,k.shouldDirty,!0),k.shouldValidate&&Q(y)},W=(y,b,k)=>{for(const R in b){const M=b[R],O=`${y}.${R}`,P=Y(r,O);(a.array.has(y)||!oc(M)||P&&!P._f)&&!Ji(M)?W(O,M,k):z(O,M,k)}},re=(y,b,k={})=>{const R=Y(r,y),M=a.array.has(y),O=Br(b);Le(s,y,O),M?(d.array.next({name:y,values:s}),(f.isDirty||f.dirtyFields)&&k.shouldDirty&&(n.dirtyFields=cd(i,s),d.state.next({name:y,dirtyFields:n.dirtyFields,isDirty:B(y,O)}))):R&&!R._f&&!mt(O)?W(y,O,k):z(y,O,k),sw(y,a)&&d.state.next({}),d.watch.next({name:y})},I=async y=>{const b=y.target;let k=b.name;const R=Y(r,k);if(R){let M,O;const P=b.type?fd(R._f):RF(y),X=y.type===iw.BLUR||y.type===iw.FOCUS_OUT,le=!HF(R._f)&&!e.resolver&&!Y(n.errors,k)&&!R._f.deps||WF(X,Y(n.touchedFields,k),n.isSubmitted,_,g),_e=sw(k,a,X);Le(s,k,P),X?(R._f.onBlur&&R._f.onBlur(y),l&&l(0)):R._f.onChange&&R._f.onChange(y);const ge=C(k,P,X,!1),H=!Wt(ge)||_e;if(!X&&d.watch.next({name:k,type:y.type}),le)return H&&d.state.next(ee({name:k},_e?{}:ge));if(!X&&_e&&d.state.next({}),c[k]=(c[k],1),d.state.next({isValidating:!0}),e.resolver){const{errors:je}=await x([k]),$t=cw(n.errors,r,k),Js=cw(je,r,$t.name||k);M=Js.error,k=Js.name,O=Wt(je)}else M=(await dw(R,Y(s,k),E,e.shouldUseNativeValidation))[k],O=await h(!0);R._f.deps&&Q(R._f.deps),T(k,O,M,ge)}},Q=async(y,b={})=>{let k,R;const M=ad(y);if(d.state.next({isValidating:!0}),e.resolver){const O=await L(Ye(y)?y:M);k=Wt(O),R=y?!M.some(P=>Y(O,P)):k}else y?(R=(await Promise.all(M.map(async O=>{const P=Y(r,O);return await S(P&&P._f?{[O]:P}:P)}))).every(Boolean),!(!R&&!n.isValid)&&h()):R=k=await S(r);return d.state.next(At(ee(ee({},!vn(y)||f.isValid&&k!==n.isValid?{}:{name:y}),e.resolver?{isValid:k}:{}),{errors:n.errors,isValidating:!1})),b.shouldFocus&&!R&&qh(r,O=>Y(n.errors,O),y?M:a.mount),R},Te=y=>{const b=ee(ee({},i),o.mount?s:{});return Ye(y)?b:vn(y)?Y(b,y):y.map(k=>Y(b,k))},Me=(y,b)=>({invalid:!!Y((b||n).errors,y),isDirty:!!Y((b||n).dirtyFields,y),isTouched:!!Y((b||n).touchedFields,y),error:Y((b||n).errors,y)}),N=y=>{y?ad(y).forEach(b=>St(n.errors,b)):n.errors={},d.state.next({errors:n.errors})},J=(y,b,k)=>{const R=(Y(r,y,{_f:{}})._f||{}).ref;Le(n.errors,y,At(ee({},b),{ref:R})),d.state.next({name:y,errors:n.errors,isValid:!1}),k&&k.shouldFocus&&R&&R.focus&&R.focus()},ae=(y,b)=>uf(y)?d.watch.subscribe({next:k=>y(V(void 0,b),k)}):V(y,b,!0),we=(y,b={})=>{for(const k of y?ad(y):a.mount)a.mount.delete(k),a.array.delete(k),Y(r,k)&&(b.keepValue||(St(r,k),St(s,k)),!b.keepError&&St(n.errors,k),!b.keepDirty&&St(n.dirtyFields,k),!b.keepTouched&&St(n.touchedFields,k),!e.shouldUnregister&&!b.keepDefaultValue&&St(i,k));d.watch.next({}),d.state.next(ee(ee({},n),b.keepDirty?{isDirty:B()}:{})),!b.keepIsValid&&h()},Ce=(y,b={})=>{let k=Y(r,y);const R=ac(b.disabled);return Le(r,y,{_f:ee(At(ee({},k&&k._f?k._f:{ref:{name:y}}),{name:y,mount:!0}),b)}),a.mount.add(y),k?R&&Le(s,y,b.disabled?void 0:Y(s,y,fd(k._f))):w(y,!0,b.value),At(ee(ee({},R?{disabled:b.disabled}:{}),e.shouldUseNativeValidation?{required:!!b.required,min:po(b.min),max:po(b.max),minLength:po(b.minLength),maxLength:po(b.maxLength),pattern:po(b.pattern)}:{}),{name:y,onChange:I,onBlur:I,ref:M=>{if(M){Ce(y,b),k=Y(r,y);const O=Ye(M.value)&&M.querySelectorAll&&M.querySelectorAll("input,select,textarea")[0]||M,P=BF(O),X=k._f.refs||[];if(P?X.find(le=>le===O):O===k._f.ref)return;Le(r,y,{_f:ee(ee({},k._f),P?{refs:[...X.filter(ud),O,...Array.isArray(Y(i,y))?[{}]:[]],ref:{type:O.type,name:y}}:{ref:O})}),w(y,!1,void 0,O)}else k=Y(r,y,{}),k._f&&(k._f.mount=!1),(e.shouldUnregister||b.shouldUnregister)&&!(PF(a.array,y)&&o.action)&&a.unMount.add(y)}})};return{control:{register:Ce,unregister:we,getFieldState:Me,_executeSchema:x,_getWatch:V,_getDirty:B,_updateValid:h,_removeUnmounted:D,_updateFieldArray:m,_getFieldArray:j,_subjects:d,_proxyFormState:f,get _fields(){return r},get _formValues(){return s},get _stateFlags(){return o},set _stateFlags(y){o=y},get _defaultValues(){return i},get _names(){return a},set _names(y){a=y},get _formState(){return n},set _formState(y){n=y},get _options(){return e},set _options(y){e=ee(ee({},e),y)}},trigger:Q,register:Ce,handleSubmit:(y,b)=>async k=>{k&&(k.preventDefault&&k.preventDefault(),k.persist&&k.persist());let R=!0,M=Br(s);d.state.next({isSubmitting:!0});try{if(e.resolver){const{errors:O,values:P}=await x();n.errors=O,M=P}else await S(r);Wt(n.errors)?(d.state.next({errors:{},isSubmitting:!0}),await y(M,k)):(b&&await b(ee({},n.errors),k),e.shouldFocusError&&qh(r,O=>Y(n.errors,O),a.mount))}catch(O){throw R=!1,O}finally{n.isSubmitted=!0,d.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Wt(n.errors)&&R,submitCount:n.submitCount+1,errors:n.errors})}},watch:ae,setValue:re,getValues:Te,reset:(y,b={})=>{const k=y||i,R=Br(k),M=y&&!Wt(y)?R:i;if(b.keepDefaultValues||(i=k),!b.keepValues){if(b.keepDirtyValues)for(const O of a.mount)Y(n.dirtyFields,O)?Le(M,O,Y(s,O)):re(O,Y(M,O));else{if(Kh&&Ye(y))for(const O of a.mount){const P=Y(r,O);if(P&&P._f){const X=Array.isArray(P._f.refs)?P._f.refs[0]:P._f.ref;try{Gh(X)&&X.closest("form").reset();break}catch{}}}r={}}s=t.shouldUnregister?b.keepDefaultValues?Br(i):{}:R,d.array.next({values:M}),d.watch.next({values:M})}a={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},o.mount=!f.isValid||!!b.keepIsValid,o.watch=!!t.shouldUnregister,d.state.next({submitCount:b.keepSubmitCount?n.submitCount:0,isDirty:b.keepDirty||b.keepDirtyValues?n.isDirty:!!(b.keepDefaultValues&&!Zi(y,i)),isSubmitted:b.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:b.keepDirty||b.keepDirtyValues?n.dirtyFields:b.keepDefaultValues&&y?cd(i,y):{},touchedFields:b.keepTouched?n.touchedFields:{},errors:b.keepErrors?n.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},resetField:(y,b={})=>{Y(r,y)&&(Ye(b.defaultValue)?re(y,Y(i,y)):(re(y,b.defaultValue),Le(i,y,b.defaultValue)),b.keepTouched||St(n.touchedFields,y),b.keepDirty||(St(n.dirtyFields,y),n.isDirty=b.defaultValue?B(y,Y(i,y)):B()),b.keepError||(St(n.errors,y),f.isValid&&h()),d.state.next(ee({},n)))},clearErrors:N,unregister:we,setError:J,setFocus:(y,b={})=>{const k=Y(r,y)._f,R=k.refs?k.refs[0]:k.ref;b.shouldSelect?R.select():R.focus()},getFieldState:Me}}function _k(t={}){const e=Ge.useRef(),[n,r]=Ge.useState({isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,errors:{}});e.current?e.current.control._options=t:e.current=At(ee({},GF(t)),{formState:n});const i=e.current.control,s=Ge.useCallback(o=>{$F(o,i._proxyFormState,!0)&&(i._formState=ee(ee({},i._formState),o),r(ee({},i._formState)))},[i]);return FF({subject:i._subjects.state,callback:s}),Ge.useEffect(()=>{i._stateFlags.mount||(i._proxyFormState.isValid&&i._updateValid(),i._stateFlags.mount=!0),i._stateFlags.watch&&(i._stateFlags.watch=!1,i._subjects.state.next({})),i._removeUnmounted()}),e.current.formState=LF(n,i._proxyFormState),e.current}var es=function(t){var e=t.as,n=t.errors,r=t.name,i=t.message,s=t.render,o=function(d,g){if(d==null)return{};var _,E,p={},h=Object.keys(d);for(E=0;E<h.length;E++)g.indexOf(_=h[E])>=0||(p[_]=d[_]);return p}(t,["as","errors","name","message","render"]),a=MF(),l=Y(n||a.formState.errors,r);if(!l)return null;var u=l.message,c=l.types,f=Object.assign({},o,{children:u||i});return se.exports.isValidElement(e)?se.exports.cloneElement(e,f):s?s({message:u||i,messages:c}):se.exports.createElement(e||se.exports.Fragment,f)},YF=setTimeout;function QF(t,e){var n=e.useCachedSetTimeout?YF:setTimeout;return new Promise(function(r){n(r,t)})}function cc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.useCachedSetTimeout,r=QF(t,{useCachedSetTimeout:n});function i(s){return r.then(function(){return s})}return i.then=function(){return r.then.apply(r,arguments)},i.catch=Promise.resolve().catch,i}const XF="_dot_co9vg_6",JF="_fade_co9vg_1";var Pl={"loading-dots":"_loading-dots_co9vg_1",dot:XF,fade:JF};function Ek(t){return he("div",At(ee({},t),{className:`${Pl["loading-dots"]} ${t.className}`,children:[A("div",{className:Pl.dot,style:{"--order":1}}),A("div",{className:Pl.dot,style:{"--order":2}}),A("div",{className:Pl.dot,style:{"--order":3}})]}))}var ZF={"form-input":"_form-input_1ew8j_1"};function ir(t){return A("div",{className:`${ZF["form-input"]} ${t.row?"f-ai-c":"f-col"}`,children:t.children})}var e3={"sign-in-form":"_sign-in-form_1lm5w_1"};function t3(t){const{register:e,formState:{isValid:n,isSubmitting:r,isSubmitSuccessful:i,errors:s},handleSubmit:o,setError:a,reset:l}=_k({mode:"onChange"});async function u(c){await RP(c.email,c.password,c.rememberMe,async()=>{await cc(500),t.onRequestClose(),await cc(200),l()},f=>{f.code==="auth/user-not-found"?a("email",{type:"manual",message:"Email is not found!"},{shouldFocus:!0}):f.code==="auth/wrong-password"&&a("password",{type:"manual",message:"Password is incorrect!"},{shouldFocus:!0})})}return he(kg,{className:"SignInModal f-center f-col g-1 card",isOpen:t.isOpen,onRequestClose:t.onRequestClose,contentLabel:"Sign in",children:[A("h1",{children:"Sign in"}),A("hr",{className:"horizontal-separator"}),he("form",{className:`${e3["sign-in-form"]} f-col g-1-5`,onSubmit:o(async c=>await u(c)),children:[he(ir,{children:[A("label",{htmlFor:"email",children:"Email:"}),A("input",ee({className:s.email&&"invalid-input",type:"email",id:"email",inputMode:"email"},e("email",{required:!0}))),A(es,{errors:s,name:"email",render:()=>{var c;return A("span",{className:"error",children:(c=s.email)==null?void 0:c.message})}})]}),he(ir,{children:[A("label",{htmlFor:"password",children:"Password:"}),A("input",ee({className:s.password&&"invalid-input",type:"password",id:"password"},e("password",{required:!0}))),A(es,{errors:s,name:"password",render:()=>{var c;return A("span",{className:"error",children:(c=s.password)==null?void 0:c.message})}})]}),he(ir,{row:!0,children:[A("input",ee({type:"checkbox",id:"remember-me"},e("rememberMe"))),A("label",{htmlFor:"remember-me",children:"Remember me"})]}),he(vi,{className:"bg-purple",type:"submit",disabled:!n||r||i,faIcon:i?kb:void 0,children:[A("span",{style:{display:r?"none":"inherit"},children:"Sign in"}),A(Ek,{style:{display:r?"inherit":"none",padding:"0.2625rem 0"}})]})]})]})}var n3={"sign-up-form":"_sign-up-form_zstu0_1"};function r3(t){const{register:e,watch:n,formState:{errors:r,isValid:i,isSubmitting:s,isSubmitSuccessful:o},handleSubmit:a,setError:l,reset:u}=_k({mode:"onChange"});async function c(f){await AP(f.email,f.userName,f.profilePicture?f.profilePicture[0]:null,f.password,async()=>{await cc(500),t.onRequestClose(),await cc(200),u()},d=>{d.code==="auth/email-already-in-use"&&l("email",{type:"manual",message:"Email is already in use!"},{shouldFocus:!0})})}return he(kg,{className:"SignUpModal f-center f-col g-1 card",contentLabel:"Sign up",isOpen:t.isOpen,shouldCloseOnEsc:!1,onRequestClose:()=>t.onRequestClose(),children:[A("h1",{children:"Sign up"}),A("hr",{className:"horizontal-separator"}),he("form",{className:`${n3["sign-up-form"]} f-col g-1-5`,onSubmit:a(async f=>await c(f)),children:[he(ir,{children:[A("label",{htmlFor:"email",children:"Email:"}),A("input",ee({className:r.email&&"invalid-input",type:"email",id:"email",inputMode:"email",placeholder:"example@domain.com"},e("email",{required:!0,pattern:/^[^\s@]+@[^\s@]+\.[^\s@]+$/}))),A(es,{errors:r,name:"email",render:f=>f.message?A("span",{className:"error",children:f.message}):A("span",{className:"error",children:"Email must be valid!"})})]}),he(ir,{children:[A("label",{htmlFor:"username",children:"Username:"}),A("input",ee({className:r.userName&&"invalid-input",type:"text",id:"username",placeholder:"user123"},e("userName",{required:!0,pattern:/^(?=.{4,20}$)(?![-_.])(?!.*[-_.]{2})[a-zA-Z0-9-._]+(?<![-_.])$/}))),A(es,{errors:r,name:"userName",render:()=>A("span",{className:"error",children:"Username must be between 3 and 20 characters and must not contain special characters except for _ and -"})})]}),he(ir,{children:[he("label",{htmlFor:"profile-picture",children:["Profile picture ",A("span",{className:"text-info",children:"(optional)"}),":"]}),A("input",ee({className:r.profilePicture&&"invalid-input",type:"file",accept:"image/*",id:"profile-picture"},e("profilePicture")))]}),he(ir,{children:[A("label",{htmlFor:"password",children:"Password:"}),A("input",ee({className:r.password&&"invalid-input",type:"password",id:"password"},e("password",{required:!0,pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/}))),A(es,{errors:r,name:"password",render:()=>A("span",{className:"error",children:"Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter and one number!"})})]}),he(ir,{children:[A("label",{htmlFor:"repeat-password",children:"Repeat password:"}),A("input",ee({className:r.repeatPassword&&"invalid-input",type:"password",id:"repeat-password"},e("repeatPassword",{required:!0,validate:f=>f===n("password")}))),A(es,{errors:r,name:"repeatPassword",render:()=>A("span",{className:"error",children:"Passwords must match!"})})]}),he(vi,{className:"bg-purple",type:"submit",disabled:!i||s||o,faIcon:o?kb:void 0,children:[A("span",{style:{display:s?"none":"inherit"},children:"Sign up"}),A(Ek,{style:{display:s?"inherit":"none",padding:"0.2625rem 0"}})]})]})]})}function i3(){const[t,e]=se.exports.useState(!1);function n(){e(!0)}function r(){e(!1)}const[i,s]=se.exports.useState(!1),[o,a]=se.exports.useState(),[l,u]=se.exports.useState("");function c(){s(!1)}function f(S,D){u(D),a(S),s(!i)}const[d,g]=se.exports.useState(!1);function _(){g(!d)}const[E,p]=se.exports.useState(!1);function h(){p(!E)}const[m,v]=se.exports.useState(!1);function w(){v(!m)}async function C(){await NP(),w()}const[T,x]=se.exports.useState(null);se.exports.useEffect(()=>{(async()=>{const S=await MP();x(S)})()},[]);function L(){return T==null?void 0:T.map(S=>{const D=Math.round((new Date().getTime()-S.date.toDate().getTime())/1e3/60),B=Math.round(D/60),V=Math.round(B/24),j=Math.round(V/7),z=Math.round(j/4),W=Math.round(z/12);let re="";return W>0?re=`${W} year${W>1?"s":""} ago`:z>0?re=`${z} month${z>1?"s":""} ago`:j>0?re=`${j} week${j>1?"s":""} ago`:V>0?re=`${V} day${V>1?"s":""} ago`:B>0?re=`${B} hour${B>1?"s":""} ago`:D>0?re=`${D} minute${D>1?"s":""} ago`:re="Just now",A(vM,{profilePicture:S.user.profilePictureDownloadURL,userName:S.user.userName,date:re,votes:S.votes,message:S.message,openReplyModal:f,openDeleteCommentModal:n},S.id)})}return he(Sb,{children:[A(GD,{openSignInModal:_,openSignUpModal:h,openSignOutModal:w}),he("section",{className:"comments",children:[L(),A("div",{className:"add-comment-modal"})]}),A(gF,{}),A(yF,{isOpen:i,onCancel:c,parent:o!=null?o:document.getElementById("root"),userName:l}),A(rw,{header:"Delete comment",message:"Are you sure you want to delete this comment? This will remove the comment and can't be undone.",noText:"NO, CANCEL",yesText:"YES, DELETE",onNoClicked:()=>r(),onYesClicked:()=>r(),isOpen:t}),A(t3,{isOpen:d,onRequestClose:()=>_()}),A(r3,{isOpen:E,onRequestClose:()=>h()}),A(rw,{header:"Sign out",message:"Are you sure you want to sign out?",noText:"NO, CANCEL",yesText:"YES, SIGN OUT",onNoClicked:()=>w(),onYesClicked:()=>C(),isOpen:m})]})}h$.render(A(Ge.StrictMode,{children:A(i3,{})}),document.getElementById("root"));
