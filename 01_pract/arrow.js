const user = {
    username: "Johnny",
    price : 69,

    welcomeMessage: function() {
        
        // console.log(`${this.username}, welcome to our website!`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()


const a = function a(){
    let username = "Sam"
    console.log(this);
}

// a()

// const b = (num1,num2) => {
//     return num1 + num2
// }

// const b = (num1,num2) => ( num1 + num2)

const b = (num1,num2) => ( {username: "Sam", price: num1 + num2} )


console.log(b(5,6));