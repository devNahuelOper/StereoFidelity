!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/dist/",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);t(1),t(2),t(3);window.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("div"),n=window.innerWidth;e.style.width=n+"px",window.onresize=function(){n=window.innerWidth,e.style.width=n+"px"};var t=document.getElementById("myModal"),o=document.getElementById("about"),r=t.querySelectorAll("strong"),a=document.getElementsByClassName("close")[0],s=document.getElementById("welcome");t.onmouseover=function(){t.style.animation="none",t.firstElementChild.style.animation="none",s.style.animation="none",a.style.animation="none",r.forEach((function(e){e.style.animation="none"}))},t.onmouseout=function(){t.style.animation="color-change 25s linear infinite",t.firstElementChild.style.animation="color-change 15s linear infinite"},window.onclick=function(e){var n=t.contains(e.target),r=o.contains(e.target);n||r||(t.style.display="none",o.style.display="block")},a.onclick=function(){o.style.display="block",t.style.display="none"};var i=["src/assets/images/headphones.jpg","src/assets/images/face.jpg","src/assets/images/waves.jpg","src/assets/images/deadmau5.jpg","src/assets/images/buttons.jpg","src/assets/images/turntable.png","src/assets/images/mixing.jpg"];document.getElementById("bgtoggle").onclick=function(){var e;e=Math.floor(Math.random(i)*i.length),document.body.style.backgroundImage="url('"+i[e]+"')"};var c=document.getElementsByClassName("effects")[0],l=c.querySelectorAll("audio"),u=c.querySelectorAll("img"),d=Array.from(u).concat(Array.from(u)).concat(Array.from(u));l.forEach((function(n){var t=n.nextElementSibling;t.onclick=function(){n.volume=0,e.appendChild(t),t.style.width=t.style.width+2+"%",t.style.height=t.style.height+2+"%"},t.ondblclick=function(){n.volume=1,c.appendChild(t),t.style.height="7%",t.style.width="3%"},t.ondrag=function(){n.volume=.5}}));var m=document.getElementsByClassName("tracks")[0],g=m.querySelectorAll("audio"),y=new AudioContext;g.forEach((function(e){var n=e.nextElementSibling;n.nextElementSibling.firstElementChild;e.onplay=function(){l.forEach((function(e){e.volume=.3}));var t=new Date;n.classList.add("playSong"),c.classList.add("playing");var o=y.createMediaElementSource(e);o.connect(y.destination);var r=y.createScriptProcessor(1024),a=y.createAnalyser();r.connect(y.destination),a.connect(r);var s=new Uint8Array(a.frequencyBinCount);o.connect(a);var i=document.createElement("aside"),g=document.createElement("img"),f=document.createElement("img"),h=document.createElement("img");[g,f,h].forEach((function(e){e.setAttribute("style","height: 7%; width: 7%;"),i.appendChild(e)})),i.style.animation="quick-scroll 15s linear infinite",i.style.position="relative",c.insertBefore(i,c.childNodes[0]),c.style.height="fit-content";var b=document.createElement("h1");b.id="score",c.insertAdjacentElement("beforeend",b),r.onaudioprocess=function(){c.scrollIntoView(),a.getByteFrequencyData(s),g.src=d[Math.floor(100*Math.random(Array.from(Array(s[0]).keys())))].src,f.src=d[Math.floor(100*Math.random(Array.from(Array(100).keys())))].src,h.src=d[s[0]].src;var n=c.querySelectorAll("img").length,t=[g.src,f.src,h.src];u.forEach((function(o){t.includes(o.src)?(o.style.animation="flicker 0.5s infinite alternate",o.style.transform="scale3d(1.7, 1.7, 1.7)"):(o.style.animation="none",o.style.transform="none"),o.onmouseenter=function(){t.includes(o.src)?(c.removeChild(o),n<=60&&(e.playbackRate-=.8)):n<=60&&(e.playbackRate+=.1),b.innerHTML="Sounds Cleared: ".concat(103-n+1)}}))},e.onended=function(){c.removeChild(i),c.style.bottom="-6%";var n,o=c.querySelectorAll("img").length,r=(new Date-t)/1e3,a=document.createElement("h1");a.className="msg",m.insertAdjacentElement("afterend",a),console.log("icons left: ".concat(o)),o<=0&&(n=Math.round(e.duration*r*(100-o)),a.innerHTML="The Wheel. Electricity. The Automobile. Flight. The Moonlanding. Computers. The Internet.<br/> \n           And now there's YOU, who brings one more entry onto the list of some of mankind’s greatest acheivements.<br/>\n           YOU...who cleared ALL <strong>".concat(100-o,"</strong> sounds off the board, and <br/>\n           YOU who racked up <strong>").concat(n,"</strong> bonus points in the process."),a.style.color="#26dc08",a.style.animation="color-change 15s linear infinite"),o<=15&&o>0&&(n=Math.round((e.duration-r)*(100-o)),a.innerHTML="You cleared <strong>".concat(100-o,"</strong> sounds off the board\n           like a true baw$$!!<br/> And as if that weren't enough, \n           you got <strong>").concat(n,"</strong> bonus points for waving your mouse extra maniacally...<br/>Don't let it get to your head now."),a.style.color="#26dc08"),o>15&&o<=30&&(n=Math.round(e.duration/r*(100-o)),a.innerHTML="You cleared <strong>".concat(103-o,"</strong> sounds off the board like a maybe soon to be baw$$, not bad.<br/> \n           You got <strong>").concat(n,"</strong> bonus points for efficiency."),a.style.color="#d4f575"),o>30&&o<=50&&(n=Math.round(e.duration-r),a.innerHTML="You cleared <strong>".concat(100-o,"</strong> sound like a true average Joe, just enough to get by.<br/> \n           You get <strong>").concat(n,"</strong> bonus points for existing."),a.style.color="#e0e2d5"),o>50&&o<=75&&(n=Math.round(e.duration/r),a.innerHTML="Hmm, you only cleared <strong>".concat(100-o,"</strong> sounds...\n           You umm, got something on your mind?<br/> \n           eh it could be worse, at least you got a little pocket change.<br/>  \n           Here, take these <strong>").concat(n,"</strong> bonus points and go buy yourself a soup or something."),a.style.color="crimson"),o>75&&(n=Math.round(r-e.duration-10),a.innerHTML='Whoa whoa whoa...are you a bot? Maybe you saw a mouse and\n           you had to go deal with that during the song? <br/> If not, then it might be time for\n           some serious self-reflection and ask yourself, <br/> "how much longer do I want to be the\n           person who only clears <strong>'.concat(100-o,'</strong> sounds off the board"? <br/>\n           Well here, take these  <strong>').concat(n,"</strong> bonus -- oh wait, no, it looks like you owe me points."),a.style.left="90%",a.style.color="rgb(113, 8, 8)",a.style.textAlign="left"),window.onclick=function(){a.style.display="none"}}},e.onpause=function(){n.classList.remove("playSong")}}))}))},function(e,n,t){},function(e,n,t){},function(e,n,t){}]);
//# sourceMappingURL=main.js.map