const submitVoteButton = document.getElementById("submitVoteButton");

function submit() 
{
    location.href = "result-submitted.html";
}

submitVoteButton.addEventListener("click", submit);