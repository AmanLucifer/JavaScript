//map :--- use for adding numbers 

const MyNum = [0,1,2,3,4,5,6,7,8,9,10,11,12,]

// const MyNumbers = MyNum.map( (Add) => {
//     return Add + 5
// })

// console.log(MyNumbers);


//chaning methud in  js.

const MyNumbers = MyNum
               .map((num) => num + 10)
               .map((num) => num *2)
               .filter((num) => num <= 30)





console.log(MyNumbers);