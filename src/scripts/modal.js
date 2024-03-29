import {
  setMorph,
  setZoom,
  diagonalZoom,
  diagonalTiming,
  mobileDiagonalZoom,
} from "./animation";

export function toggleModal() {
  const modal = document.getElementById("myModal");
  const [modalWrapper] = document.getElementsByClassName("modal-wrapper");
  const [modalContent] = document.getElementsByClassName("modal-content");
  const welcome = document.getElementById("welcome");
  const strong = modal.querySelectorAll("strong");
  const [close] = document.getElementsByClassName("close");
  const about = document.getElementById("about");
  const frame = document.getElementById("frameAppear");
  const match = document.getElementById("matchAppear");

  window.setMorph = setMorph;
  window.setZoom = setZoom;

  const morph = setMorph(modal);
  const zoomWrap = setZoom(modalWrapper, 20, -2);
  const zoomContent = setZoom(modalContent, 500, 25.5, 20);

  window.morphZoom = [morph, zoomWrap, zoomContent];

  function stopAnimations() {
    const animations = [morph, zoomWrap, zoomContent];
    for (let anim of animations) anim.cancel();

    const modalItems = [modal, modalWrapper, welcome, close, ...strong];
    for (let item of modalItems) item.classList.add("modal-freeze");
  }

  window.stopAnimations = stopAnimations;

  function playAnimations() {
    let animations = [morph, zoomWrap, zoomContent];
    // let animations = [morph, zoomContent];
    for (let anim of animations) anim.play();
  }

  let modalToggle = window.innerWidth > 450 ? diagonalZoom : mobileDiagonalZoom;

  window.onresize = () => {
    modalToggle = window.innerWidth > 450 ? diagonalZoom : mobileDiagonalZoom;
  };

  const modalView = {
    open() {
      modal.classList.remove("modal-hide");
      about.classList.remove("about-show");
      let openModal = modal.animate(modalToggle, diagonalTiming).reverse();
      modalContent.scrollTo(0, 0);
    },
    close() {
      let closeModal = modal.animate(modalToggle, diagonalTiming);
      closeModal.onfinish = () => {
        modal.classList.add("modal-hide");
        about.classList.add("about-show");
      };
    },
  };

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      modalView.close();
    }

    if (event.code === "KeyH") {
      modalView.open();
    }
  });

  modal.onpointerover = stopAnimations;

  modal.onpointerout = function () {
    if (frame.paused && match.paused) {
      playAnimations();
      const modalItems = [modal, modalWrapper, welcome, close, ...strong];
      for (let item of modalItems) {
        item.classList.remove("modal-freeze");
      }
    }
  };

  window.onpointerdown = function (event) {
    let inModal = modal.contains(event.target);
    let inAbout = about.contains(event.target);
    if (!inModal && !inAbout) {
      modalView.close();
    }
  };

  close.onclick = function () {
    modalView.close();
  };

  about.onclick = function () {
    modalView.open();
  };

  const freestyle = {
    title: "<h2 class='freestyle-header'>FREESTYLE MODE</h2>",
    drag: "<strong>Drag</strong> icons anywhere off the board to isolate your favorite sounds.",
    rClick:
      "<strong>Right-Click</strong> dragged icon to send it back to the board.",
    optZ: "Press <strong>OPTION/ALT + Z</strong> to show secret playlist (these songs will not trigger a game start).",
    keyboard: "<h2 class='freestyle-header'>OTHER KEYBOARD TRICKS</h2>",
    shuffle: "Press <strong>R</strong> to Shuffle Effects!",
    modal:
      "Press <strong>H</strong> to Show, <strong>ESC</strong> to Hide Instructions",
    piano:
      "Press <strong>P</strong> for a 🎹 PIANO 🎹...<strong>Q</strong> to hide it and <strong>T</strong> to move it.",
  };

  function addFreestyle() {
    let items = Object.values(freestyle);
    let ul = document.createElement("ul");
    ul.classList.add("instructions", "freestyle-wrap");

    for (let item of items) {
      let li = document.createElement("li");
      li.className = "freestyle";
      li.innerHTML = item;
      ul.appendChild(li);
    }
    modalContent.insertBefore(ul, close);
  }

  modalContent.onscroll = () => {
    addFreestyle();
    modalContent.onscroll = null;
  };

  frame.ontimeupdate = () => {
    if (frame.currentTime > 3 && frame.currentTime < 5) {
      frame.classList.add("frame-zoom");
    } else {
      frame.classList.remove("frame-zoom");
    }
  };

  const videos = document.getElementsByClassName("frame-still");

  for (let video of videos) {
    video.onplay = () => viewFrameVideo(video);
    video.onended = () => endFrameVideo(video);
  }

  function viewFrameVideo(ele) {
    ele.classList.add("frame-view");
    modal.classList.add("modal-freeze");
    modalWrapper.classList.add("modal-freeze");
  }
  function endFrameVideo(ele) {
    ele.classList.remove("frame-view");
  }
}
