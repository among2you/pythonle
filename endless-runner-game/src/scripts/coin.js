class Coin {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 20; // Width of the coin
        this.height = 20; // Height of the coin
        this.isCollected = false; // Flag to check if the coin is collected
    }

    spawn() {
        // Logic to spawn the coin at its initial position
    }

    collect(player) {
        // Check if the player collects the coin
        if (
            player.x < this.x + this.width &&
            player.x + player.width > this.x &&
            player.y < this.y + this.height &&
            player.y + player.height > this.y
        ) {
            this.isCollected = true; // Mark the coin as collected
            player.score += 1; // Increment the player's score
        }
    }

    draw(context) {
        if (!this.isCollected) {
            context.fillStyle = 'gold'; // Color of the coin
            context.beginPath();
            context.arc(this.x, this.y, this.width / 2, 0, Math.PI * 2);
            context.fill(); // Draw the coin
        }
    }
}

export default Coin;