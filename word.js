function Word(word) {
    this.word = word;
    this.getWord = function() {
        let wordArray = ["camembert", "wensleydale", "mozzarella", "provolone", "gorgonzola", "manchego", "gouda", "monterey jack", "havarti", "marscapone", "ricotta", "muenster", "roquefort", "asiago"];
        let wordChoice = wordArray[Math.floor(Math.random() * wordArray.length)];
        console.log(wordChoice);
    }
}

let newWord = new Word();

newWord.getWord();

module.exports = Word;