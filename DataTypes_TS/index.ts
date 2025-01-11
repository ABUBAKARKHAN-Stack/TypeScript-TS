// ++++++++++++++++++++++++++++++++ Basic Types in TypeScript ++++++++++++++++++++++++++++++++
// Primitive Types (number, string, boolean)
// Arrays
// Tuples
// Enums
// Special Types: any, unknown, never, void, null, undefined

// +++++++++++++++++++++++++++++++++ Primitive Types +++++++++++++++++++++++++++++++++

//* 1. Number: TypeScript automatically infers this as a number
let num: number = 10; // An integer
let float: number = 3.14; // A floating-point number
console.log(num, float); // output: 10 3.14

//* 2. String: TypeScript infers this as a string
let str: string = 'Hello TS'; // A string value
console.log(str); // output: Hello TS

//* 3. Boolean: TypeScript infers this as a boolean
let isLoggedIn: boolean = true; // A boolean value
console.log(isLoggedIn); // output: true

// ++++++++++++++++++++++++++++++++++++ Arrays ++++++++++++++++++++++++++++++++++++

//* Define a Basic Array with TypeScript's type annotation
let arr: number[] = [1, 2, 3, 4, 5]; // Array of numbers
console.log(arr); // output: [1, 2, 3, 4, 5]

//* Type Safety Example:
// arr.push("6"); // Uncommenting this will cause a compilation error as "6" is not a number.

arr.push(6); // This works because 6 is a number

//* Using map() with type inference
let newArr = arr.map(num => num * 2); // Multiplies each element by 2
console.log(newArr); // output: [2, 4, 6, 8, 10, 12]

// ++++++++++++++++++++++++++++++++++++++ Tuples +++++++++++++++++++++++++++++++++

//* Tuples are arrays with fixed types and lengths
let tup1: [number, string] = [1, 'hello']; // A tuple with a number and a string
console.log(tup1); // output: [1, 'hello']

// ++++++++++++++++++++++++++++++++++++++ Enums +++++++++++++++++++++++++++++++++

//* 1. String-based enum
enum UserRoles {
    ADMIN = "admin",
    GUEST = "guest",
    SUPER_ADMIN = "super_admin"
}
console.log(UserRoles); // output: { ADMIN: 'admin', GUEST: 'guest', SUPER_ADMIN: 'super_admin' }

//* 2. Numeric-based enum
enum StatusCodes {
    SUCCESS = 200,
    POSTING = 201,
    NOT_FOUND = 404
}
console.log(StatusCodes); // output: {SUCCESS: 200, POSTING: 201, NOT_FOUND: 404}
console.log(StatusCodes.NOT_FOUND); // output: 404

// +++++++++++++++++++++++++++++ Special Types: any, unknown, never, void, null, undefined ++++++++++++++++++++++++++++

//* 1. ANY: Disables type checking
// let anyVar: any;
// anyVar = 90; // This is fine
// anyVar = false; // This is fine too

//* 2. UNKNOWN: Requires type checking before performing operations
let unknownVar: unknown;
unknownVar = 56000;
unknownVar = 'strange :)';

if (typeof unknownVar === 'string') {
    console.log(unknownVar.toUpperCase()); // output: "STRANGE :)"
}

//* 3. VOID: Functions that do not return any value
function logMessage(): void {
    console.log('This function does not return anything.');
}
logMessage(); // output: This function does not return anything.

//* 4. NEVER: Represents a value that never occurs
function throwError(): never {
    throw new Error('Something went wrong!');
}
// throwError(); // Uncomment to see the error

//* 5. NULL and UNDEFINED
let nullVar: null = null; // Explicitly assigned null
console.log(nullVar); // output: null

let undefinedVar: undefined; // Declared but not assigned a value
console.log(undefinedVar); // output: undefined

// +++++++++++++++++++++++++++++++++++++++++++++ Type Inference & Annotations +++++++++++++++++++++++++++++++++++++++

//* Type Inference
let number = 90; // TypeScript infers the type as number
console.log(typeof number); // output: number

//* Type Annotations
let string: string = 'Hello World'; // Explicitly annotating the variable type
console.log(typeof string); // output: string

// +++++++++++++++++++++++++++++++++++++++++++ Union Types ++++++++++++++++++++++++++++++++++++++++++++

//* Union types allow variables to hold multiple types
const union: string | boolean | string[] = true;
console.log(union); // output: true

// +++++++++++++++++++++++++++++++++++++++++++++ Objects ++++++++++++++++++++++++++++++++++++++++++++++

//* Defining objects with type annotations
const personInfo: {
    firstName: string;
    lastName: string;
    age: number;
    isLoggedIn?: boolean; //* Optional property
} = {
    firstName: "Abubakar",
    lastName: "Khan",
    age: 12
};

// ++++++++++++++++++++++++++++++++++++++++++++++ Type Aliases ++++++++++++++++++++++++++++++++++++++++++++++

//* Type alias for a function that converts two strings into a number
type Conversion = (string1: string, string2: string) => number;

const conversion: Conversion = (num1, num2) => {
    const sumOfStr = parseInt(num1) + parseInt(num2); // Parses and adds two numbers
    return sumOfStr;
};
console.log(conversion("10", "30")); // output: 40

//* Type alias for a user object
type User = {
    name: string;
    age?: number;
    skills: string[];
};

const userOne: User = {
    name: "Abubakar",
    age: 17,
    skills: ["MERN", "DOCKER"]
};

// ++++++++++++++++++++++++++++++++++++++++++++++ Function with never Type ++++++++++++++++++++++++++++++++++++++++++

//* A function that always throws an error
function generateError(errorMsg: string, code: number): never {
    throw { message: errorMsg, code };
}
// generateError("Error 404 Not Found", 404); // Uncomment to see the error


// TODO: Read more about TypeScript data types: https://www.typescriptlang.org/docs/handbook/basic-types.html