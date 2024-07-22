// higher order loops on array
// let all=[1,2,3,4,5]//for of loop
// for (const loop of all) {
//     console.log(loop);
// }//print 1 2 3 4 5

let word = "hello world"
for (const wish of word) {
    // console.log(`Each char ${wish}`);
} //printEach char h
// Each char e
// Each char l
// Each char l
// Each char o
// Each char  
// Each char w
// Each char o
// Each char r
// Each char l
// Each char d


// Maps in maps we can give key value and object and it prevent from repetation ,it gives always unique values in which order we gave the values

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);//printMap(3) {
//     'IN' => 'India',
//     'USA' => 'United States of America',
//     'Fr' => 'France'
//   }
for (const [key, value] of map) {//destructured
    // console.log(key, ':-', value);
}
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }//it throughs error becuase mybject is not iterable