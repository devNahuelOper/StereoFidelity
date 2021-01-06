// OLD VERSION


import { addLabel, setAttributes, proxyUrl } from "./util";

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

    let notes = [
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "A",
      "A#",
      "B",
    ];

    let noteFreq = [
      16.3516,
      17.32391,
      18.35405,
      19.44544,
      20.60172,
      21.82676,
      23.12465,
      24.49971,
      25.95654,
      27.5,
      29.13523509488062,
      30.867706328507754,
      32.70319566257483,
      34.64782887210901,
      36.70809598967595,
      38.890872965260115,
      41.20344461410874,
      43.653528929125486,
      46.2493028389543,
      48.99942949771866,
      51.91308719749314,
      55,
      58.27047018976124,
      61.735412657015516,
      65.40639,
      69.29566,
      73.41619,
      77.78175,
      82.40689,
      87.30706,
      92.49861,
      97.99886,
      103.8262,
      110,
      116.5409,
      123.4708,
      130.8128,
      138.5913,
      146.8324,
      155.5635,
      164.8138,
      174.6141,
      184.9972,
      195.9977,
      207.6523,
      220,
      233.0819,
      246.9417,
      261.6256,
      277.1826,
      293.6648,
      311.127,
      329.6276,
      349.2282,
      369.9944,
      391.9954,
      415.3047,
      440,
      466.1638,
      493.8833,
      523.2511,
      554.3653,
      587.3295,
      622.254,
      659.2551,
      698.4565,
      739.9888,
      783.9909,
      830.6094,
      880,
      932.3275,
      987.7666,
      1046.502,
      1108.731,
      1174.659,
      1244.508,
      1318.51,
      1396.913,
      1479.978,
      1567.982,
      1661.219,
      1760,
      1864.655,
      1975.533,
      2093.004522404789,
      2217.4610478149766,
      2349.3181433392606,
      2489.0158697766474,
      2637.0204553029594,
      2793.825851464031,
      2959.955381693075,
      3135.963487853994,
      3322.437580639561,
      3520,
      3729.3100921447194,
      3951.066410048993,
      4186.009044809578,
      4434.922,
      4698.636,
      4978.032,
      5274.041,
      5587.652,
      5919.911,
      6271.927,
      6644.875,
      7040,
      7458.62,
      7902.133,
    ];

    let keys = noteFreq.map((freq, i) => {
      let key = {};
      key["note"] = notes[i % notes.length].concat(Math.floor(i / 12));
      key["freq"] = freq;
      return key;
    });

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
      span.addEventListener("mousedown", () => setFreq(key.freq));
      keyboard.append(span);
    }

    kbContainer.append(pianoControls, keyboard);
    document.body.append(kbContainer);

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
      // audioCtx.resume();
      oscillator.connect(audioCtx.destination);
      oscillator.connect(distortion);
      oscillator.connect(reverb);
      kbContainer.onmouseover = null;
    });
    kbContainer.addEventListener("mouseout", () => {
      // audioCtx.suspend();
      oscillator.disconnect();
      kbContainer.onmouseout = null;
    });

    let distRange = addDistortionRange();
    pianoControls.prepend(distRange);

    distRange.oninput = () => {
      makeDistortion(distRange.value);
    };

    let reverbButtons = addReverbButtons();
    pianoControls.append(reverbButtons);
    reverbButtons.insertAdjacentHTML(
      "beforebegin",
      '<h1 id="reverbTitle">Reverb</h1>'
    );

    function setFreq(hz) {
      oscillator.frequency.setValueAtTime(hz, audioCtx.currentTime);
    }

    function playWholes(event) {
      let target = event.target;
      if (!target.classList.contains("whole")) return;
      setFreq(target.dataset["freq"]);
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
    // oscillator.connect(audioCtx.destination);
    return oscillator;
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

    return addLabel(distRange);
  }

  function addReverbButtons() {
    const reverbs = ["Bottle Hall", "Deep Space", "Going Home", "In The Silo", "Masonic Lodge", "Nice Drum Room", "On a Star", "Parking Garage", "Rays", "Vocal Duo"];
    let ul = document.createElement("ul");
    setAttributes(ul, { id: "reverbButtons", class: "reverbButtons"});

    for (let reverb of reverbs) {
      let li = document.createElement("li");
      setAttributes(li, { id: reverb.replace(/\s/g, ""), class: "reverb"});
      li.innerHTML = reverb;

      li.onclick = () =>{ 
        connectReverb(reverb);
        markReverbSelected(li);
      }
      ul.append(li);
    }

    return ul;
  }
  

  async function connectReverb(sound) {
    const reverbFolder = "https://stereo-fidelity.s3.amazonaws.com/reverb/";
    async function createReverb() {
      let convolver = audioCtx.createConvolver();
      let response = await fetch(`${proxyUrl}${reverbFolder}${sound.replace(/\s/g, '+')}.wav`);
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
