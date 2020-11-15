class canvasExample {
  constructor(props) {
    this.coords = [10, 10, 150, 100];
    this.animationDir = 1;
    this.fillColor = `green`;
    this.canvas = document.createElement("canvas");
    this.canvas.width = window.innerWidth * 0.75;
    this.canvas.height = this.canvas.width / 2;
    this.ctx = this.canvas.getContext("2d");
  }
  createCanvas() {
    document.body.append(this.canvas);
  }
  drawSquare() {
    this.ctx.fillStyle = this.fillColor;
    this.ctx.fillRect(...this.coords);
  }
  updateSquare() {
    this.coords = this.coords.map((coord) => (coord += 1 * this.animationDir));
  }

  clearSquare() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  reverseAnimation() {
    this.animationDir *= -1;
  }

  setColor(color) {
    this.fillColor = color;
    document.body.style.backgroundColor = color;
    document.body.style.filter = `brightness(150%)`;
  }
}

export default canvasExample;


  // let winWidth = window.innerWidth;
  // let winHeight = window.innerHeight;
  // stage.style.width = winWidth + 'px';
  // stage.style.height = winHeight + 'px';

  // window.onresize = function () {
  // winWidth = window.innerWidth;
  // // winHeight = window.innerHeight;
  // stage.style.width = winWidth + 'px';
  // // stage.style.height = winHeight + 'px';
  // }

// function centerStage(elem) {
//   let [stageHeight, stageWidth] = [
//     stage.clientHeight / 2,
//     stage.clientWidth / 2,
//   ];
//   let [elemHeight, elemWidth] = [elem.clientHeight / 2, elem.clientWidth / 2];
//   elem.style.position = "absolute";
//   elem.style.top = stageHeight - elemHeight + "px";
//   elem.style.left = stageWidth - elemWidth + "px";
// }

 // sounds.forEach(sound => {
  //   let adjImg = sound.nextElementSibling;

  //   adjImg.onclick = function () {
  //     sound.volume = 0;
  //     stage.appendChild(adjImg);
  //     adjImg.style.width = adjImg.style.width + 2 + '%';
  //     adjImg.style.height = adjImg.style.height + 2 + '%';
  //   }
  //   adjImg.ondblclick = function () {
  //     sound.volume = 1;
  //     effects.appendChild(adjImg);
  //     adjImg.style.height = 7 + '%';
  //     adjImg.style.width = 3 + '%';
  //   }

  //   adjImg.ondrag = function () {
  //     sound.volume = 0.5;
  //   }
  // });

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

    // function handleFiles(event) {
  //   let files = event.target.files;
  //   $("#src").attr("src", URL.createObjectURL(files[0]));
  //   document.getElementById("audio").load();
  // }

  // document.getElementById("upload").addEventListener("change", handleFiles, false);

//  function positionAt(anchor, position, elem) {
//    let anchorCoords = anchor.getBoundingClientRect();
//    //  elem.style.position = "absolute";
//    switch (position) {
//      case "top-out":
//        elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
//        elem.style.left = anchorCoords.left + "px";
//        break;
//      case "top-in":
//        elem.style.top = anchorCoords.top + "px";
//        elem.style.left = anchorCoords.left + "px";
//        break;
//      case "bottom-out":
//        elem.style.top = anchorCoords.bottom + "px";
//        elem.style.left = anchorCoords.left + "px";
//        break;
//      case "bottom-in":
//        elem.style.top = anchorCoords.bottom - elem.offsetHeight + "px";
//        elem.style.left = anchorCoords.left + "px";
//        break;
//      case "right-out":
//        elem.style.top = anchorCoords.top + "px";
//        elem.style.left = anchorCoords.right + "px";
//        break;
//      case "right-in":
//        elem.style.top = anchorCoords.top + "px";
//        elem.style.left = anchorCoords.right - elem.offsetWidth + "px";
//        break;
//    }
//  }

//  function showNote(anchor, position, html) {
//    let note = document.createElement("div");
//    note.className = "note";
//    note.innerHTML = html;
//    document.body.append(note);

//    positionAt(anchor, position, note);
//  }
 
        // <!-- <article class="track">
        //   <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
        //   <input type="file" id="upload" value="Upload your own!" />
        //   <br />
        //   <audio id="audio" controls>
        //     <source src="" id="src" />
        //   </audio>
        // </article> -->