// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase.
// var declarations are hoisted to the top of their function or global scope, while let and const declarations are hoisted but not initialized, leading to a "temporal dead zone" until they are defined.
// function declarations are also hoisted, allowing them to be called before they appear in the code.
// function expressions, including arrow functions, are not hoisted in the same way as function declarations, meaning they cannot be called before they are defined.

console.log(x); // undefined
var x = 5;
console.log(x); 

console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;         
console.log(y); // 10

greet(); // "Hello, World!"
function greet (){
    console.log("Hello, World!");
}

greetFunc(); // TypeError: greetFunc is not a function
let greetFunc = function(){
    console.log("Hello, World!");
}

greetArrow(); // TypeError: greetArrow is not a function
let greetArrow = ()=>{
    console.log("Hello, World!");
}