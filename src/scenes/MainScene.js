export class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene');
  }

  preload() {
    // Load any assets needed for your game (images, sounds, etc.)
  }

  create() {
    // Add background or initial instructions
    this.add.text(100, 50, 'Welcome to the Educational Coding Game!', { fontSize: '32px', color: '#ffffff' });

    // Placeholder for coding challenges or game instructions
    this.add.text(100, 150, 'Start by solving the first coding puzzle!', { fontSize: '24px', color: '#ffffff' });

    // Add buttons, character sprites, or other game elements here

    // Example button to start a challenge
    const startButton = this.add.text(200, 300, 'Start Coding Challenge', { fontSize: '24px', color: '#ff0000' })
      .setInteractive()
      .on('pointerdown', () => {
        this.scene.start('CodingChallengeScene');  // Move to the coding challenge scene
      });
  }

  update() {
    // Handle any dynamic changes or animations
  }
}
