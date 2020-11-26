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

           // song.onended = function () {
      //   frame.remove();
      //   let iconsLeft = effects.querySelectorAll("img").length;
      //   const end = new Date();
      //   const diff = (end - start) / 1000;
      //   let bonus;

      //   const msg = document.createElement("h1");
      //   msg.className = "msg";
      //   tracks.insertAdjacentElement("afterend", msg);
      //   console.log(`icons left: ${iconsLeft}`);

      //   if (iconsLeft <= 0) {
      //     bonus = Math.round(song.duration * diff * (100 - iconsLeft));
      //     msg.innerHTML = `The Wheel. Electricity. The Automobile. Flight. The Moonlanding. Computers. The Internet.<br/> 
      //      And now there's YOU, who brings one more entry onto the list of some of mankind’s greatest acheivements.<br/>
      //      YOU...who cleared ALL <strong>${
      //        100 - iconsLeft
      //      }</strong> sounds off the board, and <br/>
      //      YOU who racked up <strong>${bonus}</strong> bonus points in the process.`;
      //     msg.classList.add("msg100");
      //   } else if (iconsLeft <= 15) {
      //     bonus = Math.round((song.duration - diff) * (100 - iconsLeft));
      //     msg.innerHTML = `You cleared <strong>${
      //       100 - iconsLeft
      //     }</strong> sounds off the board
      //      like a true baw$$!!<br/> And as if that weren't enough, 
      //      you got <strong>${bonus}</strong> bonus points for waving your mouse extra maniacally...<br/>Don't let it get to your head now.`;
      //     msg.classList.add("msg85");
      //   } else if (iconsLeft <= 30) {
      //     bonus = Math.round((song.duration / diff) * (100 - iconsLeft));
      //     msg.innerHTML = `You cleared <strong>${
      //       100 - iconsLeft
      //     }</strong> sounds off the board like a maybe soon to be baw$$, not bad.<br/> 
      //      You got <strong>${bonus}</strong> bonus points for efficiency.`;
      //     msg.classList.add("msg70");
      //   } else if (iconsLeft <= 50) {
      //     bonus = Math.round(song.duration - diff);
      //     msg.innerHTML = `You cleared <strong>${
      //       100 - iconsLeft
      //     }</strong> sound like a true average Joe, just enough to get by.<br/> 
      //      You get <strong>${bonus}</strong> bonus points for existing.`;
      //     msg.classList.add("msg50");
      //   } else if (iconsLeft <= 75) {
      //     bonus = Math.round(song.duration / diff);
      //     msg.innerHTML = `Hmm, you only cleared <strong>${
      //       100 - iconsLeft
      //     }</strong> sounds...
      //      You umm, got something on your mind?<br/> 
      //      eh it could be worse, at least you got a little pocket change.<br/>  
      //      Here, take these <strong>${bonus}</strong> bonus points and go buy yourself a soup or something.`;
      //     msg.classList.add("msg25");
      //   } else {
      //     bonus = Math.round(diff - song.duration - 10);
      //     msg.innerHTML = `Whoa whoa whoa...are you a bot? Maybe you saw a mouse and
      //      you had to go deal with that during the song? <br/> If not, then it might be time for
      //      some serious self-reflection and ask yourself, <br/> "how much longer do I want to be the
      //      person who only clears <strong>${
      //        100 - iconsLeft
      //      }</strong> sounds off the board"? <br/>
      //      Well here, take these  <strong>${bonus}</strong> bonus -- oh wait, no, it looks like you owe me points.`;
      //     msg.classList.add("msg0");
      //   }

      //   window.onclick = function () {
      //     msg.hidden = true;
      //   };
      // };
