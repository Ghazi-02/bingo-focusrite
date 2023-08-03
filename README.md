# bingo-focusrite
A guide on making calamari.
## Introduction
This Node.js script allows you to play a simple version of bingo. It can run a game on a single bingo board, or find the fastest bingo board from a set. It's a fun little command-line game that can help you understand more about Node.js and the command-line environment.
## Setup
Clone or download the repository to your local machine.
Navigate to the project directory in your terminal/command line.
Ensure you have the necessary text files in the ./textfiles/ directory.
## How To Use
The game uses text files for input and board data.

First, the script will ask you to provide the name of your input file. This should be a text file located in the ./textfiles/ directory and should contain the list of inputs for the game, each separated by a newline.

Next, the script will ask you to provide the name of your board file(s). If there is more than one file, separate them by commas. Each board file should also be located in the ./textfiles/ directory and should contain the configuration of a bingo board, also separated by newlines.

Input files must have the following format:
```bash
7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1
```
Board files must have the following format:
```bash
3 15 0 2 22
9 18 13 17 5
19 8 7 25 23
20 11 10 24 4
14 21 16 12 6
```
If there's only one board, the game will run and then inform you if you've won or lost. If there's more than one board, the game will determine which board would achieve bingo the fastest and display that board.
