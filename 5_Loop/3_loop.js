//for of loop.

const firstArray = [1,2,3,4,5,6,7,8]

for (const arr of firstArray) {
    // console.log(arr);
    
}


const name = "Aman Kumar"

for (const nam of name) {
    // console.log(nam);
    if (nam == " ") {
        // console.log("There is Space");
        
    }
}

//Map

const map = new Map();
map.set('a', 'Apple');
map.set('b', 'Ball');
map.set('b', 'Ball');  //Map has not two entery ex:- two b => ball.
map.set('c', 'Cat');
console.log(map);

// loop in map 

for (const [kay, value] of map) {
    console.log(kay, ":--", value);
    
}



