

function expandPodium() {
    let questionPanelElement = parent.window.document.querySelector(".js-question-panel");
    if (questionPanelElement) {
        questionPanelElement.style.visibility = 'hidden';
        questionPanelElement.style.display = 'none';
    }
    console.log('podium expanded!');
    
    
}
let expandButtonElement = document.querySelector(".js-expand-button");
if (expandButtonElement) {
    expandButtonElement.addEventListener("click", expandPodium);
}
