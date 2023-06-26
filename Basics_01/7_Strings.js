let name = "Aman"
let working = " Is Working From Home"

console.log(name + working + " 2020");
//I am not preferred  to use this code in mordern day.


// this is backtic ``.

console.log(`My aname is ${name} I am ${working.toUpperCase()}`);
//There is no diffrent in result.
//This is use in mordern day.
//you use methout in it.


const gameName = new String("AmanKumar") //when you run this code in inspect you see the index of AmanKumar and many funstions.
// if you want to use the functions Follow the one written below.


//these all the strings methoud.
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf('m'))

const fistString = gameName.substring(0, 5)
console.log(fistString);



const thirdString = "    Aditya    "
console.log(thirdString)
console.log(thirdString.trim())

let url = "https://amanport404.github.io/about%20aman"

console.log(url.replace('%20', '-'));

console.log(url.includes("aman"));
console.log(url.includes("amank"));



