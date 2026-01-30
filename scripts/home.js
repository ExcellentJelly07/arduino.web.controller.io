const interactButton = document.getElementById("interactButton");
const deviceStatus = document.getElementById("deviceStatus");

function startButtonInteract()
{
    //location.href = "interact.html";

    deviceStatus.textContent = "Device connected";
}

interactButton.addEventListener("click", startButtonInteract);