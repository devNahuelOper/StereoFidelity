function lowerVolume(...soundArgs) {
  for (let sound of soundArgs) sound.volume = 0.3;
}

export function startGame(song, sounds, effects, ctx, images, trippleImages) {
  lowerVolume(...sounds);
  effects.classList.add("playing");

  let audioSrc = ctx.createMediaElementSource(song);
  audioSrc.connect(ctx.destination);

  let processor = ctx.createScriptProcessor(1024);
  let analyser = ctx.createAnalyser();
  processor.connect(ctx.destination);
  analyser.connect(processor);

  let data = new Uint8Array(analyser.frequencyBinCount);
  audioSrc.connect(analyser);

  const frame = document.createElement("aside");
  frame.id = "gameFrame";

  const pic1 = document.createElement("img");
  const pic2 = document.createElement("img");
  const pic3 = document.createElement("img");

  [pic1, pic2, pic3].forEach((pic) => {
    pic.classList.add("framePic");
    frame.appendChild(pic);
  });

  effects.insertAdjacentElement("beforebegin", frame);
  effects.style.height = "fit-content";

  const score = document.createElement("h1");
  score.id = "score";
  effects.insertAdjacentElement("beforeend", score);

  processor.addEventListener("audioprocess", matchFrame);

  let scrolled = false;

  function matchFrame() {
    if (!scrolled) {
      effects.scrollIntoView();
      scrolled = true;
    }

    analyser.getByteFrequencyData(data);

    let currentImages = effects.querySelectorAll("img");

    try {
      pic1.src = trippleImages[Math.floor(Math.random() * data[0])].src;
      pic2.src = currentImages[Math.round(Math.random() * 100)].src;
      pic3.src = trippleImages[data[0]].src;

      let iconsLeft = currentImages.length;
      const slots = [pic1.src, pic2.src, pic3.src];

      images.forEach((image) => {
        image.classList.add("imageNoMatch");
        if (slots.includes(image.src)) {
          image.classList.remove("imageNoMatch");
          image.classList.add("imageMatch");
        } else {
          image.classList.add("imageNoMatch");
          image.classList.remove("imageMatch");
        }
        image.onmouseenter = function () {
          if (slots.includes(image.src)) {
            image.previousElementSibling.remove();
            image.remove();
            // song.playbackRate -= 1.0;
            if (iconsLeft <= 60) {
              song.playbackRate -= 0.8;
            }
          } else {
            if (iconsLeft <= 60) {
              song.playbackRate += 0.1;
            }
          }
          score.innerHTML = `Sounds Cleared: ${101 - iconsLeft}`;
        };
      });
    } catch (e) {
      return;
    }

    song.addEventListener("ended", () => {
      processor.removeEventListener("audioprocess", matchFrame);
      setTimeout(() => score.remove(), 3000);
    });
  }
}

// function endEarly(song) {
//   song.volume -= 0.3;
//   song.playbackRate += 1;
//   setTimeout(() => (song.currentTime += timeRemaining(song) - 10), 2000);
// }

// const timeRemaining = (song) => song.duration - song.currentTime;

export function endGame(effects, start, tracks, song) {
  let frame = document.getElementById("gameFrame");
  frame.remove();

  let iconsLeft = effects.querySelectorAll("img").length;

  const end = new Date();
  const diff = (end - start) / 1000;

  let bonus;

  const msg = document.createElement("h1");
  msg.className = "msg";
  tracks.insertAdjacentElement("afterend", msg);
  // console.log(`icons left: ${iconsLeft}`);

  if (iconsLeft <= 0) {
    bonus = Math.round(song.duration * diff * (100 - iconsLeft));
    msg.innerHTML = `The Wheel. Electricity. The Automobile. Flight. The Moonlanding. Computers. The Internet.<br/> 
           And now there's YOU, who brings one more entry onto the list of some of mankind’s greatest acheivements.<br/>
           YOU...who cleared ALL <strong>${
             100 - iconsLeft
           }</strong> sounds off the board, and <br/>
           YOU who racked up <strong>${bonus}</strong> bonus points in the process.`;
    msg.classList.add("msg100");
  } else if (iconsLeft <= 15) {
    bonus = Math.round((song.duration - diff) * (100 - iconsLeft));
    msg.innerHTML = `You cleared <strong>${
      100 - iconsLeft
    }</strong> sounds off the board
           like a true baw$$!!<br/> And as if that weren't enough, 
           you got <strong>${bonus}</strong> bonus points for waving your mouse extra maniacally...<br/>Don't let it get to your head now.`;
    msg.classList.add("msg85");
  } else if (iconsLeft <= 30) {
    bonus = Math.round((song.duration / diff) * (100 - iconsLeft));
    msg.innerHTML = `You cleared <strong>${
      100 - iconsLeft
    }</strong> sounds off the board like a maybe soon to be baw$$, not bad.<br/> 
           You got <strong>${bonus}</strong> bonus points for efficiency.`;
    msg.classList.add("msg70");
  } else if (iconsLeft <= 50) {
    bonus = Math.round(song.duration - diff);
    msg.innerHTML = `You cleared <strong>${
      100 - iconsLeft
    }</strong> sound like a true average Joe, just enough to get by.<br/> 
           You get <strong>${bonus}</strong> bonus points for existing.`;
    msg.classList.add("msg50");
  } else if (iconsLeft <= 75) {
    bonus = Math.round(song.duration / diff);
    msg.innerHTML = `Hmm, you only cleared <strong>${
      100 - iconsLeft
    }</strong> sounds...
           You umm, got something on your mind?<br/> 
           eh it could be worse, at least you got a little pocket change.<br/>  
           Here, take these <strong>${bonus}</strong> bonus points and go buy yourself a soup or something.`;
    msg.classList.add("msg25");
  } else {
    bonus = Math.round(diff - song.duration - 10);
    msg.innerHTML = `Whoa whoa whoa...are you a bot? Maybe you saw a mouse and
           you had to go deal with that during the song? <br/> If not, then it might be time for
           some serious self-reflection and ask yourself, <br/> "how much longer do I want to be the
           person who only clears <strong>${
             100 - iconsLeft
           }</strong> sounds off the board"? <br/>
           Well here, take these  <strong>${bonus}</strong> bonus -- oh wait, no, it looks like you owe me points.`;
    msg.classList.add("msg0");
  }

  setTimeout(() => highScoreCheck(bonus), 2000);

  window.addEventListener("click", () => {
    msg.hidden = true;
  });
}

function highScoreCheck(num) {
  if (!localStorage.scores) localStorage.scores = '{"":0," ":0,"  ":0}';

  let scores = JSON.parse(localStorage.scores);
  let entries = Object.entries(scores);

  let i = 0;
  for (let [key, val] of entries) {
    if (num > val) {
      let name = prompt("Enter your name: ");
      name = dupCheck(name, scores);

      entries.splice(i, 0, [name, num]);
      if (entries.length > 3) entries.pop();

      scores = Object.fromEntries(entries);
      localStorage.scores = JSON.stringify(scores);
      break;
    }
    i++;
  }
  showHighScores();
  return localStorage.scores;
}

function dupCheck(name, obj) {
  if (name in obj) name = dupCheck(name + 0, obj);
  return name;
}


const scoresPresent = Boolean(document.getElementsByClassName("highScores")[0]);

function showHighScores() {
  if (scoresPresent) return;

  let scores = JSON.parse(localStorage.scores);

  let ul = document.createElement("ul");
  ul.className = "highScores";
  ul.innerHTML = '<h1 id="scoreHeader">High Scores</h1>';

  let pre = document.createElement("pre");
  pre.innerHTML = "x";
  ul.prepend(pre);
  pre.onclick = () => closeHighScores();

  for (let [name, score] of Object.entries(scores)) {
    if (name.trim()) {
      let li = document.createElement("li");
      li.innerHTML = `<b>${name.replace(/0/g, "")} </b>  ${score}`;
      ul.append(li);
    }
  }

  document.body.append(ul);

  function closeHighScores() {
    ul.classList.add("hs-minimized");
    ul.addEventListener("click", (e) => {
      if (!e.target.contains(pre)) {
        ul.classList.remove("hs-minimized");
      }
    });
  }
}

window.showHighScores = showHighScores;
