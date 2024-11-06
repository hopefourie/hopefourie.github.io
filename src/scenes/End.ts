import Phaser from 'phaser';
import Score from '../classes/Score';
import GameStore from '../stores/GameStore';

export default class End extends Phaser.Scene {
  score: Score;
  constructor() {
    super('end');
  }

  create() {
    this.add.image(400, 300, 'gameover');
    this.score = new Score(this, 250, 100);
    const text = this.add.text(
      250,
      200,
      `Oh no!! It looks like your contract proposal included\ntoo many loopholes and bad proposals.\n\nWe know what we’re worth - help Scabby\ntry again to reach a Tentative Agreement. `,
      {
        stroke: '#000000',
        strokeThickness: 4,
      }
    );
    const button = this.add.image(380, 350, 'playagain').setTint(0xffea00);
    button.scale = 0.4;

    button.setInteractive({ useHandCursor: true });
    button.on('pointerup', () => {
      this.scene.pause('gameover');
      this.scene.start('stack');
      GameStore.getState().reset();
    });
  }
}
