// ///////////
// Ruby vs JS
// ///////////

// 1. The docs:
// - MDN (exhaustive but hard): https://developer.mozilla.org/en-US/docs/Web/JavaScript
// - W3School (easy for beginners): https://www.w3schools.com/js/

// 2. How to run JS?
// To test one line of code, run in the console: node
// To run a file, run in the console: node hello.js

// 3. How to print?
console.log("Hi #1802!");







// var, const, let and the lower camel case
// Note: use backticks (`) for interpolation

const aStudent = "Allan";
let age = 21

// CONST CANNOT be reassigned
// aStudent = "Super Allan"; NOT ALLOWED

// LET CAN be reassigned
age += 1;
console.log(age);

console.log(`${aStudent} is ${age} years-old.`);


// no float/integer
console.log(typeof(22));
console.log(typeof(22.9875235));

// how toString/parseInt works
// Note: toString doesn’t work without ()
// in ruby: .to_i .to_s

// Convert a number into a string
console.log(22);
console.log((22).toString());

// Convert a string into a number
console.log(parseInt("21", 10));

// base 10       base 2 (binary)
// 0             0
// 1             1
// 2             10
// 3             11
// 4             100
// 5             101

console.log(parseInt("101", 10));
console.log(parseInt("101", 2));

// delete element in an array with splice
const students = ['Julian', 'Cindy', 'Minami', 'Stamati'];

// students.splice(1,2);
students.splice(1,1);
console.log(students);

// [1,2,3].join()
// ---> '1,2,3'
// [1,2,3].join("")
// ---> '123'

// object, the magic dot!
const student = {
  firstName: "Ben",
  lastName: "Pearson"
};

console.log(student["firstName"]);
console.log(student.firstName);

student.firstName = "Super Ben";
console.log(student);


// ===
// sameness in JS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness

// > 3 == "3"
// true
// > 3 === "3"
// false

// the JS falsies:
if (1) {
  console.log("This is truthy");
} else {
  console.log("This is falsy");
}

null // nil
false //false
0 
""
undefined
NaN


// JS arrow functions () => {} 
// Note: they look like a 'very special' variable
// const square = (num) => {
//   return num * num;
// };

// one liner version
const square = num => num * num;

console.log(square(32));