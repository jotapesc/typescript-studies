let names = "joão";
let arr: string[];
let obj: object = {};
let float: number;
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
