//isNaN not a number

console.log(isNaN(NaN)); // true
console.log(isNaN("Hello")); // true    
console.log(isNaN(123)); // false
console.log(isNaN("123")); // false
console.log(isNaN(undefined)); // true
console.log(isNaN(null)); // false
console.log(isNaN("")); // false
console.log(isNaN(true)); // false
console.log(isNaN(false)); // false

// strict check

console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN("Hello")); // false
console.log(Number.isNaN(123)); // false
console.log(Number.isNaN("123")); // false
console.log(Number.isNaN(undefined)); // false
console.log(Number.isNaN(null)); // false
console.log(Number.isNaN("")); // false
console.log(Number.isNaN(true)); // false
console.log(Number.isNaN(false)); // false
