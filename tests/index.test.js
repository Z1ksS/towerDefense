const Enemy = require('../entities/enemy');
const Tower = require('../entities/tower');
const Game = require('../entities/game');

describe('Tower Defense Game', () => {
    test('Enemy moves correctly', () => {
        const enemy = new Enemy('BotA', 100, 10);
        enemy.move();
        expect(enemy.distance).toBe(90);
    });

    test('Game calculates turns correctly', () => {
        const tower = new Tower(50);
        const enemies = [new Enemy('BotA', 100, 10), new Enemy('BotA', 50, 30)];
        const game = new Game(tower, enemies);
        game.play();
        expect(game.turns).toBeGreaterThan(0);
    });

    test('Game turns must be 6', () => {
        const tower = new Tower(50);
        const enemies = [new Enemy('BotA', 100, 10), new Enemy('BotB', 50, 20), new Enemy('BotB', 30, 10)];
        const game = new Game(tower, enemies);
        game.play();
        expect(game.turns).toBe(6);
    });

    test('Minimal firing range calculation', () => {
        const tower = new Tower(50);
        const enemies = [new Enemy('BotA', 80, 10)];
        const game = new Game(tower, enemies);
        game.findMinimalFiringRange();
    });
});