1. Share one aspect of building this project you found challenging and how you overcame it.

One aspect of building this project that I found challenging was figuring out how to get started. To overcome this, I referenced the case study on the command line task manager for what my project should look like. I began with `menu.js`, writing a simple program that asks the user for input and prints a result. From there on, I implemented the menu interface, allowing the user to select options such as playing a round, viewing stats, and exiting the program entirely. Next, I worked on `game.js`, creating three functions:
- `computerChoice` to randomly select the computer's choice
- `determineWinner` to compare the user’s choice and the computer’s choice and determine the result (win, lose, or tie)
- `viewStats` to calculate and display useful statistics for the games played.

Lastly, I created `index.js` as the main entry point of the application and connected all the files so that the program would work together.


2. Share one technical concept that you gained a deeper understanding of through building this project. Explain that concept in simple terms and explain how it is used in your project.

One technical concept I gained a deeper understanding of through building this projects is **modules**. A module is a file that contains code that can be imported into other code files. In this project, there are three files: `game.js`, `index.js`, `menu.js`. 
- The `game.js` file contains the core game functionality, that includes two functions: `determineWinner` and `viewStats`.
- The `menu.js` file represents the menu window where displays menu, accept user input, and call functions . It imports the functions from `game.js`, which allows it to call `determineWinner` and `viewStats`. It also defines its own function, `showMenu`, and exports it so other files can use it.
- Lastly, `index.js` serves as the entry point of the project. It imports `showMenu` from `menu.js` and calls it to display the menu.

From this structure, modules help maintain code better because each file has a clear purpose which improves organization and reduces errors.