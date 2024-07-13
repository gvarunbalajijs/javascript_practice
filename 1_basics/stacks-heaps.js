//stack(gives a copy of value) for primitive and heeap(gives the original refernece) for non primitive
let value="varun"//stack 
let value1=value
value1="balaji"
console.log(value);
console.log(value1);
let myobj={ //heap
    animal:'tiger',
    age:5
}
let myobj1=myobj
myobj1.animal='lion'
console.log(myobj);
console.log(myobj1);