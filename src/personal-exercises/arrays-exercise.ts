//Exercise: Create an array of numbers called scores, an array of strings called students, a mixed array (using union types) that can hold numbers or strings called mixedData

let score: number[] = [];
let students: string[] = [
  "Ismat",
  "Arethusa",
  "Balwinder",
  "Haci",
  "Gozel",
  "Primrose",
  "Maximus",
  "Solomiya",
  "Yama",
  "Chiumbo",
];
let mixedData: (number | string)[] = [];

function fillStudentsScore() {
  for (let i = 0; i < 10; i++) {
    score[i] = Math.floor(Math.random() * 11);
  }
}

function mixData() {
  for (let i = 0; i<score.length; i++) {
    mixedData.push(students[i]);
    mixedData.push(score[i]);
  }
}

function printMixedData() {
  for (let i = 0; i < mixedData.length; i++) {
    console.log(`Name: ${mixedData[i]} | Score: ${mixedData[i + 1]}`);
    i++;
  }
}

fillStudentsScore();
mixData();
printMixedData();
