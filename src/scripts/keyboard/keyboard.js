import { keys, setFreq } from "./noteFreq";
import { addLabel, setAttributes, proxyUrl } from "../util";
// import { makeDistortion, addDistortionRange } from "./distortion";
import Distortion from "./distortion";
import getReverb from "./reverb";
// import { makeOscillator } from "./oscillator";
import Oscillator from "./oscillator";

export const activatePiano = (audioCtx) => {
  let oscillator, distortion, reverb, keyboard, kbContainer, pianoControls;

  function makePiano() {
    // oscillator = makeOscillator(audioCtx);
    oscillator = new Oscillator(audioCtx);
    distortion = new Distortion(audioCtx);
    // distortion = oscillator.distortion;

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
      span.addEventListener("mousedown", () =>{
        // setFreq(audioCtx, oscillator, key.freq)
        oscillator.play(key.freq);
        oscillator.connectNode(distortion.distortion);
      });
      keyboard.append(span);
    }

    kbContainer.append(pianoControls, keyboard);
    document.body.append(kbContainer);

    // let distRange = addDistortionRange();
    let distRange = distortion.makeRange();
    pianoControls.prepend(distRange);

    distRange.addEventListener("change", () => oscillator.connectNode(distortion.distortion));

    // distRange.oninput = () => {
    //   distortion = makeDistortion(
    //     distortion,
    //     audioCtx,
    //     oscillator,
    //     distRange.value
    //   );
    // };

    let rev = getReverb(audioCtx, oscillator, reverb);
    console.log(`Reverb: ${Object.entries(rev)}`);
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

    document.addEventListener("mousemove", (e) => {
      if (kbContainer.contains(e.target) || !oscillator.playing) return;
      oscillator.stop();
    })

    // kbContainer.addEventListener("mouseover", (e) => {
    //   // oscillator.connect(audioCtx.destination);
    //   // oscillator.connect(distortion);
    //   // oscillator.oscillator.connect(reverb);
    //   oscillator.play(e.target.dataset["freq"] || 21);
    //   kbContainer.onmouseover = null;
    // });

    // kbContainer.addEventListener("mouseout", () => {
    //   // oscillator.disconnect();
    //   oscillator.stop();
    //   kbContainer.onmouseout = null;
    // });
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
      // oscillator.disconnect();
      oscillator.stop();
    }
  }

  function playWholes(event) {
    let target = event.target;
    if (!target.classList.contains("whole")) return;
    // setFreq(audioCtx, oscillator, target.dataset["freq"]);
    oscillator.play(target.dataset["freq"]);
    oscillator.connectNode(distortion.distortion);
    oscillator.connectNode(reverb);
  }
};
