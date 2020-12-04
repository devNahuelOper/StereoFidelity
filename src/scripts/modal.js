import { setAnimation, toggleAnimation } from "./animation";

export function toggleModal() {
  const modal = document.getElementById("myModal");
  const modalWrapper = document.getElementsByClassName("modal-wrapper")[0];
  const welcome = document.getElementById("welcome");
  const strong = modal.querySelectorAll("strong");
  const close = document.getElementsByClassName("close")[0];
  const about = document.getElementById("about");

  setAnimation(modal);

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
    toggleAnimation(modal);
    let modalItems = [modal, modalWrapper, welcome, close, ...strong];
    for (let item of modalItems) {
      item.classList.add("modal-freeze");
    }
  };

  modal.onpointerout = function () {
    toggleAnimation(true, modal);
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
