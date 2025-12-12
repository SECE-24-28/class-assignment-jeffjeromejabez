//named function
function add(a,b){
    return a+b;
}

console.log(add(10,20));
console.log("--------");

//anonymous function
var sub = function(a,b){
return b-a;
};

console.log(sub(10,20));
console.log("---------");

//IIFE function-Immediate invoked func expresssion
(function(a,b){
return a*b;
})(10,20);

//arrow function
var div = (a,b)=>{
    return b/a;
};

console.log(div(10,20));
//callback function
function main(add){
    var sum =10+20;
    console.log("the sum is",sum);
}
function second(num){
    console.log("this is second function",num);
}
main(second);
//callback hell (or) Pyramid of doom