export const makeOscillator = (audioCtx) => {
  let oscillator = audioCtx.createOscillator();

  let sineTerms = new Float32Array([0, 0, 1, 0, 1]);
  let cosineTerms = new Float32Array(sineTerms.length);
  let customWave = audioCtx.createPeriodicWave(cosineTerms, sineTerms);
  oscillator.setPeriodicWave(customWave);
  oscillator.start();
  return oscillator;
};
