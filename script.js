let userChoice;
let computerChoice;
let userScore = 0;
let computerScore = 0;
let loop = true;
function getPlayerChoice(){
    let choice  = prompt('choose either rock paper or scissors');
    while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
        choice = prompt('You didn\'t choose rock, paper, or scissors. Please choose again:').toLowerCase();
    }
    return choice;
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
function match(){
    if(userChoice === computerChoice){
        console.log('its a tie');
    } else if(
        (userChoice === 'rock' && computerChoice === 'scissors') || 
        (userChoice === 'scissors' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'rock')
    ){
        console.log('you win');
        userScore += 1;
    } else{
        console.log('you lose');
        computerScore += 1;
    }
}
function game(loop){
    while(loop == true){
        userChoice = getPlayerChoice();
        console.log(userChoice);
        computerChoice = getComputerChoice();
        console.log(computerChoice);
        match();
        if(computerScore === 5){
            console.log('you\'ve lost');
            loop = false;
        }
        else if(userScore === 5){
            console.log('you\'ve won');
            loop = false;
        }
        
    }
 
}
game(loop);