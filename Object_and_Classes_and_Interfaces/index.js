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
//* 4. Nested objects
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
    Friend: "Your Friend", //* Dynamic key-value pair
    Foe: "Enemy" //* Another key-value pair
};
console.log("Dictionary:", dictionary); //* Logs the dictionary object to the console
// Classes
console.log("Let's Learn Classes...");
//* Define a basic class of departments
class Department {
    constructor(depName) {
        this.name = depName;
    }
    describe() {
        console.log("Department: " + this.name); //* Logs the department name
    }
}
const accounting = new Department("Accounting"); //* Creating an instance of the Department class
accounting.describe(); //* Logs the department name to the console
//* Now Inheritance with Protected and Private Access Modifiers
//? What is Inheritance?
/*
    //* Inheritance is a mechanism where one class acquires the properties and behavior of another class.
    //* - The derived class (subclass) inherits from the base class (superclass).
    //* - The `extends` keyword is used for inheritance in TypeScript.
*/
//* Access Modifiers: public, private, protected
//? What are Access Modifiers?
/*
    //* Access modifiers define the visibility of class members (properties and methods).
    //* - public: Accessible from anywhere (default).
    //* - private: Accessible only within the class.
    //* - protected: Accessible within the class and its subclasses.
*/
//* Demonstrating access modifiers in TypeScript using the Department class.
class AddEmployee extends Department {
    constructor(employee = [], //? A protected property for storing employee data
    id = Math.random().toString(36).substr(2, 9) //* Generates a random unique ID for employees
    ) {
        super("Finance"); //* Calls the constructor of the base class with the department name
        this.employee = employee;
        this.id = id;
    }
    //* Method to add an employee to the department
    addEmployee(name) {
        this.employee.push({
            name,
            id: this.id //* Assigns a unique ID to the employee
        });
    }
    //* Method to describe the department
    describeDepartment() {
        console.log(`Employees in ${this.name} Department:`, this.employee);
    }
    //* Method to display the number of employees
    showNumberOfEmployees() {
        console.log(`Number of Employees in ${this.name} Department:`, this.employee.length);
    }
}
const addingEmployee = new AddEmployee(); //* Creating an instance of AddEmployee class
addingEmployee.describe(); //* Logs the department name to the console
//! Error: "addingEmployee.employee" is protected and only accessible within 'AddEmployee' or its subclasses.
addingEmployee.addEmployee("Abubakar"); //* Adding an employee to the department
addingEmployee.addEmployee("Ali"); //* Adding another employee
addingEmployee.addEmployee("Ahmed"); //* Adding yet another employee
addingEmployee.describeDepartment(); //* Logs the employees in the department
addingEmployee.showNumberOfEmployees(); //* Logs the number of employees in the department
//* Read-Only Property
//* A read-only property can only be initialized once and cannot be changed later.
class ReadOnlyProperty {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
}
const readOnly = new ReadOnlyProperty("Read Only Property");
//! Error: Cannot assign to 'name' because it is a read-only property.
//! readOnly.name = "New Name";
//* Static Properties and Methods
//* Static properties and methods belong to the class itself, not the instances.
class StaticProperty {
    static staticMethod() {
        console.log("Static Method");
    }
}
StaticProperty.staticProperty = "Static Property"; //* Static property
console.log(StaticProperty.staticProperty); //* Logs the static property to the console
