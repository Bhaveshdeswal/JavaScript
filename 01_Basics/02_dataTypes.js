let name="Bhavesh"      //String
let age=23              //Number => 2^53 //bigInt
//let isLoggedIn= true    //Boolean Value
//null =>stand alone value
//undefined (not defined)
/* 
null is like an empty glass and 
undefined is like currently I don't know what 
and how much of the liquid is inside the glass
*/ 
// symbol


// object

console.log(typeof age)       // number
console.log(typeof null)      //object
console.log(typeof undefined) //undefined

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);