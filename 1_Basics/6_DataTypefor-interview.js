//For interview purpose there are two types of DataTypes.

//primitive:- String, Number, Boolearn, Undefined, Symbole, BigInt,

const userName = "Aman"
let userId = 1234
let userIdInDecimal = 12.34
let isLogin = false
let password;
const id = Symbol('123')
const anotherid = Symbol('123')

// console.log(sym);
// console.log(symb);
// console.log(typeof sym);
// console.log(typeof symb);
console.log(id === anotherid);

let bigNumber = 1234567890345543n
// console.log(typeof bigNumber);
//when you add n at the end of any number the Data Type of number is change into bigint DataType.


// Non primitive (Reference):- Array, Objects, Functions


const State = ["Delhi", "Punjab", "Bihar", "UP"]

let objectName = {
    Name: "Aman",
    age: 14,
    password: 878787,
}

let ThisFunction = function(){
    console.log("Hello World");

}

console.log(typeof State);


/*
number - number
string -  String
boolean - boolean
symbol - symbol
bigint - bigint
undefined - undefined
null - object
array - object
object - object
function - function
*/


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Stack and Heap memory in javascript.

//Stack (primitive) In stack you get copy
//Heap (Non primitive) In Heap you get refrence {actual change ya update}

let NameOfWebsite = "amanport404.github.io"

let AnotherNameOfWebsite = NameOfWebsite
AnotherNameOfWebsite = "vishalport.tk"

console.log(NameOfWebsite);
console.log(AnotherNameOfWebsite);



let UserONe = {
    userName: "Summar",
    userEmail: "user@gmail.com",
    age: 12,
   
}

let userTwo = UserONe
userTwo.userEmail = "summar@gmail.com"

console.log(UserONe.userEmail);
console.log(userTwo.userEmail);





