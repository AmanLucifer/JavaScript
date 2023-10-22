const Onepromise = new Promise((resolve, reajact) => {
    setTimeout(() => {
        console.log("you,r work is done");
        resolve()
    }, 1000)
})

Onepromise.then(() => {
    console.log("promice complete");

})



console.log("amam");