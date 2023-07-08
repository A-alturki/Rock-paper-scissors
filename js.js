function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);

    if(num ==0 ){
        return "Rock"
    }
    else if(num == 1){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if(playerSelection == computerSelection){
        return `both ${playerSelection}! draw`;
    }
    else if(playerSelection == "rock" && computerSelection == "paper"){
        return "You lose! paper beats rock";
    }
    else if(playerSelection == "rock" && computerSelection == "scissors"){
        return "You win! rock beats scissors";
    }
    else if(playerSelection == "paper" && computerSelection == "rock"){
        return "You win! paper beats rock";
    }
    else if(playerSelection == "paper" && computerSelection == "scissors"){
        return "You lose! scissors beats paper";
    }
    else if(playerSelection == "scissors" && computerSelection == "paper"){
        return "You win! scissors beats paper";
    }
    else if(playerSelection == "scissors" && computerSelection == "rock"){
        return "You lose! rock beats scissors";
    }
}

    let choice = document.querySelectorAll(".btn");
    choice.forEach((button) =>{
        button.addEventListener("click", function(e){
            if (computerWin < 5 && playerWin < 5){
            let p = button.textContent;
            console.log(p);
            let pc = getComputerChoice();

            let choiceLeft = document.querySelector(".show-choice-left");
            choiceLeft.textContent = `you chose: ${p}`;

            let choiceRight = document.querySelector(".show-choice-right");
            choiceRight.textContent = `computer chose: ${pc}`;

            console.log(pc);
            let round  = playRound(p, pc);

            console.log(round);
            let verdict = document.querySelector(".choice");
            verdict.textContent = round;

            if(round.includes(win)){
                playerWin++;
            }
            else if(round.includes(lose)){
                computerWin++;
            }
            let roundText = document.querySelector(".round");
            console.log(`score is ${playerWin} player vs ${computerWin} pc`);
            roundText.textContent = `score is ${playerWin} player vs ${computerWin} pc`;

            let txt = "";
            if(playerWin == 5){
                txt = "Congrats! You won!!";
            }
            else if (computerWin == 5){
                txt = "rip bozo lost to pc";
            }
            let game = document.querySelector(".game");
            game.textContent = txt;

            return round;
        }
            
        })
    })
    

let win = 'win';
let lose = 'lose'
playerWin = 0;
computerWin = 0;
