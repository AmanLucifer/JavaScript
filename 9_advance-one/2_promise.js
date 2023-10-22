const Onepromise = new Promise((resolve, reajact) => {
    setTimeout(() => {
        console.log("you,r work is done");
        resolve()
    }, 1000)
})

Onepromise.then(() => {
    console.log("promice complete");

})


new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Task 2 complete");
        resolve()
    }, 1000)
}).then(() => {
    console.log("Task 2 resolve");
})



const PromiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Aman", email: "mr.amanport@gmail.com" })
    }, 1000)
})

PromiseThree.then(function (UserData) {
    console.log(UserData);
})


const PromiseFour = new Promise(function (resolve, reject) {
    let error = true
    if (!error) {
        resolve({
            username: "Aman Kumar",
            email: "example@gmail.com"
        })
    } else {
        reject("Error: something went wrong")
    }
})

PromiseFour.then(function (user) {
    console.log(user);
    return user.email
})
    .then(function (useremail) {
        console.log(useremail);
    })
    .catch(function (error) {
        console.log(error);

    })
    .finally(function(){
        console.log("the promise is resolve or reject");
    })


fetch('https://api.github.com/users/AmanLucifer')
    .then((responce) => {
        const data = responce.json()
        return data
    })
    .then((data) => {
        console.log(data.id);
    })
    .catch(() => {
        console.log("Err");
    })
   