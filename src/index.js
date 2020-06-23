import "./styles/index.scss";
import "./styles/keyboard.scss";
// import canvasExample from "./scripts/canvas";
import piano from "./scripts/keyboard";


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


  let audio, analyser, audioContext, soundSource,
    soundBuffer, sourceNode;


  const sample = document.getElementsByClassName('sample')[0];

  sample.addEventListener('click', function() {
    audio = new Audio('stereo_fidelity.mp3');
    audio.controls = true;
    setup();
  })

  const sample2 = document.getElementsByClassName('sample')[1];

  sample2.addEventListener('click', function () {
    audio = new Audio('motorcycle.mp3');
    audio.controls = true;
    setup();
  })

  function startSound() {
    sourceNode = audioContext.createMediaElementSource(audio);
    sourceNode.connect(analyser);
    sourceNode.connect(audioContext.destination);

    audio.play();
  
  }

  function setup() {
    audio.addEventListener('canplay', function () {
      audioContext = audioContext || new AudioContext();
      analyser = (analyser || audioContext.createAnalyser());
      analyser.smoothingTimeConstant = 0.1;
      analyser.fftSize = 512;

      startSound();
    });
  }

  document.getElementsByClassName('play')[0].addEventListener('click', playSound.bind(null, sourceNode));
  document.getElementsByClassName('stop')[0].addEventListener('click', stopSound);
  
  document.getElementsByClassName('play')[1].addEventListener('click', playSound.bind(null, sourceNode));
  document.getElementsByClassName('stop')[1].addEventListener('click', stopSound);

  function playSound() {
    if (audioContext) {
      if (audioContext.state === 'suspended') {
        audioContext.resume();
      }
    }
  }

  function stopSound() {
    if (audioContext) {
      if (audioContext.state === 'running') {
        audioContext.suspend();
      }
    }
  }

  piano();

}