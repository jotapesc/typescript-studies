// Day 3 - Exercise 5: adapt to typescript

// const sequence = Array.from(Array(10).keys());
// const animals = ['pangolin', 'aardvark', 'echidna', 'binturong'];
// const stringsAndNumbers = [1, 'one', 2, 'two', 3, 'three'];
// const allMyArrays = [sequence, animals, stringsAndNumbers];

// console.log(allMyArrays);

const sequence: number[] = Array.from(Array(10).keys());
const animals: string[] = ["pangolin", "aardvark", "echidna", "binturong"];
const stringsAndNumbers: Array<number | string> = [1, "one", 2, "two", 3, "three"];
const allMyArrays: Array<Array<number | string>> = [sequence, animals, stringsAndNumbers];

console.log(allMyArrays);