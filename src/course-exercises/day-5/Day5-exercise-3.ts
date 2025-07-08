// Day 5 - Exercise 3: assign types

// class MC {
//     greet(event = 'party') {
//       return `Welcome to the ${event}`;
//     }
//   }

//   const mc = new MC();
//   console.log(mc.greet('show'));

interface MC {
  greet(event: string): string;
}

class MC implements MC{
    public greet(event: string = "party"): string {
      return `Welcome to the ${event}`;
    }
  }

  const mc = new MC();
  console.log(mc.greet("show"));