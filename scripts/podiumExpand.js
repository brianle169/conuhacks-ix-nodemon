if (!scores) {
    let scores = JSON.parse(localStorage.getItem('scores')) || [];
}

function updateScores() {
    // Get the ordered list by ID
    let rankingList = document.getElementById("player-ranking-list");

    // empty the ranking list to update it
    rankingList.innerHTML = "";

    // Loop through the scores and add them to the list
    scores.forEach(item => {
        let listItem = document.createElement("li");
        // listItem.textContent = `${item.name} - ${item.score} points - ${item.attemptDate} - attempt #${item.attemptNumber}`;
        listItem.innerHTML = 
        `<table class="score-data">
            <tr>
                <td>${item.name}</td>
                <td>${item.score} points</td>
                <td style="width: 130px">${item.language}</td>
                <td>${item.attemptDate}</td>
                <td>attempt #${item.attemptNumber}</td>
            </tr>
        </table>`;
        rankingList.appendChild(listItem);
    });
}







function expandPodium() {
    let questionPanelElement = parent.window.document.querySelector(".js-question-panel");
    if (questionPanelElement) {
        questionPanelElement.style.visibility = 'hidden';
        questionPanelElement.style.display = 'none';
    }
    console.log('podium expanded!');
    updateScores();
    
}
let expandButtonElement = document.querySelector(".js-expand-button");
if (expandButtonElement) {
    expandButtonElement.addEventListener("click", expandPodium);
}
