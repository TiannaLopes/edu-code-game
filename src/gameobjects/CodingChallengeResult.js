import { GameObjects } from 'phaser';

export class CodingChallengeResult extends GameObjects.Text {
    constructor(scene, x, y, resultText, isCorrect) {
        const color = isCorrect ? '#00ff00' : '#ff0000';
        super(scene, x, y, resultText, {
            fontSize: '32px',
            color: color,
            backgroundColor: '#000000',
            padding: { x: 20, y: 20 }
        });

        scene.add.existing(this);

        // Optional: Automatically fade out after a delay
        scene.time.delayedCall(2000, () => {
            this.destroy();
        });
    }
}
