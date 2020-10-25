import "./styles/index.scss";
import "./styles/effects.scss";
import "./styles/mediaQueries.scss";


window.addEventListener("DOMContentLoaded", main);

function main() {
  const stage = document.querySelector('div');
  let winWidth = window.innerWidth;
  let winHeight = window.innerHeight;
  stage.style.width = winWidth + 'px';
  stage.style.height = winHeight + 'px';

  window.onresize = function () {
  winWidth = window.innerWidth;
  winHeight = window.innerHeight;
  stage.style.width = winWidth + 'px';
  stage.style.height = winHeight + 'px';
  }

  const modal = document.getElementById('myModal');
  const about = document.getElementById('about');
  const strong = modal.querySelectorAll('strong');
  const close = document.getElementsByClassName('close')[0];
  const welcome = document.getElementById('welcome');

  modal.onmouseover = function () {
    modal.style.animation = 'none';
    modal.firstElementChild.style.animation = 'none';
    welcome.style.animation = 'none';
    close.style.animation = 'none';
    strong.forEach(text => {
      text.style.animation = 'none';
    })
  }

  modal.onmouseout = function () {
    modal.style.animation = 'color-change 25s linear infinite';
    modal.firstElementChild.style.animation = 'color-change 15s linear infinite';
  }


  window.onclick = function (event) {  
    let inModal = modal.contains(event.target);
    let inAbout = about.contains(event.target);
    if (!inModal && !inAbout) {
      modal.style.display = 'none';
      about.style.display = 'block';
    } 
    // console.log(event);
  }

  close.onclick = function () {
    about.style.display = 'block';
    modal.style.display = 'none';
  }

  const backgrounds = [
    "src/assets/images/headphones.jpg",
    "src/assets/images/face.jpg",
    "src/assets/images/waves.jpg",
    "src/assets/images/deadmau5.jpg",
    "src/assets/images/buttons.jpg",
    "src/assets/images/turntable.png",
    "src/assets/images/mixing.jpg",
  ];
  

  function randomBg(){ 
    let num = Math.floor(Math.random(backgrounds) * backgrounds.length);
    stage.style.backgroundImage = "url('"+backgrounds[num]+"')";
  }
  
 
  const bgtoggle = document.getElementById('bgtoggle');
  bgtoggle.onclick = function() {
    randomBg();
  }


  // for (let i = 0; i < backgrounds.length - 1; i++) {
  //   let currbg = stage.style.backgroundImage;
  //   let currbgIdx = backgrounds.indexOf(currbg);
  //   rightbg.onclick = function() {
  //     stage.style.backgroundImage = "url('" + backgrounds[ i % backgrounds.length] + "')";
  //   }
  //   leftbg.onclick = function () {
  //     stage.style.backgroundImage = "url('" + backgrounds[ i % backgrounds.length] + "')";
  //   }
  // }
  // (currbgIdx += i)
  // Math.abs((currbgIdx -= i))

  function handleFiles(event) {
    let files = event.target.files;
    $("#src").attr("src", URL.createObjectURL(files[0]));
    document.getElementById("audio").load();
  }

  document.getElementById("upload").addEventListener("change", handleFiles, false);



  const effects = document.getElementsByClassName('effects')[0];
  const sounds = effects.querySelectorAll('audio');
  const images = effects.querySelectorAll('img');
  const dblImages = Array.from(images).concat(Array.from(images)).concat(Array.from(images));

  sounds.forEach(sound => {
    let adjImg = sound.nextElementSibling;

    adjImg.onclick = function () {
      sound.volume = 0;
      stage.appendChild(adjImg);
      adjImg.style.width = adjImg.style.width + 2 + '%';
      adjImg.style.height = adjImg.style.height + 2 + '%';
    }
    adjImg.ondblclick = function () {
      sound.volume = 1;
      effects.appendChild(adjImg);
      adjImg.style.height = 7 + '%';
      adjImg.style.width = 3 + '%';
    }

    adjImg.ondrag = function () {
      sound.volume = 0.5;
    }
  });

 
  // const audio = document.getElementById('audio');
  // const audioSrc = audioContext.createMediaElementSource(audio);
  // const analyser = audioContext.createAnalyser();
  // audioSrc.connect(analyser);
  // const frequencyData = new Uint8Array(analyser.frequencyBinCount);

  // function renderFrame() {
  //   requestAnimationFrame(renderFrame);
  //   analyser.getByteFrequencyData(frequencyData);
  // }
  // audio.start();
  // renderFrame();
 
 const tracks = document.getElementsByClassName('tracks')[0];
 const songs = tracks.querySelectorAll('audio');
 const ctx = new AudioContext();

  songs.forEach(song => {
    
    let songTitle = song.nextElementSibling;
    let playButton = songTitle.nextElementSibling.firstElementChild;

    song.onplay = function () {
      sounds.forEach(sound => {
        sound.volume = 0.3;
      })

      const start = new Date();
      songTitle.style.animation = 'quick-scroll 15s linear infinite';
      songTitle.style.fontSize = 18 + 'px';
      effects.classList.add('playing');

      let audioSrc = ctx.createMediaElementSource(song)
      audioSrc.connect(ctx.destination);

      let processor = ctx.createScriptProcessor(1024);
      let analyser = ctx.createAnalyser();
      processor.connect(ctx.destination);
      analyser.connect(processor);

      let data = new Uint8Array(analyser.frequencyBinCount);
      audioSrc.connect(analyser);

      const frame = document.createElement('aside');
      const pic1 = document.createElement('img');
      const pic2 = document.createElement('img');
      const pic3 = document.createElement('img');
      [pic1, pic2, pic3].forEach(pic => {
        pic.setAttribute("style", "height: 7%; width: 7%;");
        frame.appendChild(pic);
      })

      frame.style.animation = 'quick-scroll 15s linear infinite';
      frame.style.position = 'relative';

      effects.insertBefore(frame, effects.childNodes[0]);
      effects.style.height = 'fit-content';

      const score = document.createElement('h1');
      score.id = 'score';
      // tracks.appendChild(score);
      effects.insertAdjacentElement("afterend", score);

       processor.onaudioprocess = function() {
          //  analyser.getByteTimeDomainData(data);
         analyser.getByteFrequencyData(data);
         pic1.src = dblImages[Math.floor(Math.random(Array.from(Array(data[0]).keys())) * 100)].src;
         pic2.src = dblImages[Math.floor(Math.random(Array.from(Array(100).keys())) * 100)].src;
         pic3.src = dblImages[data[0]].src;
         

         let iconsLeft = effects.querySelectorAll('img').length;
         const slots = [pic1.src, pic2.src, pic3.src];

         images.forEach(image => {
           if(slots.includes(image.src)) {
             image.style.animation = 'flicker 0.5s infinite alternate';
             image.style.transform = 'scale3d(1.7, 1.7, 1.7)';
           } else {
             image.style.animation = 'none';
             image.style.transform = 'none';
           }
            image.onmouseenter = function() {
              if (slots.includes(image.src)) {
                effects.removeChild(image);
                // song.playbackRate -= 1.0;
                if (iconsLeft <= 60) {
                  song.playbackRate -= 0.8;
                }
              } else {
                if (iconsLeft <= 60) {
                  song.playbackRate += 0.1;
                }
              }
              score.innerHTML = `Sounds Cleared: ${(103 - iconsLeft) + 1}`;
            }
          })

        //  if (iconsLeft <= 3) {
        //    song.playbackRate += 1;
        //    song.volume -= 0.7;
        //    effects.removeChild(frame);
        //    setTimeout(function () { song.currentTime += 400; }, 4000);
        //  }
         
       } 
       song.onended = function() {
         effects.removeChild(frame);
         effects.style.bottom = -6 + '%';
         let iconsLeft = effects.querySelectorAll('img').length;       
         const end = new Date();
         const diff = (end - start) / 1000;
         let bonus; 
         const msg = document.createElement('h1');
         msg.id = "msg";
         msg.setAttribute("style", "font-size:18px; position: absolute; left: 80%; top: 30%; white-space: nowrap; border: 2px solid currentColor; border-radius: 14px; padding: 14px; background-color: black;");
         tracks.appendChild(msg);
        //  effects.removeChild(frame);
         console.log(`icons left: ${iconsLeft}`);
         if (iconsLeft <= 0) {
           bonus = Math.round((song.duration * diff) * (100 - iconsLeft));
           msg.innerHTML = `The Wheel. Electricity. The Automobile. Flight. The Moonlanding. Computers. The Internet.<br/> 
           And now there's YOU, who brings one more entry onto the list of some of mankind’s greatest acheivements.<br/>
           YOU...who cleared ALL <strong>${100 - iconsLeft}</strong> sounds off the board, and <br/>
           YOU who racked up <strong>${bonus}</strong> bonus points in the process.`;
           msg.style.color = '#26dc08';
           msg.style.animation = 'color-change 15s linear infinite';
         }
         if (iconsLeft <= 15 && iconsLeft > 0) {
           bonus = Math.round((song.duration - diff) * (100 - iconsLeft));
           msg.innerHTML = `You cleared <strong>${100 - iconsLeft}</strong> sounds off the board
           like a true baw$$!!<br/> And as if that weren't enough, 
           you got <strong>${bonus}</strong> bonus points for waving your mouse extra maniacally...<br/>Don't let it get to your head now.`;
           msg.style.color = '#26dc08';
         }
         if (iconsLeft > 15 && iconsLeft <= 30) {
           bonus = Math.round((song.duration / diff) * (100 - iconsLeft));
           msg.innerHTML = `You cleared <strong>${103 - iconsLeft}</strong> sounds off the board like a maybe soon to be baw$$, not bad.<br/> 
           You got <strong>${bonus}</strong> bonus points for efficiency.`;
           msg.style.color = '#d4f575';
         } 
         if (iconsLeft > 30 && iconsLeft <= 50) {
           bonus = Math.round((song.duration - diff));
           msg.innerHTML = `You cleared <strong>${100 - iconsLeft}</strong> sound like a true average Joe, just enough to get by.<br/> 
           You get <strong>${bonus}</strong> bonus points for existing.`;
           msg.style.color = '#e0e2d5';
         }
         if (iconsLeft > 50 && iconsLeft <= 75) {
           bonus = Math.round(song.duration / diff);
           msg.innerHTML = `Hmm, you only cleared <strong>${100 - iconsLeft}</strong> sounds...
           You umm, got something on your mind?<br/> 
           eh it could be worse, at least you got a little pocket change.<br/>  
           Here, take these <strong>${bonus}</strong> bonus points and go buy yourself a soup or something.`;
           msg.style.color = 'crimson';
         }
         if (iconsLeft > 75) {
           bonus = Math.round(diff - song.duration - 10);
           msg.innerHTML = `Whoa whoa whoa...are you a bot? Maybe you saw a mouse and
           you had to go deal with that during the song? <br/> If not, then it might be time for
           some serious self-reflection and ask yourself, <br/> "how much longer do I want to be the
           person who only clears <strong>${100 - iconsLeft}</strong> sounds off the board"? <br/>
           Well here, take these  <strong>${bonus}</strong> bonus -- oh wait, no, it looks like you owe me points.`;
           msg.style.left = 90 + '%';
           msg.style.color = 'rgb(113, 8, 8)';
           msg.style.textAlign = 'left';
         }
        //  setTimeout(function(){msg.style.display = 'none';}, 15000);
        window.onclick = function() {
          msg.style.display = 'none'; 
        }
       }
    
    }

    playButton.onmousedown = function () {
      songTitle.style.animation = 'flicker 0.5s infinite alternate';
    }
    song.onpause = function () {     
      songTitle.style.animation = 'none';
      songTitle.style.fontSize = 14 + 'px';
    }
   

  })

}