import Phaser, { GameObjects } from 'phaser';
import { Character } from '../classes/Character';
import { Faller } from '../classes/Faller';
import { Stacker } from '../classes/Stacker';

export default class Stack extends Phaser.Scene {
  rat: Character | undefined;
  ickBar: GameObjects.Rectangle;
  constructor() {
    super('stack');
  }

  create() {
    this.add.image(400, 300, 'test-background').setScale(1/2);
    this.rat = new Character(this, 400, 550, 'test-sprite');

    const paperStack = this.physics.add.group({ allowGravity: true });
    const fallingPapers = this.physics.add.group({ allowGravity: true });
    fallingPapers.add(new Faller(this, 150, -100, 'test-paper', 1, 20), true);

    this.physics.add.overlap(this.rat, fallingPapers, (rat, paper)=>{ paper.destroy()}, undefined, this)

    const backBar = this.add.rectangle(100, 100, 150, 20, 0x000000).setOrigin(0);
    this.ickBar = this.add.rectangle(103, 103, 100, 14, 0xffea00).setOrigin(0);
  }

  update() {
    this.rat?.update();
  }
}
