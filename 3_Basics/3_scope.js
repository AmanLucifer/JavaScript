let USerName = "Aman" //Global Scope

function scope(){
    let UserId = 1234   //Local Scope
    console.log(UserId);
}

scope()
console.log(USerName);
// console.log(UserId);