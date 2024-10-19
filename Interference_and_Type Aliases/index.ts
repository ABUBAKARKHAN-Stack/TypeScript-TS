// ++++++++++++++++++++++++++++++++++ Interfaces +++++++++++++++++++++++++++++++++++++++++

// Define Basic Interface 
// An interface is used to define the structure of an object. It specifies what properties 
// an object should have and their respective types.

// We use the keyword `interface` to define an interface in TypeScript.
// In this example, the interface `User` defines a contract where the object must 
// have `name`, `email`, and `password` properties as strings, and an optional `status` as boolean.
interface User {
    name: string,       // Mandatory string property
    email: string,      // Mandatory string property
    password: string,   // Mandatory string property
    status?: boolean    // Optional boolean property (denoted by ?)
}

// This function expects an object of type `User`, and it will log the object to the console.
function abcd(obj: User): void {
    console.log(obj);
}

// Calling the function `abcd` with an object that satisfies the `User` interface.
abcd({ name: "name", email: 'qwerty@gmail.com', password: 'none-22', status: true }) 
// output: { name: 'name', email: 'qwerty@gmail.com', password: 'none-22', status: true }

// ++++++++++++++++++++++++++++++++++ Extend Interfaces +++++++++++++++++++++++++++++++++++++++++

// An interface can also extend another interface. 
// This allows the new interface to inherit properties from the parent interface.

// Define `Player` interface representing player attributes.
interface Player {
    name: string,
    age: number,
    height: number,
    weight: number
}

// Define `Captain` interface, which extends the `Player` interface.
// The `Captain` interface inherits all properties of `Player` and adds a new property, `role`.
interface Captain extends Player {
    role: string  // New property specific to Captain
}

// This function accepts an object of type `Captain`, which includes all properties from `Player` and `Captain`.
const team = (obj: Captain) => {
    console.log(obj);
}

// Call the `team` function with an object that satisfies the `Captain` interface.
team({ name: 'Babar', age: 34, role: 'Captain', height: 5.2, weight: 54 })
// output: { name: 'Babar', age: 34, role: 'Captain', height: 5.2, weight: 54 }


// +++++++++++++++++++++++++++++++++++++++++++ Type Aliases ++++++++++++++++++++++++++++++++++++++++++++++++++

// A type alias is another way to define custom data types in TypeScript.
// Unlike interfaces, type aliases can describe primitive types, unions, and other constructs.

// `customDT` is a type alias that allows values of type `string`, `boolean`, or `null`.
type customDT = string | boolean | null;

// Here, the variable `value` must be of type `customDT`.
let value: customDT = "STRING"

// This function accepts an argument of type `customDT`, meaning it can take a string, boolean, or null.
function func(obj: customDT) {
    console.log(obj);
}
func(true)  // output: true

// ++++++++++++++++++++++++++++++++++++++++++++++++ Intersection types ++++++++++++++++++++++++++++++++++++++++++++++++

// Intersection types combine multiple types into one, 
// meaning the final type must satisfy all combined types.

// Here, `User2` is an object type with `name` and `email` properties.
type User2 = {
    name: string,
    email: string,
}

// `Admin` is an intersection of `User2` and an additional type that includes a method `getUserDetails`.
type Admin = User2 & {
    getUserDetails(user: customDT): void
}

// The `role` function accepts an argument of type `Admin`, meaning it expects both 
// the properties from `User2` and the `getUserDetails` method.
function role(admin: Admin) {
    admin.getUserDetails('hello')
}

// Example usage of the `role` function would require an object that has both 
// the `name`, `email` properties and the `getUserDetails` method.
