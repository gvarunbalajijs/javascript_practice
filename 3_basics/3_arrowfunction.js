const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()//it prints hitesh , welcome to website sam , welcome to website
// console.log(this);//it gives {} if we try in browser console it gives window brcause window is global scope in browser 
// function chai(){
//         let username = "hitesh"//context work on onject not in function
//         console.log(this.username);
//     }
//  chai()   //it throughs undefined
 // const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }//it also throughs undefined it is also same the above condition
// const chai =  () => { //arrow function syntax () => {}
//     let username = "hitesh"
//     console.log(this);
// }
// chai()//prints {}
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,4));//print 7
// const addTwo = (num1, num2) =>(num1+num2) //implecent return removing {} and return and write in a single line.if we use {} we have to write return and if we use () we don't have to use return
// console.log(addTwo(3,4));//print 7
const addTwo = (num1, num2) => ({username: "hitesh"})//we have to wrap the obj in paranthesis


console.log(addTwo(3, 4))
