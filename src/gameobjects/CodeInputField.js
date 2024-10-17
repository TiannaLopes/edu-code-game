import { GameObjects } from 'phaser';

export class CodeInputField extends GameObjects.DOMElement {
    constructor(scene, x, y, placeholder = "Enter code here") {
        super(scene, x, y, 'input', {
            type: 'text',
            placeholder: placeholder,
            style: {
                fontSize: '24px',
                width: '400px',
                height: '40px',
                color: '#000000',
                backgroundColor: '#ffffff',
                border: '2px solid #000000',
                position: 'absolute',
                zIndex: 10 // Ensure it’s above the game canvas
            }
        });
        scene.add.existing(this);
    }

    getValue() {
        return this.node.value;
    }

    clear() {
        this.node.value = '';
    }
}
