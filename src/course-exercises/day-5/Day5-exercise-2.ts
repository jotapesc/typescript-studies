// Day 5 - Exercise 2: create an interface

// class Person {
//     constructor(public name: string, public age: number) {}
//   }

//   const jane = new Person('Jane', 31);

//   console.log(`${jane.name} is ${jane.age} years old.`);

interface Persona {
  name: string;
  age: number;
}

class Person implements Persona {
    public name: string;
    public age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }

  const jane = new Person("Jane Doe", 23);

  console.log(`${jane.name} is ${jane.age} years old.`);