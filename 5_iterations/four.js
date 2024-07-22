const myObject = { //for object we use for in loop
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
for (const key in myObject) {
    // console.log(`${key}:${myObject[key]}`);//first we print key and then myObject key
}//printjs:javascript
// cpp:C++
// rb:ruby
// swift:swift by apple
const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    // console.log(programming[key]);
}//print js
// rb
// py
// java
// cpp

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
for (const key in map) {
    console.log(map[key]);
}//it throughs error or not showing any error or result because for in loop can't make map iterable