const usernameInput = document.getElementById("usernameInput");
const passwordInput = document.getElementById("passwordInput");
const loginButton = document.getElementById("loginButton");
const cancelButton = document.getElementById("cancelButton");
const loginErrorText = document.getElementById("loginErrorText");

loginErrorText.style.display = "none";

function checkCredentials() 
{
    if (usernameInput.value == "USERNAME_A" && passwordInput.value == "PASSWORD_A")
    {
        location.href = "select-candidate.html";
    }

    else if (usernameInput.value == "USERNAME_B" && passwordInput.value == "PASSWORD_B")
    {
        location.href = "select-candidate.html";
    }

    else if (usernameInput.value == "USERNAME_C" && passwordInput.value == "PASSWORD_C")
    {
        location.href = "select-candidate.html";
    }

    else
    {
        loginErrorText.style.display = "block";
    }
}

function goBackHome() 
{
    location.href = "home.html";
}

loginButton.addEventListener("click", checkCredentials);
cancelButton.addEventListener("click", goBackHome);