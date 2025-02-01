let player1 = {name:"player 1", score:"400"};
let player2 = {name:"player 2", score:"200"};
let player3 = {name:"player 3", score:"500"};
let player4 = {name:"player 4", score:"300"};
let player5 = {name:"player 5", score:"100"};

let players = [];

players.push(player1);
players.push(player2);
players.push(player3);
players.push(player4);
players.push(player5);

console.log(players);

players = sortPlayersByScore(players);

// Get the ordered list by ID
let rankingList = document.getElementById("player-ranking-list");

// Loop through the players and add them to the list
players.forEach(player => {
    let listItem = document.createElement("li");
    listItem.textContent = `${player.name} (${player.score} points)`;
    rankingList.appendChild(listItem);
});

/**
 * Function to sort players by score in descending order.
 * @param {Array} playersArray - The array of player objects.
 */
function sortPlayersByScore(playersArray) {
    return playersArray.sort((a, b) => b.score - a.score);
}