// const score = 400
// console.log(score);

// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));//it gives point accuracy like 100.0 based on the given digit in fixed function

// const number=123.456
// console.log(number.toPrecision(5));
// const number1=10000000
// console.log(number1.toLocaleString('en-IN'));//to get local string value like lakh but by default it shows american standard to get indian standard we en-IN
// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));//convert negative to positive
// console.log(Math.round(4.6));//it gives round of number
// console.log(Math.ceil(4.2));//always take above 4 number
// console.log(Math.floor(4.9));//always take before pint number
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));
// console.log(Math.random());//it gives the value between 0 and 1
// console.log((Math.random()*10) + 1);//to get the value above 1 that's why we added 1 and avoid 0. and to shift the the numbers left we multiply with 10
// console.log(Math.floor(Math.random()*10) + 1);//to get floor value
const min=10
const max=30
console.log(Math.floor(Math.random()*(max-min+1)) + min);//here we multiply max-min which represnt the range and to avoid 0 value. and min is added to get above 10 number value