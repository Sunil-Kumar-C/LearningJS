// immediate invoked function expression

(function(){
    let privateVar ='private';
    console.log(privateVar); // "private"
})();

//console.log(privateVar) // Error: privateVar is not defined

((x)=>{
    let customerName = x;
    console.log(customerName); // "x"
})('alice');

((x) => {
  let customerName = x;
  console.log(customerName); // "x"
})("in");

