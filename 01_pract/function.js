function myname(){
    console.log("H");
    console.log("E");
    console.log("L");
    console.log("L");
    console.log("O");
}

// myname()

// function addTwoNums(num1,num2){
//     console.log(num1 + num2);
// }

// addTwoNums(3,4)

// function addTwoNums(num1,num2){
//     let result = num1 + num2
//     return num1 + num2
//     // console.log(num1 + num2);
// }

function loginUserMssg(username){
    if (!username){
        console.log("Please enter username")
        return
    }
    return `${username} just logged in `
}

// console.log(loginUserMssg())

function calCartPrice(val1,val2,...num1){
    return num1
}

// console.log(calCartPrice(200,4000,2000,500));


const user = {
    username : "Johnny",
    price : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)

handleObject({
    username : "Sam",
    price : 399
})

const newArr = [200,400,100,600]

function returnSecondValue(getArr){
    return getArr[1]
}

// console.log(returnSecondValue(newArr));
console.log(returnSecondValue([200,400,500,1000]));
