////////////////////  Numbeer ///////////////////////////////////////////////////////

let number = 200
console.log(number);

let secondNumber = new Number (300)
console.log(secondNumber);

//use some prototype
console.log(secondNumber.toString().length);
console.log(secondNumber.toFixed(2)); //prosizan value 
// console.log(typeof secondNumber);
// console.log(typeof number);

const thirdNumber = 100000000
console.log(thirdNumber.toLocaleString()); //International System
console.log(thirdNumber.toLocaleString('en-IN')); //Indian System


//////////////////////////////////////////  Maths   //////////////////////////////////////////

console.log(Math);  // run this comand in inspact element 

console.log(Math.round(6.2));  //round use for nearest
console.log(Math.round(6.6));  
console.log(Math.ceil(6.6));   // 6.6 == 7
console.log(Math.floor(6.1));  // 6.6, 6.1 == 6
//we use more round as well as compare to ceil, floor. 

console.log(Math.max(3,5,6,9));
console.log(Math.min(3,5,6,9));
//this code is use in ludo game to genrate random number.
console.log(Math.random());  //math.random generate random number.
console.log((Math.random()*10) +1);  // 10 is use for range and +1 is use for not come zero.
console.log(Math.floor(Math.random() *100) +1); // math.flore to remove the point


const min = 10
const max = 20

console.log(Math.floor(Math.random()*(min- max + 1 ))+min); 