let arr = [1,2,3,4,5]

//for loop
for (let i =0 ; i<arr.length; i++){
    console.log(arr[i]); // prints each element
}

// for of
for (let x of arr){
    console.log(x); // prints each element
}
// for each
arr.forEach((value,index)=>{
    console.log(value,index); // prints each element and its index
});

//for in - to iterate over object properties mostly
for (let index in arr){
    console.log(arr[index]); // prints each element
}

// for in - to iterate over object properties mostly
for (let key in obj){
    console.log(key, obj[key]); // prints each key and its value
}

//while loop
 let i =0;
while (arr.length > i) {
    console.log(arr[i]); // prints each element
    i++;
}

// map filter reduce some every find find index
const doubled = arr.map(x => x * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
const evens = arr.filter(x => x % 2 === 0);
console.log(evens); // [2, 4]
const sum = arr.reduce((acc, x) => acc + x, 0);
console.log(sum); // 15
const hasEven = arr.some(x => x % 2 === 0);
console.log(hasEven); // true
const allPositive = arr.every(x => x > 0);
console.log(allPositive); // true
const firstEven = arr.find(x => x % 2 === 0);
console.log(firstEven); // 2
const firstEvenIndex = arr.findIndex(x => x % 2 === 0);
console.log(firstEvenIndex); // 1
