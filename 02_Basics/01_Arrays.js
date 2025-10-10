let arr= [1,2,3,4,5,true,"Bhavesh"]  // mix of element
let ogAvengers = ["Steve Roger/Captain America", "Thor Odinson" , "Tony Stark/Iron Man", "The Hulk/Bruce Banner", "Hawkeye/Clint Barton" ,"Black Widow/Natasha Romanoff"]
// console.log(`${ogAvengers[1]} is the strongest among the ${ogAvengers.length} original Avengers`)
let houseStark= new Array("Eddard Stark","Benjenn Stark", "Lyanna Stark","Jon Snow","Robb Stark","Sansa Stark","Brandon Stark","Arya Stark","Rickon Stark","Unborn Eddard Stark")
// console.log(`${houseStark[3]} is Considered a member of House Stark but his real name is Aegon Targaryen 6th of his name`)
arr.pop(true)  // will pop last element only whatever you pass
arr.pop()
arr.push("Bhavesh")
arr.unshift(0)
arr.shift()    // will pop first element
arr.unshift("Bhavesh")
arr.pop()
// console.log(arr);
// console.log(houseStark.includes("Cathelyn Stark")); // false
// console.log(houseStark.includes("Jon Snow"));       // true
// console.log(ogAvengers.indexOf("Tony Stark/Iron Man")) // 2
// console.log(ogAvengers.indexOf("Dr. Steven Strange"))  // -1(Does not exist in the array)
let ogAvengersString = ogAvengers.join();
// console.log(`The original Avengers are: ${ogAvengersString}`)
/*
console.log("A ",arr);
let arr1= arr.slice(1,4)
console.log(arr1);
console.log("B ",arr);
let arr2= arr.splice(1,4)
console.log(arr2);
console.log("C ",arr);
*/
// arr.sort()
// console.log(arr);