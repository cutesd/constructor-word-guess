/*
index.js: The file containing the logic for the course of the game, which depends on Word.js and:

Randomly selects a word and uses the Word constructor to store it
Prompts the user for each guess and keeps track of the user's remaining guesses
*/

var Word = require("./word.js");
var inquirer = require("inquirer");

//
var qCnt = 10;
var word;
var word_arr = ['south dakota', 'alabama', 'mississippi', 'california', 'nevada'];
var guesses;
//
startGame();

function startGame() {
    qCnt = 10;
    guesses = [];
    var rnd = Math.floor(Math.random() * word_arr.length);
    // trace("word choice:", word_arr[rnd]);
    word = new Word(word_arr[rnd]);
    word_arr.splice(rnd, 1);
    // trace(word_arr);
    //
    word.display()
    trace('');
    prompt();
}

// 
function prompt() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Guess a letter!",
                name: "letter"
            }
        ])
        .then(response => {
            // 
            if (guesses.indexOf(response.letter) === -1) {
                guesses.push(response.letter);
                if (word.check(response.letter)) correct();
                else incorrect();
            } else {
                trace("\nYou already guessed that letter.  Please guess again.\n");
                prompt();
            }
        });
}

function correct() {
    word.display();
    trace("\nCORRECT!!!\n");
    if (word.done) {
        if (word_arr.length > 0) {
            trace("You got it right!! Next word!\n");
            startGame();
        } else {
            trace("Congratulations! You guessed all the words!!");
        }
    } else {
        prompt();
    }
}

function incorrect() {
    word.display();
    trace("\nINCORRECT!!!\n");
    trace(--qCnt, "guesses remaining!!!\n");
    if (qCnt === 0) {
        trace("You're out of guesses.\n");
        playAgain();
    } else {
        prompt();
    }
}

function playAgain() {
    inquirer
        .prompt([
            {
                type: "confirm",
                message: "Would you like to play again?",
                name: "confirm",
                default: true
            }
        ])
        .then(response => {
            // 
            if (response.confirm) {
                startGame();
            }
        });
}

function trace(...args) {
    console.log(args.join(' '));
}
