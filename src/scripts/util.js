export const setAttributes = (ele, attrs) => {
  for (let key in attrs) ele.setAttribute(key, attrs[key]);
}

export const proxyUrl = "https://cors-anywhere.herokuapp.com/";

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