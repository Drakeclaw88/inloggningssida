let password =1234;
let username ="test";

let Views = document.getElementById("view");

if (localStorage.getItem("areMember") !== null) 
{
    memberPage();
} 
else 
{
    loginPage();
    
}

function loginPage()
{
    Views.insertAdjacentHTML("afterbegin", ' Username: <input type="text" name="" id="user" placeholder="Your username"> Password: <input type="password" name="" id="password" placeholder="Your password">  <button id="buttonLogin">Login</button>');
    let myButtonLogin = document.getElementById("buttonLogin");

    myButtonLogin.addEventListener("click", function()
    {
        let usernameInput =document.getElementById("user").value;
        let passwordInput = document.getElementById("password").value;

        if (username == usernameInput && password == passwordInput ) 
        {
            localStorage.setItem("areMember", usernameInput);
            memberPage();
        } 
        else 
        {
            wrongPasswordPage();
        }
    });

}

function memberPage()
{
    Views.innerHTML = "Welcome to the member area!";
    Views.insertAdjacentHTML("beforeend", "<div><button id='buttonLogout'>Logout</button></div>");
    let myButtonLogout = document.getElementById("buttonLogout");

    myButtonLogout.addEventListener("click", function()
    {
        localStorage.removeItem("areMember");
        Views.innerHTML ='';
        loginPage();
    });

}

function wrongPasswordPage()
{
    Views.innerHTML = "It seems like you are not a member, or have you forgotten the password?";
    Views.insertAdjacentHTML("beforeend", "<div><button id='buttonToLogin'>Take me back to the login page</button></div>");
    let myButtonToLogin = document.getElementById("buttonToLogin");

    myButtonToLogin.addEventListener("click", function()
    {
        Views.innerHTML ='';
        loginPage();
    });
}



