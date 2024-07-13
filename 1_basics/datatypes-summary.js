//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;
console.table([score,scoreValue,isLoggedIn,outsideTemp])
//Reference (Non primitive)

// Array, Objects, Functions
const id=Symbol("123")//symbol always return unique symbol even if we give same value
const anotherId=Symbol("123")
console.log(id===anotherId)
const BigNumber=123456781011121314n;// by adding n at the end of the number will defies as a bigint
console.log(BigNumber)
console.log(typeof BigNumber)
non primitive types
const profession=["fighter","writer","photographer"]//in nonprimitive types all are return object type 
let myobj={
    name:"liger",
    age: 22
}
const myfunction=function() { // object function 
    console.log("hello world")
}
console.log( profession);
console.log(typeof anotherId);
    
