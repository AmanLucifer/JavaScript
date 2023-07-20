const Email = "computer@gmail.com"

if (Email) {
    console.log("I have user email");
}else{
    console.log("sorry :) Don't have user email");
}

//falsy values

//false, 0, -0, BigInt 0n, "", null, undefined, NaN.

// truthy values

//true, "0", "false", " ", [], {}, function (){}

//checking the email empty or not 
// if (Email.length === 0) {
//     console.log("empty value");
// }


//checking the object empty or not 

// const Myobject = {}


// if (Object.keys(Myobject).length ===0) {
//     console.log("empty object");
    
// }else{
//     console.log("Not empty object");
// }

// not intersting thing
//use this code in inspect code

// false === 0
// false
// false == 0
// true
// false == ""
// true
// 0 == false
// true
// 0 == ""
// true
// false == false
// true


//Nullish coalescing operator (??): null, undefined


let value;

// value = 4 ?? 5
// value = null ?? 10
value = undefined ?? 10


console.log(value);


//terniary operator 

const PriceofIcecrem = 50

PriceofIcecrem > 20 ? console.log("Less than 50") : console.log("more than 50");