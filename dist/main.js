!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=5)}([function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0),n(1),n(2),n(3),n(4);function o(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||r(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function i(){var e=document.getElementById("myModal"),t=document.getElementsByClassName("modal-wrapper")[0],n=document.getElementById("welcome"),a=e.querySelectorAll("strong"),i=document.getElementsByClassName("close")[0],s=document.getElementById("about");document.addEventListener("keydown",(function(e){"Escape"===e.key&&(myModal.classList.add("modal-hide"),s.classList.add("about-show")),"KeyH"===e.code&&(myModal.classList.remove("modal-hide"),s.classList.remove("about-show"))})),e.onpointerover=function(){var s,c=function(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=r(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){c=!0,i=e},f:function(){try{s||null==n.return||n.return()}finally{if(c)throw i}}}}([e,t,n,i].concat(o(a)));try{for(c.s();!(s=c.n()).done;){s.value.classList.add("modal-freeze")}}catch(e){c.e(e)}finally{c.f()}},e.onpointerout=function(){e.classList.remove("modal-freeze"),t.classList.remove("modal-freeze")},window.onpointerdown=function(t){var n=e.contains(t.target),o=s.contains(t.target);n||o||(e.classList.add("modal-hide"),s.classList.add("about-show"))},i.onclick=function(){s.classList.add("about-show"),e.classList.add("modal-hide")},s.onclick=function(){e.classList.remove("modal-hide"),s.classList.remove("about-show")}}function s(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){s=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw a}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var u=function(){var e,t=["src/assets/images/headphones.jpg","src/assets/images/face.jpg","src/assets/images/waves.jpg","src/assets/images/deadmau5.jpg","src/assets/images/buttons.jpg","src/assets/images/turntable.png","src/assets/images/mixing.jpg"],n=document.getElementById("bgtoggle"),o=document.getElementsByClassName("bgtoggle-container")[0];n.onclick=function(){var e;e=Math.floor(Math.random(t)*t.length),document.body.style.backgroundImage="url('"+t[e]+"')"},n.onpointerover=function(){e||(e=function(){var e=document.createElement("ul");e.className="bg-list";var n,o=s(t);try{var r=function(){var t=n.value,o=document.createElement("li"),r=document.createElement("img");r.src=t,o.append(r),e.append(o),r.onclick=function(){document.body.style.backgroundImage="url('"+t+"')"}};for(o.s();!(n=o.n()).done;)r()}catch(e){o.e(e)}finally{o.f()}return e}(),o.append(e),e.scrollIntoView())},o.onpointerout=function(t){var n=t.relatedTarget,r=o.contains(n);e&&!r&&(e.remove(),e=null)}};var l=function(){var e=document.getElementsByClassName("effects")[0],t=document.querySelector("main");function n(e){var n=[e.clientX,e.clientY],o=n[0],r=n[1];[document.elementFromPoint(o,r),document.elementFromPoint(o-40,r),document.elementFromPoint(o-40,r-40),document.elementFromPoint(o-40,r+40),document.elementFromPoint(o+40,r),document.elementFromPoint(o+40,r-40),document.elementFromPoint(o+40,r+40),document.elementFromPoint(o,r-40),document.elementFromPoint(o,r+40)].find((function(e){return e.classList.contains("draggedImg")}))?t.classList.add("near-dragged"):t.classList.remove("near-dragged")}e.onpointerover=function(e){var t=e.target;"IMG"==t.tagName&&t.previousElementSibling.play()},e.onpointerout=function(e){var t=e.target;"IMG"==t.tagName&&(t.previousElementSibling.currentTime=0)},e.onpointerdown=function(t){var n,o,r=t.target;"IMG"==r.tagName&&(o=(n=r).previousElementSibling,n.onpointerdown=function(e){n.classList.add("draggingImg");var t=e.clientX-n.getBoundingClientRect().left,r=e.clientY-n.getBoundingClientRect().top;function a(e,a){n.style.left=e-t+"px",n.style.top=a-r+"px",o.style=n.style}function i(e){a(e.pageX,e.pageY)}n.style.position="absolute",n.style.zIndex=1e3,n.style.width="3%",o.style=n.style,document.body.append(o,n),a(e.pageX,e.pageY),document.addEventListener("mousemove",i),n.onpointerup=function(){n.classList.remove("draggingImg"),n.classList.add("draggedImg"),document.removeEventListener("mousemove",i),n.onpointerup=null}},n.ondragstart=function(){return!1},n.ondragend=function(){n.onpointerdown=null},n.onpointerover=function(){o.play()},n.oncontextmenu=function(){e.append(o,n),n.classList.remove("draggedImg"),n.style.position="",n.onpointerup=null})},document.addEventListener("pointermove",(function(){var e=!1;document.querySelector(".draggedImg")?(document.addEventListener("pointermove",n),e=!0):e&&(document.removeEventListener("pointermove",n),e=!1)}))};var d=function(){var e=[];document.addEventListener("readystatechange",(function(){var t=Date.now();if(e.push(t),"complete"==document.readyState){var n=e[1]-e[0];console.log("loaded in ".concat(n/1e3," seconds"))}})),window.onunload=function(){document.removeEventListener("DOMContentLoaded",main)}};function m(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}window.addEventListener("DOMContentLoaded",(function(){document.querySelector("main");function e(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=0,r=t;o<r.length;o++){var a=r[o];a.volume=.3}}i(),t=document.getElementById("playlist"),t.hidden=!0,document.addEventListener("keydown",(function(e){"KeyZ"===e.code&&e.altKey&&(t.hidden=!t.hidden)})),u(),l();var t;var n=document.getElementsByClassName("effects")[0],o=n.querySelectorAll("audio"),r=n.querySelectorAll("img"),a=[].concat(m(r),m(r),m(r)),s=document.getElementsByClassName("tracks")[0],c=s.querySelectorAll("audio"),d=window.AudioContext||window.webkitAudioContext;this.ctx=new d,c.forEach((function(t){var i=t.nextElementSibling;t.onplay=function(){e.apply(void 0,m(o)),i.classList.add("playSong"),n.classList.add("playing");var c=new Date,u=ctx.createMediaElementSource(t);u.connect(ctx.destination);var l=ctx.createScriptProcessor(1024),d=ctx.createAnalyser();l.connect(ctx.destination),d.connect(l);var f=new Uint8Array(d.frequencyBinCount);u.connect(d);var g=document.createElement("aside");g.id="gameFrame";var y=document.createElement("img"),p=document.createElement("img"),h=document.createElement("img");[y,p,h].forEach((function(e){e.classList.add("framePic"),g.appendChild(e)})),n.insertAdjacentElement("beforebegin",g),n.style.height="fit-content";var v=document.createElement("h1");v.id="score",n.insertAdjacentElement("beforeend",v),l.onaudioprocess=function(){n.scrollIntoView(),d.getByteFrequencyData(f),y.src=a[Math.floor(100*Math.random(Array.from(Array(f[0]).keys())))].src,p.src=a[Math.floor(100*Math.random(Array.from(Array(100).keys())))].src,h.src=a[f[0]].src;var e=n.querySelectorAll("img").length,o=[y.src,p.src,h.src];r.forEach((function(r){r.classList.add("imageNoMatch"),o.includes(r.src)?(r.classList.remove("imageNoMatch"),r.classList.add("imageMatch")):(r.classList.add("imageNoMatch"),r.classList.remove("imageMatch")),r.onmouseenter=function(){o.includes(r.src)?(n.removeChild(r),e<=60&&(t.playbackRate-=.8)):e<=60&&(t.playbackRate+=.1),v.innerHTML="Sounds Cleared: ".concat(101-e)}}))},t.onended=function(){return function(e,t,n,o,r){e.remove();var a,i=t.querySelectorAll("img").length,s=(new Date-n)/1e3,c=document.createElement("h1");c.className="msg",o.insertAdjacentElement("afterend",c),i<=0?(a=Math.round(r.duration*s*(100-i)),c.innerHTML="The Wheel. Electricity. The Automobile. Flight. The Moonlanding. Computers. The Internet.<br/> \n           And now there's YOU, who brings one more entry onto the list of some of mankind’s greatest acheivements.<br/>\n           YOU...who cleared ALL <strong>".concat(100-i,"</strong> sounds off the board, and <br/>\n           YOU who racked up <strong>").concat(a,"</strong> bonus points in the process."),c.classList.add("msg100")):i<=15?(a=Math.round((r.duration-s)*(100-i)),c.innerHTML="You cleared <strong>".concat(100-i,"</strong> sounds off the board\n           like a true baw$$!!<br/> And as if that weren't enough, \n           you got <strong>").concat(a,"</strong> bonus points for waving your mouse extra maniacally...<br/>Don't let it get to your head now."),c.classList.add("msg85")):i<=30?(a=Math.round(r.duration/s*(100-i)),c.innerHTML="You cleared <strong>".concat(100-i,"</strong> sounds off the board like a maybe soon to be baw$$, not bad.<br/> \n           You got <strong>").concat(a,"</strong> bonus points for efficiency."),c.classList.add("msg70")):i<=50?(a=Math.round(r.duration-s),c.innerHTML="You cleared <strong>".concat(100-i,"</strong> sound like a true average Joe, just enough to get by.<br/> \n           You get <strong>").concat(a,"</strong> bonus points for existing."),c.classList.add("msg50")):i<=75?(a=Math.round(r.duration/s),c.innerHTML="Hmm, you only cleared <strong>".concat(100-i,"</strong> sounds...\n           You umm, got something on your mind?<br/> \n           eh it could be worse, at least you got a little pocket change.<br/>  \n           Here, take these <strong>").concat(a,"</strong> bonus points and go buy yourself a soup or something."),c.classList.add("msg25")):(a=Math.round(s-r.duration-10),c.innerHTML='Whoa whoa whoa...are you a bot? Maybe you saw a mouse and\n           you had to go deal with that during the song? <br/> If not, then it might be time for\n           some serious self-reflection and ask yourself, <br/> "how much longer do I want to be the\n           person who only clears <strong>'.concat(100-i,'</strong> sounds off the board"? <br/>\n           Well here, take these  <strong>').concat(a,"</strong> bonus -- oh wait, no, it looks like you owe me points."),c.classList.add("msg0")),window.onclick=function(){c.hidden=!0}}(g,n,c,s,t)}},t.onpause=function(){i.classList.remove("playSong")}}))})),d()}]);
//# sourceMappingURL=main.js.map