!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=5)}([function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0),n(1),n(2),n(3),n(4);var r=[{filter:"hue-rotate(0deg) drop-shadow(2px 4px 6px currentColor)",transform:"scale3d(1, 1, 1)"},{filter:"hue-rotate(90deg) drop-shadow(2px 4px 7px currentColor) saturate(1)",transform:"scale3d(1.05, 1.05, 1.05)"},{filter:"hue-rotate(180deg) drop-shadow(2px 4px 8px currentColor) saturate(1.5)",transform:"scale3d(1.1, 1.1, 1.1)"},{filter:"hue-rotate(270deg) drop-shadow(2px 4px 7px currentColor) saturate(1)",transform:"scale3d(1.05, 1.05, 1.05)"},{filter:"hue-rotate(360deg) drop-shadow(2px 4px 6px currentColor)",transform:"scale3d(1, 1, 1)"}],o={duration:2e4,iterations:1/0};function a(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var a=0,i=t;a<i.length;a++){var c=i[a];return c.animate(r,o)}}function i(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"forwards",a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1/0;return e.animate([{transform:"perspective(".concat(t-t,"px) translateZ(").concat(n-n,"px)")},{transform:"perspective(".concat(t,"px) translateZ(").concat(n+1,"px)")},{transform:"perspective(".concat(t,"px) translateZ(").concat(n,"px)")},{transform:"perspective(".concat(t,"px) translateZ(").concat(n+1,"px)")},{transform:"perspective(".concat(t-t,"px) translateZ(").concat(n-n,"px)")}],{duration:1e3*r,iterations:a,fill:o})}var c=[{transform:"scale(1) translate(0px)"},{transform:"perspective(500px) scale3d(0.06, 0.06, 0.2) translate3d(7200px, -3350px, 700px)"}],s={duration:1e3,iterations:1,easing:"ease-in-out",fill:"both"};function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1/0,n=[{paddingLeft:"5%"},{paddingLeft:"".concat(Math.round(180/e.textContent.length),"%")},{paddingLeft:"5%"}],r={duration:2e4,iterations:t};return e.animate(n,r)}function l(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||d(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(){var e=document.getElementById("myModal"),t=document.getElementsByClassName("modal-wrapper")[0],n=document.getElementsByClassName("modal-content")[0],r=document.getElementById("welcome"),o=e.querySelectorAll("strong"),u=document.getElementsByClassName("close")[0],m=document.getElementById("about");window.setMorph=a,window.setZoom=i;var f=a(e),g=i(t,20,-2),p=i(n,500,25.5,20);var y=function(){e.classList.remove("modal-hide"),m.classList.remove("about-show");e.animate(c,s).reverse();n.scrollTo(0,0)},v=function(){e.animate(c,s).onfinish=function(){e.classList.add("modal-hide"),m.classList.add("about-show")}};document.addEventListener("keydown",(function(e){"Escape"===e.key&&v(),"KeyH"===e.code&&y()})),e.onpointerover=function(){!function(){for(var e=0,t=[f,g,p];e<t.length;e++){t[e].cancel()}}();var n,a=function(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=d(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw a}}}}([e,t,r,u].concat(l(o)));try{for(a.s();!(n=a.n()).done;){n.value.classList.add("modal-freeze")}}catch(e){a.e(e)}finally{a.f()}},e.onpointerout=function(){!function(){for(var e=0,t=[f,g,p];e<t.length;e++){t[e].play()}}(),e.classList.remove("modal-freeze"),t.classList.remove("modal-freeze")},window.onpointerdown=function(t){var n=e.contains(t.target),r=m.contains(t.target);n||r||v()},u.onclick=function(){v()},m.onclick=function(){y()};var h={title:"<h2 class='freestyle-header'>FREESTYLE MODE</h2>",drag:"<strong>Drag</strong> icons anywhere off the board to isolate your favorite sounds.",rClick:"<strong>Right-Click</strong> dragged icon to send it back to the board.",optZ:"Press <strong>OPTION/ALT + Z</strong> to show secret playlist (these songs will not trigger a game start).",keyboard:"<h2 class='freestyle-header'>OTHER KEYBOARD TRICKS</h2>",shuffle:"Press <strong>R</strong> to Shuffle Effects!",modal:"Press <strong>H</strong> to Show, <strong>ESC</strong> to Hide Instructions"};n.onscroll=function(){!function(){var e=Object.values(h),t=document.createElement("ul");t.classList.add("instructions","freestyle-wrap");for(var r=0,o=e;r<o.length;r++){var a=o[r],i=document.createElement("li");i.className="freestyle",i.innerHTML=a,t.appendChild(i)}n.insertBefore(t,u)}(),n.onscroll=null}}function g(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw a}}}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var y=function(){var e,t=["src/assets/images/headphones.jpg","src/assets/images/face.jpg","src/assets/images/waves.jpg","src/assets/images/deadmau5.jpg","src/assets/images/buttons.jpg","src/assets/images/turntable.png","src/assets/images/mixing.jpg"],n=document.getElementById("bgtoggle"),r=document.getElementsByClassName("bgtoggle-container")[0];n.onclick=function(){var e;e=Math.floor(Math.random(t)*t.length),document.body.style.backgroundImage="url('"+t[e]+"')"},n.onpointerover=function(){e||(e=function(){var e=document.createElement("ul");e.className="bg-list";var n,r=g(t);try{var o=function(){var t=n.value,r=document.createElement("li"),o=document.createElement("img");o.src=t,r.append(o),e.append(r),o.onclick=function(){document.body.style.backgroundImage="url('"+t+"')"}};for(r.s();!(n=r.n()).done;)o()}catch(e){r.e(e)}finally{r.f()}return e}(),r.append(e),e.scrollIntoView())},r.onpointerout=function(t){var n=t.relatedTarget,o=r.contains(n);e&&!o&&(e.remove(),e=null)}};function v(){var e=document.getElementsByClassName("effects")[0],t=document.querySelector("main"),n=document.getElementById("myModal");function r(e){var n=[e.clientX,e.clientY],r=n[0],o=n[1];[document.elementFromPoint(r,o),document.elementFromPoint(r-40,o),document.elementFromPoint(r-40,o-40),document.elementFromPoint(r-40,o+40),document.elementFromPoint(r+40,o),document.elementFromPoint(r+40,o-40),document.elementFromPoint(r+40,o+40),document.elementFromPoint(r,o-40),document.elementFromPoint(r,o+40)].find((function(e){return e.classList.contains("draggedImg")}))?t.classList.add("near-dragged"):t.classList.remove("near-dragged")}e.onpointerover=function(e){var t=e.target;"IMG"==t.tagName&&n.classList.contains("modal-hide")&&t.previousElementSibling.play()},e.onpointerout=function(e){var t=e.target;"IMG"==t.tagName&&(t.previousElementSibling.currentTime=0)},e.onpointerdown=function(t){var n,r,o=t.target;"IMG"==o.tagName&&(r=(n=o).previousElementSibling,n.onpointerdown=function(e){n.classList.add("draggingImg");var t=e.clientX-n.getBoundingClientRect().left,o=e.clientY-n.getBoundingClientRect().top;function a(e,a){n.style.left=e-t+"px",n.style.top=a-o+"px",r.style=n.style}function i(e){a(e.pageX,e.pageY)}n.style.position="absolute",n.style.zIndex=1e3,n.style.width="3%",r.style=n.style,document.body.append(r,n),a(e.pageX,e.pageY),document.addEventListener("mousemove",i),n.onpointerup=function(){n.classList.remove("draggingImg"),n.classList.add("draggedImg"),document.removeEventListener("mousemove",i),n.onpointerup=null}},n.ondragstart=function(){return!1},n.ondragend=function(){return n.onpointerdown=null},n.onpointerover=function(){return r.play()},n.onpointerout=function(){return r.currentTime=0},n.oncontextmenu=function(){e.append(r,n),n.classList.remove("draggedImg"),n.style.position="",n.onpointerup=null})},document.addEventListener("pointermove",(function(){var e=!1;document.querySelector(".draggedImg")?(document.addEventListener("pointermove",r),e=!0):e&&(document.removeEventListener("pointermove",r),e=!1)}))}function h(){function e(e,t){var n=[];if(e.length===t.length){for(var r=0;r<e.length;r++)n.push([e[r],t[r]]);return n}}function t(){for(var t=effects.querySelectorAll("audio"),n=effects.querySelectorAll("img"),r=e(t,n),o=function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=e[t];e[t]=e[n],e[n]=r}return e}(e(t,n)),a=0;a<r.length;a++){var c=[r[a][0],r[a][1]],s=c[0],u=c[1],l=[o[a][0],o[a][1]],d=l[0],m=l[1];s.replaceWith(d.cloneNode()),u.replaceWith(m.cloneNode())}for(var f=function(e){var t=effects.querySelectorAll("img")[e];setTimeout((function(){return i(t,500,100,1,"forwards",1)}),20*e)},g=0;g<n.length;g++)f(g)}!function(){for(var e=effects.querySelectorAll("img"),t=function(t){setTimeout((function(){return i(e[t],500,-200,1,"backwards",1)}),10*(e.length-t))},n=e.length-1;n>=0;n--)t(n)}(),setTimeout((function(){return t()}),1500)}var b=function(e,t){for(var n in t)e.setAttribute(n,t[n])},w=function(e){var t=Math.trunc((e.duration-e.currentTime)/60),n=t>=1?Math.trunc((e.duration-e.currentTime)/60%t*60):Math.trunc(e.duration-e.currentTime);return n=n<10?"0".concat(n):n,"".concat(t,":").concat(n)},E=function(e,t){var n=document.createElement("time");n.innerHTML=w(e),t.append(n),t.classList.add("songPlaying"),e.ontimeupdate=function(){n.innerHTML=w(e)},e.addEventListener("pause",(function(){n.remove(),t.classList.remove("songPlaying")})),e.addEventListener("ended",(function(){n.remove(),t.classList.remove("songPlaying")}))};function L(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||A(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e){return function(e){if(Array.isArray(e))return M(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||A(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){if(e){if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0}}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function x(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r=0,o=t;r<o.length;r++){var a=o[r];a.volume=.3}}function T(e,t,n,r,o,a){x.apply(void 0,S(t)),n.classList.add("playing");var i=document.createElement("img"),c=document.createElement("img"),s=document.createElement("img");!function(e){var t=document.createElement("aside");t.id="gameFrame";for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];for(var a=0,i=r;a<i.length;a++){var c=i[a];c.classList.add("framePic"),t.appendChild(c)}e.insertAdjacentElement("beforebegin",t)}(n,i,c,s);var u=function(e){var t=document.createElement("h1");return t.id="score",e.insertAdjacentElement("beforeend",t),t}(n),l=(function(){var e=document.createElement("canvas");return e.id="canvas",e.classList.add("canvas"),e.width=window.innerWidth/2,e.height=window.innerHeight/3,e}().getContext("2d"),r.createMediaElementSource(e));l.connect(r.destination);var d=r.createScriptProcessor(1024),m=r.createAnalyser();d.connect(r.destination),m.connect(d);var f=new Uint8Array(m.frequencyBinCount);l.connect(m),d.addEventListener("audioprocess",(function t(){g||(n.scrollIntoView(),g=!0);m.getByteFrequencyData(f);var r=n.querySelectorAll("img");try{i.src=a[Math.floor(Math.random()*f[0])].src,c.src=r[Math.round(100*Math.random())].src,s.src=a[f[0]].src;var l=r.length,p=[i.src,c.src,s.src];o.forEach((function(t){t.classList.add("imageNoMatch"),p.includes(t.src)?(t.classList.remove("imageNoMatch"),t.classList.add("imageMatch")):(t.classList.add("imageNoMatch"),t.classList.remove("imageMatch")),t.onmouseenter=function(){p.includes(t.src)?(t.previousElementSibling.remove(),t.remove(),l<=60&&(e.playbackRate-=.8)):l<=60&&(e.playbackRate+=.1),u.innerHTML="Sounds Cleared: ".concat(101-l)}}))}catch(e){return}e.addEventListener("ended",(function(){d.removeEventListener("audioprocess",t),setTimeout((function(){return u.remove()}),3e3)}))}));var g=!1}function I(e,t,n,r){document.getElementById("gameFrame").remove();var o,a=e.querySelectorAll("img").length,i=(new Date-t)/1e3,c=document.createElement("h1");c.className="msg",n.insertAdjacentElement("afterend",c),a<=0?(o=Math.round(r.duration*i*(100-a)),c.innerHTML="The Wheel. Electricity. The Automobile. Flight. The Moonlanding. Computers. The Internet.<br/> \n           And now there's YOU, who brings one more entry onto the list of some of mankind’s greatest acheivements.<br/>\n           YOU...who cleared ALL <strong>".concat(100-a,"</strong> sounds off the board, and <br/>\n           YOU who racked up <strong>").concat(o,"</strong> bonus points in the process."),c.classList.add("msg100")):a<=15?(o=Math.round((r.duration-i)*(100-a)),c.innerHTML="You cleared <strong>".concat(100-a,"</strong> sounds off the board\n           like a true baw$$!!<br/> And as if that weren't enough, \n           you got <strong>").concat(o,"</strong> bonus points for waving your mouse extra maniacally...<br/>Don't let it get to your head now."),c.classList.add("msg85")):a<=30?(o=Math.round(r.duration/i*(100-a)),c.innerHTML="You cleared <strong>".concat(100-a,"</strong> sounds off the board like a maybe soon to be baw$$, not bad.<br/> \n           You got <strong>").concat(o,"</strong> bonus points for efficiency."),c.classList.add("msg70")):a<=50?(o=Math.round(r.duration-i),c.innerHTML="You cleared <strong>".concat(100-a,"</strong> sound like a true average Joe, just enough to get by.<br/> \n           You get <strong>").concat(o,"</strong> bonus points for existing."),c.classList.add("msg50")):a<=75?(o=Math.round(r.duration/i),c.innerHTML="Hmm, you only cleared <strong>".concat(100-a,"</strong> sounds...\n           You umm, got something on your mind?<br/> \n           eh it could be worse, at least you got a little pocket change.<br/>  \n           Here, take these <strong>").concat(o,"</strong> bonus points and go buy yourself a soup or something."),c.classList.add("msg25")):(o=Math.round(i-r.duration-10),c.innerHTML='Whoa whoa whoa...are you a bot? Maybe you saw a mouse and\n           you had to go deal with that during the song? <br/> If not, then it might be time for\n           some serious self-reflection and ask yourself, <br/> "how much longer do I want to be the\n           person who only clears <strong>'.concat(100-a,'</strong> sounds off the board"? <br/>\n           Well here, take these  <strong>').concat(o,"</strong> bonus -- oh wait, no, it looks like you owe me points."),c.classList.add("msg0")),setTimeout((function(){return function(e){localStorage.scores||(localStorage.scores='{"":0," ":0,"  ":0}');for(var t=JSON.parse(localStorage.scores),n=Object.entries(t),r=0,o=0,a=n;o<a.length;o++){var i=L(a[o],2),c=(i[0],i[1]);if(e>c){var s=prompt("Enter your name: ");s=j(s,t),n.splice(r,0,[s,e]),n.length>3&&n.pop(),t=Object.fromEntries(n),localStorage.scores=JSON.stringify(t);break}r++}return O(),localStorage.scores}(o)}),2e3),window.addEventListener("click",(function(){c.hidden=!0}))}function j(e,t){return e in t&&(e=j(e+0,t)),e}var k=Boolean(document.getElementsByClassName("highScores")[0]);function O(){if(!k){var e=JSON.parse(localStorage.scores),t=document.createElement("ul");t.className="highScores",t.innerHTML='<h1 id="scoreHeader">High Scores</h1>';var n=document.createElement("pre");n.innerHTML="x",t.prepend(n),n.onclick=function(){return t.classList.add("hs-minimized"),void t.addEventListener("click",(function(e){e.target.contains(n)||t.classList.remove("hs-minimized")}))};for(var r=0,o=Object.entries(e);r<o.length;r++){var a=L(o[r],2),i=a[0],c=a[1];if(i.trim()){var s=document.createElement("li");s.innerHTML="<b>".concat(i.replace(/0/g,"")," </b>  ").concat(c),t.append(s)}}document.body.append(t)}}window.showHighScores=O;var C=function(){var e=[];document.addEventListener("readystatechange",(function(){var t=Date.now();if(e.push(t),"complete"==document.readyState){var n=e[1]-e[0];console.log("loaded in ".concat(n/1e3," seconds"))}})),window.onunload=function(){document.removeEventListener("DOMContentLoaded",main)}};function N(e){return function(e){if(Array.isArray(e))return P(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return P(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function H(e){var t=["Millenium Bug","404","Atmosphere","On Off","Breaking The Habit (Linkin Park Cover)","LIVID","The Drop"],n=t.map((function(e){return"".concat("https://cors-anywhere.herokuapp.com/").concat("https://denizen-confidant-seeds.s3.amazonaws.com/songs/").concat(e.replace(/\s/g,"+"),".mp3")}));function r(){n.forEach((function(n,r){var o=document.createElement("article");o.className="track";var a=function(e){var t=document.createElement("span");return t.innerHTML=e.replace(/\(.*\)/,"").trim(),t.className="songTitle",t}(t[r]),i=function(e,t){var n=document.createElement("audio");return n.src=e,n.id=t.split(" ")[0].toLowerCase(),n.crossOrigin="anonymous",n}(n,t[r]),c=function(e){var t=document.createElement("div");t.className="playerControls";var n={play:{src:"dist/images/play-button.png",action:function(){return e.play()}},pause:{src:"dist/images/pause-button.png",action:function(){return e.pause()}},stop:{src:"dist/images/stop-button.png",action:function(){return e.currentTime=e.duration}},rewind:{src:"dist/images/rewind.png",action:function(){return e.currentTime-=5}},forward:{src:"dist/images/forward.png",action:function(){return e.currentTime+=5}}};for(var r in n){var o=document.createElement("img");o.id=r,o.src=n[r].src,o.onclick=n[r].action,t.append(o)}var a=function(){var t=document.createElement("fieldset");t.className="slider-hold";var n=document.createElement("hr"),r=document.createElement("input"),o=document.createElement("input");return r.type=o.type="range",b(r,{id:"volume-slider",title:"Volume",min:"0",max:"1",step:"0.1",value:"0.5"}),b(o,{id:"tempo-slider",title:"Tempo",min:"0.1",max:"2",step:"0.1",value:"1"}),r.oninput=function(){return e.volume=r.value},o.oninput=function(){return e.playbackRate=o.value},t.append(r,n,o),t};return t.append(a()),t}(i);o.append(a,i,c),e.appendChild(o);var s=[document.querySelectorAll(".effects audio"),document.querySelectorAll(".effects img")],l=s[0],d=s[1];i.addEventListener("play",(function(){u(a,Math.round(i.duration/20));var t=Date.now(),n=document.createElement("time");n.innerHTML=w(i),a.append(n),a.classList.add("songPlaying"),i.ontimeupdate=function(){n.innerHTML=w(i)},T(i,l,document.querySelector(".effects"),ctx,d,[].concat(N(d),N(d),N(d))),i.onended=function(){n.remove(),a.classList.remove("songPlaying"),I(document.querySelector(".effects"),t,e.parentElement,i)}}))}))}e.onscroll=function(){r(),e.onscroll=null}}function B(){var e=document.getElementById("playlist");e.hidden=!0,document.addEventListener("keydown",(function(t){"KeyZ"===t.code&&t.altKey&&(e.hidden=!e.hidden)}))}function q(e){return function(e){if(Array.isArray(e))return Y(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return Y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Y(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function D(e,t,n,r,o,a,i){try{var c=e[a](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,o)}function F(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){D(a,r,o,i,c,"next",e)}function c(e){D(a,r,o,i,c,"throw",e)}i(void 0)}))}}function R(){return(R=F(regeneratorRuntime.mark((function e(){var t,n,r,o,a,i,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f(),B(),y(),v(),t=document.getElementsByClassName("effects")[0],n=t.querySelectorAll("audio"),r=t.querySelectorAll("img"),document.addEventListener("keydown",(function(e){"KeyR"===e.code&&(h(),n=t.querySelectorAll("audio"),r=t.querySelectorAll("img"))})),o=[].concat(q(r),q(r),q(r)),a=document.getElementsByClassName("tracks")[0],i=a.querySelectorAll("audio"),c=window.AudioContext||window.webkitAudioContext,this.ctx=new c,H(a.firstElementChild,ctx),i.forEach((function(e){var r=e.nextElementSibling;e.onplay=function(){u(r,Math.round(e.duration/20)),E(e,r);var i=new Date;T(e,n,t,ctx,t.querySelectorAll("img"),o),e.onended=function(){I(t,i,a,e)}}})),window.addEventListener("unhandledrejection",(function(e){e.preventDefault()}));case 16:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}window.addEventListener("DOMContentLoaded",(function(){return R.apply(this,arguments)})),C()}]);
//# sourceMappingURL=main.js.map