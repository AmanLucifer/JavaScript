//objects
const firstsymbol = Symbol("Good")

const firstobject = {
    name: "Aman", 
    class: 8,
    age: 14,
    email: "aman@gmail.com",
    Islogin: true,
    "UserLocation": "India",
    [firstsymbol]: "sym"  //this is symbol it is use in object. 
}

//value ==> name, class, age, email, Islogin 
//value is store as string 
//key ==> aman, 8, 14, aman@gmail.com, true
//kay is store as string, number, boolen as your wish.


console.log(firstobject);
console.log(firstobject.email);
console.log(firstobject["email"]);
console.log(firstobject.UserLocation);
console.log(firstobject[firstsymbol]);

//how to changr key in object.

firstobject.email = "hero@gmail.com" // chande email, name and more ya override
// if you want to not change email, name and many more use this.
Object.freeze(firstobject)
firstobject.email = "ram@gmail.com"
console.log(firstobject);

//to check value in JS.

