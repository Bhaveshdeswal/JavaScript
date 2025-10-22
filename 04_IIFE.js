// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // IIFE needs to be explixitely terminated using ";"

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Bhavesh');