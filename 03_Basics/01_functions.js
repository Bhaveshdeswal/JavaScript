function sayMyName()
{
    console.log("You are Hiesenberg!!")
}
// sayMyName()
//  function addTwoNos(N1,N2)
//  {
//     console.log(N1+N2)
//  }
// let dolagaeris=addTwoNos(3,4)
// console.log(dolagaeris)

function addTwoNos(N1,N2)
{
    return (N1+N2)
}
let sum=addTwoNos(100,100)
// console.log(sum)

function gamerLoginMessage(gamerName="Stranger_Y")
{
    return `${gamerName} joined the game`
}
// console.log(gamerLoginMessage())
// console.log(gamerLoginMessage("Stranger_X"))

function calculateCartPrice(...num1) // here ... is used as rest operator and earlier it was used as spread operator
{
    return num1
}
// console.log(calculateCartPrice(200,300,400,1500))

let user=
{
    name:"Bhavesh",
    mobNo:9872158960,
    email:"kajubadam@gmail.com"
}
function handleObject(anyobject)
{
    console.log(`Username is ${anyobject.name}, Mobile nummber is ${anyobject.mobNo} and email is ${anyobject.email}`)
}
// handleObject(user)
// handleObject({name:"Kid", mobNo:9877209102})

myNewArray=[500,900,200,1000]
function returnSecondValue(arr)
{
    return arr[1]
}
// console.log(returnSecondValue(myNewArray))
// console.log(returnSecondValue([99,999]))