


function piano() {
  let audioContext = new (window.AudioContext || window.webkitAudioContext)();
  let oscList = [];
  let masterGainNode = null;
  let keyboard = document.querySelector(".keyboard");
  let wavePicker = document.querySelector("select[name='waveform']");
  let volumeControl = document.querySelector("input[name='volume']");
  let noteFreq = null;
  let customWaveform = null;
  let sineTerms = null;
  let cosineTerms = null;


  function createNoteTable() {
    let noteFreq = [];
    for (let i = 0; i < 9; i++) {
      noteFreq[i] = [];
    }

    noteFreq[0]["A"] = 27.500000000000000;
    noteFreq[0]["A#"] = 29.135235094880619;
    noteFreq[0]["B"] = 30.867706328507756;

    noteFreq[1]["C"] = 32.703195662574829;
    noteFreq[1]["C#"] = 34.647828872109012;
    noteFreq[1]["D"] = 36.708095989675945;
    noteFreq[1]["D#"] = 38.890872965260113;
    noteFreq[1]["E"] = 41.203444614108741;
    noteFreq[1]["F"] = 43.653528929125485;
    noteFreq[1]["F#"] = 46.249302838954299;
    noteFreq[1]["G"] = 48.999429497718661;
    noteFreq[1]["G#"] = 51.913087197493142;
    noteFreq[1]["A"] = 55.000000000000000;
    noteFreq[1]["A#"] = 58.270470189761239;
    noteFreq[1]["B"] = 61.735412657015513;

    noteFreq[2]["C"] = 65.40639;
    noteFreq[2]["C#"] = 69.29566;
    noteFreq[2]["D"] = 73.41619;
    noteFreq[2]["D#"] = 77.78175;
    noteFreq[2]["E"] = 82.40689;
    noteFreq[2]["F"] = 87.30706;
    noteFreq[2]["F#"] = 92.49861;
    noteFreq[2]["G"] = 97.99886;
    noteFreq[2]["G#"] = 103.8262;
    noteFreq[2]["A"] = 110.0000;
    noteFreq[2]["A#"] = 116.5409;
    noteFreq[2]["B"] = 123.4708;

    noteFreq[7]["C"] = 2093.004522404789077;
    noteFreq[7]["C#"] = 2217.461047814976769;
    noteFreq[7]["D"] = 2349.318143339260482;
    noteFreq[7]["D#"] = 2489.015869776647285;
    noteFreq[7]["E"] = 2637.020455302959437;
    noteFreq[7]["F"] = 2793.825851464031075;
    noteFreq[7]["F#"] = 2959.955381693075191;
    noteFreq[7]["G"] = 3135.963487853994352;
    noteFreq[7]["G#"] = 3322.437580639561108;
    noteFreq[7]["A"] = 3520.000000000000000;
    noteFreq[7]["A#"] = 3729.310092144719331;
    noteFreq[7]["B"] = 3951.066410048992894;

    noteFreq[8]["C"] = 4186.009044809578154;
    return noteFreq;
  }

  function setup() {
    noteFreq = createNoteTable();

    volumeControl.addEventListener("change", changeVolume, false);

    masterGainNode = audioContext.createGain();
    masterGainNode.connect(audioContext.destination);
    masterGainNode.gain.value = volumeControl.value;

    noteFreq.forEach(function (keys, idx) {
      let keyList = Object.entries(keys);
      let octaveElem = document.createElement("div");
      octaveElem.className = "octave";

      keyList.forEach(function (key) {
        if (key[0].length <= 2) {
          octaveElem.appendChild(createKey(key[0], idx, key[1]));
        }
      });

      keyboard.appendChild(octaveElem);
    });

    document.querySelector("div[data-note='B'][data-octave='1']").scrollIntoView(false);

    sineTerms = new Float32Array([0, 0, 1, 0, 1]);
    cosineTerms = new Float32Array(sineTerms.length);
    customWaveform = audioContext.createPeriodicWave(cosineTerms, sineTerms);

    for (let i = 0; i < 9; i++) {
      oscList[i] = [];
    }
  }

  setup();

  function createKey(note, octave, freq) {
    let keyElement = document.createElement("div");
    let labelElement = document.createElement("div");

    keyElement.className = "key";
    keyElement.dataset["octave"] = octave;
    keyElement.dataset["note"] = note;
    keyElement.dataset["frequency"] = freq;

    labelElement.innerHTML = note + "<sub>" + octave + "</sub>";
    keyElement.appendChild(labelElement);

    keyElement.addEventListener("mousedown", notePressed, false);
    keyElement.addEventListener("mouseup", noteReleased, false);
    keyElement.addEventListener("mouseover", notePressed, false);
    keyElement.addEventListener("mouseleave", noteReleased, false);

    return keyElement;
  }

  function playTone(freq) {
    let osc = audioContext.createOscillator();
    osc.connect(masterGainNode);

    let type = wavePicker.options[wavePicker.selectedIndex].value;

    if (type == "custom") {
      osc.setPeriodicWave(customWaveform);
    } else {
      osc.type = type;
    }

    osc.frequency.value = freq;
    osc.play();

    return osc;
  }

  function notePressed(event) {
    if (event.buttons & 1) {
      let dataset = event.target.dataset;

      if (!dataset["pressed"]) {
        oscList[dataset["octave"][dataset["note"]]] = playTone(dataset["frequency"]);
        dataset["pressed"] = "yes";
      }
    }
  }

  function noteReleased(event) {
    let dataset = event.target.dataset;

    if (dataset && dataset["pressed"]) {
      oscList[dataset["octave"][dataset["note"]]].stop();
      oscList[dataset["octave"][dataset["note"]]] = null;
      delete dataset["pressed"];
    }
  }

  function changeVolume(event) {
    masterGainNode.gain.value = volumeControl.value
  }
}

export default piano;