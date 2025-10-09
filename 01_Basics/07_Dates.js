let myDate= new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toLocaleString())

let myDateOfBirth= new Date(2002,8,16,11,55)
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()-myDateOfBirth.getTime()
let myTimeStampInSeconds = Math.floor(myTimeStamp/1000)

console.log(myTimeStampInSeconds)  // will give me how many seconds I lived