const interactButton = document.getElementById("interactButton");
const deviceStatus = document.getElementById("deviceStatus");

function startButtonInteract()
{
    fetch("http://172.20.10.14/on");

    deviceStatus.textContent = "Device connected";
}

interactButton.addEventListener("click", startButtonInteract);


//location.href = "interact.html";