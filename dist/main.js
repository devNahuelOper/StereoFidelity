!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1),n(2);window.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("div"),t=window.innerWidth,n=window.innerHeight;e.style.width=t+"px",e.style.height=n+"px",window.onresize=function(){t=window.innerWidth,n=window.innerHeight,e.style.width=t+"px",e.style.height=n+"px"};var r=document.getElementsByClassName("track")[0];document.getElementsByClassName("stage")[0].ondrop=function(e){e.preventDefault();var t=e.dataTransfer.getData("text");e.target.appendChild(document.getElementById(t))}(e),document.getElementsByClassName("stage")[0].ondragover=(o=e,void o.preventDefault()),document.getElementsByClassName("track")[0].ondragstart=function(e){e.dataTransfer.setData("text",e.target.id)}(r);var o}))},function(e,t,n){},function(e,t,n){}]);
//# sourceMappingURL=main.js.map