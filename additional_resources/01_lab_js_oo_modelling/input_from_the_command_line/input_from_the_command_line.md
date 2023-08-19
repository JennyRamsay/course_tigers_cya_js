# Getting User Input From the Command Line

## Learning Objectives

- Know how to make a Node.js CLI program interactive using the built-in readline Node module
- Understand recursion

# Introduction

Sometimes we may want to capture user input from the command line and use that data in our program.
Node has a built in module called `readline` designed to help us do this.

## Example 1: What's Your Name?

```bash
touch app.js
```

```js
// app.js

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question(`What's your name?`, name => {
  console.log(`Hi ${name}!`);
  readline.close();
});
```

### Question: Talk through what is going on here.

Answer:

- We require in the readline module from Node and then immediately call the `createInterface` method on that object.
- `createInterface` returns a readline object.
- We call the `question` method on the readline object which waits for user input and runs a callback after the user hits return
- In this callback we log out a message, then close the readline interface.

## Example 2: Passing user input to an object

```js
// app.js
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

class Person {
  constructor(name) {
    this.name = name;
  }

  talk() {
    return `Hello, my name is ${this.name}`;
  }
}

readline.question(
  `What's your name? I'm going to create a Person object `,
  name => {
    let person = new Person(name);
    console.log(person.talk());
    readline.close();
  }
);
```

## Example 3: Simple Guessing Game

```js
// app.js
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

const winningNumber = 7;

const guessANumber = () => {
  readline.question("Guess a number between 1 and 10: ", guess => {
    // If the user types 'exit' we close the input
    if (guess === "exit") {
      return readline.close();
    }

    if (guess == winningNumber) {
      // note we're using == to coerce the user input string into a number
      console.log("Nice guess! *** WINNER ***");
      return readline.close();
    }

    console.log("No! Try again");
    guessANumber(); // This is called recursion. We're calling a function from within itself
  });
};

guessANumber();
```

## Conclusion

We can use Node's built in readline module to get user input from the command line. What we do with the input we capture is up to us. E.G create a new Person object or check for a correct letter in a word guessing game.

We used `recursion` to repeatedly ask for user data until they enter `exit` or any other condition we want to check for.

- [readline documentation](https://nodejs.org/api/readline.html)
