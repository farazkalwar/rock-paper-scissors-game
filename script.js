const results = ["Rock ✊", "Paper ✋", "Scissors ✌"]
const resultLabel = document.querySelector('.result-label')
const p1Card = document.querySelector('#p1-card')
const p2Card = document.querySelector('#p2-card')
const p1Score = document.querySelector('#p1-score')
const p2Score = document.querySelector('#p2-score')
const p1Result = document.querySelector('#player-1-result')
const p2Result = document.querySelector('#player-2-result')
const replayBtn = document.querySelector('#btn-replay')
const btn1 = document.querySelector('#btn-1')
const btn2 = document.querySelector('#btn-2')

let score1 = 0
let score2 = 0

function getScore(){
    if(resultLabel.textContent === 'Player 1 Wins') score1++
    else if(resultLabel.textContent === 'Player 2 Wins') score2++
    
    p1Score.textContent = score1
    p2Score.textContent = score2
}

function buttonClicked(btnId) {
    replayBtn.disabled = ""

    let randomItem = results[Math.floor(Math.random() * results.length)];
    const btn = document.getElementById(btnId)
    let playerResulLabel = btn.parentElement.querySelector('.player-label');
    playerResulLabel.textContent = ""
    playerResulLabel.textContent = randomItem

    winner()
    paintWinner()
    getScore()
    btn.disabled = "disabled"
}

function replayClicked() {
    btn1.disabled = ""
    btn2.disabled = ""

    p1Card.style.backgroundColor = '#00cc44';
    p2Card.style.backgroundColor = '#ff2424';

    p1Result.textContent = ""
    p2Result.textContent = ""
    resultLabel.textContent = ""
}

function winner() {
    const p1 = document.querySelector('#player-1-result').textContent
    const p2 = document.querySelector('#player-2-result').textContent

    if (p1 === "" || p2 === "") return

    if (p1 === p2) resultLabel.textContent = "Draw"
    else if (p1 === 'Rock ✊') {
        p2 === 'Paper ✋' ? resultLabel.textContent = 'Player 2 Wins' : resultLabel.textContent = 'Player 1 Wins'
    }
    else if (p1 === 'Scissors ✌') {
        p2 === 'Rock ✊' ? resultLabel.textContent = 'Player 2 Wins' : resultLabel.textContent = 'Player 1 Wins'
    }
    else if (p1 === 'Paper ✋') {
        p2 === 'Scissors ✌' ? resultLabel.textContent = 'Player 2 Wins' : resultLabel.textContent = 'Player 1 Wins'
    }
}

function paintWinner(){
    if (resultLabel.textContent === "") return

    if (resultLabel.textContent === "Player 1 Wins")    p1Card.style.backgroundColor = '#e6b800';
    else if (resultLabel.textContent === "Player 2 Wins")   p2Card.style.backgroundColor = '#e6b800';
    else{
        p1Card.style.backgroundColor = '#6c757d';
        p2Card.style.backgroundColor = '#6c757d';
    }
}