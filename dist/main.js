!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1),n(2);window.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("div"),t=window.innerWidth,n=window.innerHeight;e.style.width=t+"px",e.style.height=n+"px",window.onresize=function(){t=window.innerWidth,n=window.innerHeight,e.style.width=t+"px",e.style.height=n+"px"};document.getElementById("myModal"),document.getElementById("about");var o=["src/styles/waves.jpg","src/styles/face.jpg","src/styles/headphones.jpg","src/styles/deadmau5.jpg","src/styles/buttons.jpg","src/styles/turntable.png"];document.getElementById("bgtoggle").onclick=function(){var t;t=Math.floor(Math.random(o)*o.length),e.style.backgroundImage="url('"+o[t]+"')"},document.getElementById("upload").addEventListener("change",(function(e){var t=e.target.files;$("#src").attr("src",URL.createObjectURL(t[0])),document.getElementById("audio").load()}),!1);var r=document.getElementsByClassName("effects")[0],i=r.querySelectorAll("audio"),a=r.querySelectorAll("img"),s=Array.from(a).concat(Array.from(a)).concat(Array.from(a));i.forEach((function(t){var n=t.nextElementSibling;n.onclick=function(){t.volume=0,e.appendChild(n),n.style.width=n.style.width+2+"%",n.style.height=n.style.height+2+"%"},n.ondblclick=function(){t.volume=1,r.appendChild(n),n.style.height="7%",n.style.width="3%"},n.ondrag=function(){t.volume=.5}}));var l=document.getElementsByClassName("tracks")[0],c=l.querySelectorAll("audio"),u=new AudioContext;c.forEach((function(e){var t=e.nextElementSibling,n=t.nextElementSibling.firstElementChild;e.onplay=function(){i.forEach((function(e){e.volume=.3}));var n=new Date;console.log(n),t.style.animation="quick-scroll 15s linear infinite",t.style.fontSize="20px";var o=u.createMediaElementSource(e);o.connect(u.destination);var c=u.createScriptProcessor(1024),d=u.createAnalyser();c.connect(u.destination),d.connect(c);var f=new Uint8Array(d.frequencyBinCount);o.connect(d);var y=document.createElement("aside"),g=document.createElement("img"),m=document.createElement("img"),h=document.createElement("img");[g,m,h].forEach((function(e){e.setAttribute("style","height: 7%; width: 7%;"),y.appendChild(e)})),y.style.animation="quick-scroll 15s linear infinite",y.style.position="relative",r.insertBefore(y,r.childNodes[0]),r.style.height="fit-content";var p=document.createElement("p");p.style.color="#faf8ec",p.style.fontSize="28px",l.appendChild(p),c.onaudioprocess=function(){d.getByteTimeDomainData(f),g.src=s[Math.floor(100*Math.random(Array.from(Array(f[0]).keys())))].src,m.src=s[Math.floor(100*Math.random(Array.from(Array(100).keys())))].src,h.src=s[f[0]].src;var t=r.querySelectorAll("img").length,n=[g.src,m.src,h.src];a.forEach((function(o){n.includes(o.src)?(o.style.animation="flicker 0.5s infinite alternate",o.style.transform="scale3d(1.7, 1.7, 1.7)"):(o.style.animation="none",o.style.transform="none"),o.onmouseenter=function(){n.includes(o.src)?(r.removeChild(o),e.playbackRate-=.7,console.log(t)):e.playbackRate+=.1,p.innerHTML=103-t}})),t<=3&&(e.playbackRate+=1,e.volume-=.7,r.removeChild(y),setTimeout((function(){e.currentTime+=400}),4e3))},e.onended=function(){r.removeChild(y);var t,o=r.querySelectorAll("img").length,i=(new Date-n)/1e3,a=document.createElement("h1");a.id="msg",a.setAttribute("style","font-size:24px; position: absolute; left: 80%; top: 30%; white-space: nowrap; border: 2px solid currentColor; border-radius: 14px; padding: 14px; background-color: black;"),l.appendChild(a),console.log("icons left: ".concat(o)),o<=0&&(t=Math.round(e.duration*i*(100-o)),a.innerHTML="The Wheel. Electricity. The Automobile. Flight. The Moonlanding. Computers. The Internet.<br/> \n           And now there's YOU, who brings one more entry onto the list of some of mankind’s greatest acheivements.<br/>\n           YOU...who cleared ALL <strong>".concat(100-o,"</strong> sounds of the board, and <br/>\n           YOU who racked up <strong>").concat(t,"</strong> bonus points in the process."),a.style.color="#26dc08",a.style.animation="color-change 15s linear infinite"),o<=15&&o>0&&(t=Math.round((e.duration-i)*(100-o)),a.innerHTML="You cleared <strong>".concat(100-o,"</strong> sounds off the board\n           like a true baw$$!!<br/> And as if that weren't enough, \n           you got <strong>").concat(t,"</strong> bonus points for waving your mouse extra maniacally...<br/>Don't let it get to your head now."),a.style.color="#26dc08"),o>15&&o<=30&&(t=Math.round(e.duration/i*(100-o)),a.innerHTML="You cleared <strong>".concat(103-o,"</strong> sounds off the board like a maybe soon to be baw$$, not bad.<br/> \n           You got <strong>").concat(t,"</strong> bonus points for efficiency."),a.style.color="#d4f575"),o>30&&o<=50&&(t=Math.round(e.duration-i),a.innerHTML="You cleared <strong>".concat(100-o,"</strong> sound like a true average Joe, just enough to get by.<br/> \n           You get <strong>").concat(t,"</strong> bonus points for doing you."),a.style.color="#e0e2d5"),o>50&&o<=75&&(t=Math.round(e.duration/i),a.innerHTML="Hmm, you only cleared <strong>".concat(100-o,"</strong> sounds...\n           You umm, got something on your mind?<br/> \n           eh it could be worse, at least you got a little pocket change.<br/>  \n           Here, take these <strong>").concat(t,"</strong> bonus points and go buy yourself a soup or something."),a.style.color="crimson"),o>75&&(t=Math.round(i-e.duration-1),a.innerHTML='Whoa whoa whoa...are you a bot? Maybe you saw a mouse and\n           you to go deal with that during the song? <br/> If not, then it might be time for\n           some serious self-reflection and ask yourself, <br/> "how much longer do I want to be the\n           person who only clears <strong>'.concat(100-o,'</strong> sounds off the board"? <br/>\n           Well here, take these  <strong>').concat(t,"</strong> bonus -- oh wait, no, it looks like you owe me points."),a.style.left="90%",a.style.color="rgb(113, 8, 8)",a.style.textAlign="left"),window.onclick=function(){a.style.display="none"}}},n.onmousedown=function(){t.style.animation="flicker 0.5s infinite alternate"},e.onpause=function(){t.style.animation="none",t.style.fontSize="14px"}}))}))},function(e,t,n){},function(e,t,n){}]);
//# sourceMappingURL=main.js.map