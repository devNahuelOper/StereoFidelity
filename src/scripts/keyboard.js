import { addLabel, setAttributes, proxyUrl, runOnKeys } from "./util";
import { keys } from "./keyboard/noteFreq";

export const activatePiano = (audioCtx) => {
  let oscillator, distortion, reverb, keyboard, kbContainer, pianoControls;

  function makePiano() {
    oscillator = makeOscillator(audioCtx);
    oscillator.start();

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
        runOnKeys(
          () => setFreq(key.freq),
          'ShiftLeft',
          `Key${key.note[0]}`,
          `Digit${key.note[2]}`
        );
      } else {
        span.className = "whole";
        span.classList.add(key.note[0]);
        runOnKeys(() => setFreq(key.freq), `Key${key.note[0]}`, `Digit${key.note[1]}`);
      }
      span.classList.add(`note${key.note.slice(-1)}`);

      span.innerHTML = `${key.note.slice(0, -1)} <sub class=sub${key.note.slice(
        -1
      )} style="color: lightgrey;">${key.note.slice(-1)}</sub>`;
      span.addEventListener("mousedown", () => setFreq(key.freq));
      keyboard.append(span);
    }

    kbContainer.append(pianoControls, keyboard);
    let [distRange, reverbButtons] = [addDistortionRange(), addReverbButtons()];
    pianoControls.append(distRange, reverbButtons);
    document.body.append(kbContainer);

    document.addEventListener("keydown", (e) => {
      if (e.code === "KeyT") {
        if (!keyboard.classList.contains("keyboard-top")) {
          keyboard.classList.add("keyboard-top");
          kbContainer.classList.add("kbc-top");
          effects.classList.add("shifted");
          stage.insertBefore(keyboardContainer, effects);
        } else {
          keyboard.classList.remove("keyboard-top");
          kbContainer.classList.remove("kbc-top");
          effects.classList.remove("shifted");
          stage.insertBefore(effects, keyboardContainer);
        }
      }
    });

    keyboard.addEventListener("mouseover", playWholes);

    document.addEventListener("mousemove", (e) => {
      if (kbContainer.contains(e.target)) return;
      oscillator.disconnect();
    });

    function setFreq(hz) {
      oscillator.frequency.setValueAtTime(hz, audioCtx.currentTime);
    }

    function playWholes(event) {
      let target = event.target;
      if (!target.classList.contains("whole")) return;
      setFreq(target.dataset["freq"]);
      connectOscillator();
    }
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

  function makeOscillator(audioCtx) {
    let oscillator = audioCtx.createOscillator();

    let sineTerms = new Float32Array([0, 0, 1, 0, 1]);
    let cosineTerms = new Float32Array(sineTerms.length);
    let customWave = audioCtx.createPeriodicWave(cosineTerms, sineTerms);
    oscillator.setPeriodicWave(customWave);
    return oscillator;
  }

  function connectOscillator() {
    let nodes = [audioCtx.destination, distortion, reverb];
    for (let node of nodes) oscillator.connect(node);
  }

  function makeDistortion(amt) {
    distortion = audioCtx.createWaveShaper();
    distortion.connect(audioCtx.destination);
    oscillator.connect(distortion);
    distortion.oversample = "4x";
    distortion.curve = makeDistortionCurve(amt);
    return distortion;
  }

  function makeDistortionCurve(amount) {
    let k = typeof amount === "number" ? amount : 50,
      n_samples = 44100,
      curve = new Float32Array(n_samples),
      deg = Math.PI / 180,
      i = 0,
      x;
    for (; i < n_samples; ++i) {
      x = (i * 2) / n_samples - 1;
      curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
    }
    return curve;
  }

  function addDistortionRange() {
    let distRange = document.createElement("input");
    setAttributes(distRange, {
      id: "distRange",
      type: "range",
      name: "distortion",
      min: 0,
      max: 1000,
      step: 1,
    });

    distRange.oninput = () => {
      makeDistortion(distRange.value);
    };

    return addLabel(distRange);
  }

  function addReverbButtons() {
    const reverbs = [
      "Bottle Hall",
      "Deep Space",
      "Going Home",
      "In The Silo",
      "Masonic Lodge",
      "Nice Drum Room",
      "On a Star",
      "Parking Garage",
      "Rays",
      "Vocal Duo",
    ];
    let ul = document.createElement("ul");
    setAttributes(ul, { id: "reverbButtons", class: "reverbButtons" });

    for (let reverb of reverbs) {
      let li = document.createElement("li");
      setAttributes(li, { id: reverb.replace(/\s/g, ""), class: "reverb" });
      li.innerHTML = reverb;

      li.onclick = () => {
        connectReverb(reverb);
        markReverbSelected(li);
      };
      ul.append(li);
    }

    let fragment = document.createDocumentFragment();
    fragment.append(ul);
    ul.insertAdjacentHTML("beforebegin", '<h1 id="reverbTitle">Reverb</h1>');

    return fragment;
  }

  async function connectReverb(sound) {
    const reverbFolder = "https://stereo-fidelity.s3.amazonaws.com/reverb/";
    async function createReverb() {
      let convolver = audioCtx.createConvolver();
      let response = await fetch(
        `${proxyUrl}${reverbFolder}${sound.replace(/\s/g, "+")}.wav`
      );
      let arrayBuffer = await response.arrayBuffer();
      convolver.buffer = await audioCtx.decodeAudioData(arrayBuffer);

      return convolver;
    }
    reverb = await createReverb();
    oscillator.connect(reverb);
    reverb.connect(audioCtx.destination);
  }

  function markReverbSelected(rev) {
    if (!document.getElementsByClassName("reverb")) return;
    let reverbs = document.getElementsByClassName("reverb");
    for (let reverb of reverbs) {
      if (reverb.classList.contains("selected")) {
        reverb.classList.remove("selected");
      }
    }
    rev.classList.add("selected");
  }
};
