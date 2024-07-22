const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){ //in for each we use call back funtion where we not use name to the function and in parameter we give a name and console it
//     console.log(val);
// } )//js
// // ruby
// // java
// // python
// // cpp
// coding.forEach((item)=>{console.log(item);})//arrow function


// function printMe(item){//printMe is also an prototype in array
//     console.log(item);
// }

// coding.forEach(printMe)//here we are giving reference
// // //print js
// // ruby
// // java
// // python
// // cpp

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )//print
// js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]

//obj in array
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
myCoding.forEach((item)=>{
    // console.log(item.languageFileName);
})//print
// js
// java
// py