const Word = require("./word.js");
const Game = require("./game.js");
const Player = require("./player.js");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Please enter a secret word: ", input => {
  let hiddenWord = new Word(input);
  let snowman = new Game(hiddenWord, new Player("Player 1"));

  const guessALetter = () => {
    readline.question("Guess a letter (or type exit): ", letter => {
      // If the user types 'exit' we close the input
      if (letter === "exit") {
        return readline.close();
      }

      snowman.guess(letter);
      console.log(snowman.revealWord());
      console.log(`You have ${snowman.livesRemaining()} lives remaining`);

      if (snowman.isLost()) {
        console.log("Sorry, you lose.");
        return readline.close();
      }

      if (snowman.isWon()) {
        console.log("**** WINNER ****");
        return readline.close();
      }

      guessALetter(); // This is called recursion. We're calling a function from within itself
    });
  };

  guessALetter();
});
