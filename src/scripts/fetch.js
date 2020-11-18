

async function fetchPlaylistImages() {
    let track = "https://api.spotify.com/v1/tracks/3n3Ppam7vgaVa1iaRUc9Lp";

    let response = await fetch(track, {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer BQCrT3i0yMAM-l5kFI-QeXtY0dxRQuQKl96Pko7BsDQDF_CPx5idi7ThXDUgDGjZRn3MP3E-okJFbJx8Cgd6Of2zB2_pEvEz9uLhl6bVB5NANVFHEmpzWfsUUsu1QEsINx5vUBcSDc9wcg",
      },
    });

    let song = await response.json();

    function showAlbumImages(music) {
      let div = document.createElement("div");
      div.id = `${music.name.split(" ").join("")}-Frame`;
      let images = music.album.images;

      for (let image of images) {
        let img = document.createElement("img");
        img.src = image.url;
        img.style.width = image.width;
        img.style.height = image.height;
        div.append(img);
      }

      document.body.append(div);
    }

    showAlbumImages(song);
}

export default fetchPlaylistImages;