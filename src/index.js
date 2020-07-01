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

      let test = document.createElement('aside');
      let pic = document.createElement('img');
      let pic2 = document.createElement('img');
      let pic3 = document.createElement('img');
      pic.style.width = 7 + '%';
      pic.style.height = 7 + '%';
      pic2.style.width = 7 + '%';
      pic2.style.height = 7 + '%';
      pic3.style.width = 7 + '%';
      pic3.style.height = 7 + '%';
      test.appendChild(pic);
      test.appendChild(pic2);
      test.appendChild(pic3);
      test.style.animation = 'quick-scroll 15s linear infinite';
      test.style.position = 'relative';
      // test.style.left = 35 + '%';
      // songTitle.appendChild(test);
      //  stage.appendChild(test);
      //  effects.appendChild(test);
      effects.insertBefore(test, effects.childNodes[0]);
      effects.style.height = 'fit-content';
      //  const canvas = document.createElement(canvas);
       processor.onaudioprocess = function() {
          //  analyser.getByteTimeDomainData(data);
         analyser.getByteFrequencyData(data);
         pic.src =  dblImages[Math.floor(Math.random(Array.from(Array(data[0]).keys())) * 100)].src;
         pic2.src = dblImages[Math.floor(Math.random(Array.from(Array(100).keys())) * 100)].src;
         pic3.src = dblImages[data[0]].src;

         const slots = [pic.src, pic2.src, pic3.src];
         images.forEach(image => {
           if(slots.includes(image.src)) {
            //  image.style.width = 4 + '%';
            //  image.style.height = 8 + '%';
             image.style.animation = 'flicker 0.5s infinite alternate';
             image.style.transform = 'scale3d(1.7, 1.7, 1.7)';
             image.style.boxShadow = 'none';
            //  image.style.filter = 'brightness(1.5)';
            //  image.style.backgroundColor = 'crimson';
           } else {
           
            //  image.style.width = 3 + '%';
            //  image.style.height = 7 + '%';
             image.style.animation = 'none';
            //  image.style.backgroundColor = 'none';
             image.style.boxShadow != 'none';
             image.style.transform = 'none';
            //  image.style.filter = 'brightness(0.5)';
           }
            image.onmouseenter = function() {
              if (slots.includes(image.src)) {
                effects.removeChild(image);
                song.playbackRate -= 0.8;
                console.log(effects.querySelectorAll('img').length);
              } else {
                song.playbackRate += 0.1;
              }
            }
          })
         if (effects.querySelectorAll('img').length <= 3) {
           song.playbackRate += 1;
           song.volume -= 0.7;
           setTimeout(function () { song.currentTime += 400; }, 4000);
         }
         
       } 
       song.onended = function() {
         const msg = document.createElement('h1');
         msg.style.fontSize = 60 + 'px';
         msg.style.position = 'absolute';
         msg.style.left = 150 + '%';
         msg.style.top = 30 + '%';
         msg.style.whiteSpace = 'nowrap';
         msg.style.fontFamily = 'Exo 2, sans-serif'
         tracks.appendChild(msg);
        //  test.style.display = 'none';
         effects.removeChild(test);
         if (effects.querySelectorAll('img').length <= 50) {
           msg.innerHTML = `You cleared: ${100 - effects.querySelectorAll('img').length}...YOU WIN!`;
           msg.style.color = '#1ec190';
           console.log('you win!', effects.querySelectorAll('img').length);
         } else {
           msg.innerHTML = `You cleared: ${100 - effects.querySelectorAll('img').length}...YOU LOSE!`;
           msg.style.color = 'crimson';
           console.log('you lose!', effects.querySelectorAll('img').length);
         }
         setTimeout(function(){msg.style.display = 'none';}, 5000)
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