
export function addMoreTracks(tracks) {
  const url = "https://denizen-confidant-seeds.s3.amazonaws.com/songs/";
  const songs = ["404", "Atmosphere", "Breaking The Habit (Linkin Park Cover)"];
  const links = songs.map(song => `${url}${song.replace(/\s/g, "+")}.mp3`);
  
  function createSongs() {
    links.forEach((link, i) => {
      let article = document.createElement('article');
      article.className = "track";
      let songTitle = makeSongTitle(songs[i]);
      let song = makeSong(link, songs[i]);
      article.append(songTitle, song);
      tracks.appendChild(article);
    });
  }

  function makeSong(url, song) {
     let audio = document.createElement("audio");
     audio.controls = true;
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