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
//? Generics allow us to create reusable, type-safe components in TypeScript.
//? With Generics, functions, interfaces, and classes can handle different types while ensuring type safety.
//* =============================== Why Use Generics? =============================== //
//? - Write reusable code that works with multiple types.
//? - Maintain type safety and reduce runtime errors by enforcing type constraints.
//* =============================== Generic Function Example =============================== //
/**
 * Returns the input value without modifying it.
 * @param value - The value of any type to be returned.
 * @returns The same value passed as input.
 */
function identity(value) {
    return value;
}
console.log(identity("HELLO")); // Calls the function with a string value.
console.log(identity(100)); // Explicitly specifies the type as `number` and passes 100.
//* =============================== Wrap Value in an Array =============================== //
/**
 * Wraps a given value inside an array.
 * @param value - The value to be wrapped in an array.
 * @returns An array containing the value.
 */
function wrapInArray(value) {
    return [value];
}
console.log(wrapInArray(34)); // Wraps a number in an array, output: [34].
console.log(wrapInArray("Hello")); // Wraps a string in an array, output: ["Hello"].
var obj1 = { content: "Hello" }; // A `Box` containing a string value.
var obj2 = { content: 3 }; // A `Box` containing a number value.
//* =============================== Generic Function with Constraints =============================== //
/**
 * Returns the length of an object if it has a `length` property.
 * @param value - An object with a `length` property.
 * @returns The length of the input object.
 */
function getLength(value) {
    return value.length;
}
console.log(getLength({ length: 10 })); // Valid because the object has a `length` property.
// console.log(getLength(3)); // Error: `number` doesn't have a `length` property.
//* =============================== Default Generic Types =============================== //
/**
 * Returns the input value with an optional default type of `number`.
 * @param value - The value to be returned.
 * @template T - The type of the input value (defaults to `number`).
 * @returns The same value passed as input.
 */
function defaultTo(value) {
    return value;
}
console.log(defaultTo(40)); // Uses the default `number` type.
console.log(defaultTo("Hello Generics!")); // Works with explicitly specified `string` type.
//* =============================== Merge Two Objects =============================== //
/**
 * Combines two objects into one.
 * @param obj1 - The first object.
 * @param obj2 - The second object.
 * @template T - The type of the first object.
 * @template U - The type of the second object.
 * @returns A new object combining the properties of `obj1` and `obj2`.
 */
function merge(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
console.log(merge({ name: "Abubakar" }, { Age: 16 })); // Combines two objects into one.
/**
 * A generic class to manage a collection of items.
 * @template U - A type that extends the `Item` interface.
 */
var DataStore = /** @class */ (function () {
    function DataStore() {
        this.data = []; // An array to store items of type `U`.
    }
    /**
     * Adds an item to the store.
     * @param item - The item to be added.
     * @returns The updated number of items in the store.
     */
    DataStore.prototype.add = function (item) {
        return this.data.push(item);
    };
    /**
     * Removes an item from the store.
     * @param item - The item to be removed.
     * @returns The updated array without the removed item, or `false` if the item is not found.
     */
    DataStore.prototype.remove = function (item) {
        var searchedItem = this.data.find(function (findItem) { return JSON.stringify(findItem) === JSON.stringify(item); });
        if (!searchedItem) {
            console.log("Item does not exist in this store.");
            return false;
        }
        var dataAfterRemove = this.data.filter(function (eachItem) {
            return eachItem.type !== item.type ||
                eachItem.size !== item.size ||
                eachItem.price !== item.price;
        });
        console.log("Item Removed");
        return dataAfterRemove;
    };
    /**
     * Retrieves all items from the store.
     * @returns The array of items in the store.
     */
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
/**
 * Retrieves a property value from an object by its key.
 * @param obj - The object to retrieve the property from.
 * @param key - The key of the property to retrieve.
 * @template T - The type of the object.
 * @template K - The type of the key (must be a key of `T`).
 * @returns The value of the specified property or "Invalid Key" if not found.
 */
function getProperty(obj, key) {
    if (key in obj) {
        return obj[key];
    }
    return "Invalid Key";
}
console.log(getProperty({ name: "Abubakar", Age: 10 }, "name")); // Logs the value for key "name".
console.log(getProperty({ name: "Abubakar", Age: 10 }, "Age")); // Logs the value for key "Age".
var obj3 = {
    value: { value: { value: "Nested Value" } },
};
console.log(obj3); // Logs the nested wrapper structure.
//* =============================== Partial Clone =============================== //
/**
 * Returns a partial clone of an object using TypeScript’s `Partial` utility type.
 * @param obj - The object to be cloned.
 * @template T - The type of the object.
 * @returns A partial clone of the object.
 */
function partialClone(obj) {
    return obj;
}
console.log(partialClone({ name: "Abubakar", age: 17 })); // Logs the partial clone of the object.
//* =============================== BaseResponse with Extension =============================== //
/**
 * A base class for handling generic data with status codes.
 * @template T - The type of the data property.
 */
var BaseResponse = /** @class */ (function () {
    function BaseResponse(data, status) {
        this.data = data;
        this.status = status;
    }
    return BaseResponse;
}());
/**
 * An extended class for error responses, adding an error message property.
 * @template T - The type of the data and error message properties.
 */
var ErrorResponse = /** @class */ (function (_super) {
    __extends(ErrorResponse, _super);
    function ErrorResponse(data, status, errorMessage) {
        var _this = _super.call(this, data, status) || this;
        _this.errorMessage = errorMessage;
        return _this;
    }
    return ErrorResponse;
}(BaseResponse));
var ErrorMessage = new ErrorResponse("Invalid Data", 404, "Error 404 Not Found"); // Creates an error response object.
console.log(ErrorMessage); // Logs the error response object.
/**
 * Determines if the input is an array.
 * @param isArray - The value to be checked.
 * @template T - The type of the input.
 * @returns `true` if the input is an array, otherwise `false`.
 */
function typeFunction(isArray) {
    return (Array.isArray(isArray) ? true : false);
}
console.log(typeFunction(5)); // Logs false since `5` is not an array.
console.log(typeFunction([6, 4])); // Logs true since `[6, 4]` is an array.
var numbers = [1, [2, [3, [4]], 5]]; // A nested array of numbers.
console.log(numbers); // Logs the nested array structure.
//? Read More: https://www.typescriptlang.org/docs/handbook/2/generics.html
