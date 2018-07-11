/*
index.js: The file containing the logic for the course of the game, which depends on Word.js and:

Randomly selects a word and uses the Word constructor to store it
Prompts the user for each guess and keeps track of the user's remaining guesses
*/

var Word = require("./word.js").Word;
var inquirer = require("inquirer");

//
var qCnt = 10;
var word;
var word_arr = ['alabama','mississippi','california','nevada']

//
var word = new Word();
// word.ready();
word.setWord("mississippi");
console.log(word.display());
word.check('i');
console.log(word.display());
word.check('m');
console.log(word.display());
word.check('s');
console.log(word.display());
