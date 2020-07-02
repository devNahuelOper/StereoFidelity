import "./styles/index.scss";
import "./styles/effects.scss";


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
  window.onclick = function () {
    modal.style.display = 'none';
  }

  const backgrounds = [
    'src/styles/waves.jpg', 'src/styles/face.jpg',
    'src/styles/headphones.jpg','src/styles/deadmau5.jpg',
    'src/styles/buttons.jpg', 'src/styles/turntable.png'
  ];
  
  // stage.style.backgroundImage = "url('src/styles/waves.jpg')";
  
  function randomBg(){ 
    let num = Math.floor(Math.random(backgrounds) * backgrounds.length);
    stage.style.backgroundImage = "url('"+backgrounds[num]+"')";
  }
  randomBg();
  

  function handleFiles(event) {
    var files = event.target.files;
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
      console.log(start);
      songTitle.style.animation = 'quick-scroll 15s linear infinite';
      songTitle.style.fontSize = 20 + 'px';

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

      const score = document.createElement('p');
      score.style.color = '#faf8ec';
      score.style.fontSize = 28 + 'px';
      tracks.appendChild(score);
      //  const canvas = document.createElement(canvas);
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
            //  image.style.boxShadow = 'none';
            //  image.style.filter = 'brightness(1.5)';
            //  image.style.backgroundColor = 'crimson';
           } else {
             image.style.animation = 'none';
            //  image.style.backgroundColor = 'none';
            //  image.style.boxShadow != 'none';
             image.style.transform = 'none';
            //  image.style.filter = 'brightness(0.5)';
           }
            image.onmouseenter = function() {
              if (slots.includes(image.src)) {
                effects.removeChild(image);
                song.playbackRate -= 0.7;
                console.log(iconsLeft);
              } else {
                song.playbackRate += 0.1;
              }
              score.innerHTML = 103 - iconsLeft;
            }
          })

         if (iconsLeft <= 3) {
           song.playbackRate += 1;
           song.volume -= 0.7;
           effects.removeChild(frame);
           setTimeout(function () { song.currentTime += 400; }, 4000);
         }
         
       } 
       song.onended = function() {
         effects.removeChild(frame);
         let iconsLeft = effects.querySelectorAll('img').length;       
         const end = new Date();
         const diff = (end - start) / 1000;
         let bonus; 
         const msg = document.createElement('h1');
         msg.id = "msg";
         msg.setAttribute("style", "font-size:30px; position: absolute; left: 150%; top: 30%; white-space: nowrap; border: 2px solid currentColor; border-radius: 14px; padding: 14px; background-color: black; text-align: center;");
         tracks.appendChild(msg);
        //  effects.removeChild(frame);
         console.log(`icons left: ${iconsLeft}`);
         if (iconsLeft <= 0) {
           bonus = Math.round((song.duration * diff) * (100 - iconsLeft));
           msg.innerHTML = `Beatles. Einstein. Ghandi. King. Mandela. Musk. Washington. <br/> 
           And now there's YOU, joining just of few of the most iconoclastic baw$$$es of all time.<br/>
           YOU...who cleared ALL <strong>${100 - iconsLeft}</strong> sounds of the board, and <br/>
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
           You get <strong>${bonus}</strong> bonus points for doing you.`;
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
           bonus = Math.round(diff - song.duration - 1);
           msg.innerHTML = `Whoa whoa whoa...are you a bot? Maybe you saw a mouse and
           you to go deal with that during the song? <br/> If not, then it might be time for
           some serious self-reflection and ask yourself, <br/> "how much longer do I want to be the
           person who only clears <strong>${100 - iconsLeft}</strong> sounds off the board"? <br/>
           Well here, take these  <strong>${bonus}</strong> bonus -- oh wait, no, it looks like you owe me points.`;
           msg.style.left = 120 + '%';
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



 


  // let fidelity = document.getElementById('fidelity');
  // let play = document.getElementById('play');

  

  // let audio,
  //   analyser,
  //   audioContext,
  //   soundSource,
  //   soundBuffer,
  //   sourceNode,
  //   cycle,
  //   transparency,
  //   freqArray,
  //   stream;


  // audioInput.addEventListener('change', function (event) {
  //   if (!audioContext || audioContext.state !== "running") {
  //     stream = URL.createObjectURL(event.target.files[0]);
  //     audio = new Audio();
  //     console.log(audio);
  //     audio.src = stream;
  //     setup();
  //   }
  // });

  // function startSound() {
  //   sourceNode = audioContext.createMediaElementSource(audio);
  //   sourceNode.connect(analyser);
  //   sourceNode.connect(audioContext.destination);

  //   audio.play();
  // }

  // function setup() {
  //   audio.addEventListener('canplay', function () {
  //     audioContext = audioContext || new AudioContext();
  //     analyser = (analyser || audioContext.createAnalyser());
  //     analyser.smoothingTimeConstant = 1.0;
  //     analyser.fftSize = 512;

  //     startSound();
  //   });
  // }

  // document.getElementsByClassName('play')[0].addEventListener('click', playSound.bind(null, sample));
  // document.getElementsByClassName('stop')[0].addEventListener('click', stopSound);

  // document.getElementsByClassName('play')[1].addEventListener('click', playSound.bind(null, sample2));
  // document.getElementsByClassName('stop')[1].addEventListener('click', stopSound);

  // function playSound() {
  //   if (audioContext) {
  //     if (audioContext.state === 'suspended') {
  //       audioContext.resume();
  //     }
  //   }
  // }

  // function stopSound() {
  //   if (audioContext) {
  //     if (audioContext.state === 'running') {
  //       audioContext.suspend();
  //     }
  //   }
  // }



}