class Player {
    constructor(x, y) {
        this.x = x; // Player's horizontal position
        this.y = y; // Player's vertical position
        this.width = 50; // Width of the player
        this.height = 50; // Height of the player
        this.isJumping = false; // Indicates if the player is jumping
        this.gravity = 1; // Gravity effect on the player
        this.jumpStrength = 15; // Strength of the jump
        this.velocityY = 0; // Vertical velocity of the player
    }

    moveLeft() {
        this.x -= 5; // Move player left
    }

    moveRight() {
        this.x += 5; // Move player right
    }

    jump() {
        if (!this.isJumping) {
            this.isJumping = true;
            this.velocityY = -this.jumpStrength; // Set initial jump velocity
        }
    }

    update() {
        // Apply gravity
        if (this.isJumping) {
            this.velocityY += this.gravity; // Increase downward velocity
            this.y += this.velocityY; // Update player's vertical position

            // Check if player has landed
            if (this.y >= canvas.height - this.height) {
                this.y = canvas.height - this.height; // Reset to ground level
                this.isJumping = false; // Player is no longer jumping
                this.velocityY = 0; // Reset vertical velocity
            }
        }
    }

    collectCoin(coin) {
        // Logic to check if player collects a coin
        if (this.x < coin.x + coin.width &&
            this.x + this.width > coin.x &&
            this.y < coin.y + coin.height &&
            this.y + this.height > coin.y) {
            return true; // Coin collected
        }
        return false; // Coin not collected
    }
}

export default Player;