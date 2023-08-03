//Redecu:--  to Add Shoping cart bill.

const number = [1,2,3,4,5]

const TotalNumber = number.reduce( function(acc,curr){

    console.log(`acc: ${acc} Curr: ${curr}`);
     return acc+curr
    

},0)



// const TotalNumber = number.reduce((acc, curr) => acc + curr, 0)  

console.log(TotalNumber);

//Heare is an example:

const ShopingPrice = [

    {
        cource:'Python Cource',
        Price: 999
    },
    {
        cource:'JS Cource',
        Price: 1999
    },
    {
        cource:'C++ Cource',
        Price: 2999
    },
    {
        cource:'Mobile Dev Cource',
        Price: 5999
    },
]


const TotalShoping = ShopingPrice.reduce((acc, curr) => acc + curr.Price,0)

console.log(TotalShoping);