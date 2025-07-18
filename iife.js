// immediate invoked function expression

(function () {
  let privateVar = "private";
  console.log(privateVar); // "private"
})();

//console.log(privateVar) // Error: privateVar is not defined

((x) => {
  let customerName = x;
  console.log(customerName); // "x"
})("alice");

((x) => {
  let customerName = x;
  console.log(customerName); // "x"
})("in");

const config = (() => {
  const secretKey = "my-secret-key"; // private variable
  return {
    getKey: () => secretKey,
  };
})();

console.log(config.getKey()); // "my-secret-key"
/*Here, secretKey is private inside the IIFE. You cannot access secretKey directly from outside (e.g., console.log(secretKey) would give an error).
You can only access it using the getKey method, which is intentionally exposed by the returned object. This is a common pattern for data privacy in JavaScript.*/
