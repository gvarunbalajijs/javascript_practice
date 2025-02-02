const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) { //to check it array is empty or not we use (.length === 0)
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {//to check the obj we first convert objects into a array using (Object.keys(emptyObj)) after converting into array we use .length===0 condition to check the object is empty or not
    console.log("Object is empty");
}
// Nullish Coalescing Operator (??): null undefined
//used for safety check
let val1;
// val1 = 5 ?? 10 //print 5
// val1 = null ?? 10//print 10
// val1 = undefined ?? 15//print 15
val1 = null ?? 10 ?? 20//the first value it get it print that value only . print 10



console.log(val1);
// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")//first console true condition, second console for false condition
//print more than 80