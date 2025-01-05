// objects
// A comprehensive demonstration of TypeScript object features, including types, interfaces, nested objects, and dynamic keys.

console.log("Let's Learn Objects....");

// 1. Defining a User type with specific properties
type User = {
    id: number;          // The unique identifier for the user
    name: string;        // The name of the user
    isAdmin: boolean;    // Whether the user has admin privileges
};

// Create a user object conforming to the User type
const userOne: User = {
    id: 1,
    name: "Abubakar",
    isAdmin: true
};
console.log("User:", userOne); // Logs the user object to the console

// 2. Using an interface for a car
interface MyCar {
    brand: string;       // The brand of the car (e.g., "Toyota")
    model: string;       // The model of the car (e.g., "Corolla")
    year?: number;       // The year of manufacture (optional)
}

// Create an object conforming to the MyCar interface
const myCar: MyCar = {
    brand: "Mercedese",
    model: "S-Class",
    year: 2024
};
console.log("Car:", myCar); // Logs the car object to the console

// 3. Readonly properties with an interface
interface Book {
    readonly title: string; // The title of the book (read-only, cannot be modified)
    author: string;         // The author of the book
    pages: number;          // The number of pages in the book
}

// Create an object conforming to the Book interface
const myBook: Book = {
    title: "A Journey to Web Development",
    author: "Abubakar",
    pages: 50
};
console.log("Book:", myBook); // Logs the book object to the console

// 4. Nested objects
const employee: {
    id: number;              // Employee ID
    name: string;            // Employee name
    address: {               // Nested address object
        city: string;        // The city of the employee
        state: string;       // The state of the employee
    };
} = {
    id: 1,
    name: "Abubakar",
    address: {
        city: "Karachi",
        state: "Sindh"
    }
};
console.log("Employee:", employee); // Logs the employee object to the console

// 5. Dynamic keys with index signatures
type Dictionary = {
    [key: string]: string; // Allows any string key with a string value
};

// Create an object conforming to the Dictionary type
const dictionary: Dictionary = {
    Friend: "Your Friend", // Dynamic key-value pair
    Foe: "Enemy"           // Another key-value pair
};
console.log("Dictionary:", dictionary); // Logs the dictionary object to the console


// classes

console.log("Let's Learn Classes....");


// Define a basic class of departments
class Department {
    name: string;
    constructor(n: string) {
        this.name = n
    }
    display() {
        console.log(`This is a ${this.name} Department`);
    }
}

const accounting = new Department("Accounting")
accounting.display()

const it = new Department("IT")
it.display()

