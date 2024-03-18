class Game {
    constructor(tower, enemies) {
        this.tower = tower;
        this.enemies = enemies;
        this.turns = 0;
    }

    play() {
        console.log(`Firing range is ${this.tower.firingRange}m`);

        let minimalFiringRange = this.findMinimalFiringRange();

        while (true) {
            this.turns++;

            const distances = this.enemies.map(enemy => enemy.distance - this.tower.firingRange);
            const minDistance = Math.min(...distances);
            const closestEnemyIndex = distances.indexOf(minDistance);

            if (minDistance <= 0) {
                const closestEnemy = this.enemies[closestEnemyIndex];
                console.log(`Turn ${this.turns}: Kill ${closestEnemy.name} at ${closestEnemy.distance}m`);
                this.enemies.splice(closestEnemyIndex, 1);
            }

            this.enemies.map(enemy => enemy.move());

            if (this.enemies.some(enemy => enemy.distance <= 0)) {
                console.log(`Tower LOSE in ${this.turns} turn(s)`);
                console.log(`Minimal tower's firing distance to win the game against same set of enemies: ${minimalFiringRange}m`);
                return;
            }

            if (this.enemies.length === 0) {
                console.log(`Tower WIN in ${this.turns} turn(s)`);
                return;
            }
        }
    }

    findMinimalFiringRange() {
        const minDistance = Math.min(...this.enemies.map(enemy => enemy.initialDistance));
        return minDistance;
    }
}

module.exports = Game;