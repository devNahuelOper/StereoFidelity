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
      elem.style.position = "";
      elem.onpointerup = null;
    };
  }

  function proximityCheck(event) {
    let [x, y] = [event.clientX, event.clientY];
    let element = document.elementFromPoint(x, y);
    let elemLeft = document.elementFromPoint(x - 40, y);
    let elemRight = document.elementFromPoint(x + 40, y);
    let elemUp = document.elementFromPoint(x, y - 40);
    let elemDown = document.elementFromPoint(x, y + 40);

    let dirs = [elemLeft, elemRight, elemUp, elemDown];

    for (let dir of dirs) {
      if (dir.classList.contains("draggedImg")) {
        // console.log('close by!');
        stage.classList.add('near-dragged');
      } 
      // else {
      //   if (stage.classList.contains('near-dragged')) {
      //     stage.classList.remove('near-dragged');
      //   }
      // }
    }

    // return ({
    //   x,
    //   y,
    //   element,
    //   elemLeft,
    //   elemRight,
    //   elemUp,
    //   elemDown
    // });
  }

  document.addEventListener("mouseover", proximityCheck);

}

export default activateEffects;
