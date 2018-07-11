/*
Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:


An array of new Letter objects representing the letters of the underlying word
A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)

*/

var Letter = require("./letter.js").Letter;

console.log("word.js here");

var Word = function () {
    this.ltr_arr = [];

    this.ready = function () {
        console.log('Word is ready');
    }

    this.setWord = function (word) {
        for (var i = 0; i < word.length; i++) {
            this.ltr_arr.push(new Letter(word.charAt(i)));
        }
        console.log(this.ltr_arr);
    }

    this.display = function () {
        var str = '';
        this.ltr_arr.forEach(ltr => {
            str += ltr.display() + " ";
        });
        return str;
    }

    this.check = function (char) {
        this.ltr_arr.forEach(ltr =>{
            ltr.check(char);
        });
    }
}

exports.Word = Word;