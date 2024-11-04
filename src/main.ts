import Phaser from 'phaser';

import Start from './scenes/Start';
import Preloader from './scenes/Preloader';
import End from './scenes/End';
import Stack from './scenes/Stack';

const config = {
  type: Phaser.AUTO,
  parent: 'app',
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: [Preloader, Start, Stack, End],
};

export default new Phaser.Game(config);
