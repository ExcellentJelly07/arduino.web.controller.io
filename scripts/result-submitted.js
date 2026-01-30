const homeButton = document.getElementById("homeButton");

function goBackHome() 
{
    location.href = "home.html";
}

homeButton.addEventListener("click", goBackHome);