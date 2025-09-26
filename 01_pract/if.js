// if

const isUserLoggedIn = true;

if (isUserLoggedIn) {
    // console.log("User is logged in");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow user to make a purchase");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
