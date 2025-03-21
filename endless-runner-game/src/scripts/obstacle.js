class Obstacle {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = 5; // Speed at which the obstacle moves
    }

    update() {
        this.x -= this.speed; // Move the obstacle to the left
    }

    draw(context) {
        context.fillStyle = 'red'; // Color of the obstacle
        context.fillRect(this.x, this.y, this.width, this.height); // Draw the obstacle
    }

    isColliding(player) {
        return (
            player.x < this.x + this.width &&
            player.x + player.width > this.x &&
            player.y < this.y + this.height &&
            player.y + player.height > this.y
        ); // Check for collision with the player
    }

    static spawnObstacle() {
        const width = 50; // Width of the obstacle
        const height = 50; // Height of the obstacle
        const x = canvas.width; // Start off-screen
        const y = canvas.height - height; // Position at the bottom of the canvas
        return new Obstacle(x, y, width, height);
    }
}

export default Obstacle;