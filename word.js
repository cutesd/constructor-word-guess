/*
Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:


An array of new Letter objects representing the letters of the underlying word
A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)

*/

var Letter = require("./letter.js").Letter;

var Word = function (word) {
    this.done = false;

    this.setWord = function (word) {
        var _arr = [];
        for (var i = 0; i < word.length; i++) {
            _arr.push(new Letter(word.charAt(i)));
        }
        // console.log(this.ltr_arr);
        return _arr;
    }
    this.ltr_arr = this.setWord(word);
    //
    this.display = function () {
        var str = '';
        this.ltr_arr.forEach(ltr => {
            str += ltr.display() + " ";
        });
        return str;
    }

    this.check = function (char) {
        var found = false;
        var done = true;
        this.ltr_arr.forEach(ltr => {
            if (ltr.check(char) && !found) found = true;
            if (!ltr.isGuessed) done = false;
        });
        this.done = done;
        return found;
    }
}

exports.Word = Word;