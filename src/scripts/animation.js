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

export function setMorph(...elements) {
  for (let ele of elements) {
    return ele.animate(colorMorph, morphTiming);
  }
}


export function setZoom(ele, pers, tranZ, dur = 10, fill = "forwards", iterations = Infinity) {
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
      iterations,
      fill,
    }
  );
}



export const diagonalZoom = [
  { transform: "scale(1) translate(0px)" },
  {
    transform:
      "perspective(500px) scale3d(0.06, 0.06, 0.2) translate3d(7200px, -3350px, 700px)",
  },
];

export const mobileDiagonalZoom = [
  { transform: "scale(1) translate(0px)" },
  {
    transform:
      "perspective(500px) scale3d(0.2, 0.2, 1) translate3d(820px, -960px, -80px)",
  },
];

export const diagonalTiming = {
	  duration: 1000,
    iterations: 1,
    easing: "ease-in-out",
    fill: "both"
}
 



export function scrollSong(elem, iterations = Infinity) {
  const padScroll = [
    { paddingLeft: "5%" },
    { paddingLeft: `${Math.round(180 / elem.textContent.length)}%` },
    { paddingLeft: "5%" },
  ];

  const padScrollTiming = {
    duration: 20000,
    iterations
  };

  return elem.animate(padScroll, padScrollTiming);
}


