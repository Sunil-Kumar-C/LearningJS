// error handling
// types - syntax error, reference error, type error, range error, uri error 

// try catch finally

try{
    let result = 10/5
    console.log(result); // 2
    //console.log(nonExistentVariable);
}
catch(error){
    console.error("Error occurred:", error.message);
}
finally {
    console.log("This will always execute.");
}

function divide (a,b){
    if(b==0) throw new Error("Division by zero is not allowed");
    return a/b;
}

try{
    console.log(divide(10, 0)); // This will throw an error
}
catch(error){
    console.error(error.message); // Division by zero is not allowed
}