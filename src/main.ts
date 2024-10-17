import Phaser from 'phaser';
import { MenuScene } from './scenes/MenuScene';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [MenuScene],
};

const game = new Phaser.Game(config);
