//Immediately Invoked Function Expressions (IIFE)
//here we use in function.
(function code (){
    console.log("Connect TO Google");
})()
//global scope kay polution sayproblem hoti ha kaii bar that's why we use IIFE  (ife)



//here we use in Arrow.
(() =>{
    console.log("Connect TO DB");
})();


//here we use in Arrow.
((name) => {
    console.log(`Connect TO DB ${name}`);
} )("of google")

