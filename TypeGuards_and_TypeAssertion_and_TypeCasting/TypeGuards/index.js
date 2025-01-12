"use strict";
// TODO: Run tsc -w To Start the Script on Watch Mode.
console.log("Let's Learn About TypeGuards in TypeScript");
// +++++++++++++++++++++++++++++++ What are Type Guards? +++++++++++++++++++++++++++++++
//? Type Guards are methods used to determine the type of a variable at runtime.
//? They narrow down possible types of a variable, ensuring type safety in TypeScript.
// +++++++++++++++++++++++++++++++ Type Guard with `typeof` +++++++++++++++++++++++++++++++
const isString = (value) => {
    //? Checks if the value is of type `string` using the `typeof` operator.
    return typeof value === "string" ? `${value} is String` : `${value} is Number`;
};
console.log(isString("10")); // output: 10 is String
console.log(isString(42)); // output: 42 is Number
// +++++++++++++++++++++++++++++++ Type Guard with `instanceof` +++++++++++++++++++++++++++++++
class Person {
    constructor(name) {
        this.name = name;
    }
}
const p1 = new Person("Abubakar");
const p2 = { name: "Alex" };
//? Type Guard to check if an object is an instance of `Person`.
function isPerson(obj) {
    return obj instanceof Person; // Returns true if `obj` is an instance of `Person`.
}
console.log(isPerson(p1)); // output: true
console.log(isPerson(p2)); // output: false
// +++++++++++++++++++++++++++++++ Type Guard with `in` +++++++++++++++++++++++++++++++
const obj1 = { name: "QWERTY" };
const obj2 = { age: 12 };
//? Type Guard to check if an object has a `name` property.
function hasNameProperty(obj) {
    // Ensures `obj` is an object and checks if the `name` property exists.
    return typeof obj === "object" && obj !== null && "name" in obj;
}
console.log(hasNameProperty(obj1)); // output: true
console.log(hasNameProperty(obj2)); // output: false
//? Type Guard to check if a value is a string or a number.
function isStringOrNumber(value) {
    return typeof value === "string" || typeof value === "number"; // Checks if value is `string` or `number`.
}
console.log(isStringOrNumber("Hello")); // output: true
console.log(isStringOrNumber(10)); // output: true
console.log(isStringOrNumber(true)); // output: false
console.log(isStringOrNumber(null)); // output: false
// +++++++++++++++++++++++++++++++ Type Guard for Arrays +++++++++++++++++++++++++++++++
function isArray(value) {
    //? Checks if the value is an array using `Array.isArray`.
    return Array.isArray(value);
}
console.log(isArray([40, "43"])); // output: true
console.log(isArray(30)); // output: false
//? Type Guard to check if a role matches specific literals.
function isAdminRole(role) {
    const roles = role.toUpperCase();
    return roles === "ADMIN" || roles === "SUPERADMIN"; // Checks if the role is "ADMIN" or "SUPERADMIN".
}
console.log(isAdminRole("SUPERADMIN")); // output: true
//? Type Guard to check if a `User` object has an `address` property.
function hasAddress(user) {
    return !!user.address; // Returns true if `address` exists and is truthy.
}
const user1 = {
    name: "Abubakar",
    address: { city: "Karachi", zip: "4333235" },
};
const user2 = { name: "Unknown" };
console.log(hasAddress(user1)); // output: true
console.log(hasAddress(user2)); // output: false
//? Type Guard to check if a shape is a circle.
function isCircle(shape) {
    return shape.kind === "circle"; // Uses the `kind` property to identify a circle.
}
console.log(isCircle({ kind: "circle", radius: 30 })); // output: true
console.log(isCircle({ kind: "rectangle", width: 10, height: 20 })); // output: false
// +++++++++++++++++++++++++++++++ Type Guard with `JSON.parse` +++++++++++++++++++++++++++++++
function isJsonParsable(value) {
    //? Checks if a value is a valid JSON-parsable string.
    if (typeof value === "string") {
        try {
            JSON.parse(value); // Attempts to parse the string.
            return true;
        }
        catch (_a) {
            return false; // Returns false if parsing fails.
        }
    }
    return false;
}
console.log(isJsonParsable('{"name": "Abubakar"}')); // output: true
console.log(isJsonParsable(30)); // output: false
//? Type Guard to check if an API response is a success response.
function isSuccessResponse(response) {
    // Checks if the response status is "success" and the data object contains `id` and `name`.
    return response.status === "success" && "data" in response && "id" in response.data && "name" in response.data;
}
console.log(isSuccessResponse({ status: "error", message: "404" })); // output: false
console.log(isSuccessResponse({ status: "success", data: { id: 2, name: "Abubakar" } })); // output: true
