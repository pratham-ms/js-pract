const arr = [1,2,3,4,5];

for (const num of arr) {
    // console.log(num);
}

const str = "Hello";

for (const char of str) {
    // console.log(`Each character: ${char}`);
}

//Maps

const myMap = new Map();
myMap.set('a', 1);
myMap.set('b', 2);
myMap.set('c', 3);

// console.log(myMap);

for (const [key, value] of myMap) {
    // console.log(`Key: ${key}, Value: ${value}`);
}


const object = {
    name: 'Alice',
    age: 30,
    city: 'New York'
};  
for (const key in object) {
    // console.log(`${key} is ${object[key]}`);
    
}

  
for (const index in pro) {
    console.log(`Index is: ${index} and value is: ${pro[index]}`);
}

