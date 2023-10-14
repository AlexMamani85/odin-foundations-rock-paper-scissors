console.log("Bienvenidos")
function getComputerChoice() {
    opciones = ['rock', 'paper', 'scissors'];
    return opciones[Math.floor(Math.random() * opciones.length)];
}

playerSelection=prompt('Rock, Paper or Scissors???');
playerSelection=playerSelection.toLowerCase();
console.log('playerSelection:  ', playerSelection);

computerSelection = getComputerChoice();
console.log('computerSelection:  ', computerSelection);

function playRound(playerSelection, computerSelection) {

    if(playerSelection =='rock' &&computerSelection =='paper'){
        return 'You Lose! Paper beats Rock';
    } else if (playerSelection =='paper' &&computerSelection =='rock') {
        return 'You Win! Paper beats Rock';
    } else if(playerSelection =='scissors' &&computerSelection =='paper'){
        return 'You Win! Scissors beats Paper';
    } else if (playerSelection =='paper' &&computerSelection =='scissors') {
        return 'You Lose! Paper beats Scissors';
    } else if(playerSelection =='rock' &&computerSelection =='scissors'){
        return 'You Win! Rock beats Scissors';
    } else if (playerSelection =='scissors' &&computerSelection =='rock') {
        return 'You Lose! Scissors beats Rock';
    }  else if (playerSelection == computerSelection) {
        console.log('playerSelection:  ', playerSelection);
        console.log('computerSelection:  ', computerSelection);

        return 'Tie!';
    } else {
        return 'Wrong Option, only correct options Rock, Paper or Scissors';
    }   

}

console.log(playRound(playerSelection, computerSelection));



