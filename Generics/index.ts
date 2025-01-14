// TODO: Run tsc -w to Run the TypeScript Compiler in Watch Mode

console.log("Let's Learn Generics in TypeScript"); // Logs a starting message to the console.

//* =============================== Generics in TypeScript =============================== //
//? - Generics allow us to create reusable, type-safe components in TypeScript.
//? - With Generics, functions, interfaces, and classes can handle different types while ensuring type safety.

//* =============================== Why Use Generics? =============================== //
//? - Write reusable code that works with multiple types.
//? - Maintain type safety and reduce runtime errors by enforcing type constraints.

//* =============================== Generic Function Example =============================== //
//* This generic function returns the input value without modifying it.
function identity<Any>(value: Any): Any { // The `Any` type allows the function to work with any data type.
    return value; // Returns the value as it is.
}

console.log(identity("HELLO")); // Calls the function with a string value.
console.log(identity<number>(100)); // Explicitly specifies the type as `number` and passes 100.

//* =============================== Wrap Value in an Array =============================== //
//* A generic function that wraps any value inside an array.
function wrapInArray<T>(value: T): T[] { // The generic type `T` makes the function reusable for any type.
    return [value]; // Returns an array containing the value.
}

console.log(wrapInArray(34)); // Wraps a number in an array, output: [34].
console.log(wrapInArray("Hello")); // Wraps a string in an array, output: ["Hello"].

//* =============================== Generic Interface Example =============================== //
//* A generic interface `Box<T>` that holds a single property of type `T`.
interface Box<T> {
    content: T; // The `content` property can hold any type of value based on `T`.
}

const obj1: Box<string> = { content: "Hello" }; // A `Box` containing a string value.
const obj2: Box<number> = { content: 3 };       // A `Box` containing a number value.

//* =============================== Generic Function with Constraints =============================== //
//* A generic function that accepts only objects with a `length` property.
function getLength<T extends { length: number }>(value: T): number { // Restricts `T` to have a `length` property.
    return value.length; // Returns the length of the input object.
}

console.log(getLength({ length: 10 })); // Valid because the object has a `length` property.
// console.log(getLength(3)); // Error: `number` doesn't have a `length` property.

//* =============================== Default Generic Types =============================== //
//* A generic function with a default type `number`.
function defaultTo<T = number>(value: T): T { // The default type is `number` if no type is specified.
    return value; // Returns the input value without modification.
}

console.log(defaultTo(40)); // Uses the default `number` type.
console.log(defaultTo("Hello Generics!")); // Works with explicitly specified `string` type.

//* =============================== Merge Two Objects =============================== //
//* A generic function that combines two objects into one.
function merge<T extends {}, U extends {}>(obj1: T, obj2: U): T & U { // Combines properties of `T` and `U`.
    return { ...obj1, ...obj2 }; // Uses the spread operator to merge objects.
}

console.log(merge({ name: "Abubakar" }, { Age: 16 })); // Combines two objects into one.

//* =============================== Generic Class Example =============================== //
//* A generic class `DataStore<U>` to manage a collection of items.
interface Item { // Defines the structure of items that can be stored in `DataStore`.
    type: string; // The type of the item (e.g., "T-shirt").
    size: string; // The size of the item (e.g., "XL").
    price: number; // The price of the item.
}

class DataStore<U extends Item> { // `U` must extend the `Item` interface.
    public data: U[] = []; // An array to store items of type `U`.

    //* Adds an item to the store.
    add(item: U): number { // Accepts an item of type `U` and adds it to the array.
        return this.data.push(item); // Adds the item and returns the updated array length.
    }

    //* Removes an item from the store.
    remove(item: U): U[] | boolean { // Removes the item if found; returns false otherwise.
        const searchedItem: U | undefined = this.data.find( // Searches for the item in the array.
            (findItem: U) => JSON.stringify(findItem) === JSON.stringify(item) // Compares JSON strings for equality.
        );

        if (!searchedItem) { // If the item is not found, log a message and return false.
            console.log("Item does not exist in this store.");
            return false;
        }

        const dataAfterRemove: U[] = this.data.filter( // Filters out the item to remove.
            (eachItem: U) =>
                eachItem.type !== item.type ||
                eachItem.size !== item.size ||
                eachItem.price !== item.price
        );

        console.log("Item Removed"); // Logs the successful removal of the item.
        return dataAfterRemove; // Returns the updated array after removal.
    }

    //* Retrieves all items from the store.
    getItems(): U[] { // Returns the array of items in the store.
        return this.data;
    }
}

const Clothes = new DataStore<Item>(); // Creates a new instance of `DataStore` for items of type `Item`.
Clothes.add({ type: "T-shirt", size: "XL", price: 999 }); // Adds a T-shirt to the store.
Clothes.add({ type: "Shoes", size: "7", price: 9999 });   // Adds Shoes to the store.
Clothes.remove({ type: "T-shirt", size: "XL", price: 999 }); // Removes the T-shirt from the store.
console.log(Clothes.getItems()); // Logs the remaining items in the store.

//* =============================== Get Object Property =============================== //
//* A generic function to retrieve a property value from an object by its key.
function getProperty<T extends object, K extends keyof T>(obj: T, key: K): T[K] | string { // `K` must be a key of `T`.
    if (key in obj) { // Checks if the key exists in the object.
        return obj[key]; // Returns the value associated with the key.
    }
    return "Invalid Key"; // Returns an error message if the key doesn't exist.
}

console.log(getProperty({ name: "Abubakar", Age: 10 }, "name")); // Logs the value for key "name".
console.log(getProperty({ name: "Abubakar", Age: 10 }, "Age"));  // Logs the value for key "Age".

//* =============================== Nested Wrapper =============================== //
//* A nested generic structure for wrapping values multiple times.
interface Wrapper<T> {
    value: T; // The value of generic type `T`.
}
interface NestedWrapper<T> {
    value: Wrapper<T>; // A nested structure wrapping `Wrapper<T>`.
}

const obj3: NestedWrapper<object> = { // An object wrapped multiple times.
    value: { value: { value: "Nested Value" } },
};
console.log(obj3); // Logs the nested wrapper structure.

//* =============================== Partial Clone =============================== //
//* A generic function that returns a partial clone of an object using TypeScript’s `Partial` utility type.
function partialClone<T extends object>(obj: T): Partial<T> { // `Partial<T>` allows optional properties.
    return obj; // Returns the partial clone of the object.
}

console.log(partialClone({ name: "Abubakar", age: 17 })); // Logs the partial clone of the object.

//* =============================== BaseResponse with Extension =============================== //
//* A base class `BaseResponse<T>` for handling generic data with status codes.
//* An extended class `ErrorResponse` adds an error message property.
class BaseResponse<T> {
    constructor(public data: T, public status: number) {} // Stores data and status.
}

class ErrorResponse<T> extends BaseResponse<T> {
    constructor(data: T, status: number, public errorMessage: T) {
        super(data, status); // Calls the base class constructor.
    }
}

const ErrorMessage = new ErrorResponse("Invalid Data", 404, "Error 404 Not Found"); // Creates an error response object.
console.log(ErrorMessage); // Logs the error response object.

//* =============================== Utility Type: IsArray =============================== //
//* A utility type `IsArray<T>` to check if `T` is an array.
type IsArray<T> = T extends any[] ? true : false; // Resolves to true if `T` is an array, otherwise false.

function typeFunction<T>(isArray: T): IsArray<T> { // Checks if the input is an array.
    return (Array.isArray(isArray) ? true : false) as IsArray<T>; // Returns true or false based on the check.
}

console.log(typeFunction(5)); // Logs false since `5` is not an array.
console.log(typeFunction([6, 4])); // Logs true since `[6, 4]` is an array.

//* =============================== Nested Array =============================== //
//* A recursive generic type `NestedArray<T>` for deeply nested arrays.
type NestedArray<T> = T | NestedArray<T>[]; // Allows arrays of type `T` or nested arrays of `T`.

const numbers: NestedArray<number> = [1, [2, [3, [4]], 5]]; // A nested array of numbers.
console.log(numbers); // Logs the nested array structure.


//? Read More: https://www.typescriptlang.org/docs/handbook/2/generics.html