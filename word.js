const Letter = require("./Letter");

//Word constructor generates the word and turns it into an array
function Word() {
  this.getWord = function() {
    let wordArray = ["camembert", "wensleydale", "mozzarella", "provolone", "gorgonzola", "manchego", "gouda", "havarti", "marscapone", "ricotta", "muenster", "roquefort", "asiago"];
    this.word = wordArray[Math.floor(Math.random() * wordArray.length)];
    return this.word;
  },
  this.arrayify = function() {
    let newArray = [];
    for(index = 0; index < this.word.length; index++) {
      newArray[index] = new Letter(this.word[index]);
    }
    return newArray;
  },
  this.word = this.getWord();
  this.arrayOfLetters = this.arrayify();
}

Word.prototype.setup = function() {
    this.word = this.getWord();
    this.arrayOfLetters = this.arrayify();
}

//Checking the word vs the user's guess
Word.prototype.update = function(inputLetters) {
    let goodGuess = false;
    for(wordIndex = 0; wordIndex < this.arrayOfLetters.length; wordIndex++) {
        if(inputLetters[inputLetters.length-1] === this.word[wordIndex]) {
            this.arrayOfLetters[wordIndex].displayLetter = this.arrayOfLetters[wordIndex].correctLetter;
            goodGuess = true;
        }
    }
    if (goodGuess) {
        console.log("CORRECT");
    } else {
        console.log("NOPE TRY AGAIN!");
    }
    return goodGuess;
}

//Formats the word into spaces and underscores
Word.prototype.display = function() {
  let displayString = "";
  let currentOutput = "";
  for(displayIndex = 0; displayIndex < this.arrayOfLetters.length; displayIndex++) {
    currentOutput = this.arrayOfLetters[displayIndex].displayLetter;
    displayString += (currentOutput+" ");
  }
  return displayString;
}

module.exports = Word;