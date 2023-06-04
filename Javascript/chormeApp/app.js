const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");


function handleLinkClick(e) {
    e.preventDefault();
    alert("click")
}
function onLoginSubmit(e) {
    e.preventDefault();
    loginForm.classList.add("hidden");
}

loginForm.addEventListener("submit", onLoginSubmit);