//singleton which is not applocable on literals
const mySym = Symbol ("key1")
const JsUser = {
    name: "varun",
    "full name": "varun",
    [mySym]: "key1",
    age: 18,
    location: "Jaipur",
    email: "varun@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(JsUser['email','location']);
// console.log(JsUser['full name']);
// console.log(JsUser[mySym]);
// JsUser.email = "varun@chatgpt.com"
// // Object.freeze(JsUser)//to freeze
// // JsUser.email = "varun@microsoft.com"
// console.log(JsUser);//solution
//Jaipur
// varun
// mykey1
// {
//   name: 'varun',
//   'full name': 'varun',
//   age: 18,
//   location: 'Jaipur',
//   email: 'varun@chatgpt.com',
//   isLoggedIn: false,
//   lastLoginDays: [ 'Monday', 'Saturday' ],
//   [Symbol(key1)]: 'mykey1'
// }
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);//this. is used for obj key
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());