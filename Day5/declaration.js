var a = 10;
a=20;
var b = a;
var a = 30;
console.log("a",a);
console.log("b",b);
//let
let c =10;
c=20;
console.log("c",c);
const d = 10;
console.log("d",d);

let person={
    fname:"Harry",
    lname:"potter",
    age:23,
    address:{
        city:"hogwards",
        pincode:5656555,
    }
    };

    const{fname,lname,age,address}=person;
    const{city,pincode}=person.address;
    console.log(fname);
    console.log(age);
    console.log(pincode);
//let personCopy = person;//normal copy
//let personCopy={...person,address:{...person.adress} }//shallowCopy
let personCopy = JSON.parse(JSON.stringify(person));//deepcopy

person.age=34;
person.address.city="Mumbai";

console.log("person",person);
console.log("personCopy",personCopy);

//rest operator

function add(a,b,...num){
    return a+b;
}
console.log(add(10,30,56,67,78,89,7,6,7));
