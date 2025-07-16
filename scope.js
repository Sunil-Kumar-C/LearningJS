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

//global scope

let globalVar = "I am global";

function globalFunction() {
  console.log(globalVar);
}
globalVar = "changed global variable";
globalFunction(); // "changed global variable"

//local scope
function localScope() {
  let localVar = "I am local";
  console.log(localVar);
}
localScope(); // "I am local"
