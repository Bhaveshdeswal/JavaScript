// Object literals
let mySym=Symbol("Key1")
let mySym2=Symbol("Key2")
let jsUser={
    name: "Bhavesh",
    "Full Name": "Bhavesh Deshwal",
    mySym2: "This is string",
    [mySym]: "This is symbol",
    age: "23",
    location: "Delhi",
    email: "deshwalbhavesh.1001@gmail.com",
    isLoggedIn: false,
    logInDays: ["Monday","Tuesday","Friday"],
}
// console.log(jsUser.logInDays);
// console.log(jsUser["logInDays"]);
// console.log(jsUser["Full Name"]);  // jsUser."Full Name" is wrong syntax here
// console.log(jsUser.mySym2)
// console.log(jsUser[mySym])

jsUser.email = "bhavesh@chatgpt.com"
// Object.freeze(JsUser)
jsUser.email = "bhavesh@microsoft.com"
// console.log(JsUser);

jsUser.greeting = function(){
    console.log("Hello JS user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this["Full Name"]}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());