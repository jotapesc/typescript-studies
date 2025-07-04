// Day 3 - Exercise 1: correct the errors

// let pi = '3.14159';
// let tau = pi * 2;

// console.log(`${tau} is ${pi} times two.`);

const pi: 3.14159 = 3.14159; //pi was a string and couldn't be assigned to a type number
let tau: number = pi * 2;

console.log(`${tau} is ${pi} times two.`);
