let password =1234;
let username ="oscar";


let myButtonLogin = document.getElementById("buttonLogin");

myButtonLogin.addEventListener("click", function()
{

    let usernameInput =document.getElementById("user").value;
    let passwordInput = document.getElementById("password").value;

    if (username == usernameInput && password == passwordInput ) {
        console.log("fan vad duktig du är")
        
    } else {


        console.log("fortfarande duktig chaaanp")
    }

});

