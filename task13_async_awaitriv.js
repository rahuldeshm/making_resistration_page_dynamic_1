const posts = [
    { title: 'Post One', body: 'This is postone'},
    { title: 'Post two', body: 'This is posttwo'}
];
function getPosts() {
    setTimeout(() => {
        let output = "";
        posts.forEach((post)=>{
            output += `<li>${post.title}</li>`;
        })
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post){
    return new Promise((res,rej)=>{
        setTimeout(() =>{
            posts.push(post);
            const err = false;
            if (!err){
                res()
            }else{
                rej('Error is occured')
            }
            
        }, 100);
    })
    
}

function deletePost(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            posts.pop()
            res()
        }, 3000);
    })
}

var lastActivity =new Date();
function updateLastUserActivityTime(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res(new Date())
        }, 1000);
    })
}