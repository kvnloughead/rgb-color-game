Step by Step (corresponding to commits)



1. Added 2x3 grid of purple squares
2. Added an h1 and centered the grid of squares
3. Added different colors (not random) to squares
4. Changes include
    - Added `colorToGuess` [hardcoded] and `colorToGuessDisplay`
    - Added click listeners to each square
    - Added basic game logic 
        - squares disappear on incorrect clicks
        - all squares turn `colorToGuess` on correct click
        - appearance of 'Try Again' and 'Correct!' messages
5. Changes include 
    - Added a README
    - slight refactoring (function `changeColors`) 
    - randomized `colorToGuess` (function `pickColor`)
6. Changes include
    - Added functions `generateRandomColors` and `randomRGB` to make the squares load as random colors each time
    - Added `reset.addEventListener`
    - Tweaked some display settings
7. Work in this commit probably diverges from Colt's implementation, I did the javascript myself.  Changes:
    - Added easy and hard buttons
    - App hides bottom row when set on Easy
    - Winning color only comes from the visible row when on easy

8. Mostly working on CSS now
    - Improved banner styling
    - Improved ribbon/button styling
    - Struggled to figure out why a slight border is appearing around the buttons after they are selected.  Stopped struggling.
    - Bevelled edges on squares
    - Included transition delays on buttons and squares
    - Tried to prevent square transitions on page load unsuccessfully.  Decided I liked it that way anyway.

9. Changes
    - Fixed the button outline issue with `outline: none;`.  Didn't know that was a thing.
    - Refactored game mode buttons

10. 

