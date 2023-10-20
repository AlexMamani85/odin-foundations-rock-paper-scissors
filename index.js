console.log("Welcome to Rock, Paper, Scissors Game!!!");

function getComputerChoice() {
    opciones = ['rock', 'paper', 'scissors'];
    return opciones[Math.floor(Math.random() * opciones.length)];
}

function playRound(playerSelection, computerSelection) {
    console.log('playerSelection:  ', playerSelection);
    console.log('computerSelection:  ', computerSelection);
    if(playerSelection =='rock' &&computerSelection =='paper'){
        return ['You Lose this one! Paper beats Rock',0];
    } else if (playerSelection =='paper' &&computerSelection =='rock') {
        return ['You Win! Paper beats Rock',1];
    } else if(playerSelection =='scissors' &&computerSelection =='paper'){
        return ['You Win! Scissors beats Paper',1];
    } else if (playerSelection =='paper' &&computerSelection =='scissors') {
        return ['You Lose this one! Paper beats Scissors', 0];
    } else if(playerSelection =='rock' &&computerSelection =='scissors'){
        return ['You Win! Rock beats Scissors', 1];
    } else if (playerSelection =='scissors' &&computerSelection =='rock') {
        return ['You Lose this one! Scissors beats Rock', 0];
    }  else if (playerSelection == computerSelection) {
        return ['Tie!', 0];
    } else {
        return ['Wrong Option, only correct options Rock, Paper or Scissors', 0];
    }
}

let nroDeJuegos=0;
let nroDeJuegosGANADOS=0;
let resultado = document.getElementById("resultado");
document.addEventListener("DOMContentLoaded", function() {
    // Your code here
    let resultado = document.getElementById("resultado");
    let resultadoFinal = document.getElementById("resultadoFinal");
    let playerSelection;
    
    function procesoNormal(playerSelection) {
        let computerSelection = getComputerChoice();
        [resultado.textContent, gano] = playRound(playerSelection, computerSelection);
        nroDeJuegosGANADOS = gano + nroDeJuegosGANADOS;
        nroDeJuegos++;
        console.log("nroDeJuegos: ", nroDeJuegos);
        if(nroDeJuegos==5) {
            resultadoFinal.textContent = nroDeJuegosGANADOS>2 ? "You Win the Game" : "You Lose the Game";
            
        } else if(nroDeJuegos>6) {
            resultadoFinal.textContent = ""
            nroDeJuegos=0;
        }
    }

    document.getElementById("rock").addEventListener("click", function(){
        playerSelection = "rock";        
        procesoNormal(playerSelection);
    });

    document.getElementById("paper").addEventListener("click", function(){
        playerSelection = "paper";        
        procesoNormal(playerSelection);
    });

    document.getElementById("scissors").addEventListener("click", function(){
        playerSelection = "scissors";
        procesoNormal(playerSelection);
    });

});