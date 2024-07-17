// function myName(){ // here function is a key word .{} defining the scope or function definition
//     console.log("V");
//     console.log("A");
//     console.log("R");
//     console.log("U");
//     console.log("N");

// }
// myName()//here myName is a referenece and () are for execution .Brackets are used for function execution
// function addTwoNumbers(number1, number2){ // (number1, number2) this is parameter when we are making function as a input we take as parameters

//     console.log(number1 + number2);//console only print it doesn't return any value
// }
// addTwoNumbers(3,4)//here we are calling the function, and (3,4) are arguments
function addTwoNumbers(number1, number2){ 

    // let result=(number1+number2)
    // return result //here we returned the value after returning the value the function will not work anything
    return number1+number2 //without any variable returning the value directly
}
// const result=addTwoNumbers(3,4)
// console.log("Result:",result)//here it print Result: 7
 
// function loginUserMessage(username){
    
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("varun"));
// function loginUserMessage(username ="sam"){// if we give default value the username will never be undefined it will not execute if condition
//     // if(username === undefined)
//     if(!username){//!is called excelmatory it converts false to true true to false ,which is work same as the above if condition{
//         console.log("please enter your name");
//          return  //print please enter your name
//          undefined
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage());//only please enter your name is print other function will not work that is why it showing undefined

// function calculateCartPrice( val1,val2,...num1){ //...num1 performs as a rest operator
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 500, 2000))//printed [ 200, 400, 500, 2000 ]/if we add val1,val2 then it print [ 500, 2000 ] where first vlaue is stored in val1,val2
const user = { //passing object through function
    username: "varun",
    prices: 199
}

function handleObject(user){ //in parameter we have to give object variable
    console.log(`Username is ${user.username} and price is ${user.price}`);
}

// handleObject(user) //calling function.print Username is varun and price is 199
// handleObject({
//     username: "sam",
//     price: 399
// })//print Username is sam and price is 399
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[3]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));