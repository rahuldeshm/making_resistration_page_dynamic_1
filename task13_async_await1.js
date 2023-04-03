console.log("person1: shows ticket");
console.log("person2: shows ticket");

const promiseWifeBringingTicket = new Promise((res,rej)=>{
    setTimeout(() => {
        res("preson3: shows ticket");
    }, 4000);
});


const getPopcorn = promiseWifeBringingTicket.then((t)=>{
    console.log("wife come with the ticket");
    console.log("husband: lets get inside");
    console.log("wife: I am hungry");
    console.log("husband: I will get some popcorn");

    return new Promise((res,rej)=>{
        setTimeout(() => {
            res(`${t} popcorn`)
        }, 4000);
    })
})

const getbutter= getPopcorn.then((p)=>{
    console.log("husband says I got popcorn lets go see movie");
    console.log("wife: I need butter for my Popcorn");
    console.log("husband: I will get some butter")

    return new Promise((res,rej)=>{
        setTimeout(() => {
            res(`${p} butter`)
        }, 3000);
    })
})

getbutter.then((b)=>{

    console.log("husband: got a butter")
    console.log(b)

})

console.log("person4: shows ticket");
console.log("person5: shows ticket");