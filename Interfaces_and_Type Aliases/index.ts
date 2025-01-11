//!! A Basic Introduction to Interfaces, Extending Interfaces, Type Aliases, and Intersection Types in TypeScript
// +++++++++++++++++++++++++++++++++++++++++ Interfaces +++++++++++++++++++++++++++++++++++++++++

//? 1. Define a Basic Interface
//? An interface is used to define the structure of an object. It specifies the required 
//? properties and their types, and it can also include optional properties.

// Define the `User` interface with mandatory and optional properties
interface User {
    name: string;       //* Mandatory string property for the user's name
    email: string;      //* Mandatory string property for the user's email
    password: string;   //* Mandatory string property for the user's password
    status?: boolean;   //* Optional boolean property for the user's status
}

// Define a function `abcd` that expects an argument conforming to the `User` interface
function abcd(obj: User): void {
    console.log(obj); //* Logs the object to the console
}

// Calling the `abcd` function with an object that satisfies the `User` interface
abcd({ name: "name", email: "qwerty@gmail.com", password: "none-22", status: true });
// output: { name: 'name', email: 'qwerty@gmail.com', password: 'none-22', status: true }

//--------------------------------------------------------------------------

// ++++++++++++++++++++++++++++++++ Extending Interfaces +++++++++++++++++++++++++++++++++

//? Interfaces in TypeScript can be extended, allowing one interface to inherit 
//? properties from another, effectively creating a hierarchy.

// Define a `Player` interface with attributes for players
interface Player {
    name: string;  //* Player's name
    age: number;   //* Player's age
    height: number; //* Player's height
    weight: number; //* Player's weight
}

// Define a `Captain` interface that extends `Player` and adds a new property
interface Captain extends Player {
    role: string;  //* Additional property specific to the Captain
}

// Define a function `team` that expects an argument conforming to the `Captain` interface
const team = (obj: Captain) => {
    console.log(obj); //* Logs the captain object to the console
};

// Call the `team` function with an object satisfying the `Captain` interface
team({ name: "Babar", age: 34, role: "Captain", height: 5.2, weight: 54 });
// output: { name: 'Babar', age: 34, role: 'Captain', height: 5.2, weight: 54 }

//TODO: Read more about Interfaces: https://www.typescriptlang.org/docs/handbook/2/objects.html#interfaces

//--------------------------------------------------------------------------

// ++++++++++++++++++++++++++++++++ Type Aliases +++++++++++++++++++++++++++++++++++++++++

//? Type aliases are another way to define custom types in TypeScript.
//? They are more flexible than interfaces because they can describe 
//? primitive types, unions, and other constructs.

// Define a type alias `customDT` that allows `string`, `boolean`, or `null` values
type customDT = string | boolean | null;

// Define a variable `value` of type `customDT`
let value: customDT = "STRING"; //* Can hold a string, boolean, or null

// Define a function `func` that accepts an argument of type `customDT`
function func(obj: customDT) {
    console.log(obj); //* Logs the input to the console
}
func(true); //* output: true

//TODO: Read more about Type Aliases: https://www.typescriptlang.org/docs/handbook/2/objects.html#type-aliases

//--------------------------------------------------------------------------

// +++++++++++++++++++++++++++++ Intersection Types +++++++++++++++++++++++++++++++++++++++++

//? Intersection types combine multiple types into one. 
//? The resulting type must satisfy all the combined types.

// Define a `User2` type with basic user properties
type User2 = {
    name: string;  //* User's name
    email: string; //* User's email
};

// Define an `Admin` type that combines `User2` with an additional property
type Admin = User2 & {
    getUserDetails(user: customDT): void; //* A method to fetch user details
};

// Define a function `role` that expects an argument conforming to the `Admin` type
function role(admin: Admin) {
    admin.getUserDetails("hello"); //* Calls the `getUserDetails` method
}

// Example Usage of the `role` function:
// The input object must include both the `name` and `email` properties and the `getUserDetails` method
const adminObj: Admin = {
    name: "AdminName",
    email: "admin@example.com",
    getUserDetails(user) {
        console.log(`User Details for: ${user}`);
    }
};

role(adminObj); //* output: User Details for: hello

// TODO: Read more about Intersection Types: https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types