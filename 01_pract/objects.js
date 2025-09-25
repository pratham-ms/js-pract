 const JsUser = {
    name : "Johnny",
    age : 20,
    location : "Surat",
    email : "pratham@monk",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Friday"]
 }

//  console.log(JsUser);
//  console.log(JsUser.email);
//  console.log(JsUser["email"]);
//  console.log(`hello ${JsUser.name} your email is ${JsUser.email} `)

 //const tinderUser = new Object()
 const tinderUser = {}

tinderUser.id = "123abss"
tinderUser.name = "Johnny"
tinderUser.isLoggedIn = false

//  console.log(tinderUser);

const regularUser = {
   email: "prat@gmail.com",
   fullname : {
      userfullname : {
         firstname : "Johnny1",
         lastname : "Since"
      }
   }
}

// console.log(regularUser.fullname?.userfullname.firstname)

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3: "a", 4 : "b"}

// const obj3 = {obj1, obj2}
// console.log(obj3);

const obj3 = Object.assign(obj1,obj2)
// console.log(obj3);

const course = {
   coursename : "js",
   price : "$69",
   courseInstructor : "Johnny"
}

//course.courseInstructor

const {courseInstructor: Instructor} = course

// console.log(Instructor)

