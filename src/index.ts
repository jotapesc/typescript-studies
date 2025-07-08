let names = "joão";
let arr: string[];
let obj: object = {};
let floatNum: number;
let num: number;

//Any
let things; //this can be literally anything, that's why it's very dangerous for big projects
things = 12;
things = "male";
things = ["A", "B", "C", "D"];

//Array
let values: number[] = [1, 2, 3, 4, 5];
let listOfNames: string[] = ["James", "Belle", "Brutus", "Joseph", "Hens"];
// values.push("Robert"); this will return an error "string cannot be assigned to a number"
// listOfNames.push(6); this will return an error "number cannot be assigned to a string"

//Tuple
let listOfThings: [string, number, boolean] = ["Wilson", 28, true]; //tuples allows the creation of arrays with various types of data and a limit of elements

//Enum
enum GuildRole {
  paladin = 0,
  bruiser = 1,
  assassin = 2,
  mage = 3,
  healer = 4,
}

const user: object = {
  userName: "Akarui",
  playerLvl: 20,
  guildRole: GuildRole.mage,
}; //enum allows the numeration of various names such as roles of an user

//Function return
function sumTwoNum(num1: number, num2: number): number {
  //specifying the type of both return and params
  return num1 + num2;
}

//Objects
const player = {
  nickname: "Hoshimi Miyabi Enjoyer",
  hitPoints: 20000,
};

//Unknow
let playerName: unknown; //unknow is a "temporary any", and can have a type later on
playerName = 10;
playerName = undefined;
playerName = "Wallace"; //here the "any" property can really shine

let charName: string;

if (playerName === "string") {
  charName = playerName; //like here
}

//Never
function generateError(message: string, code: number): never {
  //this will never return any value
  throw {
    message: message,
    errorCode: code,
  };
}

//console.log(generateError("I'm a teapot", 418));

//Alias
type Player = {
  nickname: string;
  age: number;
  isOnline: boolean;
}; //Pretty similar to an interface

const players: Player = {
  nickname: "Ryoshu Enjoyer",
  age: 27,
  isOnline: false,
};

// Union type
let nameOrNumber: string | number = 12; //this variable can receive two different types

if (typeof nameOrNumber === "number") {
  //to use one of them, just check it's type
  console.log((nameOrNumber += 3));
} else if (typeof nameOrNumber === "string") {
  console.log(nameOrNumber);
}

// Literal
let playerMaxHp: 20000;
let playerGuildRole: "paladin" | "bruiser" | "assassin" | "mage" | "healer";

console.log(`Max HP: ${(playerMaxHp = 20000)} 
Guild Role: ${(playerGuildRole = "healer")}`);

// playerMaxHp = 20001; not assignable because playerMaxHp's type is literally 20000
// playerGuildRole = GuildRole.healer; not assignable because GuildRole.healer it's a number

// Intersection

type Stats = {
  hitPoints: number;
  manaPoints: number;
  CharacterLevel: number;
  debuffs: "Bleed" | "Burn" | "Poison" | "None";
  hungerLevel: "Satiated" | "Hungry" | "Starving";
};

type Equipment = {
  helmet: boolean;
  chestPlate: boolean;
  leggings: boolean;
  boots: boolean;
};

type Character = Stats & Equipment;

let char1: Character = {
  hitPoints: 20000,
  manaPoints: 10000,
  CharacterLevel: 57,
  debuffs: "None",
  hungerLevel: "Satiated",
  helmet: false,
  chestPlate: true,
  leggings: true,
  boots: false,
};

// Classes
interface Users {
  name: string;
  balance: number;
  constructor(name: string, balance: number): Users;
  addMoney(amount: number):void;
  withdrawMoney(amount: number):void;
  usersFactory(name: string, balance: number): Users;
}
class Users {
  name: string;
  balance: number;

  private constructor(name: string, balance: number) {
    this.name = name;
    this.balance = balance;
  }
  
  addMoney(amount: number):void {
    this.balance += amount;
  }

  withdrawMoney(amount: number):void {
    this.balance -= amount;
  }

  public usersFactory (name: string, balance: number) {
    return new Users(name, balance);
  }
}

const user1 = Users.prototype.usersFactory("John", 100);
console.log(user1);
user1.addMoney(400);
console.log(`Saldo: ${user1.balance}`);
user1.withdrawMoney(250)
console.log(`Saldo: ${user1.balance}`);

// Readonly
class Movies {
  readonly id: number; //can still be accessed out of the class, but cannot be changed
  //private id: number; //can't be accessed out of the class and neither be changed
  public name: string;
  
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}