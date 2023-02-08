function toggleBackgrounds() {
  const backgrounds = [
    "src/assets/images/headphones.jpg",
    "src/assets/images/face.jpg",
    "src/assets/images/waves.jpg",
    "src/assets/images/deadmau5.jpg",
    "src/assets/images/buttons.jpg",
    "src/assets/images/turntable.png",
    "src/assets/images/mixing.jpg",
  ];

  function randomBg() {
    let num = Math.floor(Math.random(backgrounds) * backgrounds.length);
    document.body.style.backgroundImage = "url('" + backgrounds[num] + "')";
  }

  const bgtoggle = document.getElementById("bgtoggle");
  const [bgcontainer] = document.getElementsByClassName("bgtoggle-container");

  bgtoggle.onclick = function () {
    randomBg();
  };

  function showBackgrounds() {
    let ul = document.createElement("ul");
    ul.className = "bg-list";

    for (let bg of backgrounds) {
      let li = document.createElement("li");
      let img = document.createElement("img");
      img.src = bg;
      li.append(img);
      ul.append(li);

      img.onclick = function () {
        document.body.style.backgroundImage = "url('" + bg + "')";
      };
    }
    return ul;
  }

  let bglist;
  bgtoggle.onpointerover = function () {
    if (bglist) return;
    bglist = showBackgrounds();
    bgcontainer.append(bglist);
    bglist.scrollIntoView();
  };

  bgcontainer.onpointerout = function (event) {
    let target = event.relatedTarget;
    let inContainer = bgcontainer.contains(target);

    if (bglist && !inContainer) {
      bglist.remove();
      bglist = null;
    }
  };
}

export default toggleBackgrounds;
