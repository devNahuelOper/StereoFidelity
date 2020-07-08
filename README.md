# Stereo Fidelity
A frenetic, rhythmic game of Whack-a-Mole!

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
  * Hover over any icons on board that match frame (matches are highlighted) to clear them off the board.
    <img src="https://user-images.githubusercontent.com/16979527/86932974-079f4900-c108-11ea-89ea-231c3587aaf4.png" width="50%" height="70%">
  * Correct hover = playbackRate decrease, Incorrect hover = playbackRate increase.
    <img src="https://user-images.githubusercontent.com/16979527/86935172-885f4480-c10a-11ea-8421-572905e62f7a.png" width="475" height="200">
  * Game concludes when song ends. Score is based on how many icons cleared + bonus points for efficiency.
    <img src="https://user-images.githubusercontent.com/16979527/86939681-e04c7a00-c10f-11ea-80cf-a7a1b10efa97.png" width="50%" height="50%">

* FREESTYLE MODE
  * Just go bananas trying out all 100 sound effects, maybe turning them into music!


# Wireframes

![image](https://user-images.githubusercontent.com/16979527/86948605-5e624e00-c11b-11ea-867c-3e8e6f2967b4.png)

https://wireframe.cc/g73kLP

# Architecture and Technologies
* Javascript
* Vanilla JS DOM Manipulation
* Web Audio API
* HTML
* CSS
