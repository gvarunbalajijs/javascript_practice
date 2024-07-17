//imdediate invoke function expression () (). golbal scope variable pollution will interfer for that reason we use iife to immediately run the function and iife oesn't know where to end so we have to use semi column
(function chai(){ //chai() is a named iife
    console.log("Database Management");
})();//Database Management
(()=>{
    console.log(`trend`);
})();//trend
( (name) => { // is a iife
    console.log(name);
})("varun")//trend