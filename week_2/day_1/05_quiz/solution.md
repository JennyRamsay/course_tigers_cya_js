# JS Fundamentals

## MVP

### Part 1

1. `7 + 3;` outputs `10`. 7 and 3 are called operands and + is the operator.

2. `9 % 2;` outputs `1`. The remainder of `9/2` is 1.

3. `typeof(42);` outputs `number`

4. `typeof(2) === typeof(9.24);` outputs `true`. 2 is a "number" and 9.24 is a "number", JavaScript has no floating point number type.

5. `42 / 0;` outputs `Infinity`. Anything divided by 0 is Infinity in JavaScript.

6. `9 / "player1";` outputs `NaN`. NaN stands for "not a number" and is returned when a mathematical operation cannot produce a numeric result.

7. `NaN === NaN;` outputs `false`. Wierdly, NaN is not equal to any other value, including itself.

8. `typeof(NaN);` outputs `number`. NaN is a "number" type.

9. `typeof parseInt("42");` outputs `number`. parseInt will take a String and turn it into an integer (number).

10. `"Brendan" + " Eich";` outputs `Brendan Eich`. This is using string concatenation.

11.
```js
var firstName = "Brendan";
var lastName = "Eich";
firstName + " " + lastName;
```
outputs `Brendan Eich`.

12.
```js
var phoneNumber = "08798976";
phoneNumber.length;
```
outputs `8`. There are 8 characters in the String.

13. `"Brendan" === "Brendan";` outputs `true`. The === operator considers two strings equal if they both have the same length and the same characters in the same order.

14.
```js
var fName;
if(fName) console.log(`First name is ${fName}`);
```
Will not log anything out because `undefined` is falsy.

15.
```js
var name = "";
if(name) console.log(`First name is ${name}`);
```
Will not log anything out because an empty String is falsy.

### Part 2

Write a program to determine what award a student should get on a test.

If their score is 10, they get a "Distinction"
If their score is 9, they get a "Merit"
If their score is 8, they get a "Pass"
If their score is less than 8 they get a "Fail"

```js
var score = 10;

switch (score) {
 case 10:
   console.log("Distinction");
   break;
 case 9:
   console.log("Merit");
   break;
  case 8:
    console.log("Pass");
    break;
 default:
   console.log("Fail");
}
```

We can't do a 'between' in a case statement but we could use multiple cases for example:

```js
var score = 10;

switch (score) {
  case 10:
  case 9:
  case 8:
   console.log("Pass");
   break;
 default:
   console.log("Fail");
}
```


### Part 3

Loop over the array and print out the following coffee summaries using console.log.

```js
var coffees = [
  { type:"Latte", price:2.65 },
  { type:"Cappuccino", price:2.75 },
  { type:"Flat white", price:2.95 },
  { type:"Super-dooper Mocha Deluxe", price:3.79 }
];

for(coffee of coffees) {
  console.log(`${coffee.type}s cost £${coffee.price} each`);
};
```

## Extensions

In the game of naughts and crosses, each cell has a value of 'x', 'o' or null. We can represent the grid as a "2 dimensional" array. That means arrays inside an array. The grid is an array with 3 arrays inside it. The first array represents the top row, the second array represents the middle row and the third array is the bottom row.

First step would be to work out what the winning combinations would be:

Winning combinations:

[0,1,2], [3,4,5], [6,7,8]
[0,3,6], [1,4,7], [2,5,8]
[0,4,8], [2,4,6]

```js
var currentPlayer = 'x';
var grid = [['x','x','x'], ['o', null, 'o'], [null, null, null]];

var message = `${currentPlayer} wins`;

if(grid[0][0] === currentPlayer && grid[0][1] == currentPlayer && grid[0][2] == currentPlayer){
    console.log(message);
} else if(grid[1][0] === currentPlayer && grid[1][1] == currentPlayer && grid[1][2] == currentPlayer){
    console.log(message);
} else if(grid[2][0] === currentPlayer && grid[2][1] == currentPlayer && grid[2][2] == currentPlayer){
    console.log(message);
} else if(grid[0][0] === currentPlayer && grid[1][0] == currentPlayer && grid[2][0] == currentPlayer){
    console.log(message);
} else if(grid[0][1] === currentPlayer && grid[1][1] == currentPlayer && grid[2][1] == currentPlayer){
    console.log(message);
} else if(grid[0][2] === currentPlayer && grid[1][2] == currentPlayer && grid[2][2] == currentPlayer){
    console.log(message);
} else if(grid[0][0] === currentPlayer && grid[1][1] == currentPlayer && grid[2][2] == currentPlayer){
    console.log(message);
}  else if(grid[0][2] === currentPlayer && grid[1][1] == currentPlayer && grid[2][0] == currentPlayer){
    console.log(message);
} else {
    console.log("No winner");
}
```
