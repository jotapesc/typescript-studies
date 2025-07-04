// Exercise: Create a function throwError that takes an error message and returns never by throwing an error.

function throwError(errorMsg:string):never {
    throw new Error(errorMsg);
}

throwError(`Error: 404 "Not Found"`);