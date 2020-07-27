!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/dist/",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);t(1),t(2);window.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("div"),n=window.innerWidth,t=window.innerHeight;e.style.width=n+"px",e.style.height=t+"px",window.onresize=function(){n=window.innerWidth,t=window.innerHeight,e.style.width=n+"px",e.style.height=t+"px"};var o=document.getElementById("myModal"),r=o.querySelectorAll("strong"),i=document.getElementById("about"),a=document.getElementsByClassName("close")[0],s=document.getElementById("welcome");o.onmouseover=function(){o.style.animation="none",o.firstElementChild.style.animation="none",s.style.animation="none",a.style.animation="none",r.forEach((function(e){e.style.animation="none"}))},o.onmouseout=function(){o.style.animation="color-change 25s linear infinite",o.firstElementChild.style.animation="color-change 15s linear infinite"},window.onclick=function(e){var n=o.contains(e.target),t=i.contains(e.target);n||t||(o.style.display="none",i.style.display="block")},a.onclick=function(){i.style.display="block",o.style.display="none"};var l=["src/styles/headphones.jpg","src/styles/face.jpg","src/styles/waves.jpg","src/styles/deadmau5.jpg","src/styles/buttons.jpg","src/styles/turntable.png"];document.getElementById("bgtoggle").onclick=function(){var n;n=Math.floor(Math.random(l)*l.length),e.style.backgroundImage="url('"+l[n]+"')"},document.getElementById("upload").addEventListener("change",(function(e){var n=e.target.files;$("#src").attr("src",URL.createObjectURL(n[0])),document.getElementById("audio").load()}),!1);var c=document.getElementsByClassName("effects")[0],u=c.querySelectorAll("audio"),d=c.querySelectorAll("img"),y=Array.from(d).concat(Array.from(d)).concat(Array.from(d));u.forEach((function(n){var t=n.nextElementSibling;t.onclick=function(){n.volume=0,e.appendChild(t),t.style.width=t.style.width+2+"%",t.style.height=t.style.height+2+"%"},t.ondblclick=function(){n.volume=1,c.appendChild(t),t.style.height="7%",t.style.width="3%"},t.ondrag=function(){n.volume=.5}}));var f=document.getElementsByClassName("tracks")[0],m=f.querySelectorAll("audio"),g=new AudioContext;m.forEach((function(e){var n=e.nextElementSibling,t=n.nextElementSibling.firstElementChild;e.onplay=function(){u.forEach((function(e){e.volume=.3}));var t=new Date;n.style.animation="quick-scroll 15s linear infinite",n.style.fontSize="18px",c.style.bottom="16%",c.style.left="15%";var o=g.createMediaElementSource(e);o.connect(g.destination);var r=g.createScriptProcessor(1024),i=g.createAnalyser();r.connect(g.destination),i.connect(r);var a=new Uint8Array(i.frequencyBinCount);o.connect(i);var s=document.createElement("aside"),l=document.createElement("img"),m=document.createElement("img"),h=document.createElement("img");[l,m,h].forEach((function(e){e.setAttribute("style","height: 7%; width: 7%;"),s.appendChild(e)})),s.style.animation="quick-scroll 15s linear infinite",s.style.position="relative",c.insertBefore(s,c.childNodes[0]),c.style.height="fit-content";var p=document.createElement("p");p.id="score",f.appendChild(p),r.onaudioprocess=function(){i.getByteFrequencyData(a),l.src=y[Math.floor(100*Math.random(Array.from(Array(a[0]).keys())))].src,m.src=y[Math.floor(100*Math.random(Array.from(Array(100).keys())))].src,h.src=y[a[0]].src;var n=c.querySelectorAll("img").length,t=[l.src,m.src,h.src];d.forEach((function(o){t.includes(o.src)?(o.style.animation="flicker 0.5s infinite alternate",o.style.transform="scale3d(1.7, 1.7, 1.7)"):(o.style.animation="none",o.style.transform="none"),o.onmouseenter=function(){t.includes(o.src)?(c.removeChild(o),n<=80&&(e.playbackRate-=.8)):n<=80&&(e.playbackRate+=.1),p.innerHTML="Sounds Cleared: ".concat(103-n)}}))},e.onended=function(){c.removeChild(s),c.style.bottom="-6%";var n,o=c.querySelectorAll("img").length,r=(new Date-t)/1e3,i=document.createElement("h1");i.id="msg",i.setAttribute("style","font-size:18px; position: absolute; left: 80%; top: 30%; white-space: nowrap; border: 2px solid currentColor; border-radius: 14px; padding: 14px; background-color: black;"),f.appendChild(i),console.log("icons left: ".concat(o)),o<=0&&(n=Math.round(e.duration*r*(100-o)),i.innerHTML="The Wheel. Electricity. The Automobile. Flight. The Moonlanding. Computers. The Internet.<br/> \n           And now there's YOU, who brings one more entry onto the list of some of mankind’s greatest acheivements.<br/>\n           YOU...who cleared ALL <strong>".concat(100-o,"</strong> sounds off the board, and <br/>\n           YOU who racked up <strong>").concat(n,"</strong> bonus points in the process."),i.style.color="#26dc08",i.style.animation="color-change 15s linear infinite"),o<=15&&o>0&&(n=Math.round((e.duration-r)*(100-o)),i.innerHTML="You cleared <strong>".concat(100-o,"</strong> sounds off the board\n           like a true baw$$!!<br/> And as if that weren't enough, \n           you got <strong>").concat(n,"</strong> bonus points for waving your mouse extra maniacally...<br/>Don't let it get to your head now."),i.style.color="#26dc08"),o>15&&o<=30&&(n=Math.round(e.duration/r*(100-o)),i.innerHTML="You cleared <strong>".concat(103-o,"</strong> sounds off the board like a maybe soon to be baw$$, not bad.<br/> \n           You got <strong>").concat(n,"</strong> bonus points for efficiency."),i.style.color="#d4f575"),o>30&&o<=50&&(n=Math.round(e.duration-r),i.innerHTML="You cleared <strong>".concat(100-o,"</strong> sound like a true average Joe, just enough to get by.<br/> \n           You get <strong>").concat(n,"</strong> bonus points for existing."),i.style.color="#e0e2d5"),o>50&&o<=75&&(n=Math.round(e.duration/r),i.innerHTML="Hmm, you only cleared <strong>".concat(100-o,"</strong> sounds...\n           You umm, got something on your mind?<br/> \n           eh it could be worse, at least you got a little pocket change.<br/>  \n           Here, take these <strong>").concat(n,"</strong> bonus points and go buy yourself a soup or something."),i.style.color="crimson"),o>75&&(n=Math.round(r-e.duration-10),i.innerHTML='Whoa whoa whoa...are you a bot? Maybe you saw a mouse and\n           you had to go deal with that during the song? <br/> If not, then it might be time for\n           some serious self-reflection and ask yourself, <br/> "how much longer do I want to be the\n           person who only clears <strong>'.concat(100-o,'</strong> sounds off the board"? <br/>\n           Well here, take these  <strong>').concat(n,"</strong> bonus -- oh wait, no, it looks like you owe me points."),i.style.left="90%",i.style.color="rgb(113, 8, 8)",i.style.textAlign="left"),window.onclick=function(){i.style.display="none"}}},t.onmousedown=function(){n.style.animation="flicker 0.5s infinite alternate"},e.onpause=function(){n.style.animation="none",n.style.fontSize="14px"}}))}))},function(e,n,t){},function(e,n,t){}]);
//# sourceMappingURL=main.js.map