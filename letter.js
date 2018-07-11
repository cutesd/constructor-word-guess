/*
Letter.js: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:


A string value to store the underlying character for the letter
A boolean value that stores whether that letter has been guessed yet
A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
 */


var Letter = function(ltr){
    this.isGuessed = false;
    //
    this.setLetter = function(ltr){
        if(ltr === ' ') this.isGuessed = true;
        return ltr;
    }
    this.ltr = this.setLetter(ltr);
    //
    this.display = function(){
        if(this.isGuessed) return ltr;
        else return '_';
    }
    this.check = function(char){
        if(char === ltr) {
            this.isGuessed = true;
            return true;
        }
        return false;
    }
   
}

exports.Letter = Letter;