
//conversion  in JavaScript

let age = "34dfr"  //"Amam", true, undefined, null, 87 we use to value.

console.log(typeof age);
console.log(typeof (age));
//In Three and four line both are same to find type.

let valueInNumber = Number(age)  // At the place we use String, Bollen and Number 

console.log(typeof (valueInNumber));
console.log(valueInNumber);


//"34" ==> 34
//"34xyz" ==> Nan means Not a Number
//true ==> 1
//false ==> 0

let joinNow = 1 //At the place we use 0, "" and "Aman"
let alreadyjoin = Boolean(joinNow)
console.log(alreadyjoin);

//1 ==> true
//0 ==>false
//"" ==> false
//"Aman" ==> true

let someNumber = 88
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log( typeof stringNumber);