!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=5)}([function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0),n(1),n(2),n(3),n(4);var o=[{filter:"hue-rotate(0deg) drop-shadow(2px 4px 6px currentColor)",transform:"scale3d(1, 1, 1)"},{filter:"hue-rotate(90deg) drop-shadow(2px 4px 7px currentColor) saturate(1)",transform:"scale3d(1.05, 1.05, 1.05)"},{filter:"hue-rotate(180deg) drop-shadow(2px 4px 8px currentColor) saturate(1.5)",transform:"scale3d(1.1, 1.1, 1.1)"},{filter:"hue-rotate(270deg) drop-shadow(2px 4px 7px currentColor) saturate(1)",transform:"scale3d(1.05, 1.05, 1.05)"},{filter:"hue-rotate(360deg) drop-shadow(2px 4px 6px currentColor)",transform:"scale3d(1, 1, 1)"}],r={duration:2e4,iterations:1/0};function a(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var a=0,i=t;a<i.length;a++){var s=i[a];return s.animate(o,r)}}function i(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"forwards",a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1/0;return e.animate([{transform:"perspective(".concat(t-t,"px) translateZ(").concat(n-n,"px)")},{transform:"perspective(".concat(t,"px) translateZ(").concat(n+1,"px)")},{transform:"perspective(".concat(t,"px) translateZ(").concat(n,"px)")},{transform:"perspective(".concat(t,"px) translateZ(").concat(n+1,"px)")},{transform:"perspective(".concat(t-t,"px) translateZ(").concat(n-n,"px)")}],{duration:1e3*o,iterations:a,fill:r})}function s(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function l(){var e=document.getElementById("myModal"),t=document.getElementsByClassName("modal-wrapper")[0],n=document.getElementsByClassName("modal-content")[0],o=(document.getElementsByClassName("instructions")[0],document.getElementById("welcome")),r=e.querySelectorAll("strong"),u=document.getElementsByClassName("close")[0],l=document.getElementById("about");window.setMorph=a,window.setZoom=i;var d=a(e),m=i(t,20,-2),f=i(n,500,25.5,20);document.addEventListener("keydown",(function(e){"Escape"===e.key&&(myModal.classList.add("modal-hide"),l.classList.add("about-show")),"KeyH"===e.code&&(myModal.classList.remove("modal-hide"),n.scrollTo(0,0),l.classList.remove("about-show"))})),e.onpointerover=function(){!function(){for(var e=0,t=[d,m,f];e<t.length;e++){t[e].cancel()}}();var n,a=function(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=c(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){s=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw a}}}}([e,t,o,u].concat(s(r)));try{for(a.s();!(n=a.n()).done;){n.value.classList.add("modal-freeze")}}catch(e){a.e(e)}finally{a.f()}},e.onpointerout=function(){!function(){for(var e=0,t=[d,m,f];e<t.length;e++){t[e].play()}}(),e.classList.remove("modal-freeze"),t.classList.remove("modal-freeze")},window.onpointerdown=function(t){var n=e.contains(t.target),o=l.contains(t.target);n||o||(e.classList.add("modal-hide"),l.classList.add("about-show"))},u.onclick=function(){l.classList.add("about-show"),e.classList.add("modal-hide")},l.onclick=function(){e.classList.remove("modal-hide"),l.classList.remove("about-show"),n.scrollTo(0,0)};var g={title:"<h2 class='freestyle-header'>FREESTYLE MODE</h2>",drag:"<strong>Drag</strong> icons anywhere off the board to isolate your favorite sounds.",rClick:"<strong>Right-Click</strong> dragged icon to send it back to the board.",optZ:"Press <strong>OPTION/ALT + Z</strong> to show secret playlist (these songs will not trigger a game start).",keyboard:"<h2 class='freestyle-header'>OTHER KEYBOARD TRICKS</h2>",shuffle:"Press <strong>R</strong> to Shuffle Effects!",modal:"Press <strong>H</strong> to Show, <strong>ESC</strong> to Hide Instructions"};n.onscroll=function(){!function(){var e=Object.values(g),t=document.createElement("ul");t.classList.add("instructions","freestyle-wrap");for(var o=0,r=e;o<r.length;o++){var a=r[o],i=document.createElement("li");i.className="freestyle",i.innerHTML=a,t.appendChild(i)}n.insertBefore(t,u)}(),n.onscroll=null}}function d(){var e=document.getElementById("playlist");e.hidden=!0,document.addEventListener("keydown",(function(t){"KeyZ"===t.code&&t.altKey&&(e.hidden=!e.hidden)}))}function m(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){s=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw a}}}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var g=function(){var e,t=["src/assets/images/headphones.jpg","src/assets/images/face.jpg","src/assets/images/waves.jpg","src/assets/images/deadmau5.jpg","src/assets/images/buttons.jpg","src/assets/images/turntable.png","src/assets/images/mixing.jpg"],n=document.getElementById("bgtoggle"),o=document.getElementsByClassName("bgtoggle-container")[0];n.onclick=function(){var e;e=Math.floor(Math.random(t)*t.length),document.body.style.backgroundImage="url('"+t[e]+"')"},n.onpointerover=function(){e||(e=function(){var e=document.createElement("ul");e.className="bg-list";var n,o=m(t);try{var r=function(){var t=n.value,o=document.createElement("li"),r=document.createElement("img");r.src=t,o.append(r),e.append(o),r.onclick=function(){document.body.style.backgroundImage="url('"+t+"')"}};for(o.s();!(n=o.n()).done;)r()}catch(e){o.e(e)}finally{o.f()}return e}(),o.append(e),e.scrollIntoView())},o.onpointerout=function(t){var n=t.relatedTarget,r=o.contains(n);e&&!r&&(e.remove(),e=null)}};function p(){var e=document.getElementsByClassName("effects")[0],t=document.querySelector("main");function n(e){var n=[e.clientX,e.clientY],o=n[0],r=n[1];[document.elementFromPoint(o,r),document.elementFromPoint(o-40,r),document.elementFromPoint(o-40,r-40),document.elementFromPoint(o-40,r+40),document.elementFromPoint(o+40,r),document.elementFromPoint(o+40,r-40),document.elementFromPoint(o+40,r+40),document.elementFromPoint(o,r-40),document.elementFromPoint(o,r+40)].find((function(e){return e.classList.contains("draggedImg")}))?t.classList.add("near-dragged"):t.classList.remove("near-dragged")}e.onpointerover=function(e){var t=e.target;"IMG"==t.tagName&&t.previousElementSibling.play()},e.onpointerout=function(e){var t=e.target;"IMG"==t.tagName&&(t.previousElementSibling.currentTime=0)},e.onpointerdown=function(t){var n,o,r=t.target;"IMG"==r.tagName&&(o=(n=r).previousElementSibling,n.onpointerdown=function(e){n.classList.add("draggingImg");var t=e.clientX-n.getBoundingClientRect().left,r=e.clientY-n.getBoundingClientRect().top;function a(e,a){n.style.left=e-t+"px",n.style.top=a-r+"px",o.style=n.style}function i(e){a(e.pageX,e.pageY)}n.style.position="absolute",n.style.zIndex=1e3,n.style.width="3%",o.style=n.style,document.body.append(o,n),a(e.pageX,e.pageY),document.addEventListener("mousemove",i),n.onpointerup=function(){n.classList.remove("draggingImg"),n.classList.add("draggedImg"),document.removeEventListener("mousemove",i),n.onpointerup=null}},n.ondragstart=function(){return!1},n.ondragend=function(){n.onpointerdown=null},n.onpointerover=function(){o.play()},n.oncontextmenu=function(){e.append(o,n),n.classList.remove("draggedImg"),n.style.position="",n.onpointerup=null})},document.addEventListener("pointermove",(function(){var e=!1;document.querySelector(".draggedImg")?(document.addEventListener("pointermove",n),e=!0):e&&(document.removeEventListener("pointermove",n),e=!1)}))}function y(){function e(e,t){var n=[];if(e.length===t.length){for(var o=0;o<e.length;o++)n.push([e[o],t[o]]);return n}}function t(){for(var t=effects.querySelectorAll("audio"),n=effects.querySelectorAll("img"),o=e(t,n),r=function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),o=e[t];e[t]=e[n],e[n]=o}return e}(e(t,n)),a=0;a<o.length;a++){var s=[o[a][0],o[a][1]],c=s[0],u=s[1],l=[r[a][0],r[a][1]],d=l[0],m=l[1];c.replaceWith(d.cloneNode()),u.replaceWith(m.cloneNode())}for(var f=function(e){var t=effects.querySelectorAll("img")[e];setTimeout((function(){return i(t,500,100,1,"forwards",1)}),20*e)},g=0;g<n.length;g++)f(g)}!function(){for(var e=effects.querySelectorAll("img"),t=function(t){setTimeout((function(){return i(e[t],500,-200,1,"backwards",1)}),10*(e.length-t))},n=e.length-1;n>=0;n--)t(n)}(),setTimeout((function(){return t()}),1500)}function h(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function b(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=0,r=t;o<r.length;o++){var a=r[o];a.volume=.3}}function w(e,t,n,o,r,a){!0,b.apply(void 0,h(t)),n.classList.add("playing");var i=o.createMediaElementSource(e);i.connect(o.destination);var s=o.createScriptProcessor(1024),c=o.createAnalyser();s.connect(o.destination),c.connect(s);var u=new Uint8Array(c.frequencyBinCount);i.connect(c);var l=document.createElement("aside");l.id="gameFrame";var d=document.createElement("img"),m=document.createElement("img"),f=document.createElement("img");[d,m,f].forEach((function(e){e.classList.add("framePic"),l.appendChild(e)})),n.insertAdjacentElement("beforebegin",l),n.style.height="fit-content";var g=document.createElement("h1");g.id="score",n.insertAdjacentElement("beforeend",g),s.addEventListener("audioprocess",(function t(){n.scrollIntoView(),c.getByteFrequencyData(u);var o=n.querySelectorAll("img");try{d.src=a[Math.floor(Math.random()*u[0])].src,m.src=o[Math.round(100*Math.random())].src,f.src=a[u[0]].src;var i=o.length,l=[d.src,m.src,f.src];r.forEach((function(t){t.classList.add("imageNoMatch"),l.includes(t.src)?(t.classList.remove("imageNoMatch"),t.classList.add("imageMatch")):(t.classList.add("imageNoMatch"),t.classList.remove("imageMatch")),t.onmouseenter=function(){l.includes(t.src)?(t.previousElementSibling.remove(),t.remove(),i<=60&&(e.playbackRate-=.8)):i<=60&&(e.playbackRate+=.1),g.innerHTML="Sounds Cleared: ".concat(101-i)}}))}catch(e){return}e.addEventListener("ended",(function(){s.removeEventListener("audioprocess",t),setTimeout((function(){return g.remove()}),3e3)}))}))}function E(e,t,n,o){!1,document.getElementById("gameFrame").remove();var r,a=e.querySelectorAll("img").length,i=(new Date-t)/1e3,s=document.createElement("h1");s.className="msg",n.insertAdjacentElement("afterend",s),a<=0?(r=Math.round(o.duration*i*(100-a)),s.innerHTML="The Wheel. Electricity. The Automobile. Flight. The Moonlanding. Computers. The Internet.<br/> \n           And now there's YOU, who brings one more entry onto the list of some of mankind’s greatest acheivements.<br/>\n           YOU...who cleared ALL <strong>".concat(100-a,"</strong> sounds off the board, and <br/>\n           YOU who racked up <strong>").concat(r,"</strong> bonus points in the process."),s.classList.add("msg100")):a<=15?(r=Math.round((o.duration-i)*(100-a)),s.innerHTML="You cleared <strong>".concat(100-a,"</strong> sounds off the board\n           like a true baw$$!!<br/> And as if that weren't enough, \n           you got <strong>").concat(r,"</strong> bonus points for waving your mouse extra maniacally...<br/>Don't let it get to your head now."),s.classList.add("msg85")):a<=30?(r=Math.round(o.duration/i*(100-a)),s.innerHTML="You cleared <strong>".concat(100-a,"</strong> sounds off the board like a maybe soon to be baw$$, not bad.<br/> \n           You got <strong>").concat(r,"</strong> bonus points for efficiency."),s.classList.add("msg70")):a<=50?(r=Math.round(o.duration-i),s.innerHTML="You cleared <strong>".concat(100-a,"</strong> sound like a true average Joe, just enough to get by.<br/> \n           You get <strong>").concat(r,"</strong> bonus points for existing."),s.classList.add("msg50")):a<=75?(r=Math.round(o.duration/i),s.innerHTML="Hmm, you only cleared <strong>".concat(100-a,"</strong> sounds...\n           You umm, got something on your mind?<br/> \n           eh it could be worse, at least you got a little pocket change.<br/>  \n           Here, take these <strong>").concat(r,"</strong> bonus points and go buy yourself a soup or something."),s.classList.add("msg25")):(r=Math.round(i-o.duration-10),s.innerHTML='Whoa whoa whoa...are you a bot? Maybe you saw a mouse and\n           you had to go deal with that during the song? <br/> If not, then it might be time for\n           some serious self-reflection and ask yourself, <br/> "how much longer do I want to be the\n           person who only clears <strong>'.concat(100-a,'</strong> sounds off the board"? <br/>\n           Well here, take these  <strong>').concat(r,"</strong> bonus -- oh wait, no, it looks like you owe me points."),s.classList.add("msg0")),window.onclick=function(){s.hidden=!0}}var L=function(){var e=[];document.addEventListener("readystatechange",(function(){var t=Date.now();if(e.push(t),"complete"==document.readyState){var n=e[1]-e[0];console.log("loaded in ".concat(n/1e3," seconds"))}})),window.onunload=function(){document.removeEventListener("DOMContentLoaded",main)}};function S(e){return function(e){if(Array.isArray(e))return A(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return A(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function M(e,t,n,o,r,a,i){try{var s=e[a](i),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(o,r)}function x(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var a=e.apply(t,n);function i(e){M(a,o,r,i,s,"next",e)}function s(e){M(a,o,r,i,s,"throw",e)}i(void 0)}))}}function I(){return(I=x(regeneratorRuntime.mark((function e(){var t,n,o,r,a,i,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l(),d(),g(),p(),t=document.getElementsByClassName("effects")[0],n=t.querySelectorAll("audio"),o=t.querySelectorAll("img"),document.addEventListener("keydown",(function(e){"KeyR"===e.code&&(y(),n=t.querySelectorAll("audio"),o=t.querySelectorAll("img"))})),r=[].concat(S(o),S(o),S(o)),a=document.getElementsByClassName("tracks")[0],i=a.querySelectorAll("audio"),s=window.AudioContext||window.webkitAudioContext,this.ctx=new s,i.forEach((function(e){var i=e.nextElementSibling;e.onplay=function(){i.classList.add("playSong");var s=new Date;w(e,n,t,ctx,o,r),e.onended=function(){return E(t,s,a,e)}},e.onpause=function(){return i.classList.remove("playSong")}})),window.addEventListener("unhandledrejection",(function(e){e.preventDefault()}));case 15:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}window.addEventListener("DOMContentLoaded",(function(){return I.apply(this,arguments)})),L()}]);
//# sourceMappingURL=main.js.map