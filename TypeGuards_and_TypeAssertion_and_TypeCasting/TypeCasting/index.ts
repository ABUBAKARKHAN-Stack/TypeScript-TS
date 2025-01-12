//TODO: Run tsc -w to Run the TypeScript Compiler in Watch Mode

//* What is TypeCasting?
//? - TypeCasting is a way to convert a variable from one data type to another data type.
//? - In TypeScript, TypeCasting is done by using the angle brackets `<>` or the `as` keyword.
//? - TypeCasting is also known as Type Conversion and is primarily used to tell TypeScript that we know the type of a value better than the compiler.

// +++++++++++++++++++++++++++++++ Example 1: TypeCasting with Strings +++++++++++++++++++++++++++++++

type ToString = string;

//? Function to convert a string input to lowercase
function toLowerCaseInput(value: unknown): string {
    if (typeof value === "string") {
        return <ToString>value.toLowerCase(); //* Casting `value` to a string type and converting to lowercase
    }
    throw new Error("This is an intentional error: The value must be a string.");     //! Throws an error if the value isn't a string
}

console.log(toLowerCaseInput("TypeScript")); // Output: "typescript"
// console.log(toLowerCaseInput(123));          // Uncomment to test runtime failure

// +++++++++++++++++++++++++++++++ Example 2: DOM TypeCasting +++++++++++++++++++++++++++++++

//? HTML: <button id="submit-btn">Submit</button>
//* Use TypeCasting to handle DOM elements
const button = document.getElementById("submit-btn"); //? Get the button element by its ID

if (button) {
    const btn = button as HTMLButtonElement; //* Cast the button element to `HTMLButtonElement`
    btn.addEventListener("click", (): void => {
        console.log("Hey I'm Clicked"); //* Add a click event listener to the button
    });
}

// +++++++++++++++++++++++++++++++ Example 3: Casting Between Custom Types +++++++++++++++++++++++++++++++

interface User {
    name: string; //* User's name
    email: string; //* User's email
}

interface Admin extends User {
    adminPrivileges: string[]; //* Admin-specific privileges
}

//? Function to promote a `User` to an `Admin`
function promoteToAdmin(user: User): Admin | undefined {
    if ("name" in user && "email" in user) { //* Check if the user object contains `name` and `email` properties
        const promotion = <Admin>user; //* Cast `user` to `Admin`
        promotion.adminPrivileges = []; //* Initialize admin privileges as an empty array
        return promotion;
    } else {
        return undefined; //! Return undefined if the object doesn't match the required structure
    }
}

const user: User = { name: "Abubakar", email: "abubakar@example.com" };
const admin = promoteToAdmin(user);
console.log(admin); // Output: { name: 'Abubakar', email: 'abubakar@example.com', adminPrivileges: [] }

// +++++++++++++++++++++++++++++++ Example 4: Casting and Filtering Arrays +++++++++++++++++++++++++++++++

//? Function to filter and return only numbers from a mixed array
function getNumbersFromMixedArray(arr: (string | number | boolean)[]): number[] {
    return arr.filter((value) => typeof value === "number"); //* Filter the array for values of type `number`
}

console.log(getNumbersFromMixedArray([1, "hello", 42, true, "world", false])); // Output: [1, 42]

// +++++++++++++++++++++++++++++++ Example 5: Casting for JSON Parsing +++++++++++++++++++++++++++++++

type User2 = {
    id: number; //* User's unique ID
    name: string; //* User's name
    email: string; //* User's email
};

// Example JSON string representing a user
const jsonString = `{"id": 1,"name": "Abubakar","email":"abubakarxd@example.com"}`;

//? Function to parse JSON and cast it to a specific type
function getUserDetails(user: unknown): void {
    if (
        typeof user === "object" &&
        user !== null &&
        "id" in user &&
        "name" in user &&
        "email" in user
    ) {
        const user2 = <User2>user; //* Cast the parsed object to `User2`
        console.log(user2); //* Log the user details
    } else {
        throw Error("Invalid User"); //! Throws an error if the object doesn't match the required structure
    }
}

const user1 = JSON.parse(jsonString); //* Parse the JSON string into an object
getUserDetails(user1); // Output: { id: 1, name: 'Abubakar', email: 'abubakarxd@example.com' }
