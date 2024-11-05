import Phaser from 'phaser';
import Score from '../classes/Score';

export default class LevelEnd extends Phaser.Scene {
  score: Score;
  constructor() {
    super('level-end');
  }

  create() {
    this.add.image(400, 300, 'score');
    this.score = new Score(this, 100, 200);
    const startButton = this.add
      .rectangle(100, 250, 50, 20, 0xffea00)
      .setOrigin(0);
    const startText = this.add
      .text(100, 250, 'Continue', { color: '#000000', fontSize: '14px' })
      .setOrigin(0);
    startButton.setInteractive({ useHandCursor: true });
    startButton.on('pointerup', () => {
      this.scene.pause('level-end');
      this.scene.start('stack');
    });
  }
}
