!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1),n(2);window.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("div"),t=window.innerWidth,n=window.innerHeight;e.style.width=t+"px",e.style.height=n+"px",window.onresize=function(){t=window.innerWidth,n=window.innerHeight,e.style.width=t+"px",e.style.height=n+"px"},document.getElementById("upload").addEventListener("change",(function(e){var t=e.target.files;$("#src").attr("src",URL.createObjectURL(t[0])),document.getElementById("audio").load()}),!1);var o=document.getElementsByClassName("effects")[0],r=o.querySelectorAll("audio"),i=o.querySelectorAll("img"),l=Array.from(i).concat(Array.from(i)).concat(Array.from(i));r.forEach((function(t){var n=t.nextElementSibling;n.onclick=function(){t.volume=0,e.appendChild(n),n.style.width=n.style.width+2+"%",n.style.height=n.style.height+2+"%"},n.ondblclick=function(){t.volume=1,o.appendChild(n),n.style.height="7%",n.style.width="3%"},n.ondrag=function(){t.volume=.5}}));var c=document.getElementsByClassName("tracks")[0],a=c.querySelectorAll("audio"),s=new AudioContext;a.forEach((function(e){var t=e.nextElementSibling,n=t.nextElementSibling.firstElementChild;e.onplay=function(){t.style.animation="quick-scroll 15s linear infinite",t.style.fontSize="20px";var n=s.createMediaElementSource(e);n.connect(s.destination);var r=s.createScriptProcessor(1024),a=s.createAnalyser();r.connect(s.destination),a.connect(r);var u=new Uint8Array(a.frequencyBinCount);n.connect(a);var d=document.createElement("aside"),y=document.createElement("img"),f=document.createElement("img"),m=document.createElement("img");y.style.width="7%",y.style.height="7%",f.style.width="7%",f.style.height="7%",m.style.width="7%",m.style.height="7%",d.appendChild(y),d.appendChild(f),d.appendChild(m),o.insertBefore(d,o.childNodes[0]),o.style.height="fit-content",r.onaudioprocess=function(){a.getByteFrequencyData(u),y.src=l[Math.floor(100*Math.random(Array.from(Array(u[0]).keys())))].src,f.src=l[Math.floor(100*Math.random(Array.from(Array(100).keys())))].src,m.src=l[u[0]].src;var e=[y.src,f.src,m.src];i.forEach((function(t){t.onmouseenter=function(){e.includes(t.src)&&(o.removeChild(t),console.log(o.querySelectorAll("img").length))}}))},e.onended=function(){var e=document.createElement("h1");e.style.fontSize="60px",e.style.position="absolute",e.style.left="150%",e.style.top="30%",e.style.whiteSpace="nowrap",e.style.fontFamily="Exo 2, sans-serif",c.appendChild(e),o.querySelectorAll("img").length<=50?(e.innerHTML="You cleared: ".concat(100-o.querySelectorAll("img").length,"...YOU WIN!"),e.style.color="#1ec190",console.log("you win!",o.querySelectorAll("img").length)):(e.innerHTML="You cleared: ".concat(102-o.querySelectorAll("img").length,"...YOU LOSE!"),e.style.color="crimson",console.log("you lose!",o.querySelectorAll("img").length))}},n.onmousedown=function(){t.style.animation="flicker 0.5s infinite alternate"},e.onpause=function(){t.style.animation="none",t.style.fontSize="14px"}}))}))},function(e,t,n){},function(e,t,n){}]);
//# sourceMappingURL=main.js.map