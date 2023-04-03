function buyacar(){
    return new Promise((res,rej) =>{
        setTimeout(() => {
            console.log("Buyed a car");
            res()
        }, 3000);
    })
    
}

function planatrip(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            console.log("planned a trip");
            res()
        }, 2000);
    })
    
}

function gotomanali(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            console.log("Reached at manali");
            res()
        }, 1000);
    })
    
}

function gotofamousmountain(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            console.log("Reached at FamousMountain");
            res()
        }, 1000);
    })
    
}
//can do like this//
buyacar().then(()=>{
    planatrip().then(()=>{
        gotomanali().then(()=>{
            gotofamousmountain().then()
        })
    })
})

// second way is better//

// //can do like this// 
/*
inthis method a function will wait till its timeout is completed then will 
go to next function
*/
// async function fun(){
//     await buyacar();
//     await planatrip()
//     await gotomanali();
//     await gotofamousmountain();
// } 
// fun()
