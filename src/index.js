import "./styles/index.scss";
import "./styles/effects.scss";
import "./styles/mediaQueries.scss";
import "./styles/inputSlider.scss";
import "./styles/modal.scss";
import { toggleModal, toggleSecretPlaylist } from "./scripts/modal";
import toggleBackgrounds from "./scripts/backgrounds";
import activateEffects from "./scripts/effects";

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

      processor.onaudioprocess = function() {
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

    song.onpause = function () {
      songTitle.classList.remove("playSong");
    };
  });

};




let times = [];

document.addEventListener('readystatechange', function() {
  console.log(`Performance: ${performance.now()}`)
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