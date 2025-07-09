// Day 7 - Exercise 3: correct the errors

// class Furniture {
//     constructor(manufacturer: string = 'IKEA') {}
//   }

//   class Desk extends Furniture {
//     kind() {
//       console.log(`This is a desk made by ${this.manufacturer}`)
//     }
//   }

//   class Chair extends Furniture {
//     kind() {
//       console.log(`This is a chair made by ${this.manufacturer}`)
//     }
//   }

//   const desk = new Desk()
//   desk.kind()
//   // desk.manufacturer // When completed, this must return an error

//   const chair = new Chair()
//   chair.kind()
//   // chair.manufacturer // When completed, this must return an error

class Furniture {
  constructor(protected manufacturer: string = "IKEA") {}
}

class Desk extends Furniture {
  kind() {
    console.log(`This is a desk made by ${this.manufacturer}`);
  }
}

class Chair extends Furniture {
  kind() {
    console.log(`This is a chair made by ${this.manufacturer}`);
  }
}

const desk = new Desk();
desk.kind();
// desk.manufacturer; // When completed, this must return an error

const chair = new Chair();
chair.kind();
// chair.manufacturer; // When completed, this must return an error
