import { GameObjects } from 'phaser';

export class ProgressBar extends GameObjects.Graphics {
    constructor(scene, x, y, width = 200, height = 20) {
        super(scene);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        // Initialize the progress bar
        this.fillStyle(0xffffff, 1);
        this.fillRect(x, y, width, height);

        scene.add.existing(this);
    }

    setProgress(percentage) {
        // Clear the previous bar and redraw it based on percentage
        this.clear();
        this.fillStyle(0xffffff, 1);
        this.fillRect(this.x, this.y, this.width, this.height);

        this.fillStyle(0x00ff00, 1);
        this.fillRect(this.x, this.y, this.width * percentage, this.height);
    }
}
