import { GameObjects } from 'phaser';

export class InteractiveHint extends GameObjects.Container {
    constructor(scene, x, y, hintText) {
        super(scene, x, y);

        // Hint text, initially hidden
        const hint = new GameObjects.Text(scene, 0, 0, hintText, {
            fontSize: '20px',
            color: '#ffffff',
            backgroundColor: '#333333',
            padding: { x: 10, y: 10 },
            wordWrap: { width: 300 }
        });
        hint.setAlpha(0);  // Hidden by default

        // Hint button
        const hintButton = new GameObjects.Text(scene, 0, 50, 'Show Hint', {
            fontSize: '24px',
            color: '#ffcc00',
            backgroundColor: '#222222',
            padding: { x: 10, y: 10 }
        }).setInteractive();

        // Toggle hint visibility
        hintButton.on('pointerdown', () => {
            const newAlpha = hint.alpha === 0 ? 1 : 0;
            scene.tweens.add({
                targets: hint,
                alpha: newAlpha,
                duration: 500
            });
        });

        // Add both the button and hint to the container
        this.add([hint, hintButton]);
        scene.add.existing(this);
    }
}
