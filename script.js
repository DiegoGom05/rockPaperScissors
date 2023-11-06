let userChoice = prompt('choose either rock paper or scissors');
let computerChoice;

while (userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors') {
    userChoice = prompt('You didn\'t choose rock, paper, or scissors. Please choose again:').toLowerCase();
}
function getComputerChoice(){
    let rand = Math.round(Math.random()*2);
     
    switch(rand){
        case 0:
            return 'rock';
            break;
        case 1: 
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    } 
}
function match(playerSelection, computerSelection){
    if(userChoice === computerChoice){
        console.log('its a tie');
    } else if(
        (userChoice === 'rock' && computerChoice === 'scissors') || 
        (userChoice === 'scissors' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'rock')
    ){
        console.log('you win');
    } else{
        console.log('you lose');
    }
}

computerChoice = getComputerChoice();
match(userChoice, computerChoice);