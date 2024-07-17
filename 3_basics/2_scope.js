// let a=300//this is global scope ,where global scope value are applicable on block scope but block scope value is not applicable on global scope and browser console scope is different as comapredd to programming scope
// if(true){ //block scope which is under the {}
//     let a=10
//     const b=20
//     console.log("Inner:",a);
    
// }

// console.log(a);
// console.log(b);
// function one(){
//     const username = "varun"

//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     // console.log(website);//error

//      two()

// }

// one()//one function is called then two is call
if (true) {
    const username = "varun"
    if (username === "varun") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);//error
    // console.log(username)//inside the first if scope
}

// console.log(username);//error out of the if scope
//-------------------------------------------------------------------
console.log(addone(5)) //here we define the arguments before function

function addone(num){
    return num + 1
}



addTwo(5)  //here is throughs error because when variable holds function we can't define arguments before function
const addTwo = function(num){
    return num + 2
}