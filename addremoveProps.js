const person ={
    name: "Alice"
}
//dot notation
person.age = 30;
console.log(person); // { name: "Alice", age: 30 }

//bracket notation
person['city']= 'newyork';
console.log(person); // { name: "Alice", age: 30, city: "newyork" }

//object assignment

Object.assign(person, {country:'USA'})
console.log(person); // { name: "Alice", age: 30, city: "newyork", country: "USA" }

//spread operator

const updatedPerson = {...person, occupation:'IT'}
console.log(updatedPerson); // { name: "Alice", age: 30, city: "newyork", country: "USA", occupation: "IT" }

// delete property
delete person.age;
console.log(person); // { name: "Alice", city: "newyork", country: "USA" }

// destructioring

const {country,city,...newPerson}= person;// removes city, country property and assigns the rest to newPerson
console.log(newPerson); // { name: "Alice" }

// reflect.deleteProperty

Reflect.deleteProperty(person, 'city');
console.log(person); // { name: "Alice", country: "USA" }

if(person.hasOwnProperty('name')) {
    console.log('Name exists in person object'); // Name exists in person object
    person.name = 'Bob'; // Updating name property
}

if(!(age in person)) {
    console.log('Age does not exist in person object'); // Age does not exist in person object
    person.age = 25; // Adding age property
}