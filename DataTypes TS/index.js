// ++++++++++++++++++++++++++++++++ Basic Types in TypeScript ++++++++++++++++++++++++++++++++
// Primitive Types (number, string, boolean)
// Arrays
// Tuples
// Enums
// Special Types: any, unknown, never, void, null, undefined
// +++++++++++++++++++++++++++++++++ Primitive Types +++++++++++++++++++++++++++++++++
// Number: TypeScript automatically infers this as a number
var num = 10; // An integer
var float = 3.14; // A floating-point number,
console.log(num, float); // output: 10 3.14
// String: TypeScript infers this as a string
var str = 'Hello TS'; // A string value
console.log(str); // output: Hello TS
// Boolean: TypeScript infers this as a boolean
var isLoggedIn = true; // A boolean value
console.log(isLoggedIn); // output: true
// ++++++++++++++++++++++++++++++++++++ Arrays ++++++++++++++++++++++++++++++++++++
// Define a Basic Array with TypeScript's type annotation
// The array will only accept elements of type number
var arr = [1, 2, 3, 4, 5];
console.log(arr); // output: [1, 2, 3, 4, 5]
// Attempting to add a string will throw a type error
// arr.push("6"); // Uncommenting this line will cause a compilation error as "6" is not a number.
// Using TypeScript ensures type safety:
arr.push(6); // This works because 6 is a number
// Using map() with type inference: The result will also be inferred as an array of numbers
var newArr = arr.map(function (num) { return num * 2; }); // Multiplies each element by 2
console.log(newArr); // output: [2, 4, 6, 8, 10, 12]
// ++++++++++++++++++++++++++++++++++++++ Tuples +++++++++++++++++++++++++++++++++
// Tuples are arrays with a fixed number of elements and types.
// The following tuple will only allow a number in the first position and a string in the second.
var tup1 = [1, 'hello']; // A tuple with a number and string
console.log(tup1); // output: [1, 'hello']
// The following will throw a type error due to incorrect order/types
// let tup2: [number, string] = ['hello', 1]; // Error: wrong types order
// ++++++++++++++++++++++++++++++++++++++ Enums +++++++++++++++++++++++++++++++++
// Enums (short for Enumerations) allow us to define named constants that can be used to represent a set of predefined values.
// Enums can have string or numeric values.
// String-based enum example
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["GUEST"] = "guest";
    UserRoles["SUPER_ADMIN"] = "super_admin";
})(UserRoles || (UserRoles = {}));
console.log(UserRoles); // output: { ADMIN: 'admin', GUEST: 'guest', SUPER_ADMIN: 'super_admin' }
// Numeric-based enum example
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["SUCCESS"] = 200] = "SUCCESS";
    StatusCodes[StatusCodes["POSTING"] = 201] = "POSTING";
    StatusCodes[StatusCodes["NOT_FOUND"] = 404] = "NOT_FOUND";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes); // output: {SUCCESS: 200, POSTING: 201, NOT_FOUND: 404}
console.log(StatusCodes.NOT_FOUND); // output: 404
// Note: In enums, we use the `=` symbol to define key-value pairs instead of `:`.
//  +++++++++++++++++++++++++++++ any, unknown, undefined, never, void, null +++++++++++++++++++++++++++++++++
// ANY: TypeScript disables type checking for the `any` type.
// Avoid using `any` as it defeats the purpose of TypeScript's type safety.
// let anyVar: any;
// anyVar = 90; // This is fine
// anyVar = false; // This is fine too
// anyVar = "hello"; // Still fine, no type safety here
// UNKNOWN: Unlike `any`, `unknown` requires type checking before performing certain operations.
var unknownVar;
unknownVar = 56000; // First assigned as a number
unknownVar = 'strange :)'; // Then reassigned as a string
// Type checking with `unknown` is required before performing operations:
if (typeof unknownVar === 'string') {
    console.log(unknownVar.toUpperCase()); // output: "STRANGE :)"
}
if (typeof unknownVar === 'number') {
    console.log(unknownVar.toLocaleString()); // output: "56,000"
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
var nullVar = null; // Variable explicitly assigned null
console.log(nullVar); // output: null
// UNDEFINED: A variable that has been declared but not assigned a value.
var undefinedVar; // Declared but not assigned a value
console.log(undefinedVar); // output: undefined
// ++++++++++++++++++++++++++++++++++++++++++++++  Type Inference & Annotations ++++++++++++++++++++++++++++++++++++++++++++++++++
// Type Inference
var number = 90; // TypeScript infers the type as number
console.log(typeof number); // output: number
// It's not a good practice because it may cause unexpected behavior as shown below
// The variable `number` could be assigned any type if not careful.
// Type Annotations
var string = 'Hello World'; // Explicitly annotating the variable type
// Syntax: let variableName: datatype = value;
console.log(typeof string); // output: string
// UNIONS 
var union = true;
console.log(union);
// Objects
var personInfo = {
    firstName: "Abubakar",
    lastName: "Khan",
    age: 12,
    // isLoggedIn: false
};
var conversion = function (num1, num2) {
    var sumofStr = parseInt(num1) + parseInt(num2);
    return sumofStr;
};
var convert = conversion("10", "30");
console.log(convert);
var userOne = {
    name: "Abubakar",
    age: 17,
    skills: ["MERN", "DOCKER"]
};
function generateError(errorMSG, code) {
    throw {
        message: errorMSG,
        code: code
    };
}
generateError("Error 404 Not Found", 404);
