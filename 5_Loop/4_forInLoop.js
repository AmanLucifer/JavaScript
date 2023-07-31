//object pay Loop
//for In Loop

const ObjectName = {
    CD: "Compact Disk",
    MU: "Memory Unite",
    HD: "Hard Disk"
}

for (const key in ObjectName) {
    //console.log(`${key} Full Form Is ${ObjectName [key]} `);
    
}


//Array in for In Loop

const MyArray = ['Aman', 'Aditya', 'Visha', 'Raunak']
for (const key in MyArray) {
    //console.log(key);  error
    console.log(MyArray[key]);
}