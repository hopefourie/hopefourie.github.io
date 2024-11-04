import Phaser, { GameObjects } from 'phaser';
import { Character } from '../classes/Character';

export default class Stack extends Phaser.Scene {
  rat: Character | undefined;
  ickBar: GameObjects.Rectangle;

  constructor() {
    super('stack');
  }

  create() {
    this.add.image(400, 300, 'test-background');
    this.rat = new Character(this, 400, 550, 'test-sprite');

    const backBar = this.add.rectangle(100, 100, 150, 20, 0x000000).setOrigin(0);
    this.ickBar = this.add.rectangle(103, 103, 100, 14, 0xffea00).setOrigin(0);
  }

  update() {
    this.rat?.update();
  }
}
