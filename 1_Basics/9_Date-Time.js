//Date                                           //output
            
// let FirstDate = new Date()
// console.log(FirstDate);                       //2023-06-29T12:46:15.281Z
// console.log(FirstDate.toString())             //Thu Jun 29 2023 12:46:15 GMT+0000 (Coordinated Universal Time)
// console.log(FirstDate.toDateString())         //Thu Jun 29 2023
// console.log(FirstDate.toLocaleDateString())   //6/29/2023
// console.log(FirstDate.toJSON())               //2023-06-29T12:46:15.281Z
// console.log(typeof FirstDate);                // object


// creat date in js

let CreatedDate = new Date(1947, 0, 26,)
console.log(CreatedDate.toDateString());

// YY/MM/DD in JS
let SecondCreatedDate = new Date("2023-04-08")
console.log(SecondCreatedDate.toDateString());
//MM/DD/YY 

let ThirdCreatedDate = new Date("04-08-2009")
console.log(ThirdCreatedDate.toDateString());

// Time Stamp

let TimeStamp = new Date()
console.log(TimeStamp.getDate());
console.log(TimeStamp.getSeconds());
console.log(TimeStamp.getDay());
console.log(TimeStamp.getMonth() + 1);
