// map vs for each
// map creates a new array 

let arr = [1, 2, 3, 4, 5];

let mappedArr = arr.map(x => x * 2);
console.log(mappedArr); // [2, 4, 6, 8, 10]

arr.forEach((value, index) => {
    console.log(value, index); // prints each element and its index
});

console.log(arr)