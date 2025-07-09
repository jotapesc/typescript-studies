// Day 7 - Exercise 2: correct the errors

// class Animal {
//     constructor(name) {}
//     move(meters) {
//       console.log(`${this.name} moved ${meters}m.`)
//     }
//   }

//   class Snake {
//     move(meters) {
//       console.log('Slithering...')
//     }
//   }

//   class Pony {
//     move(meters) {
//       console.log('Galloping...')
//     }
//   }

//   const sammy = new Snake("Sammy the Snake")
//   sammy.move()

//   const pokey = new Pony("Pokey the Pony")
//   pokey.move(34)

class Animal {
  constructor(private name: string) {}
  move(meters: number) {
    console.log(`${this.name} moved ${meters}m.`);
  }
}

class Snake extends Animal {
  override move(meters: number) {
    console.log(`Slithering...`);
    super.move(meters);
  }
}

class Pony extends Animal {
  override move(meters: number) {
    console.log(`Galloping...`);
    super.move(meters);
  }
}

const sammy = new Snake("Sammy the Snake");
sammy.move(5);

const pokey = new Pony("Pokey the Pony");
pokey.move(34);
