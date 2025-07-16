//closure 

//used for encapsulation and data hiding 
//memory management 

function outerFunction(){
   let outerVar = "outer"
   function innerFunction(){
    let innerVar = 'inner'
    console.log(outerVar,innerVar); // "outer"
   }
   return innerFunction
}

let closureFunction = outerFunction();
closureFunction(); // "outer inner"


let outerFunction2=(num)=>{
    let a= num;
    console.log(a); // 10
    let innerFunction2=(num)=>{
        let b = num;
        console.log(b); // 20
        console.log(a+b); // 30
    }
    return innerFunction2;
}

let addition = outerFunction2(10);
addition(20); // 30
addition(30); // 40

let validatePasskey=()=>{
    let password= 12345;
    let cookiePasskey = (pass) => {
      let cookiePass = pass;
      if (password === cookiePass) {
        console.log("Access Granted");
      } else {
        console.log("Access Denied");
      }
    };
    return cookiePasskey;
}

let checkPasskey = validatePasskey();
checkPasskey(12345); // Access Granted
checkPasskey(54321); // Access Denied


const createMultiplier = (mul)=>{
    const multiplier = (num)=>{
        return num*mul;
    }
    return multiplier
}

let double = createMultiplier(2);
let triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
console.log(double(10)); // 20

function createCart() {
    let items = [];
    return {
        addItem: function(item) {
            items.push(item);
            console.log(`${item} added. Cart:`, items);
        },
        getItems: function() {
            return items;
        }
    };
}

let cart = createCart();
cart.addItem("Apple");   // Apple added. Cart: [ 'Apple' ]
cart.addItem("Banana");  // Banana added. Cart: [ 'Apple', 'Banana' ]
console.log(cart.getItems()); // [ 'Apple', 'Banana' ]

