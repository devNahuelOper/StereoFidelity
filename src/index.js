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
//  console.log(songs);
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
      pic.style.width = 8 + '%';
      pic.style.height = 8 + '%';
      pic2.style.width = 8 + '%';
      pic2.style.height = 8 + '%';
      pic3.style.width = 8 + '%';
      pic3.style.height = 8 + '%';
      test.appendChild(pic);
      test.appendChild(pic2);
      test.appendChild(pic3);
      // songTitle.appendChild(test);
      //  stage.appendChild(test);
      //  effects.appendChild(test);
      effects.insertBefore(test, effects.childNodes[0]);
      //  const canvas = document.createElement(canvas);
       processor.onaudioprocess = function() {
          //  analyser.getByteTimeDomainData(data);
         analyser.getByteFrequencyData(data);
         pic.src =  dblImages[Math.floor(Math.random(Array.from(Array(data[0]).keys())) * 100)].src;
         pic2.src = dblImages[Math.floor(Math.random(Array.from(Array(100).keys())) * 100)].src;
         pic3.src = dblImages[data[0]].src;

         const slots = [pic.src, pic2.src, pic3.src];
         images.forEach(image => {
            image.onmouseenter = function() {
              if (slots.includes(image.src)) {
                effects.removeChild(image);
                console.log(effects.querySelectorAll('img').length);
              } 
            }
          })
         
       } 
       song.onended = function() {
         if (effects.querySelectorAll('img').length <= 50) {
           console.log('you win!', effects.querySelectorAll('img').length);
         } else {
           console.log('you lose!', effects.querySelectorAll('img').length);
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