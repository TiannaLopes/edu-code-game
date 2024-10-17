// src/scenes/MenuScene.ts
import Phaser from 'phaser';

export class MenuScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MenuScene' });
    }

    preload() {
        // Load any assets for the menu here
    }

    create() {
        // Display some text on the screen for the menu
        this.add.text(100, 100, 'Educational Coding Game Menu', { font: '24px Arial', color: '#fff' });

        // Start the game when a key is pressed
     this.input?.keyboard?.on('keydown-SPACE', () => {
    this.scene.start('GameScene');
});

    }
}
