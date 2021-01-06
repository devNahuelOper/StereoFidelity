// export const makeOscillator = (audioCtx) => {
//   let oscillator = audioCtx.createOscillator();

//   let sineTerms = new Float32Array([0, 0, 1, 0, 1]);
//   let cosineTerms = new Float32Array(sineTerms.length);
//   let customWave = audioCtx.createPeriodicWave(cosineTerms, sineTerms);
//   oscillator.setPeriodicWave(customWave);
//   oscillator.start();
//   return oscillator;
// };

// export const connectOscillator = (e, audioCtx, oscillator, distortion, reverb) => {
//   oscillator.connect(audioCtx.destination);
//   oscillator.connect(distortion);
//   oscillator.connect(reverb);
//   e.currentTarget.onmouseover = null;
// }

//   kbContainer.addEventListener("mouseover", () => {
//       oscillator.connect(audioCtx.destination);
//       oscillator.connect(distortion);
//       oscillator.connect(reverb);
//       kbContainer.onmouseover = null;
//     });
// import Distortion from "./distortion";

let sineTerms = new Float32Array([0, 0, 1, 0, 1]);
let cosineTerms = new Float32Array(sineTerms.length);

export default class Oscillator {
  constructor(context) {
    this.context = context;
    this.playing = false;
  }

  init() {
    this.oscillator = this.context.createOscillator();
    this.gainNode = this.context.createGain();
    this.customWave = this.context.createPeriodicWave(cosineTerms, sineTerms);
    // this.distortion = new Distortion(this.context);
   
    // this.oscillator.connect(this.distortion.distortion);
    // this.distortion.connect(this.context.destination);
    this.oscillator.connect(this.gainNode);
    this.gainNode.connect(this.context.destination);
    this.oscillator.setPeriodicWave(this.customWave);
  }

  play(value) {
    if (this.playing) this.stop(this.context.currentTime);
    this.init();

    this.oscillator.frequency.setValueAtTime(value, this.context.currentTime);
    this.gainNode.gain.setValueAtTime(1, this.context.currentTime);

    this.oscillator.start();
    this.playing = true;
  }

  stop() {
    this.gainNode.gain.exponentialRampToValueAtTime(
      0.001,
      this.context.currentTime + 1
    );
    this.oscillator.stop(this.context.currentTime);
  }

  connectNode(node) {
    this.oscillator.connect(node);
  }

  // disconnect() {
  //   this.oscillator.disconnect();
  // }
}


