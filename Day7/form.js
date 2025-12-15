let submitBtn = document.getElementById("submit")

submitBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    let email = document.getElementById("exampleInputEmail1").value;
    let emailError = document.getElementById("emailHelp");
    
    if(email === ""){
        alert("Email field cannot be empty");
        return;
    }
    else if(!email.includes("@") || !email.includes(".com")){
        alert("Email must contain @ and .com");
        return;
    }
    
    let password = document.getElementById("exampleInputPassword1").value;
    
    if(password === ""){
        alert("Password field cannot be empty");
        return;
    }
    else if(password.length < 6){
        alert("Password must be at least 6 characters");
        return;
    }
    
    alert("Form submitted successfully!");
})