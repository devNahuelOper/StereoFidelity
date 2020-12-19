export function addMoreTracks(tracks) {
  const url = "https://denizen-confidant-seeds.s3.amazonaws.com/songs/";
  const songs = ["404", "Atmosphere", "Breaking The Habit (Linkin Park Cover)"];
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
    });
  }

  function makeControls(song) {
    const ctrl = document.createElement("div");
    ctrl.className = "playerControls";

    const buttons = {
      play: { src: "dist/images/play-button.png", action: song.play() },
      pause: {
        src: "dist/images/pause-button.png",
        action: song.pause(),
      },
      stop: {
        src: "dist/images/stop-button.png",
        action: (song.currentTime = 0),
      },
      rewind: {
        src: "dist/images/rewind.png",
        action: (song.currentTime -= 5),
      },
      forward: {
        src: "dist/images/forward.png",
        action: (song.currentTime += 5),
      },
    };

    for (let btn in buttons) {
      let img = document.createElement("img");
      img.id = btn;
      img.src = buttons[btn].src;
      // img.onclick = () => buttons[btn].action;
      img.onclick = console.log(buttons[btn].action);
      ctrl.append(img);
    }

    return ctrl;
  }

  function makeSong(url, song) {
    let audio = document.createElement("audio");
    // audio.controls = true;
    audio.src = url;
    audio.id = song.split(" ")[0].toLowerCase();
    return audio;
  }

  function makeSongTitle(song) {
    let span = document.createElement("span");
    span.innerHTML = song;
    span.className = "songTitle";
    return span;
  }

  createSongs();
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
