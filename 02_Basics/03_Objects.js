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

// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());

// Singleton Object

let instaUser= new Object();
instaUser.id="abc135"
instaUser.name="Truecaller"
instaUser.isLoggedIn=false
let moreDetails={
    email:"dk@gmail.com",
    mob: "9878543796"
}
instaUser.contactDetails=moreDetails
// console.log(instaUser);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "q@gmail.com"
    },
    {
        id: 2,
        email: "w@gmail.com"
    },
    {
        id: 3,
        email: "e@gmail.com"
    },
    {
        id: 4,
        email: "r@gmail.com"
    },
    {
        id: 5,
        email: "t@gmail.com"
    },
    {
        id: 6,
        email: "y@gmail.com"
    },
]

// console.log(users[1].email)

//console.log(instaUser);
// console.log(Object.keys(instaUser));
// console.log(Object.values(instaUser));
// console.log(Object.entries(instaUser));
// console.log(instaUser.hasOwnProperty('isLoggedIn'));
/*
let {contactDetails} = instaUser
console.log(contactDetails)   
*/
let {contactDetails: data} = instaUser
//console.log(data)
