let myDate = new Date()
// console.log(myDate);
// console.log(typeof myDate); 
// console.log(myDate.toString());

let myCreatedDate = new Date(2025,0,2)
// console.log(myCreatedDate.toString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getFullYear());
// console.log(newDate.getMonth());
// console.log(newDate.getDate());

// console.log('hi');
// console.log(`${newDate.getDate()}/${newDate.getMonth()+1}/${newDate.getFullYear()}`);

console.log(newDate.toLocaleString('default', {
    weekday:'long',
    timeZone:'Asia/Kolkata'
}));

