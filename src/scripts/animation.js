const colorMorph = [
  {
    filter: "hue-rotate(0deg) drop-shadow(2px 4px 6px currentColor)",
    transform: "scale3d(1, 1, 1)",
  },
  {
    filter:
      "hue-rotate(90deg) drop-shadow(2px 4px 7px currentColor) saturate(1)",
    transform: "scale3d(1.05, 1.05, 1.05)",
  },
  {
    filter:
      "hue-rotate(180deg) drop-shadow(2px 4px 8px currentColor) saturate(1.5)",
    transform: "scale3d(1.1, 1.1, 1.1)",
  },
  {
    filter:
      "hue-rotate(270deg) drop-shadow(2px 4px 7px currentColor) saturate(1)",
    transform: "scale3d(1.05, 1.05, 1.05)",
  },
  {
    filter: "hue-rotate(360deg) drop-shadow(2px 4px 6px currentColor)",
    transform: "scale3d(1, 1, 1)",
  },
];

const morphTiming = {
  duration: 20000,
  iterations: Infinity,
};

export function setZoom(ele, pers, tranZ, dur = 10, fill = "forwards") {
  return ele.animate(
    [
      {
        transform: `perspective(${pers - pers}px) translateZ(${
          tranZ - tranZ
        }px)`,
      },
      { transform: `perspective(${pers}px) translateZ(${tranZ + 1}px)` },
      { transform: `perspective(${pers}px) translateZ(${tranZ}px)` },
      { transform: `perspective(${pers}px) translateZ(${tranZ + 1}px)` },
      {
        transform: `perspective(${pers - pers}px) translateZ(${
          tranZ - tranZ
        }px)`,
      },
    ],
    {
      duration: dur * 1000,
      iterations: Infinity,
      fill,
    }
  );
}

export function setMorph(...elements) {
  for (let ele of elements) {
    return ele.animate(colorMorph, morphTiming);
  }
}


// export function setZoom(ele, pers, tranZ, dur = 10, fill = "forwards") {
//   return ele.animate(
//     [
//       {
//         transform: `perspective(${pers - pers}px) translateZ(${
//           tranZ - tranZ
//         }px)`,
//         transformOrigin: "center",
//       },
//       {
//         transform: `perspective(${pers}px) translateZ(${tranZ + 1}px)`,
//         transformOrigin: "top right",
//       },
//       {
//         transform: `perspective(${pers}px) translateZ(${tranZ}px)`,
//         transformOrigin: "center",
//       },
//       {
//         transform: `perspective(${pers}px) translateZ(${tranZ + 1}px)`,
//         transformOrigin: "bottom left",
//       },
//       {
//         transform: `perspective(${pers - pers}px) translateZ(${
//           tranZ - tranZ
//         }px)`,
//         transformOrigin: "center",
//       },
//     ],
//     {
//       duration: dur * 1000,
//       iterations: Infinity,
//       fill,
//     }
//   );
// }


// Extra -- For testing Web Animations API

// const zoomInOut = {
//   animation: [
//     { transform: "perspective(10px) translateZ(-1px)" },
//     { transform: "perspective(15px) translateZ(-2px)" },
//     { transform: "perspective(10px) translateZ(-3px)" },
//     { transform: "perspective(15px) translateZ(-2px)" },
//     { transform: "perspective(10px) translateZ(-1px)" },
//   ],
//   timing: {
//     duration: 10000,
//     iterations: Infinity,
//   },
// };

// function toggleMorph(play = false, ...elements) {
//   for (let ele of elements) {
//     let animation = ele.animate(colorMorph, morphTiming);
//     if (animation) {
//       if (!play) {
//         animation.cancel();
//       } else {
//         animation.play();
//       }
//     }
//   }
// }

// function setRandZoom(a = 10, b = -2) {
//   let zoom = setZoom(images[Math.floor(Math.random() * 100)], a, b);
//   return zoom.effect;
// }

// setInterval(() => {
//   setRandZoom(10, -10);
//   console.log("Set random zoom!");
// }, 1000);
