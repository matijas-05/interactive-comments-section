var ti=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Yn(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function ei(t){var e=t.default;if(typeof e=="function"){var n=function a(){if(this instanceof a){var r=[null];r.push.apply(r,arguments);var i=Function.bind.apply(e,r);return new i}return e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(a){var r=Object.getOwnPropertyDescriptor(t,a);Object.defineProperty(n,a,r.get?r:{enumerable:!0,get:function(){return t[a]}})}),n}var Je={exports:{}},b={};var ut=Symbol.for("react.element"),Un=Symbol.for("react.portal"),Hn=Symbol.for("react.fragment"),Wn=Symbol.for("react.strict_mode"),Vn=Symbol.for("react.profiler"),Bn=Symbol.for("react.provider"),Gn=Symbol.for("react.context"),Xn=Symbol.for("react.forward_ref"),qn=Symbol.for("react.suspense"),Kn=Symbol.for("react.memo"),Qn=Symbol.for("react.lazy"),we=Symbol.iterator;function Jn(t){return t===null||typeof t!="object"?null:(t=we&&t[we]||t["@@iterator"],typeof t=="function"?t:null)}var Ze={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tn=Object.assign,en={};function et(t,e,n){this.props=t,this.context=e,this.refs=en,this.updater=n||Ze}et.prototype.isReactComponent={};et.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};et.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function nn(){}nn.prototype=et.prototype;function ie(t,e,n){this.props=t,this.context=e,this.refs=en,this.updater=n||Ze}var oe=ie.prototype=new nn;oe.constructor=ie;tn(oe,et.prototype);oe.isPureReactComponent=!0;var Ae=Array.isArray,an=Object.prototype.hasOwnProperty,se={current:null},rn={key:!0,ref:!0,__self:!0,__source:!0};function on(t,e,n){var a,r={},i=null,o=null;if(e!=null)for(a in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)an.call(e,a)&&!rn.hasOwnProperty(a)&&(r[a]=e[a]);var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){for(var f=Array(s),l=0;l<s;l++)f[l]=arguments[l+2];r.children=f}if(t&&t.defaultProps)for(a in s=t.defaultProps,s)r[a]===void 0&&(r[a]=s[a]);return{$$typeof:ut,type:t,key:i,ref:o,props:r,_owner:se.current}}function Zn(t,e){return{$$typeof:ut,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function fe(t){return typeof t=="object"&&t!==null&&t.$$typeof===ut}function ta(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Oe=/\/+/g;function Dt(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ta(""+t.key):e.toString(36)}function St(t,e,n,a,r){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ut:case Un:o=!0}}if(o)return o=t,r=r(o),t=a===""?"."+Dt(o,0):a,Ae(r)?(n="",t!=null&&(n=t.replace(Oe,"$&/")+"/"),St(r,e,n,"",function(l){return l})):r!=null&&(fe(r)&&(r=Zn(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Oe,"$&/")+"/")+t)),e.push(r)),1;if(o=0,a=a===""?".":a+":",Ae(t))for(var s=0;s<t.length;s++){i=t[s];var f=a+Dt(i,s);o+=St(i,e,n,f,r)}else if(f=Jn(t),typeof f=="function")for(t=f.call(t),s=0;!(i=t.next()).done;)i=i.value,f=a+Dt(i,s++),o+=St(i,e,n,f,r);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function pt(t,e,n){if(t==null)return t;var a=[],r=0;return St(t,a,"","",function(i){return e.call(n,i,r++)}),a}function ea(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var E={current:null},Pt={transition:null},na={ReactCurrentDispatcher:E,ReactCurrentBatchConfig:Pt,ReactCurrentOwner:se};b.Children={map:pt,forEach:function(t,e,n){pt(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return pt(t,function(){e++}),e},toArray:function(t){return pt(t,function(e){return e})||[]},only:function(t){if(!fe(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};b.Component=et;b.Fragment=Hn;b.Profiler=Vn;b.PureComponent=ie;b.StrictMode=Wn;b.Suspense=qn;b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=na;b.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var a=tn({},t.props),r=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=se.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var s=t.type.defaultProps;for(f in e)an.call(e,f)&&!rn.hasOwnProperty(f)&&(a[f]=e[f]===void 0&&s!==void 0?s[f]:e[f])}var f=arguments.length-2;if(f===1)a.children=n;else if(1<f){s=Array(f);for(var l=0;l<f;l++)s[l]=arguments[l+2];a.children=s}return{$$typeof:ut,type:t.type,key:r,ref:i,props:a,_owner:o}};b.createContext=function(t){return t={$$typeof:Gn,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Bn,_context:t},t.Consumer=t};b.createElement=on;b.createFactory=function(t){var e=on.bind(null,t);return e.type=t,e};b.createRef=function(){return{current:null}};b.forwardRef=function(t){return{$$typeof:Xn,render:t}};b.isValidElement=fe;b.lazy=function(t){return{$$typeof:Qn,_payload:{_status:-1,_result:t},_init:ea}};b.memo=function(t,e){return{$$typeof:Kn,type:t,compare:e===void 0?null:e}};b.startTransition=function(t){var e=Pt.transition;Pt.transition={};try{t()}finally{Pt.transition=e}};b.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};b.useCallback=function(t,e){return E.current.useCallback(t,e)};b.useContext=function(t){return E.current.useContext(t)};b.useDebugValue=function(){};b.useDeferredValue=function(t){return E.current.useDeferredValue(t)};b.useEffect=function(t,e){return E.current.useEffect(t,e)};b.useId=function(){return E.current.useId()};b.useImperativeHandle=function(t,e,n){return E.current.useImperativeHandle(t,e,n)};b.useInsertionEffect=function(t,e){return E.current.useInsertionEffect(t,e)};b.useLayoutEffect=function(t,e){return E.current.useLayoutEffect(t,e)};b.useMemo=function(t,e){return E.current.useMemo(t,e)};b.useReducer=function(t,e,n){return E.current.useReducer(t,e,n)};b.useRef=function(t){return E.current.useRef(t)};b.useState=function(t){return E.current.useState(t)};b.useSyncExternalStore=function(t,e,n){return E.current.useSyncExternalStore(t,e,n)};b.useTransition=function(){return E.current.useTransition()};b.version="18.2.0";(function(t){t.exports=b})(Je);const sn=Yn(Je.exports);var ni={prefix:"fas",iconName:"reply",icon:[512,512,[61714,"mail-reply"],"f3e5","M205 34.8c11.5 5.1 19 16.6 19 29.2v64H336c97.2 0 176 78.8 176 176c0 113.3-81.5 163.9-100.2 174.1c-2.5 1.4-5.3 1.9-8.1 1.9c-10.9 0-19.7-8.9-19.7-19.7c0-7.5 4.3-14.4 9.8-19.5c9.4-8.8 22.2-26.4 22.2-56.7c0-53-43-96-96-96H224v64c0 12.6-7.4 24.1-19 29.2s-25 3-34.4-5.4l-160-144C3.9 225.7 0 217.1 0 208s3.9-17.7 10.6-23.8l160-144c9.4-8.5 22.9-10.6 34.4-5.4z"]},ai={prefix:"fas",iconName:"arrow-right-from-bracket",icon:[576,512,["sign-out"],"f08b","M534.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L434.7 224 224 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM192 96c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-53 0-96 43-96 96l0 256c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"]},aa={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"]},ri=aa,ii={prefix:"fas",iconName:"arrow-right-to-bracket",icon:[512,512,["sign-in"],"f090","M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"]},oi={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]},si={prefix:"fas",iconName:"user-plus",icon:[640,512,[],"f234","M352 128c0 70.7-57.3 128-128 128s-128-57.3-128-128S153.3 0 224 0s128 57.3 128 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]},fi={prefix:"fas",iconName:"check",icon:[512,512,[10003,10004],"f00c","M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]},p={exports:{}},ra="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ia=ra,oa=ia;function fn(){}function ln(){}ln.resetWarningCache=fn;var sa=function(){function t(a,r,i,o,s,f){if(f!==oa){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:ln,resetWarningCache:fn};return n.PropTypes=n,n};p.exports=sa();function Se(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Se(Object(n),!0).forEach(function(a){S(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Se(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Ct(t){return Ct=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ct(t)}function fa(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Pe(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function la(t,e,n){return e&&Pe(t.prototype,e),n&&Pe(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function S(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function le(t,e){return ua(t)||da(t,e)||cn(t,e)||pa()}function mt(t){return ca(t)||ma(t)||cn(t)||va()}function ca(t){if(Array.isArray(t))return Vt(t)}function ua(t){if(Array.isArray(t))return t}function ma(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function da(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var a=[],r=!0,i=!1,o,s;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(a.push(o.value),!(e&&a.length===e));r=!0);}catch(f){i=!0,s=f}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw s}}return a}}function cn(t,e){if(!!t){if(typeof t=="string")return Vt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Vt(t,e)}}function Vt(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function va(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pa(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var _e=function(){},ce={},un={},mn=null,dn={mark:_e,measure:_e};try{typeof window<"u"&&(ce=window),typeof document<"u"&&(un=document),typeof MutationObserver<"u"&&(mn=MutationObserver),typeof performance<"u"&&(dn=performance)}catch{}var ba=ce.navigator||{},Ee=ba.userAgent,Ce=Ee===void 0?"":Ee,Y=ce,h=un,Ie=mn,bt=dn;Y.document;var F=!!h.documentElement&&!!h.head&&typeof h.addEventListener=="function"&&typeof h.createElement=="function",vn=~Ce.indexOf("MSIE")||~Ce.indexOf("Trident/"),gt,yt,ht,xt,kt,M="___FONT_AWESOME___",Bt=16,pn="fa",bn="svg-inline--fa",X="data-fa-i2svg",Gt="data-fa-pseudo-element",ga="data-fa-pseudo-element-pending",ue="data-prefix",me="data-icon",Ne="fontawesome-i2svg",ya="async",ha=["HTML","HEAD","STYLE","SCRIPT"],gn=function(){try{return!0}catch{return!1}}(),y="classic",x="sharp",de=[y,x];function dt(t){return new Proxy(t,{get:function(n,a){return a in n?n[a]:n[y]}})}var ot=dt((gt={},S(gt,y,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),S(gt,x,{fa:"solid",fass:"solid","fa-solid":"solid"}),gt)),st=dt((yt={},S(yt,y,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),S(yt,x,{solid:"fass"}),yt)),ft=dt((ht={},S(ht,y,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),S(ht,x,{fass:"fa-solid"}),ht)),xa=dt((xt={},S(xt,y,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),S(xt,x,{"fa-solid":"fass"}),xt)),ka=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,yn="fa-layers-text",wa=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Aa=dt((kt={},S(kt,y,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),S(kt,x,{900:"fass"}),kt)),hn=[1,2,3,4,5,6,7,8,9,10],Oa=hn.concat([11,12,13,14,15,16,17,18,19,20]),Sa=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],B={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},lt=new Set;Object.keys(st[y]).map(lt.add.bind(lt));Object.keys(st[x]).map(lt.add.bind(lt));var Pa=[].concat(de,mt(lt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",B.GROUP,B.SWAP_OPACITY,B.PRIMARY,B.SECONDARY]).concat(hn.map(function(t){return"".concat(t,"x")})).concat(Oa.map(function(t){return"w-".concat(t)})),rt=Y.FontAwesomeConfig||{};function _a(t){var e=h.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Ea(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(h&&typeof h.querySelector=="function"){var Ca=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ca.forEach(function(t){var e=le(t,2),n=e[0],a=e[1],r=Ea(_a(n));r!=null&&(rt[a]=r)})}var xn={styleDefault:"solid",familyDefault:"classic",cssPrefix:pn,replacementClass:bn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};rt.familyPrefix&&(rt.cssPrefix=rt.familyPrefix);var tt=u(u({},xn),rt);tt.autoReplaceSvg||(tt.observeMutations=!1);var d={};Object.keys(xn).forEach(function(t){Object.defineProperty(d,t,{enumerable:!0,set:function(n){tt[t]=n,it.forEach(function(a){return a(d)})},get:function(){return tt[t]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(e){tt.cssPrefix=e,it.forEach(function(n){return n(d)})},get:function(){return tt.cssPrefix}});Y.FontAwesomeConfig=d;var it=[];function Ia(t){return it.push(t),function(){it.splice(it.indexOf(t),1)}}var D=Bt,R={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Na(t){if(!(!t||!F)){var e=h.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=h.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return h.head.insertBefore(e,a),t}}var Ta="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ct(){for(var t=12,e="";t-- >0;)e+=Ta[Math.random()*62|0];return e}function nt(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function ve(t){return t.classList?nt(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function kn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ra(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(kn(t[n]),'" ')},"").trim()}function Rt(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function pe(t){return t.size!==R.size||t.x!==R.x||t.y!==R.y||t.rotate!==R.rotate||t.flipX||t.flipY}function Ma(t){var e=t.transform,n=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},l={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:l}}function La(t){var e=t.transform,n=t.width,a=n===void 0?Bt:n,r=t.height,i=r===void 0?Bt:r,o=t.startCentered,s=o===void 0?!1:o,f="";return s&&vn?f+="translate(".concat(e.x/D-a/2,"em, ").concat(e.y/D-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(e.x/D,"em), calc(-50% + ").concat(e.y/D,"em)) "):f+="translate(".concat(e.x/D,"em, ").concat(e.y/D,"em) "),f+="scale(".concat(e.size/D*(e.flipX?-1:1),", ").concat(e.size/D*(e.flipY?-1:1),") "),f+="rotate(".concat(e.rotate,"deg) "),f}var ja=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
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
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
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
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
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
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
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
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
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
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
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
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
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
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
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
}`;function wn(){var t=pn,e=bn,n=d.cssPrefix,a=d.replacementClass,r=ja;if(n!==t||a!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var Te=!1;function $t(){d.autoAddCss&&!Te&&(Na(wn()),Te=!0)}var Fa={mixout:function(){return{dom:{css:wn,insertCss:$t}}},hooks:function(){return{beforeDOMElementCreation:function(){$t()},beforeI2svg:function(){$t()}}}},L=Y||{};L[M]||(L[M]={});L[M].styles||(L[M].styles={});L[M].hooks||(L[M].hooks={});L[M].shims||(L[M].shims=[]);var T=L[M],An=[],za=function t(){h.removeEventListener("DOMContentLoaded",t),It=1,An.map(function(e){return e()})},It=!1;F&&(It=(h.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(h.readyState),It||h.addEventListener("DOMContentLoaded",za));function Da(t){!F||(It?setTimeout(t,0):An.push(t))}function vt(t){var e=t.tag,n=t.attributes,a=n===void 0?{}:n,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?kn(t):"<".concat(e," ").concat(Ra(a),">").concat(i.map(vt).join(""),"</").concat(e,">")}function Re(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var $a=function(e,n){return function(a,r,i,o){return e.call(n,a,r,i,o)}},Yt=function(e,n,a,r){var i=Object.keys(e),o=i.length,s=r!==void 0?$a(n,r):n,f,l,c;for(a===void 0?(f=1,c=e[i[0]]):(f=0,c=a);f<o;f++)l=i[f],c=s(c,e[l],l,e);return c};function Ya(t){for(var e=[],n=0,a=t.length;n<a;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Xt(t){var e=Ya(t);return e.length===1?e[0].toString(16):null}function Ua(t,e){var n=t.length,a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Me(t){return Object.keys(t).reduce(function(e,n){var a=t[n],r=!!a.icon;return r?e[a.iconName]=a.icon:e[n]=a,e},{})}function qt(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,i=Me(e);typeof T.hooks.addPack=="function"&&!r?T.hooks.addPack(t,Me(e)):T.styles[t]=u(u({},T.styles[t]||{}),i),t==="fas"&&qt("fa",e)}var wt,At,Ot,K=T.styles,Ha=T.shims,Wa=(wt={},S(wt,y,Object.values(ft[y])),S(wt,x,Object.values(ft[x])),wt),be=null,On={},Sn={},Pn={},_n={},En={},Va=(At={},S(At,y,Object.keys(ot[y])),S(At,x,Object.keys(ot[x])),At);function Ba(t){return~Pa.indexOf(t)}function Ga(t,e){var n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!Ba(r)?r:null}var Cn=function(){var e=function(i){return Yt(K,function(o,s,f){return o[f]=Yt(s,i,{}),o},{})};On=e(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=o})}return r}),Sn=e(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=o})}return r}),En=e(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(f){r[f]=o}),r});var n="far"in K||d.autoFetchSvg,a=Yt(Ha,function(r,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});Pn=a.names,_n=a.unicodes,be=Mt(d.styleDefault,{family:d.familyDefault})};Ia(function(t){be=Mt(t.styleDefault,{family:d.familyDefault})});Cn();function ge(t,e){return(On[t]||{})[e]}function Xa(t,e){return(Sn[t]||{})[e]}function G(t,e){return(En[t]||{})[e]}function In(t){return Pn[t]||{prefix:null,iconName:null}}function qa(t){var e=_n[t],n=ge("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function U(){return be}var ye=function(){return{prefix:null,iconName:null,rest:[]}};function Mt(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,a=n===void 0?y:n,r=ot[a][t],i=st[a][t]||st[a][r],o=t in T.styles?t:null;return i||o||null}var Le=(Ot={},S(Ot,y,Object.keys(ft[y])),S(Ot,x,Object.keys(ft[x])),Ot);function Lt(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,i=(e={},S(e,y,"".concat(d.cssPrefix,"-").concat(y)),S(e,x,"".concat(d.cssPrefix,"-").concat(x)),e),o=null,s=y;(t.includes(i[y])||t.some(function(l){return Le[y].includes(l)}))&&(s=y),(t.includes(i[x])||t.some(function(l){return Le[x].includes(l)}))&&(s=x);var f=t.reduce(function(l,c){var m=Ga(d.cssPrefix,c);if(K[c]?(c=Wa[s].includes(c)?xa[s][c]:c,o=c,l.prefix=c):Va[s].indexOf(c)>-1?(o=c,l.prefix=Mt(c,{family:s})):m?l.iconName=m:c!==d.replacementClass&&c!==i[y]&&c!==i[x]&&l.rest.push(c),!r&&l.prefix&&l.iconName){var v=o==="fa"?In(l.iconName):{},g=G(l.prefix,l.iconName);v.prefix&&(o=null),l.iconName=v.iconName||g||l.iconName,l.prefix=v.prefix||l.prefix,l.prefix==="far"&&!K.far&&K.fas&&!d.autoFetchSvg&&(l.prefix="fas")}return l},ye());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===x&&(K.fass||d.autoFetchSvg)&&(f.prefix="fass",f.iconName=G(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||o==="fa")&&(f.prefix=U()||"fas"),f}var Ka=function(){function t(){fa(this,t),this.definitions={}}return la(t,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=u(u({},n.definitions[s]||{}),o[s]),qt(s,o[s]);var f=ft[y][s];f&&qt(f,o[s]),Cn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,f=o.iconName,l=o.icon,c=l[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(m){typeof m=="string"&&(n[s][m]=l)}),n[s][f]=l}),n}}]),t}(),je=[],Q={},Z={},Qa=Object.keys(Z);function Ja(t,e){var n=e.mixoutsTo;return je=t,Q={},Object.keys(Z).forEach(function(a){Qa.indexOf(a)===-1&&delete Z[a]}),je.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),Ct(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){Q[o]||(Q[o]=[]),Q[o].push(i[o])})}a.provides&&a.provides(Z)}),n}function Kt(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=Q[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(a))}),e}function q(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];var r=Q[t]||[];r.forEach(function(i){i.apply(null,n)})}function j(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Z[t]?Z[t].apply(null,e):void 0}function Qt(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||U();if(!!e)return e=G(n,e)||e,Re(Nn.definitions,n,e)||Re(T.styles,n,e)}var Nn=new Ka,Za=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,q("noAuto")},tr={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return F?(q("beforeI2svg",e),j("pseudoElements2svg",e),j("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,Da(function(){nr({autoReplaceSvgRoot:n}),q("watch",e)})}},er={icon:function(e){if(e===null)return null;if(Ct(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:G(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],a=Mt(e[0]);return{prefix:a,iconName:G(a,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(d.cssPrefix,"-"))>-1||e.match(ka))){var r=Lt(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||U(),iconName:G(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var i=U();return{prefix:i,iconName:G(i,e)||e}}}},N={noAuto:Za,config:d,dom:tr,parse:er,library:Nn,findIconDefinition:Qt,toHtml:vt},nr=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,a=n===void 0?h:n;(Object.keys(T.styles).length>0||d.autoFetchSvg)&&F&&d.autoReplaceSvg&&N.dom.i2svg({node:a})};function jt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return vt(a)})}}),Object.defineProperty(t,"node",{get:function(){if(!!F){var a=h.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function ar(t){var e=t.children,n=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(pe(o)&&n.found&&!a.found){var s=n.width,f=n.height,l={x:s/f/2,y:.5};r.style=Rt(u(u({},i),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function rr(t){var e=t.prefix,n=t.iconName,a=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(d.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},r),{},{id:o}),children:a}]}]}function he(t){var e=t.icons,n=e.main,a=e.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,f=t.title,l=t.maskId,c=t.titleId,m=t.extra,v=t.watchable,g=v===void 0?!1:v,A=a.found?a:n,_=A.width,k=A.height,C=r==="fak",w=[d.replacementClass,i?"".concat(d.cssPrefix,"-").concat(i):""].filter(function(z){return m.classes.indexOf(z)===-1}).filter(function(z){return z!==""||!!z}).concat(m.classes).join(" "),O={children:[],attributes:u(u({},m.attributes),{},{"data-prefix":r,"data-icon":i,class:w,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(k)})},I=C&&!~m.classes.indexOf("fa-fw")?{width:"".concat(_/k*16*.0625,"em")}:{};g&&(O.attributes[X]=""),f&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(c||ct())},children:[f]}),delete O.attributes.title);var P=u(u({},O),{},{prefix:r,iconName:i,main:n,mask:a,maskId:l,transform:o,symbol:s,styles:u(u({},I),m.styles)}),W=a.found&&n.found?j("generateAbstractMask",P)||{children:[],attributes:{}}:j("generateAbstractIcon",P)||{children:[],attributes:{}},V=W.children,zt=W.attributes;return P.children=V,P.attributes=zt,s?rr(P):ar(P)}function Fe(t){var e=t.content,n=t.width,a=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,f=s===void 0?!1:s,l=u(u(u({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(l[X]="");var c=u({},o.styles);pe(r)&&(c.transform=La({transform:r,startCentered:!0,width:n,height:a}),c["-webkit-transform"]=c.transform);var m=Rt(c);m.length>0&&(l.style=m);var v=[];return v.push({tag:"span",attributes:l,children:[e]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function ir(t){var e=t.content,n=t.title,a=t.extra,r=u(u(u({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=Rt(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Ut=T.styles;function Jt(t){var e=t[0],n=t[1],a=t.slice(4),r=le(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(B.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(B.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(B.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var or={found:!1,width:512,height:512};function sr(t,e){!gn&&!d.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Zt(t,e){var n=e;return e==="fa"&&d.styleDefault!==null&&(e=U()),new Promise(function(a,r){if(j("missingIconAbstract"),n==="fa"){var i=In(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Ut[e]&&Ut[e][t]){var o=Ut[e][t];return a(Jt(o))}sr(t,e),a(u(u({},or),{},{icon:d.showMissingIcons&&t?j("missingIconAbstract")||{}:{}}))})}var ze=function(){},te=d.measurePerformance&&bt&&bt.mark&&bt.measure?bt:{mark:ze,measure:ze},at='FA "6.2.1"',fr=function(e){return te.mark("".concat(at," ").concat(e," begins")),function(){return Tn(e)}},Tn=function(e){te.mark("".concat(at," ").concat(e," ends")),te.measure("".concat(at," ").concat(e),"".concat(at," ").concat(e," begins"),"".concat(at," ").concat(e," ends"))},xe={begin:fr,end:Tn},_t=function(){};function De(t){var e=t.getAttribute?t.getAttribute(X):null;return typeof e=="string"}function lr(t){var e=t.getAttribute?t.getAttribute(ue):null,n=t.getAttribute?t.getAttribute(me):null;return e&&n}function cr(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(d.replacementClass)}function ur(){if(d.autoReplaceSvg===!0)return Et.replace;var t=Et[d.autoReplaceSvg];return t||Et.replace}function mr(t){return h.createElementNS("http://www.w3.org/2000/svg",t)}function dr(t){return h.createElement(t)}function Rn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,a=n===void 0?t.tag==="svg"?mr:dr:n;if(typeof t=="string")return h.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(Rn(o,{ceFn:a}))}),r}function vr(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Et={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(Rn(r),n)}),n.getAttribute(X)===null&&d.keepOriginalSource){var a=h.createComment(vr(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(e){var n=e[0],a=e[1];if(~ve(n).indexOf(d.replacementClass))return Et.replace(e);var r=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,f){return f===d.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return vt(s)}).join(`
`);n.setAttribute(X,""),n.innerHTML=o}};function $e(t){t()}function Mn(t,e){var n=typeof e=="function"?e:_t;if(t.length===0)n();else{var a=$e;d.mutateApproach===ya&&(a=Y.requestAnimationFrame||$e),a(function(){var r=ur(),i=xe.begin("mutate");t.map(r),i(),n()})}}var ke=!1;function Ln(){ke=!0}function ee(){ke=!1}var Nt=null;function Ye(t){if(!!Ie&&!!d.observeMutations){var e=t.treeCallback,n=e===void 0?_t:e,a=t.nodeCallback,r=a===void 0?_t:a,i=t.pseudoElementsCallback,o=i===void 0?_t:i,s=t.observeMutationsRoot,f=s===void 0?h:s;Nt=new Ie(function(l){if(!ke){var c=U();nt(l).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!De(m.addedNodes[0])&&(d.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&d.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&De(m.target)&&~Sa.indexOf(m.attributeName))if(m.attributeName==="class"&&lr(m.target)){var v=Lt(ve(m.target)),g=v.prefix,A=v.iconName;m.target.setAttribute(ue,g||c),A&&m.target.setAttribute(me,A)}else cr(m.target)&&r(m.target)})}}),F&&Nt.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function pr(){!Nt||Nt.disconnect()}function br(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function gr(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=Lt(ve(t));return r.prefix||(r.prefix=U()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Xa(r.prefix,t.innerText)||ge(r.prefix,Xt(t.innerText))),!r.iconName&&d.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function yr(t){var e=nt(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return d.autoA11y&&(n?e["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(a||ct()):(e["aria-hidden"]="true",e.focusable="false")),e}function hr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:R,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ue(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=gr(t),a=n.iconName,r=n.prefix,i=n.rest,o=yr(t),s=Kt("parseNodeAttributes",{},t),f=e.styleParser?br(t):[];return u({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:R,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var xr=T.styles;function jn(t){var e=d.autoReplaceSvg==="nest"?Ue(t,{styleParser:!1}):Ue(t);return~e.extra.classes.indexOf(yn)?j("generateLayersText",t,e):j("generateSvgReplacementMutation",t,e)}var H=new Set;de.map(function(t){H.add("fa-".concat(t))});Object.keys(ot[y]).map(H.add.bind(H));Object.keys(ot[x]).map(H.add.bind(H));H=mt(H);function He(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!F)return Promise.resolve();var n=h.documentElement.classList,a=function(m){return n.add("".concat(Ne,"-").concat(m))},r=function(m){return n.remove("".concat(Ne,"-").concat(m))},i=d.autoFetchSvg?H:de.map(function(c){return"fa-".concat(c)}).concat(Object.keys(xr));i.includes("fa")||i.push("fa");var o=[".".concat(yn,":not([").concat(X,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(X,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=nt(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var f=xe.begin("onTree"),l=s.reduce(function(c,m){try{var v=jn(m);v&&c.push(v)}catch(g){gn||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,m){Promise.all(l).then(function(v){Mn(v,function(){a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),f(),c()})}).catch(function(v){f(),m(v)})})}function kr(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;jn(t).then(function(n){n&&Mn([n],e)})}function wr(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:Qt(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:Qt(r||{})),t(a,u(u({},n),{},{mask:r}))}}var Ar=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?R:a,i=n.symbol,o=i===void 0?!1:i,s=n.mask,f=s===void 0?null:s,l=n.maskId,c=l===void 0?null:l,m=n.title,v=m===void 0?null:m,g=n.titleId,A=g===void 0?null:g,_=n.classes,k=_===void 0?[]:_,C=n.attributes,w=C===void 0?{}:C,O=n.styles,I=O===void 0?{}:O;if(!!e){var P=e.prefix,W=e.iconName,V=e.icon;return jt(u({type:"icon"},e),function(){return q("beforeDOMElementCreation",{iconDefinition:e,params:n}),d.autoA11y&&(v?w["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(A||ct()):(w["aria-hidden"]="true",w.focusable="false")),he({icons:{main:Jt(V),mask:f?Jt(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:P,iconName:W,transform:u(u({},R),r),symbol:o,title:v,maskId:c,titleId:A,extra:{attributes:w,styles:I,classes:k}})})}},Or={mixout:function(){return{icon:wr(Ar)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=He,n.nodeCallback=kr,n}}},provides:function(e){e.i2svg=function(n){var a=n.node,r=a===void 0?h:a,i=n.callback,o=i===void 0?function(){}:i;return He(r,o)},e.generateSvgReplacementMutation=function(n,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,f=a.transform,l=a.symbol,c=a.mask,m=a.maskId,v=a.extra;return new Promise(function(g,A){Promise.all([Zt(r,s),c.iconName?Zt(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(_){var k=le(_,2),C=k[0],w=k[1];g([n,he({icons:{main:C,mask:w},prefix:s,iconName:r,transform:f,symbol:l,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(A)})},e.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.transform,s=n.styles,f=Rt(s);f.length>0&&(r.style=f);var l;return pe(o)&&(l=j("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(l||i.icon),{children:a,attributes:r}}}},Sr={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return jt({type:"layer"},function(){q("beforeDOMElementCreation",{assembler:n,params:a});var o=[];return n(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers")].concat(mt(i)).join(" ")},children:o}]})}}}},Pr={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,f=a.attributes,l=f===void 0?{}:f,c=a.styles,m=c===void 0?{}:c;return jt({type:"counter",content:n},function(){return q("beforeDOMElementCreation",{content:n,params:a}),ir({content:n.toString(),title:i,extra:{attributes:l,styles:m,classes:["".concat(d.cssPrefix,"-layers-counter")].concat(mt(s))}})})}}}},_r={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?R:r,o=a.title,s=o===void 0?null:o,f=a.classes,l=f===void 0?[]:f,c=a.attributes,m=c===void 0?{}:c,v=a.styles,g=v===void 0?{}:v;return jt({type:"text",content:n},function(){return q("beforeDOMElementCreation",{content:n,params:a}),Fe({content:n,transform:u(u({},R),i),title:s,extra:{attributes:m,styles:g,classes:["".concat(d.cssPrefix,"-layers-text")].concat(mt(l))}})})}}},provides:function(e){e.generateLayersText=function(n,a){var r=a.title,i=a.transform,o=a.extra,s=null,f=null;if(vn){var l=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/l,f=c.height/l}return d.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Fe({content:n.innerHTML,width:s,height:f,transform:i,title:r,extra:o,watchable:!0})])}}},Er=new RegExp('"',"ug"),We=[1105920,1112319];function Cr(t){var e=t.replace(Er,""),n=Ua(e,0),a=n>=We[0]&&n<=We[1],r=e.length===2?e[0]===e[1]:!1;return{value:Xt(r?e[0]:e),isSecondary:a||r}}function Ve(t,e){var n="".concat(ga).concat(e.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(n)!==null)return a();var i=nt(t.children),o=i.filter(function(V){return V.getAttribute(Gt)===e})[0],s=Y.getComputedStyle(t,e),f=s.getPropertyValue("font-family").match(wa),l=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!f)return t.removeChild(o),a();if(f&&c!=="none"&&c!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(f[2])?x:y,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?st[v][f[2].toLowerCase()]:Aa[v][l],A=Cr(m),_=A.value,k=A.isSecondary,C=f[0].startsWith("FontAwesome"),w=ge(g,_),O=w;if(C){var I=qa(_);I.iconName&&I.prefix&&(w=I.iconName,g=I.prefix)}if(w&&!k&&(!o||o.getAttribute(ue)!==g||o.getAttribute(me)!==O)){t.setAttribute(n,O),o&&t.removeChild(o);var P=hr(),W=P.extra;W.attributes[Gt]=e,Zt(w,g).then(function(V){var zt=he(u(u({},P),{},{icons:{main:V,mask:ye()},prefix:g,iconName:O,extra:W,watchable:!0})),z=h.createElement("svg");e==="::before"?t.insertBefore(z,t.firstChild):t.appendChild(z),z.outerHTML=zt.map(function($n){return vt($n)}).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Ir(t){return Promise.all([Ve(t,"::before"),Ve(t,"::after")])}function Nr(t){return t.parentNode!==document.head&&!~ha.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Gt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Be(t){if(!!F)return new Promise(function(e,n){var a=nt(t.querySelectorAll("*")).filter(Nr).map(Ir),r=xe.begin("searchPseudoElements");Ln(),Promise.all(a).then(function(){r(),ee(),e()}).catch(function(){r(),ee(),n()})})}var Tr={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Be,n}}},provides:function(e){e.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?h:a;d.searchPseudoElements&&Be(r)}}},Ge=!1,Rr={mixout:function(){return{dom:{unwatch:function(){Ln(),Ge=!0}}}},hooks:function(){return{bootstrap:function(){Ye(Kt("mutationObserverCallbacks",{}))},noAuto:function(){pr()},watch:function(n){var a=n.observeMutationsRoot;Ge?ee():Ye(Kt("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Xe=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},n)},Mr={mixout:function(){return{parse:{transform:function(n){return Xe(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=Xe(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(f," ").concat(l," ").concat(c)},v={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:m,path:v};return{tag:"g",attributes:u({},g.outer),children:[{tag:"g",attributes:u({},g.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:u(u({},a.icon.attributes),g.path)}]}]}}}},Ht={x:0,y:0,width:"100%",height:"100%"};function qe(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Lr(t){return t.tag==="g"?t.children:[t]}var jr={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),i=r?Lt(r.split(" ").map(function(o){return o.trim()})):ye();return i.prefix||(i.prefix=U()),n.mask=i,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.mask,s=n.maskId,f=n.transform,l=i.width,c=i.icon,m=o.width,v=o.icon,g=Ma({transform:f,containerWidth:m,iconWidth:l}),A={tag:"rect",attributes:u(u({},Ht),{},{fill:"white"})},_=c.children?{children:c.children.map(qe)}:{},k={tag:"g",attributes:u({},g.inner),children:[qe(u({tag:c.tag,attributes:u(u({},c.attributes),g.path)},_))]},C={tag:"g",attributes:u({},g.outer),children:[k]},w="mask-".concat(s||ct()),O="clip-".concat(s||ct()),I={tag:"mask",attributes:u(u({},Ht),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,C]},P={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:Lr(v)},I]};return a.push(P,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(w,")")},Ht)}),{children:a,attributes:r}}}},Fr={provides:function(e){var n=!1;Y.matchMedia&&(n=Y.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:u(u({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=u(u({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:u(u({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:u(u({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:u(u({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:u(u({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:u(u({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},zr={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},Dr=[Fa,Or,Sr,Pr,_r,Tr,Rr,Mr,jr,Fr,zr];Ja(Dr,{mixoutsTo:N});N.noAuto;N.config;N.library;N.dom;var ne=N.parse;N.findIconDefinition;N.toHtml;var $r=N.icon;N.layer;N.text;N.counter;function Ke(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function $(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ke(Object(n),!0).forEach(function(a){J(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ke(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Tt(t){return Tt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Tt(t)}function J(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Yr(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function Ur(t,e){if(t==null)return{};var n=Yr(t,e),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(e.indexOf(a)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,a)||(n[a]=t[a]))}return n}function ae(t){return Hr(t)||Wr(t)||Vr(t)||Br()}function Hr(t){if(Array.isArray(t))return re(t)}function Wr(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Vr(t,e){if(!!t){if(typeof t=="string")return re(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return re(t,e)}}function re(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function Br(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Gr(t){var e,n=t.beat,a=t.fade,r=t.beatFade,i=t.bounce,o=t.shake,s=t.flash,f=t.spin,l=t.spinPulse,c=t.spinReverse,m=t.pulse,v=t.fixedWidth,g=t.inverse,A=t.border,_=t.listItem,k=t.flip,C=t.size,w=t.rotation,O=t.pull,I=(e={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":f,"fa-spin-reverse":c,"fa-spin-pulse":l,"fa-pulse":m,"fa-fw":v,"fa-inverse":g,"fa-border":A,"fa-li":_,"fa-flip":k===!0,"fa-flip-horizontal":k==="horizontal"||k==="both","fa-flip-vertical":k==="vertical"||k==="both"},J(e,"fa-".concat(C),typeof C<"u"&&C!==null),J(e,"fa-rotate-".concat(w),typeof w<"u"&&w!==null&&w!==0),J(e,"fa-pull-".concat(O),typeof O<"u"&&O!==null),J(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(I).map(function(P){return I[P]?P:null}).filter(function(P){return P})}function Xr(t){return t=t-0,t===t}function Fn(t){return Xr(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var qr=["style"];function Kr(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Qr(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=Fn(n.slice(0,a)),i=n.slice(a+1).trim();return r.startsWith("webkit")?e[Kr(r)]=i:e[r]=i,e},{})}function zn(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(f){return zn(t,f)}),r=Object.keys(e.attributes||{}).reduce(function(f,l){var c=e.attributes[l];switch(l){case"class":f.attrs.className=c,delete e.attributes.class;break;case"style":f.attrs.style=Qr(c);break;default:l.indexOf("aria-")===0||l.indexOf("data-")===0?f.attrs[l.toLowerCase()]=c:f.attrs[Fn(l)]=c}return f},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=Ur(n,qr);return r.attrs.style=$($({},r.attrs.style),o),t.apply(void 0,[e.tag,$($({},r.attrs),s)].concat(ae(a)))}var Dn=!1;try{Dn=!0}catch{}function Jr(){if(!Dn&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Qe(t){if(t&&Tt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(ne.icon)return ne.icon(t);if(t===null)return null;if(t&&Tt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Wt(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?J({},t,e):{}}var Ft=sn.forwardRef(function(t,e){var n=t.icon,a=t.mask,r=t.symbol,i=t.className,o=t.title,s=t.titleId,f=t.maskId,l=Qe(n),c=Wt("classes",[].concat(ae(Gr(t)),ae(i.split(" ")))),m=Wt("transform",typeof t.transform=="string"?ne.transform(t.transform):t.transform),v=Wt("mask",Qe(a)),g=$r(l,$($($($({},c),m),v),{},{symbol:r,title:o,titleId:s,maskId:f}));if(!g)return Jr("Could not find icon",l),null;var A=g.abstract,_={ref:e};return Object.keys(t).forEach(function(k){Ft.defaultProps.hasOwnProperty(k)||(_[k]=t[k])}),Zr(A[0],_)});Ft.displayName="FontAwesomeIcon";Ft.propTypes={beat:p.exports.bool,border:p.exports.bool,beatFade:p.exports.bool,bounce:p.exports.bool,className:p.exports.string,fade:p.exports.bool,flash:p.exports.bool,mask:p.exports.oneOfType([p.exports.object,p.exports.array,p.exports.string]),maskId:p.exports.string,fixedWidth:p.exports.bool,inverse:p.exports.bool,flip:p.exports.oneOf([!0,!1,"horizontal","vertical","both"]),icon:p.exports.oneOfType([p.exports.object,p.exports.array,p.exports.string]),listItem:p.exports.bool,pull:p.exports.oneOf(["right","left"]),pulse:p.exports.bool,rotation:p.exports.oneOf([0,90,180,270]),shake:p.exports.bool,size:p.exports.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:p.exports.bool,spinPulse:p.exports.bool,spinReverse:p.exports.bool,symbol:p.exports.oneOfType([p.exports.bool,p.exports.string]),title:p.exports.string,titleId:p.exports.string,transform:p.exports.oneOfType([p.exports.string,p.exports.object]),swapOpacity:p.exports.bool};Ft.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Zr=zn.bind(null,sn.createElement);export{Ft as F,sn as R,ei as a,oi as b,ti as c,ri as d,ni as e,fi as f,Yn as g,ai as h,ii as i,si as j,p,Je as r};
