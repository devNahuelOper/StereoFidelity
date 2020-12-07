import { setMorph, setZoom } from "./animation";

export function toggleModal() {
  const modal = document.getElementById("myModal");
  const modalWrapper = document.getElementsByClassName("modal-wrapper")[0];
  const modalContent = document.getElementsByClassName("modal-content")[0];
  const instructions = document.getElementsByClassName("instructions")[0];
  const welcome = document.getElementById("welcome");
  const strong = modal.querySelectorAll("strong");
  const close = document.getElementsByClassName("close")[0];
  const about = document.getElementById("about");

  window.setMorph = setMorph;
  window.setZoom = setZoom;

  let morph = setMorph(modal);
  let zoomWrap = setZoom(modalWrapper, 20, -2);
  let zoomContent = setZoom(modalContent, 500, 25.5, 20);


  function stopAnimations() {
    let animations = [morph, zoomWrap, zoomContent];
    for (let anim of animations) anim.cancel();
  }
  function playAnimations() {
    let animations = [morph, zoomWrap, zoomContent];
    for (let anim of animations) anim.play();
  }

  // [window.stopAnimations, window.playAnimations] = [stopAnimations, playAnimations];

  // const zoomContent = modalContent.animate(zoomInOut.animation, zoomInOut.timing);
  // zoomContent.play();

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

  modal.onpointerover = function () {
    stopAnimations();
    let modalItems = [modal, modalWrapper, welcome, close, ...strong];
    for (let item of modalItems) {
      item.classList.add("modal-freeze");
    }
  };

  modal.onpointerout = function () {
    playAnimations();
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
  };

  close.onclick = function () {
    about.classList.add("about-show");
    modal.classList.add("modal-hide");
  };

  about.onclick = function () {
    modal.classList.remove("modal-hide");
    about.classList.remove("about-show");
  };

  // li.innerHTML = "Press <strong>R</strong> to Shuffle Effects!";

  const freestyle = {
    title: "<h2 class='freestyle-header'>FREESTYLE MODE</h2>",
    drag:
      "<strong>Drag</strong> icons anywhere off the board to isolate your favorite sounds.",
    rClick:
      "<strong>Right-Click</strong> dragged icon to send it back to the board.",
    optZ:
      "Press <strong>OPTION/ALT + Z</strong> to show secret playlist (these songs will not trigger a game start).",
    keyboard: "<h2 class='freestyle-header'>OTHER KEYBOARD TRICKS</h2>",
    shuffle: "Press <strong>R</strong> to Shuffle Effects!",
    modal: "Press <strong>H</strong> to Show, <strong>ESC</strong> to Hide Instructions",
  };

  function addFreestyle() {
    let items = Object.values(freestyle);
    // let fragment = document.createDocumentFragment();
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
  }
}

export function toggleSecretPlaylist() {
  const playlist = document.getElementById("playlist");
  playlist.hidden = true;

  document.addEventListener("keydown", function (event) {
    if (event.code === "KeyZ" && event.altKey) {
      playlist.hidden = !playlist.hidden;
    }
  });
}
