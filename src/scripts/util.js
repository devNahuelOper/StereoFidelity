export const setAttributes = (ele, attrs) => {
  for (let key in attrs) ele.setAttribute(key, attrs[key]);
};

export const proxyUrl = "https://cors-anywhere.herokuapp.com/";

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
