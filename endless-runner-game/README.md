# Endless Runner Game

## Overview
Endless Runner Game is a simple yet engaging game where players run, collect coins, and dodge obstacles. The game is designed to be fun and challenging, providing an endless experience as players try to achieve the highest score possible.

## Project Structure
The project is organized as follows:

```
endless-runner-game
├── assets
│   ├── audio          # Contains audio files for background music and sound effects
│   ├── images         # Stores image files for game assets (player, coins, obstacles)
│   └── fonts          # Holds font files for any text displayed in the game
├── src
│   ├── index.html     # Main HTML file that sets up the game canvas
│   ├── styles
│   │   └── style.css  # Styles for the game (layout, colors, animations)
│   ├── scripts
│   │   ├── game.js    # Main game logic (initialization, game loop, rendering)
│   │   ├── player.js   # Class representing the player character
│   │   ├── coin.js     # Class representing collectible coins
│   │   └── obstacle.js  # Class representing obstacles
└── README.md          # Documentation for the project
```

## Features
- **Endless Gameplay**: The game continues until the player collides with an obstacle.
- **Coin Collection**: Players can collect coins to increase their score.
- **Dynamic Obstacles**: Obstacles spawn randomly, increasing the challenge as the game progresses.
- **Audio Effects**: Background music and sound effects enhance the gaming experience.

## Getting Started
To run the game locally, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd endless-runner-game
   ```

3. Open `src/index.html` in your web browser to start playing.

## Future Improvements
- Add more levels with varying difficulty.
- Implement a scoring system with leaderboards.
- Include power-ups for the player.

Enjoy the game and happy running!