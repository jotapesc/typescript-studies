// Day 5 - Exercise 5: prevent errors

// interface UserSchema {
//     id: number
//     name: string
// }

// class User implements UserSchema {
//     constructor(public name: string, public id: number) {}
// }

// const user = new User('Dog', 1)

// console.log(user.id)

// user.name = 'Harold' // can be changed
// user.id = 5 // can't be changed

// console.log(`User:`, user)

interface UserSchema {
    readonly id: number;
    name: string;
}

class User implements UserSchema {
    readonly id: number;
    public name: string;
    
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

const userA = new User(1, "Dog")

console.log(userA.id)

userA.name = "Harold" 

console.log(`User: `, userA);