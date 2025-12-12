// getelementbyId
// getelementbyClassName
// getelementByTagName
// querySelector
// querySelectorAll

let head = document.getElementById("head");

head.innerText = "welcome Back";
//head.innerHTML = "<h1>Hello</h1>";

head.style.color ="red";
head.style.fontsize = "42px";

let fruits = document.getElementsByClassName("apple");

//console.log(fruits);

if(fruits.length > 0) fruits[0].style.color = "green";
let banana = document.getElementsByClassName("banana");
if(banana.length > 0) banana[0].style.color = "yellow";

let ele = document.querySelector("div");
console.log(ele);

let ele1 = document.querySelectorAll("div");

let h2Ele = document.createElement("h2");
h2Ele.innerText = "This is created by JS";

document.getElementById("new").appendChild(h2Ele);

function hideText() {
    document.getElementById("head").style.display = "none";
}

function showText() {
    document.getElementById("head").style.display = "block";
}
function toggle(){
    let head = document.getElementById("head");
    if(head.style.display === "none" || head.style.display === ""){
        head.style.display = "block";
    } else {
        head.style.display = "none";
    }
}
document.getElementById("hidebtn").addEventListener("click",hideText);
document.getElementById("hidbtn").addEventListener("mouseover")