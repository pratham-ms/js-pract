const name = "Johnny";
const repoCount = 50;

//console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("God of War");
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(0));
console.log(gameName.indexOf("of"));
console.log(gameName.split(" "));
console.log(gameName.replace("War", "Saga"));
console.log(gameName.includes("of"));
console.log(gameName.startsWith("God"));
console.log(gameName.endsWith("Saga"));
// --- IGNORE ---   

const url = "https://github.com/github-copilot/code_referencing";

console.log(url.replace("https://", ""));