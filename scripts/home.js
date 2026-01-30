const loginButton = document.getElementById("loginButton");

function openLoginPage()
{
    location.href = "login.html";
}

loginButton.addEventListener("click", openLoginPage);