const Choices = {
    rock: 1,
    paper: 2,
    scissors: 3
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection)
        return ("Tie!")
    else if (playerSelection == Choices.rock && computerSelection == Choices.paper)
        return "Paper beats rock, computer wins";
    else if (playerSelection == Choices.rock && computerSelection == Choices.scissors)
        return ("Rock beats scissors, you win!");
    else if (playerSelection == Choices.paper && computerSelection == Choices.rock)
        return ("Paper beats rock, you win!");
    else if (playerSelection == Choices.paper && computerSelection == Choices.scissors)
        return ("Scissors beats paper, computer wins");
    else if (playerSelection == Choices.scissors && computerSelection == Choices.rock)
        return ("Rock beats scissors, computer wins");
    else if (playerSelection == Choices.scissors && computerSelection == Choices.paper)
        return ("Scissors beats paper, you win!");
  }