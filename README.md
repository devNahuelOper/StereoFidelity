# Stereo Fidelity
A frenetic, rhythmic game of Whack-a-Mole!

[Stereo Fidelity]( https://devnahueloper.github.io/StereoFidelity/)

![image](https://user-images.githubusercontent.com/16979527/97320976-c365bf00-1844-11eb-89aa-ac8c23acd401.png)

# Overview
Stereo Fidelity started out as a simple, fun and silly sound buffet, where users could play a song and add their own remix by hovering over 100 different sound effects (each represented on the page by an icon). Once I had implemented the two main features of songs and effects, I thought ‘okay, yeah this is pretty fun for 5-10 minutes’…I wanted something more.

My idea was centered around creating audio visualizations of whatever song is playing, using Web Audio API.
Once I successfully obtained the data from the given audio context, I was able to really begin playing with this idea.  
I used some of the images I already had in my project, from the 100 sound effect icons as part of testing how the audio data could render on the page, and that’s when the full idea came to me: I would take any random 3 images from the icons array, have them change to another random 3 onaudioprocess (main event handler for this functionality), and the object of the game would be to hover over any icons in the effects array matching the audio data images (like whack-a-mole).

I then added an extra layer of challenge to the game, by increasing the song’s playback rate by 0.1 on an incorrect hover and decreasing it by 0.7 on a correct one (it’s much easier to get an incorrect one, hence the discrepancy in speed toggling). 
On a correct match, the icon you hovered over also gets removed from the board, and the score is based on how many you can clear before the song ends. 
Bonus points are also acquired for efficiency (calculated using the time played in the round vs the song’s original duration).

# Stereo Fidelity Features
* Choose Game Mode or Freestyle Mode 
* GAME MODE
  * Select a song.
  * Get mouse ready near effect icons, as a 3-image frame appears above board.
    <img src="https://user-images.githubusercontent.com/16979527/86932562-89db3d80-c107-11ea-87cb-886f0d13c3db.png" width="50%" height="50%">
    
  * Hover over any matching icons (matches are highlighted) to clear them off the board.
    <img src="https://user-images.githubusercontent.com/16979527/86932974-079f4900-c108-11ea-89ea-231c3587aaf4.png" width="50%" height="70%">
    
  * Correct hover = playbackRate decrease, Incorrect hover = playbackRate increase.
    
    ``` Javascript
       let iconsLeft = effects.querySelectorAll('img').length;
         const slots = [pic1.src, pic2.src, pic3.src];

         images.forEach(image => {
           if(slots.includes(image.src)) {
             image.classList.remove("imageNoMatch");
             image.classList.add("imageMatch");
           } else {
             image.classList.add("imageNoMatch");
             image.classList.remove("imageMatch");
           }
            image.onmouseenter = function() {
              if (slots.includes(image.src)) {
                effects.removeChild(image);
                if (iconsLeft <= 60) {
                  song.playbackRate -= 0.8;
                }
              } else {
                if (iconsLeft <= 60) {
                  song.playbackRate += 0.1;
                }
              }
              score.innerHTML = `Sounds Cleared: ${100 - iconsLeft}`;
            }
          })
    ```
    
  * At song end, score is given based on how many icons cleared + bonus points for efficiency.
    <img src="https://user-images.githubusercontent.com/16979527/97318666-7bde3380-1842-11eb-8ce0-e7be1de062c6.png" width="50%" height="50%">
    
* FREESTYLE MODE
  * Just go bananas trying out all 100 sound effects, maybe turning them into music!

* Newest Feature -- Shuffle Effects!

![effectShuffle gif](effectShuffle.gif)

  ```Javascript
  function shuffleEffects() {
  
   // Zip helper function -- for grouping all icon + sound pairings.
   function zip(arr1, arr2) {
     let zipped = [];
     if (arr1.length !== arr2.length) return;

     for (let i = 0; i < arr1.length; i++) {
       zipped.push([arr1[i], arr2[i]]);
     }
     return zipped;
   }
   
   // Standard array shuffler
   function shuffle(arr) {
     for (let i = arr.length - 1; i > 0; i--) {
       let j = Math.floor(Math.random() * (i + 1));
       let temp = arr[i];
       arr[i] = arr[j];
       arr[j] = temp;
     }
     return arr;
   }

   function shuffEfx() {
     // Get the current order or icon/sound pairs
     let sounds = effects.querySelectorAll("audio");
     let images = effects.querySelectorAll("img");
     
     // Create zipped current pair order to iterate through
     let zipped = zip(sounds, images);
     // Create shuffled copy of zipped order
     let shuffled = shuffle(zip(sounds, images));
     
     // At each current pair index, replace with shuffled pair at same index
     // All replacements are done with clones, otherwise we'd be cutting the board in half
     for (let i = 0; i < zipped.length; i++) {
       let [aud, img] = [zipped[i][0], zipped[i][1]];
       let [subAud, subImg] = [shuffled[i][0], shuffled[i][1]];
       aud.replaceWith(subAud.cloneNode());
       img.replaceWith(subImg.cloneNode());
     }
     
     // Add a visual touch using setZoom (Web Animations API function made in other file)
     // Stagger setTimeout delay to create front-to-back growing wave effect
     for (let j = 0; j < images.length; j++) {
       let img = effects.querySelectorAll("img")[j];
       setTimeout(() => setZoom(img, 500, 100, 1, "forwards", 1), j * 20);
     }
   }
   
   // Enhance shuffle transition with another wave outside of shuffEfx
   // Stagger setTimeout to create back-to-front shrinking wave effect
   function preWave() {
     let images = effects.querySelectorAll("img");
     for (let i = images.length - 1; i >= 0; i--) {
       setTimeout(() => setZoom(images[i], 500, -200, 1, "backwards", 1), (images.length - i) * 10);
     }
   }
  
   // Allow preWave to complete right before the call to shuffEfx
   preWave();
   setTimeout(() => shuffEfx(), 1500);
  }
  ```

# Wireframes

![image](https://user-images.githubusercontent.com/16979527/86948605-5e624e00-c11b-11ea-867c-3e8e6f2967b4.png)

https://wireframe.cc/g73kLP

# Architecture and Technologies
* Javascript
* DOM Structure and Manipulation
* Web Audio API
* HTML
* CSS/Scss
