!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1),n(2);window.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("div"),t=window.innerWidth,n=window.innerHeight;e.style.width=t+"px",e.style.height=n+"px",window.onresize=function(){t=window.innerWidth,n=window.innerHeight,e.style.width=t+"px",e.style.height=n+"px"},document.getElementById("upload").addEventListener("change",(function(e){var t=e.target.files;$("#src").attr("src",URL.createObjectURL(t[0])),document.getElementById("audio").load()}),!1),document.getElementsByClassName("effects")[0].querySelectorAll("audio").forEach((function(e){console.log(e.nextElementSibling);var t=e.nextElementSibling;t.onclick=function(){e.volume=0},t.ondblclick=function(){e.volume=1}}))}))},function(e,t,n){},function(e,t,n){}]);
//# sourceMappingURL=main.js.map