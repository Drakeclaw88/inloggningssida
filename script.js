// This is my only variable that need to be reached by all my functions. This is the area in my html that will be changed with my 
//diffrent functions.
let Views = document.getElementById("view");


loggedInOrNot();

//this checks with localstorage if the variable is null or not, to see which view/page that will be shown when you load the page.
function loggedInOrNot()
 {
    if (localStorage.getItem("areMember") !== null) {
        memberPage();
    }
    else {
        loginPage();
    }
}

// loginview, this will insert all the html for my loginpage, set my loginvariables and check if the input matches with variables
//if match then it will store it in localstorage in areMember. and i call my function memberPage. if not match i will call wrongpasswordpage
function loginPage()
 {
    Views.insertAdjacentHTML("afterbegin", ' Username: <input type="text" name="" id="user" placeholder="Your username"> Password: <input type="password" name="" id="password" placeholder="Your password">  <button id="buttonLogin">Login</button>');

    let myButtonLogin = document.getElementById("buttonLogin");
    let password = 1234;
    let username = "test";

    myButtonLogin.addEventListener("click", function () {
        let usernameInput = document.getElementById("user").value;
        let passwordInput = document.getElementById("password").value;

        if (username == usernameInput && password == passwordInput) {
            localStorage.setItem("areMember", usernameInput);
            memberPage();
        }
        else {
            wrongPasswordPage();
        }
    });
}

//This function draws up a new html and will insert a button, i connect the button to an addeventlistener, that onclick will empty localstorage 
//reset the html and call my loginpage function.
function memberPage() 
{
    Views.innerHTML = "Welcome to the member area!";
    Views.insertAdjacentHTML("beforeend", "<div><button id='buttonLogout'>Logout</button></div>");
    let myButtonLogout = document.getElementById("buttonLogout");

    myButtonLogout.addEventListener("click", function () {
        localStorage.removeItem("areMember");
        Views.innerHTML = '';
        loginPage();
    });
}

//This function draws up a new html and will insert a button, i connect the button to an addeventlistener, that on click will reset the
//html and call my login function
function wrongPasswordPage()
 {
    Views.innerHTML = "It seems like you are not a member, or have you forgotten the password?";
    Views.insertAdjacentHTML("beforeend", "<div><button id='buttonToLogin'>Take me back to the login page</button></div>");

    let myButtonToLogin = document.getElementById("buttonToLogin");

    myButtonToLogin.addEventListener("click", function () {
        Views.innerHTML = '';
        loginPage();
    });
}



