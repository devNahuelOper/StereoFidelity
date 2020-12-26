import { setAttributes } from "./util";
// import { startGame, endGame } from "./game";

export function addMoreTracks(tracks) {
  const url = "https://denizen-confidant-seeds.s3.amazonaws.com/songs/";
  const songs = [
    "Millenium Bug",
    "404",
    "Atmosphere",
    "On Off",
    "Breaking The Habit (Linkin Park Cover)",
    "LIVID",
    "The Drop",
  ];
  const links = songs.map((song) => `${url}${song.replace(/\s/g, "+")}.mp3`);

  function createSongs() {
    links.forEach((link, i) => {
      let article = document.createElement("article");
      article.className = "track";

      let songTitle = makeSongTitle(songs[i]);
      let song = makeSong(link, songs[i]);
      let controls = makeControls(song);

      article.append(songTitle, song, controls);
      tracks.appendChild(article);

      // let [sounds, images] = [
      //   document.querySelectorAll(".effects audio"),
      //   document.querySelectorAll(".effects img"),
      // ];

      // song.addEventListener("playing", () => startGame(
      //     song,
      //     sounds,
      //     document.querySelector(".effects"),
      //     ctx,
      //     images,
      //     [...images, ...images, ...images]
      //   ));

      // song.onplay = () =>
      //   startGame(
      //     song,
      //     sounds,
      //     document.querySelector(".effects"),
      //     ctx,
      //     images,
      //     [...images, ...images, ...images]
      //   );

      // song.onended = () =>
      //   endGame(document.querySelector(".effects"), new Date(), tracks.parentElement, song);
    });
  }

  function makeControls(song) {
    const ctrl = document.createElement("div");
    ctrl.className = "playerControls";

    const buttons = {
      play: { src: "dist/images/play-button.png", action: () => song.play() },
      pause: {
        src: "dist/images/pause-button.png",
        action: () => song.pause(),
      },
      stop: {
        src: "dist/images/stop-button.png",
        action: () => (song.currentTime = song.duration),
      },
      rewind: {
        src: "dist/images/rewind.png",
        action: () => (song.currentTime -= 5),
      },
      forward: {
        src: "dist/images/forward.png",
        action: () => (song.currentTime += 5),
      },
    };

    for (let btn in buttons) {
      let img = document.createElement("img");
      img.id = btn;
      img.src = buttons[btn].src;
      img.onclick = buttons[btn].action;
      ctrl.append(img);
    }

    const sliders = () => {
      let fieldset = document.createElement("fieldset");
      fieldset.className = "slider-hold";
      let hr = document.createElement("hr");

      let volume = document.createElement("input");
      let tempo = document.createElement("input");
      volume.type = tempo.type = "range";

      setAttributes(volume, {
        id: "volume-slider",
        title: "Volume",
        min: "0",
        max: "1",
        step: "0.1",
        value: "0.5",
      });
      setAttributes(tempo, {
        id: "tempo-slider",
        title: "Tempo",
        min: "0.1",
        max: "2",
        step: "0.1",
        value: "1",
      });

      volume.oninput = () => (song.volume = volume.value);
      tempo.oninput = () => (song.playbackRate = tempo.value);

      fieldset.append(volume, hr, tempo);
      return fieldset;
    };

    ctrl.append(sliders());

    return ctrl;
  }

  function makeSong(url, song) {
    let audio = document.createElement("audio");
    audio.src = url;
    audio.id = song.split(" ")[0].toLowerCase();
    // audio.crossOrigin = "anonymous";
    return audio;
  }


  function makeSongTitle(song) {
    let span = document.createElement("span");
    span.innerHTML = song.replace(/\(.*\)/, "").trim();
    span.className = "songTitle";
    return span;
  }

  tracks.onscroll = () => {
    createSongs();
    tracks.onscroll = null;
  };
}

export function toggleSecretPlaylist() {
  const playlist = document.getElementById("playlist");
  playlist.hidden = true;

  document.addEventListener("keydown", function (event) {
    if (event.code === "KeyZ" && event.altKey) {
      playlist.hidden = !playlist.hidden;
    }
  });
}

// async function playExternalAudio(path) {
//   let audio = new Audio(path);
//   audio.type = "audio/mp3";

//   try {
//     await audio.play();
//     console.log("Playing...");
//   } catch (err) {
//     console.log(`Failed to play...${err}`);
//   }
// }
