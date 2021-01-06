import { addLabel, setAttributes } from "../util";

// export const makeDistortionCurve = (amount) => {
//   let k = typeof amount === "number" ? amount : 50,
//     n_samples = 44100,
//     curve = new Float32Array(n_samples),
//     deg = Math.PI / 180,
//     i = 0,
//     x;
//   for (; i < n_samples; ++i) {
//     x = (i * 2) / n_samples - 1;
//     curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
//   }
//   return curve;
// };

// export const addDistortionRange = () => {
//   let distRange = document.createElement("input");
//   setAttributes(distRange, {
//     id: "distRange",
//     type: "range",
//     name: "distortion",
//     min: 0,
//     max: 1000,
//     step: 1,
//   });

//   return addLabel(distRange);
// };

// export const makeDistortion = (distortion, audioCtx, oscillator, amt) => {
//   distortion = audioCtx.createWaveShaper();
//   distortion.connect(audioCtx.destination);
//   oscillator.connect(distortion);
//   distortion.oversample = "4x";
//   distortion.curve = makeDistortionCurve(amt);
//   return distortion;
// };

export default class Distortion {
  constructor(context) {
    this.context = context;
    // this.curve = this.makeCurve(400);
  }

  init() {
    this.distortion = this.context.createWaveShaper();
    this.oversample = "4x";
    // this.curve = this.makeCurve(400);
    // this.oscillator.oscillator.connect(this.distortion);
    this.distortion.connect(this.context.destination);
  }

  makeCurve(amount) {
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

    this.curve = curve;
    this.init();
    return curve;
  }

  disconnect() {
    this.distortion.disconnect();
  }

  makeRange() {
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
      this.makeCurve(distRange.value);
    }
    
    return addLabel(distRange);
  }
}
