import "./styles/index.scss";
import "./styles/effects.scss";
// import "./styles/keyboard.scss";
// import canvasExample from "./scripts/canvas";
// import piano from "./scripts/keyboard";


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

  function allowDrop(ev) {
    ev.preventDefault();
  }

  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

  let track = document.getElementsByClassName('track')[0];

  document.getElementsByClassName('stage')[0].ondrop = drop(stage);
  document.getElementsByClassName('stage')[0].ondragover = allowDrop(stage);
  document.getElementsByClassName('track')[0].ondragstart = drag(track);
  
  // function () {

  // }

   // close.onclick = function () {
  //   modal.style.display = 'none';
  // }

  // let audio, analyser, audioContext, soundSource,
  //   soundBuffer, sourceNode;


  // const sample = document.getElementsByClassName('sample')[0];

  // sample.addEventListener('click', function() {
  //   audio = new Audio('stereo_fidelity.mp3');
  //   audio.controls = true;
  //   setup();
  // })

  // const sample2 = document.getElementsByClassName('sample')[1];

  // sample2.addEventListener('click', function () {
  //   audio = new Audio('motorcycle.mp3');
  //   audio.controls = true;
  //   setup();
  // })

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

  // let modal = document.getElementById('myModal');
  // let btn = document.getElementById('help');
  // let close = document.getElementsByClassName('close')[0];

  // btn.onclick = function () {
  //   modal.style.display = "block";
  // }

  // btn.addEventListener('click',function () {
  //   modal.style.display = 'block';
  // })

  // close.onclick = function () {
  //   modal.style.display = 'none';
  // }

  // close.addEventListener('click', function () {
  //   modal.style.display = 'none';
  // })

  // window.onclick = function (event) {
  //   if (event.target == modal) {
  //     modal.style.display = 'none';
  //   }
  // }

  // let one = document.querySelector('effects');
  // let two = document.querySelector('stage');

  // let drake = dragula([one, two])

  // drake.on('drag', function (el, source) {
  //   document.getElementsByTagName('body')[0].style.backgroundColor = '#28a0ef';
  // });

  // drake.on('drop', function (el, target) {
  //   el.style.border = '5px dashed white';
  //   el.innerText = "Drag MEEEE :)"
  //   document.getElementsByTagName('body')[0].style.backgroundColor = 'black';
  // });

  // var dragAndDrop = {

  //   limit: 2,
  //   count: 0,

  //   init: function () {
  //     this.dragula();
  //     this.drake();
  //   },

  //   drake: function () {
  //     this.dragula.on('drop', this.dropped.bind(this));
  //   },

  //   dragula: function () {
  //     this.dragula = dragula([document.getElementsByClassName('effects'), document.getElementsByClassName('stage')],
  //       {
  //         moves: this.canMove.bind(this),
  //         copy: true,
  //       });
  //   },

  //   canMove: function () {
  //     return this.count < this.limit;
  //   },

  //   dropped: function (el) {
  //     this.count++;
  //   }

  // };

  // dragAndDrop.init();

}