import { GameObjects } from 'phaser';

export class CodeSnippet extends GameObjects.Text {
    constructor(scene, x, y, codeText) {
        super(scene, x, y, codeText, {
            fontSize: '18px',
            fontFamily: 'monospace',
            color: '#00ff00',
            backgroundColor: '#000000',
            padding: { x: 10, y: 10 },
            wordWrap: { width: 600, useAdvancedWrap: true }
        });
        
        scene.add.existing(this);
    }

    updateCode(newCode) {
        this.setText(newCode);
    }
}
