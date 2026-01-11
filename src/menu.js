// This file will display the menu and handle the user's input.

const prompt = require('prompt-sync')({ sigint: true });
const { determineWinner, viewStats } = require('./game.js');

const showMenu = () => {
    let isRunning = true;

    while (isRunning) {
        console.log('Menu:');
        console.log('1. Play Round');
        console.log('2. View Stats');
        console.log('3. Exit\n');

        const menuChoice = prompt('Choose an Action (1-3): ').trim();
        if (menuChoice === '1') {
            const userMove = prompt('Choose a move (rock, paper, or scissors): ');
            const winner = determineWinner(userMove);
            console.log(winner);
        } else if (menuChoice === '2') {
            console.log('Current Statistics:');
            viewStats();
        } else if (menuChoice === '3') {
            isRunning = false;
        } else {
            console.log('Invalid option, try again.');
        }
        
        if (isRunning === false) {
            console.log("Final Statistics:");
            viewStats();
        }

        prompt('\nPress Enter to continue...');
        console.clear();
    }
};

module.exports = { showMenu };

/*
Menu:
1. Play Round
2. View Stats
3. Exit
*/