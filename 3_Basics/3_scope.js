let USerName = "Aman" //Global Scope

function scope(){
    let UserId = 1234   //Local Scope
    console.log(UserId);
}

scope()
console.log(USerName);
// console.log(UserId); 



////////////***********Functions in Functions Scope***********************//////


function parent(){
    const PUserName = "Dr. Rahul"
    console.log(PUserName)


    function child(){
        const CUserName = "Pinku"
        console.log(CUserName);
    }

    child()

}

parent()