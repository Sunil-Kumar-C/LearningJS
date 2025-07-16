//objects 

let obj1={
    name: "Alice",
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name} ${this.time}`);
    }
}
obj1.time = '5:00'
obj1.greet();


const obj2 = new Object();
obj2.name = 'Bob'
obj2.age = 25
obj2.greet= function(){
    console.log(`Hello, my name is ${this.name}`);
};

obj2.greet();

// constructor function

function person(name, age){
    this.name = name;
    this.age= age;
    this.greet= ()=>{
        console.log(`Hello, my name is ${this.name}`);
    } 
}

const person1 = new person('Charlie', 28);
const person2 = new person('Diana', 22);    
person1.greet(); // "Hello, my name is Charlie"
person2.greet(); // "Hello, my name is Diana" 

