// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function r(t){return"number"==typeof t}function n(t){var e,r="";for(e=0;e<t;e++)r+="0";return r}function i(t,e,r){var i=!1,o=e-t.length;return o<0||(function(t){return"-"===t[0]}(t)&&(i=!0,t=t.substr(1)),t=r?t+n(o):n(o)+t,i&&(t="-"+t)),t}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function s(t){var e,n,s;switch(t.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=t.arg,s=parseInt(n,10),!isFinite(s)){if(!r(n))throw new Error("invalid integer. Value: "+n);s=0}return s<0&&("u"===t.specifier||10!==e)&&(s=4294967295+s+1),s<0?(n=(-s).toString(e),t.precision&&(n=i(n,t.precision,t.padRight)),n="-"+n):(n=s.toString(e),s||t.precision?t.precision&&(n=i(n,t.precision,t.padRight)):n="",t.sign&&(n=t.sign+n)),16===e&&(t.alternate&&(n="0x"+n),n=t.specifier===a.call(t.specifier)?a.call(n):o.call(n)),8===e&&t.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function f(t){return"string"==typeof t}var u=Math.abs,c=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,h=/e\+(\d)$/,g=/e-(\d)$/,y=/^(\d+)$/,d=/^(\d+)e/,_=/\.0$/,b=/\.0*e/,m=/(\..*[^0])0*e/;function w(t){var e,n,i=parseFloat(t.arg);if(!isFinite(i)){if(!r(t.arg))throw new Error("invalid floating-point number. Value: "+n);i=t.arg}switch(t.specifier){case"e":case"E":n=i.toExponential(t.precision);break;case"f":case"F":n=i.toFixed(t.precision);break;case"g":case"G":u(i)<1e-4?((e=t.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(t.precision),t.alternate||(n=p.call(n,m,"$1e"),n=p.call(n,b,"e"),n=p.call(n,_,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return n=p.call(n,h,"e+0$1"),n=p.call(n,g,"e-0$1"),t.alternate&&(n=p.call(n,y,"$1."),n=p.call(n,d,"$1.e")),i>=0&&t.sign&&(n=t.sign+n),n=t.specifier===l.call(t.specifier)?l.call(n):c.call(n)}function v(t){var e,r="";for(e=0;e<t;e++)r+=" ";return r}function O(t,e,r){var n=e-t.length;return n<0?t:t=r?t+v(n):v(n)+t}var A=String.fromCharCode,E=isNaN,j=Array.isArray;function x(t){var e={};return e.specifier=t.specifier,e.precision=void 0===t.precision?1:t.precision,e.width=t.width,e.flags=t.flags||"",e.mapping=t.mapping,e}function I(t){var e,r,n,o,a,u,c,l,p;if(!j(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(u="",c=1,l=0;l<t.length;l++)if(f(n=t[l]))u+=n;else{if(e=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),r=n.flags,p=0;p<r.length;p++)switch(o=r.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=r.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,E(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=s(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):A(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=O(n.arg,n.width,n.padRight)),u+=n.arg||"",c+=1}return u}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function S(t){var e={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(e.precision="1"),e}function T(t){var e,r,n,i;for(r=[],i=0,n=U.exec(t);n;)(e=t.slice(i,U.lastIndex-n[0].length)).length&&r.push(e),r.push(S(n)),i=U.lastIndex,n=U.exec(t);return(e=t.slice(i)).length&&r.push(e),r}function N(t){return"string"==typeof t}function R(t){var e,r,n;if(!N(t))throw new TypeError(R("invalid argument. First argument must be a string. Value: `%s`.",t));for(e=T(t),(r=new Array(arguments.length))[0]=e,n=1;n<r.length;n++)r[n]=arguments[n];return I.apply(null,r)}var B,F=Object.prototype,L=F.toString,V=F.__defineGetter__,C=F.__defineSetter__,k=F.__lookupGetter__,M=F.__lookupSetter__;B=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,r){var n,i,o,a;if("object"!=typeof t||null===t||"[object Array]"===L.call(t))throw new TypeError(R("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof r||null===r||"[object Array]"===L.call(r))throw new TypeError(R("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if((i="value"in r)&&(k.call(t,e)||M.call(t,e)?(n=t.__proto__,t.__proto__=F,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),o="get"in r,a="set"in r,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&V&&V.call(t,e,r.get),a&&C&&C.call(t,e,r.set),t};var P=B;function D(t,e,r){P(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function G(t){return"boolean"==typeof t}var Y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function $(){return Y&&"symbol"==typeof Symbol.toStringTag}var J=Object.prototype.toString,W=Object.prototype.hasOwnProperty;function X(t,e){return null!=t&&W.call(t,e)}var Z="function"==typeof Symbol?Symbol:void 0,z="function"==typeof Z?Z.toStringTag:"",H=$()?function(t){var e,r,n;if(null==t)return J.call(t);r=t[z],e=X(t,z);try{t[z]=void 0}catch(e){return J.call(t)}return n=J.call(t),e?t[z]=r:delete t[z],n}:function(t){return J.call(t)},q=Boolean,K=Boolean.prototype.toString,Q=$();function tt(t){return"object"==typeof t&&(t instanceof q||(Q?function(t){try{return K.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===H(t)))}function et(t){return G(t)||tt(t)}function rt(){return new Function("return this;")()}D(et,"isPrimitive",G),D(et,"isObject",tt);var nt="object"==typeof self?self:null,it="object"==typeof window?window:null,ot="object"==typeof globalThis?globalThis:null;function at(t){if(arguments.length){if(!G(t))throw new TypeError(R("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return rt()}if(ot)return ot;if(nt)return nt;if(it)return it;throw new Error("unexpected error. Unable to resolve global object.")}var st=at();function ft(t,e,r){P(t,e,{configurable:!1,enumerable:!1,get:r})}var ut={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32};function ct(t){return Math.abs(t)}function lt(t,e){return e&&(2===t||3===t)}function pt(t,e){return e&&(1===t||3===t)}function ht(t,e,r){var n,i,o,a,s;for(n=t.length,i=r,o=r,s=0;s<n;s++){if(0===t[s])return[r,r];(a=e[s])>0?o+=a*(t[s]-1):a<0&&(i+=a*(t[s]-1))}return[i,o]}function gt(t){return t.re}function yt(t){return t.im}function dt(t){return"string"==typeof t}D(ht,"assign",(function(t,e,r,n){var i,o,a,s,f;for(i=t.length,o=r,a=r,f=0;f<i;f++){if(0===t[f])return n[0]=r,n[1]=r,n;(s=e[f])>0?a+=s*(t[f]-1):s<0&&(o+=s*(t[f]-1))}return n[0]=o,n[1]=a,n}));var _t=String.prototype.valueOf,bt=$();function mt(t){return"object"==typeof t&&(t instanceof String||(bt?function(t){try{return _t.call(t),!0}catch(t){return!1}}(t):"[object String]"===H(t)))}function wt(t){return dt(t)||mt(t)}D(wt,"isPrimitive",dt),D(wt,"isObject",mt);var vt=/[-\/\\^$*+?.()|[\]{}]/g,Ot=/./,At=at(),Et=At.document&&At.document.childNodes,jt=Int8Array;function xt(){return/^\s*function\s*([^(]*)/i}var It=/^\s*function\s*([^(]*)/i;D(xt,"REGEXP",It);var Ut=Array.isArray?Array.isArray:function(t){return"[object Array]"===H(t)};function St(t){return null!==t&&"object"==typeof t}function Tt(t){var e,r,n,i;if(("Object"===(r=H(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=It.exec(n.toString()))return e[1]}return St(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":r}D(St,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(R("invalid argument. Must provide a function. Value: `%s`.",t));return function(e){var r,n;if(!Ut(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(St));var Nt="function"==typeof Ot||"object"==typeof jt||"function"==typeof Et?function(t){return Tt(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"==(e=typeof t)?Tt(t).toLowerCase():e},Rt=RegExp.prototype.exec,Bt=$();function Ft(t){return"object"==typeof t&&(t instanceof RegExp||(Bt?function(t){try{return Rt.call(t),!0}catch(t){return!1}}(t):"[object RegExp]"===H(t)))}function Lt(t,e,r){if(!dt(t))throw new TypeError(R("invalid argument. First argument must be a string. Value: `%s`.",t));if(dt(e))e=new RegExp(function(t){var e,r;if(!dt(t))throw new TypeError(R("invalid argument. Must provide a regular expression string. Value: `%s`.",t));if("/"===t[0])for(r=t.length-1;r>=0&&"/"!==t[r];r--);return void 0===r||r<=0?t.replace(vt,"\\$&"):(e=(e=t.substring(1,r)).replace(vt,"\\$&"),t=t[0]+e+t.substring(r))}(e),"g");else if(!Ft(e))throw new TypeError(R("invalid argument. Second argument must be a string or regular expression. Value: `%s`.",e));if(!dt(r)&&"function"!==Nt(r))throw new TypeError(R("invalid argument. Third argument must be a string or replacement function. Value: `%s`.",r));return function(t,e,r){return t.replace(e,r)}(t,e,r)}var Vt,Ct={int8:"new Int8Array( [ {{data}} ] )",uint8:"new Uint8Array( [ {{data}} ] )",uint8c:"new Uint8ClampedArray( [ {{data}} ] )",int16:"new Int16Array( [ {{data}} ] )",uint16:"new Uint16Array( [ {{data}} ] )",int32:"new Int32Array( [ {{data}} ] )",uint32:"new Uint32Array( [ {{data}} ] )",float32:"new Float32Array( [ {{data}} ] )",float64:"new Float64Array( [ {{data}} ] )",generic:"[ {{data}} ]",binary:"new Buffer( [ {{data}} ] )",complex64:"new Complex64Array( [ {{data}} ] )",complex128:"new Complex128Array( [ {{data}} ] )"},kt="function"==typeof Uint8Array,Mt="function"==typeof Uint8Array?Uint8Array:null,Pt="function"==typeof Uint8Array?Uint8Array:void 0;Vt=function(){var t,e,r;if("function"!=typeof Mt)return!1;try{e=new Mt(e=[1,3.14,-3.14,256,257]),r=e,t=(kt&&r instanceof Uint8Array||"[object Uint8Array]"===H(r))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}()?Pt:function(){throw new Error("not implemented")};var Dt,Gt=Vt,Yt="function"==typeof Uint16Array,$t="function"==typeof Uint16Array?Uint16Array:null,Jt="function"==typeof Uint16Array?Uint16Array:void 0;Dt=function(){var t,e,r;if("function"!=typeof $t)return!1;try{e=new $t(e=[1,3.14,-3.14,65536,65537]),r=e,t=(Yt&&r instanceof Uint16Array||"[object Uint16Array]"===H(r))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}()?Jt:function(){throw new Error("not implemented")};var Wt,Xt={uint16:Dt,uint8:Gt};(Wt=new Xt.uint16(1))[0]=4660;var Zt,zt=52===new Xt.uint8(Wt.buffer)[0],Ht="function"==typeof ArrayBuffer,qt="function"==typeof Float64Array,Kt="function"==typeof Float64Array?Float64Array:null,Qt="function"==typeof Float64Array?Float64Array:void 0;Zt=function(){var t,e,r;if("function"!=typeof Kt)return!1;try{e=new Kt([1,3.14,-3.14,NaN]),r=e,t=(qt&&r instanceof Float64Array||"[object Float64Array]"===H(r))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){t=!1}return t}()?Qt:function(){throw new Error("not implemented")};var te,ee=Zt,re="function"==typeof ArrayBuffer?ArrayBuffer:null,ne="function"==typeof ArrayBuffer?ArrayBuffer:void 0;te=function(){var t,e,r,n;if("function"!=typeof re)return!1;try{r=new re(16),n=r,(t=(Ht&&n instanceof ArrayBuffer||"[object ArrayBuffer]"===H(n))&&"function"==typeof re.isView)&&((e=new ee(r))[0]=-3.14,e[1]=NaN,t=t&&re.isView(e)&&16===r.byteLength&&-3.14===e[0]&&e[1]!=e[1])}catch(e){t=!1}return t}()?ne:function(){throw new Error("not implemented")};var ie,oe=te,ae="function"==typeof DataView,se="function"==typeof DataView?DataView:null,fe="function"==typeof DataView?DataView:void 0;ie=function(){var t,e,r,n;if("function"!=typeof se)return!1;try{r=new oe(24),e=new se(r,8),n=e,(t=(ae&&n instanceof DataView||"[object DataView]"===H(n))&&"function"==typeof e.getFloat64&&"function"==typeof e.setFloat64)&&(e.setFloat64(0,-3.14),e.setFloat64(8,NaN),t=t&&e.buffer===r&&16===e.byteLength&&8===e.byteOffset&&-3.14===e.getFloat64(0)&&e.getFloat64(8)!=e.getFloat64(8))}catch(e){t=!1}return t}()?fe:function(){throw new Error("not implemented")};var ue=ie,ce="function"==typeof BigInt?BigInt:void 0,le={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function pe(){var t;return 0===arguments.length?le.all.slice():(t=le[arguments[0]])?t.slice():[]}function he(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function ge(t,e,r){P(t,e,{configurable:!1,enumerable:!0,writable:!1,value:r})}function ye(t){return Object.keys(Object(t))}var de,_e=void 0!==Object.keys;function be(t){return"[object Arguments]"===H(t)}de=function(){return be(arguments)}();var me=de;function we(t){return"number"==typeof t}var ve=Number,Oe=ve.prototype.toString,Ae=$();function Ee(t){return"object"==typeof t&&(t instanceof ve||(Ae?function(t){try{return Oe.call(t),!0}catch(t){return!1}}(t):"[object Number]"===H(t)))}function je(t){return we(t)||Ee(t)}function xe(t){return t!=t}function Ie(t){return we(t)&&xe(t)}function Ue(t){return Ee(t)&&xe(t.valueOf())}function Se(t){return Ie(t)||Ue(t)}D(je,"isPrimitive",we),D(je,"isObject",Ee),D(Se,"isPrimitive",Ie),D(Se,"isObject",Ue);var Te=Number.POSITIVE_INFINITY,Ne=ve.NEGATIVE_INFINITY,Re=Math.floor;function Be(t){return Re(t)===t}function Fe(t){return t<Te&&t>Ne&&Be(t)}function Le(t){return we(t)&&Fe(t)}function Ve(t){return Ee(t)&&Fe(t.valueOf())}function Ce(t){return Le(t)||Ve(t)}D(Ce,"isPrimitive",Le),D(Ce,"isObject",Ve);var ke=Object.prototype.propertyIsEnumerable,Me=!ke.call("beep","0");function Pe(t,e){var r;return null!=t&&(!(r=ke.call(t,e))&&Me&&wt(t)?!Ie(e=+e)&&Le(e)&&e>=0&&e<t.length:r)}var De=me?be:function(t){return null!==t&&"object"==typeof t&&!Ut(t)&&"number"==typeof t.length&&Be(t.length)&&t.length>=0&&t.length<=4294967295&&X(t,"callee")&&!Pe(t,"callee")},Ge=Array.prototype.slice,Ye=Pe((function(){}),"prototype"),$e=!Pe({toString:null},"toString");function Je(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&Be(t.length)&&t.length>=0&&t.length<=9007199254740991}function We(t,e,r){var n,i;if(!Je(t)&&!dt(t))throw new TypeError(R("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(n=t.length))return-1;if(3===arguments.length){if(!Le(r))throw new TypeError(R("invalid argument. Third argument must be an integer. Value: `%s`.",r));if(r>=0){if(r>=n)return-1;i=r}else(i=n+r)<0&&(i=0)}else i=0;if(Se(e)){for(;i<n;i++)if(Se(t[i]))return i}else for(;i<n;i++)if(t[i]===e)return i;return-1}function Xe(t){return t.constructor&&t.constructor.prototype===t}var Ze,ze=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],He="undefined"==typeof window?void 0:window,qe=function(){var t;if("undefined"===Nt(He))return!1;for(t in He)try{-1===We(ze,t)&&X(He,t)&&null!==He[t]&&"object"===Nt(He[t])&&Xe(He[t])}catch(t){return!0}return!1}(),Ke="undefined"!=typeof window,Qe=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Ze=_e?function(){return 2!==(ye(arguments)||"").length}(1,2)?function(t){return De(t)?ye(Ge.call(t)):ye(t)}:ye:function(t){var e,r,n,i,o,a,s;if(i=[],De(t)){for(s=0;s<t.length;s++)i.push(s.toString());return i}if("string"==typeof t){if(t.length>0&&!X(t,"0"))for(s=0;s<t.length;s++)i.push(s.toString())}else{if(0==(n="function"==typeof t)&&!St(t))return i;r=Ye&&n}for(o in t)r&&"prototype"===o||!X(t,o)||i.push(String(o));if($e)for(e=function(t){if(!1===Ke&&!qe)return Xe(t);try{return Xe(t)}catch(t){return!1}}(t),s=0;s<Qe.length;s++)a=Qe[s],e&&"constructor"===a||!X(t,a)||i.push(String(a));return i};var tr=Ze;D(pe,"enum",he),function(t,e){var r,n,i;for(r=tr(e),i=0;i<r.length;i++)ge(t,n=r[i],e[n])}(pe,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var er=["row-major","column-major"];function rr(){return{"row-major":1,"column-major":2}}D((function(){return er.slice()}),"enum",rr);var nr=["throw","clamp","wrap"];function ir(){return{throw:1,clamp:2,wrap:3}}D((function(){return nr.slice()}),"enum",ir);var or={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},ar={"row-major":1,"column-major":2},sr={throw:1,clamp:2,wrap:3},fr=new Gt(8),ur=new ue(fr.buffer);function cr(t,e,r,n){var i,o,a;if(0===t){for(a=0;a<fr.length;a++)e[n]=0,n+=r;return e}for(o=(4294967295&t)>>>0,i=Re(t/4294967296),zt?(ur.setUint32(0,o,zt),ur.setUint32(4,i,zt)):(ur.setUint32(0,i,zt),ur.setUint32(4,o,zt)),a=0;a<fr.length;a++)e[n]=fr[a],n+=r;return e}D((function(t){var e,r,n,i;return e=new Gt(8),0===t||(i=(4294967295&t)>>>0,n=Re(t/4294967296),r=new ue(e.buffer),zt?(r.setUint32(0,i,zt),r.setUint32(4,n,zt)):(r.setUint32(0,n,zt),r.setUint32(4,i,zt))),e}),"assign",cr);var lr={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},pr={"row-major":1,"column-major":2},hr={throw:1,clamp:2,wrap:3};function gr(t,e,r,n,i,o){var a,s,f,u,c;if(!(this instanceof gr))return new gr(t,e,r,n,i,o);for(u=1,c=0;c<r.length;c++)u*=r[c];return s=e.BYTES_PER_ELEMENT?e.BYTES_PER_ELEMENT*u:null,this._byteLength=s,this._bytesPerElement=function(t){return ut[t]||null}(t),this._buffer=e,this._dtype=t,this._length=u,this._ndims=r.length,this._offset=i,this._order=o,this._shape=r,this._strides=n,this._accessors=q(e.get&&e.set),this._iterationOrder=function(t){var e,r;for(e=0,r=0;r<t.length;r++)t[r]<0&&(e+=1);return 0===e?1:e===t.length?-1:0}(n),a=function(t,e,r,n,i){var o;return 0!==t&&0!==i&&t===(o=ht(e,r,n))[1]-o[0]+1}(u,r,n,i,this._iterationOrder),f=function(t){var e,r,n,i,o,a;if(0===(r=t.length))return 0;for(e=!0,n=!0,i=ct(t[0]),a=1;a<r;a++){if(o=ct(t[a]),e&&o<i?e=!1:n&&o>i&&(n=!1),!n&&!e)return 0;i=o}return n&&e?3:n?1:2}(n),this._flags={ROW_MAJOR_CONTIGUOUS:pt(f,a),COLUMN_MAJOR_CONTIGUOUS:lt(f,a),READONLY:!1},this.__meta_dataview__=null,this}function yr(t){var e,r,n;for(r=t.length,e=[],n=0;n<r;n++)e.push(t[n]);return e}function dr(t,e){var r,n,i,o,a,s,f,u,c;if((a=e.length)<(s=(i=t.shape).length))throw new Error("invalid argument. Cannot broadcast an array to a shape having fewer dimensions. Arrays can only be broadcasted to shapes having the same or more dimensions.");for(r=[],u=0;u<a;u++)r.push(0);for(o=t.strides,u=a-1;u>=0;u--)if(!((c=s-a+u)<0)){if(f=i[c],0!==(n=e[u])&&n<f)throw new Error(R("invalid argument. Input array cannot be broadcast to the specified shape, as the specified shape has a dimension whose size is less than the size of the corresponding dimension in the input array. Array shape: (%s). Desired shape: (%s). Dimension: %u.",yr(i).join(", "),yr(e).join(", "),u));if(f===n)r[u]=o[c];else{if(1!==f)throw new Error(R("invalid argument. Input array and the specified shape are broadcast incompatible. Array shape: (%s). Desired shape: (%s). Dimension: %u.",yr(i).join(", "),yr(e).join(", "),u));r[u]=0}}return gr(t.dtype,t.data,yr(e),r,t.offset,t.order)}function _r(t,e){var r,n,i;if(n=e.length,(r=t.shape).length===n){for(i=0;i<n;i++)if(r[i]!==e[i])return dr(t,e);return t}return dr(t,e)}function br(t,e){var r=t.shape;return e?yr(r):r}return D(gr,"name","ndarray"),ft(gr.prototype,"byteLength",(function(){return this._byteLength})),ft(gr.prototype,"BYTES_PER_ELEMENT",(function(){return this._bytesPerElement})),ft(gr.prototype,"data",(function(){return this._buffer})),ft(gr.prototype,"dtype",(function(){return this._dtype})),ft(gr.prototype,"flags",(function(){return{ROW_MAJOR_CONTIGUOUS:(t=this._flags).ROW_MAJOR_CONTIGUOUS,COLUMN_MAJOR_CONTIGUOUS:t.COLUMN_MAJOR_CONTIGUOUS,READONLY:t.READONLY};var t})),ft(gr.prototype,"length",(function(){return this._length})),ft(gr.prototype,"ndims",(function(){return this._ndims})),ft(gr.prototype,"offset",(function(){return this._offset})),ft(gr.prototype,"order",(function(){return this._order})),ft(gr.prototype,"shape",(function(){return this._shape.slice()})),ft(gr.prototype,"strides",(function(){return this._strides.slice()})),D(gr.prototype,"get",(function(){var t,e;for(t=this._offset,e=0;e<arguments.length;e++)t+=this._strides[e]*arguments[e];return this._accessors?this._buffer.get(t):this._buffer[t]})),D(gr.prototype,"iget",(function(t){var e,r,n,i,o,a;if(0===(n=this._ndims))return this._accessors?this._buffer.get(this._offset):this._buffer[this._offset];if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.get(this._offset+t):this._buffer[this._offset+t];if(-1===this._iterationOrder)return this._accessors?this._buffer.get(this.offset-t):this._buffer[this._offset-t]}if(r=this._shape,e=this._strides,i=this._offset,"column-major"===this._order){for(a=0;a<n;a++)t-=o=t%r[a],t/=r[a],i+=o*e[a];return this._accessors?this._buffer.get(i):this._buffer[i]}for(a=n-1;a>=0;a--)t-=o=t%r[a],t/=r[a],i+=o*e[a];return this._accessors?this._buffer.get(i):this._buffer[i]})),D(gr.prototype,"set",(function(){var t,e;for(t=this._offset,e=0;e<arguments.length-1;e++)t+=this._strides[e]*arguments[e];return this._accessors?this._buffer.set(arguments[e],t):this._buffer[t]=arguments[e],this})),D(gr.prototype,"iset",(function(t,e){var r,n,i,o,a,s;if(0===(i=this._ndims))return this._accessors?this._buffer.set(t,this._offset):this._buffer[this._offset]=t,this;if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.set(e,this._offset+t):this._buffer[this._offset+t]=e,this;if(-1===this._iterationOrder)return this._accessors?this._buffer.set(e,this._offset-t):this._buffer[this._offset-t]=e,this}if(n=this._shape,r=this._strides,o=this._offset,"column-major"===this._order){for(s=0;s<i;s++)t-=a=t%n[s],t/=n[s],o+=a*r[s];return this._accessors?this._buffer.set(e,o):this._buffer[o]=e,this}for(s=i-1;s>=0;s--)t-=a=t%n[s],t/=n[s],o+=a*r[s];return this._accessors?this._buffer.set(e,o):this._buffer[o]=e,this})),D(gr.prototype,"toString",(function(){var t,e,r,n,i,o;if(e=this._shape.length,r="ndarray( '"+(n=this._dtype)+"', ",t="",this._length<=100)if("complex64"===n||"complex128"===n)for(o=0;o<this._length;o++)t+=gt(i=this.iget(o))+", "+yt(i),o<this._length-1&&(t+=", ");else for(o=0;o<this._length;o++)t+=this.iget(o),o<this._length-1&&(t+=", ");else{if("complex64"===n||"complex128"===n)for(o=0;o<3;o++)t+=gt(i=this.iget(o))+", "+yt(i),o<2&&(t+=", ");else for(o=0;o<3;o++)t+=this.iget(o),o<2&&(t+=", ");if(t+=", ..., ","complex64"===n||"complex128"===n)for(o=2;o>=0;o--)t+=gt(i=this.iget(this._length-1-o))+", "+yt(i),o>0&&(t+=", ");else for(o=2;o>=0;o--)t+=this.iget(this._length-1-o),o>0&&(t+=", ")}if(r+=Lt(Ct[this.dtype],"{{data}}",t),r+=", ",r+=0===e?"[]":"[ "+this._shape.join(", ")+" ]",r+=", ",r+="[ ",0===e)r+="0";else for(o=0;o<e;o++)this._strides[o]<0?r+=-this._strides[o]:r+=this._strides[o],o<e-1&&(r+=", ");return r+=" ]",r+=", ",r+="0",r+=", ",r+="'"+this._order+"'",r+=" )"})),D(gr.prototype,"toJSON",(function(){var t,e,r,n;for(e=this._length,(t={}).type="ndarray",t.dtype=this.dtype,t.flags={READONLY:this._flags.READONLY},t.order=this._order,t.shape=this._shape.slice(),t.strides=this._strides.slice(),n=0;n<e;n++)t.strides[n]<0&&(t.strides[n]*=-1);if(t.data=[],"complex64"===t.dtype||"complex128"===t.dtype)for(n=0;n<e;n++)r=this.iget(n),t.data.push(gt(r),yt(r));else for(n=0;n<e;n++)t.data.push(this.iget(n));return t})),D(gr.prototype,"__array_meta_dataview__","function"==typeof st.BigInt&&"function"==typeof BigInt&&"bigint"==typeof st.BigInt("1")&&"bigint"==typeof BigInt("1")?function(){var t,e,r,n,i,o,a,s,f,u,c,l,p,h;if(f=this._mode||"throw",a=this._submode||[f],r=33+16*(l=this._ndims)+(p=a.length),(s=this.__meta_dataview__)&&s.byteLength===r)return s;for(s=new ue(new oe(r)),i=this._shape,o=this._strides,n=this._dtype,t=this._bytesPerElement,u=0,s.setInt8(u,zt?1:0),u+=1,s.setInt16(u,or[n],zt),u+=2,s.setBigInt64(u,ce(l),zt),c=8*l,u+=8,h=0;h<l;h++)s.setBigInt64(u,ce(i[h]),zt),s.setBigInt64(u+c,ce(o[h]*t),zt),u+=8;for(u+=c,s.setBigInt64(u,ce(this._offset*t),zt),u+=8,s.setInt8(u,ar[this._order]),u+=1,s.setInt8(u,sr[f]),u+=1,s.setBigInt64(u,ce(p),zt),u+=8,h=0;h<p;h++)s.setInt8(u,sr[a[h]]),u+=1;return e=0,e|=this._flags.READONLY?4:0,s.setInt32(u,e,zt),this.__meta_dataview__=s,s}:function(){var t,e,r,n,i,o,a,s,f,u,c,l,p,h,g;if(u=this._mode||"throw",s=this._submode||[u],n=33+16*(p=this._ndims)+(h=s.length),(f=this.__meta_dataview__)&&f.byteLength===n)return f;for(f=new ue(new oe(n)),e=new Gt(f.buffer),o=this._shape,a=this._strides,i=this._dtype,t=this._bytesPerElement,c=0,f.setInt8(c,zt?1:0),c+=1,f.setInt16(c,lr[i],zt),cr(p,e,1,c+=2),l=8*p,c+=8,g=0;g<p;g++)cr(o[g],e,1,c),cr(a[g]*t,e,1,c+l),c+=8;for(c+=l,cr(this._offset*t,e,1,c),c+=8,f.setInt8(c,pr[this._order]),c+=1,f.setInt8(c,hr[u]),cr(h,e,1,c+=1),c+=8,g=0;g<h;g++)f.setInt8(c,hr[s[g]]),c+=1;return r=0,r|=this._flags.READONLY?4:0,f.setInt32(c,r,zt),this.__meta_dataview__=f,f}),function(t){var e,r,n,i,o;for(i=t.length,e=[],o=0;o<i;o++)e.push(br(t[o],!1));if(n=function(t){var e,r,n,i,o,a,s,f,u,c,l;if(r=[],0===(f=t.length))return r;if(u=(i=t[0]).length,1===f){for(c=0;c<u;c++)r.push(i[c]);return r}for(e=[u],c=1;c<f;c++)e.push(t[c].length),e[c]>u&&(u=e[c]);for(c=0;c<u;c++)r.push(0);for(c=u-1;c>=0;){for(n=(o=e[0]-u+c)>=0?i[o]:1,l=1;l<f;l++)if(s=(a=e[l]-u+c)>=0?t[l][a]:1,1!==n){if(1!==s&&n!==s)return null}else n=s;r[c]=n,c-=1}return r}(e),null===n)throw new Error("invalid arguments. Input arrays must be broadcast compatible.");for(r=[],o=0;o<i;o++)r.push(_r(t[o],n));return r}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).maybeBroadcastArrays=e();
//# sourceMappingURL=browser.js.map
