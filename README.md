# Stereo Fidelity
A frenetic, rhythmic game of Whack-a-Mole!

[Stereo Fidelity]( https://devnahueloper.github.io/StereoFidelity/)

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
             image.style.animation = 'flicker 0.5s infinite alternate';
             image.style.transform = 'scale3d(1.7, 1.7, 1.7)';
           } else {
             image.style.animation = 'none';
             image.style.transform = 'none';
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
              score.innerHTML = `Sounds Cleared: ${103 - iconsLeft}`;
            }
          })
    ```
    
  * At song end, score is given based on how many icons cleared + bonus points for efficiency.
    <img src="https://user-images.githubusercontent.com/16979527/97318666-7bde3380-1842-11eb-8ce0-e7be1de062c6.png" width="50%" height="50%">
    
* FREESTYLE MODE
  * Just go bananas trying out all 100 sound effects, maybe turning them into music!


# Wireframes

![image](https://user-images.githubusercontent.com/16979527/86948605-5e624e00-c11b-11ea-867c-3e8e6f2967b4.png)

https://wireframe.cc/g73kLP

# Architecture and Technologies
* Javascript
* DOM Structure and Manipulation
* Web Audio API
* HTML
* CSS/Scss
