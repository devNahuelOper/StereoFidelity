// function startGame(song, ctx) {
//   const effects = document.getElementsByClassName("effects")[0];
//   const sounds = effects.querySelectorAll("audio");
//   const images = effects.querySelectorAll("img");
//   const trippleImages = [...images, ...images, ...images];
//   const tracks = document.getElementsByClassName("tracks")[0];
//   const songs = tracks.querySelectorAll("audio");
  
//   let AudioContext = window.AudioContext || window.webkitAudioContext;
//   this.ctx = new AudioContext();

//   lowerVolume(...sounds);
//   let start = Date.now();

//   let audioSrc = ctx.createMediaElementSource(song);
//   audioSrc.connect(ctx.destination);

//   let processor = ctx.createScriptProcessor(1024);
//   let analyser = ctx.createAnalyser();
//   processor.connect(ctx.destination);
//   analyser.connect(processor);

//   let data = new Uint8Array(analyser.frequencyBinCount);
//   audioSrc.connect(processor);
// }

// function lowerVolume(...soundArgs) {
//   for (let sound of soundArgs) sound.volume = 0.3;
// }
