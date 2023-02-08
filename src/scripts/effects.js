import { setZoom } from "./animation";

export function activateEffects() {
  const [effects] = document.getElementsByClassName("effects");
  const stage = document.querySelector("main");
  const modal = document.getElementById("myModal");

  effects.onpointerover = function (event) {
    const target = event.target;
    if (target.tagName != "IMG") return;
    if (modal.classList.contains("modal-hide")) {
      target.previousElementSibling.play();
    }
  };

  effects.onpointerout = function (event) {
    const target = event.target;
    if (target.tagName != "IMG") return;
    target.previousElementSibling.currentTime = 0;
  };

  effects.onpointerdown = function (event) {
    const target = event.target;
    if (target.tagName != "IMG") return;
    makeDraggable(target);
  };

  const playOnFocus = e => {
    const activeElem = document.activeElement;
    const activeSound = activeElem.previousElementSibling;
    if (e.key === 'Tab') {
      if (effects.contains(activeElem)) {
        if (activeSound && activeSound.tagName === 'AUDIO') {
          activeSound.play();
        }
      }
    }
  }
  document.addEventListener('keyup', playOnFocus);

  function makeDraggable(elem) {
    const audio = elem.previousElementSibling;

    elem.onpointerdown = function (event) {
      elem.classList.add("draggingImg");

      const shiftX = event.clientX - elem.getBoundingClientRect().left;
      const shiftY = event.clientY - elem.getBoundingClientRect().top;

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

    elem.ondragstart = () => false;
    elem.ondragend = () => elem.onpointerdown = null;

    elem.onpointerover = () => audio.play();
    elem.onpointerout = () => audio.currentTime = 0;

    elem.oncontextmenu = function () {
      effects.append(audio, elem);
      elem.classList.remove("draggedImg");
      elem.style.position = "";
      elem.onpointerup = null;
    };
  }

  // Dragged image proximity checker.
  // Used for switching cursor to DJ Spinhand lg when within 40px.

  function proximityCheck(event) {
    const [x, y] = [event.clientX, event.clientY];
    const element = document.elementFromPoint(x, y);
    const elemLeft = document.elementFromPoint(x - 40, y);
    const elemLeftDown = document.elementFromPoint(x - 40, y - 40);
    const elemLeftUp = document.elementFromPoint(x - 40, y + 40);
    const elemRight = document.elementFromPoint(x + 40, y);
    const elemRightDown = document.elementFromPoint(x + 40, y - 40);
    const elemRightUp = document.elementFromPoint(x + 40, y + 40);
    const elemUp = document.elementFromPoint(x, y - 40);
    const elemDown = document.elementFromPoint(x, y + 40);

    const dirs = [
      element,
      elemLeft,
      elemLeftDown,
      elemLeftUp,
      elemRight,
      elemRightDown,
      elemRightUp,
      elemUp,
      elemDown,
    ];

    const nearby = dirs.find((dir) => dir.classList.contains("draggedImg"));

    if (nearby) {
      stage.classList.add("near-dragged");
    } else {
      stage.classList.remove("near-dragged");
    }
  }

  function connectProxCheck() {
    let connected = false;
    if (document.querySelector(".draggedImg")) {
      document.addEventListener("pointermove", proximityCheck);
      connected = true;
    } else {
      if (connected) {
        document.removeEventListener("pointermove", proximityCheck);
        connected = false;
      }
    }
  }

  document.addEventListener("pointermove", connectProxCheck);
}

// Shuffle effect icons, along with corresponding sounds

export function shuffleEffects() {
  function zip(arr1, arr2) {
    let zipped = [];
    if (arr1.length !== arr2.length) return;

    for (let i = 0; i < arr1.length; i++) {
      zipped.push([arr1[i], arr2[i]]);
    }
    return zipped;
  }

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  }

  function shuffEfx() {
    const sounds = effects.querySelectorAll("audio");
    const images = effects.querySelectorAll("img");
    const zipped = zip(sounds, images);
    const shuffled = shuffle(zip(sounds, images));

    for (let i = 0; i < zipped.length; i++) {
      const [aud, img] = [zipped[i][0], zipped[i][1]];
      const [subAud, subImg] = [shuffled[i][0], shuffled[i][1]];
      aud.replaceWith(subAud.cloneNode());
      img.replaceWith(subImg.cloneNode());
    }

    for (let j = 0; j < images.length; j++) {
      const img = effects.querySelectorAll("img")[j];
      setTimeout(() => setZoom(img, 500, 100, 1, "forwards", 1), j * 20);
    }
  }

  function preWave() {
    const images = effects.querySelectorAll("img");
    for (let i = images.length - 1; i >= 0; i--) {
      setTimeout(() => setZoom(images[i], 500, -200, 1, "backwards", 1), (images.length - i) * 10);
    }
  }
  
  preWave();
  setTimeout(() => shuffEfx(), 1500);
}
