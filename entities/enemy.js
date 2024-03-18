class Enemy {
    constructor(name, distance, speed) {
        this.name = name;
        this.initialDistance = distance;
        this.distance = distance;
        this.speed = speed; // enemy speed is N meters in one turn
    }

    move() {
        this.distance = Math.max(0, this.distance - this.speed);
    }
} 

module.exports = Enemy;