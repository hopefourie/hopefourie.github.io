import Phaser from 'phaser';

import Start from './scenes/Start';
import Preloader from './scenes/Preloader';
import End from './scenes/End';
import Stack from './scenes/Stack';
import LevelEnd from './scenes/LevelEnd';

const config = {
  type: Phaser.AUTO,
  parent: 'app',
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 100 },
    },
  },
  scene: [Preloader, Start, Stack, LevelEnd, End],
};

export default new Phaser.Game(config);
