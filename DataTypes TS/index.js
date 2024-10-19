"use strict";
// ++++++++++++++++++++++++++++++++ Basic Types in TypeScript ++++++++++++++++++++++++++++++++
// Primitive Types (number, string, boolean)
// Arrays
// Tuples
// Enums
// Special Types: any, unknown, never, void, null, undefined
// +++++++++++++++++++++++++++++++++ Primitive Types +++++++++++++++++++++++++++++++++
// Number: TypeScript automatically infers this as a number
let num = 10;
let float = 3.14;
console.log(num, float); // output 10 3.14
// String: TypeScript infers this as a string
let str = 'Hello TS';
console.log(str); // output Hello TS
// Boolean: TypeScript infers this as a boolean
let isLoggedIn = true;
console.log(isLoggedIn); // output true
// ++++++++++++++++++++++++++++++++++++ Arrays ++++++++++++++++++++++++++++++++++++
// Define a Basic Array with TypeScript's type annotation
// The array will only accept elements of type number
let arr = [1, 2, 3, 4, 5];
console.log(arr); // output [1, 2, 3, 4, 5]
// Attempting to add a string will throw a type error
// arr.push("6"); // Uncommenting this line will cause a compilation error as "6" is not a number.
// Using TypeScript ensures type safety:
arr.push(6); // This works because 6 is a number
// Using map() with type inference: The result will also be inferred as an array of numbers
let newArr = arr.map(num => num * 2);
console.log(newArr); // output [2, 4, 6, 8, 10, 12]
// ++++++++++++++++++++++++++++++++++++++ Tuples +++++++++++++++++++++++++++++++++
// Tuples are arrays with a fixed number of elements and types.
// The following tuple will only allow a number in the first position and a string in the second.
let tup1 = [1, 'hello'];
console.log(tup1); // output [1, 'hello']
// The following will throw a type error due to incorrect order/types
// let tup2: [number, string] = ['hello', 1]; // Error
// ++++++++++++++++++++++++++++++++++++++ Enums +++++++++++++++++++++++++++++++++
// Enums (short for Enumerations) allow us to define named constants that can be used to represent a set of predefined values.
// Enums can have string or numeric values.
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["GUEST"] = "guest";
    UserRoles["SUPER_ADMIN"] = "super_admin";
})(UserRoles || (UserRoles = {}));
console.log(UserRoles); // output { ADMIN: 'admin', GUEST: 'guest', SUPER_ADMIN: 'super_admin' }
// Another example with numeric values:
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["SUCCESS"] = 200] = "SUCCESS";
    StatusCodes[StatusCodes["POSTING"] = 201] = "POSTING";
    StatusCodes[StatusCodes["NOT_FOUND"] = 404] = "NOT_FOUND";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes); // output {SUCCESS: 200, POSTING: 201, NOT_FOUND: 404}
console.log(StatusCodes.NOT_FOUND); // output 404
// Note: In enums, we use the `=` symbol to define key-value pairs instead of `:`.
//  +++++++++++++++++++++++++++++ any, unknown, undefined, never, void, null +++++++++++++++++++++++++++++++++
// ANY: TypeScript disables type checking for the `any` type.
// Avoid using `any` as it defeats the purpose of TypeScript's type safety.
// let anyVar: any;
// anyVar = 90; // This is fine
// anyVar = false; // This is fine too
// anyVar = "hello"; // Still fine, no type safety here
// UNKNOWN: Unlike `any`, `unknown` requires type checking before performing certain operations.
let unknownVar;
unknownVar = 56000;
unknownVar = 'strange :)';
// Type checking with `unknown` is required before performing operations:
if (typeof unknownVar === 'string') {
    console.log(unknownVar.toUpperCase()); // output "STRANGE :)"
}
if (typeof unknownVar === 'number') {
    console.log(unknownVar.toLocaleString()); // output "56,000"
}
// VOID: Functions that do not return any value use the `void` type.
function logMessage() {
    console.log('This function does not return anything.');
}
logMessage(); // output: This function does not return anything.
// NEVER: The `never` type represents a value that never occurs, often used for functions that throw errors or have infinite loops.
function throwError() {
    throw new Error('Something went wrong!');
}
// throwError(); // Uncomment to see the error
// NULL: Explicitly assigned as `null`.
let nullVar = null;
console.log(nullVar); // output null
// UNDEFINED: A variable that has been declared but not assigned a value.
let undefinedVar;
console.log(undefinedVar); // output undefined
// ++++++++++++++++++++++++++++++++++++++++++++++  Type Inference & Annotations ++++++++++++++++++++++++++++++++++++++++++++++++++
// Type Inference
let number = 90; // When we declare any variable without define it type  it is called Type Inference But this is not good practice bcz it may cause any type variable i explain any type already on top so please visit and Typescript automatically define it type NOT A GOOD PRACTICE
console.log(typeof number); // output number
// Type Annotations
let string = 'Hello World'; // When we declare any variable without define it type  it is called Type Annotations
// Syntax let example :  datatype = 'example'
console.log(typeof string); // output string
