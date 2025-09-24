//array

const myArr = [1, 2, 3, 4, 5];
// console.log(myArr);
// console.log(typeof myArr);
// console.log(myArr[1]);
// console.log(Array.isArray(myArr));

const myArr2 = new Array(1, 2, 3, 4, 5);
// console.log(myArr2);   
// myArr2.push(6);
// console.log(myArr2);
// myArr2.pop();
// console.log(myArr2);
// myArr2.unshift(9);
// console.log(myArr2);
// myArr2.shift();
// console.log(myArr2);

// console.log(myArr2.indexOf(3));
// console.log(myArr2.includes(3));
// console.log(myArr2.includes(8));

// const newArr = myArr2.join("-");
// console.log(newArr);
// console.log(typeof newArr);

// slice , splice

// console.log("A",myArr2);
// const myn1 = myArr2.slice(1,4);
// console.log(myn1);
// console.log("B",myArr2);

// const myn2 = myArr2.splice(1,3);
// console.log("C",myArr2);
// console.log(myn2);


const marvel_heroes = ["Ironman", "Thor", "Hulk"];
const dc_heroes = ["Superman", "Batman", "Flash"];
// marvel_heroes.push(...dc_heroes);
// console.log(marvel_heroes);
// console.log(marvel_heroes.length);

const allHeroes = marvel_heroes.concat(dc_heroes);
console.log(allHeroes);
console.log(allHeroes.length);