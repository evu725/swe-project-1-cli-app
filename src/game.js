const game = [
    {
        wins: 0,
        losses: 0,
        ties: 0
    }
];

const computerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

const determineWinner = (userMove) => {
    const computerMove = computerChoice();

    console.log(`You chose: ${userMove}`);
    console.log(`Computer chose: ${computerMove}`);

    if (userMove === computerMove) {
        game[0].ties++;
        return 'It is a tie!';
    } else if (
        (userMove === 'rock' && computerMove === 'scissors') ||
        (userMove === 'paper' && computerMove === 'rock') ||
        (userMove === 'scissors' && computerMove === 'paper')
    ) {
        game[0].wins++;
        return `${userMove} beats ${computerMove}! You win!`;
    } else {
        game[0].losses++;
        return `${computerMove} beats ${userMove}! You win!`;
    }
}

const viewStats = () => {
    console.log(`Wins: ${game[0].wins}`);
    console.log(`Losses: ${game[0].losses}`);
    console.log(`Ties: ${game[0].ties}`);
}

module.exports = { determineWinner, viewStats };
