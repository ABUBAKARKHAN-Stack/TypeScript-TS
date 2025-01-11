// TODO: Run: tsc -w First

// Objects
console.log("Let's Learn Objects...");

//* 1. Defining a User type with specific properties
//? This demonstrates how to define a custom type and create an object conforming to it.
type User = {
    id: number;          //? 1. Unique identifier for the user
    name: string;        //? 2. Name of the user
    isAdmin: boolean;    //? 3. Indicates if the user has admin privileges
};

//* Create a user object conforming to the User type
const userOne: User = {
    id: 1,
    name: "Abubakar",
    isAdmin: true
};
console.log("User:", userOne); //* Logs the user object to the console

//--------------------------------------------------------------------------

//* 2. Using an interface for a car
//? Interfaces are used to define the structure of an object and enforce type safety.
interface MyCar {
    brand: string;       //? 1. Brand of the car (e.g., "Toyota")
    model: string;       //? 2. Model of the car (e.g., "Corolla")
    year?: number;       //? 3. Optional property for the car's year of manufacture
}

//* Create an object conforming to the MyCar interface
const myCar: MyCar = {
    brand: "Mercedes",
    model: "S-Class",
    year: 2024
};
console.log("Car:", myCar); //* Logs the car object to the console

//--------------------------------------------------------------------------

//* 3. Readonly properties with an interface
//? Demonstrates how to use readonly properties to make certain fields immutable.
interface Book {
    readonly title: string; //? 1. Title of the book (cannot be changed after initialization)
    author: string;         //? 2. Author of the book
    pages: number;          //? 3. Total number of pages in the book
}

//* Create an object conforming to the Book interface
const myBook: Book = {
    title: "A Journey to Web Development",
    author: "Abubakar",
    pages: 50
};
console.log("Book:", myBook); //* Logs the book object to the console

//--------------------------------------------------------------------------

//* 4. Nested objects
//? Demonstrates how to define and use nested objects in TypeScript.
const employeee: {
    id: number;              //? 1. Unique identifier for the employee
    name: string;            //? 2. Name of the employee
    address: {               //? 3. Address object containing additional details
        city: string;        //? 4. City of residence
        state: string;       //? 5. State of residence
    };
} = {
    id: 1,
    name: "Abubakar",
    address: {
        city: "Karachi",
        state: "Sindh"
    }
};
console.log("Employee:", employeee); //* Logs the employee object to the console

//--------------------------------------------------------------------------

//* 5. Dynamic keys with index signatures
//? Demonstrates how to use index signatures to define objects with dynamic keys.
type Dictionary = {
    [key: string]: string; //? Allows any string key with a string value
};

//* Create an object conforming to the Dictionary type
const dictionary: Dictionary = {
    Friend: "Your Friend", //* Example of a dynamic key-value pair
    Foe: "Enemy"           //* Another dynamic key-value pair
};
console.log("Dictionary:", dictionary); //* Logs the dictionary object to the console

//--------------------------------------------------------------------------

// Classes

console.log("Let's Learn Classes...");

//* 1. Define a basic class for departments
//? This demonstrates how to create a class with a property and a method.
class Department {
    public name: string; //* Public property for storing the department name (accessible everywhere)

    constructor(depName: string) {
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
    constructor(
        protected employee: object[] = [], //? A protected property for storing employee data (accessible in subclasses)
        private id: string = Math.random().toString(36).substr(2, 9) //* Generates a random unique ID for employees
    ) {
        super("Finance"); //* Calls the constructor of the parent class with the department name
    }

    //* Method to add an employee to the department
    addEmployee(name: string) {
        this.employee.push({
            name,       //* Employee name
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
    constructor(public readonly name: string) {
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
    static staticProperty = "Static Property"; //* Static property accessible via the class
    static staticMethod() { //* Static method accessible via the class
        console.log("Static Method"); //* Logs a message to the console
    }
}

//* Accessing static members without creating an instance of the class
console.log(StaticProperty.staticProperty); //* Logs: Static Property
StaticProperty.staticMethod(); //* Logs: Static Method

//--------------------------------------------------------------------------

//* 5. Abstract Classes
//? Abstract classes cannot be instantiated directly and are meant to be inherited by subclasses.
//? They act as blueprints for other classes.
abstract class AbstractClass {
    abstract abstractMethod(): void; //* Abstract method (must be implemented in a subclass)
    abstract abstractProperty: string; //* Abstract property (must be implemented in a subclass)
}

//! Error: Cannot create an instance of an abstract class.
// const abstract = new AbstractClass();

//* Implementing an abstract class with a subclass
class SubClass extends AbstractClass {
    abstractProperty = "Abstract Property"; //* Implements the abstract property

    //* Implements the abstract method
    abstractMethod(): void {
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

//? What are Interfaces?
/*
    //* Interfaces define the structure of an object and its properties.
    //* - Interfaces can be used to define custom types.
    //* - Interfaces enforce the structure of objects, ensuring type safety.
    //* - They support optional properties, readonly properties, method definitions, and inheritance.
*/

//* 1. Define an interface Person with the following properties:
//? - name: string (The name of the person)
//? - age: number (The age of the person)
//? - greet: a method that takes no arguments and returns void

interface Person {
    name: string; //* Name of the person
    age: number; //* Age of the person
    greet(): void; //* Method to log a greeting message
}

//* Create an object of type Person
const p1: Person = {
    name: "Abubakar",
    age: 17,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    },
};
console.log("Person:", p1); //* Logs the person object to the console
p1.greet(); //* Calls the greet method

//---------------------------------------------------------------------------

//* 2. Define an interface Car with the following properties:
//? - brand (string, required): Brand name of the car
//? - model (string, required): Model of the car
//? - year (number, optional): Year of manufacture (may not always be provided)
//? - VIN (string, readonly): Vehicle Identification Number (cannot be changed)
//? - getCarDetails(): Method to log car details

interface Car {
    brand: string; //* The car's brand (e.g., "Toyota")
    model: string; //* The car's model (e.g., "Corolla")
    year?: number; //* Optional property for the car's year
    readonly VIN: string; //* Readonly property for the car's VIN
    getCarDetails(): void; //* Method to display car details
}

//* Creating a car object with all properties defined
const car1: Car = {
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
const car2: Car = {
    brand: "Suzuki",
    model: "Cultus",
    VIN: "987654321",
    getCarDetails() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}`);
    },
};
console.log("Car2:", car2); //* Logs the car object to the console
car2.getCarDetails(); //* Logs car details

//---------------------------------------------------------------------------

//* 3. Define an interface MathOperations with the following:
//? - A method `calculate(a: number, b: number): number`
//? - Implement two objects:
//?     - Addition: Implements the interface and returns the sum of `a` and `b`.
//?     - Multiplication: Implements the interface and returns the product of `a` and `b`.

interface MathOperations {
    calculate(a: number, b: number): number; //* Method to perform a calculation
}

//* Object for addition that implements the interface
const addition: MathOperations = {
    calculate(a, b) {
        return a + b; //* Returns the sum of two numbers
    },
};
console.log("Addition Result:", addition.calculate(10, 30)); //* Logs 10 + 30 = 40

//* Object for multiplication that implements the interface
const multiplication: MathOperations = {
    calculate(a, b) {
        return a * b; //* Returns the product of two numbers
    },
};
console.log("Multiplication Result:", multiplication.calculate(10, 220)); //* Logs 10 * 220 = 2200

//---------------------------------------------------------------------------

//* 4. Create an interface Animal with the following:
//? - name (string): The name of the animal
//? - age (number): The age of the animal
//? - makeSound(): A method that logs a sound

//* Extend Animal into a new interface Dog with an additional method:
//? - fetch(): A method that logs "Fetching the ball!"

interface Animal {
    name: string; //* Name of the animal
    age: number; //* Age of the animal
    makeSound(): void; //* Method to log the animal's sound
}

//* Dog interface extends Animal and adds more functionality
interface Dog extends Animal {
    fetch(): void; //* Method for fetching an item
    interactWithDog(): void; //* Method to interact with the dog
}

//* Creating a Dog object
const dog: Dog = {
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

//---------------------------------------------------------------------------

//* 5. Define an interface Dictionary with dynamic keys:
//? - Allows string keys and string values
//? - Write a function `addWord(dictionary, word, definition)` to add new words
//? - Write another function `getDefinition(dictionary, word)` to retrieve definitions

interface Dictionary2 {
    [key: string]: string; //* Index signature for dynamic keys and values
}

const oxfordDic: Dictionary2 = {}; //* Empty dictionary

//* Function to add a new word and its definition
function addWord(dictionary: Dictionary2, word: string, definition: string): void {
    dictionary[word] = definition; //* Adds a new key-value pair
    console.log(`Added: ${word} - ${definition}`);
}

//* Adding words to the dictionary
addWord(oxfordDic, "Foe", "Enemy");
addWord(oxfordDic, "Galaxy", "A huge collection of gas, dust, and billions of stars.");
console.log("Dictionary:", oxfordDic); //* Logs the updated dictionary

//* Function to retrieve a definition
function getDefinition(dictionary: Dictionary2, word: string): void {
    dictionary[word]
        ? console.log(`Definition of ${word}: ${dictionary[word]}`)
        : console.log(`Word '${word}' not found.`);
}

//* Retrieving definitions
getDefinition(oxfordDic, "Foe"); //* Logs: Enemy
getDefinition(oxfordDic, "Unknown"); //* Logs: Word 'Unknown' not found


//--------------------------------------------------------------------------

//* Interface with Class
//* 1. Interface Shape and Class Circle
//? Define an interface `Shape` with methods to calculate area and describe the shape.
interface Shape {
    calculateArea(): number; //* Method to calculate the area
    describe(): string;      //* Method to describe the shape
}

//* Class Circle implements the `Shape` interface
class Circle implements Shape {
    constructor(public radius: number) { } //* Initializes the radius property

    //* Method to calculate the area of the circle
    calculateArea(): number {
        return (Math.PI * (this.radius * this.radius)); //* Formula for area of a circle
    }

    //* Method to describe the circle with its area
    describe(): string {
        return `Area of Circle with Radius ${this.radius} is ${this.calculateArea()}`;
    }
}

//* Creating an instance of Circle
const circle = new Circle(3.4);
console.log(parseInt(circle.calculateArea().toFixed(2))); //* Logs the area (rounded to 2 decimal places)

//--------------------------------------------------------------------------

//* 2. Interface Animal2 and Pet, Class Dog2
//? Define an interface `Animal2` with basic animal properties and methods.
interface Animal2 {
    name: string; //* Name of the animal
    makeSound(): void; //* Method to log the sound of the animal
}

//? Extend the Animal2 interface into a new interface `Pet` with additional methods.
interface Pet extends Animal2 {
    play(): void; //* Method to log the pet's play behavior
}

//* Class Dog2 implements the Pet interface
class Dog2 implements Pet {
    name: string; //* Name of the dog
    constructor(n: string, public sound: string) {
        this.name = n; //* Initializes the name of the dog
    }

    //* Method to log the dog's sound
    makeSound(): void {
        console.log(`Dog Sound is ${this.sound}`);
    }

    //* Method to log the dog's play behavior
    play(): void {
        console.log(`Playing Fetch`);
    }
}

//* Creating an instance of Dog2
const dog2 = new Dog2("Sparky", "Bhu Bhu Bhu!!!");
dog2.makeSound(); //* Logs the dog's sound
dog2.play(); //* Logs the dog's play behavior

//--------------------------------------------------------------------------

//* 3. Interface Vehicle and Class Car2
//? Define an interface `Vehicle` to enforce the structure for vehicle-related classes
interface Vehicle {
    model: string; //* Model name of the vehicle
    year?: number; //* Optional year of manufacture for the vehicle
    start(engineType: string): string; //* Method to start the engine, returning the engine type
}

//* Implement the Vehicle interface in the Car2 class
class Car2 implements Vehicle {
    model: string; //* Model of the car
    year?: number | undefined; //* Optional year property
    constructor(m: string, y: number | undefined) {
        this.model = m; //* Initializes the car's model
        this.year = y; //* Initializes the optional year (if provided)
    }

    //* Method to start the car's engine
    start(engineType: string): string {
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