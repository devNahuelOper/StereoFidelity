export const setAttributes = (ele, attrs) => {
  for (let key in attrs) ele.setAttribute(key, attrs[key]);
}

export const proxyUrl = "https://cors-anywhere.herokuapp.com/";

export const timeRemaining = (song) => {
  let mins = Math.trunc((song.duration - song.currentTime) / 60);
  let secs = Math.trunc(
    60 * (((song.duration - song.currentTime) / 60) % mins)
  );
  secs = secs < 10 ? `0${secs}` : secs;
  return `${mins}:${secs}`;
}

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