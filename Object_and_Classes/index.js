"use strict";
// Classes and Objects
// Class Definition
// Constructors 
// Access Modifiers (public , private , protected)
// Read only properties
// Optional properties
// Parameters properties
// Getters ans setters
// Static members
// Abstract classes and methods
// Class Definition
// this is how we create classes
class bottle {
}
// how to access classes ?
let b1 = new bottle(); // this is how we access class
// Constructors 
class BottleMaker {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
let bottle1 = new BottleMaker('Camel Mountain', 1000);
class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}
let user1 = new User('XYZ', 'xyz@outlook.com', 'qwerty');
console.log("User 1", user1);
