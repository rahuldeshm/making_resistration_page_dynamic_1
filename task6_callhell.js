// Do not touch this function at all
function create3rdPost(callback) {
    setTimeout( () => {
        console.log('Post Three')
        //If callback function is passed call it
        if(callback){
            callback();
        }
    }, 3000)
}

//Please modify this function too to reach the desired output
function create4thPost() {
    setTimeout( () => {
        console.log('Post Four')
        create5thPost()
    }, 2000);
}

// Do not touch this function at all
function create5thPost() {
    setTimeout( () => {
        console.log('Post Five')
    }, 1000);
}

//You have to  modify the syntax below to reach the desired output
create3rdPost(create4thPost)