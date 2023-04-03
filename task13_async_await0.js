console.log("person1: shows ticket");
console.log("person2: shows ticket");

function promiseWifeBringingTicket() {
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res("preson3: shows ticket");
        }, 4000);
    });
}

function getPopcorn(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res("popcorn")
        }, 4000);
    })
}
function getbutter(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res("butter")
        }, 3000);
    })
}
promiseWifeBringingTicket().then((t)=>{
    console.log("wife come with the ticket");
    console.log("husband: lets get inside");
    console.log("wife: I am hungry");
    console.log("husband: I will get some popcorn");
    console.log("cando",t)
    console.log(new Date())
    getPopcorn().then((p)=>{
        console.log("husband says I got popcorn lets go see movie");
        console.log("wife: I need butter for my Popcorn");
        console.log("husband: I will get some butter")
        console.log(p)
        console.log(new Date())
        getbutter().then((b)=>{
            console.log(new Date())
            console.log("husband: got a butter")
            console.log(p,b)
            console.log(t)
        })
        
    })
    
});

console.log("person4: shows ticket");
console.log("person5: shows ticket");