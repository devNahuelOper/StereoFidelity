!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1),n(2);window.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("div"),t=window.innerWidth,n=window.innerHeight;e.style.width=t+"px",e.style.height=n+"px",window.onresize=function(){t=window.innerWidth,n=window.innerHeight,e.style.width=t+"px",e.style.height=n+"px"};var o=document.getElementById("myModal"),r=document.getElementById("about");document.getElementsByClassName("close")[0];o.onmouseover=function(){o.style.animation="none",o.firstElementChild.style.animation="none"},o.onmouseout=function(){o.style.animation="color-change 25s linear infinite",o.firstElementChild.style.animation="color-change 15s linear infinite"},window.onclick=function(e){var t=o.contains(e.target),n=r.contains(e.target);t||n||(o.style.display="none")};var i=["src/styles/headphones.jpg","src/styles/face.jpg","src/styles/waves.jpg","src/styles/deadmau5.jpg","src/styles/buttons.jpg","src/styles/turntable.png"];document.getElementById("bgtoggle").onclick=function(){var t;t=Math.floor(Math.random(i)*i.length),e.style.backgroundImage="url('"+i[t]+"')"},document.getElementById("upload").addEventListener("change",(function(e){var t=e.target.files;$("#src").attr("src",URL.createObjectURL(t[0])),document.getElementById("audio").load()}),!1);var a=document.getElementsByClassName("effects")[0],s=a.querySelectorAll("audio"),l=a.querySelectorAll("img"),c=Array.from(l).concat(Array.from(l)).concat(Array.from(l));s.forEach((function(t){var n=t.nextElementSibling;n.onclick=function(){t.volume=0,e.appendChild(n),n.style.width=n.style.width+2+"%",n.style.height=n.style.height+2+"%"},n.ondblclick=function(){t.volume=1,a.appendChild(n),n.style.height="7%",n.style.width="3%"},n.ondrag=function(){t.volume=.5}}));var u=document.getElementsByClassName("tracks")[0],d=u.querySelectorAll("audio"),y=new AudioContext;d.forEach((function(e){var t=e.nextElementSibling,n=t.nextElementSibling.firstElementChild;e.onplay=function(){s.forEach((function(e){e.volume=.3}));var n=new Date;t.style.animation="quick-scroll 15s linear infinite",t.style.fontSize="18px",a.style.bottom="15%",a.style.left="13%";var o=y.createMediaElementSource(e);o.connect(y.destination);var r=y.createScriptProcessor(1024),i=y.createAnalyser();r.connect(y.destination),i.connect(r);var d=new Uint8Array(i.frequencyBinCount);o.connect(i);var f=document.createElement("aside"),m=document.createElement("img"),g=document.createElement("img"),h=document.createElement("img");[m,g,h].forEach((function(e){e.setAttribute("style","height: 7%; width: 7%;"),f.appendChild(e)})),f.style.animation="quick-scroll 15s linear infinite",f.style.position="relative",a.insertBefore(f,a.childNodes[0]),a.style.height="fit-content";var p=document.createElement("p");p.style.color="#faf8ec",p.style.fontSize="28px",u.appendChild(p),r.onaudioprocess=function(){i.getByteFrequencyData(d),m.src=c[Math.floor(100*Math.random(Array.from(Array(d[0]).keys())))].src,g.src=c[Math.floor(100*Math.random(Array.from(Array(100).keys())))].src,h.src=c[d[0]].src;var t=a.querySelectorAll("img").length,n=[m.src,g.src,h.src];l.forEach((function(o){n.includes(o.src)?(o.style.animation="flicker 0.5s infinite alternate",o.style.transform="scale3d(1.7, 1.7, 1.7)"):(o.style.animation="none",o.style.transform="none"),o.onmouseenter=function(){n.includes(o.src)?(a.removeChild(o),e.playbackRate-=.7):e.playbackRate+=.1,p.innerHTML=103-t}}))},e.onended=function(){a.removeChild(f),a.style.bottom="-6%";var t,o=a.querySelectorAll("img").length,r=(new Date-n)/1e3,i=document.createElement("h1");i.id="msg",i.setAttribute("style","font-size:18px; position: absolute; left: 80%; top: 30%; white-space: nowrap; border: 2px solid currentColor; border-radius: 14px; padding: 14px; background-color: black;"),u.appendChild(i),console.log("icons left: ".concat(o)),o<=0&&(t=Math.round(e.duration*r*(100-o)),i.innerHTML="The Wheel. Electricity. The Automobile. Flight. The Moonlanding. Computers. The Internet.<br/> \n           And now there's YOU, who brings one more entry onto the list of some of mankind’s greatest acheivements.<br/>\n           YOU...who cleared ALL <strong>".concat(100-o,"</strong> sounds of the board, and <br/>\n           YOU who racked up <strong>").concat(t,"</strong> bonus points in the process."),i.style.color="#26dc08",i.style.animation="color-change 15s linear infinite"),o<=15&&o>0&&(t=Math.round((e.duration-r)*(100-o)),i.innerHTML="You cleared <strong>".concat(100-o,"</strong> sounds off the board\n           like a true baw$$!!<br/> And as if that weren't enough, \n           you got <strong>").concat(t,"</strong> bonus points for waving your mouse extra maniacally...<br/>Don't let it get to your head now."),i.style.color="#26dc08"),o>15&&o<=30&&(t=Math.round(e.duration/r*(100-o)),i.innerHTML="You cleared <strong>".concat(103-o,"</strong> sounds off the board like a maybe soon to be baw$$, not bad.<br/> \n           You got <strong>").concat(t,"</strong> bonus points for efficiency."),i.style.color="#d4f575"),o>30&&o<=50&&(t=Math.round(e.duration-r),i.innerHTML="You cleared <strong>".concat(100-o,"</strong> sound like a true average Joe, just enough to get by.<br/> \n           You get <strong>").concat(t,"</strong> bonus points for existing."),i.style.color="#e0e2d5"),o>50&&o<=75&&(t=Math.round(e.duration/r),i.innerHTML="Hmm, you only cleared <strong>".concat(100-o,"</strong> sounds...\n           You umm, got something on your mind?<br/> \n           eh it could be worse, at least you got a little pocket change.<br/>  \n           Here, take these <strong>").concat(t,"</strong> bonus points and go buy yourself a soup or something."),i.style.color="crimson"),o>75&&(t=Math.round(r-e.duration-1),i.innerHTML='Whoa whoa whoa...are you a bot? Maybe you saw a mouse and\n           you to go deal with that during the song? <br/> If not, then it might be time for\n           some serious self-reflection and ask yourself, <br/> "how much longer do I want to be the\n           person who only clears <strong>'.concat(100-o,'</strong> sounds off the board"? <br/>\n           Well here, take these  <strong>').concat(t,"</strong> bonus -- oh wait, no, it looks like you owe me points."),i.style.left="90%",i.style.color="rgb(113, 8, 8)",i.style.textAlign="left"),window.onclick=function(){i.style.display="none"}}},n.onmousedown=function(){t.style.animation="flicker 0.5s infinite alternate"},e.onpause=function(){t.style.animation="none",t.style.fontSize="14px"}}))}))},function(e,t,n){},function(e,t,n){}]);
//# sourceMappingURL=main.js.map