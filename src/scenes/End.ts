import Phaser from 'phaser';

export default class End extends Phaser.Scene {
  constructor() {
    super('end');
  }

  create() {
    this.add.image(400, 300, 'gameover');
  }
}
