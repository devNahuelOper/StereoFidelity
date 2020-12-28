export const setAttributes = (ele, attrs) => {
  for (let key in attrs) ele.setAttribute(key, attrs[key]);
};

export const proxyUrl = "https://cors-anywhere.herokuapp.com/";

export const timeRemaining = (song) => {
  let mins = Math.trunc((song.duration - song.currentTime) / 60);
  let secs = Math.trunc(
    60 * (((song.duration - song.currentTime) / 60) % mins)
  );
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
