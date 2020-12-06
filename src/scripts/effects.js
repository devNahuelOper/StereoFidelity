function activateEffects() {
  const effects = document.getElementsByClassName("effects")[0];
  const stage = document.querySelector("main");

  effects.onpointerover = function (event) {
    let target = event.target;
    if (target.tagName != "IMG") return;
    target.previousElementSibling.play();
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
      elem.classList.remove("draggedImg");
      elem.style.position = "";
      elem.onpointerup = null;
    };
  }

  // Dragged image proximity checker.
  // Used for switching cursor to DJ Spinhand lg when within 40px.

  function proximityCheck(event) {
    let [x, y] = [event.clientX, event.clientY];
    let element = document.elementFromPoint(x, y);
    let elemLeft = document.elementFromPoint(x - 40, y);
    let elemLeftDown = document.elementFromPoint(x - 40, y - 40);
    let elemLeftUp = document.elementFromPoint(x - 40, y + 40);
    let elemRight = document.elementFromPoint(x + 40, y);
    let elemRightDown = document.elementFromPoint(x + 40, y - 40);
    let elemRightUp = document.elementFromPoint(x + 40, y + 40);
    let elemUp = document.elementFromPoint(x, y - 40);
    let elemDown = document.elementFromPoint(x, y + 40);

    let dirs = [
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

    let nearby = dirs.find((dir) => dir.classList.contains("draggedImg"));

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

  // Shuffle effect icons, along with corresponding sounds

  function shuffleEffects() {
    let images = Array.from(effects.querySelectorAll("img"));

    for (let i = images.length - 1; i >= 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      try {
        swap(images[i], images[j]);
      } catch (e) {
        try {
          swap(images[images.length - i], images[j]);
        } catch(e) {
          return;
        }
      }
    }
  }

  function swap(ele1, ele2) {
    let [prev1, prev2] = [
      ele1.previousElementSibling,
      ele2.previousElementSibling,
    ];
    let [clone, prevClone] = [ele1.cloneNode(), prev1.cloneNode()];
    ele1.replaceWith(ele2.cloneNode());
    prev1.replaceWith(prev2.cloneNode());
    ele2.replaceWith(clone);
    prev2.replaceWith(prevClone);
  }

  document.addEventListener("keydown", (e) => {
    if (e.code === "KeyR") shuffleEffects();
  });

  // window.shuffleEffects = shuffleEffects;
}

export default activateEffects;
