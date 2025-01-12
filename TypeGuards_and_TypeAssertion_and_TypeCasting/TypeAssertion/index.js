"use strict";
//TODO: Run tsc -w to Start the TypeScript Compiler in Watch Mode
console.log("Let's Learn About TypeAssertion in TypeScript");
//* What is TypeAssertion?
//? - TypeAssertion is a way to tell the TypeScript Compiler that you know more about the type of a value than it does.
//? - It is like type casting in other languages, but it performs no special checking or restructuring of data.
//! - Note: TypeAssertion has no runtime impact and is used purely by the TypeScript Compiler.
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++ Example 1: TypeAssertion with Strings +++++++++++++++++++++++
function toUpperCase(value) {
    const str = value; //* Assert that the value is a string
    if (typeof str === "string") {
        return str; //? Returns the value if it's a string
    }
    throw new Error("Value must be a string"); //! Throws an error if the value isn't a string
}
console.log(toUpperCase("typescript")); // Output: "TYPESCRIPT"
//! Example object of unknown type
const data = { name: "TypeScript", version: 5 };
//* Assert that `data` matches the `obj` type
const newData = data;
//? Function to check if the name property exists and log it
function checkName(obj) {
    if ("name" in obj) {
        const { name } = obj;
        console.log(name); //? Logs the name property if it exists
    }
    else {
        throw Error("Name Property Does Not Exist"); //! Throws an error if the name property is missing
    }
}
checkName(newData); // Output: "TypeScript"
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++ Example 3: TypeAssertion with DOM Elements +++++++++++++++++++++++
//* Use TypeAssertion to handle DOM elements
const userInput = document.querySelector('#user-input'); //? Assert as HTMLInputElement or null
// Alternative syntax: const userInput = <HTMLInputElement>document.querySelector('#user-input');
if (userInput) {
    userInput.value = "Hello TypeScript"; //? Sets the value if the element exists
}
else {
    console.error("Element with id 'user-input' not found"); //! Logs an error if the element doesn't exist
}
//? Function to get the user's name if it exists
function getUserName(value) {
    if (typeof value === "object" && value !== null && "user" in value) {
        const { user } = value; //* Assert that value matches the structure of UnknownObj
        return user === null || user === void 0 ? void 0 : user.name; //? Use optional chaining to safely access the name
    }
    console.error("The Property user does not exist in this object", value); //! Logs an error if the structure is incorrect
    return undefined; //? Returns undefined if the user property is missing
}
console.log(getUserName({ user: { name: "Alice" } })); // Output: "Alice"
console.log(getUserName({})); // Output: undefined
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++ Example 5: TypeAssertion with String Length +++++++++++++++++++++++
//? Function to calculate the length of a string
function getStringLength(value) {
    if (typeof value === "string") {
        return value.length; //? Returns the length if the value is a string
    }
    throw new Error("Value must be a string"); //! Throws an error for non-string values
}
console.log(getStringLength("Hello TypeScript")); // Output: 16
//! console.log(getStringLength(42)); // Uncomment to see runtime failure due to incorrect type
