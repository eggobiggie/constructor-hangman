const fs = require("fs");

function Word(word) {
    this.word = word;
    this.getWord = function() {
        let wordArray = ["camembert", "wensleydale", "mozzarella", "provolone", "gorgonzola", "manchego", "gouda", "monterey jack", "havarti", "marscapone", "ricotta", "muenster", "roquefort", "asiago"];
        this.word = wordArray[Math.floor(Math.random() * wordArray.length)];
        fs.writeFile("log.txt", this.word, function(error) {
            if (error) {
                console.log(error);
            }
        });
    }
}

let newWord = new Word();
newWord.getWord();

module.exports = Word;