// TODO: Run tsc -w to Run the TypeScript Compiler in Watch Mode
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
console.log("Let's Learn Generics in TypeScript"); // Logs a starting message to the console.
//* =============================== Generics in TypeScript =============================== //
//? - Generics allow us to create reusable, type-safe components in TypeScript.
//? - With Generics, functions, interfaces, and classes can handle different types while ensuring type safety.
//* =============================== Why Use Generics? =============================== //
//? - Write reusable code that works with multiple types.
//? - Maintain type safety and reduce runtime errors by enforcing type constraints.
//* =============================== Generic Function Example =============================== //
//* This generic function returns the input value without modifying it.
function identity(value) {
    return value; // Returns the value as it is.
}
console.log(identity("HELLO")); // Calls the function with a string value.
console.log(identity(100)); // Explicitly specifies the type as `number` and passes 100.
//* =============================== Wrap Value in an Array =============================== //
//* A generic function that wraps any value inside an array.
function wrapInArray(value) {
    return [value]; // Returns an array containing the value.
}
console.log(wrapInArray(34)); // Wraps a number in an array, output: [34].
console.log(wrapInArray("Hello")); // Wraps a string in an array, output: ["Hello"].
var obj1 = { content: "Hello" }; // A `Box` containing a string value.
var obj2 = { content: 3 }; // A `Box` containing a number value.
//* =============================== Generic Function with Constraints =============================== //
//* A generic function that accepts only objects with a `length` property.
function getLength(value) {
    return value.length; // Returns the length of the input object.
}
console.log(getLength({ length: 10 })); // Valid because the object has a `length` property.
// console.log(getLength(3)); // Error: `number` doesn't have a `length` property.
//* =============================== Default Generic Types =============================== //
//* A generic function with a default type `number`.
function defaultTo(value) {
    return value; // Returns the input value without modification.
}
console.log(defaultTo(40)); // Uses the default `number` type.
console.log(defaultTo("Hello Generics!")); // Works with explicitly specified `string` type.
//* =============================== Merge Two Objects =============================== //
//* A generic function that combines two objects into one.
function merge(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2); // Uses the spread operator to merge objects.
}
console.log(merge({ name: "Abubakar" }, { Age: 16 })); // Combines two objects into one.
var DataStore = /** @class */ (function () {
    function DataStore() {
        this.data = []; // An array to store items of type `U`.
    }
    //* Adds an item to the store.
    DataStore.prototype.add = function (item) {
        return this.data.push(item); // Adds the item and returns the updated array length.
    };
    //* Removes an item from the store.
    DataStore.prototype.remove = function (item) {
        var searchedItem = this.data.find(// Searches for the item in the array.
        function (findItem) { return JSON.stringify(findItem) === JSON.stringify(item); } // Compares JSON strings for equality.
        );
        if (!searchedItem) { // If the item is not found, log a message and return false.
            console.log("Item does not exist in this store.");
            return false;
        }
        var dataAfterRemove = this.data.filter(// Filters out the item to remove.
        function (eachItem) {
            return eachItem.type !== item.type ||
                eachItem.size !== item.size ||
                eachItem.price !== item.price;
        });
        console.log("Item Removed"); // Logs the successful removal of the item.
        return dataAfterRemove; // Returns the updated array after removal.
    };
    //* Retrieves all items from the store.
    DataStore.prototype.getItems = function () {
        return this.data;
    };
    return DataStore;
}());
var Clothes = new DataStore(); // Creates a new instance of `DataStore` for items of type `Item`.
Clothes.add({ type: "T-shirt", size: "XL", price: 999 }); // Adds a T-shirt to the store.
Clothes.add({ type: "Shoes", size: "7", price: 9999 }); // Adds Shoes to the store.
Clothes.remove({ type: "T-shirt", size: "XL", price: 999 }); // Removes the T-shirt from the store.
console.log(Clothes.getItems()); // Logs the remaining items in the store.
//* =============================== Get Object Property =============================== //
//* A generic function to retrieve a property value from an object by its key.
function getProperty(obj, key) {
    if (key in obj) { // Checks if the key exists in the object.
        return obj[key]; // Returns the value associated with the key.
    }
    return "Invalid Key"; // Returns an error message if the key doesn't exist.
}
console.log(getProperty({ name: "Abubakar", Age: 10 }, "name")); // Logs the value for key "name".
console.log(getProperty({ name: "Abubakar", Age: 10 }, "Age")); // Logs the value for key "Age".
var obj3 = {
    value: { value: { value: "Nested Value" } },
};
console.log(obj3); // Logs the nested wrapper structure.
//* =============================== Partial Clone =============================== //
//* A generic function that returns a partial clone of an object using TypeScript’s `Partial` utility type.
function partialClone(obj) {
    return obj; // Returns the partial clone of the object.
}
console.log(partialClone({ name: "Abubakar", age: 17 })); // Logs the partial clone of the object.
//* =============================== BaseResponse with Extension =============================== //
//* A base class `BaseResponse<T>` for handling generic data with status codes.
//* An extended class `ErrorResponse` adds an error message property.
var BaseResponse = /** @class */ (function () {
    function BaseResponse(data, status) {
        this.data = data;
        this.status = status;
    } // Stores data and status.
    return BaseResponse;
}());
var ErrorResponse = /** @class */ (function (_super) {
    __extends(ErrorResponse, _super);
    function ErrorResponse(data, status, errorMessage) {
        var _this = _super.call(this, data, status) || this; // Calls the base class constructor.
        _this.errorMessage = errorMessage;
        return _this;
    }
    return ErrorResponse;
}(BaseResponse));
var ErrorMessage = new ErrorResponse("Invalid Data", 404, "Error 404 Not Found"); // Creates an error response object.
console.log(ErrorMessage); // Logs the error response object.
function typeFunction(isArray) {
    return (Array.isArray(isArray) ? true : false); // Returns true or false based on the check.
}
console.log(typeFunction(5)); // Logs false since `5` is not an array.
console.log(typeFunction([6, 4])); // Logs true since `[6, 4]` is an array.
var numbers = [1, [2, [3, [4]], 5]]; // A nested array of numbers.
console.log(numbers); // Logs the nested array structure.
//? Read More: https://www.typescriptlang.org/docs/handbook/2/generics.html
