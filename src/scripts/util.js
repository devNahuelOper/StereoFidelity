export const setAttributes = (ele, attrs) => {
  for (const key in attrs) ele.setAttribute(key, attrs[key]);
};

window.setAttributes = setAttributes;

export const randInRange = (min, max) => Math.floor(Math.random() * (max - min) + min);

export const proxyUrl = "https://cors-anywhere.herokuapp.com/";
window.proxyUrl = proxyUrl;

export const churchReverb =
  "https://www.dropbox.com/home/IMreverbs?preview=St+Nicolaes+Church.wav";
  window.churchReverb = churchReverb;

export const timeRemaining = (song) => {
  const mins = Math.trunc((song.duration - song.currentTime) / 60);
  let secs =
    mins >= 1
      ? Math.trunc(60 * (((song.duration - song.currentTime) / 60) % mins))
      : Math.trunc(song.duration - song.currentTime);
  secs = secs < 10 ? `0${secs}` : secs;
  return `${mins}:${secs}`;
};

export const displayTime = (song, songTitle) => {
  const time = document.createElement("time");
  time.innerHTML = timeRemaining(song);
  songTitle.append(time);
  songTitle.classList.add("songPlaying");

  song.ontimeupdate = () => {
    time.innerHTML = timeRemaining(song);
  };
  song.addEventListener("pause", () => {
    time.remove();
    songTitle.classList.remove("songPlaying");
  });
  song.addEventListener("ended", () => {
    time.remove();
    songTitle.classList.remove("songPlaying");
  });
};

export const makeFrame = (el, ...pics) => {
  const frame = document.createElement("aside");
  frame.id = "gameFrame";

  for (const pic of pics) {
    pic.classList.add("framePic");
    frame.appendChild(pic);
  }

  el.insertAdjacentElement("beforebegin", frame);
  return frame;
};

export const makeScore = (el) => {
  const score = document.createElement("h1");
  score.id = "score";
  el.insertAdjacentElement("beforeend", score);
  return score;
};

export function addLabel(ele) {
  const label = document.createElement("label");
  label.htmlFor = label.id = ele.name;
  label.innerHTML = ele.name + "</br>";
  label.append(ele);
  return label;
}

window.addLabel = addLabel;

export function compress(audioCtx, source) {
  const compressor = audioCtx.createDynamicsCompressor();
  compressor.threshold.setValueAtTime(-50, audioCtx.currentTime);
  compressor.knee.setValueAtTime(40, audioCtx.currentTime);
  compressor.ratio.setValueAtTime(12, audioCtx.currentTime);
  compressor.attack.setValueAtTime(0, audioCtx.currentTime);
  compressor.release.setValueAtTime(0.25, audioCtx.currentTime);
  compressor.connect(audioCtx.destination);
  source.connect(compressor);
}

window.compress = compress;

export function runOnKeys(func, ...codes) {
  const pressed = new Set();

  document.addEventListener("keydown", (event) => {
    pressed.add(event.code);

    for (const code of codes) {
      if (!pressed.has(code)) {
        return;
      }
    }

    pressed.clear();
    func();
  });

  document.addEventListener("keyup", (event) => {
    pressed.deconste(event.code);
  });
}
window.runOnKeys = runOnKeys;
// const audio = "dist/sounds/2448.mp3";
// const constraints = { audio: true, video: { width: 1280, height: 720 } };

// navigator.mediaDevices
//   .getUserMedia(constraints)
//   .then((mediaStream) => {
//     const video = document.createElement(video);
//     document.body.append(video);
//     video.srcObject = mediaStream;
//     video.onloadedmetadata = () => video.play();
//   })
//   .catch((err) => console.log(err));
