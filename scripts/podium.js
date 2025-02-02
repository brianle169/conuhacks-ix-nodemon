
let scores = JSON.parse(localStorage.getItem('scores')) || [];
let numberOfAttempts = 1;
// let score1 = {name:"guest", score:"400", attemptNumber: 1, attemptDate: new Date(2025, 2, 1, 9, 56, 30, 0)};
scores.push({name:"guest", score:"400", language: "c++",attemptNumber: 5, attemptDate: new Date(2025, 2, 1, 9, 56, 30, 0)});
scores.push({name:"guest", score:"370", language: "java",attemptNumber: 3, attemptDate: new Date(2025, 2, 1, 10, 31, 30, 0)});
scores.push({name:"guest", score:"350", language: "python",attemptNumber: 4, attemptDate: new Date(2025, 2, 1, 10, 31, 30, 0)});
scores.push({name:"guest", score:"330", language: "c#",attemptNumber: 1, attemptDate: new Date(2025, 2, 1, 10, 31, 30, 0)});
scores.push({name:"guest", score:"300", language: "javascript",attemptNumber: 2, attemptDate: new Date(2025, 2, 1, 10, 31, 30, 0)});

updateScoresSmallDisplay();

/**
 * Function to update the content of the podium when it's not expanded.
 */
function updateScoresSmallDisplay() {
    // Get the ordered list by ID
    let rankingList = document.getElementById("player-ranking-list");

    // Loop through the scores and add them to the list
    scores.forEach(item => {
        let listItem = document.createElement("li");
        // listItem.textContent = `${item.name} - ${item.score} points - ${item.attemptDate} - attempt #${item.attemptNumber}`;
        listItem.innerHTML = 
        `<table class="score-data">
            <tr>
                <td>${item.name}</td>
                <td>${item.score} points</td>
            </tr>
        </table>`;
        rankingList.appendChild(listItem);
    });
}


/**
 * Function to sort players by score in descending order.
 * @param {Array} playersArray - The array of player objects.
 */
function sortPlayersByScore(playersArray) {
    return playersArray.sort((a, b) => b.score - a.score);
}