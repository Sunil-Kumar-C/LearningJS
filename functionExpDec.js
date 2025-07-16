//fuction declaration -- used for global reachability and reusability

function greet(){
    console.log("Hello, World!");
}
//fuction expression -- used for local scope and can be anonymous, can be passed to arguments (callbacks)
let greet = function() {
    console.log("Hello, World!");
}