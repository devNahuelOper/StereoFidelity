import "./styles/index.scss";
import "./styles/effects.scss";
import "./styles/mediaQueries.scss";

window.addEventListener("DOMContentLoaded", main);

function main() {
  const stage = document.querySelector("main");

  const modal = document.getElementById("myModal");
  const modalWrapper = document.getElementsByClassName("modal-wrapper")[0];
  const welcome = document.getElementById("welcome");
  const strong = modal.querySelectorAll("strong");
  const close = document.getElementsByClassName("close")[0];
  const about = document.getElementById("about");

  modal.onpointerover = function () {
    let modalItems = [modal, modalWrapper, welcome, close, ...strong];
    for (let item of modalItems) {
      item.classList.add("modal-freeze");
    }
  };

  modal.onpointerout = function () {
    modal.classList.remove("modal-freeze");
    modalWrapper.classList.remove("modal-freeze");
  };

  window.onpointerdown = function (event) {
    let inModal = modal.contains(event.target);
    let inAbout = about.contains(event.target);
    if (!inModal && !inAbout) {
      modal.classList.add("modal-hide");
      about.classList.add("about-show");
    }
    // console.log(event);
  };

  close.onclick = function () {
    about.classList.add("about-show");
    modal.classList.add("modal-hide");
  };

  about.onclick = function () {
    modal.classList.remove("modal-hide");
    about.classList.remove("about-show");
  };

  const backgrounds = [
    "src/assets/images/headphones.jpg",
    "src/assets/images/face.jpg",
    "src/assets/images/waves.jpg",
    "src/assets/images/deadmau5.jpg",
    "src/assets/images/buttons.jpg",
    "src/assets/images/turntable.png",
    "src/assets/images/mixing.jpg",
  ];

  function randomBg() {
    let num = Math.floor(Math.random(backgrounds) * backgrounds.length);
    document.body.style.backgroundImage = "url('" + backgrounds[num] + "')";
  }

  const bgtoggle = document.getElementById("bgtoggle");
  const bgcontainer = document.getElementsByClassName("bgtoggle-container")[0];

  bgtoggle.onclick = function () {
    randomBg();
  };

  function showBackgrounds() {
    let ul = document.createElement("ul");
    ul.className = "bg-list";

    for (let bg of backgrounds) {
      let li = document.createElement("li");
      let img = document.createElement("img");
      img.src = bg;
      li.append(img);
      ul.append(li);

      img.onclick = function () {
        document.body.style.backgroundImage = "url('" + bg + "')";
      };
    }
    return ul;
  }

  let bglist;
  bgtoggle.onpointerover = function () {
    if (bglist) return;
    bglist = showBackgrounds();
    bgcontainer.append(bglist);
    bglist.scrollIntoView();
  };

  bgcontainer.onpointerout = function (event) {
    let target = event.relatedTarget;
    let inContainer = bgcontainer.contains(target);

    if (bglist && !inContainer) {
      bglist.remove();
      bglist = null;
    }
  };

  const effects = document.getElementsByClassName("effects")[0];
  const sounds = effects.querySelectorAll("audio");
  const images = effects.querySelectorAll("img");
  const dblImages = Array.from(images)
    .concat(Array.from(images))
    .concat(Array.from(images));

  effects.onpointerover = function (event) {
    let target = event.target;
    if (target.tagName != "IMG") return;
    target.previousElementSibling.play();
    // console.log(target.previousElementSibling);
  };

  effects.onpointerout = function (event) {
    let target = event.target;
    if (target.tagName != "IMG") return;
    target.previousElementSibling.currentTime = 0;
  };

  effects.onpointerdown = function (event) {
    let target = event.target;
    if (target.tagName != "IMG") return;
    makeDraggable(target);
  };

  function makeDraggable(elem) {
    let audio = elem.previousElementSibling;

    elem.onpointerdown = function (event) {
      elem.classList.add("draggingImg");

      let shiftX = event.clientX - elem.getBoundingClientRect().left;
      let shiftY = event.clientY - elem.getBoundingClientRect().top;

      elem.style.position = "absolute";
      elem.style.zIndex = 1000;
      elem.style.width = 3 + "%";

      audio.style = elem.style;
      document.body.append(audio, elem);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        elem.style.left = pageX - shiftX + "px";
        elem.style.top = pageY - shiftY + "px";
        audio.style = elem.style;
        // let [x, y] = [
        //   elem.getBoundingClientRect().x,
        //   elem.getBoundingClientRect().y,
        // ];
        // if (document.elementFromPoint(x, y) === effects) {
        //   effects.append(audio, elem);
        //   elem.style.position = "";
        // }
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
      }

      document.addEventListener("mousemove", onMouseMove);

      elem.onpointerup = function () {
        elem.classList.remove("draggingImg");
        elem.classList.add("draggedImg");
        document.removeEventListener("mousemove", onMouseMove);
        elem.onpointerup = null;
      };
    };

    elem.ondragstart = function () {
      return false;
    };
    elem.ondragend = function () {
      elem.onpointerdown = null;
    };

    elem.onpointerover = function () {
      audio.play();
      // console.log(elem.clientY, elem.pageY);
    };

    elem.oncontextmenu = function () {
      effects.append(audio, elem);
      elem.style.position = "";
      elem.onpointerup = null;
    };
  }

  const tracks = document.getElementsByClassName("tracks")[0];
  const songs = tracks.querySelectorAll("audio");
  let AudioContext = window.AudioContext || window.webkitAudioContext;
  this.ctx = new AudioContext();

  songs.forEach((song) => {
    let songTitle = song.nextElementSibling;
    let playButton = songTitle.nextElementSibling.firstElementChild;

    song.onplay = function () {
      sounds.forEach((sound) => {
        sound.volume = 0.3;
      });

      const start = new Date();

      songTitle.classList.add("playSong");
      effects.classList.add("playing");

      let audioSrc = ctx.createMediaElementSource(song);
      audioSrc.connect(ctx.destination);

      let processor = ctx.createScriptProcessor(1024);
      let analyser = ctx.createAnalyser();
      processor.connect(ctx.destination);
      analyser.connect(processor);

      let data = new Uint8Array(analyser.frequencyBinCount);
      audioSrc.connect(analyser);

      const frame = document.createElement("aside");
      frame.id = "gameFrame";

      const pic1 = document.createElement("img");
      const pic2 = document.createElement("img");
      const pic3 = document.createElement("img");
      [pic1, pic2, pic3].forEach((pic) => {
        pic.classList.add("framePic");
        frame.appendChild(pic);
      });

      // effects.insertBefore(frame, effects.childNodes[0]);
      effects.insertAdjacentElement("beforebegin", frame);
      effects.style.height = "fit-content";

      const score = document.createElement("h1");
      score.id = "score";
      effects.insertAdjacentElement("beforeend", score);

      processor.onaudioprocess = function() {
        effects.scrollIntoView();
        //  analyser.getByteTimeDomainData(data);
        analyser.getByteFrequencyData(data);
        pic1.src =
          dblImages[
            Math.floor(Math.random(Array.from(Array(data[0]).keys())) * 100)
          ].src;
        pic2.src =
          dblImages[
            Math.floor(Math.random(Array.from(Array(100).keys())) * 100)
          ].src;
        pic3.src = dblImages[data[0]].src;

        let iconsLeft = effects.querySelectorAll("img").length;
        const slots = [pic1.src, pic2.src, pic3.src];

        images.forEach((image) => {
          image.classList.add("imageNoMatch");
          if (slots.includes(image.src)) {
            image.classList.remove("imageNoMatch");
            image.classList.add("imageMatch");
          } else {
            image.classList.add("imageNoMatch");
            image.classList.remove("imageMatch");
          }
          image.onmouseenter = function () {
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
            // score.innerHTML = `Sounds Cleared: ${103 - iconsLeft + 1}`;
            score.innerHTML = `Sounds Cleared: ${101 - iconsLeft}`;
          };
        });

        //  if (iconsLeft <= 3) {
        //    song.playbackRate += 1;
        //    song.volume -= 0.7;
        //    effects.removeChild(frame);
        //    setTimeout(function () { song.currentTime += 400; }, 4000);
        //  }
      };

      song.onended = function () {
        // effects.removeChild(frame);
        frame.remove();
        let iconsLeft = effects.querySelectorAll("img").length;
        const end = new Date();
        const diff = (end - start) / 1000;
        let bonus;

        const msg = document.createElement("h1");
        msg.className = "msg";
        tracks.insertAdjacentElement("afterend", msg);
        console.log(`icons left: ${iconsLeft}`);

        if (iconsLeft <= 0) {
          bonus = Math.round(song.duration * diff * (100 - iconsLeft));
          msg.innerHTML = `The Wheel. Electricity. The Automobile. Flight. The Moonlanding. Computers. The Internet.<br/> 
           And now there's YOU, who brings one more entry onto the list of some of mankind’s greatest acheivements.<br/>
           YOU...who cleared ALL <strong>${
             100 - iconsLeft
           }</strong> sounds off the board, and <br/>
           YOU who racked up <strong>${bonus}</strong> bonus points in the process.`;
          msg.classList.add("msg100");
        }
        if (iconsLeft <= 15 && iconsLeft > 0) {
          bonus = Math.round((song.duration - diff) * (100 - iconsLeft));
          msg.innerHTML = `You cleared <strong>${
            100 - iconsLeft
          }</strong> sounds off the board
           like a true baw$$!!<br/> And as if that weren't enough, 
           you got <strong>${bonus}</strong> bonus points for waving your mouse extra maniacally...<br/>Don't let it get to your head now.`;
          msg.classList.add("msg85");
        }
        if (iconsLeft > 15 && iconsLeft <= 30) {
          bonus = Math.round((song.duration / diff) * (100 - iconsLeft));
          msg.innerHTML = `You cleared <strong>${
            103 - iconsLeft
          }</strong> sounds off the board like a maybe soon to be baw$$, not bad.<br/> 
           You got <strong>${bonus}</strong> bonus points for efficiency.`;
          msg.classList.add("msg70");
        }
        if (iconsLeft > 30 && iconsLeft <= 50) {
          bonus = Math.round(song.duration - diff);
          msg.innerHTML = `You cleared <strong>${
            100 - iconsLeft
          }</strong> sound like a true average Joe, just enough to get by.<br/> 
           You get <strong>${bonus}</strong> bonus points for existing.`;
          msg.classList.add("msg50");
        }
        if (iconsLeft > 50 && iconsLeft <= 75) {
          bonus = Math.round(song.duration / diff);
          msg.innerHTML = `Hmm, you only cleared <strong>${
            100 - iconsLeft
          }</strong> sounds...
           You umm, got something on your mind?<br/> 
           eh it could be worse, at least you got a little pocket change.<br/>  
           Here, take these <strong>${bonus}</strong> bonus points and go buy yourself a soup or something.`;
          msg.classList.add("msg25");
        }
        if (iconsLeft > 75) {
          bonus = Math.round(diff - song.duration - 10);
          msg.innerHTML = `Whoa whoa whoa...are you a bot? Maybe you saw a mouse and
           you had to go deal with that during the song? <br/> If not, then it might be time for
           some serious self-reflection and ask yourself, <br/> "how much longer do I want to be the
           person who only clears <strong>${
             100 - iconsLeft
           }</strong> sounds off the board"? <br/>
           Well here, take these  <strong>${bonus}</strong> bonus -- oh wait, no, it looks like you owe me points.`;
          msg.classList.add("msg0");
        }

        window.onclick = function () {
          msg.hidden = true;
        };
      };
    };

    // playButton.onmousedown = function () {
    //   songTitle.style.animation = 'flicker 0.5s infinite alternate';
    // }
    song.onpause = function () {
      songTitle.classList.remove("playSong");
    };
  });
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    myModal.classList.add("modal-hide");
    about.classList.add("about-show");
  }

  if (event.code === "KeyH") {
    myModal.classList.remove("modal-hide");
    about.classList.remove("about-show");
  }
});

let times = [];

document.addEventListener('readystatechange', function() {
  let timestamp = Date.now();
  times.push(timestamp);

  if (document.readyState == 'complete') {
    let diff = times[1] - times[0];
    console.log(`loaded in ${diff / 1000} seconds`);
  }
});

window.onunload = function() {
  document.removeEventListener('DOMContentLoaded', main);
}