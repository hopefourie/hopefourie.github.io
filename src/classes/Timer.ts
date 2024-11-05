import GameStore from '../stores/GameStore';
export default class Timer {
  timedEvent: Phaser.Time.TimerEvent;
  text: Phaser.GameObjects.Text;
  constructor(scene: Phaser.Scene, x: number, y: number, onEnd: () => void) {
    this.timedEvent = scene.time.delayedCall(
      10000,
      () => {
        onEnd();
      },
      [],
      this
    );
    this.text = scene.add.text(x, y, '00:30', {
      fontFamily: 'Arial',
      fontSize: '32px',
      color: '#ffffff',
    });
  }

  update() {
    const seconds = this.timedEvent.getOverallRemainingSeconds().toPrecision(2);
    this.text.setText(`00:${seconds}`);
  }
}
