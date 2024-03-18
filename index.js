const Enemy = require('./entities/enemy');
const Tower = require('./entities/tower');
const Game = require('./entities/game');

const readline = require('readline');

let enemiesInput = '';
let towerFiringRange = '';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function startInput() {
    rl.question('Enter tower firing range: ', input => {
        if (input.trim().length === 0 || isNaN(input.trim())) {
            console.log("Please enter a numeric value for the firing range.");
            startInput();
        } else {
            towerFiringRange = parseFloat(input.trim());

            rl.setPrompt('Enter enemies data (name distance speed), separate each enemy by pressing Enter, type "done" to finish:\n');
            rl.prompt();
        }
    });
}

rl.on('line', input => {

    if (input.trim().toLowerCase() === 'done') {
        rl.close();
    } else {
        const parts = input.trim().split(' ');

        if (parts.length !== 3) {
            console.log('\nInvalid input format. Please enter enemy data in the format: name distance speed\n');
            rl.prompt();
            return;
        }

        const [name, distance, speed] = parts;

        if (isNaN(distance) || isNaN(speed)) {
            console.log('\nDistance and speed must be numeric values.\n');
            rl.prompt();
            return;
        }

        enemiesInput += input.trim() + '\n';
    }
});

rl.on('close', () => {
    const tower = new Tower(parseInt(towerFiringRange));
    const enemies = [];

    const lines = enemiesInput.trim().split('\n');

    for (const line of lines) {
        const [name, distance, speed] = line.trim().split(' ');
        enemies.push(new Enemy(name, parseInt(distance), parseInt(speed)));
    }

    const game = new Game(tower, enemies);
    game.play();
});

startInput();