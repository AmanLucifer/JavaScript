//Adding of Two Numbers in Functions.

//// ********************First Function**********************/////

function TwoNumberAdd(num1, num2){  ////num1, num2 is a parameters
    // console.log(num1 + num2);
}

TwoNumberAdd( 2,3)  ////2,3 is a arguments.
TwoNumberAdd( 2,"3")
TwoNumberAdd( 2, null)

//// ********************Second Function**********************/////

function Adding(first, second,){
   return first + second
   //when you use return value you not use console.log to print, you have to store in a variable than after you will print this.  
  
}

const result = Adding(4, 5)
// console.log("Result:",result);


//// ********************Third Function**********************/////

function userLogginMessage(username){  //= "Jhon"
    // if(username === undefined){
    //     console.log("Enter Your User-Name");
    //     return

    // }
    return `${username} is Looged IN`
}

console.log(userLogginMessage());