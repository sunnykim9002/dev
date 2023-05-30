const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const helperText = loginForm.getElementsByClassName('helpertext');

console.log(helperText)
function onLoginBtnClick () {
    const username = loginInput.value;
    const helperText = loginForm.getElementsByClassName('helpertext');
    if (username == "") {
        alert("please write your name");
    } else if (username.length > 10) {
        helperText.classList.add("HelloClass"); 
    }
}

loginButton.addEventListener("click", onLoginBtnClick)