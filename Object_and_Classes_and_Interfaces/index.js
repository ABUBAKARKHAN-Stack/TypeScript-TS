"use strict";
// TODO: Run: tsc -w First
// Objects
console.log("Let's Learn Objects...");
//* Create a user object conforming to the User type
const userOne = {
    id: 1,
    name: "Abubakar",
    isAdmin: true
};
console.log("User:", userOne); //* Logs the user object to the console
//* Create an object conforming to the MyCar interface
const myCar = {
    brand: "Mercedes",
    model: "S-Class",
    year: 2024
};
console.log("Car:", myCar); //* Logs the car object to the console
//* Create an object conforming to the Book interface
const myBook = {
    title: "A Journey to Web Development",
    author: "Abubakar",
    pages: 50
};
console.log("Book:", myBook); //* Logs the book object to the console
//--------------------------------------------------------------------------
//* 4. Nested objects
//? Demonstrates how to define and use nested objects in TypeScript.
const employeee = {
    id: 1,
    name: "Abubakar",
    address: {
        city: "Karachi",
        state: "Sindh"
    }
};
console.log("Employee:", employeee); //* Logs the employee object to the console
//* Create an object conforming to the Dictionary type
const dictionary = {
    Friend: "Your Friend", //* Example of a dynamic key-value pair
    Foe: "Enemy" //* Another dynamic key-value pair
};
console.log("Dictionary:", dictionary); //* Logs the dictionary object to the console
//--------------------------------------------------------------------------
// Classes
console.log("Let's Learn Classes...");
//* 1. Define a basic class for departments
//? This demonstrates how to create a class with a property and a method.
class Department {
    constructor(depName) {
        this.name = depName; //* Initializes the department name
    }
    //* Method to describe the department
    describe() {
        console.log("Department: " + this.name); //* Logs the department name to the console
    }
}
//* Creating an instance of the Department class
const accounting = new Department("Accounting");
accounting.describe(); //* Calls the describe method to log the department name
//--------------------------------------------------------------------------
//* 2. Inheritance with Protected and Private Access Modifiers
//? What is Inheritance?
/*
    //* Inheritance allows a class (subclass) to inherit properties and methods from another class (superclass).
    //* - Use the `extends` keyword to create a subclass.
    //* - Subclasses can override or extend the behavior of the base class.
*/
//? What are Access Modifiers?
/*
    //* Access modifiers control the visibility of class members:
    //* - public: Members are accessible from anywhere.
    //* - private: Members are accessible only within the defining class.
    //* - protected: Members are accessible within the class and its subclasses.
*/
//* Demonstrating inheritance with access modifiers
class AddEmployee extends Department {
    constructor(employee = [], //? A protected property for storing employee data (accessible in subclasses)
    id = Math.random().toString(36).substr(2, 9) //* Generates a random unique ID for employees
    ) {
        super("Finance"); //* Calls the constructor of the parent class with the department name
        this.employee = employee;
        this.id = id;
    }
    //* Method to add an employee to the department
    addEmployee(name) {
        this.employee.push({
            name, //* Employee name
            id: this.id //* Employee ID (generated when the class is instantiated)
        });
    }
    //* Method to describe the department and list its employees
    describeDepartment() {
        console.log(`Employees in ${this.name} Department:`, this.employee); //* Logs employee data
    }
    //* Method to display the total number of employees in the department
    showNumberOfEmployees() {
        console.log(`Number of Employees in ${this.name} Department:`, this.employee.length);
    }
}
//* Creating an instance of AddEmployee
const addingEmployee = new AddEmployee();
addingEmployee.describe(); //* Logs the department name
//! Error: The `employee` property is protected and cannot be accessed outside the class or its subclasses.
// addingEmployee.employee;
//* Adding employees to the department
addingEmployee.addEmployee("Abubakar");
addingEmployee.addEmployee("Ali");
addingEmployee.addEmployee("Ahmed");
//* Logs the employees in the department
addingEmployee.describeDepartment();
//* Logs the total number of employees
addingEmployee.showNumberOfEmployees();
//--------------------------------------------------------------------------
//* 3. Read-Only Property
//? Read-only properties can only be assigned during initialization and cannot be changed later.
class ReadOnlyProperty {
    constructor(name) {
        this.name = name;
        this.name = name; //* Initializes the read-only property
    }
}
const readOnly = new ReadOnlyProperty("Read Only Property");
//! Error: Cannot assign to `name` because it is a read-only property.
// readOnly.name = "New Name";
//--------------------------------------------------------------------------
//* 4. Static Properties and Methods
//? Static members belong to the class itself and are not tied to any instance.
class StaticProperty {
    static staticMethod() {
        console.log("Static Method"); //* Logs a message to the console
    }
}
StaticProperty.staticProperty = "Static Property"; //* Static property accessible via the class
//* Accessing static members without creating an instance of the class
console.log(StaticProperty.staticProperty); //* Logs: Static Property
StaticProperty.staticMethod(); //* Logs: Static Method
//--------------------------------------------------------------------------
//* 5. Abstract Classes
//? Abstract classes cannot be instantiated directly and are meant to be inherited by subclasses.
//? They act as blueprints for other classes.
class AbstractClass {
}
//! Error: Cannot create an instance of an abstract class.
// const abstract = new AbstractClass();
//* Implementing an abstract class with a subclass
class SubClass extends AbstractClass {
    constructor() {
        super(...arguments);
        this.abstractProperty = "Abstract Property"; //* Implements the abstract property
    }
    //* Implements the abstract method
    abstractMethod() {
        console.log("Abstract Method"); //* Logs a message to the console
    }
}
//* Creating an instance of the subclass
const subClass = new SubClass();
subClass.abstractMethod(); //* Logs: Abstract Method
console.log(subClass.abstractProperty); //* Logs: Abstract Property
//--------------------------------------------------------------------------
// Interfaces
console.log("Let's Learn Interfaces...");
//* Create an object of type Person
const p1 = {
    name: "Abubakar",
    age: 17,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    },
};
console.log("Person:", p1); //* Logs the person object to the console
p1.greet(); //* Calls the greet method
//* Creating a car object with all properties defined
const car1 = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
    VIN: "123456789",
    getCarDetails() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
    },
};
console.log("Car1:", car1); //* Logs the car object to the console
car1.getCarDetails(); //* Logs car details
//* Creating another car object without the optional `year` property
const car2 = {
    brand: "Suzuki",
    model: "Cultus",
    VIN: "987654321",
    getCarDetails() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}`);
    },
};
console.log("Car2:", car2); //* Logs the car object to the console
car2.getCarDetails(); //* Logs car details
//* Object for addition that implements the interface
const addition = {
    calculate(a, b) {
        return a + b; //* Returns the sum of two numbers
    },
};
console.log("Addition Result:", addition.calculate(10, 30)); //* Logs 10 + 30 = 40
//* Object for multiplication that implements the interface
const multiplication = {
    calculate(a, b) {
        return a * b; //* Returns the product of two numbers
    },
};
console.log("Multiplication Result:", multiplication.calculate(10, 220)); //* Logs 10 * 220 = 2200
//* Creating a Dog object
const dog = {
    name: "CHOP",
    age: 1,
    makeSound() {
        console.log(`${this.name} makes a sound: Bhu Bhu Bhu!!!`);
    },
    fetch() {
        console.log("Fetching the ball!");
    },
    interactWithDog() {
        //* Calls both makeSound and fetch
        this.makeSound();
        this.fetch();
    },
};
console.log("Dog:", dog); //* Logs the dog object to the console
dog.interactWithDog(); //* Interacts with the dog
const oxfordDic = {}; //* Empty dictionary
//* Function to add a new word and its definition
function addWord(dictionary, word, definition) {
    dictionary[word] = definition; //* Adds a new key-value pair
    console.log(`Added: ${word} - ${definition}`);
}
//* Adding words to the dictionary
addWord(oxfordDic, "Foe", "Enemy");
addWord(oxfordDic, "Galaxy", "A huge collection of gas, dust, and billions of stars.");
console.log("Dictionary:", oxfordDic); //* Logs the updated dictionary
//* Function to retrieve a definition
function getDefinition(dictionary, word) {
    dictionary[word]
        ? console.log(`Definition of ${word}: ${dictionary[word]}`)
        : console.log(`Word '${word}' not found.`);
}
//* Retrieving definitions
getDefinition(oxfordDic, "Foe"); //* Logs: Enemy
getDefinition(oxfordDic, "Unknown"); //* Logs: Word 'Unknown' not found
//* Class Circle implements the `Shape` interface
class Circle {
    constructor(radius) {
        this.radius = radius;
    } //* Initializes the radius property
    //* Method to calculate the area of the circle
    calculateArea() {
        return (Math.PI * (this.radius * this.radius)); //* Formula for area of a circle
    }
    //* Method to describe the circle with its area
    describe() {
        return `Area of Circle with Radius ${this.radius} is ${this.calculateArea()}`;
    }
}
//* Creating an instance of Circle
const circle = new Circle(3.4);
console.log(parseInt(circle.calculateArea().toFixed(2))); //* Logs the area (rounded to 2 decimal places)
//* Class Dog2 implements the Pet interface
class Dog2 {
    constructor(n, sound) {
        this.sound = sound;
        this.name = n; //* Initializes the name of the dog
    }
    //* Method to log the dog's sound
    makeSound() {
        console.log(`Dog Sound is ${this.sound}`);
    }
    //* Method to log the dog's play behavior
    play() {
        console.log(`Playing Fetch`);
    }
}
//* Creating an instance of Dog2
const dog2 = new Dog2("Sparky", "Bhu Bhu Bhu!!!");
dog2.makeSound(); //* Logs the dog's sound
dog2.play(); //* Logs the dog's play behavior
//* Implement the Vehicle interface in the Car2 class
class Car2 {
    constructor(m, y) {
        this.model = m; //* Initializes the car's model
        this.year = y; //* Initializes the optional year (if provided)
    }
    //* Method to start the car's engine
    start(engineType) {
        return engineType; //* Returns the type of engine used
    }
}
//* Creating a Car2 instance without the optional `year` property
const vigo = new Car2("New Model", undefined); //* Year is not provided
console.log(vigo.start("Patrol Engine")); //* Logs: Patrol Engine
//* Creating a Car2 instance with all properties, including `year`
const corolla = new Car2("Hyundai", 2022); //* Initializes model and year
console.log(corolla.start("Diesel Engine")); //* Logs: Diesel Engine
//--------------------------------------------------------------------------
