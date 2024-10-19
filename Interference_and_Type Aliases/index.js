"use strict";
// ++++++++++++++++++++++++++++++++++ Interfaces +++++++++++++++++++++++++++++++++++++++++
// This function expects an object of type `User`, and it will log the object to the console.
function abcd(obj) {
    console.log(obj);
}
// Calling the function `abcd` with an object that satisfies the `User` interface.
abcd({ name: "name", email: 'qwerty@gmail.com', password: 'none-22', status: true });
// This function accepts an object of type `Captain`, which includes all properties from `Player` and `Captain`.
const team = (obj) => {
    console.log(obj);
};
// Call the `team` function with an object that satisfies the `Captain` interface.
team({ name: 'Babar', age: 34, role: 'Captain', height: 5.2, weight: 54 });
// Here, the variable `value` must be of type `customDT`.
let value = "STRING";
// This function accepts an argument of type `customDT`, meaning it can take a string, boolean, or null.
function func(obj) {
    console.log(obj);
}
func(true); // output: true
// The `role` function accepts an argument of type `Admin`, meaning it expects both 
// the properties from `User2` and the `getUserDetails` method.
function role(admin) {
    admin.getUserDetails('hello');
}
// Example usage of the `role` function would require an object that has both 
// the `name`, `email` properties and the `getUserDetails` method.
