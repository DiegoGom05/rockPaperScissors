let userChoice;
let computerChoice;
let userScore = 0;
let computerScore = 0;
const res = document.querySelector('div');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

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
function match(userChoice, computerChoice){
    computerChoice = getComputerChoice();
    if(userChoice === computerChoice){
        res.innerHTML = (`you: ${userScore} - computer: ${computerScore}, it\'s a tie`);
    } else if(
        (userChoice === 'rock' && computerChoice === 'scissors') || 
        (userChoice === 'scissors' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'rock')
    ){
        if(userScore == 4){
            res.innerHTML = ('you\'ve won');
            rock.removeEventListener('click', handleClickRock);
            paper.removeEventListener('click', handleClickPaper);
            scissors.removeEventListener('click', handleClickScissors);
        } else{
            res.innerHTML = (`you: ${userScore} - computer: ${computerScore}`);
            userScore += 1;
        }
        console.log(userScore);
    } else{
        if(computerScore == 4){
            res.innerHTML = ('you\'ve lost');
            rock.removeEventListener('click', handleClickRock);
            paper.removeEventListener('click', handleClickPaper);
            scissors.removeEventListener('click', handleClickScissors);
        } else{
            res.innerHTML = (`you: ${userScore} - computer: ${computerScore}`);
            computerScore += 1;
        }
       
    }
} 
function handleClickRock() {
    userChoice = 'rock';
    computerChoice = getComputerChoice();
    match(userChoice, computerChoice);
}

function handleClickPaper() {
    userChoice = 'paper';
    computerChoice = getComputerChoice();
    match(userChoice, computerChoice);
}

function handleClickScissors() {
    userChoice = 'scissors';
    computerChoice = getComputerChoice();
    match(userChoice, computerChoice);
}

rock.addEventListener('click', handleClickRock);
paper.addEventListener('click', handleClickPaper);
scissors.addEventListener('click', handleClickScissors);

 