export const setAttributes = (ele, attrs) => {
  for (let key in attrs) ele.setAttribute(key, attrs[key]);
};

window.setAttributes = setAttributes;

export const randInRange = (min, max) => Math.floor(Math.random() * (max - min) + min);

export const proxyUrl = "https://cors-anywhere.herokuapp.com/";
window.proxyUrl = proxyUrl;

export const churchReverb =
  "https://www.dropbox.com/home/IMreverbs?preview=St+Nicolaes+Church.wav";
  window.churchReverb = churchReverb;

export const timeRemaining = (song) => {
  let mins = Math.trunc((song.duration - song.currentTime) / 60);
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

  for (let pic of pics) {
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
  let label = document.createElement("label");
  label.htmlFor = label.id = ele.name;
  label.innerHTML = ele.name + "</br>";
  label.append(ele);
  return label;
}

window.addLabel = addLabel;
// let constraints = { audio: true, video: { width: 1280, height: 720 } };

// navigator.mediaDevices
//   .getUserMedia(constraints)
//   .then((mediaStream) => {
//     let video = document.createElement(video);
//     document.body.append(video);
//     video.srcObject = mediaStream;
//     video.onloadedmetadata = () => video.play();
//   })
//   .catch((err) => console.log(err));
