"use strict";
// +++++++++++++++++++++++++++++++++++++++++ Interfaces +++++++++++++++++++++++++++++++++++++++++
// Define a function `abcd` that expects an argument conforming to the `User` interface
function abcd(obj) {
    console.log(obj); //* Logs the object to the console
}
// Calling the `abcd` function with an object that satisfies the `User` interface
abcd({ name: "name", email: "qwerty@gmail.com", password: "none-22", status: true });
// Define a function `team` that expects an argument conforming to the `Captain` interface
const team = (obj) => {
    console.log(obj); //* Logs the captain object to the console
};
// Call the `team` function with an object satisfying the `Captain` interface
team({ name: "Babar", age: 34, role: "Captain", height: 5.2, weight: 54 });
// Define a variable `value` of type `customDT`
let value = "STRING"; //* Can hold a string, boolean, or null
// Define a function `func` that accepts an argument of type `customDT`
function func(obj) {
    console.log(obj); //* Logs the input to the console
}
func(true); //* output: true
// Define a function `role` that expects an argument conforming to the `Admin` type
function role(admin) {
    admin.getUserDetails("hello"); //* Calls the `getUserDetails` method
}
// Example Usage of the `role` function:
// The input object must include both the `name` and `email` properties and the `getUserDetails` method
const adminObj = {
    name: "AdminName",
    email: "admin@example.com",
    getUserDetails(user) {
        console.log(`User Details for: ${user}`);
    }
};
role(adminObj); //* output: User Details for: hello
// TODO: Read more about Intersection Types: https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types
