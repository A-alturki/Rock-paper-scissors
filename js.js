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


function game(){
    playerWin = 0;
    computerWin = 0;

    while(computerWin < 5 && playerWin < 5){
        let player = window.prompt("pick your poison...");
        player = player.toLowerCase();
        while(player != "rock" && player != "paper" && player != "scissors"){
            player = window.prompt("pick again...");
            player = player.toLowerCase();
        }


        let pc = getComputerChoice();
        console.log(pc)
        let round  = playRound(player, pc);
        let win = 'win';
        let lose = 'lose'

        if(round.includes(win)){
            playerWin++;
        }
        else if(round.includes(lose)){
            computerWin++;
        }

        console.log(`score is ${playerWin} player vs ${computerWin} pc`);
    }

    if(playerWin == 5){
        console.log("Congrats! You won!!")
    }
    else{
        console.log("rip bozo lost to pc")
    }

    console.log(`score is ${playerWin} player vs ${computerWin} pc`);
    
}

game();