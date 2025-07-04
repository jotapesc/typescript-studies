//Exercise: Declare a variable data of type any, declare another variable safeData of type unknown, then, demonstrate their differences

let data: any;
data = true;

function sum2Num(num1:number, num2:number):number {
    return num1+num2;
}

function upperCase(string:string):string {
    return string.toUpperCase();
}

let safeData: unknown;
safeData = false;
//safeData += 32; //'safeData' is of type 'unknown'

data += 42;
safeData = 13;
console.log(sum2Num(data, 5));
//sum2Num(safeData, 5); //not assignable
if (typeof(safeData) === "number") {
    // number type
    console.log(sum2Num(safeData, 5));
}

data = "Memento Mori";
safeData = "Lorem Ipsum";
console.log(upperCase(data));
//upperCase(safeData); //not assignable
if (typeof(safeData) === "string") {
    // string type
    console.log(upperCase(safeData));
}