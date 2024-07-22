const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)//here after paranthesies we have to give accumilator initial value which as a temp value

// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

// console.log(myTotal);
// print acc: 0 and currval: 1
// acc: 1 and currval: 2
// acc: 3 and currval: 3
// 6

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const Total=shoppingCart.reduce((accum,item)=>accum+item.price,0)
console.log(Total);