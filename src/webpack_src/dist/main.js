!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){t(1);const r=t(5);window.onload=r.init()},function(n,e,t){var r=t(2),o=t(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);n.exports=o.locals||{}},function(n,e,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function l(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function c(n,e){for(var t={},r=[],o=0;o<n.length;o++){var i=n[o],c=e.base?i[0]+e.base:i[0],u=t[c]||0,s="".concat(c," ").concat(u);t[c]=u+1;var d=l(s),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:s,updater:b(f,e),references:1}),r.push(s)}return r}function u(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var s,d=(s=[],function(n,e){return s[n]=e,s.filter(Boolean).join("\n")});function f(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=d(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function p(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var h=null,v=0;function b(n,e){var t,r,o;if(e.singleton){var i=v++;t=h||(h=u(e)),r=f.bind(null,t,i,!1),o=f.bind(null,t,i,!0)}else t=u(e),r=p.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var t=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=l(t[r]);a[o].references--}for(var i=c(n,e),u=0;u<t.length;u++){var s=l(t[u]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}t=i}}}},function(n,e,t){(e=t(4)(!1)).push([n.i,".unit{\n  display: inline-block;\n}\n.segment{\n  border-style: solid;\n}\n.clearfix{\n  clear: both;\n}\n.horizen>.before{\n  float: left;\n  border-color: transparent lightblue transparent transparent ;\n  border-width: 15px 15px 15px 0;\n  /* 左侧箭头 */\n}\n.horizen>.after{\n  float: left;\n  border-color: transparent transparent transparent lightblue;\n  border-width: 15px 0 15px 15px;\n  /* 右侧箭头 */\n}\n.horizen>.body{\n  float:left;\n  width: 60px;\n  height:30px;\n  background-color: lightblue;\n}\n.vertical>.before{\n  width: 0;\n  border-color: transparent transparent lightblue transparent;\n  border-width: 0 15px 15px 15px;\n  /* 上箭头 */\n}\n.vertical>.body{\n  width: 30px;\n  height:60px;\n  background-color: lightblue;\n}\n.vertical>.after{\n  /* 下箭头 */\n  width: 0;\n  border-color: lightblue transparent transparent transparent;\n  border-width: 15px 15px 0 15px;\n}\n.allUnit, .dotUnit{\n  display: inline-block;\n}\n.left,.right{\n  position: relative;\n  top: 20px;\n  float:left;\n  width: 30px;\n}\n.left>.bottom,.right>.bottom{\n  position: relative;\n  top:5px;\n}\n.center{\n  position: relative;\n  left:-15px;\n  float: left;\n  width: 90px;\n}\n.center>.middle{\n  position: relative;\n  top:65px;\n}\n.center>.bottom{\n  position: relative;\n  top:130px;\n}\n.right{\n  left:-30px;\n}\n.dotUnit{\n  margin-right:15px;\n}\n.dotUnit>.dot{\n  position: relative;\n  width:30px;\n  height:30px;\n  background-color: lightblue;\n}\n.dotUnit>.top{\n  position: relative;\n  top:-80px;\n}\n.dotUnit>.bottom{\n  position: relative;\n  bottom:15px;\n}",""]),n.exports=e},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var o=(a=r,l=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(c," */")),i=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[t].concat(i).concat([o]).join("\n")}var a,l,c;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var l=0;l<n.length;l++){var c=[].concat(n[l]);r&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},function(n,e){var t={createNodes:function(){var n=document.querySelector(".allUnit"),e=document.querySelector(".dotUnit"),t=document.body;t.removeChild(n),t.removeChild(e);for(let r=0;r<6;r++){let o=n.cloneNode(!0);if(t.appendChild(o),r%2==1&&r<5){let n=e.cloneNode(!0);t.appendChild(n)}}},arr:{0:[1,1,1,0,1,1,1],1:[0,0,0,0,0,1,1],2:[0,1,1,1,1,1,0],3:[0,0,1,1,1,1,1],4:[1,0,0,1,0,1,1],5:[1,0,1,1,1,0,1],6:[1,1,1,1,1,0,1],7:[0,0,1,0,0,1,1],8:[1,1,1,1,1,1,1],9:[1,0,1,1,1,1,1]},changeSegment:function(n,e){var t=n.querySelectorAll(".unit");for(let n=0,o=t.length;n<o;n++){var r=e[n]?"visible":"hidden";t[n].style.visibility=r}},createChangeUnitFn:function(){var n={};return(e,t)=>{var r=document.querySelectorAll(".allUnit");for(let o=0,i=r.length;o<i;o++)n[o]!=t[e[o]]&&(this.changeSegment(r[o],t[e[o]]),n[o]=t[e[o]])}},changeDotUnit:function(){var n=document.querySelectorAll(".dotUnit");for(let e=0,t=n.length;e<t;e++){let t=n[e],r=t.style.visibility;t.style.visibility="visible"==r?"hidden":"visible"}},getFormatedTime:function(){var n=new Date,e=n.getHours();e=e>10?e:"0"+e;var t=n.getMinutes();t=t>10?t:"0"+t;var r=n.getSeconds();return`${e}${t}${r=r>10?r:"0"+r}`},init:function(){this.createNodes();var n=this.createChangeUnitFn();setInterval(()=>{this.changeDotUnit(),n(this.getFormatedTime(),this.arr)},500)}};n.exports=t}]);