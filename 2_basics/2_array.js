const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);// in push it takes second array as an third element.like-[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] and for[3][1] it gives flash
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);// in concat it gives a single line array by combining both the arrays like [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// const all_new_heros = [...marvel_heros, ...dc_heros]// this method is called spread operator same as concat

// console.log(all_new_heros);
// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity)//it makes a complete single array take out array from the array
// console.log(real_another_array);
console.log(Array.isArray("varun"))//to check whether the given data is array or not like false it gives
console.log(Array.from("varun"))//to convert the data into an array format and coverts the given data into [ 'v', 'a', 'r', 'u', 'n' ]
console.log(Array.from({name: "hitesh"}))//it doesn't work with keyword value it returns array like []
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));//form a set of array [ 100, 200, 300 ]