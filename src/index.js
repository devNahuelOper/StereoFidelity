import "./styles/index.scss";
import "./styles/effects.scss";
import "./styles/mediaQueries.scss";
import "./styles/inputSlider.scss";
import "./styles/modal.scss";
import { toggleModal, toggleSecretPlaylist } from "./scripts/modal";
import toggleBackgrounds from "./scripts/backgrounds";
import { activateEffects, shuffleEffects } from "./scripts/effects";
import { startGame, endGame } from "./scripts/game";
import getPerformance from "./scripts/performance";
import addMoreTracks from "./scripts/playlist";

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

  const trippleImages = [...images, ...images, ...images];

  const tracks = document.getElementsByClassName("tracks")[0];
  const songs = tracks.querySelectorAll("audio");

  // addMoreTracks(tracks);

  let AudioContext = window.AudioContext || window.webkitAudioContext;
  this.ctx = new AudioContext();

  songs.forEach((song) => {
    let songTitle = song.nextElementSibling;

    song.onplay = function () {
      songTitle.classList.add("playSong");
      const start = new Date();

      startGame(song, sounds, effects, ctx, images, trippleImages);

      song.onended = () => endGame(effects, start, tracks, song);
    };
    song.onpause = () => songTitle.classList.remove("playSong");
  });

  window.addEventListener("unhandledrejection", (e) => {
    e.preventDefault();
  });
}

getPerformance();
