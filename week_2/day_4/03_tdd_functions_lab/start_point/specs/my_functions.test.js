const myFunctions = require('../my_functions');

describe('functions practice', () => {
  test('should return Hello World', () => {
    expect(myFunctions.helloWorld()).toBe("Hello World!");
  });

  xtest('one plus two is three', () => {
    expect(myFunctions.add(1, 2)).toBe(3);
  });

  xtest('ten minus four is six', () => {
    expect(myFunctions.subtract(10, 4)).toBe(6);
  });

  xtest('four times two is eight', () => {
    expect(myFunctions.multiply(4, 2)).toBe(8);
  });

  xtest('ten divided by two is five', () => {
    expect(myFunctions.divide(10, 2)).toBe(5);
  });

  xtest('length of the string is 17', () => {
    expect(myFunctions.lengthOfString("JavaScript Rocks!")).toBe(17);
  });

  xtest('concatenates strings correctly', () => {
    var str1 = "Mary had a little lamb, ";
    var str2 = "its fleece was white as snow";
    expect(myFunctions.concatenateStrings(str1, str2)).toBe("Mary had a little lamb, its fleece was white as snow");
  });

  xtest('adds strings as numbers. Should return 4', () => {
    expect(myFunctions.addStringAsNumber("1", "3")).toBe(4);
  });

  xtest('month 1 is January', () => {
    expect(myFunctions.numberToFullMonthName(1)).toBe("January");
  });

  xtest('month 3 is March', () => {
    expect(myFunctions.numberToFullMonthName(3)).toBe("March");
  });

  xtest('month 9 is September', () => {
    expect(myFunctions.numberToFullMonthName(9)).toBe("September");
  });

  xtest('short month 1 is Jan', () => {
    expect(myFunctions.numberToShortMonthName(1)).toBe("Jan");
  });

  xtest('short month 4 is Apr', () => {
    expect(myFunctions.numberToShortMonthName(4)).toBe("Apr");
  });

  xtest('short month 10 is Oct', () => {
    expect(myFunctions.numberToShortMonthName(10)).toBe("Oct");
  });

  //========= Extensions =============

})
