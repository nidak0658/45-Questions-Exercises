// You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// 1. Tests for equality and inequality with strings
// 2. Tests using the lower case function
// 3. Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// 4. Tests using "and" and "or" operators
// 5. Test whether an item is in a array
// 6. Test whether an item is not in a array
// equality and inequality
// let myName = "Ali";
// console.log(myName == "Ali");       // true             equal to
// console.log(myName !== "ali");      // true             not equal to
// numberics
// let myNumber = 10;
// console.log(myNumber == 10);        // true
// console.log(myNumber !== 10);       // true
// console.log(myNumber > 5);          // true     greater than
// console.log(myNumber < 5);          // false    less than
// console.log(myNumber <= 5);          // false    less than or equal to
// console.log(myNumber >= 5);          // true    greater than or equal to
// and &&  ===== or ||(pipe)
let num1 = 10;
let num2 = 5;
// console.log(num1 > 9 && num2 < 5);      // false
      // true stat      false stat
// console.log(num1 > 9 || num2 < 5);      // true
       // true stat      false stat
let myArray = [2 , 3, "Ali"];
let myString = "Yasir";
console.log(Array.isArray(myArray));            //true
console.log(Array.isArray(myString));           //false