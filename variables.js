// var let const

// var is a function-scoped or globally scoped variable declaration. It can be re-declared and updated.
// let is a block-scoped variable declaration. It cannot be re-declared in the same scope but can be updated.
// const is a block-scoped variable declaration. It cannot be re-declared or updated (must be initialized at declaration).

/*1. Global Scope
Variables declared outside any function or block.
Accessible from anywhere in your JavaScript code.

2. Function Scope
Variables declared using var, let, or const inside a function are only accessible within that function.

3. Block Scope
Variables declared with let or const inside a block ({}) are only accessible within that block. 

4. Lexical Scope
Functions in JavaScript remember the scope in which they were declared, even when executed elsewhere.

5. Module Scope (ES6 Modules)
In modules, variables, functions, and classes are scoped to the module unless exported.*/

console.log(a);// undefined
var a= 10
a=20
console.log(a); // 20

//console.log(b);// reference error
let b = 30;
b = 40;
console.log(b); // 40


let func= ()=>{
    var a = 50;
    console.log('in func',a); // 50
}
 func();
 console.log('out func',a); // 20
{
    let b = 60; 
    console.log(b); // 60
}

console.log(b); // 40

