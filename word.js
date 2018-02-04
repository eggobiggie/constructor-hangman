const Letter = require("./Letter");

function Word() {
  this.getWord = function() {
    let wordArray = ["camembert", "wensleydale", "mozzarella", "provolone", "gorgonzola", "manchego", "gouda", "monterey jack", "havarti", "marscapone", "ricotta", "muenster", "roquefort", "asiago"];
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

Word.prototype.update = function(inputLetters) {
  for(wordIndex = 0; wordIndex < this.arrayOfLetters.length; wordIndex++) {
    for(guessIndex = 0; guessIndex < inputLetters.length; guessIndex++) {
      if(inputLetters[guessIndex] === this.word[wordIndex]) {
        this.arrayOfLetters[wordIndex].displayLetter = this.arrayOfLetters[wordIndex].correctLetter;
        console.log("Letter: " + this.arrayOfLetters[wordIndex].correctLetter);
      }
    }
  }
}

Word.prototype.display = function(){
  let displayString = "";
  let currentOutput = "";
  for(displayIndex = 0; displayIndex < this.arrayOfLetters.length; displayIndex++){
    currentOutput = this.arrayOfLetters[displayIndex].displayLetter;
    displayString += (currentOutput+" ");
  }
  return displayString;
}

module.exports = Word;