//Promises are asynchronous//
//Promises may be fulfilled or their are chances of getting it rejected
//so you should able to handle rejections 
// await con only work with promise  
async function fun(){
    try{
        const dadspromise = await new Promise((res,rej)=>{
            // After 10 days promese will get resolved
            setTimeout(() => {
                let salaryCreadeted=true;
                let salary=300000;
                let costofps5=70000
                let costofps4=5000;
                if(salaryCreadeted === true && salary>costofps5){
                    res("Buy him ps5 ")
                }else if (salaryCreadeted===true && salary > costofps4){
                    rej("buy him ps4");
                }else{
                    rej("Sorry son can't buy u ps4");
                }
            }, 10000);
            
        })
        console.log(dadspromise);
    } catch(err){
        console.log(err)
    }

}
fun()
