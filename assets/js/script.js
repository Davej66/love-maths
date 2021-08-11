
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button"); 

    for(let button of buttons){
        button.addEventListener("click, function(){
            if(this.getAttribute("data-type") === "submit"){
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
                
            }
        })
    }
})

/**
 * The main game "Loop", called when the script is first loaded
 * and after the user's anser has been proceesed
 */
function runGame() {
    let num1 = Math.floor(Math.random()*25)+1;
    let num2 = Math.floor(Math.random()*25)+1;
}

function checkAnswer() {

}

function checkCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongScore() {

}

function displayAdditionQuestion() {

}

function displaySuntractionQuestion() {

}

function displayMultiplyQuestion() {

}

runGame()