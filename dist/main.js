!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=7)}([function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0),n(1),n(2),n(3),n(4),n(5),n(6);var r=[{filter:"hue-rotate(0deg) drop-shadow(2px 4px 6px currentColor)",transform:"scale3d(1, 1, 1)"},{filter:"hue-rotate(90deg) drop-shadow(2px 4px 7px currentColor) saturate(1)",transform:"scale3d(1.05, 1.05, 1.05)"},{filter:"hue-rotate(180deg) drop-shadow(2px 4px 8px currentColor) saturate(1.5)",transform:"scale3d(1.1, 1.1, 1.1)"},{filter:"hue-rotate(270deg) drop-shadow(2px 4px 7px currentColor) saturate(1)",transform:"scale3d(1.05, 1.05, 1.05)"},{filter:"hue-rotate(360deg) drop-shadow(2px 4px 6px currentColor)",transform:"scale3d(1, 1, 1)"}],o={duration:2e4,iterations:1/0};function a(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var a=0,i=t;a<i.length;a++){var c=i[a];return c.animate(r,o)}}function i(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"forwards",a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1/0;return e.animate([{transform:"perspective(".concat(t-t,"px) translateZ(").concat(n-n,"px)")},{transform:"perspective(".concat(t,"px) translateZ(").concat(n+1,"px)")},{transform:"perspective(".concat(t,"px) translateZ(").concat(n,"px)")},{transform:"perspective(".concat(t,"px) translateZ(").concat(n+1,"px)")},{transform:"perspective(".concat(t-t,"px) translateZ(").concat(n-n,"px)")}],{duration:1e3*r,iterations:a,fill:o})}var c=[{transform:"scale(1) translate(0px)"},{transform:"perspective(500px) scale3d(0.06, 0.06, 0.2) translate3d(7200px, -3350px, 700px)"}],s=[{transform:"scale(1) translate(0px)"},{transform:"perspective(500px) scale3d(0.2, 0.2, 1) translate3d(820px, -960px, -80px)"}],u={duration:1e3,iterations:1,easing:"ease-in-out",fill:"both"};function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1/0,n=[{paddingLeft:"5%"},{paddingLeft:"".concat(Math.round(180/e.textContent.length),"%")},{paddingLeft:"5%"}],r={duration:2e4,iterations:t};return e.animate(n,r)}function d(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=f(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw a}}}}function m(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||f(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){if(e){if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function g(){var e=document.getElementById("myModal"),t=document.getElementsByClassName("modal-wrapper")[0],n=document.getElementsByClassName("modal-content")[0],r=document.getElementById("welcome"),o=e.querySelectorAll("strong"),l=document.getElementsByClassName("close")[0],f=document.getElementById("about"),p=document.getElementById("frameAppear"),g=document.getElementById("matchAppear");window.setMorph=a,window.setZoom=i;var v=a(e),y=i(t,20,-2),h=i(n,500,25.5,20);var b=window.innerWidth>450?c:s;window.onresize=function(){b=window.innerWidth>450?c:s};var w=function(){e.classList.remove("modal-hide"),f.classList.remove("about-show");e.animate(b,u).reverse();n.scrollTo(0,0)},E=function(){e.animate(b,u).onfinish=function(){e.classList.add("modal-hide"),f.classList.add("about-show")}};document.addEventListener("keydown",(function(e){"Escape"===e.key&&E(),"KeyH"===e.code&&w()})),e.onpointerover=function(){!function(){for(var e=0,t=[v,y,h];e<t.length;e++){t[e].cancel()}}();var n,a=d([e,t,r,l].concat(m(o)));try{for(a.s();!(n=a.n()).done;){n.value.classList.add("modal-freeze")}}catch(e){a.e(e)}finally{a.f()}},e.onpointerout=function(){p.paused&&g.paused&&(!function(){for(var e=0,t=[v,y,h];e<t.length;e++){t[e].play()}}(),e.classList.remove("modal-freeze"),t.classList.remove("modal-freeze"))},window.onpointerdown=function(t){var n=e.contains(t.target),r=f.contains(t.target);n||r||E()},l.onclick=function(){E()},f.onclick=function(){w()};var L={title:"<h2 class='freestyle-header'>FREESTYLE MODE</h2>",drag:"<strong>Drag</strong> icons anywhere off the board to isolate your favorite sounds.",rClick:"<strong>Right-Click</strong> dragged icon to send it back to the board.",optZ:"Press <strong>OPTION/ALT + Z</strong> to show secret playlist (these songs will not trigger a game start).",keyboard:"<h2 class='freestyle-header'>OTHER KEYBOARD TRICKS</h2>",shuffle:"Press <strong>R</strong> to Shuffle Effects!",modal:"Press <strong>H</strong> to Show, <strong>ESC</strong> to Hide Instructions",piano:"Press <strong>P</strong> for a 🎹 PIANO 🎹...<strong>Q</strong> to hide it and <strong>T</strong> to move it."};n.onscroll=function(){!function(){var e=Object.values(L),t=document.createElement("ul");t.classList.add("instructions","freestyle-wrap");for(var r=0,o=e;r<o.length;r++){var a=o[r],i=document.createElement("li");i.className="freestyle",i.innerHTML=a,t.appendChild(i)}n.insertBefore(t,l)}(),n.onscroll=null},p.ontimeupdate=function(){p.currentTime>3&&p.currentTime<5?p.classList.add("frame-zoom"):p.classList.remove("frame-zoom")};var S,A=d(document.getElementsByClassName("frame-still"));try{var x=function(){var n=S.value;n.onplay=function(){return n.classList.add("frame-view"),e.classList.add("modal-freeze"),void t.classList.add("modal-freeze")},n.onended=function(){n.classList.remove("frame-view")}};for(A.s();!(S=A.n()).done;)x()}catch(e){A.e(e)}finally{A.f()}}function v(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw a}}}}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var h=function(){var e,t=["src/assets/images/headphones.jpg","src/assets/images/face.jpg","src/assets/images/waves.jpg","src/assets/images/deadmau5.jpg","src/assets/images/buttons.jpg","src/assets/images/turntable.png","src/assets/images/mixing.jpg"],n=document.getElementById("bgtoggle"),r=document.getElementsByClassName("bgtoggle-container")[0];n.onclick=function(){var e;e=Math.floor(Math.random(t)*t.length),document.body.style.backgroundImage="url('"+t[e]+"')"},n.onpointerover=function(){e||(e=function(){var e=document.createElement("ul");e.className="bg-list";var n,r=v(t);try{var o=function(){var t=n.value,r=document.createElement("li"),o=document.createElement("img");o.src=t,r.append(o),e.append(r),o.onclick=function(){document.body.style.backgroundImage="url('"+t+"')"}};for(r.s();!(n=r.n()).done;)o()}catch(e){r.e(e)}finally{r.f()}return e}(),r.append(e),e.scrollIntoView())},r.onpointerout=function(t){var n=t.relatedTarget,o=r.contains(n);e&&!o&&(e.remove(),e=null)}};function b(){var e=document.getElementsByClassName("effects")[0],t=document.querySelector("main"),n=document.getElementById("myModal");function r(e){var n=[e.clientX,e.clientY],r=n[0],o=n[1];[document.elementFromPoint(r,o),document.elementFromPoint(r-40,o),document.elementFromPoint(r-40,o-40),document.elementFromPoint(r-40,o+40),document.elementFromPoint(r+40,o),document.elementFromPoint(r+40,o-40),document.elementFromPoint(r+40,o+40),document.elementFromPoint(r,o-40),document.elementFromPoint(r,o+40)].find((function(e){return e.classList.contains("draggedImg")}))?t.classList.add("near-dragged"):t.classList.remove("near-dragged")}e.onpointerover=function(e){var t=e.target;"IMG"==t.tagName&&n.classList.contains("modal-hide")&&t.previousElementSibling.play()},e.onpointerout=function(e){var t=e.target;"IMG"==t.tagName&&(t.previousElementSibling.currentTime=0)},e.onpointerdown=function(t){var n,r,o=t.target;"IMG"==o.tagName&&(r=(n=o).previousElementSibling,n.onpointerdown=function(e){n.classList.add("draggingImg");var t=e.clientX-n.getBoundingClientRect().left,o=e.clientY-n.getBoundingClientRect().top;function a(e,a){n.style.left=e-t+"px",n.style.top=a-o+"px",r.style=n.style}function i(e){a(e.pageX,e.pageY)}n.style.position="absolute",n.style.zIndex=1e3,n.style.width="3%",r.style=n.style,document.body.append(r,n),a(e.pageX,e.pageY),document.addEventListener("mousemove",i),n.onpointerup=function(){n.classList.remove("draggingImg"),n.classList.add("draggedImg"),document.removeEventListener("mousemove",i),n.onpointerup=null}},n.ondragstart=function(){return!1},n.ondragend=function(){return n.onpointerdown=null},n.onpointerover=function(){return r.play()},n.onpointerout=function(){return r.currentTime=0},n.oncontextmenu=function(){e.append(r,n),n.classList.remove("draggedImg"),n.style.position="",n.onpointerup=null})},document.addEventListener("pointermove",(function(){var e=!1;document.querySelector(".draggedImg")?(document.addEventListener("pointermove",r),e=!0):e&&(document.removeEventListener("pointermove",r),e=!1)}))}function w(){function e(e,t){var n=[];if(e.length===t.length){for(var r=0;r<e.length;r++)n.push([e[r],t[r]]);return n}}function t(){for(var t=effects.querySelectorAll("audio"),n=effects.querySelectorAll("img"),r=e(t,n),o=function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=e[t];e[t]=e[n],e[n]=r}return e}(e(t,n)),a=0;a<r.length;a++){var c=[r[a][0],r[a][1]],s=c[0],u=c[1],l=[o[a][0],o[a][1]],d=l[0],m=l[1];s.replaceWith(d.cloneNode()),u.replaceWith(m.cloneNode())}for(var f=function(e){var t=effects.querySelectorAll("img")[e];setTimeout((function(){return i(t,500,100,1,"forwards",1)}),20*e)},p=0;p<n.length;p++)f(p)}!function(){for(var e=effects.querySelectorAll("img"),t=function(t){setTimeout((function(){return i(e[t],500,-200,1,"backwards",1)}),10*(e.length-t))},n=e.length-1;n>=0;n--)t(n)}(),setTimeout((function(){return t()}),1500)}function E(e,t,n,r){try{t.clearRect(0,0,e.width,e.height),function(e,t,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:Math.random().toFixed(1);t.beginPath();for(var a=1*e.width/n.length,i=0,c=0;c<n.length;c++){var s=n[c]/86,u=200*s/2;0===c?t.moveTo(i,u):t.lineTo(i,u),i+=a}t.strokeStyle="hsla(".concat(r,", 100%, 40%, ").concat(o,")"),t.lineTo(e.width,e.height/2),t.lineWidth=2,t.stroke()}(e,t,n,r),r+=1,requestAnimationFrame(E)}catch(e){return!0}}function L(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw a}}}}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var A=function(e,t){for(var n in t)e.setAttribute(n,t[n])};window.setAttributes=A;var x="https://cors-anywhere.herokuapp.com/";window.proxyUrl=x;window.churchReverb="https://www.dropbox.com/home/IMreverbs?preview=St+Nicolaes+Church.wav";var T=function(e){var t=Math.trunc((e.duration-e.currentTime)/60),n=t>=1?Math.trunc((e.duration-e.currentTime)/60%t*60):Math.trunc(e.duration-e.currentTime);return n=n<10?"0".concat(n):n,"".concat(t,":").concat(n)},M=function(e,t){var n=document.createElement("time");n.innerHTML=T(e),t.append(n),t.classList.add("songPlaying"),e.ontimeupdate=function(){n.innerHTML=T(e)},e.addEventListener("pause",(function(){n.remove(),t.classList.remove("songPlaying")})),e.addEventListener("ended",(function(){n.remove(),t.classList.remove("songPlaying")}))};function k(e){var t=document.createElement("label");return t.htmlFor=t.id=e.name,t.innerHTML=e.name+"</br>",t.append(e),t}function I(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=new Set;document.addEventListener("keydown",(function(t){o.add(t.code);var r,a=L(n);try{for(a.s();!(r=a.n()).done;){var i=r.value;if(!o.has(i))return}}catch(e){a.e(e)}finally{a.f()}o.clear(),e()})),document.addEventListener("keyup",(function(e){o.delete(e.code)}))}function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||O(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e){return function(e){if(Array.isArray(e))return B(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||O(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){if(e){if("string"==typeof e)return B(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?B(e,t):void 0}}function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function P(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r=0,o=t;r<o.length;r++){var a=o[r];a.volume=.3}}function N(e,t,n,r,o,a){P.apply(void 0,j(t)),n.classList.add("playing");var i=document.createElement("img"),c=document.createElement("img"),s=document.createElement("img");!function(e){var t=document.createElement("aside");t.id="gameFrame";for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];for(var a=0,i=r;a<i.length;a++){var c=i[a];c.classList.add("framePic"),t.appendChild(c)}e.insertAdjacentElement("beforebegin",t)}(n,i,c,s);var u,l=function(e){var t=document.createElement("h1");return t.id="score",e.insertAdjacentElement("beforeend",t),t}(n),d=function(e,t){var n=document.createElement("canvas");return n.id="canvas",n.classList.add("canvas"),n.width=window.innerWidth/2.5,n.height=window.innerHeight/3,e.insertAdjacentElement(t,n),n}(n,"beforebegin"),m=d.getContext("2d"),f=r.createMediaElementSource(e);f.connect(r.destination);var p=r.createScriptProcessor(1024),g=r.createAnalyser();p.connect(r.destination),g.connect(p),g.smoothingTimeConstant=.1,g.fftSize=512,f.connect(g),p.addEventListener("audioprocess",(function t(){v||(n.scrollIntoView(),v=!0);r=1,f=360,u=Math.floor(Math.random()*(f-r)+r),Math.random().toFixed(1);var r,f;var y=new Uint8Array(g.frequencyBinCount);g.getByteFrequencyData(y),E(d,m,y,u);var h=n.querySelectorAll("img");try{i.src=a[Math.floor(Math.random()*y[0])].src,c.src=h[Math.round(100*Math.random())].src,s.src=a[y[0]].src;var b=h.length,w=[i.src,c.src,s.src];o.forEach((function(t){t.classList.add("imageNoMatch"),w.includes(t.src)?(t.classList.remove("imageNoMatch"),t.classList.add("imageMatch")):(t.classList.add("imageNoMatch"),t.classList.remove("imageMatch")),t.onmouseenter=function(){w.includes(t.src)?(t.previousElementSibling.remove(),t.remove(),b<=60&&e.playbackRate>=.1&&(e.playbackRate-=.8)):b<=60&&e.playbackRate<=16&&(e.playbackRate+=.1),l.innerHTML="Sounds Cleared: ".concat(101-b)}}))}catch(e){return}e.addEventListener("ended",(function(){p.removeEventListener("audioprocess",t),setTimeout((function(){return l.remove()}),3e3)}))}));var v=!1}function H(e,t,n,r){document.getElementById("gameFrame").remove(),document.getElementById("canvas").remove();var o,a=e.querySelectorAll("img").length,i=(new Date-t)/1e3,c=document.createElement("h1");c.className="msg",n.insertAdjacentElement("afterend",c),a<=0?(o=Math.round(r.duration*i*(100-a)),c.innerHTML="The Wheel. Electricity. The Automobile. Flight. The Moonlanding. Computers. The Internet.<br/> \n           And now there's YOU, who brings one more entry onto the list of some of mankind’s greatest acheivements.<br/>\n           YOU...who cleared ALL <strong>".concat(100-a,"</strong> sounds off the board, and <br/>\n           YOU who racked up <strong>").concat(o,"</strong> bonus points in the process."),c.classList.add("msg100")):a<=15?(o=Math.round((r.duration-i)*(100-a)),c.innerHTML="You cleared <strong>".concat(100-a,"</strong> sounds off the board\n           like a true baw$$!!<br/> And as if that weren't enough, \n           you got <strong>").concat(o,"</strong> bonus points for waving your mouse extra maniacally...<br/>Don't let it get to your head now."),c.classList.add("msg85")):a<=30?(o=Math.round(r.duration/i*(100-a)),c.innerHTML="You cleared <strong>".concat(100-a,"</strong> sounds off the board like a maybe soon to be baw$$, not bad.<br/> \n           You got <strong>").concat(o,"</strong> bonus points for efficiency."),c.classList.add("msg70")):a<=50?(o=Math.round(r.duration-i),c.innerHTML="You cleared <strong>".concat(100-a,"</strong> sound like a true average Joe, just enough to get by.<br/> \n           You get <strong>").concat(o,"</strong> bonus points for existing."),c.classList.add("msg50")):a<=75?(o=Math.round(r.duration/i),c.innerHTML="Hmm, you only cleared <strong>".concat(100-a,"</strong> sounds...\n           You umm, got something on your mind?<br/> \n           eh it could be worse, at least you got a little pocket change.<br/>  \n           Here, take these <strong>").concat(o,"</strong> bonus points and go buy yourself a soup or something."),c.classList.add("msg25")):(o=Math.round(i-r.duration-10),c.innerHTML='Whoa whoa whoa...are you a bot? Maybe you saw a mouse and\n           you had to go deal with that during the song? <br/> If not, then it might be time for\n           some serious self-reflection and ask yourself, <br/> "how much longer do I want to be the\n           person who only clears <strong>'.concat(100-a,'</strong> sounds off the board"? <br/>\n           Well here, take these  <strong>').concat(o,"</strong> bonus -- oh wait, no, it looks like you owe me points."),c.classList.add("msg0")),setTimeout((function(){return function(e){localStorage.scores||(localStorage.scores='{"":0," ":0,"  ":0}');for(var t=JSON.parse(localStorage.scores),n=Object.entries(t),r=0,o=0,a=n;o<a.length;o++){var i=C(a[o],2),c=(i[0],i[1]);if(e>c){var s=prompt("Enter your name: ");s=q(s,t),n.splice(r,0,[s,e]),n.length>3&&n.pop(),t=Object.fromEntries(n),localStorage.scores=JSON.stringify(t);break}r++}return F(),localStorage.scores}(o)}),2e3),window.addEventListener("click",(function(){c.hidden=!0}))}function q(e,t){return e in t&&(e=q(e+0,t)),e}window.addLabel=k,window.compress=function(e,t){var n=e.createDynamicsCompressor();n.threshold.setValueAtTime(-50,e.currentTime),n.knee.setValueAtTime(40,e.currentTime),n.ratio.setValueAtTime(12,e.currentTime),n.attack.setValueAtTime(0,e.currentTime),n.release.setValueAtTime(.25,e.currentTime),n.connect(e.destination),t.connect(n)},window.runOnKeys=I;var R=Boolean(document.getElementsByClassName("highScores")[0]);function F(){if(!R){var e=JSON.parse(localStorage.scores),t=document.createElement("ul");t.className="highScores",t.innerHTML='<h1 id="scoreHeader">High Scores</h1>';var n=document.createElement("pre");n.innerHTML="x",t.prepend(n),n.onclick=function(){return t.classList.add("hs-minimized"),void t.addEventListener("click",(function(e){e.target.contains(n)||t.classList.remove("hs-minimized")}))};for(var r=0,o=Object.entries(e);r<o.length;r++){var a=C(o[r],2),i=a[0],c=a[1];if(i.trim()){var s=document.createElement("li");s.innerHTML="<b>".concat(i.replace(/0/g,"")," </b>  ").concat(c),t.append(s)}}document.body.append(t)}}window.showHighScores=F;var D=function(){var e=[];document.addEventListener("readystatechange",(function(){var t=Date.now();if(e.push(t),"complete"==document.readyState){var n=e[1]-e[0];console.log("loaded in ".concat(n/1e3," seconds"))}})),window.onunload=function(){document.removeEventListener("DOMContentLoaded",main)}};function z(e){return function(e){if(Array.isArray(e))return Y(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return Y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Y(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function K(e){var t=["Millenium Bug","404","Atmosphere","On Off","Breaking The Habit (Linkin Park Cover)","LIVID","The Drop","Zombie (Gammer Flip)"],n=t.map((function(e){return"".concat(x).concat("https://denizen-confidant-seeds.s3.amazonaws.com/songs/").concat(e.replace(/\s/g,"+"),".mp3")}));function r(){n.forEach((function(n,r){var o=document.createElement("article");o.className="track";var a=function(e){var t=document.createElement("span");return t.innerHTML=e.replace(/\(.*\)/,"").trim(),t.className="songTitle",t}(t[r]),i=function(e,t){var n=document.createElement("audio");return n.src=e,n.id=t.split(" ")[0].toLowerCase(),n.crossOrigin="",n}(n,t[r]),c=function(e){var t=document.createElement("div");t.className="playerControls";var n={play:{src:"dist/images/play-button.png",action:function(){return e.play()}},pause:{src:"dist/images/pause-button.png",action:function(){return e.pause()}},stop:{src:"dist/images/stop-button.png",action:function(){return e.currentTime=e.duration}},rewind:{src:"dist/images/rewind.png",action:function(){return e.currentTime-=5}},forward:{src:"dist/images/forward.png",action:function(){return e.currentTime+=5}}};for(var r in n){var o=document.createElement("img");o.id=r,o.src=n[r].src,o.onclick=n[r].action,t.append(o)}var a=function(){var t=document.createElement("fieldset");t.className="slider-hold";var n=document.createElement("hr"),r=document.createElement("input"),o=document.createElement("input");return r.type=o.type="range",A(r,{id:"volume-slider",title:"Volume",min:"0",max:"1",step:"0.1",value:"0.5"}),A(o,{id:"tempo-slider",title:"Tempo",min:"0.1",max:"2",step:"0.1",value:"1"}),r.oninput=function(){return e.volume=r.value},o.oninput=function(){return e.playbackRate=o.value},t.append(r,n,o),t};return t.append(a()),t}(i);o.append(a,i,c),e.appendChild(o);var s=[document.querySelectorAll(".effects audio"),document.querySelectorAll(".effects img")],u=s[0],d=s[1];i.addEventListener("play",(function(){if(l(a,Math.round(i.duration/20)),M(i,a),!document.getElementById("freestyle").checked){var t=Date.now();N(i,u,document.querySelector(".effects"),ctx,d,[].concat(z(d),z(d),z(d))),i.onended=function(){H(document.querySelector(".effects"),t,e.parentElement,i)}}}))}))}e.onscroll=function(){r(),e.onscroll=null}}function U(){var e=document.getElementById("playlist");e.hidden=!0,document.addEventListener("keydown",(function(t){"KeyZ"===t.code&&t.altKey&&(e.hidden=!e.hidden)}))}var W=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],V=[16.3516,17.32391,18.35405,19.44544,20.60172,21.82676,23.12465,24.49971,25.95654,27.5,29.13523509488062,30.867706328507754,32.70319566257483,34.64782887210901,36.70809598967595,38.890872965260115,41.20344461410874,43.653528929125486,46.2493028389543,48.99942949771866,51.91308719749314,55,58.27047018976124,61.735412657015516,65.40639,69.29566,73.41619,77.78175,82.40689,87.30706,92.49861,97.99886,103.8262,110,116.5409,123.4708,130.8128,138.5913,146.8324,155.5635,164.8138,174.6141,184.9972,195.9977,207.6523,220,233.0819,246.9417,261.6256,277.1826,293.6648,311.127,329.6276,349.2282,369.9944,391.9954,415.3047,440,466.1638,493.8833,523.2511,554.3653,587.3295,622.254,659.2551,698.4565,739.9888,783.9909,830.6094,880,932.3275,987.7666,1046.502,1108.731,1174.659,1244.508,1318.51,1396.913,1479.978,1567.982,1661.219,1760,1864.655,1975.533,2093.004522404789,2217.4610478149766,2349.3181433392606,2489.0158697766474,2637.0204553029594,2793.825851464031,2959.955381693075,3135.963487853994,3322.437580639561,3520,3729.3100921447194,3951.066410048993,4186.009044809578,4434.922,4698.636,4978.032,5274.041,5587.652,5919.911,6271.927,6644.875,7040,7458.62,7902.133].map((function(e,t){var n={};return n.note=W[t%W.length].concat(Math.floor(t/12)),n.freq=e,n}));function $(e,t,n,r,o,a,i){try{var c=e[a](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,o)}function Z(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){$(a,r,o,i,c,"next",e)}function c(e){$(a,r,o,i,c,"throw",e)}i(void 0)}))}}function G(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw a}}}}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var J=function(e){var t,n,r,o,a,i;function c(){(t=function(e){var t=e.createOscillator(),n=new Float32Array([0,0,1,0,1]),r=new Float32Array(n.length),o=e.createPeriodicWave(r,n);return t.setPeriodicWave(o),t}(e)).start(),o=document.createElement("div"),a=document.createElement("div"),i=document.createElement("fieldset"),A(o,{id:"keyboard",class:"keyboard"}),A(a,{id:"keyboardContainer",class:"kbc"}),i.setAttribute("class","pianoControls");var c,s=G(V);try{var d=function(){var e=c.value,t=document.createElement("span");t.id=e.note,t.dataset.freq=e.freq,e.note.includes("#")?(t.className="sharp",I((function(){return g(e.freq)}),"ShiftLeft","Key".concat(e.note[0]),"Digit".concat(e.note[2]))):(t.className="whole",t.classList.add(e.note[0]),I((function(){return g(e.freq)}),"Key".concat(e.note[0]),"Digit".concat(e.note[1]))),t.classList.add("note".concat(e.note.slice(-1))),t.innerHTML="".concat(e.note.slice(0,-1)," <sub class=sub").concat(e.note.slice(-1),' style="color: lightgrey;">').concat(e.note.slice(-1),"</sub>"),t.addEventListener("mousedown",(function(){return g(e.freq)})),o.append(t)};for(s.s();!(c=s.n()).done;)d()}catch(e){s.e(e)}finally{s.f()}a.append(i,o);var m=[u(),l()],f=m[0],p=m[1];function g(n){t.frequency.setValueAtTime(n,e.currentTime)}i.append(f,p),document.body.append(a),document.addEventListener("keydown",(function(e){"KeyT"===e.code&&(o.classList.contains("keyboard-top")?(o.classList.remove("keyboard-top"),a.classList.remove("kbc-top"),effects.classList.remove("shifted"),stage.insertAdjacentElement("afterend",keyboardContainer),document.body.insertBefore(footer,keyboardContainer)):(o.classList.add("keyboard-top"),a.classList.add("kbc-top"),effects.classList.add("shifted"),stage.insertBefore(keyboardContainer,effects)))})),o.addEventListener("mouseover",(function(o){var a=o.target;if(!a.classList.contains("whole"))return;g(a.dataset.freq),function(){for(var o=[e.destination,n,r],a=0,i=o;a<i.length;a++){var c=i[a];t.connect(c)}}()})),document.addEventListener("mousemove",(function(e){a.contains(e.target)||t.disconnect()}))}function s(r){return(n=e.createWaveShaper()).connect(e.destination),t.connect(n),n.oversample="4x",n.curve=function(e){for(var t,n="number"==typeof e?e:50,r=new Float32Array(44100),o=Math.PI/180,a=0;a<44100;++a)t=2*a/44100-1,r[a]=(3+n)*t*20*o/(Math.PI+n*Math.abs(t));return r}(r),n}function u(){var e=document.createElement("input");return A(e,{id:"distRange",type:"range",name:"distortion",min:0,max:1e3,step:1}),e.oninput=function(){s(e.value)},k(e)}function l(){var e=document.createElement("ul");A(e,{id:"reverbButtons",class:"reverbButtons"});for(var t=function(){var t=r[n],o=document.createElement("li");A(o,{id:t.replace(/\s/g,""),class:"reverb"}),o.innerHTML=t,o.onclick=function(){!function(e){d.apply(this,arguments)}(t),function(e){if(!document.getElementsByClassName("reverb"))return;var t,n=G(document.getElementsByClassName("reverb"));try{for(n.s();!(t=n.n()).done;){var r=t.value;r.classList.contains("selected")&&r.classList.remove("selected")}}catch(e){n.e(e)}finally{n.f()}e.classList.add("selected")}(o)},e.append(o)},n=0,r=["Bottle Hall","Deep Space","Going Home","In The Silo","Masonic Lodge","Nice Drum Room","On a Star","Parking Garage","Rays","Vocal Duo"];n<r.length;n++)t();var o=document.createDocumentFragment();return o.append(e),e.insertAdjacentHTML("beforebegin",'<h1 id="reverbTitle">Reverb</h1>'),o}function d(){return(d=Z(regeneratorRuntime.mark((function n(o){var a,i,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=function(){return(c=Z(regeneratorRuntime.mark((function t(){var n,r,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.createConvolver(),t.next=3,fetch("".concat(x).concat(a).concat(o.replace(/\s/g,"+"),".wav"));case 3:return r=t.sent,t.next=6,r.arrayBuffer();case 6:return i=t.sent,t.next=9,e.decodeAudioData(i);case 9:return n.buffer=t.sent,t.abrupt("return",n);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)},i=function(){return c.apply(this,arguments)},a="https://stereo-fidelity.s3.amazonaws.com/reverb/",n.next=5,i();case 5:r=n.sent,t.connect(r),r.connect(e.destination);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}document.addEventListener("keydown",(function(e){if("KeyP"===e.code){if(document.getElementById("keyboard"))return;c()}"KeyQ"===e.code&&a&&(a.remove(),t.disconnect())}))};function X(e){return function(e){if(Array.isArray(e))return Q(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return Q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Q(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ee(e,t,n,r,o,a,i){try{var c=e[a](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,o)}function te(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){ee(a,r,o,i,c,"next",e)}function c(e){ee(a,r,o,i,c,"throw",e)}i(void 0)}))}}function ne(){return(ne=te(regeneratorRuntime.mark((function e(){var t,n,r,o,a,i,c,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g(),U(),h(),b(),document.getElementById("game").checked=!0,t=document.getElementsByClassName("effects")[0],n=t.querySelectorAll("audio"),r=t.querySelectorAll("img"),o=[].concat(X(r),X(r),X(r)),a=document.getElementsByClassName("tracks")[0],i=a.querySelectorAll("audio"),c=document.getElementById("freestyle"),s=window.AudioContext||window.webkitAudioContext,this.ctx=new s,J(ctx),document.addEventListener("keydown",(function(e){"KeyR"===e.code&&(w(),n=t.querySelectorAll("audio"),r=t.querySelectorAll("img"))})),K(a.firstElementChild,ctx),i.forEach((function(e){var r=e.nextElementSibling;e.onplay=function(){if(l(r,Math.round(e.duration/20)),M(e,r),!c.checked){var i=new Date;N(e,n,t,ctx,t.querySelectorAll("img"),o),e.onended=function(){H(t,i,a,e)}}}})),window.addEventListener("unhandledrejection",(function(e){e.preventDefault()}));case 19:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}window.addEventListener("DOMContentLoaded",(function(){return ne.apply(this,arguments)})),D()}]);
//# sourceMappingURL=main.js.map