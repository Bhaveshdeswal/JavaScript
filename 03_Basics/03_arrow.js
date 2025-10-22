const user = {
    username: "Bhavesh",
    price: 300,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "Kite"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Bhavesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "Bhavesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "Bhavesh"
    console.log(this);
}   // => is arrow used for arrow functions

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "Bhavesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()