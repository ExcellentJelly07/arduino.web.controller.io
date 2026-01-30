const connectButton = document.getElementById("connectButton");
const deviceStatus = document.getElementById("deviceStatus");

function startButtonInteract()
{
    fetch("http://172.20.10.14/on");

    deviceStatus.textContent = "Device connected";
}

connectButton.addEventListener("click", startButtonInteract);


//location.href = "interact.html";