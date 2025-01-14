// TODO: Run tsc -w to Run the TypeScript Compiler in Watch Mode

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
function identity<Any>(value: Any): Any {
    return value;
}

console.log(identity("HELLO")); // Calls the function with a string value.
console.log(identity<number>(100)); // Explicitly specifies the type as `number` and passes 100.

//* =============================== Wrap Value in an Array =============================== //
/**
 * Wraps a given value inside an array.
 * @param value - The value to be wrapped in an array.
 * @returns An array containing the value.
 */
function wrapInArray<T>(value: T): T[] {
    return [value];
}

console.log(wrapInArray(34)); // Wraps a number in an array, output: [34].
console.log(wrapInArray("Hello")); // Wraps a string in an array, output: ["Hello"].

//* =============================== Generic Interface Example =============================== //
/**
 * A generic interface `Box<T>` that holds a single property of type `T`.
 * @template T - The type of the content property.
 */
interface Box<T> {
    content: T; // The `content` property can hold any type of value based on `T`.
}

const obj1: Box<string> = { content: "Hello" }; // A `Box` containing a string value.
const obj2: Box<number> = { content: 3 };       // A `Box` containing a number value.

//* =============================== Generic Function with Constraints =============================== //
/**
 * Returns the length of an object if it has a `length` property.
 * @param value - An object with a `length` property.
 * @returns The length of the input object.
 */
function getLength<T extends { length: number }>(value: T): number {
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
function defaultTo<T = number>(value: T): T {
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
function merge<T extends {}, U extends {}>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

console.log(merge({ name: "Abubakar" }, { Age: 16 })); // Combines two objects into one.

//* =============================== Generic Class Example =============================== //
/**
 * Defines the structure of items that can be stored in `DataStore`.
 */
interface Item {
    type: string; // The type of the item (e.g., "T-shirt").
    size: string; // The size of the item (e.g., "XL").
    price: number; // The price of the item.
}

/**
 * A generic class to manage a collection of items.
 * @template U - A type that extends the `Item` interface.
 */
class DataStore<U extends Item> {
    public data: U[] = []; // An array to store items of type `U`.

    /**
     * Adds an item to the store.
     * @param item - The item to be added.
     * @returns The updated number of items in the store.
     */
    add(item: U): number {
        return this.data.push(item);
    }

    /**
     * Removes an item from the store.
     * @param item - The item to be removed.
     * @returns The updated array without the removed item, or `false` if the item is not found.
     */
    remove(item: U): U[] | boolean {
        const searchedItem: U | undefined = this.data.find(
            (findItem: U) => JSON.stringify(findItem) === JSON.stringify(item)
        );

        if (!searchedItem) {
            console.log("Item does not exist in this store.");
            return false;
        }

        const dataAfterRemove: U[] = this.data.filter(
            (eachItem: U) =>
                eachItem.type !== item.type ||
                eachItem.size !== item.size ||
                eachItem.price !== item.price
        );

        console.log("Item Removed");
        return dataAfterRemove;
    }

    /**
     * Retrieves all items from the store.
     * @returns The array of items in the store.
     */
    getItems(): U[] {
        return this.data;
    }
}

const Clothes = new DataStore<Item>(); // Creates a new instance of `DataStore` for items of type `Item`.
Clothes.add({ type: "T-shirt", size: "XL", price: 999 }); // Adds a T-shirt to the store.
Clothes.add({ type: "Shoes", size: "7", price: 9999 });   // Adds Shoes to the store.
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
function getProperty<T extends object, K extends keyof T>(obj: T, key: K): T[K] | string {
    if (key in obj) {
        return obj[key];
    }
    return "Invalid Key";
}

console.log(getProperty({ name: "Abubakar", Age: 10 }, "name")); // Logs the value for key "name".
console.log(getProperty({ name: "Abubakar", Age: 10 }, "Age"));  // Logs the value for key "Age".

//* =============================== Nested Wrapper =============================== //
/**
 * A nested generic structure for wrapping values multiple times.
 * @template T - The type of the value being wrapped.
 */
interface Wrapper<T> {
    value: T; // The value of generic type `T`.
}

/**
 * A nested wrapper that wraps `Wrapper<T>`.
 * @template T - The type of the value being wrapped.
 */
interface NestedWrapper<T> {
    value: Wrapper<T>;
}

const obj3: NestedWrapper<object> = {
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
function partialClone<T extends object>(obj: T): Partial<T> {
    return obj;
}

console.log(partialClone({ name: "Abubakar", age: 17 })); // Logs the partial clone of the object.

//* =============================== BaseResponse with Extension =============================== //
/**
 * A base class for handling generic data with status codes.
 * @template T - The type of the data property.
 */
class BaseResponse<T> {
    constructor(public data: T, public status: number) { }
}

/**
 * An extended class for error responses, adding an error message property.
 * @template T - The type of the data and error message properties.
 */
class ErrorResponse<T> extends BaseResponse<T> {
    constructor(data: T, status: number, public errorMessage: T) {
        super(data, status);
    }
}

const ErrorMessage = new ErrorResponse("Invalid Data", 404, "Error 404 Not Found"); // Creates an error response object.
console.log(ErrorMessage); // Logs the error response object.

//* =============================== Utility Type: IsArray =============================== //
/**
 * A utility type to check if a type is an array.
 * @template T - The type to be checked.
 */
type IsArray<T> = T extends any[] ? true : false;

/**
 * Determines if the input is an array.
 * @param isArray - The value to be checked.
 * @template T - The type of the input.
 * @returns `true` if the input is an array, otherwise `false`.
 */
function typeFunction<T>(isArray: T): IsArray<T> {
    return (Array.isArray(isArray) ? true : false) as IsArray<T>;
}

console.log(typeFunction(5)); // Logs false since `5` is not an array.
console.log(typeFunction([6, 4])); // Logs true since `[6, 4]` is an array.

//* =============================== Nested Array =============================== //
/**
 * A recursive generic type for deeply nested arrays.
 * @template T - The type of the elements in the nested array.
 */
type NestedArray<T> = T | NestedArray<T>[];

const numbers: NestedArray<number> = [1, [2, [3, [4]], 5]]; // A nested array of numbers.
console.log(numbers); // Logs the nested array structure.

//? Read More: https://www.typescriptlang.org/docs/handbook/2/generics.html
