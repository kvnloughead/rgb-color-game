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
    - slight refactoring (`function changeColors`) 
    - randomized `colorToGuess` (`function pickColor`)