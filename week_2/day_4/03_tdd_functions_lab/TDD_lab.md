# Lab: TDD Functions

### MVP
Use each test's argument to write a method for each test and then test each method using Mocha.

> Remember to change `xtest` to `test` when running tests.

### Extension

Copy and paste the following tests under the previous tests, finish them and then write methods for each.

#### Hints:
- Look up how to get the value of PI using the built in Math object.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
- `toFixed()` will round a number. Beware! It returns a String type.
- use MDN and google for reference

Use the length of a side of a cube to find its volume
```js
xtest('volume of cube length 3 is 27', () => {
    // write your code here
  });
```

Use the radius of a sphere to find its volume
```js
xtest('volume of sphere radius 10 is 4188.79', () => {
    // write your code here
  });
```

Convert fahrenheit to celcius
```js
xtest('0 degrees fahrenheit is -17.78 celcius', () => {
    // write your code here
  });
```