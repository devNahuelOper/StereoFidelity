import { keys, setFreq } from "./noteFreq";
import { addLabel, setAttributes, proxyUrl } from "../util";
import { makeDistortion, addDistortionRange } from "./distortion";
import getReverb from "./reverb";
import { makeOscillator } from "./oscillator";

export const activatePiano = (audioCtx) => {
  let oscillator, distortion, reverb, keyboard, kbContainer, pianoControls;

  function makePiano() {
    oscillator = makeOscillator(audioCtx);

    (keyboard = document.createElement("div")),
      (kbContainer = document.createElement("div")),
      (pianoControls = document.createElement("fieldset"));
    setAttributes(keyboard, { id: "keyboard", class: "keyboard" });
    setAttributes(kbContainer, { id: "keyboardContainer", class: "kbc" });
    pianoControls.setAttribute("class", "pianoControls");

    for (let key of keys) {
      let span = document.createElement("span");
      span.id = key.note;
      span.dataset["freq"] = key.freq;

      if (key.note.includes("#")) {
        span.className = "sharp";
      } else {
        span.className = "whole";
        span.classList.add(key.note[0]);
      }

      span.innerHTML = `${key.note.slice(
        0,
        -1
      )} <sub style="color: lightgrey;">${key.note.slice(-1)}</sub>`;
      span.addEventListener("mousedown", () =>
        setFreq(audioCtx, oscillator, key.freq)
      );
      keyboard.append(span);
    }

    kbContainer.append(pianoControls, keyboard);
    document.body.append(kbContainer);

    let distRange = addDistortionRange();
    pianoControls.prepend(distRange);

    distRange.oninput = () => {
      distortion = makeDistortion(
        distortion,
        audioCtx,
        oscillator,
        distRange.value
      );
    };

    let rev = getReverb(audioCtx, oscillator, reverb);
    reverb = rev.reverb;
    let reverbButtons = rev.buttons;

    pianoControls.append(reverbButtons);

    document.addEventListener("keydown", (e) => {
      if (e.code === "KeyT") {
        if (!keyboard.classList.contains("keyboard-top")) {
          keyboard.classList.add("keyboard-top");
          kbContainer.classList.add("kbc-top");
          effects.style.top = 50 + "px";
        } else {
          keyboard.classList.remove("keyboard-top");
          kbContainer.classList.remove("kbc-top");
          effects.style.top = "";
        }
      }
    });

    keyboard.addEventListener("mouseover", playWholes);

    kbContainer.addEventListener("mouseover", () => {
      oscillator.connect(audioCtx.destination);
      oscillator.connect(distortion);
      oscillator.connect(reverb);
      kbContainer.onmouseover = null;
    });

    kbContainer.addEventListener("mouseout", () => {
      oscillator.disconnect();
      kbContainer.onmouseout = null;
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.code === "KeyP") {
      if (document.getElementById("keyboard")) return;
      makePiano();
    }
    if (e.code === "KeyQ") {
      hidePiano();
    }
  });

  function hidePiano() {
    if (kbContainer) {
      kbContainer.remove();
      oscillator.disconnect();
    }
  }

  function playWholes(event) {
    let target = event.target;
    if (!target.classList.contains("whole")) return;
    setFreq(audioCtx, oscillator, target.dataset["freq"]);
  }
};
