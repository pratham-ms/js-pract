//for

for (let index = 0; index < 10; index++) {
    const element = index;
    if (element % 2 === 0) {
        // console.log(element);
    }
    
}


for (let i = 0; i < 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 0; j < 10; j++) {
        // console.log(`  Inner loop value: ${j}`);
    }
}

for (let index = 1; index <= 20; index ++) {
    if (index == 5) {
        console.log('5 is my favorite number!');
        break;
    }
    console.log(`Number: ${index}`);
}