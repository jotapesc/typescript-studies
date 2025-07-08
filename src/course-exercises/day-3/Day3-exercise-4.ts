// Day 3 - Exercise 4: adapt to typescript

// const integer = 6;
// const float = 6.66;
// const hex = 0xf00d;
// const binary = 0b1010011010;
// const octal = 0o744;
// const negZero = -0;
// const actuallyNumber = NaN;
// const largestNumber = Number.MAX_VALUE;
// const mostBiglyNumber = Infinity;

// const members: any[] = [
//   integer,
//   float,
//   hex,
//   binary,
//   octal,
//   negZero,
//   actuallyNumber,
//   largestNumber,
//   mostBiglyNumber
// ];

// members[0] = '12345';

// console.log(members);

const integer: number = 6;
const float: number = 6.66;
const hex: number = 0xf00d;
const binary: number = 0b1010011010;
const octal: number = 0o744;
const negZero: number = -0;
const actuallyNumber: number = NaN;
const largestNumber: number = Number.MAX_VALUE;
const mostBiglyNumber: number = Infinity;

const members: number[] = [
  integer,
  float,
  hex,
  binary,
  octal,
  negZero,
  actuallyNumber,
  largestNumber,
  mostBiglyNumber,
];

members[0] = 12345;

console.log(members);
