// Example 1: What's Your Name?

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question(`What's your name? `, name => {
  console.log(`Welcome ${name}!`);
  readline.close();
});

// Example 2: Passing user input to a constructor

// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//
//   talk() {
//     return `Hello, my name is ${this.name}`;
//   }
// }
//
// readline.question(
//   `What's your name? I'm going to create a Person object `,
//   name => {
//     let person = new Person(name);
//     console.log(person.talk());
//     readline.close();
//   }
// );

// Example 3: A Simple Guessing Game

// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
// const winningNumber = 7;
//
// const guessANumber = () => {
//   readline.question("Guess a number between 1 and 10: ", guess => {
//     // If the user types 'exit' we close the input
//     if (guess === "exit") {
//       return readline.close();
//     }
//
//     if (guess == winningNumber) {
//       // note we're using == to coerce the user input string into a number
//       console.log("Nice guess! *** WINNER ***");
//       return readline.close();
//     }
//
//     console.log("No! Try again");
//     guessANumber(); // This is called recursion. We're calling a function from within itself
//   });
// };
//
// guessANumber();
