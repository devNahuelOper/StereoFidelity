import "./styles/index.scss";
import "./styles/effects.scss";
import "./styles/mediaQueries.scss";
import "./styles/inputSlider.scss";
import "./styles/modal.scss";
import { toggleModal, toggleSecretPlaylist } from "./scripts/modal";
import toggleBackgrounds from "./scripts/backgrounds";
import activateEffects from "./scripts/effects";
import { endGame } from "./scripts/game";

window.addEventListener("DOMContentLoaded", main);

function main() {
  const stage = document.querySelector("main");

  toggleModal();

  toggleSecretPlaylist();

  toggleBackgrounds();

  activateEffects();

  function lowerVolume(...soundArgs) {
    for (let sound of soundArgs) sound.volume = 0.3;
  }

  const effects = document.getElementsByClassName("effects")[0];
  const sounds = effects.querySelectorAll("audio");
  const images = effects.querySelectorAll("img");
  const trippleImages = [...images, ...images, ...images];

  const tracks = document.getElementsByClassName("tracks")[0];
  const songs = tracks.querySelectorAll("audio");

  let AudioContext = window.AudioContext || window.webkitAudioContext;
  this.ctx = new AudioContext();

  songs.forEach((song) => {
    let songTitle = song.nextElementSibling;

    song.onplay = function () {
      lowerVolume(...sounds);

      songTitle.classList.add("playSong");
      effects.classList.add("playing");

      const start = new Date();

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

      effects.insertAdjacentElement("beforebegin", frame);
      effects.style.height = "fit-content";

      const score = document.createElement("h1");
      score.id = "score";
      effects.insertAdjacentElement("beforeend", score);

      processor.onaudioprocess = function () {
        effects.scrollIntoView();
        //  analyser.getByteTimeDomainData(data);
        analyser.getByteFrequencyData(data);
        pic1.src =
          trippleImages[
            Math.floor(Math.random(Array.from(Array(data[0]).keys())) * 100)
          ].src;
        pic2.src =
          trippleImages[
            Math.floor(Math.random(Array.from(Array(100).keys())) * 100)
          ].src;
        pic3.src = trippleImages[data[0]].src;

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

      song.onended = () => {
        return endGame(frame, effects, start, tracks, song);
      };
    };

    song.onpause = function () {
      songTitle.classList.remove("playSong");
    };
  });
}

let times = [];

document.addEventListener("readystatechange", function () {
  // console.log(`Performance: ${performance.now()}`);
  let timestamp = Date.now();
  times.push(timestamp);

  if (document.readyState == "complete") {
    let diff = times[1] - times[0];
    console.log(`loaded in ${diff / 1000} seconds`);
  }
});

window.onunload = function () {
  document.removeEventListener("DOMContentLoaded", main);
};
