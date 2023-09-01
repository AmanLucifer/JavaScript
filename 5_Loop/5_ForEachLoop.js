//for Each loop in js

const programinglanguge = ["JS", "Python", "C", "C++", "Java"]

 const lang = programinglanguge.forEach( (item)=> {
    

    //console.log(item);
})

//console.log(lang);



//filter 

const Numbers = [0,1,2,3,4,5,6,7,8,9,]

 //const newnum = Numbers.filter( (num) => num <= 5)
 const newnum = Numbers.filter( (num) => {
    //num <= 5  error.
     return num <= 5
 })

//console.log(newnum);
//how to use same thing in fore each loop.

const arr = []

Numbers.forEach( (number) =>{
    if (number <= 5) {
        arr.push(number)
        
    }
})
// console.log(arr);
//both are same as per your good choise use it.

//see and example.


const Home = [
     {Place: 'Delhi', EST: 2000, Price: 100000},
     {Place: 'Pune', EST: 2002, Price: 200000},
     {Place: 'Kolkata', EST: 1950, Price: 400000},
     {Place: 'Jaipur', EST: 2020, Price: 300000},
     {Place: 'Delhi', EST: 2000, Price: 800000},
     {Place: 'Pune', EST: 2002, Price: 200000},
     {Place: 'Kolkata', EST: 1950, Price: 400000},
     {Place: 'Jaipur', EST: 2020, Price: 400000},
     {Place: 'Bengaluru', EST: 2015, Price: 600000},
     {Place: 'Jaipur', EST: 2000, Price: 100000},
];

//const UserHome = Home.filter( (hom) => hom.Price === 100000)
//console.log(UserHome);

const PlacePrice = Home.filter((pp) =>{
    return pp.EST === 2000 && pp.Price === 100000
})

// console.log(PlacePrice);






///////////////// **********************???????????????????????????????????????????


const product = [
    {ProcuctName: 'Sumsang', Price: 10000 , Ram: '4GB'},
    {ProcuctName: 'Sumsang', Price: 8000 , Ram: '4GB'},
    {ProcuctName: 'OPO', Price: 10000 , Ram: '4GB'},
    {ProcuctName: 'OPO', Price: 10000 , Ram: '2GB'},
    {ProcuctName: 'Sumsang', Price: 10000 , Ram: '4GB'},
    {ProcuctName: 'Realme', Price: 9000 , Ram: '4GB'},
    {ProcuctName: 'Realme', Price: 9000 , Ram: '2GB'},
];


const Buy = product.filter( (PF =>{
    return PF.ProcuctName === 'Sumsang'  && PF.Price === 8000
}))

// console.log(Buy);   

