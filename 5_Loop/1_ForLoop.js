// for loop

// for (let i = 0; i <= 5; i++) {
//     const element = i;
//     console.log(element);
    
// }
//consol.log is accessable outside of Local Scope aur hona bhi nahi Chahiye.

// console.log(element);


//for loop with if.

// for (let i = 0; i <= 5; i++) {
//     const element = i;

//     if (element == 2) {
//         console.log("2 is even number");
//     }

//     console.log(element);
    
// }


// for (let i = 0; i <= 5 ; i++) {
//     const element = i;
//     console.log(`Inner loop ${i}`);

//     for (let y = 0; y <= 5; y++) {
//         const element = y;
//         // console.log(`Outer lopp ${y} Inner loop ${i}`);
//         //you want to print table use this code blow.
//         console.log(i + '*' + 'y' + '=' + i*y);

//         //if you want start table form 1 you remove 0  place 1 at the place of 0.

        
//     }

    
// }


// for loop in array

const NameArray = ["Aman", "Raunak", "Prince", "Aditya"]

for (let index = 0; index < NameArray.length; index++) {
    const element = NameArray[index];

    //console.log(element);
}

// break and continue

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("I find 5");
//         break
        
//     }
//     console.log(element)
    
// }



for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("I find 5");
        continue
        
    }
    console.log(element)
    
}

