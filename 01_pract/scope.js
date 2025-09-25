// ...existing code...

function one(){
    const username = "Johnny"

    function two(){
        const website = "YT"
        console.log(username);
    }
    // console.log(website);

    // two()
}
// one()

if(true){
    const username = "Johnny2"
    if (username === "Johnny2"){
        const website = "mdn"
        console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);

function addone(num){
    return num + 1
}
addone(5)


const addTwo = function(num){
    return num + 2
}

addTwo(5)
