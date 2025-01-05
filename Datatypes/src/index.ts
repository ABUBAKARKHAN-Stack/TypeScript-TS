// Declaring variables with specific types: number, string, and boolean.
// In TypeScript, we can declare variables and assign types explicitly to them.

let a: number = 5;         // 'a' is a number variable initialized with 5.
let b: string = "Hello";   // 'b' is a string variable initialized with "Hello".
let c: boolean = true;     // 'c' is a boolean variable initialized with 'true'.

// We can use console.log() to display the values of the variables, but it is commented out here.
// console.log(a, b, c);  

// Type assertions allow us to specify a variable's type manually.
// In this case, we are using the angle bracket (<>) syntax for type assertions.

let str = <string>"Hello I'm String :)";   // 'str' is asserted as a string type.
let num = <Number>45;                      // 'num' is asserted as a number type (Number object, not primitive number).
let boolean = <Boolean>false;              // 'boolean' is asserted as a Boolean type (Boolean object).

// These variables are printed via console.log(), but it's also commented out here.
// console.log(str, num, boolean);

// Union Types: A variable can hold multiple types, using the pipe (|) operator.
// Here 'surname' can be a string or a number.

let surname: string | number;    // 'surname' can be either a string or a number.

surname = "King Jorge ";         // Assigning a string value to 'surname'. 
// console.log(surname);         // This would print "King Jorge".

surname = 34;                    // Reassigning a number value to 'surname'.
// console.log(surname);         // This would print 34.

// A function in TypeScript with typed parameters and return value.
// The function takes two number arguments and returns a number.

const func = (x: number, y: number): number => {
    console.log(x, y);           // Logs the values of x and y when the function is called.
    return x + y;                // Returns the sum of x and y.
}

console.log(func(4, 5));         // Calling the function with 4 and 5 as arguments and printing the result (9).


// +++++++++++++++++++++++++++++++++++++++++++++      Type Keyword in TypeScript      ++++++++++++++++++++++++++++++++++++++++++++++++++++
// The 'type' keyword is used to define a custom type.
// Here, we define a custom type 'ts' for a function that accepts two string parameters and returns a string.

type ts = (t: string, s: string) => string;    // 'ts' is a function type that takes two strings and returns a string.

const printTS: ts = (t, s) => {                // 'printTS' function must follow the 'ts' type.
    console.log(t + s);                        // Concatenates 't' and 's' and logs the result.
    return t + s;                              // Returns the concatenated string.
}
printTS('Type', "Script");                     // Calling the function with 'Type' and 'Script', logs and returns 'TypeScript'.


// +++++++++++++++++++++++++++++++++++++++++++++      Arrays in TypeScript      ++++++++++++++++++++++++++++++++++++++++++++++++++++
// TypeScript allows for two common syntaxes to declare arrays.

// Syntax One: Declaring an array using the 'Type[]' notation.
const arr: number[] = [1, 2, 3, 4, 5, 6];        // 'arr' is an array of numbers.
const arr2: string[] = ['Hello', 'World', 'Lets', 'Learn', 'Ts'];   // 'arr2' is an array of strings.
console.log(arr, arr2);                          // Logs the two arrays.

// Syntax Two: Declaring an array using 'Array<Type>' notation.
const fruitList: Array<string> = ["Peach", 'Banana', 'Orange'];     // 'fruitList' is an array of strings.
console.log(fruitList);                          // Logs the fruit array.


// +++++++++++++++++++++++++++++++++++++++++++++      Tuples in TypeScript      ++++++++++++++++++++++++++++++++++++++++++++++++++++
// Tuples are arrays with a fixed number of elements, where each element may have a different type.
// They are useful when you need to group fixed-length data with specific types.

const tuple1: [number, number, number] = [5, 8, 6];  // 'tuple1' is a tuple with exactly three numbers.
const tuple2: [string, number] = ["8", 9];           // 'tuple2' is a tuple with a string and a number.
console.log(tuple1, tuple2);                         // Logs the two tuples.


// +++++++++++++++++++++++++++++++++++++++++++++  Objects in TypeScript      ++++++++++++++++++++++++++++++++++++++++++++++++++++
// const userOne: {
//     userId: number;
//     userName: string;
//     isLoggedIn: boolean;
//     gender?: string
// } = {
//     userId: 43,
//     userName: 'Solo',
//     isLoggedIn: true,
//     gender: "male"

// }
// console.log(userOne, "UserOne");

// type user = {
//     userId: number,
//     userName: string
//     status: boolean,
//     gender?: string
// }

interface user {
    userId: number,
    userName: string
    status: boolean,
    gender?: string
}

interface newUser extends user {
    password: number,
    greeting: (userName: string) => void,
}

const newUserOne: newUser = {
    userId: 332,
    userName: 'NewUser',
    status: true,
    password: 23232,
    greeting(userName) {
        console.log(`Welcome User ${userName}`);
    }
}

console.log(newUserOne, 'NewUser');
newUserOne.greeting('User hello')


const userOne: user = {
    userId: 901,
    status: false,
    userName: 'Known Person',
    gender: 'Male'
}
console.log(userOne, "UserOne");


const userTwo: user = {
    userId: 900,
    status: true,
    userName: 'Unkonwn',
}
console.log(userTwo, "UserTwo");


// ++++++++++++++++++++++++++++++++++++++++++++++      Functions in TypeScript      ++++++++++++++++++++++++++++++++++++++++++++++++++++
function addTwo(num: number) {
    return num + 2
}
addTwo(5)

function toUpper(value: string) {
    return value.toUpperCase()
}

console.log(toUpper("hello"));


function signUp(name: string, email: string, isLoggedIn: boolean) {
    return {
        name,
        email,
        isLoggedIn
    }
}
let user = signUp("Umer", "2@2.com", true)
console.log(user);

const errorMsg = (err: string): void => {
    console.error(err);
}
errorMsg('something went wrong')

// const handlingError = (errorMsg: string): never => {
//     throw new Error(errorMsg)
// }
// handlingError('404 not found')

// optional params function

// type firstFunc = (n: number, m: number, l?: number) => number
// const multiply: firstFunc = (n, m, l) => {
//     if (typeof l === "undefined") { return n * m }
//     return n * m * l

// }
// console.log(multiply(66, 343 , 344434332423));


