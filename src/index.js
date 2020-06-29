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

  const tracks = document.getElementsByClassName('tracks')[0];
  const chosen = document.getElementsByClassName('chosen')[0];

  const effects = document.getElementsByClassName('effects')[0];
  const sounds = effects.querySelectorAll('audio');

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
      // stage.appendChild(adjImg);
      sound.volume = 0.5;
    }
  });

 


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