// Adding of two Array

const StateName = ["Bihar",  "Delhi", "UP"]
const CityName = ["Hajipur", "Jandaha", "patna"]

// StateName.push(CityName)

// console.log(StateName)
// console.log(StateName[1])
// console.log(StateName[3][2])

// const NewArray = StateName.concat(CityName)  // add one array to another array  properly 
// console.log(NewArray);                       //Here we use two value to add.


const AddArray = [...StateName,...CityName]  //Here we usw two or more array to add
// console.log(AddArray)

// Array in Array in Array how to make one array.

const AnotherArray = [1,2,3,4,5,[6,7,8,[9,2,1]]]

const AnotherNewArray = AnotherArray.flat(Infinity)
// console.log(AnotherArray);
// console.log(AnotherNewArray);


// console.log(Array.isArray("Aman"))
// console.log(Array.from("Aman"))


const percent1 = 80
const percent2 = 90
const percent3 = 70

console.log(Array.of(percent1, percent2, percent3));
