# Tower Defense Game

This project implements a simple tower defense console game where the goal is to defend a tower against enemy units. The game is implemented in JavaScript and can be run on Node.js.

## Known Problems

There can be combination of enemy sets, that couldn't be defeated even if the value for firing range is set to minimal. The solution for this is to output one more type of loss.

## Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/Z1ksS/towerDefense.git
```

2. Navigate to the project directory:

```bash 
cd towerDefense
```

3. Install the dependencies:

```bash
npm install
```

## Usage

To play the game you need to follow next steps:

1. Run the game script:

```bash
node index.js
```

OR

```bash
npm start
```

- Follow the instruction to input the tower's firing range and the data for each enemy unit.
- Once all inputs are provided, the game will simulate the gameplay and display the outcome (whether the tower wins or loses).

## Testing

For creating unit tests for this project were used JEST library.

To run tests, execute next command:

```bash
npm test
```
