/////////////*************this****************////////////

const user = {
    UserName: "Aman",
    Price: 29,

    WelcomeMessage: function(){
        console.log(`${this.UserName}, Welcome`);  
        console.log(`${this.UserName}, Welcome`); //this make current context.
        // console.log(this);
    } 

}

// user.WelcomeMessage()
// user.UserName = "Anurag"
// user.WelcomeMessage()
// console.log(this);


///////////////////**********************Arrow Function******************///

// const code = () => {
//     let name = "Aman"
//     console.log(name)
// }

// code()

//Basice calcultaion of two number in Arrow function.
// const AddTwoNumber = (num1 , num2) => {

//     return num1 + num2
// }
// console.log(AddTwoNumber(3,5));


const AddTwoNumber = (num1 , num2) => num1 + num2
console.log(AddTwoNumber(3,5));

