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

function createPost(post,call){
    setTimeout(() =>{
        posts.push(post);
        call()
    }, 2000);
}
function createFourthpost(post4,callout){
    setTimeout(() => {
        callout(post4,getPosts)
    }, 3000);
}

createPost({title:'Post Three', body:"This is Post Three"},getPosts)
createFourthpost({ title: 'Post four', body: 'This is postfour'},createPost)