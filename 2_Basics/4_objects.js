//This is a second part of object to decliear.

const micro = {}
 micro.name = "Aman"
 micro.id = "xyz"
 micro.phonenumber = 1234567890

//  console.log(micro);

 // objects in objest 

const hero = {
    name: "Aman",
    allEmail: {
        firstemail: "xyz@gmail.com",
        secondemail: "abc@gmail.com"
    }

}
// console.log(hero.allEmail.firstemail);

//add object in object with assing.

const objone = {
    book: 4,
    copy: 2
}



const objtwo = {
    pen: 4,
    cutter: 2
}

// const objthree = Object.assign(objone, objtwo) 
//use sprade in adding two object.
const objthree = {...objone, ...objtwo}
//line 36 and 38 are same.

console.log(objthree);

//how to access separate  value and kays.

console.log(Object.keys(micro));
console.log(Object.values(micro));

console.log(micro.hasOwnProperty('name'));