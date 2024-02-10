const prompt = require("prompt-sync")({ sigint: true });

let charc = "SWG";
let userpoint = 0;
let computerpoint = 0;

for (let count = 0; count < 5; count++) {
    let choice = prompt("enter your choice: S, W, G");
    let result = charc.charAt(Math.floor(Math.random() * charc.length));
    console.log("Computer's choice: " + result);

    if (choice === result) {
        console.log("It's a tie! Let's try again.");
        continue;
    }

    if (choice === 'S' && result === 'G') {
        computerpoint++;
    } else if (choice === 'S' && result === 'W') {
        userpoint++;
    } else if (choice === 'G' && result === 'S') {
        userpoint++;
    } else if (choice === 'G' && result === 'W') {
        computerpoint++;
    } else if (choice === 'W' && result === 'S') {
        computerpoint++;
    } else if (choice === 'W' && result === 'G') {
        userpoint++;
    }

    console.log("Score - User: " + userpoint + " Computer: " + computerpoint);
}

console.log("Final Score - User: " + userpoint + " Computer: " + computerpoint);

if (userpoint > computerpoint) {
    console.log("YOU WIN!!");
} else if (userpoint < computerpoint) {
    console.log("YOU LOSE!!");
} else {
    console.log("DRAW!!");
}
