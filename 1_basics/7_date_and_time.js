let date= new Date()
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toISOString);
// console.log(date.toJSON());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleString());
// console.log(typeof date);//date type is object
// let CreatedDate=new Date(2024,6,15);
// let CreatedDate=new Date(2024,6,15,3,30);//3,30 is time
// let CreatedDate=new Date("2024-07-15");//yy-mm-dd format
let CreatedDate=new Date("07-15-2024");//mm-dd-yy format
// console.log(CreatedDate.toDateString());
// console.log(CreatedDate.toLocaleString());
let myTimeStamp=Date.now()
// console.log(myTimeStamp);
// console.log(CreatedDate.getTime());//.getDay gives how many day//.getDate gives the particular one day date
console.log(Math.floor(Date.now()/1000))//coverting into ms
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {//can define in detail in objects
    weekday: "short",
    
})
