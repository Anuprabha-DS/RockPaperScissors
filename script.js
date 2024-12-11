let player_score = 0
let computer_score = 0 

const emojis = {
    'rock': '👊',
    'paper': '✋',
    'scissors': '✌️'
};

const MAX_SCORE = Number(prompt("Enter the maximum score: "))

function updateHands(player,computer){
    document.getElementById('player-play').textContent = emojis[player] 
    document.getElementById('computer-play').textContent = emojis[computer] 
    document.getElementById('playDiv').style.opacity = 1;

}

function Score(playerScore,computerScore){
   
    document.getElementById('player-score').innerText = playerScore;
    document.getElementById('computer-score').innerText = computerScore;

    if (player_score === MAX_SCORE || computer_score === MAX_SCORE) {
        const winner = player_score === MAX_SCORE ? "You" : "The computer";
        setTimeout(() => {
            alert(`${winner} got ${MAX_SCORE} points! Please Restarting...`);
            restart();
        });
    }
}

function updateScore(player,computer){
    // Rock beats Scissors
    // Scissors beats Paper
    // Paper beats Rock
    document.getElementById('display').style.opacity = 1;
    if(player == 'rock' & computer=='scissors' || player == 'scissors' & computer=='paper' || player == 'paper' & computer=='rock' ){
        player_score = player_score+1 
        // document.getElementById("player-score").innerText = player_score
        Score(player_score,computer_score)
        document.getElementById("display-result").textContent = ` You win! ${player} beats ${computer}`

        return player_score}
    else if(player == 'rock' & computer=='rock' || player == 'scissors' & computer=='scissors'|| player == 'paper' & computer=='paper')
    {
        document.getElementById("display-result").textContent = ` It's a draw! Both choose ${player}`
    }
    else
    {
        computer_score++
        Score(player_score,computer_score)
        // document.getElementById("computer-score").innerText = computer_score
        document.getElementById("display-result").textContent = ` You lose! ${computer} beats ${player}`

        return computer_score}
    
}


function computerchoice(arr){
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function playGame(option){

    const array=["rock","paper","scissors"]
    const computer_hand = computerchoice(array)
    updateHands(option,computer_hand)
    updateScore(option,computer_hand)
   
}

function restart(){
    player_score=0
    computer_score=0
    Score(player_score,computer_score)
    document.getElementById('display').style.opacity = 0;
    document.getElementById('playDiv').style.opacity = 0;

}