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

    // noteFreq[0] = 27.5;
    // noteFreq[1] = 29.135235094880619;
    // noteFreq[2] = 30.867706328507756;
    // noteFreq[3] = 32.703195662574829;
    // noteFreq[4] = 34.647828872109012;
    // noteFreq[5] = 36.708095989675945;
    // noteFreq[6] = 38.890872965260113;
    // noteFreq[7] = 41.203444614108741;
    // noteFreq[8] = 43.653528929125485;
    // noteFreq[9] = 46.249302838954299;
    // noteFreq[10] = 48.999429497718661;
    // noteFreq[11] = 51.913087197493142;
    // noteFreq[12] = 55.0;
    // noteFreq[13] = 58.270470189761239;
    // noteFreq[14] = 61.735412657015513;
    // noteFreq[15] = 65.40639;
    // noteFreq[16] = 69.29566;
    // noteFreq[17] = 73.41619;
    // noteFreq[18] = 77.78175;
    // noteFreq[19] = 82.40689;
    // noteFreq[20] = 87.30706;
    // noteFreq[21] = 92.49861;
    // noteFreq[22] = 97.99886;
    // noteFreq[23] = 103.8262;
    //  noteFreq[24] = 110.0;
    //  noteFreq[25] = 116.5409;
    //  noteFreq[26] = 123.4708;
    // noteFreq[27] = 130.8128;
    // noteFreq[28] = 138.5913;
    // noteFreq[29] = 146.8324;
    // noteFreq[30] = 155.5635;
    // noteFreq[31] = 164.8138;
    // noteFreq[32] = 174.6141;
    // noteFreq[33] = 184.9972;
    // noteFreq[34] = 195.9977;
    // noteFreq[35] = 207.6523;
    // noteFreq[36] = 220.0;
    // noteFreq[37] = 233.0819;
    // noteFreq[38] = 246.9417;
    // noteFreq[39] = 261.6256;
    // noteFreq[40] = 277.1826;
    // noteFreq[41] = 293.6648;
    // noteFreq[42] = 311.127;
    // noteFreq[43] = 329.6276;
    // noteFreq[44] = 349.2282;
    // noteFreq[45] = 369.9944;
    // noteFreq[46] = 391.9954;
    // noteFreq[47] = 415.3047;
    // noteFreq[48] = 440.0;
    // noteFreq[49] = 466.1638;
    // noteFreq[50] = 493.8833;
    // noteFreq[51] = 523.2511;
    // noteFreq[52] = 554.3653;
    // noteFreq[53] = 587.3295;
    // noteFreq[54] = 622.254;
    // noteFreq[55] = 659.2551;
    // noteFreq[56] = 698.4565;
    // noteFreq[57] = 739.9888;
    // noteFreq[58] = 783.9909;
    // noteFreq[59] = 830.6094;
    // noteFreq[60] = 880.0;
    // noteFreq[61] = 932.3275;
    // noteFreq[62] = 987.7666;
    // noteFreq[63] = 1046.502;
    // noteFreq[64] = 1108.731;
    // noteFreq[65] = 1174.659;
    // noteFreq[66] = 1244.508;
    // noteFreq[67] = 1318.51;
    // noteFreq[68] = 1396.913;
    // noteFreq[69] = 1479.978;
    // noteFreq[70] = 1567.982;
    // noteFreq[71] = 1661.219;
    // noteFreq[72] = 1760.0;
    // noteFreq[73] = 1864.655;
    // noteFreq[74] = 1975.533;
    // noteFreq[75] = 2093.004522404789077;
    // noteFreq[76] = 2217.461047814976769;
    // noteFreq[77] = 2349.318143339260482;
    // noteFreq[78] = 2489.015869776647285;
    // noteFreq[79] = 2637.020455302959437;
    // noteFreq[80] = 2793.825851464031075;
    // noteFreq[81] = 2959.955381693075191;
    // noteFreq[82] = 3135.963487853994352;
    // noteFreq[83] = 3322.437580639561108;
    // noteFreq[84] = 3520.0;
    // noteFreq[85] = 3729.310092144719331;
    // noteFreq[86] = 3951.066410048992894;
    // noteFreq[87] = 4186.009044809578154;
    // noteFreq[88] = 4434.922;
    // noteFreq[89] = 4698.636;
    // noteFreq[90] = 4978.032;
    // noteFreq[91] = 5274.041;
    // noteFreq[92] = 5587.652;
    // noteFreq[93] = 5919.911;
    // noteFreq[94] = 6271.927;
    // noteFreq[95] = 6644.875;
    // noteFreq[96] = 7040.0;
    // noteFreq[97] = 7458.62;
    // noteFreq[98] = 7902.133;

    // freqs = setInterval(() => {
    //   f(noteFreq[i % noteFreq.length]);
    //   i++;
    // }, 1000);
    {
      noteFreq[0]["A"] = 27.5;
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
      noteFreq[1]["A"] = 55.0;
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
      noteFreq[2]["A"] = 110.0;
      noteFreq[2]["A#"] = 116.5409;
      noteFreq[2]["B"] = 123.4708;

      noteFreq[3]["C"] = 130.8128;
      noteFreq[3]["C#"] = 138.5913;
      noteFreq[3]["D"] = 146.8324;
      noteFreq[3]["D#"] = 155.5635;
      noteFreq[3]["E"] = 164.8138;
      noteFreq[3]["F"] = 174.6141;
      noteFreq[3]["F#"] = 184.9972;
      noteFreq[3]["G"] = 195.9977;
      noteFreq[3]["G#"] = 207.6523;
      noteFreq[3]["A"] = 220.0;
      noteFreq[3]["A#"] = 233.0819;
      noteFreq[3]["B"] = 246.9417;

      noteFreq[4]["C"] = 261.6256;
      noteFreq[4]["C#"] = 277.1826;
      noteFreq[4]["D"] = 293.6648;
      noteFreq[4]["D#"] = 311.127;
      noteFreq[4]["E"] = 329.6276;
      noteFreq[4]["F"] = 349.2282;
      noteFreq[4]["F#"] = 369.9944;
      noteFreq[4]["G"] = 391.9954;
      noteFreq[4]["G#"] = 415.3047;
      noteFreq[4]["A"] = 440.0;
      noteFreq[4]["A#"] = 466.1638;
      noteFreq[4]["B"] = 493.8833;

      noteFreq[5]["C"] = 523.2511;
      noteFreq[5]["C#"] = 554.3653;
      noteFreq[5]["D"] = 587.3295;
      noteFreq[5]["D#"] = 622.254;
      noteFreq[5]["E"] = 659.2551;
      noteFreq[5]["F"] = 698.4565;
      noteFreq[5]["F#"] = 739.9888;
      noteFreq[5]["G"] = 783.9909;
      noteFreq[5]["G#"] = 830.6094;
      noteFreq[5]["A"] = 880.0;
      noteFreq[5]["A#"] = 932.3275;
      noteFreq[5]["B"] = 987.7666;

      noteFreq[6]["C"] = 1046.502;
      noteFreq[6]["C#"] = 1108.731;
      noteFreq[6]["D"] = 1174.659;
      noteFreq[6]["D#"] = 1244.508;
      noteFreq[6]["E"] = 1318.51;
      noteFreq[6]["F"] = 1396.913;
      noteFreq[6]["F#"] = 1479.978;
      noteFreq[6]["G"] = 1567.982;
      noteFreq[6]["G#"] = 1661.219;
      noteFreq[6]["A"] = 1760.0;
      noteFreq[6]["A#"] = 1864.655;
      noteFreq[6]["B"] = 1975.533;
  
      noteFreq[7]["C"] = 2093.004522404789077;
      noteFreq[7]["C#"] = 2217.461047814976769;
      noteFreq[7]["D"] = 2349.318143339260482;
      noteFreq[7]["D#"] = 2489.015869776647285;
      noteFreq[7]["E"] = 2637.020455302959437;
      noteFreq[7]["F"] = 2793.825851464031075;
      noteFreq[7]["F#"] = 2959.955381693075191;
      noteFreq[7]["G"] = 3135.963487853994352;
      noteFreq[7]["G#"] = 3322.437580639561108;
      noteFreq[7]["A"] = 3520.0;
      noteFreq[7]["A#"] = 3729.310092144719331;
      noteFreq[7]["B"] = 3951.066410048992894;
    }


    noteFreq[8]["C"] = 4186.009044809578154;
    noteFreq[8]["C#"] = 4434.922;
    noteFreq[8]["D"] = 4698.636;
    noteFreq[8]["D#"] = 4978.032;
    noteFreq[8]["E"] = 5274.041;
    noteFreq[8]["F"] = 5587.652;
    noteFreq[8]["F#"] = 5919.911;
    noteFreq[8]["G"] = 6271.927;
    noteFreq[8]["G#"] = 6644.875;
    noteFreq[8]["A"] = 7040.0;
    noteFreq[8]["A#"] = 7458.62;
    noteFreq[8]["B"] = 7902.133;
    
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

    document
      .querySelector("div[data-note='B'][data-octave='1']")
      .scrollIntoView(false);

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
        oscList[dataset["octave"][dataset["note"]]] = playTone(
          dataset["frequency"]
        );
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
    masterGainNode.gain.value = volumeControl.value;
  }
}

export default piano;
