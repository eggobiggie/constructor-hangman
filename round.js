const Word = require("./Word");
const Letter = require("./Letter");

//Holds information about each round
function Round() {
    this.currentWord = new Word();
    this.currentWord.setup();
    this.lettersGuessed = [];
    this.guessCount = 8;
    this.notDone = true;
    this.didWeWin = false;
    this.useGuess = function() {
        if(!this.currentWord.update(this.lettersGuessed)) {
            this.guessCount--;
        }
    }
}


//Prototype for game conditions
Round.prototype.updateGameCondition = function() {
    if (this.guessCount === 0) {
        this.notDone = false;
    }
    let correctAnswer = true;
    for (index = 0; index < this.currentWord.word.length; index++) {
        if (this.currentWord.arrayOfLetters[index].displayLetter != this.currentWord.arrayOfLetters[index].correctLetter) {
            correctAnswer = false;
        }

    }
    if (correctAnswer) {
        this.didWeWin = true;
        this.notDone = false;
        console.log("You win!");
    }
    if (this.notDone === false && this.didWeWin === false) {
        console.log("Sorry, you lose");
    }
}


module.exports = Round;