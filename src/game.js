const game = [
    {
        wins: 0,
        losses: 0,
        ties: 0
    }
];

const choices = ['rock', 'paper', 'scissors'];

const computerChoice = () => {
    return choices[Math.floor(Math.random() * choices.length)];
}

const determineWinner = (userMove) => {
    const computerMove = computerChoice();

    console.log(`You chose: ${userMove}`);
    console.log(`Computer chose: ${computerMove}`);

    if (!choices.includes(userMove)) {
        return `Invalid choice! Please choose rock, paper, or scissors.\n`;
    } else if(userMove === computerMove) {
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
        return `${computerMove} beats ${userMove}! You lose!`;
    }
}

const viewStats = () => {
    console.log(`Wins: ${game[0].wins}`);
    console.log(`Losses: ${game[0].losses}`);
    console.log(`Ties: ${game[0].ties}`);

    const total = game.map(g => g.wins + g.losses + g.ties);
    const totalGames = total[0];

    console.log(`Total Games: ${totalGames}`);

    const winRates = game.map(g => (g.wins / (g.wins + g.losses + g.ties)) * 100);
    const winRate = Math.floor(winRates[0]);
    console.log(`Win Rate: ${winRate}%`);
}

module.exports = { determineWinner, viewStats };
