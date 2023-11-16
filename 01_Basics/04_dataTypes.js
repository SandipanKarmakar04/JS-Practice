// Premetives
// 7 Types: String | Number | Boolean | Null | Undefined | Symbol | BigInt

// Non-premetives / Reference
// 3 Types: Array | Object | Function

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const temperature = null;
let userEmail;
const id = Symbol('12345')
const anotherId = Symbol('12345');

console.log(id == anotherId);

// const bigNum = 84206788796295761681n;


const heros = ["virat", "rohit", "dhoni"];

let player = {
    name: "Virat",
    age: 35
}

const myfunc = function(){
    console.log("hello world");
}

console.log(typeof heros);

/*
undefined - "undefined"
Null - "object"
Boolean - "boolean"
Number - "number"
String - "string"

Object(native and soes not implement[[Call]]) - "function"


*/