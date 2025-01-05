"use strict";
// objects
// A comprehensive demonstration of TypeScript object features, including types, interfaces, nested objects, and dynamic keys.
console.log("Let's Learn Objects....");
// Create a user object conforming to the User type
const userOne = {
    id: 1,
    name: "Abubakar",
    isAdmin: true
};
console.log("User:", userOne); // Logs the user object to the console
// Create an object conforming to the MyCar interface
const myCar = {
    brand: "Mercedese",
    model: "S-Class",
    year: 2024
};
console.log("Car:", myCar); // Logs the car object to the console
// Create an object conforming to the Book interface
const myBook = {
    title: "A Journey to Web Development",
    author: "Abubakar",
    pages: 50
};
console.log("Book:", myBook); // Logs the book object to the console
// 4. Nested objects
const employee = {
    id: 1,
    name: "Abubakar",
    address: {
        city: "Karachi",
        state: "Sindh"
    }
};
console.log("Employee:", employee); // Logs the employee object to the console
// Create an object conforming to the Dictionary type
const dictionary = {
    Friend: "Your Friend", // Dynamic key-value pair
    Foe: "Enemy" // Another key-value pair
};
console.log("Dictionary:", dictionary); // Logs the dictionary object to the console
// classes
console.log("Let's Learn Classes....");
// Define a basic class of departments
class Department {
    constructor(n) {
        this.name = n;
    }
    display() {
        console.log(`This is a ${this.name} Department`);
    }
}
const accounting = new Department("Accounting");
accounting.display();
const it = new Department("IT");
it.display();
