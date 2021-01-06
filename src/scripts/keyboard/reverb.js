import { setAttributes, proxyUrl } from "../util";

const getReverb = (audioCtx, oscillator, reverb) => {
  const addReverbButtons = () => {
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
   console.log(`Oscillator: ${oscillator}`);
  }
  
  const markReverbSelected = (rev) => {
    if (!document.getElementsByClassName("reverb")) return;
    let reverbs = document.getElementsByClassName("reverb");
    for (let reverb of reverbs) {
      if (reverb.classList.contains("selected")) {
        reverb.classList.remove("selected");
      }
    }
    rev.classList.add("selected");
  }

 
  return {
    buttons: addReverbButtons(),
    reverb,
  };
}


export default getReverb;