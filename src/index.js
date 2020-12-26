import "./styles/index.scss";
import "./styles/effects.scss";
import "./styles/mediaQueries.scss";
import "./styles/inputSlider.scss";
import "./styles/modal.scss";
import { toggleModal } from "./scripts/modal";
import toggleBackgrounds from "./scripts/backgrounds";
import { activateEffects, shuffleEffects } from "./scripts/effects";
import { startGame, endGame } from "./scripts/game";
import getPerformance from "./scripts/performance";
import { toggleSecretPlaylist, addMoreTracks } from "./scripts/playlist";
import { scrollSong } from "./scripts/animation";

window.addEventListener("DOMContentLoaded", main);

async function main() {
  toggleModal();
  toggleSecretPlaylist();
  toggleBackgrounds();
  activateEffects();

  const effects = document.getElementsByClassName("effects")[0];
  let sounds = effects.querySelectorAll("audio");
  let images = effects.querySelectorAll("img");

  document.addEventListener("keydown", (e) => {
    if (e.code === "KeyR") {
      shuffleEffects();
      sounds = effects.querySelectorAll("audio");
      images = effects.querySelectorAll("img");
    }
  });

  let trippleImages = [...images, ...images, ...images];

  const tracks = document.getElementsByClassName("tracks")[0];
  const songs = tracks.querySelectorAll("audio");

  
  let AudioContext = window.AudioContext || window.webkitAudioContext;
  this.ctx = new AudioContext();

  addMoreTracks(tracks.firstElementChild);

  songs.forEach((song) => {
    let songTitle = song.nextElementSibling;

    song.onplay = function () {
      scrollSong(songTitle, Math.round(song.duration / 20));
      const start = new Date();

      startGame(
        song,
        sounds,
        effects,
        ctx,
        effects.querySelectorAll("img"),
        trippleImages
      );

      song.onended = () => endGame(effects, start, tracks, song);
    };
    // song.onpause = () => songTitle.classList.remove("playSong");
  });

  window.addEventListener("unhandledrejection", (e) => {
    e.preventDefault();
  });
}

getPerformance();
