// Day 7 - Exercise 1: correct the errors

// interface UseR {
//     name: string;
//     age: number;
//     occupation: string;
// }

// interface Admin {
//     name: string;
//     age: number;
//     role: string;
// }

// type PersoN = UseR | Admin;

// const persons: PersoN[] = [
//     {
//         name: 'Max Mustermann',
//         age: 26,
//         occupation: 'Chimney sweep'
//     },
//     {
//         name: 'Jane Doe',
//         age: 25,
//         role: 'Administrator'
//     },
//     {
//         name: 'Kate Müller',
//         age: 23,
//         occupation: 'Astronaut.'
//     },
//     {
//         name: 'Bruce Willis',
//         age: 64,
//         role: 'World saver.'
//     }
// ];

// function logPerson(person: Person) {
//     let additionalInformation: string;
//     if (person.role) {
//         additionalInformation = person.role;
//     } else {
//         additionalInformation = person.occupation;
//     }
//     console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
// }

// persons.forEach(logPerson);

// Day 7 - Exercise 1

interface UseR {
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  name: string;
  age: number;
  role: string;
}

type PersoN = UseR | Admin;

const persons: PersoN[] = [
  {
    name: "Max Mustermann",
    age: 26,
    occupation: "Chimney sweep",
  },
  {
    name: "Jane Doe",
    age: 25,
    role: "Administrator",
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut.",
  },
  {
    name: "Bruce Willis",
    age: 64,
    role: "World saver.",
  },
];

function logPerson(person: PersoN) {
  let additionalInformation: string;
  if ("role" in person) {
    additionalInformation = person.role;
  } else {
    additionalInformation = person.occupation;
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);
