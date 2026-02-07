const connectButton = document.getElementById("connectButton");
const deviceStatus = document.getElementById("deviceStatus");

function startButtonInteract()
{
    fetch("/.netlify/functions/publish");
    
    deviceStatus.textContent = "Device connected";
}

connectButton.addEventListener("click", startButtonInteract);


//location.href = "interact.html";