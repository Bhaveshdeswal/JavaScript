const name = "Bhavesh"
const repoCount = 4

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('bhavesh-deshwal-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(1));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-19, -12)
console.log(anotherString);

const newStringOne = "   bhavesh     deshwal    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://bhavesh.com/bhavesh%20deshwal"

console.log(url.replace('%20', '-'))

console.log(url.includes('h.c'))

console.log(gameName.split('-'));