# Chaos And Fractals
This repository is going to be a place for projects I have worked/am working on. Projects will include concepts and ideas that relate to the chaotic world of fractals, inspirations for this ongoing open collection of projects include Dan Shiffman's Nature of Code, and Chaos and Fractals: An Elementary Introduction by David P. Feldman (both linked below). 

**Contents**
1. Chaos Game, written in Javascript. 
2. Regular n-gon generator (not really a project, just written to test a function for Chaos Game).

*** 

## Chaos Game
This is my version of Chaos Game written in Javascript using the p5js and dom libraries. 

**[[Demo](http://melvidge.com/chaos_game/)]**

# How to use:
* There are two textboxes: one for the number of vertices in the n-gon to bound the algorithm and another for the ratio (the distance travelled from the current position to the target).
* The generate button uses the two textbox inputs to run the Chaos Game algorithm. The program doesn't currently have error prevention so please inputs are of a valid datatype.
* There are 3 buttons which will draw some default examples using preset parameters.
* The program performs an iteration of depth 20 every frame to provide a fast visualisation of the algorithm working.

***

# References
* About Chaos Game: https://en.wikipedia.org/wiki/Chaos_game
* Daniel Shiffman: http://shiffman.net
* Chaos and Fractals: An Elementary Introduction: David P. Feldman: https://www.amazon.co.uk/d/Books/Chaos-Fractals-Elementary-Introduction-David-P-Feldman/0199566445
