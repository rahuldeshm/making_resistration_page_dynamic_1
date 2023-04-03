// Synchronous tasks will run first than asynchronous tasks
console.log("a");
console.log("b");
async function fun(){
    await new Promise((res,rej)=>{
        setTimeout(()=>{
        console.log("c");
        res();
    }, 1000)});
    const message = await new Promise((res,rej)=>{
        setTimeout(()=>{
        console.log("butting the ps");
        res("Booting successful") 
// if we don't resolve the promise compiler will never going to next line
// The execution context will never go to next line.
    }, 500)});
    console.log(message)
    console.log("e");
}
fun()