!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/dist/",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);t(1),t(2),t(3);window.addEventListener("DOMContentLoaded",(function(){document.querySelector("div"),window.innerWidth;var e=document.getElementById("myModal"),n=document.getElementById("about"),t=e.querySelectorAll("strong"),o=document.getElementsByClassName("close")[0],r=document.getElementById("welcome");e.onmouseover=function(){e.style.animation="none",e.firstElementChild.style.animation="none",r.style.animation="none",o.style.animation="none",t.forEach((function(e){e.style.animation="none"}))},e.onmouseout=function(){e.style.animation="color-change 25s linear infinite",e.firstElementChild.style.animation="color-change 15s linear infinite"},window.onclick=function(t){var o=e.contains(t.target),r=n.contains(t.target);o||r||(e.style.display="none",n.style.display="block")},o.onclick=function(){n.style.display="block",e.style.display="none"};var a=["src/assets/images/headphones.jpg","src/assets/images/face.jpg","src/assets/images/waves.jpg","src/assets/images/deadmau5.jpg","src/assets/images/buttons.jpg","src/assets/images/turntable.png","src/assets/images/mixing.jpg"];document.getElementById("bgtoggle").onclick=function(){var e;e=Math.floor(Math.random(a)*a.length),document.body.style.backgroundImage="url('"+a[e]+"')"};var s=document.getElementsByClassName("effects")[0],i=s.querySelectorAll("audio"),c=s.querySelectorAll("img"),l=Array.from(c).concat(Array.from(c)).concat(Array.from(c));s.onpointerover=function(e){var n=e.target;"IMG"==n.tagName&&n.previousElementSibling.play()},s.onpointerout=function(e){var n=e.target;"IMG"==n.tagName&&(n.previousElementSibling.currentTime=0)};var u=document.getElementsByClassName("tracks")[0],d=u.querySelectorAll("audio"),m=window.AudioContext||window.webkitAudioContext;this.ctx=new m,d.forEach((function(e){var n=e.nextElementSibling;n.nextElementSibling.firstElementChild;e.onplay=function(){i.forEach((function(e){e.volume=.3}));var t=new Date;n.classList.add("playSong"),s.classList.add("playing");var o=ctx.createMediaElementSource(e);o.connect(ctx.destination);var r=ctx.createScriptProcessor(1024),a=ctx.createAnalyser();r.connect(ctx.destination),a.connect(r);var d=new Uint8Array(a.frequencyBinCount);o.connect(a);var m=document.createElement("aside");m.id="gameFrame";var g=document.createElement("img"),f=document.createElement("img"),y=document.createElement("img");[g,f,y].forEach((function(e){e.classList.add("framePic"),m.appendChild(e)})),s.insertBefore(m,s.childNodes[0]),s.style.height="fit-content";var h=document.createElement("h1");h.id="score",s.insertAdjacentElement("beforeend",h),r.onaudioprocess=function(){s.scrollIntoView(),a.getByteFrequencyData(d),g.src=l[Math.floor(100*Math.random(Array.from(Array(d[0]).keys())))].src,f.src=l[Math.floor(100*Math.random(Array.from(Array(100).keys())))].src,y.src=l[d[0]].src;var n=s.querySelectorAll("img").length,t=[g.src,f.src,y.src];c.forEach((function(o){o.classList.add("imageNoMatch"),t.includes(o.src)?(o.classList.remove("imageNoMatch"),o.classList.add("imageMatch")):(o.classList.add("imageNoMatch"),o.classList.remove("imageMatch")),o.onmouseenter=function(){t.includes(o.src)?(s.removeChild(o),n<=60&&(e.playbackRate-=.8)):n<=60&&(e.playbackRate+=.1),h.innerHTML="Sounds Cleared: ".concat(103-n+1)}}))},e.onended=function(){s.removeChild(m);var n,o=s.querySelectorAll("img").length,a=(new Date-t)/1e3,i=document.createElement("h1");i.className="msg",u.insertAdjacentElement("afterend",i),console.log("icons left: ".concat(o)),o<=0&&(n=Math.round(e.duration*a*(100-o)),i.innerHTML="The Wheel. Electricity. The Automobile. Flight. The Moonlanding. Computers. The Internet.<br/> \n           And now there's YOU, who brings one more entry onto the list of some of mankind’s greatest acheivements.<br/>\n           YOU...who cleared ALL <strong>".concat(100-o,"</strong> sounds off the board, and <br/>\n           YOU who racked up <strong>").concat(n,"</strong> bonus points in the process."),i.classList.add("msg100")),o<=15&&o>0&&(n=Math.round((e.duration-a)*(100-o)),i.innerHTML="You cleared <strong>".concat(100-o,"</strong> sounds off the board\n           like a true baw$$!!<br/> And as if that weren't enough, \n           you got <strong>").concat(n,"</strong> bonus points for waving your mouse extra maniacally...<br/>Don't let it get to your head now."),i.classList.add("msg85")),o>15&&o<=30&&(n=Math.round(e.duration/a*(100-o)),i.innerHTML="You cleared <strong>".concat(103-o,"</strong> sounds off the board like a maybe soon to be baw$$, not bad.<br/> \n           You got <strong>").concat(n,"</strong> bonus points for efficiency."),i.classList.add("msg70")),o>30&&o<=50&&(n=Math.round(e.duration-a),i.innerHTML="You cleared <strong>".concat(100-o,"</strong> sound like a true average Joe, just enough to get by.<br/> \n           You get <strong>").concat(n,"</strong> bonus points for existing."),i.classList.add("msg50")),o>50&&o<=75&&(n=Math.round(e.duration/a),i.innerHTML="Hmm, you only cleared <strong>".concat(100-o,"</strong> sounds...\n           You umm, got something on your mind?<br/> \n           eh it could be worse, at least you got a little pocket change.<br/>  \n           Here, take these <strong>").concat(n,"</strong> bonus points and go buy yourself a soup or something."),i.classList.add("msg25")),o>75&&(n=Math.round(a-e.duration-10),i.innerHTML='Whoa whoa whoa...are you a bot? Maybe you saw a mouse and\n           you had to go deal with that during the song? <br/> If not, then it might be time for\n           some serious self-reflection and ask yourself, <br/> "how much longer do I want to be the\n           person who only clears <strong>'.concat(100-o,'</strong> sounds off the board"? <br/>\n           Well here, take these  <strong>').concat(n,"</strong> bonus -- oh wait, no, it looks like you owe me points."),i.classList.add("msg0")),r.removeEventListener("audioprocess",startGame()),window.onclick=function(){i.style.display="none"}}},e.onpause=function(){n.classList.remove("playSong")}}))}))},function(e,n,t){},function(e,n,t){},function(e,n,t){}]);
//# sourceMappingURL=main.js.map