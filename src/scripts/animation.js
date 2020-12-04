// transform: perspective(10px) translateZ(-1px);
// }

const colorMorph = [
  {
    filter: "hue-rotate(0deg) drop-shadow(2px 4px 6px currentColor)",
    transform: "scale3d(1, 1, 1)",
  },
  {
    filter:
      "hue-rotate(90deg) drop-shadow(2px 4px 7px currentColor) saturate(1)",
    transform: "scale3d(1.02, 1.02, 1.02)",
  },
  {
    filter:
      "hue-rotate(180deg) drop-shadow(2px 4px 8px currentColor) saturate(1.5)",
    transform: "scale3d(1.05, 1.05, 1.05)",
  },
  {
    filter:
      "hue-rotate(270deg) drop-shadow(2px 4px 7px currentColor) saturate(1)",
    transform: "scale3d(1.08, 1.08, 1.08)",
  },
  {
    filter: "hue-rotate(360deg) drop-shadow(2px 4px 6px currentColor)",
    transform: "scale3d(1.1, 1.1, 1.1)",
  },
];

const morphTiming = {
  duration: 20000,
  iterations: Infinity,
};

// const zoomInOut = document.getElementsByClassName("modal-content")[0].animate([
//   { transform: "perspective(10px) translateZ(-1px)" },
//   { transform: "perspective(20px) translateZ(-2px)" },
//   { transform: "perspective(30px) translateZ(-3px)" },
// ], {
//   duration: 20000,
//   iterations: Infinity
// });

export function setAnimation(...elements) {
  // zoomInOut.play();
  for (let ele of elements) {
    ele.animate(colorMorph, morphTiming);
  }
}

export function toggleAnimation(play = false, ...elements) {
  // play ? zoomInOut.play() : zoomInOut.pause();
  for (let ele of elements) {
    let animation = ele.animate(colorMorph, morphTiming);
    if (animation) {
      if (!play) {
        animation.pause();
        // console.log("paused");
      } else {
        animation.play();
        // console.log("playing");
      }
    }
  }
}