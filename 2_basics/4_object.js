// const tinderUser = new Object()//single term obj
const tinderUser = {}//not a single term obj
tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false//adding all this keys ito obj

// console.log(tinderUser);//print { id: '123abc', name: 'Sam', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "varun",
            lastname: "balaji"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);//by . we undergo into obj and access it print varun
// console.log(regularUser.fullname);//print { userfullname: { firstname: 'varun', lastname: 'balaji' } }
// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj3 = {5: "a", 5: "b"}
// const obj3 = {...obj1,...obj2}
// console.log(obj3);//using spread method print { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log({...obj1,...obj2});
// const obj4 = Object.assign({},obj1,obj2,obj3)//{}is an target and the other objects are treat like a source and gives a guarantee it gives a obj
// console.log(obj4);//print { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'b' }
// const users = [ //obj in array data 
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
// ]

// console.log(users[1].email);//print h@gmail.com
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));// here it takes all obj keys and put into an array. print [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser));//print [ '123abc', 'Sam', false ]
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));//to check the property exists or not,hasOwnProperty is used
const course = {   //destructuring
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);//both upper command and present cmd gives the sameoutput
// { // in api we fetch the data in Json which is represented by "{}"
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[  //json with array and obj
    {},
    {},
    {}
]