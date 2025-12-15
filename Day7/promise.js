//pending,fullfilled,rejected
let promise = new Promise((resolve,reject)=>{
    if(5<10){
        resolve("Resolved");
    }
    else{
        reject("Rejected");
    }
});

promise
.then((resolve)=>{
    console.log(resolve);
    if(10>2){
        return "rtyhjk";
    }
    else{
        throw "dfghjk";
    }
})
.then((resolve)=>console.log(resolve))
.catch((reject)=>console.log(reject));

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    console.log(response);
    let data = response.json();
    return data;
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error));
//async && await
const fetchUsers = async()=>{
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
let data = await response.json();
console.log("data",data);
    }
    catch(error){
        console.error(error);
    }
};

fetchUsers();
